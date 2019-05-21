<?php

namespace app\api\behavior;

use think\Response;

class Cors
{
    public static function run(&$params)
    {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: *");
        header('Access-Control-Allow-Methods: *');

        if (request()->isOptions()) {
            exit();
        }
    }
}