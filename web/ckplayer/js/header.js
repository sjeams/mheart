function my_collect(){
    window.location.href='/cn/video/query-video';  
}
function old_content(){
    window.location.href='/cn/video/like';  
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

function vidoeModel(){
    $.ajax({
        url: '/cn/video/video-model', // 跳转到 action 
        type: 'post',
        dataType: 'json',
        success: function (data) {
            if(data==1){
                $('.model_name').text('窗口√');
                $('.model_name').removeClass('btn-defult');
                $('.model_name').addClass('btn-success');
                $('#is_model_type').val(1)

                //暂停在播视频
                var now_video =$("#now_video").val();
                console.log(now_video)
                if(now_video!=0){
                    var player ="<span onclick='videoList("+now_video+")'  class='video_box '></span>";
                    $(".video"+now_video).html(player);
                } 
                //显示窗口播放栏
                $('.video_old').css('display','table-cell');
            }else{
                $('.model_name').text('列表×');
                $('.model_name').removeClass('btn-success');
                $('.model_name').addClass('btn-defult');
                $('#is_model_type').val(0)
                //隐藏窗口播放栏
                $('.video_old').css('display','none');

            }
            // console.log(data);
            // window.location.reload();   
        },
    });
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

function toZero(t){
    return	(t < 10 ? "0" + t : t);
}