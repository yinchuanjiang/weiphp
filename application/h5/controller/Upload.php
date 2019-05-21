<?php
/**
 * Created by PhpStorm.
 * User: yinchuanjiang
 * Date: 2019/5/20
 * Time: 下午2:03
 */
namespace app\h5\controller;

use think\Controller;

class Upload extends Controller{
    //上传照片
    public function upload()
    {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: token,Origin, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Methods: POST,GET,OPTION');
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('upload');
        // 移动到框架应用根目录/uploads/ 目录下
        $info = $file->move( './uploads');
        if($info){
            return json_url(['code' => 200,'msg' => 'ok']);
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            //echo $info->getSaveName();
        }else{
            return json_url(['code' => 400,'msg' => 'ok']);
            // 上传失败获取错误信息
        }
    }
}