<!DOCTYPE html>
<html lang="en">
<head>
  <title>Contact</title>

  <meta charset="utf-8">
  <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <meta name="description" content="">
  
  <!-- Google Fonts -->
  <!-- <link href='http://fonts.googleapis.com/css?family=Raleway:300,400%7COpen+Sans:400,400i,700%7CLibre+Baskerville:400i' rel='stylesheet'> -->
  <link href='/sign/sign.css' rel='stylesheet'>
  <!-- Css -->
  <link rel="stylesheet" href="/sign/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/sign/css/font-icons.css" />
  <link rel="stylesheet" href="/sign/css/sliders.css" />
  <link rel="stylesheet" href="/sign/css/style.css" />
  <link rel="stylesheet" href="/sign/css/responsive.css" />
  <link rel="stylesheet" href="/sign/css/spacings.css" />
  <link rel="stylesheet" href="/sign/css/animate.min.css" />
  <link rel="stylesheet" href="/layuimini/lib/layui-v2.5.4/css/layui.css" media="all">
  <link rel="stylesheet" href="/layuimini/css/public.css" media="all">

</head>
<style>
.layui-form-pane .layui-form-label {
    width: 110px;
    padding: 8px 15px;
    height: 42px;
    line-height: 28px;
    border-width: 1px;
    border-style: solid;
    border-radius: 2px 0 0 2px;
    text-align: center;
    background-color: #FBFBFB;
    overflow: hidden;
    box-sizing: border-box;

}
.colrstyle{
        background-color: #122a88;
  
    }
</style>

<body class="relative">

  <!-- Preloader -->
  <div class="loader-mask">
    <div class="loader">
      <div></div>
      <div></div>
    </div>
  </div>

  <div class="main-wrapper oh">

    <!-- 头部log -->
    <!-- <section class="header-wrap bg-light">
      <div class="container">
        <div class="logo-container text-center">
          <div class="logo-wrap">
            <a href="index.html">
              <img class="logo-dark" src="/sign/img/logo_dark_big.png" alt="logo">
            </a>
          </div>
        </div>
      </div>
    </section> -->

    <div class="content-wrapper oh">

      <!-- Content -->
      <!-- <section class="section-wrap contact pt-mdm-60"> -->
      <section class="">
        <div class="container relative">
          <!-- <div class="text-center">
            <h1 class="heading underline-title uppercase">贷款信息评估</h1>
            <h2>贷款评估</h2>
           
          </div> -->
          <div class="row">            
            <div class="col-sm-10 col-sm-offset-1">
 
              <!-- contact form -->
              <div class="contact-form mt-30">

      <?=$content?>
      <div id="back-to-top">
<a href="#top"><i class="fa fa-angle-up"></i></a>
</div>

</div> <!-- end content wrapper -->
</div> <!-- end main wrapper -->

<!-- jQuery Scripts -->
<script type="text/javascript" src="/sign/js/jquery.min.js"></script>
<script type="text/javascript" src="/sign/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/sign/js/plugins.js"></script>
<script type="text/javascript" src="/sign/js/scripts.js"></script>





</body>
</html>

<script src="/layuimini/lib/layui-v2.5.4/layui.js" charset="utf-8"></script>
<!-- 注意：如果你直接复制所有代码到本地，上述js路径需要改成你本地的 -->
<script>
layui.use(['form', 'layedit', 'laydate'], function () {
var form = layui.form
, layer = layui.layer
, layedit = layui.layedit
, laydate = layui.laydate;

//日期
laydate.render({
elem: '#date'
});
laydate.render({
elem: '#date1'
});

//创建一个编辑器
var editIndex = layedit.build('LAY_demo_editor');

//自定义验证规则
form.verify({
title: function (value) {
    if (value.length < 5) {
        return '标题至少得5个字符啊';
    }
}
, pass: [
    /^[\S]{6,12}$/
    , '密码必须6到12位，且不能出现空格'
]
, content: function (value) {
    layedit.sync(editIndex);
}
});

//监听指定开关
form.on('switch(switchTest)', function (data) {
layer.msg('开关checked：' + (this.checked ? 'true' : 'false'), {
    offset: '6px'
});
layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
});

//监听提交
form.on('submit(demo1)', function (data) {
layer.alert(JSON.stringify(data.field), {
    title: '最终的提交信息'
})
return false;
});

 

});
</script>

