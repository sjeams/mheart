
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="applicable-device" content="mobile">
<meta http-equiv="Cache-Control" content="no-transform">
<meta http-equiv="Cache-Control" content="no-siteapp">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<meta name="referrer" content="always">
<!-- <meta http-equiv="Access-Control-Allow-Origin" content="https://436727.166477.com"> -->
<!-- 自适应布局 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link href="/backStage/css/coreCss/bootstrap-combined.min.css" rel="stylesheet">
<script type="text/javascript" src="/easyui/jquery.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/jquery.md5.js"></script>
<!-- <script type="text/javascript" src="/ueditor/ueditor.config.js"></script> -->
<!-- 编辑器源码文件 -->  
<!-- 不需要编辑器 -->
<!-- <script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script> -->
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/videojs/list.js"></script>
<!-- <script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script> -->

<link rel="stylesheet" type="text/css" href="/bootstrap-4.6.1-dist/font/bootstrap-icons.css">
<link rel="stylesheet" type="text/css" href="/bootstrap-4.6.1-dist/css/bootstrap.min.css">
<!-- 自定义样式 -->
<!-- <link rel="stylesheet" type="text/css" href="/ckplayer/css/video.css"> -->
<!-- 自定义公共样式，覆盖所有 -->
<link rel="stylesheet" type="text/css" href="/ckplayer/css/common.css?v=1">
<title>心缘测试</title>
</head>
<body>
<!-- 头部 -->
<?php use app\commands\HeaderWidget;?>
<?php HeaderWidget::begin();?>
<?php HeaderWidget::end();?> 

<div class="video_center " onclick="MenuHidden()"  id="top" > 
    <div class="container">
        <!-- 视频窗口 -->
        <?php use app\commands\VideoWidget;?>
        <?php VideoWidget::begin();?>
        <?php VideoWidget::end();?> 
        <!-- 内容 -->
        <div class="header_content"> 
        <?= $content ?>
        </div>
        <!-- 备案 -->
        <?php use app\commands\BeiAnWidget;?>
        <?php BeiAnWidget::begin();?>
        <?php BeiAnWidget::end();?> 
    </div>
</div>


<!-- 底部 -->
<?php use app\commands\FooterWidget;?>
<?php FooterWidget::begin();?>
<?php FooterWidget::end();?> 
<!-- <div class="center top"><a href="#top" class="btn" title="回到顶端">回到顶部</a></div> -->
<!-- <div style="height:30px;overflow:hidden"></div>  -->
<!-- <div class="footer"><a href="#top" class="btn" title="回到顶端">top</a></div> -->
</body>

