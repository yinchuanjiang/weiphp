<?php

namespace app\h5\controller;

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
        return $this->fetch();
    }

    //photo 拍照页面授权
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
        if(!isset($info['openid']) || !isset($info['headimgurl']) || !isset($info['nickname']))
            abort(404);
        $this->assign('avatar', $info['headimgurl']);
        $this->assign('nickname', $info['nickname']);
        return $this->fetch('index');
    }
    //保存用户信息
    private function saveUser($openid, $avatar = null, $nickname = null)
    {
        $user = H5User::where('openid', $openid)->find();
        if (!$user) {
            $user = new H5User();
            $user->save(
                array_merge(
                    [
                        'openid' => $openid,
                        'created_at' => date('Y-m-d H:i:s')
                    ],
                    compact('avatar', 'nickname')
                )
            );
        }
    }
    //列表页
    public function lists()
    {
        $data = [
            [
                "id" => 2,
                "uuid" => "ba2b10e8-0f01-4483-ba66-10756929d2b3",
                "avatar" => "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWiaE1p4KnCEXLxTu3BOk4OBic0PeBX2kLWF2WAWx3x9yF5kHUx3QD6T5mHhnZYWO5ibmCcx6c3KfGQ/0",
                "nickname" => "Suzanne",
                "number" => 2398,
                "poster" => "http://static.diggid.cn/FrJYktkt7tF-aK_YVofFyzy-i_2U",
                "master" => false,
                "liked" => false
            ], [
                "id" => 2,
                "uuid" => "81ae7659-1d2d-4601-89d8-c3bf72d3bf38",
                "avatar" => "http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoR7HdY3fRWuvXibqebLNXx0LMaqAHiafw7uoJsRX3oOMtgj2lQDSvx9sPibJkPaCnb7QkYaHnDWAntA/0",
                "nickname" => "大牛",
                "number" => 1644,
                "poster" => "http://static.diggid.cn/Fgxng5zbVpx5OGAh-SvMlVHJtbn_",
                "master" => false,
                "liked" => false
            ], [
                "id" => 3,
                "uuid" => "59c1d63f-11c6-400d-b322-5c25883d32ee",
                "avatar" => "http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqzwYzVu4jk1vSu5dnbuIzqmBRiaXicPriaGGc4N7RgbZORibZWiakpFc30l2w5GmJp0HhIiboiaicRhRZ3kw/0",
                "nickname" => "u65b9u51ef",
                "number" => 949,
                "poster" => "http://static.diggid.cn/Fs1EJbG3xIXOHrQaDlLB8A9ExOYd",
                "master" => false,
                "liked" => false
            ], [
                "id" => 4,
                "uuid" => "077531fb-dcce-45e7-af56-b3d680599565",
                "avatar" => "http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqzwYzVu4jk1vSu5dnbuIzqmBRiaXicPriaGGc4N7RgbZORibZWiakpFc30l2w5GmJp0HhIiboiaicRhRZ3kw/0",
                "nickname" => "大大大",
                "number" => 671,
                "poster" => "http://static.diggid.cn/FqSGo0HVc01dRuG9PpuY3Ejo1w9e",
                "master" => false,
                "liked" => false
            ]
        ];
        return json_url(['code' => 0, 'msg' => 'ok', 'data' => $data]);
    }
}