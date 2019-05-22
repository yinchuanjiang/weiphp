<?php

namespace app\smile\controller;

use app\common\controller\WebBase;
use app\h5\model\H5User;

//PC运营管理端的控制器
class Smile extends WebBase
{

    var $syc_wechat = true;

    // 是否需要与微信端同步，目前只有认证的订阅号和认证的服务号可以同步
    function initialize()
    {
        parent::initialize();
        $this->syc_wechat = public_interface('user_group');

        $type = input('type/d', 0);
        $this->assign('type', $type);

        $res['title'] = '微笑大赛参赛列表';
        $res['url'] = U('smile/Smile/lists');
        $res['class'] = $type == 0 ? 'current' : '';
        $nav[] = $res;

        $res['title'] = '微笑大赛参赛作品列表';
        $res['url'] = U('smile/Smile/photos', array(
            'type' => 1
        ));
        $res['class'] = $type == 1 ? 'current' : '';
        $nav[] = $res;
        $this->assign('nav', $nav);
    }

    //微笑大赛列表
    public function lists($isAjax = 0)
    {
        $data_lists = H5User::select();
        dump($data_lists);die;
        return $this->fetch();
    }

    //作品列表
    public function photos()
    {
        return $this->fetch();
    }
}
