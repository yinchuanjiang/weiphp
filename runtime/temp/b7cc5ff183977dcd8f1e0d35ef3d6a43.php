<?php /*a:2:{s:75:"/www/wwwroot/weiphp/application/material/view/material/text_lists_data.html";i:1558316876;s:58:"/www/wwwroot/weiphp/application/common/view/base/head.html";i:1558316876;}*/ ?>
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

<body style="background:#fff">
<div class="lists_data">
  <div class="span9 page_message">
    <section id="contents">
<?php if(empty($list_data) && empty(input('content'))): ?>
		<div class="empty_container"><p>您的文本素材库为空，<a target='_blank' href="<?php echo U('material/Material/text_lists'); ?>">请先增加素材</a></p></div>

<?php else: ?>

      <div class="table-bar">
        <div class="search-form fl">
        </div>
        <!-- 高级搜索 -->
        <div class="search-form fr cf" style="border: 1px solid #eee">
          <input type="text" placeholder="请输入文本内容搜索" value="<?php echo I('content'); ?>" class="search-input" name="content">
            <a url="<?php echo U('material/Material/text_lists',$get_param); ?>" id="search" href="javascript:;" class="sch-btn"><i class="btn-search"></i></a> </div>
        </div>
        <!-- 多维过滤 -->
      </div>
      <!-- 数据列表 -->
      <div class="data-table">
        <div class="table-striped">
          <table cellspacing="1">
            <!-- 表头 -->
            <thead>
              <tr>
                <th class="row-selected row-selected">
                  <?php if(!$isRadio): ?>
                  <input type="checkbox" class="check-all regular-checkbox" id="checkAll">
                  <label for="checkAll"></label></th>
                  <?php endif; ?>
                <th>编号</th>
                <th width='85%'>素材文本内容</th>
              </tr>
            </thead>

            <!-- 列表 -->
            <tbody>
              <?php if(is_array($list_data) || $list_data instanceof \think\Collection || $list_data instanceof \think\Paginator): $i = 0; $__LIST__ = $list_data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                <tr>
                  <td>
                   <?php if(empty($isRadio) || (($isRadio instanceof \think\Collection || $isRadio instanceof \think\Paginator ) && $isRadio->isEmpty())): ?>
                  		<input type="checkbox" id="check_<?php echo htmlentities($vo['id']); ?>" name="ids[]" value="<?php echo htmlentities($vo['id']); ?>" class="ids regular-checkbox">
                    	<label for="check_<?php echo htmlentities($vo['id']); ?>"></label>
                    <?php else: ?>
                    	<input type="radio" id="check_<?php echo htmlentities($vo['id']); ?>" name="ids[]" value="<?php echo htmlentities($vo['id']); ?>" class="ids regular-radio">
                    	<label for="check_<?php echo htmlentities($vo['id']); ?>"></label>
                    <?php endif; ?>
                  </td>
                  <td type="headimgurl"><?php echo htmlentities($vo['id']); ?></td>
                  <td type="content"><?php echo $vo['content']; ?></td>
                </tr>
              <?php endforeach; endif; else: echo "" ;endif; ?>
            </tbody>
          </table>
        </div>
      </div>
      <?php endif; ?>
      <div class="page"> <?php echo (isset($_page) && ($_page !== '')?$_page:''); ?> </div>
    </section>
  </div>

<script type="text/javascript">
$(function(){
	//搜索功能
	$("#search").click(function(){
		var url = $(this).attr('url');
        var query  = $('.search-form').find('input').serialize();
        query = query.replace(/(&|^)(\w*?\d*?\-*?_*?)*?=?((?=&)|(?=$))/g,'');
        query = query.replace(/^&/g,'');
//        query = query.replace(/(^\s*)|(\s*$)/g, "");
        if( url.indexOf('?')>0 ){
            url += '&' + query;
        }else{
            url += '?' + query;
        }
        if(query == '' ){
        	url="<?php echo U('material/Material/text_lists',array('isAjax'=>1,'isRadio'=>$isRadio)); ?>";
        }
		url = change_search_url(url);
		window.location.href = url;
	});

    //回车自动提交
    $('.search-form').find('input').keyup(function(event){
        if(event.keyCode===13){
            $("#search").click();
        }
    });
	$('select[name=group]').change(function(){
		location.href = this.value;
	});

})
</script>
</body>
</html>
