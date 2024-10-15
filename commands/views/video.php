<!-- cplayer -->
<link rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
<link rel="stylesheet" href="/dplayer/dist/DPlayer.min.css" />
<script type="text/javascript" src="/ckplayer/hls.js/hls.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>
<!-- dplayer -->
<script type="text/javascript"  charset="utf-8"  src="/dplayer/dist/flv.min.js"></script>
<!-- <script type="text/javascript"  charset="utf-8"  src="/dplayer/dist/md5.min.js"></script> -->
<script type="text/javascript"  charset="utf-8"  src="/dplayer/dist/hls.min.js"></script>
<script type="text/javascript"  charset="utf-8"  src="/dplayer/dist/DPlayer.min.js"></script>
<!-- ckplayer -->
<!-- old视频 1-->
<div class="video_old" style="display: <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['video_model']==1?'block':'none';?>;">
    <input type="hidden" name="" id="hiddenvalue" value="0">
    <div class="videohidden">
        <div class="video" id="dplay_video" style="z-index: 1;"> </div>
    </div>
</div>
<!-- new 视频 0-->
<input type="hidden" value="0" id="now_video"> 
<input type="hidden" value="0" id="now_video_key"> 
<!-- <script type="text/javascript" charset="utf-8" src="/ckplayer/js/video.js"></script> -->
<script>
    // 初始化容器
  var container_id=   '.video';
  var videoObject = {
    debug:true,//开启调试模式
    container: container_id, //“#”代表容器的ID，“.”或“”代表容器的class
    plug:'hls.js',//设置使用hls插件
    autoplay:true,
    video: false,//视频地址
    live: false,//是否是直播
    // poster:imageurl,//封面图片
    // title:title,//视频标题
    // rotate:90,//旋转90度
    // seek:180,
    // debug:true,//开启调试模式
    rightBar:true,
    screenshot:true,
    smallWindows:true,
    flashplayer: false,//设置成true则强制使用flashplayer
    // html5m3u8: true,//PC平台上是否使用h5播放器播放m3u8---强制html播放全屏
    webFull:true,
    // mobileAutoFull: true,//移动端是否默认全屏播放
    // mobileCkControls: false,//移动端h5显示控制栏
    theatre:true,
    crossOrigin:'Anonymous',//设置html5视频的crossOrigin属性
    // loop: true,//是否需要循环播放 
    // seek: 42,//默认需要跳转的秒数
    controls:1, // 1 使用浏览器自带控制栏  / 0 自动播放，启用控制栏
    // playbackrateOpen:true,
    // // language:'en',
    // // rotate:90,//旋转90度
    // documentFocusPause:false,//窗口失去焦点后暂停播放
    // playbackrate: 1,//默认倍速
    // debug: false,//是否开启调试模式
    // overspread:true,//是否让视频铺满播放器
    loaded:'loadHandler',// 监听播放时间方法
    // seek:'cookie',//指定跳转到cookie记录的时间，使用该属性必需配置属性cookie
    // cookie:videoID,//cookie名称,请在同一域中保持唯一
    // timeScheduleAdjust:1,//是否可调节播放进度,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退，4是只能前进但能回到第一次拖动时的位置，5是看过的地方可以随意拖动
}; 
// ckplayer
var newplayer= new ckplayer(videoObject);
// 视频详情页
function videoDetail(sessionkey,key){
    window.location.href='/cn/video/video?sessionkey='+sessionkey+'&key='+key;
} 
// 图片详情页 //全屏模式
function picDetail(sessionkey,key){
    //初始化
    videoHidden() //隐藏悬浮窗口
    var url ='/cn/video/pic?sessionkey='+sessionkey+'&key='+key+"&html=1";
    getprintHtml(url,getprintHtml_video_pic);
}   
// 视频详情页 //全屏模式--dplayer 播放器
function dplayDetail(url){
    getprintHtml(url,getprintHtml_video_pic);
}
</script>
<script>
    var container_id= 'dplay_video';
    var dplayerObject={
        container: document.getElementById(container_id),
        autoplay: true, // 自动播放
        theme: '#FADFA3', // 主题
        loop: true, // 循环播放
        lang: 'zh-cn', // 语言
        // screenshot: true, // 截图
        hotkey: true, // 热键
        preload: 'auto', // 预加载
        // logo: '/assets/octocat.png', // 左上角logo
        volume: 0.5, // 音量
        mutex: true, // 多个视频互斥
        // 常规方式
        video: {
            url: false,
            type: 'hls',
            pic: '', // 封面
            thumbnails: '', // 缩略图
        },
    }
    // dplayer
    var newdplayer = new DPlayer(dplayerObject);
</script>