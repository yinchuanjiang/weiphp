<?php

namespace app\api\behavior;

use think\Response;

class Cors
{
    public static function run(&$params)
    {
        if (request()->isOptions()) {
            exit();
        }
    }
}