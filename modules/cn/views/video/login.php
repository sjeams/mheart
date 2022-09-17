<script type="text/javascript" src="/easyui/jquery.min.js"></script>
<style>
     input{
     height: 30px!important;
     border-radius: 5px!important;
     width: 50%!important;
 }
    .check{
         /* display: flex; */
         /* float: left; */
         position: fixed;
        /* padding: 5px; */
        display: inline-block;
        /* overflow-y: scroll; */
        width: 100%;
        margin: 25% auto ;
        text-align: center;

     }
     .checka{
        display: inline-block;
        min-width: 38%;
        padding: 2% 5%;
        border: 1px solid black;
        text-align: center;  
        border-radius: 5px; 
        margin:  5px auto;
 
        /* background-color: #b7efc3; */
     }
     .checka span{
         /* border-radius: 5px;
        background-color: #4c54b3;  */
        color: #4c54b3;
        font-weight: bold;
    }
     .checka button{
         border-radius: 5px;
        background-color: #4c54b3; 
        color: white;
    }
    .checka input{
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
<div class="check">
    <div class="checka">
        <span class="logincss">登录系统</span>
        <input type="text" name="login" value="" class="logincss" id="login">
        <button onclick="loginIn()" class="logincss">登录</button> 
    </div>
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

</script>






