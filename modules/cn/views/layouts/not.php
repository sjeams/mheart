<!--<link href="/style/default.css" rel="stylesheet" media="screen" type="text/css" />-->

<!-- <script type="text/javascript" src="/jmeditor/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/jmeditor/JMEditor.js"></script> -->

<!DOCTYPE html>
<html>

<head>

    <!--阻止浏览器缓存-->
    <title><?php echo $this->context->title ?></title>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="Cache" content="no-cache">
    <!--禁止百度转码-->
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <!-- Basic Page Needs
     ================================================== -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!-- 让IE浏览器用最高级内核渲染页面 还有用 Chrome 框架的页面用webkit 内核
    ================================================== -->
    <meta http-equiv="X-UA-Compatible" content="chrome=1,IE=edge">
    <!-- IOS6全屏 Chrome高版本全屏
    ================================================== -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <!-- 让360双核浏览器用webkit内核渲染页面
      ================================================== -->
    <meta name="renderer" content="webkit">
    <meta name="keywords" content="<?php echo $this->context->keywords ?>。">
    <meta name="description" content="<?php echo $this->context->description ?>">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <!-- <link rel="stylesheet" type="text/css" href="pc/css/kefu.css"> -->
    <script src="pc/js/jquery-1.8.3.min.js" type="text/javascript"></script>
</head>

<!-- <script type="text/javascript">
$(function(){
    $("#aFloatTools_Show").click(function(){
        $('#divFloatToolsView').animate({width:'show',opacity:'show'},100,function(){$('#divFloatToolsView').show();});
        $('#aFloatTools_Show').hide();
        $('#aFloatTools_Hide').show();				
    });
    $("#aFloatTools_Hide").click(function(){
        $('#divFloatToolsView').animate({width:'hide', opacity:'hide'},100,function(){$('#divFloatToolsView').hide();});
        $('#aFloatTools_Show').show();
        $('#aFloatTools_Hide').hide();	
    });
});
</script> -->
<!--kefu-->
<!-- <div id="floatTools" class="rides-cs" style="height:246px;">
  <div class="floatL">
  	<a style="display:block" id="aFloatTools_Show" class="btnOpen" title="查看在线客服" style="top:20px" href="javascript:void(0);">展开</a>
  	<a style="display:none" id="aFloatTools_Hide" class="btnCtn" title="关闭在线客服" style="top:20px" href="javascript:void(0);">收缩</a>
  </div>
  <div id="divFloatToolsView" class="floatR" style="display: none;height:237px;width: 140px;">
    <div class="cn">
      <h3 class="titZx">在线客服</h3>
      <ul>
        <li><span>客服1</span> <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=123456789&site=qq&menu=yes"><img border="0" src="pc/image/kefu/online.png" alt="点击这里给我发消息" title="点击这里给我发消息"/></a> </li>
        <li><span>客服2</span> <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=123456789&site=qq&menu=yes"><img border="0" src="pc/image/kefu/online.png" alt="点击这里给我发消息" title="点击这里给我发消息"/></a> </li>
        <li>
            <a href="http://www.sucaijiayuan.com/Js" target="_blank">微信二维码</a>


            <div class="div_clear"></div>
        </li>


      </ul>
      <img src="pc/image/kefu/lun1.png" style="width:50%;" border="0"  alt="">
    </div>
  </div>
</div> -->
<!--kefu-->

<?=$content?>
</body>
</html>