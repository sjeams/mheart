


<style>
    /* 播放按钮样式 */
    .video_box{
        background: url(/ckplayer/css/images/play.png) no-repeat 70% center;
        background-size: 60% 60%;
        border: 8px solid rgba(255,255,255,.6);
        border-radius: 50%;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        width: 80px;
        height: 80px;
        position: absolute;
        /* display: none; */
        z-index: 90;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;
        transition: .2s;
    }
    .ckplayer-ckplayer{
        border-radius: 2%;
    }
    .collect-video-style{
        border-radius:1%!important;width:100%;max-width:420px;margin:auto; height:300px;position:relative;background-repeat: no-repeat;background-position: center;background-size:auto 100%;
    }
</style>

<input type="hidden" value="0" id="now_video"> 


<script type="text/javascript">
function  videoList(id,key=0){

    var now_video =$("#now_video").val();
    if(now_video!=0){
        var player ="<span onclick='videoList("+now_video+")'  class='video_box '></span>";
        $(".video"+now_video).html(player);
    } 

    //判断是否是影视，影视不为空
    if(key!=0){
        $("#now_video").val(id); 
        //获取视频
        var url =$("#form"+key+"  input[name=url]").val();
        // var title =$("#form"+key+"  input[name=title]").val();
        // var imageurl =$("#form"+key+"  input[name=imageurl]").val();
        $('.click_video').removeClass('btn-success');
        $('#click_video'+key).addClass('btn-success');
        // console.log( title)
    }else{
        $("#now_video").val(id); 
        //获取视频
        var url =$("#form"+id+"  input[name=url]").val();
        // var title =$("#form"+id+"  input[name=title]").val();
        // var imageurl =$("#form"+id+"  input[name=imageurl]").val();
    }
    // player.pause();
    // console.log(url);
    // var url ='https://wolongzywcdn2.com:65/20220417/nJ0C6TnT/index.m3u8';
    var videoObject = {
            container: '.video'+id, //“#”代表容器的ID，“.”或“”代表容器的class
            plug:'hls.js',//设置使用hls插件
            autoplay:true,
            video: url,//视频地址
            // poster:imageurl,//封面图片
            // title:title,//视频标题
            // rotate:90,//旋转90度
            rightBar:true,
            screenshot:true,
            smallWindows:true,
            flashplayer: false,//设置成true则强制使用flashplayer
            html5m3u8: true,//PC平台上是否使用h5播放器播放m3u8---强制html播放全屏
            webFull:true,
            // mobileAutoFull: true,//移动端是否默认全屏播放
            // mobileCkControls: false,//移动端h5显示控制栏
            // theatre:true,
            crossOrigin:'Anonymous',//设置html5视频的crossOrigin属性
            // loop: true,//是否需要循环播放 
            // // seek: 1,//默认需要跳转的秒数
            controls:true, //小窗风格 //切换影院模式和窗口模式
            // // language:'en',
            // // rotate:90,//旋转90度
            documentFocusPause:false,//窗口失去焦点后暂停播放
            // playbackrate: 1,//默认倍速
            // debug: false,//是否开启调试模式
            // overspread:true,//是否让视频铺满播放器
        };
        new ckplayer(videoObject);//初始化播放器
        url =null;
        // title =null;
        // imageurl =null;
        player=null;
        // videoHidden(1);//显示窗口
}
// CV.singleClick(player.playOrPause);//监听视频单击
</script>
 