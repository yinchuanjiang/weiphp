<?php /*a:2:{s:61:"/www/wwwroot/weiphp/application/install/view/index/index.html";i:1558316876;s:60:"/www/wwwroot/weiphp/application/install/view/index/base.html";i:1558316876;}*/ ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WeiPHP 安装</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- Le styles -->
        <link href="/static/bootstrap/css/bootstrap.css" rel="stylesheet">
        <link href="/static/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
        <link href="/install/css/install.css" rel="stylesheet">

        <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="assets/js/html5shiv.js"></script>
        <![endif]-->
        <script src="/static/jquery-1.10.2.min.js"></script>
        <script src="/static/bootstrap/js/bootstrap.js"></script>
    </head>

    <body data-spy="scroll" data-target=".bs-docs-sidebar">
        <!-- Navbar
        ================================================== -->
        <div class="navbar navbar-inverse">
            <div class="navbar-inner">
                <div class="container">
                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="nav-collapse collapse">
                    	<p class="install_logo"><span><img width="50px;" src="/install/images/install.png"/></span></p>
                    	<ul id="step" class="nav">
                    		
    <li class="active"><a href="javascript:;"><span>1</span>安装协议</a></li>
    <li><a href="javascript:;"><span>2</span>环境检测</a></li>
    <li><a href="javascript:;"><span>3</span>创建数据库</a></li>
    <li><a href="javascript:;"><span>4</span><?php if(app('session')->get('update') == '1'): ?>升级<?php else: ?>安装<?php endif; ?></a></li>
    <li><a href="javascript:;"><span>5</span>完成</a></li>

                    	</ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="jumbotron masthead">
            <div class="container">
                
	<div class="notice">
    <h1>WeiPHP5.0开源授权许可协议</h1>

    <div yne-bulb-block="paragraph">版权所有 (c) 2018，深圳市圆梦云科技有限公司保留所有权利。</div>
    <div yne-bulb-block="paragraph">感谢您选择WeiPHP，WeiPHP专为公众号与小程序的运营管理系统</div>
    <div yne-bulb-block="paragraph">深圳市圆梦云科技有限公司为WeiPHP产品的开发商，依法独立拥有WeiPHP产品著作权。WeiPHP官方网站网址为 https://www.weiphp.cn。</div>
    <div yne-bulb-block="paragraph">使用者：无论个人或组织、盈利与否、用途如何（包括以学习和研究为目的），均需仔细阅读本协议，在理解、同意、并遵守本协议的全部条款后，方可开始使用WeiPHP软件。</div>
    <div yne-bulb-block="paragraph">深圳市圆梦云科技有限公司拥有对本授权协议的最终解释权。</div>
    <div yne-bulb-block="paragraph">1.0   协议许可的权利</div>
    <div yne-bulb-block="paragraph">1)    您可以在完全遵守本最终用户授权协议的基础上，将本软件应用于商业用途与否，而不必支付软件版权授权费用；</div>
    <div yne-bulb-block="paragraph">2)    您可以在协议规定的约束和限制范围内修改 WeiPHP 源代码或界面风格以适应您的网站要求；</div>
    <div yne-bulb-block="paragraph">3)    您拥有使用本软件构建的社区中全部会员资料、文章及相关信息的所有权，并独立承担与文章内容的相关法律义务；</div>
    <div yne-bulb-block="paragraph">2.0   协议规定的约束和限制</div>
    <div yne-bulb-block="paragraph">1)    无论如何，即无论用途如何、是否经过修改或美化、修改程度如何，只要使用WeiPHP的整体或任何部分，未经书面许可，页面页脚处的 Powered by WeiPHP名称和官网网站的链接（https://www.weiphp.cn ）都必须保留，而不能清除或修改；</div>
    <div yne-bulb-block="paragraph">2)    禁止WeiPHP的整体或任何部分基础上以发展任何派生版本、修改版本或第三方版本用于重新分发；</div>
    <div yne-bulb-block="paragraph">3)    如果您未能遵守本协议的条款，您的授权将被终止，所被许可的权利将被收回，并承担相应法律责任。</div>
    <div yne-bulb-block="paragraph">3.0     有限担保和免责声明</div>
    <div yne-bulb-block="paragraph">1)    本软件及所附带的文件是作为不提供任何明确的或隐含的赔偿或担保的形式提供的；</div>
    <div yne-bulb-block="paragraph">2)    用户出于自愿而使用本软件，您必须了解使用本软件的风险，在尚未购买增值产品技术服务之前，我们不承诺提供任何形式的技术支持、使用担保，也不承担任何因使用本软件而产生问题的相关责任；</div>
    <div yne-bulb-block="paragraph">3)    深圳市圆梦云科技有限公司不对使用本软件构建的系统中的文章或信息承担责任。</div>
    <div yne-bulb-block="paragraph">有关WeiPHP最终用户授权协议、技术服务的详细内容，均由WeiPHP官方网站独家提供。深圳市圆梦云科技有限公司拥有在不事先通知的情况下，修改授权协议和服务价目表的权力，修改后的协议或价目表对自改变之日起的新授权用户生效。</div>
    <div yne-bulb-block="paragraph">电子文本形式的授权协议如同双方书面签署的协议一样，具有完全的和等同的法律效力。您一旦开始安装 WeiPHP，即被视为完全理解并接受本协议的各项条款，在享有上述条款授予的权力的同时，受到相关的约束和限制。协议许可范围以外的行为，将直接违反本授权协议并构成侵权，我们有权随时终止授权，责令停止损害，并保留追究相关责任的权力。</div>

</div>

            </div>
        </div>


        <!-- Footer
        ================================================== -->
        <footer class="footer">
            <div class="container">
                <div>
                	
    <a class="btn btn-primary btn-large" href="<?php echo U('install/step1'); ?>">同意安装协议</a>
    &nbsp;&nbsp;&nbsp;
    <a class="btn btn-large" href="https://www.weiphp.cn">不同意</a>

                </div>
            </div>
        </footer>
    </body>
</html>
