<?php /*a:7:{s:66:"/www/wwwroot/weiphp/application/wei_site/view/wei_site/config.html";i:1558430650;s:60:"/www/wwwroot/weiphp/application/common/view/base/common.html";i:1558430650;s:58:"/www/wwwroot/weiphp/application/common/view/base/head.html";i:1558430650;s:60:"/www/wwwroot/weiphp/application/common/view/base/header.html";i:1558430650;s:58:"/www/wwwroot/weiphp/application/common/view/base/_nav.html";i:1558430650;s:60:"/www/wwwroot/weiphp/application/common/view/base/footer.html";i:1558430650;s:57:"/www/wwwroot/weiphp/application/common/view/base/var.html";i:1558430650;}*/ ?>
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
<?php endif; ?>
        <div class="tab-content">
            <div style="float:left;width:50%">
                <form method="post" class="form-horizontal" action="<?php echo U('config'); ?>">
                    <div class="form-group row cf">
                        <label class="col-sm-2"> 封面标题: <span class="form-text text-muted"></span> </label>
                        <div class="col-sm-8">
                            <input type="text" value="<?php echo htmlentities($data['title']); ?>" class="text input-large" name="title">
                        </div>
                    </div>
                    <div class="form-group row cf">
                        <label class="col-sm-2"> 封面图片: </label>
                        <div class="col-sm-8" >
                            <div class="uploadrow2" data-max="1" title="点击修改图片" rel="cover">
                                <input type="file" id="upload_picture_cover">
                            <input type="hidden" name="cover" id="cover_id_cover" value="<?php echo htmlentities($data['cover']); ?>" />
                            <div class="upload-img-box">
                                <?php if(!(empty($data['cover']) || (($data['cover'] instanceof \think\Collection || $data['cover'] instanceof \think\Paginator ) && $data['cover']->isEmpty()))): ?>
                                <div class="upload-pre-item2"><img width="100" height="100" src="<?php echo htmlentities(get_cover_url($data['cover'])); ?>" /></div>
                                <em class="edit_img_icon">&nbsp;</em> <?php endif; ?>
                            </div>
                            </div>
                            <span class="form-text text-muted">最佳尺寸为900*500</span>
                        </div>
                        
                            
                    </div>
                    <div class="form-group row cf">
                        <label class="col-sm-2"> 封面简介: <span class="form-text text-muted"></span> </label>
                        <div class="col-sm-8">
                            <label class="textarea input-large">
                                <textarea name="info" style="width:100%;min-width: auto"><?php echo htmlentities($data['info']); ?></textarea>
                            </label>
                        </div>
                    </div>
            </div>
            <!--通用的微信预览模板-->
            <!--头部标题栏-->
            <!--鉴于样式title放进具体每块模块-->
            <!--CSS模块-->
            <div class="weixin-preview">
                <p class="preview-tips">微信里回复“微官网”的回复效果</p>
                <div class="weixin-box">
                    <p class="weixin-title"></p>
                    <div class="weixin-cover"><img class="weixin-cover-pic" src="" /></div>
                    <p class="weixin-content">
                    </p>
                </div>
            </div>
            <div class="form-group row" style="clear:both;">
               <div class="offset-sm-1 col-sm-4"> <button type="submit" class="btn submit-btn ajax-post" target-form="form-horizontal">确 定</button></div>
            </div>
            </form>
        </div>
    </section>
</div>
<script type="text/javascript">
$('.tab-content').addClass('has-weixinpreivew');
if ($('input[name="title"]').val() != undefined) {
    $('.weixin-title').html($('input[name="title"]').val());
} else {
    $('.weixin-title').html($('input[name="title"]').val());
}
if ($('textarea[name="content"]').val() != undefined) {
    $('.weixin-content').html($('textarea[name="content"]').val());
} else if ($('textarea[name="intro"]').val() != undefined) {
    $('.weixin-content').html($('textarea[name="intro"]').val());
} else {
    $('.weixin-content').html($('textarea[name="info"]').val());
}
var weixin_cover_picurl = $('#cover_id_picurl').next().find('img').attr('src');
if (weixin_cover_picurl == undefined) weixin_cover_picurl = $('#cover_id_cover').next().find('img').attr('src');
if ($('#cover_id_cover').val() == undefined && $('#cover_id_picurl').val() == undefined) {
    $('.weixin-preview').hide();
}
if (weixin_cover_picurl == undefined || weixin_cover_picurl == "") {
    $('.weixin-cover-pic').attr('src', "/static/base/images/no_cover.png");
} else {
    $('.weixin-cover-pic').attr('src', weixin_cover_picurl);
}


$('input[name="title"]').keyup(function() {
    $('.weixin-title').html($(this).val());
});
$('input[name="title"]').keyup(function() {
    $('.weixin-title').html($(this).val());
});
$('textarea[name="content"]').keyup(function() {
    $('.weixin-content').html($(this).val());
});
$('textarea[name="info"]').keyup(function() {
    $('.weixin-content').html($(this).val());
});
$('textarea[name="info"]').keyup(function() {
    $('.weixin-content').html($(this).val());
});
$('textarea[name="des_jj"]').keyup(function() {
    $('.weixin-content').html($(this).val());
});
$('textarea[name="intro"]').keyup(function() {
    $('.weixin-content').html($(this).val());
});
</script>



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

	
    
<script type="text/javascript" charset="utf-8">
$(function() {
    //初始化上传图片插件
    initUploadImg();
    initUploadFile();
    //支持tab
    showTab();
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
