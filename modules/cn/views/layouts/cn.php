
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
 
<!-- 自适应布局 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

<link rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
<script type="text/javascript" src="/ckplayer/hls.js/hls.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>
<link href="/backStage/css/coreCss/bootstrap-combined.min.css" rel="stylesheet">
<script type="text/javascript" src="/easyui/jquery.min.js"></script>
<script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件 -->
<script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
<!-- <script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script> -->

<link rel="stylesheet" type="text/css" href="/ckplayer/css/common.css">

 
<!-- layui弹窗 -->
<link rel="stylesheet" href="/layui-v2.6.8/layui/css/layui.css">
<script src="/layui-v2.6.8/layui/layui.js"></script>

<link rel="stylesheet" type="text/css" href="/bootstrap-4.6.1-dist/font/bootstrap-icons.css">
<link rel="stylesheet" type="text/css" href="/bootstrap-4.6.1-dist/css/bootstrap.min.css">

<!-- 自定义样式 -->
<link rel="stylesheet" type="text/css" href="/ckplayer/css/video.css">
<!-- 轮播图 -->
<link rel="stylesheet" type="text/css" href="/swiper/swiper-bundle.min.css">
<script type="text/javascript" src="/swiper/swiper-bundle.min.js"></script>

<script type="text/javascript" charset="utf-8" src="/ckplayer/js/jquery.md5.js"></script>


<title>心缘测试</title>
</head>
<body>
<!-- 头部 -->
<?php use app\commands\HeaderWidget;?>
<?php HeaderWidget::begin();?>
<?php HeaderWidget::end();?> 

<div class="container">
    <!-- 视频窗口 -->
    <?php use app\commands\VideoWidget;?>
    <?php VideoWidget::begin();?>
    <?php VideoWidget::end();?> 
    <!-- 内容 -->
    <?= $content ?>
    <!-- 备案 -->
    <?php use app\commands\BeiAnWidget;?>
    <?php BeiAnWidget::begin();?>
    <?php BeiAnWidget::end();?> 
</div>
<!-- 底部 -->
<?php use app\commands\FooterWidget;?>
<?php FooterWidget::begin();?>
<?php FooterWidget::end();?> 
<!-- <div class="center top"><a href="#top" class="btn" title="回到顶端">回到顶部</a></div> -->
<!-- <div style="height:30px;overflow:hidden"></div>  -->
<!-- <div class="footer"><a href="#top" class="btn" title="回到顶端">top</a></div> -->

</body>
<script>
// 视频隐藏
function videoHidden(open){
    if(open==1){
        var hiddenvalue = 0; //默认开启
    }else{
        var hiddenvalue = $("#hiddenvalue").val();
    }
    // console.log(hiddenvalue)
    if(hiddenvalue==1){
        $("#hiddenvalue").val(0); 
        $('.videohidden').css("display","table-column");
    }else{
        $("#hiddenvalue").val(1); 
        $('.videohidden').css("display","table-cell");
    }

}
// 点击事件监听
$(document).keyup(function(event){
    if(event.keyCode ==13){
        gou();
    }
});

// 异步html
function getprintHtml(url){
    var getHtml =$.ajax({
        type:"get",
        url: url,
        dataType: 'json',
        async: false,
    });
    return getHtml.responseText;
}
</script>
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/common.js"></script>