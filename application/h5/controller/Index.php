<?php

namespace app\h5\controller;

use app\h5\model\H5Photo;
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
        $this->assign('openid', $openid);
        $this->assign('avatar', '');
        $this->assign('nickname', '');
        return $this->fetch();
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
        if($avatar && $nickname) {
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
        $this->assign('avatar', $info['headimgurl']);
        $this->assign('nickname', $info['nickname']);
        $this->assign('openid', $info['openid']);
//        $user = H5User::where('openid','oKwWb1JwyBYICmRxZsFFzzpDprnM')->find();
//        $this->assign('avatar', $user->avatar);
//        $this->assign('nickname', $user->nickname);
//        $this->assign('openid', $user->openid);
        return $this->fetch('index');
    }

    //列表页
    public function lists()
    {
        if (request()->isOptions()) {
            exit();
        }
        $type = input('type','hot');
        $order = 'id desc';
        if($type == 'hot'){
            $order = 'vote_num desc';
        }
        $cate = input('cate');
        if(in_array($type,['hot','new'])) {
            $data = H5Photo::where('cate', $cate)->order($order)->with(['user', 'votes' => ['voter']])->select();
        }else{
            $openid = input('openid');
            $user = H5User::where('openid',$openid)->find();
            $data = H5Photo::where('cate', $cate)->where('h5_user_id',$user->id)->order($order)->with(['user', 'votes' => ['voter']])->select();
        }
        return show(200,'获取成功',$data);
    }
}