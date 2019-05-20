<?php

namespace app\h5\controller;

use think\Controller;
/**
 * Created by PhpStorm.
 * User: yinchuanjiang
 * Date: 2019/5/20
 * Time: 下午1:47
 */
class Index extends Controller{
    //h5活动首页
    public function index()
    {
        return $this->fetch();
    }
}