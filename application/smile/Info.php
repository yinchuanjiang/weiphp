<?php

namespace app\smile;
use app\common\controller\InfoBase;

/**
 * Smile应用
 */
class Info extends InfoBase{
    public $info = array(
            'name'=>'smile',
            'title'=>'微笑大赛',
            'description'=>'微笑大赛后台',
            'author'=>'尹传江',
            'version'=>'0.1',
            'has_adminlist'=>1
        );

    //自定义权限规则
    public $auth_rule = [];

    //自定义积分规则
    public $credit_config = [];

    //自定义入口地址,默认是lists或者config
    public $init_url = [];

    function reply($dataArr, $keywordArr = []) {
        $config = getAddonConfig ( 'smile' ); // 获取后台应用的配置参数
        //dump($config);
    }

    public function install() {
        $install_sql = env('app_path').'smile/install.sql';
        if (file_exists ( $install_sql )) {
            execute_sql_file ( $install_sql );
        }
        return true;
    }
    public function uninstall() {
        $uninstall_sql = env('app_path').'smile/uninstall.sql';
        if (file_exists ( $uninstall_sql )) {
            execute_sql_file ( $uninstall_sql );
        }
        return true;
    }
}
