<?php
/**
 * Created by PhpStorm.
 * User: yinchuanjiang
 * Date: 2019/5/22
 * Time: 下午5:30
 */
namespace app\h5\controller;

use think\Controller;

class Admin extends Controller{
    public function index()
    {
        return $this->fetch();
    }
}