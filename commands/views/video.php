 <!-- 视频 -->
 <div class=" ">
    <input type="hidden" name="" id="hiddenvalue" value="0">
    <!-- <button style="position:fixed;z-index:101;width:30%;;margin:  20px 16%; float:right" onclick="videoHidden()">video</button> -->
    <div style="height:300px;position:relative"  class="videohidden">
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
        };
        new ckplayer(videoObject);//初始化播放器
        videoHidden(1);//显示窗口
}
// CV.singleClick(player.playOrPause);//监听视频单击
</script>