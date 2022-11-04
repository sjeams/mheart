
<!DOCTYPE html>
<html lang="en">
<head>
<!-- 自适应布局 -->
<meta name="viewport"   content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"> 
<link rel="stylesheet" type="text/css" href="/ckplayer/css/video.css">
<link rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
<script type="text/javascript" src="/ckplayer/hls.js/hls.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>
<link href="/backStage/css/coreCss/bootstrap-combined.min.css" rel="stylesheet">
<script type="text/javascript" src="/easyui/jquery.min.js"></script>
<script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件 -->
<script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
</head>
<body>

<?php use app\commands\HeaderWidget;?>
<?php HeaderWidget::begin();?>
<?php HeaderWidget::end();?> 

<?= $content ?>

<?php use app\commands\FooterWidget;?>
<?php FooterWidget::begin();?>
<?php footerWidget::end();?> 
<!-- <div class="center top"><a href="#top" class="btn" title="回到顶端">回到顶部</a></div> -->
<!-- <div style="height:30px;overflow:hidden"></div>  -->
<!-- <div class="footer"><a href="#top" class="btn" title="回到顶端">top</a></div> -->

</body>
<script>
// 视频隐藏
function videoHidden(){

var hiddenvalue = $("#hiddenvalue").val();
if(hiddenvalue==1){
    $("#hiddenvalue").val(0); 
    $('.videohidden').css("display","table-column");
}else{
    $("#hiddenvalue").val(1); 
    $('.videohidden').css("display","block");
}

}
// 点击事件监听
$(document).keyup(function(event){
    if(event.keyCode ==13){
        gou();
    }
});
</script>

