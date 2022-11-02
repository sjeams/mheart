 <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>在线视频</title>
    <!-- Le styles -->
    <meta name="viewport"   content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="https://file.viplgw.cn/ui/gre/backStage/css/coreCss/bootstrap-combined.min.css?v=1" rel="stylesheet">
    <script type="text/javascript" src="/easyui/jquery.min.js"></script>
    <script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
    <!-- 编辑器源码文件 -->
    <script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
    <!-- 编辑器公式插件 -->
    <!-- <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/addKityFormulaDialog.js"></script>
    <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/getKfContent.js"></script>
    <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/defaultFilterFix.js"></script> -->
    <script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
</head>
<style>
input{
     height: 40px!important;
     border-radius: 5px!important;
 }
     
    .login_check{
        font-size: 24px;
        /* position: fixed; */
        display: inline-block;
        width: 100%;
        margin: 25% auto ;
        text-align: center;
     }
     /* .login_checka{
        display: inline-block;
        min-width: 38%;
        padding: 2% 5%;
        border: 1px solid black;
        text-align: center;  
        border-radius: 5px; 
        margin:  5px auto;
     } */
    .login_check span{
         /* border-radius: 5px;
        background-color: #4c54b3;  */
        color: #4c54b3;
        font-weight: bold;
    }
    .login_check button{
         border-radius: 5px;
        background-color: #4c54b3; 
        color: white;
    }
    .login_check input{
        border-radius: 5px;
        background-color: #4c54b3; 
        color: white;
        text-align: center;
    }
    .logincss{
        width: 100%;
        height: 40px;
        display: inline-block;
        font-size: 24px;
        margin: 10px auto;

    }
</style>
 
<div class="container">
    <ul class="breadcrumb">
    </ul>
 
<table class="table  "  >
    <thead>
        <tr>
        <td>
        <div class="login_check">
            <span class="logincss">登录系统</span>
            <input type="text" name="login" value="" class="logincss" id="login">
            <button onclick="loginIn()" class="logincss">登录</button> 
        </div>
        </td>
        </tr>
    <thead>
</table>
</div>
<script>
    //登录
    function  loginIn(){
        login = $("#login").val();
        $.ajax({
            url: '/cn/video/login', // 跳转到 action 
            data:{
                login:login,
            },
            type: 'post',
            dataType: 'json',
            success: function (data) {
                // console.log(data)
                window.location.reload();
            },
        });
    }
$(document).keyup(function(event){
    if(event.keyCode ==13){
        loginIn();
    }
});
</script>






