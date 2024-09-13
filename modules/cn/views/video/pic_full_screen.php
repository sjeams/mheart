<style type="text/css">
  .collect-video-style-pic{
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
        font-size: 20px;
        line-height: 40px;
        display: block;
        float:left;
        color: white;
        text-shadow: 2px 2px 2px #000000;
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
 	/* .swiper-slide img{
		width:100%;
	} */
	/* .swiper-pagination{
		position:absolute;
		width:25%;
    overflow-y: auto;
    height: inherit;
 
  }
	.swiper-pagination-bullet{
		width:100%;
		height:auto;
		background:none;
  }
	.swiper-pagination-bullet img{
		width:100%;
  } */
  /* .swiper-button-next, .swiper-button-prev { 
    position: absolute;
    top:50%!important
  } */
  .page_title{
    position: absolute;
    top:0px!important;
    text-align: center;
    width: 100%;
    color:white;
    /* font-size: large; */
    font-size: 20px;
    line-height: 40px;
    text-shadow: 2px 2px 2px #000000;
  }
</style>
<div class="friend_opacityBottom list_hidden page_item">
    <!-- 标题 -->    
    <input type="hidden" value="<?php echo count($content) ?>" id="swiper_count">
    <input type="hidden" value="0" id="swiper_title">
    <!-- btn-primary -->
    <div class="swiper friend_opacityBottom">
        <p class="center  inherit " onclick="clearPic()"  > 
        <span class="video_back"> <i class="bi bi-chevron-left"></i> </span>
        <!-- <span class="video_title"></span> -->
        </p>
          <div class="swiper-wrapper">
              <?php  foreach($content as $kss => $imageurl) { ?>
              <div class="swiper-slide">
                  <td class="remove_<?php echo $kss?> p-0">
                      <div id="form<?php echo $kss?>" class="formkey<?php echo $kss?>">
                        <input type="hidden" name="imageurl" value="<?php echo $imageurl?>" >
                      </div>
                      <!-- <div  class="collect-video-style-pic" style="background-image:url(<?php echo $imageurl?>);"> </div>  -->
                      <img  class="  collect-video-style-pic"  src="<?php echo $imageurl?>" alt="">
                      <!-- <div  class="  collect-video-style-pic" style="background-image:url(/app_resources/defult.png);"></div> -->
                      <span class="page_title"> <?php echo $kss+1 .'/'. count($content) ?></span>
                  </td>
              </div>
            <?php  } ?>
          </div>
          <div class="swiper-pagination teacherCoverContainer"></div>
        <!--分页器。如果放置在swiper外面，需要自定义样式。-->
    </div>
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
          // scrollbar:'.swiper-scrollbar' ,
          // scrollbarHide:false,
          // direction: 'vertical', // 垂直切换选项
          // loop: true, // 循环模式选项
          
          // 如果需要分页器
          // pagination: {
          //   el: '.swiper-pagination',
          // },
          
          // // 如果需要前进后退按钮
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },
          
          // // 如果需要滚动条
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
          
      });
 
    function  clearPic(){
      $(".video_header").css("display","inline-block");
      $(".video_footer").css("display","inline-block");
      // clearRload(0)
      $('.pic_html').html('')
    }
  </script>
  