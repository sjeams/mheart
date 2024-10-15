
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
<!-- cplayer -->
<link async rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
<script defer type="text/javascript"  src="/ckplayer/hls.js/hls.min.js"></script>
<script defer type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>
<!-- dplayer -->
<link async rel="stylesheet"  href="/dplayer/dist/DPlayer.min.css" />
<script defer type="text/javascript" charset="utf-8"  src="/dplayer/dist/hls.min.js"></script>
<!-- <script type="text/javascript"   charset="utf-8"  src="/dplayer/dist/flv.min.js"></script> -->
<!-- <script type="text/javascript"  charset="utf-8"  src="/dplayer/dist/md5.min.js"></script> -->
<script defer type="text/javascript"  charset="utf-8"  src="/dplayer/dist/DPlayer.min.js"></script>

<!-- layui弹窗 -->
<link    rel="stylesheet" href="/layui-v2.6.8/layui/css/layui.css">
<script   src="/layui-v2.6.8/layui/layui.js"></script>
<!-- 轮播图 -->
<link async rel="stylesheet"  type="text/css" href="/swiper/swiper-bundle.min.css">
<script async type="text/javascript"  src="/swiper/swiper-bundle.min.js"></script>

<!-- 初始化视频容器 -->
<script defer type="text/javascript"  charset="utf-8" src="/ckplayer/js/video_start.js"></script>

<!-- 公共样式 -->
<script defer type="text/javascript" charset="utf-8" src="/ckplayer/js/common.js"></script>