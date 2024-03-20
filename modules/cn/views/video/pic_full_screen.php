<style type="text/css">
  .collect-video-style{
	  height: -webkit-fill-available;
    /* height: inherit; */
    position: absolute;
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
  display: none!important;
}
.video_footer{
  height: 30px!important;
  display: none!important;
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
  .swiper-button-next, .swiper-button-prev { 
    position: fixed;
    top:50%!important
  }
  .page_title{
    position: fixed;
    top:0px!important;
    text-align: center;
    width: 100%;
    color:wheat;
    font-size: large;
    
  }
</style>
<div class="friend_opacityBottom list_hidden">
<!-- 标题 -->    
<!-- btn-primary -->
<div class="swiper friend_opacityBottom">
    <p class="center  inherit " onclick="clearRload(0)"  > 
    <span class="video_back"> <</span>
    <span class="video_title"></span>
    </p>
      <div class="swiper-wrapper">
          <?php  foreach($content as $kss => $imageurl) { ?>
          <div class="swiper-slide">
              <td class="remove_<?php echo $kss?> p-0">
                  <div id="form<?php echo $kss?>" class="formkey<?php echo $kss?>">
                    <input type="hidden" name="imageurl" value="<?php echo $imageurl?>" >
                  </div>
                  <!-- <div  class="  collect-video-style" style="background-image:url(<?php echo $imageurl?>);"> </div>  -->
                  <img  class="  collect-video-style"  src="<?php echo $imageurl?>" alt="">
                  <!-- <div  class="  collect-video-style" style="background-image:url(/app_resources/defult.png);"></div> -->
                  <span class="page_title"> <?php echo $kss+1 .'/'. count($content) ?></span>
              </td>
          </div>
        <?php  } ?>
      </div>
      <div class="swiper-pagination teacherCoverContainer"></div>
    <!--分页器。如果放置在swiper外面，需要自定义样式。-->
</div>
 

<input type="hidden" value="<?php echo count($content) ?>" id="swiper_count">
<input type="hidden" value="0" id="swiper_title">
</div>

<script>

  $(function(){
        $(".video_header").css("display","none");
        $(".video_footer").css("display","none");
      })
      var BannerSwiper = new Swiper('.swiper', {
          slidesPerView: 1,
          loop: true,
          // tdFlow:{
          //     rotate:-30,  //旋转的角度
          //     stretch:10,  //拉伸
          //     depth:150,  //深度
          //     modifier:1, //修正值（该值越大前面的效果越明显）
          //     slideShadows:true  //页面阴影效果
          // },
          // pagination: {
          //     el: '.topPagination',
          //     clickable: true,
          // },
          // pagination : '.swiper-pagination',
          scrollbar:'.swiper-scrollbar' ,
          scrollbarHide:false,
      });
 
  </script>
  