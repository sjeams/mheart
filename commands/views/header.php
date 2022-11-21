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
        border: 1px solid #0044cc;
        text-align: center ;
    }
    .video_header td a{
        color: white;
        width: 100%;
        margin: auto;
        display: inline-block;
    }
    .video_header td{
        width: 33.33%;
    }
    /* center */
    .video_center{
        /* border: 1px solid #0044cc; */
        height: 90%;
        /* position: fixed; */
        display: flex;
        margin:48px auto;
        left:0; 
        right:0; 
    }
</style>
<div class="video_header center  "> 
    <table class="table table-bordered  tablestyle">
        <tr>
            <td class="btn-primary"><a class=" " href="/cn/video/list">采集</a></td>
            <?php if($userlogin['graden']>0) {?>
            <td class="btn-primary"><a class=" " href="/cn/video/index">内容</a> </td>
            <?php } ?>
            <td class="btn-primary" ><a class=" " href="javascript:;" onclick="loginOuts()">(<?php echo $userlogin['name'] ?>)退出</a> </td>
        </tr>
    </table>
</div>
<div class="video_center "> 
<script  >
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