<?php
/**
 * Smile数据模型
 */
class SmileTable {
    // 数据表模型配置
    public $config = [
      'name' => 'smile',
      'title' => '微笑大赛',
      'search_key' => '',
      'add_button' => 1,
      'del_button' => 1,
      'search_button' => 1,
      'check_all' => 1,
      'list_row' => 20,
      'addon' => 'Smile'
  ];

    // 列表定义
    public $list_grid = [ ];

    // 字段定义
    public $fields = [ ];
}