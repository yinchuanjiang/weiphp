<?php

namespace app\smile\controller;

use app\common\controller\WebBase;
use app\h5\model\H5Photo;
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
        $sTime = input('s_time', '2019-05-20');
        $eTime = input('e_time', '2039-05-20');
        $key = input('key');
        $id = input('id');
        if ($id) {
            $data_lists = H5User::with('photo')->where('id', $id)->paginate(20);
        } else {
            if ($key) {
                $data_lists = H5User::with('photo')->where('nickname', 'like', "%$key%")->whereBetweenTime('created_at', $sTime, $eTime)->paginate(20);
            } else {
                $data_lists = H5User::with('photo')->whereBetweenTime('created_at', $sTime, $eTime)->paginate(20);
            }
        }
        $this->assign('data_lists', $data_lists);
        return $this->fetch();
    }

    //作品列表
    public function photos()
    {
        $sTime = input('s_time', '2019-05-20');
        $eTime = input('e_time', '2039-05-20');
        $uid = input('h5_user_id');
        if ($uid) {
            $data_lists = H5Photo::with('user')->where('h5_user_id', $uid)->paginate(20);
        } else {
            $data_lists = H5Photo::with('user')->whereBetweenTime('created_at', $sTime, $eTime)->order('vote_num desc')->select();
        }
        $this->assign('data_lists', $data_lists);
        return $this->fetch();
        return $this->fetch();
    }
}
