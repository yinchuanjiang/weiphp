<?php /*a:1:{s:56:"/www/wwwroot/weiphp/application/h5/view/index/index.html";i:1558430650;}*/ ?>
<!DOCTYPE html>
<!-- saved from url=(0043)http://wx.diggid.cn/Wap1/Jingyu0905/index#/ -->
<html lang="zh-CN" style="font-size: 20.7px;">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp">
    <meta name="apple-mobile-web-app-title" content="vace">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <title>129周年国家地理邀你参展</title>
    <meta name="wx:config" api="share,voice,record">
    <meta name="wx:share" title="129年国家地理首次来肥！邀你参与摄影作品展PK！" desc="你的照片，也可以被收录进国家地理特别展">
    <script>
        var APP_CONFIG = {
            route: '',
            designWidth: 640, // 设计稿宽度
            base: 32,  // 根大小，计算html的font-size
            root: 16,
            screenWidth: 0,
            screenHeight: 0,
            music: false, // 音乐路径
            sharelayer: 'sharelayer.png', // 分享遮罩层路径
        };
        (function () {
            var openid = '<?php echo htmlentities($openid); ?>';
            window.localStorage.setItem('openid',openid);
            var avatar = '<?php echo htmlentities($avatar); ?>';
            var nickname = '<?php echo htmlentities($nickname); ?>';
            if(!avatar){
                window.localStorage.removeItem('avatar');
            }else {
                window.localStorage.setItem('avatar',avatar);
            }
            if(!nickname){
                window.localStorage.removeItem('nickname');
            }else {
                window.localStorage.setItem('nickname',nickname);
            }

            if(avatar && nickname){
                location.href = '#/photo';
            }

            var doc = document.documentElement, w = APP_CONFIG.designWidth, b = APP_CONFIG.base

            function resize() {
                var rect = doc.getBoundingClientRect()
                var root = APP_CONFIG.root = rect.width / w * b
                APP_CONFIG.screenWidth = rect.width
                APP_CONFIG.screenHeight = rect.height || window.innerHeight
                doc.style.fontSize = root + 'px'
            }

            resize()
            window.addEventListener('resize', resize, false)

        })();</script>
    <link rel="stylesheet" href="/css/font_405927_zn9t5o7hhvj3v7vi.css">
    <link rel="stylesheet" href="/css/vuep.css">
    <link href="/css/index.css" rel="stylesheet">
</head>
<body>
<div id="mix">
    <router-view></router-view>
</div>
<audio src="/static/background.mp3" id="audio" style="display: none" loop ></audio>
<script src="/js/app.js"></script>
<script src="https://cdn.bootcss.com/layer/2.3/layer.js"></script>
<link href="https://cdn.bootcss.com/layer/2.3/skin/layer.css" rel="stylesheet">
<script>
    //    document.addEventListener('touchstart', function () {
    //        function audioAutoPlay() {
    //            var audio = document.getElementById('audio');
    //            audio.play();
    //        }
    //        audioAutoPlay();
    //    });
</script>
</body>
</html>