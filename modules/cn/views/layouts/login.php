
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
<title>心缘测试</title>
</head>
<body>
<style>
/* center */
.video_center{
        /* border: 1px solid #0044cc; */
        height: 100%;
        width: 100%;
        max-width: 400px;
        min-height: 400px;
        position: fixed;
        display: flex;
        margin:0px auto;
        left:0; 
        right:0; 
        top:0; 
        bottom:0;
        /* position: fixed;
        margin:auto;
        left:0; 
        right:0; 
        top:0; 
        bottom:0;
        display: inline-block; */

    }
    footer{
        position: fixed;
        margin:0px auto;
        left:0; 
        right:0; 
        /* top:0;  */
        bottom:0;  
    }
</style>
<div class="video_center "> 
<?= $content ?>
</div>
 

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


<footer class="center"> 
    <p>
        Copyright © 2022-现在 心缘测试
        <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" rel="external nofollow">
            蜀ICP备2022010153号-1
        </a>
        <!-- <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" rel="external nofollow">
            ICP证书: 沪B2-20180057
        </a><br> -->
    </p>
    </div></div>
</footer>