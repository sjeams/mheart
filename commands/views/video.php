<!-- old视频 1-->
<div class="video_old" style="display: <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['video_model']==1?'block':'none';?>;">
    <input type="hidden" name="" id="hiddenvalue" value="0">
    <!-- <button class="video_hidden_button btn-primary" style="display:block" onclick="videoHidden()">video</button> -->
    <div class="videohidden">
        <div class="video"> </div>
    </div>
</div>
<!-- new 视频 0-->


<input type="hidden" value="0" id="now_video"> 

<script type="text/javascript" charset="utf-8" src="/ckplayer/js/video.js"></script>
 
<script>
// 视频详情页
function videoDetail(sessionkey,key){
    window.location.href='/cn/video/video?sessionkey='+sessionkey+'&key='+key;
}   
</script>