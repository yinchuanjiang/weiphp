<?php /*a:7:{s:59:"/www/wwwroot/weiphp/application/common/view/base/lists.html";i:1558430650;s:60:"/www/wwwroot/weiphp/application/common/view/base/common.html";i:1558430650;s:58:"/www/wwwroot/weiphp/application/common/view/base/head.html";i:1558430650;s:60:"/www/wwwroot/weiphp/application/common/view/base/header.html";i:1558430650;s:58:"/www/wwwroot/weiphp/application/common/view/base/_nav.html";i:1558430650;s:60:"/www/wwwroot/weiphp/application/common/view/base/footer.html";i:1558430650;s:57:"/www/wwwroot/weiphp/application/common/view/base/var.html";i:1558430650;}*/ ?>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8" />
<meta content="<?php echo config('WEB_SITE_KEYWORD'); ?>" name="keywords"/>
<meta content="<?php echo config('WEB_SITE_DESCRIPTION'); ?>" name="description"/>
<link rel="shortcut icon" href="<?php echo SITE_URL; ?>/favicon.ico">
<title><?php echo htmlentities((isset($page_title) && ($page_title !== '')?$page_title:'weiphp')); ?></title>
<link href="/static/font-awesome/css/font-awesome.min.css?v=<?php echo SITE_VERSION; ?>" rel="stylesheet">
<link rel="stylesheet" href="/static/ymyui/css/ymyui.css">
<!-- <link rel="stylesheet" href="/static/bootstrap/css/bootstrap.css"> -->
<link href="/static/base/css/base.css?v=<?php echo SITE_VERSION; ?>" rel="stylesheet">
<link href="/static/base/css/module.css?v=<?php echo SITE_VERSION; ?>" rel="stylesheet">
<link href="/static/base/css/weiphp.css?v=<?php echo SITE_VERSION; ?>" rel="stylesheet">
<link rel="stylesheet" href="//at.alicdn.com/t/font_727459_zyp88ew3c6.css"></link>

<!-- <link rel="stylesheet" src="/static/ymyui/css/ymyui.css"> -->
<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
<script src="/static/bootstrap/js/html5shiv.js?v=<?php echo SITE_VERSION; ?>"></script>
<![endif]-->
<!--[if lt IE 9]>
<script type="text/javascript" src="/static/jquery-1.10.2.min.js"></script>
<![endif]-->
<!--[if gte IE 9]><!-->
<script type="text/javascript" src="/static/jquery-2.0.3.min.js"></script>
<!--<![endif]-->
<!-- <script type="text/javascript" src="/static/bootstrap/js/bootstrap.min.js"></script> -->
<!-- 菜单下拉 -->
<script src="//cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"></script>
<script type="text/javascript" src="/static/ymyui/js/ymyui.min.js"></script>



<script type="text/javascript" src="/static/uploadify/jquery.uploadify.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"></script>
<script type="text/javascript" src="/static/base/js/dialog.js?v=<?php echo SITE_VERSION; ?>"></script>

<script type="text/javascript" src="/static/webuploader-0.1.5/webuploader.min.js"></script>

<script type="text/javascript" src="/static/base/js/admin_common.js?v=<?php echo SITE_VERSION; ?>"></script>
<script type="text/javascript" src="/static/base/js/admin_image.js?v=<?php echo SITE_VERSION; ?>"></script>
<script type="text/javascript" src="/static/masonry/masonry.pkgd.min.js"></script>
<script type="text/javascript" src="/static/jquery.dragsort-0.5.2.min.js"></script> 
<script src="//cdn.bootcss.com/limonte-sweetalert2/7.21.1/sweetalert2.all.min.js"></script>
<!-- 封装的jquery表单验证插件，依赖sweetalert2 -->
<script src="/static/default/lib/formverfiy.js"></script>
<script type="text/javascript">
var  IMG_PATH = "/static/base/images";
var  STATIC = "/static";
var  ROOT = "";
var  UPLOAD_PICTURE = "<?php echo U('home/File/upload_picture',array('session_id'=>session_id())); ?>";
var  UPLOAD_FILE = "<?php echo U('home/File/upload',array('session_id'=>session_id())); ?>";
var  UPLOAD_DIALOG_URL = "<?php echo U('home/File/upload_dialog',array('session_id'=>session_id())); ?>";
var COPY_PAGE_URL = "<?php echo U('home/index/copy'); ?>";
</script>
<!-- 页面header钩子，一般用于加载插件CSS文件和代码 -->
<?php echo hook('pageHeader'); ?>

    
</head>
<body>
	

	<!-- 主体 -->

<?php  //验证登录
  if(!is_login() && empty(cookie( '__forward__'))){
  $forward = cookie('__forward__');
            empty( $forward ) && cookie('__forward__', $_SERVER['REQUEST_URI']);
  //return redirect(U('home/user/login',array('from'=>4)));
  }  ?>
<div id="main-container" class="admin_container">
  <?php if(!(empty($top_menu['core_side_menu']) || (($top_menu['core_side_menu'] instanceof \think\Collection || $top_menu['core_side_menu'] instanceof \think\Paginator ) && $top_menu['core_side_menu']->isEmpty()))): ?>
    <div class="sidebar">
      <!-- 左侧栏用户信息 -->
      <div class="user-info">
        

        <a href="#" class="user-info-head">
            <img class="admin_head url" src="<?php echo SITE_URL; ?>/static/base/images/shenxun_logo.jpg"/>
        </a>

        <div class="user-info-name"><?php echo htmlentities(getShort($myinfo['nickname'],4)); ?><i class="pl_5 fa fa-sort-down"></i>
          <div class="user-info-dropdown">
          <a href="<?php echo U('home/User/profile'); ?>">修改密码</a>
          <a href="<?php echo U('home/User/logout'); ?>">退出</a>
        </div>
        </div>

        
      </div>
      
    
      <div id="sidenav">
        <ul class="sidenav_sub">
          <?php if(is_array($top_menu['core_side_menu']) || $top_menu['core_side_menu'] instanceof \think\Collection || $top_menu['core_side_menu'] instanceof \think\Paginator): $i = 0; $__LIST__ = $top_menu['core_side_menu'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
            <li class="<?php echo htmlentities($vo['class']); ?>" data-id="<?php echo htmlentities($vo['id']); ?>"> <a href="<?php echo htmlentities($vo['url']); ?>"> <?php echo htmlentities($vo['title']); ?> </a><b class="active_arrow"></b></li>
          <?php endforeach; endif; else: echo "" ;endif; ?>
          <div class="bar"></div>
        </ul>

      </div>

    </div>

  <?php endif; ?>
   
    <div class="main_body admin-body">
      <!-- 头部 -->
      <!-- 提示 -->
<div id="top-alert" class="top-alert-tips alert-error" style="display: none;">
  <a class="close" href="javascript:;"><b class="fa fa-times-circle"></b></a>
  <div class="alert-content"></div>
</div>


<!-- 导航条
================================================== -->
<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="wrap">

       <a class="brand" title="<?php echo config('WEB_SITE_TITLE'); ?>" href="<?php echo U('home/index/main'); ?>">
       		<img height="52" src="/static/base/images/logo.png"/>
       </a>
      <?php  $index_2 = parse_name(MODULE_NAME) . '/' . parse_name(CONTROLLER_NAME) . '/*' ; $index_3 = parse_name(MODULE_NAME) . '/' . parse_name(CONTROLLER_NAME) . '/' . parse_name(ACTION_NAME );  ?>

            <div class="top_nav">
                <?php if(is_login()): ?>
                    <ul class="nav" style="margin-right:0">
                        <?php if(is_array($top_menu['core_top_menu']) || $top_menu['core_top_menu'] instanceof \think\Collection || $top_menu['core_top_menu'] instanceof \think\Paginator): $i = 0; $__LIST__ = $top_menu['core_top_menu'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                    	<li class="<?php echo htmlentities($vo['class']); ?>"><a href="<?php echo htmlentities($vo['url']); ?>" target="<?php echo htmlentities($vo['target']); ?>"><?php echo htmlentities($vo['title']); ?></a></li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                <?php endif; ?>
            </div>
        </div>
</div>
      <!-- /头部 -->
      
<style>
    tbody td {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    .search-input.date {
        height: 30px;
    }
    
    #contents {
        padding-top: .1px;
    }
</style>
<div class="span9 page_message">
    <section id="contents">
        <?php  if(is_array($nav) && count($nav)>1) {  ?>
<ul class="tab-nav nav">
  <?php if(is_array($nav) || $nav instanceof \think\Collection || $nav instanceof \think\Paginator): $i = 0; $__LIST__ = $nav;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
    <li class="<?php echo htmlentities($vo['class']); ?>"><a href="<?php echo isset($vo['url']) ? $vo['url'] :''; ?>"><?php echo htmlentities($vo['title']); ?><span class="arrow fa fa-sort-up"></span></a></li>
  <?php endforeach; endif; else: echo "" ;endif; ?>
</ul>
<?php  }  if(!empty($sub_nav)): ?>
<div class="sub-tab-nav">
       <ul class="sub_tab">
       <?php if(is_array($sub_nav) || $sub_nav instanceof \think\Collection || $sub_nav instanceof \think\Paginator): $i = 0; $__LIST__ = $sub_nav;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
          <li><a class="<?php echo htmlentities($vo['class']); ?>" href="<?php echo htmlentities($vo['url']); ?>"><?php echo htmlentities($vo['title']); ?><span class="arrow fa fa-sort-up"></span></a></li>
       <?php endforeach; endif; else: echo "" ;endif; ?>
      </ul>
</div> 
<?php endif; if(!empty($normal_tips)): ?>
	<p class="normal_tips"><b class="fa fa-info-circle"></b> <?php echo $normal_tips; ?></p>
<?php endif; if($add_button || $del_button || $search_button || !empty($top_more_button)|| !empty($muti_search)): ?>
        <div class="table-bar">
            <div class="fl">
                <?php if(empty($model['extend']) || (($model['extend'] instanceof \think\Collection || $model['extend'] instanceof \think\Paginator ) && $model['extend']->isEmpty())): ?>
                <div class="tools" style="margin-bottom: 10px">
                    <?php if($add_button):  isset($add_url) || $add_url = U('add?model='.$model['id'], $get_param); ?><a class="btn" href="<?php echo htmlentities($add_url); ?>">新 增</a><?php endif; if($del_button):  isset($del_url) || $del_url = U('del?model='.$model['id'],
                    $get_param); ?>
                    <button class="btn ajax-post confirm" target-form="ids" url="<?php echo htmlentities($del_url); ?>">删 除</button><?php endif; if(is_array($top_more_button) || $top_more_button instanceof \think\Collection || $top_more_button instanceof \think\Paginator): $i = 0; $__LIST__ = $top_more_button;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;if(!(empty($vo['is_buttion']) || (($vo['is_buttion'] instanceof \think\Collection || $vo['is_buttion'] instanceof \think\Paginator ) && $vo['is_buttion']->isEmpty()))): ?>
                    <button class="btn <?php echo htmlentities($vo['class']); ?>" target-form="ids" url="<?php echo htmlentities($vo['url']); ?>"><?php echo htmlentities($vo['title']); ?></button> <?php else: ?>
                    <a class="btn" href="<?php echo htmlentities($vo['url']); ?>"><?php echo htmlentities($vo['title']); ?></a> <?php endif; ?> &nbsp; <?php endforeach; endif; else: echo "" ;endif; ?>
                </div>
                <?php endif; ?>
            </div>
            <!-- 高级搜索 -->
            <?php if($search_button): ?>
            <div class="search-form fr cf">
                <div class="sleft">
                    <?php empty($search_key) && $search_key=$model['search_key'];empty($search_key) && $search_key='title';unset($get_param[$search_key]);empty($placeholder) && $placeholder='请输入内容搜索';  isset($model['name']) && $get_param['model']=$model['name'];
                    isset($search_url) || $search_url = U(MODULE_NAME.'/'.CONTROLLER_NAME.'/lists', $get_param); ?>
                    <input type="text" name="<?php echo htmlentities($search_key); ?>" class="search-input" value="<?php echo input($search_key); ?>" placeholder="<?php echo htmlentities($placeholder); ?>">
                    <a class="sch-btn" href="javascript:;" id="search" url="<?php echo htmlentities($search_url); ?>"><i class="btn-search"></i></a> </div>
            </div>
            <?php endif; ?>
            <!-- 多维过滤 -->
            <?php if(!(empty($muti_search) || (($muti_search instanceof \think\Collection || $muti_search instanceof \think\Paginator ) && $muti_search->isEmpty()))): ?>
            <form class="muti_search cf" action="<?php echo htmlentities((isset($search_url) && ($search_url !== '')?$search_url:'')); ?>" method="get">
                <div style="line-height: 30px;">
                    <?php if(is_array($muti_search) || $muti_search instanceof \think\Collection || $muti_search instanceof \think\Paginator): $i = 0; $__LIST__ = $muti_search;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;switch($vo['type']): case "select": ?>
                    <span><?php echo htmlentities($vo['title']); ?>：</span>
                    <select name="<?php echo htmlentities($vo['name']); ?>" class="search-input input-small">
                    <?php if(is_array($vo['options']) || $vo['options'] instanceof \think\Collection || $vo['options'] instanceof \think\Paginator): $i = 0; $__LIST__ = $vo['options'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$option): $mod = ($i % 2 );++$i;?>
                    <option value="<?php echo htmlentities($option['value']); ?>" <?php if($option['default_value'] == 'option.value'): ?>selected<?php endif; ?> ><?php echo htmlentities($option['title']); ?></option>
                    <?php endforeach; endif; else: echo "" ;endif; ?>                    
                    </select> <?php break; case "datetime": ?>
                    <span><?php echo htmlentities($vo['title']); ?>：</span>
                    <input type="datetime" name="start_time" class="search-input date input-small" value="<?php echo htmlentities($vo['start_time']); ?>" placeholder="请选择时间">
                    <span>至</span>
                    <input type="datetime" name="end_time" class="search-input date input-small" value="<?php echo htmlentities($vo['end_time']); ?>" placeholder="请选择时间"> <?php break; case "checkbox": ?>
                    <span><?php echo htmlentities($vo['title']); ?>：</span> <?php if(is_array($vo['options']) || $vo['options'] instanceof \think\Collection || $vo['options'] instanceof \think\Paginator): $i = 0; $__LIST__ = $vo['options'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$option): $mod = ($i % 2 );++$i;?>
                    <input autocomplete="off" type="checkbox" name="<?php echo htmlentities($option['name']); ?>" value="<?php echo htmlentities($option['value']); ?>" <?php if($option['default_value'] == 'option.value'): ?>checked<?php endif; ?>><?php echo htmlentities($option['title']); ?> <?php endforeach; endif; else: echo "" ;endif; break; case "radio": ?>
                    <span><?php echo htmlentities($vo['title']); ?>：</span> <?php if(is_array($vo['options']) || $vo['options'] instanceof \think\Collection || $vo['options'] instanceof \think\Paginator): $i = 0; $__LIST__ = $vo['options'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$option): $mod = ($i % 2 );++$i;?>
                    <input type="radio" name="<?php echo htmlentities($option['name']); ?>" value="<?php echo htmlentities($option['value']); ?>" <?php if($option['default_value'] == 'option.value'): ?>checked<?php endif; ?>><?php echo htmlentities($option['title']); ?> <?php endforeach; endif; else: echo "" ;endif; break; ?> <?php endswitch; ?> <?php endforeach; endif; else: echo "" ;endif; ?>

                    <!-- <a class="sort " href="#" title="排序">排序:高->低</a> -->
                    <button type="button" class="sch-btn btn" href="javascript:;" id="muti_search" style="padding: 6px;">搜索</button> </div>
            </form>
            <?php endif; ?>
        </div>
        <?php endif; ?>
        <!-- 数据列表 -->
        <?php $now_by = I('by','asc'); if($now_by=='asc'){ $next_by = 'desc'; $by_icon = '<i class="sort_up"></i>'; } else { $next_by = 'asc'; $by_icon = '<i class="sort_down"></i>'; } ?>
        <div class="data-table">
            <div class="table-striped">
                <table cellspacing="1" style="table-layout: fixed">
                    <!-- 表头 -->
                    <thead>
                        <tr>
                            <?php if($check_all): ?>
                            <th style="width: 40px" class="row-selected row-selected"> <input autocomplete="off" type="checkbox" id="checkAll" class="check-all regular-checkbox"><label for="checkAll"></label></th><?php endif; if(!(empty($list_grids) || (($list_grids instanceof \think\Collection || $list_grids instanceof \think\Paginator ) && $list_grids->isEmpty()))): if(is_array($list_grids) || $list_grids instanceof \think\Collection || $list_grids instanceof \think\Paginator): $i = 0; $__LIST__ = $list_grids;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$field): $mod = ($i % 2 );++$i;?>
                            <th <?php if(!(empty($field['width']) || (($field['width'] instanceof \think\Collection || $field['width'] instanceof \think\Paginator ) && $field['width']->isEmpty()))): ?>width="<?php echo htmlentities($field['width']); ?>%" <?php endif; ?>>
                                <?php if(!(empty($field['is_sort']) || (($field['is_sort'] instanceof \think\Collection || $field['is_sort'] instanceof \think\Paginator ) && $field['is_sort']->isEmpty()))):  $get_param['order'] = $field['name']; $get_param['by'] = $next_by; $show_by = ''; $now_order = I('order'); if($now_order==$field['name']){ $show_by = $by_icon; } $order_url = U(MODULE_NAME.'/'.CONTROLLER_NAME.'/'.ACTION_NAME,
                                $get_param);  ?>
                                <a href="<?php echo htmlentities($order_url); ?>" class="desc"><?php echo htmlentities($field['title']); ?> <?php echo $show_by; ?></a> <?php else: ?> <?php echo htmlentities($field['title']); ?> <?php endif; ?>
                            </th>
                            <?php endforeach; endif; else: echo "" ;endif; ?><?php endif; ?>
                        </tr>
                    </thead>

                    <!-- 列表 -->
                    <tbody>
                        <?php if(!(empty($list_data) || (($list_data instanceof \think\Collection || $list_data instanceof \think\Paginator ) && $list_data->isEmpty()))): if(is_array($list_data) || $list_data instanceof \think\Collection || $list_data instanceof \think\Paginator): $i = 0; $__LIST__ = $list_data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$data): $mod = ($i % 2 );++$i;?>
                        <tr>
                            <?php if($check_all): ?>
                            <td><input autocomplete="off" class="ids regular-checkbox" type="checkbox" value="<?php echo htmlentities($data['id']); ?>" name="ids[]" id="check_<?php echo htmlentities($data['id']); ?>"><label for="check_<?php echo htmlentities($data['id']); ?>"></label></td><?php endif; if(is_array($list_grids) || $list_grids instanceof \think\Collection || $list_grids instanceof \think\Paginator): $i = 0; $__LIST__ = $list_grids;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$grid): $mod = ($i % 2 );++$i;if((isset($grid['raw']) && $grid['raw'] == 1) OR (isset($grid['come_from']) && $grid['come_from'] == 1)): ?>
                            <td style="overflow: auto;white-space: normal "><?php echo $data[$key]; ?></td><?php else: ?>
                            <td title="<?php echo htmlentities($data[$key]); ?>"><?php echo $data[$key]; ?></td><?php endif; ?> <?php endforeach; endif; else: echo "" ;endif; ?>
                        </tr>
                        <?php endforeach; endif; else: echo "" ;endif; ?><?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="page"> <?php echo (isset($_page) && ($_page !== '')?$_page:''); ?> </div>
    </section>
</div>



      <!-- 底部 -->
      <div class="wrap bottom" style="background:#fff; border-top:#ddd;">
    <p class="copyright">本系统由<a href="https://www.weiphp.cn" target="_blank">WeiPHP</a>强力驱动</p>
</div>

<script type="text/javascript">

(function(){
	var ThinkPHP = window.Think = {
		"ROOT"   : "", //当前网站地址
		"APP"    : "__APP__", //当前项目地址
		"PUBLIC" : "", //项目公共目录地址
		"DEEP"   : "<?php echo config("pathinfo_depr"); ?>", //PATHINFO分割符
		"MODEL"  : ["<?php echo config("URL_MODEL"); ?>", "<?php echo config("URL_CASE_INSENSITIVE"); ?>", "<?php echo config("URL_HTML_SUFFIX"); ?>"],
		"VAR"    : ["<?php echo config("VAR_MODULE"); ?>", "<?php echo config("VAR_CONTROLLER"); ?>", "<?php echo config("VAR_ACTION"); ?>"]
	}
})();
</script>

<!-- 页面footer钩子，一般用于加载插件JS文件和JS代码 -->
<?php echo hook("pageFooter", "widget"); ?>
<div style="display:none"><?php echo $tongji_code; ?></div>


    </div>
    



</div>

	<!-- /主体 -->

	
    
<link href="/static/datetimepicker/css/datetimepicker.css?v=<?php echo SITE_VERSION; ?>" rel="stylesheet" type="text/css"> <?php if(config('COLOR_STYLE')=='blue_color') echo '
<link href="/static/datetimepicker/css/datetimepicker_blue.css?v=<?php echo SITE_VERSION; ?>" rel="stylesheet" type="text/css"> '; ?>
<link href="/static/datetimepicker/css/dropdown.css?v=<?php echo SITE_VERSION; ?>" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/static/datetimepicker/js/bootstrap-datetimepicker.js"></script>
<script type="text/javascript" src="/static/datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js?v=<?php echo SITE_VERSION; ?>" charset="UTF-8"></script>

<script type="text/javascript">
    $(function() {
        var url = window.location.href;
        if (url.indexOf("/news/lists") != -1) {
            $('.admin-body').css({
                'margin-left': '1.5em',
                'margin-right': '0',
            })
            $('#contents').css('padding-top', '1em')
        }
        $('.time').datetimepicker({
            format: 'yyyy-mm-dd hh:ii',
            language: "zh-CN",
            minView: 0,
            autoclose: true
        });
        $('.date').datetimepicker({
            format: 'yyyy-mm-dd',
            language: "zh-CN",
            minView: 2,
            autoclose: true
        });
        //搜索功能
        $("#search").click(function() {
            var url = $(this).attr('url');
            var str = $('.search-input').val()
            var query = $('.search-input').attr('name') + '=' + str.replace(/(^\s*)|(\s*$)/g, "");

            if (url.indexOf('?') > 0) {
                url += '&' + query;
            } else {
                url += '?' + query;
            }
            url = change_search_url(url);
            window.location.href = url;
        });

        //回车自动提交
        $('.search-form').find('input').keyup(function(event) {
            if (event.keyCode === 13) {
                $("#search").click();
            }
        });

        $("#muti_search").click(function() {
            var url = $(".muti_search").attr('action');
            var data = $(".muti_search").serialize();
            if (url.indexOf('?') > 0) {
                url += '&' + data;
            } else {
                url += '?' + data;
            }
            url = change_search_url(url);
            window.location.href = url;
        });
    })
</script>
 <!-- 用于加载js代码 -->
    <div class="hidden"><!-- 用于加载统计代码等隐藏元素 -->
        
    </div>
  <!-- /底部 -->
  
  <script>
    // 判断一下侧边栏是否存在 
    $(function() {
      if(!$('.user-info-name').length > 0) {
        // 不存在
        $('.main_body').removeClass('admin-body')
      }
    })
  </script>
</body>
</html>
