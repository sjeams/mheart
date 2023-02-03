
<!-- 视频old -->
<div class=" ">
    <input type="hidden" name="" id="hiddenvalue" value="0">
    <!-- <button style="position:fixed;z-index:101;width:30%;;margin:  20px 16%; float:right" onclick="videoHidden()">video</button> -->
    <div class="videohidden">
        <div class="video"> </div>
    </div>
</div>
<script type="text/javascript">
//定义一个变量：videoObject，用来做为视频初始化配置
var videoObject = {
    container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
    plug:'hls.js',//设置使用hls插件
    autoplay:true,
    video: ''//视频地址
};
new ckplayer(videoObject);//初始化播放器
// 视频预览
function  video(id){
    var url =$("#form"+id+"  input[name=url]").val();
    // console.log(url);
    // var url ='https://wolongzywcdn2.com:65/20220417/nJ0C6TnT/index.m3u8';
    var videoObject = {
            container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
            plug:'hls.js',//设置使用hls插件
            autoplay:true,
            video: url,//视频地址
            // rotate:90,//旋转90度
            rightBar:true,
            screenshot:true,
            smallWindows:true,
            playbackrateOpen:true,
            webFull:true,
            theatre:true,
        };
        new ckplayer(videoObject);//初始化播放器
        videoHidden(1);//显示窗口
        url =null;
}

// ------new

function  videoList(id){
    //重置按钮
    var now_video =$("#now_video").val();
    // console.log(now_video)
    if(now_video!=0){
        var player ="<span onclick='videoList("+now_video+")'  class='video_box '></span>";
        $(".video"+now_video).html(player);
    } 
    $("#now_video").val(id); 
    //获取视频
    var url =$("#form"+id+"  input[name=url]").val();
    var title =$("#form"+id+"  input[name=title]").val();
    var imageurl =$("#form"+id+"  input[name=imageurl]").val();
 
    // player.pause();
    // console.log(url);
    // var url ='https://wolongzywcdn2.com:65/20220417/nJ0C6TnT/index.m3u8';
    var videoObject = {
            container: '.video'+id, //“#”代表容器的ID，“.”或“”代表容器的class
            plug:'hls.js',//设置使用hls插件
            autoplay:true,
            video: url,//视频地址
            poster:imageurl,//封面图片
            title:title,//视频标题
            // rotate:90,//旋转90度
            rightBar:true,
            screenshot:true,
            smallWindows:true,
            playbackrateOpen:true,
            webFull:true,
            theatre:true,
            crossOrigin:'Anonymous',//设置html5视频的crossOrigin属性
            loop: true,//是否需要循环播放 
            seek: 1,//默认需要跳转的秒数
            controls:true, //小窗风格 
            // language:'en',
            // rotate:90,//旋转90度
            mobileCkControls: true,//移动端h5显示控制栏
            mobileAutoFull: true,//移动端是否默认全屏播放
            playbackrate: 1,//默认倍速
            // debug: false,//是否开启调试模式
            overspread:true,//是否让视频铺满播放器
        };
        _this.player =  new ckplayer(videoObject);//初始化播放器
        url =null;
        title =null;
        imageurl =null;
        player=null;
        // _this.player.ended(function() {
        // _this.$nextTick(() => {
        //   _this.handleNextPath()
        // })
        // })
        // videoHidden(1);//显示窗口
}
// CV.singleClick(player.playOrPause);//监听视频单击

</script>