<style>
	.video_header{
        /* margin: auto  0px ; */
		/* border: 1px solid black; */
        height:40px;
        width: 100%;
        position: fixed;
        margin:auto;
        left:0; 
        right:0; 
        top:0; 
        /* bottom:0; */
        display: inline-block;
        z-index: 100;
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
        top:40px;
        z-index: 1;
    }
    .menu_list{
        /* width: 120px!important; */
        width: 25%;
        position: fixed;
        margin:0px auto;
        /* left:0;  */
        right:0;   
        display: none;
        z-index: 101;
    }
 
    .tablestyle td{
        width: 25%;
    }
</style>
<div class="video_header center  top-title"> 
    <table class="table table-bordered  tablestyle mb-0">
        <tr>
            <td class="btn-primary"><a class="caiji_name" href="/cn/video/list">采集</a></td>
            <?php if($userlogin['graden']>0) {?>
                <td class="btn-primary"><a class=" " onclick="my_collect()"> 收录</a> </td>
                <td class="btn-primary"><a class=" " onclick="my_video()"> 收藏</a> </td>
            <?php } ?>
            <td class="btn-primary"   >
                <input type="hidden" name="" id="menu" value="0">
                <a class=" " href="javascript:;"  onclick="Menu()" ><?php echo $userlogin['name'] ?>&nbsp;<i class="bi bi-gear"></i></a>
            </td>
        </tr>
    </table>
    <ul class="list-group text-center menu_list">
        <?php if($userlogin['graden']>0) {?>
            <li class="list-group-item btn-defult" onclick="old_content()"> 喜欢</li>
            <!-- <?php   if( explode('?',$_SERVER["REQUEST_URI"])[0]=='/cn/video/list'){ ?><?php }?> -->
            <li class="list-group-item  bofang_name  <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_bofang']?'btn-success':'btn-defult' ?>" onclick="isBofang()"> <?php echo $userlogin['is_bofang']?'播放√':'播放×' ?></li>
            <li class="list-group-item  cache_name  <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_cache']?'btn-success':'btn-defult' ?>" onclick="isCache()"> <?php echo $userlogin['is_cache']?'缓存√':'缓存×' ?></li>
        <?php } ?>

        <li class="list-group-item btn-defult" onclick="loginOuts()"> 退出</li>
    </ul>
</div>

<div class="video_center "> 
<script  >
    function my_collect(){
        window.location.href='/cn/video/query-video';  
    }
    function old_content(){
        window.location.href='/cn/video/index';  
    }
    function my_video(){
        window.location.href='/cn/video/collect-video';
    }
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
    
    function isBofang(){
        $.ajax({
            url: '/cn/video/is-bofang', // 跳转到 action 
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if(data==1){
                    $('.bofang_name').text('播放√');
                    $('.bofang_name').removeClass('btn-defult');
                    $('.bofang_name').addClass('btn-success');
                    $('#is_bofang_type').val(1)
                }else{
                    $('.bofang_name').text('播放x');
                    $('.bofang_name').removeClass('btn-success');
                    $('.bofang_name').addClass('btn-defult');
                    $('#is_bofang_type').val(0)
                    
                }
                // console.log(data);
                // window.location.reload();   
            },
        });
    } 

    function isCache(){
        $.ajax({
            url: '/cn/video/is-cache', // 跳转到 action 
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if(data==1){
                    $('.cache_name').text('缓存√');
                    $('.cache_name').removeClass('btn-defult');
                    $('.cache_name').addClass('btn-success');
                    goCache();
                }else{
                    $('.cache_name').text('缓存×');
                    $('.cache_name').removeClass('btn-success');
                    $('.cache_name').addClass('btn-defult');
                }
                // console.log(data);
                // window.location.reload();   
            },
        });
    } 
    // 开启缓存
    function goCache(){
        $('.caiji_name').text('采集...')
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        if(!goType){ var  goType =''; }
        var goSearch =$("#goSearch").val();
        var goPage =$("#goPage").val();
        var goPage_list =$("#goPage_list").val();
 
        $.ajax({
            url: '/cn/video/get-cache', // 跳转到 action 
            type: 'post',
            data:{ 
                page:goPage,
                type:goType,
                page_list:goPage_list,
                belong:goBelong,
                search:goSearch,
            },
            dataType: 'json',
            success: function (data) {
                if(data==1){
                    $('.caiji_name').text('采集√')
                }else{
                    $('.caiji_name').text('采集×')
                }
                // window.location.reload();   
            },
        });
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

