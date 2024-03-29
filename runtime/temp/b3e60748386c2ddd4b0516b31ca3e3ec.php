<?php /*a:1:{s:41:"../application/common/view/base/jump.html";i:1558430650;}*/ ?>
 <!DOCTYPE html>
    <html lang="en">
    
    <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        
    <title>跳转提示</title>

    <style type="text/css">
        body,html,p,div,a,img{ padding: 0; margin: 0; }
        body,html {width:100%;height:100%;}
        body{ background: #fff; font-family: "Microsoft Yahei","Helvetica Neue",Helvetica,Arial,sans-serif; color: #333; font-size: 16px; }
        .system-message{
            text-align: center;
            height:100%;
            padding-top: 5em;
            box-sizing: border-box;
        }
        .succ-icon,
        .err-icon {
            margin-bottom: 1.5em;
        }
        .success, .error {
            font-size: 28px;
        }
        .system-message .jump a,
        .system-message .jump {color: #ddd;}

        .system-message .jump{ padding-top: 10px;font-size: 18px;}
        .system-message .detail{ font-size: 12px; line-height: 20px; margin-top: 12px; display: none; }

        @media (max-width: 500px) {
			.success, .error {
				font-size: 18px;
			}
            .succ-icon img, .err-icon img {
                width: 50%;
            }
            .system-message .jump {font-size: 14px;}
        }
    </style>
    
</head>
<body>
    <div class="system-message">
        <?php !isset($code) && $code = 1; !isset($wait) && $wait = 3; switch ($code) {case 1:?>
            <div class="succ-icon">
                <img src="<?php echo SITE_URL; ?>/static/base/images/succeed_icon.png">
            </div>
            <p class="success"><?php echo(strip_tags($msg));?></p>
            <?php break;case 0:?>
            <div class="err-icon">
                <img src="<?php echo SITE_URL; ?>/static/base/images/error_icon.png">
            </div>
            <p class="error"><?php echo(strip_tags($msg));?></p>
            <?php break;} ?>
        <p class="detail"></p>
        <?php if(!empty($_SERVER['HTTP_REFERER']) || !empty($url)): ?>
        <p class="jump">
            页面自动 <a id="a_href" href="javascript:jump()">跳转</a> 等待时间： <span id="wait"><?php echo($wait);?></span>
        </p>
        <?php endif; ?>
    </div>
    <script type="text/javascript">
	function jump(){
		var url = "<?php echo($url);?>";
		
		if(url!=''){
		   location.href = url;
		}else{
			window.history.back(-1)
		}
	}
    (function(){
        var wait = document.getElementById('wait')              

        var interval = setInterval(function(){
            var time = --wait.innerHTML;
            if(time <= 0) {
                clearInterval(interval);
				jump()
            };
        }, 1000);
    })();
    </script>
</body>
</html>
