<?php

namespace app\smile\controller;

use app\common\controller\WebBase;
use app\h5\model\enum\H5PhotoEnum;
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

        $res['title'] = '微笑代言人作品列表';
        $res['url'] = U('smile/Smile/endorse', array(
            'type' => 2
        ));
        $res['class'] = $type == 2 ? 'current' : '';
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
        $page = $data_lists->render();
        $this->assign('_page', $page);
        $this->assign('data_lists', $data_lists);
        return $this->fetch();
    }

    //作品列表
    public function photos()
    {
        $sTime = input('s_time', '2019-05-20');
        $eTime = input('e_time', '2039-05-20');
        $uid = input('h5_user_id');
        $status = input('status', -2);
        $this->assign($status);
        if (in_array($status, [-1, 0, 1])) {
            $status = [$status];
        } else {
            $status = [H5PhotoEnum::CHECK_SUCCESS, H5PhotoEnum::CHECK_FAIL, H5PhotoEnum::CHECKING];
        }
        if ($uid) {
            $data_lists = H5Photo::with('user')->where('cate', 'photo')->where('h5_user_id', $uid)->paginate(20);
        } else {
            $data_lists = H5Photo::with('user')->where('cate', 'photo')->whereIn('status', $status)->whereBetweenTime('created_at', $sTime, $eTime)->order('vote_num desc')->paginate(20);
        }
        $page = $data_lists->render();
        $this->assign('_page', $page);
        $this->assign('data_lists', $data_lists);
        return $this->fetch();
        return $this->fetch();
    }

    //审核
    public function check()
    {
        $id = input('id');
        $status = input('status');
        if (!$id || !$status)
            return show(400, '非法操作1', '', 'error');
        $photo = H5Photo::find($id);
        if (!$photo)
            return show(400, '非法操作2', '', 'error');
        $photo->status = $status;
        $photo->save();
        return show(200, '审核成功');
    }

    //微笑代言人作品列表
    public function endorse()
    {
        $sTime = input('s_time', '2019-05-20');
        $eTime = input('e_time', '2039-05-20');
        $uid = input('h5_user_id');
        $status = input('status', -2);
        $this->assign($status);
        if (in_array($status, [-1, 0, 1])) {
            $status = [$status];
        } else {
            $status = [H5PhotoEnum::CHECK_SUCCESS, H5PhotoEnum::CHECK_FAIL, H5PhotoEnum::CHECKING];
        }
        if ($uid) {
            $data_lists = H5Photo::with('user')->where('cate', 'photo')->where('h5_user_id', $uid)->paginate(20);
        } else {
            $data_lists = H5Photo::with('user')->where('cate', 'photo')->whereIn('status', $status)->whereBetweenTime('created_at', $sTime, $eTime)->order('vote_num desc')->paginate(20);
        }
        $page = $data_lists->render();
        $this->assign('_page', $page);
        $this->assign('data_lists', $data_lists);
        return $this->fetch();
        return $this->fetch();
    }

    //上传图片
    public function upload()
    {
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('file');
        $name = input('name');
        $mobile = input('mobile');
        // 移动到框架应用根目录/uploads/ 目录下
        $info = $file->move('./uploads');
        if (!$info)
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            //echo $info->getSaveName();
            return show(400, '系统错误');
        // 上传失败获取错误信息
        H5Photo::create([
            'cate' => 'endorse',
            'photo' => config('app_url').'uploads/'.$info->getSaveName(),
            'name' => $name,
            'mobile' => $mobile,
            'created_at' => date('Y-m-d H:i:s'),
        ]);
        return show(200, '上传成功');
    }
}
