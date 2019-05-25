<?php

namespace app\h5\controller;

use app\h5\model\enum\H5PhotoEnum;
use app\h5\model\H5Photo;
use app\h5\model\H5PhotoVote;
use app\h5\model\H5User;
use think\Controller;

/**
 * Created by PhpStorm.
 * User=>yinchuanjiang
 * Date=>2019/5/20
 * Time=>下午1:47
 */
class Index extends Controller
{
    protected $appid = 'wxac93997bb1f50b77';
    protected $secret = '7dc017eedadeb7d841ebb9b1192d4aea';

    //h5活动首页
    public function index()
    {
        $appid = $this->appid;
        $secret = $this->secret;
        $code = input('code');
        $data = json_decode(file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$secret&code=$code&grant_type=authorization_code"), true);
        if (!isset($data['openid']))
            abort(404);
        $openid = $data['openid'];
        $this->saveUser($openid);
        return $this->redirect('/h5/index/home?openid=' . $openid);
    }

    private function saveUser($openid, $avatar = null, $nickname = null)
    {
        $user = H5User::where('openid', $openid)->find();
        if (!$user) {
            $user = new H5User();
            $user->save(
                [
                    'openid' => $openid,
                    'created_at' => date('Y-m-d H:i:s')
                ]
            );
        }
        if ($avatar && $nickname) {
            $user->avatar = $avatar;
            $user->nickname = $nickname;
            $user->updated_at = date('Y-m-d H:i:s');
            $user->save();
        }
    }

    //photo 拍照页面授权

    public function home()
    {
        $openid = input('openid');
        if (!$openid)
            return $this->redirect('/h5/auth/auth');
        $user = H5User::where('openid', $openid)->find();
        if (!$user)
            return $this->redirect('/h5/auth/auth');
        $this->assign('openid', $user->openid);
        $this->assign('avatar', $user->avatar);
        $this->assign('nickname', $user->nickname);
        $this->assign('signPackage',$this->getSignPackage($openid));
        return $this->fetch('index');
    }

    //保存用户信息

    public function authUser()
    {
        $appid = $this->appid;
        $secret = $this->secret;
        $code = input('code');
        $data = json_decode(file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$secret&code=$code&grant_type=authorization_code"), true);
        if (!isset($data['openid']) || !isset($data['access_token']))
            abort(404);
        $openid = $data['openid'];
        $access_token = $data['access_token'];
        $info = json_decode(file_get_contents("https://api.weixin.qq.com/sns/userinfo?access_token=$access_token&openid=$openid&lang=zh_CN "), true);
        if (!isset($info['openid']) || !isset($info['headimgurl']) || !isset($info['nickname']))
            abort(404);
        $this->saveUser($openid, $info['headimgurl'], $info['nickname']);
//        $this->assign('avatar', $info['headimgurl']);
//        $this->assign('nickname', $info['nickname']);
//        $this->assign('openid', $info['openid']);
//        $user = H5User::where('openid','oKwWb1JwyBYICmRxZsFFzzpDprnM')->find();
//        $this->assign('avatar', $user->avatar);
//        $this->assign('nickname', $user->nickname);
//        $this->assign('openid', $user->openid);
//        return $this->fetch('index');
        return $this->redirect('/h5/index/home?openid=' . $openid);
    }

    //列表页
    public function lists()
    {
        if (request()->isOptions()) {
            exit();
        }
        $page = input('page', 1);
        $type = input('type', 'hot');
        $order = 'id desc';
        if ($type == 'hot') {
            $order = 'vote_num desc';
        }
        $cate = input('cate');
        $openid = input('openid');
        $user = H5User::where('openid', $openid)->find();
        if (!$user)
            return show(400, '非法请求');
        if (in_array($type, ['hot', 'new'])) {
            $data = H5Photo::where('cate', $cate)->where('status', H5PhotoEnum::CHECK_SUCCESS)->order($order)->with('user')->page($page, 8)->select();
            //处理今天是否投过票
            $myVotes = H5PhotoVote::where('vote_user_id', $user->id)->whereTime('created_at', 'today')->column('h5_photo_id');
            foreach ($data as &$d) {
                $d->is_voted = false;
                if (in_array($d->id, $myVotes)) {
                    $d->is_voted = true;
                }
            }
        } else {
            $data = H5Photo::where('cate', $cate)->where('status', H5PhotoEnum::CHECK_SUCCESS)->where('h5_user_id', $user->id)->order($order)->with('user')->find();
        }
        return show(200, '获取成功', $data);
    }

    //投票
    public function vote()
    {
        $id = input('id');
        $openid = input('openid');
        if (!$id || !$openid)
            return show(400, '非法请求');
        $photo = H5Photo::find($id);
        $user = H5User::where('openid', $openid)->find();
        if (!$photo || !$user)
            return show(400, '非法请求');
        $hasVote = H5PhotoVote::where('h5_photo_id', $id)->where('vote_user_id', $user->id)->whereTime('created_at', 'today')->find();
        if ($hasVote)
            return show(400, '今天已投给TA过了，请明天再来');
        H5PhotoVote::create([
            'h5_photo_id' => $id,
            'vote_user_id' => $user->id,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        $photo->vote_num += 1;
        $photo->save();
        return show(200, '投票成功');
    }

    //详情
    public function info()
    {
        if (request()->isOptions()) {
            exit();
        }
        $id = input('id');
        $openid = input('openid');
        if (!$id || !$openid)
            return show(400, '非法请求');
        $user = H5User::where('openid', $openid)->find();
        if (!$user)
            return show(400, '非法请求');
        $photo = H5Photo::find($id);
        if ($photo->cate == 'photo')
            $photo->load('user');
        $myVotes = H5PhotoVote::where('vote_user_id', $user->id)->whereTime('created_at', 'today')->column('h5_photo_id');
        $photo->is_voted = false;
        if (in_array($photo->id, $myVotes)) {
            $photo->is_voted = true;
        }
        return show(200, '获取成功', $photo);
    }


    /**
     * 初始化方法 判断是否登录 未登录跳转到登录页
     */

    private function getSignPackage($openid)
    {
        $jsapiTicket = $this->getJsApiTicket();

        // 注意 URL 一定要动态获取，不能 hardcode.
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
        $url = "$protocol$_SERVER[HTTP_HOST]"."/h5/index/home?openid=".$openid;

        $timestamp = time();
        $nonceStr = $this->createNonceStr();

        // 这里参数的顺序要按照 key 值 ASCII 码升序排序
        $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

        $signature = sha1($string);

        $signPackage = array(
            "appid" => $this->appid,
            "nonceStr" => $nonceStr,
            "timestamp" => $timestamp,
            "url" => "$protocol$_SERVER[HTTP_HOST]"."/h5/auth/auth.html",
            'img_url' => "$protocol$_SERVER[HTTP_HOST]"."/static/share.png",
            "signature" => $signature,
            "rawString" => $string
        );
        return $signPackage;
    }

    private function getJsApiTicket()
    {
        $accessToken = get_access_token(82);
        // 如果是企业号用以下 URL 获取 ticket
        // $url = "https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=$accessToken";
        $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
        $res = json_decode($this->httpGet($url));
        $ticket = $res->ticket;
        return $ticket;
    }

    private function httpGet($url)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT, 500);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_URL, $url);

        $res = curl_exec($curl);
        curl_close($curl);

        return $res;
    }

    private function createNonceStr($length = 16)
    {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $str = "";
        for ($i = 0; $i < $length; $i++) {
            $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }
}