<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="title" content="在线视频">
    <meta name="description" content="在线视频">
    <meta name="keywords" content="在线视频">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title>测试</title>
    <link rel="stylesheet" type="text/css" href="/bootstrap-4.6.1-dist/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="/bootstrap-4.6.1-dist/css/bootstrap.min.css">
    <script type="text/javascript" src="/easyui/jquery.min.js"></script>
    <!-- 编辑器源码文件 -->
    <script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
    <script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
    <script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
    <!-- 编辑器公式插件 -->
    <!-- <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/addKityFormulaDialog.js"></script>
    <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/getKfContent.js"></script>
    <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/defaultFilterFix.js"></script> -->
    <!-- layui弹窗 -->
    <link rel="stylesheet" href="/layui-v2.6.8/layui/css/layui.css">
    <script src="/layui-v2.6.8/layui/layui.js"></script>
    <link rel="stylesheet" type="text/css" href="/ckplayer/css/video.css">
    <link rel="stylesheet" type="text/css" href="/ckplayer/css/common.css?v=1">
    <!-- vue 组件 -->
    <script  type="text/javascript" src="/vue/vue.js"></script>
</head>
<body>
<?php use app\commands\HeaderWidget;?>
<?php HeaderWidget::begin();?>
<?php HeaderWidget::end();?> 
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
</body>
</html>

<script type="text/javascript" charset="utf-8" src="/ckplayer/js/common.js"></script>

