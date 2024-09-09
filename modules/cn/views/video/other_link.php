<style type="text/css">
  .collect-video-style{
	  height: -webkit-fill-available;
    /* height: inherit; */
    position: absolute!important;
    max-width:100%!important;
    background-size:contain!important;
  }
  .swiper{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
  }
  #full_out{
    color: white;
  }
  .video_back{
        width: 40px!important;
        display: block;
        float:left;
        color: white;
    }
.video_title {
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
}
.video_footer{
  height: 30px!important;
}
</style>


<style>
  /* 分页样式 */
 	.swiper-slide img{
		width:100%;
	}
	.swiper-pagination{
		position:absolute;
		width:25%;
    overflow-y: auto;
    height: inherit;
    /* opacity: 0.8;  */
  }
	.swiper-pagination-bullet{
		width:100%;
		height:auto;
		background:none;
  }
	.swiper-pagination-bullet img{
		width:100%;
  }
 
  /* //重新定义返回按钮样式 */
.video_header {
    /* margin: auto 0px; */
    /* border: 1px solid black; */
    height: 40px;
    width: 100%;
    position: fixed;
    margin: auto;
    left: 0;
    right: auto!important;
    top: 0;
    /* bottom: 0; */
    display: inline-block;
    z-index: 100;
    width: 40px!important;
    height: 20px;
    /* border: 1px solid red; */
}

</style>

<div class="friend_opacityBottom list_hidden">
<!-- 标题 -->    
<!-- btn-primary -->

<div class="swiper friend_opacityBottom">
<p class="center  inherit " onclick="full_out()" id="full_out"> 
<span class="video_back"> <</span>
<span class="video_title"></span>
</p>
<iframe src="<?php echo $url ?>"  width="100%" height="100%"></iframe>
</div>
</div>
 
 