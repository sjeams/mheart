 
<style>
    .login_check{
        font-size: 24px;
        /* position: fixed; */
        display: inline-block;
        width: 100%;
        margin: 30% auto ;
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
        font-size: 18px;
         border-radius: 5px;
        background-color: #4c54b3!important; 
        color: white;
        line-height: 50%;
    }
    .login_check input{
        border-radius: 5px;
        /* background-color: #4c54b3;  */
        /* color: white; */
        text-align: center;
    }
    .logincss{
        width: 100%;
        height: 40px;
        display: block;
        font-size: 24px;
    }
    .logincss_btn{
        width: 45%;
        height: 40px;
        display: inline-block;
        font-size: 24px;
        margin: 10px auto;
        background-color:  #5879f3a3!important;
    }
    .top{
        display: none;
    }
    .login_rigth{
        float: right;
    }
    .login_left{
        float: left;
    }
    .error{
        color: red!important;
        width: 100%;
        height: 20px;
        display: block;
        font-size: 14px;
    }
    .container{
        top:0;
    }
</style>

<div class="container">
    <!-- <ul class="breadcrumb">
    </ul> -->
<table class="table  "  >
    <thead>	  
        <tr>
        <td>
        <div class="login_check">
            <span class="logincss">心缘测试</span>
            <input type="text" name="phone" value="" class="logincss" placeholder="账号：快速注册可用手机号" id="phone">
            <input type="password" name="password" value="" class="logincss" placeholder="密码" id="password">
            <span class="error "></span>
                <!-- <button onclick="loginIn()" class="logincss">登录</button>             <button onclick="loginIn()" class="logincss">登录</button>  -->
            <button  class=" logincss_btn login_left" onclick="loginPhone()"  >   游客登录 </button>
            <button   class=" logincss_btn login_rigth" onclick="loginPhone()"   >  快速登陆</button>
        </div>

        </td>
    <thead>
</table>

</div>
<script>
    // $(function(){
    //     var sslToken =  localStorage.getItem('sslToken');
    //     if(sslToken){
    //         $.ajax({
    //             url: '/cn/login/login-token', // 跳转到 action 
    //             data:{
    //                 token:sslToken,
    //             },
    //             type: 'post',
    //             dataType: 'json',
    //             success: function (data) {
    //                 console.log(data)
    //                 if(data.code==1){
    //                     //登录后设置session
    //                     // localStorage.setItem('sslToken',data.data);
    //                     window.location.reload();   
    //                 }else{
    //                     localStorage.setItem('sslToken','');
    //                 }
    //                 // window.location.reload();
    //             },
    //         });
    //     }
    // })

    function  loginPhone(){
        phone = $("#phone").val();
        password = $("#password").val();
        $.ajax({
            url: '/cn/login/login-phone', // 跳转到 action 
            data:{
                phone:phone,
                password:password,
            },
            type: 'post',
            dataType: 'json',
            success: function (data) {
                console.log(data)
                if(data.code==1){
                    //登录后设置session
                    // localStorage.setItem('sslToken',data.data);
                    window.location.reload();   
                }else{
                    $('.error').text(data.message);
                }
                // window.location.reload();
            },
        });
    }

    // //登录
    // function  loginIn(){
    //     name = $("#phone").val();
    //     password = $("#password").val();
    //     $.ajax({
    //         url: '/cn/login/login-in', // 跳转到 action 
    //         data:{
    //             name:name,
    //             password:password,
    //         },
    //         type: 'post',
    //         dataType: 'json',
    //         success: function (data) {
    //             console.log(data)
    //             if(data.code==1){
    //                 window.location.reload();   
    //             }else{
    //                 $('.error').text(data.message);
    //             }
    //             // window.location.reload();
    //         },
    //     });
    // }
    // //快速注册
    // function  register(){
    //     name = $("#phone").val();
    //     password = $("#password").val();;
    //     $.ajax({
    //         url: '/cn/login/login-register', // 跳转到 action 
    //         data:{
    //             phone:name,
    //             password:password,
    //         },
    //         type: 'post',
    //         dataType: 'json',
    //         success: function (data) {
    //             // console.log(data)
    //             if(data.code==1){
    //                 window.location.reload();   
    //             }else{
    //                 $('.error').text(data.message);
    //             }
    //         },
    //     });
    // }
$(document).keyup(function(event){
    if(event.keyCode ==13){
        loginPhone();
    }
});
</script>






