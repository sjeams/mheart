<style>
	.video_header{
        /* margin: auto  0px ; */
		/* border: 1px solid black; */
        height:38px;
        width: 100%;
        position: fixed;
        margin:auto;
        left:0; 
        right:0; 
        top:0; 
        /* bottom:0; */
        display: inline-block;
	}
    .video_header td{
        background-color: white;
        /* border: 1px solid #0044cc; */
        text-align: center ;
    }
    .video_header td a{
        color: white;
        width: 100%;
        margin: auto;
        display: inline-block;
    }
    .video_header td{
        /* width:100%; */
    }
    /* center */
    .video_center{
        /* border: 1px solid #0044cc; */
        height: 100%-80px;
        /* position: fixed; */
        display: flex;
        margin:60px auto;
        left:0; 
        right:0; 
        top:38px;
        z-index: 1;
    }
    .menu_list{
        width: 180px;
        position: fixed;
        margin:0px auto;
        /* left:0;  */
        right:0;   
        display: none;
    }
    .td_menu_list{
        width: 180px;
    }
</style>
<div class="video_header center  "> 
    <table class="table table-bordered  tablestyle mb-0">
        <tr>
            <td class="btn-primary"><a class=" " href="/cn/video/list">采集</a></td>
            <?php if($userlogin['graden']>0) {?>
            <td class="btn-primary"><a class=" " href="/cn/video/index">内容</a> </td>
            <?php } ?>
            <td class="btn-primary" class="td_menu_list">
                <input type="hidden" name="" id="menu" value="0">
                <a class=" " href="javascript:;"  onclick="Menu()" ><?php echo $userlogin['name'] ?>&nbsp;<i class="bi bi-gear"></i></a>
            </td>
        </tr>

    </table>
    <ul class="list-group text-center menu_list">
        <li class="list-group-item active" onclick="loginOuts()"> 退出</li>
    </ul>
</div>

<div class="video_center "> 
<script  >
    function Menu(){
       var menu =$("#menu").val();
       if(menu==1){
            $('.menu_list').css('display','none');
            $("#menu").val(0)
       }else{
            $('.menu_list').css('display','block');
            $("#menu").val(1)
        }
    }
    //退出
    function  loginOuts(){
        $.ajax({
            url: '/cn/login/login-out', // 跳转到 action 
            type: 'post',
            data:{
                out:1,
            },
            dataType: 'json',
            success: function (data) {
                window.location.reload();   
            },
        });
    }
</script>