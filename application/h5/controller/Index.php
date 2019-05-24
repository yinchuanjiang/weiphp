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
        return $this->redirect('/h5/index/home?openid='.$openid);
    }

    public function home()
    {
        $openid = input('openid');
        if(!$openid)
            return $this->redirect('/h5/auth/auth');
        $user = H5User::where('openid',$openid)->find();
        if(!$user)
            return $this->redirect('/h5/auth/auth');
        $this->assign('openid', $user->openid);
        $this->assign('avatar', $user->avatar);
        $this->assign('nickname', $user->nickname);
        return $this->fetch('index');
    }

    //photo 拍照页面授权

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
        return $this->redirect('/h5/index/home?openid='.$openid);
    }

    //列表页
    public function lists()
    {
        if (request()->isOptions()) {
            exit();
        }
        $page = input('page',1);
        $type = input('type', 'hot');
        $order = 'id desc';
        if ($type == 'hot') {
            $order = 'vote_num desc';
        }
        $cate = input('cate');
        $openid = input('openid');
        $user = H5User::where('openid',$openid)->find();
        if(!$user)
            return show(400,'非法请求');
        if (in_array($type, ['hot', 'new'])) {
            $data = H5Photo::where('cate', $cate)->where('status',H5PhotoEnum::CHECK_SUCCESS)->order($order)->with('user')->page($page,8)->select();
            //处理今天是否投过票
            $myVotes = H5PhotoVote::where('vote_user_id',$user->id)->whereTime('created_at','today')->column('h5_photo_id');
            foreach ($data as &$d){
                $d->is_voted = false;
                if(in_array($d->id,$myVotes)){
                    $d->is_voted = true;
                }
            }
        } else {
            $data = H5Photo::where('cate', $cate)->where('status',H5PhotoEnum::CHECK_SUCCESS)->where('h5_user_id', $user->id)->order($order)->with('user')->find();
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
        if(!$id || !$openid)
            return show(400, '非法请求');
        $user = H5User::where('openid',$openid)->find();
        if(!$user)
            return show(400,'非法请求');
        $photo = H5Photo::find($id);
        if($photo->cate == 'photo')
            $photo->load('user');
        $myVotes = H5PhotoVote::where('vote_user_id',$user->id)->whereTime('created_at','today')->column('h5_photo_id');
        $photo->is_voted = false;
        if(in_array($photo->id,$myVotes)){
            $photo->is_voted = true;
        }
        return show(200, '获取成功', $photo);
    }
}