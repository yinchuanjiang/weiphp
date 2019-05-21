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
class Auth extends Controller
{
    protected $appid = 'wxac93997bb1f50b77';
    protected $secret = '7dc017eedadeb7d841ebb9b1192d4aea';
    //静默授权
    public function auth()
    {
        $appid = $this->appid;
        $url = config('app_url').'h5/index/index';
        $scope = 'snsapi_base';
        $state = '';
        return $this->redirect("https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=$url&response_type=code&scope=$scope&state=$state#wechat_redirect");
    }
    //非静默授权
    public function userAuth()
    {
        $appid = $this->appid;
        $url = config('app_url').'h5/index/index';
        $scope = 'snsapi_userinfo';
        $state = '';
        return $this->redirect("https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=$url&response_type=code&scope=$scope&state=$state#wechat_redirect");
    }
}