<?php

namespace app\api\behavior;

use think\Response;

class Cors
{
    public function run(&$params)
    {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: token,Origin, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Methods: POST,GET,OPTION');
        if (request()->isOptions()) {
            exit();
        }
    }
}