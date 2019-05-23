<?php
/**
 * Created by PhpStorm.
 * User: yinchuanjiang
 * Date: 2019/5/20
 * Time: 下午2:03
 */
namespace app\h5\controller;

use app\h5\model\enum\H5PhotoEnum;
use app\h5\model\H5User;
use think\Controller;

class Upload extends Controller{
    //上传照片
    public function upload()
    {
        if (request()->isOptions()) {
            exit();
        }
        $openid = input('openid');
        if(!$openid)
            return show(400,'非法操作');
        $user = H5User::where('openid',$openid)->find();
        if(!$user)
            return show(400,'非法操作');
        if($user->photo()->where('status',H5PhotoEnum::CHECK_SUCCESS)->count())
            return show(300,'您已经上传过了');
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('upload');
        // 移动到框架应用根目录/uploads/ 目录下
        $info = $file->move( './uploads');
        if(!$info)
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            //echo $info->getSaveName();
            return show(400,'系统错误');
            // 上传失败获取错误信息
        $user->photo()->save(['photo' => config('app_url').'uploads/'.$info->getSaveName(),'created_at' => date('Y-m-d H:i:s')]);
        return show(200,'上传成功');
    }
}