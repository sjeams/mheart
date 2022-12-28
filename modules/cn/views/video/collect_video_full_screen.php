 
<style type="text/css">
  .collect-video-style{
	  height: -webkit-fill-available;
    position: absolute;
  }
  .swiper{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
  }
</style>

<div class="friend_opacityBottom">
<!-- 标题 -->
<p class="center btn-primary" onclick="full_out()" id="full_out">退出全屏</p>
<div class="swiper friend_opacityBottom">
    <div class="swiper-wrapper">
 
        <?php   foreach($content as $kss => $v) { ?>
        <div class="swiper-slide">
            <td class="remove_<?php echo $v['id']?> p-0">
                <div id="form<?php echo $v['id']?>">
                    <input type="hidden" name="video_id" value="<?php echo $v['id']?>" >
                    <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                    <input type="hidden" name="title" value="<?php echo $v['title']?>" >
                    <input type="hidden" name="imageurl" value="<?php echo $v['imageurl']?>" >
                    <input type="hidden" name="type" value="<?php echo $v['type']?>" >
                    <input type="hidden" name="belong" value="<?php echo $v['belong']?>" >
                    <input type="hidden" name="link" value="<?php echo $v['link']?>" >
                </div>
                <!-- //跳转 -->
                <!-- <img  class="pimage" src="<?php   echo $v['imageurl']?>" alt="Img"> -->
                <div  class="video<?php echo $v['id']?> collect-video-style" style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $v['id']?>)"  class="video_box "></span></div> 
                <div id="form<?php echo $v['id']?>" style="display:none">
                    <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                </div>
                <!-- <p class="center"  onclick="video(<?php echo $v['id']?>)"><span ><b>P<?php echo (($data['page']-1) ) ?>-<?php echo ( (($data['page']-1)*10 )+($kss+1)) ?>、</b></span>  <?php echo $v['title']?></p>
                <p class="center">
                    <span style="width: 49%!important;max-width:210px" onclick="videoList(<?php echo $v['id']?>)" class="btn btn-primary collect"> 重播 </span>
                    <span style="width: 49%!important;max-width:210px" onclick="Update_my(<?php echo $v['id']?>)" class="btn btn-danger collect my_collect_<?php echo $v['id']?> "> 移除</span>
                </p> -->
            </td>
        </div>

      <?php  } ?>
    </div>
    <div class="swiper-pagination"></div><!--分页器。如果放置在swiper外面，需要自定义样式。-->
</div>
<input type="hidden" value="<?php echo count($content) ?>" id="swiper_count">
<input type="hidden" value="0" id="swiper_type">
<input type="hidden" value="0" id="swiper_page">
</div>
<script language="javascript"> 
    var mySwiper = new Swiper('.swiper',{
      on:{
        slidePrevTransitionStart: function(swiper){
          // var swiper_type = $("#swiper_type").val();
          //  $("#swiper_type").val(this.activeIndex);
          //  console.log(this.activeIndex);
          $("#swiper_type").val(0)
        },
        slideNextTransitionStart: function(swiper){
          // var swiper_type = $("#swiper_type").val();
          // $("#swiper_type").val(this.activeIndex);
          // console.log(this.activeIndex);
          $("#swiper_type").val(1)
    
        },
        transitionEnd: function(swiper){
          var swiper_type =  Number($("#swiper_type").val());
          var swiper_page  = Number($("#swiper_page").val());
          if(swiper_type==0){
            $("#swiper_page").val(Number(swiper_page)-1);
            var swiper_page  =   Number($("#swiper_page").val());
            if(swiper_page<0){
              console.log('上分页');
              // 页面跳转
              var goPage = Number($("#goPage").val()) - Number(1)   
              if(goPage>0){
                nextPage(goPage)
              }
              console.log(goPage);
              $("#swiper_page").val(0)
            }
          }else{
            $("#swiper_page").val(Number(swiper_page)+1);
            var swiper_page  =  Number($("#swiper_page").val());
            var swiper_count =  Number($("#swiper_count").val());
            if(swiper_page>=swiper_count){
              console.log('下分页');
              // 页面跳转
              var goPage = Number($("#goPage").val()) + Number(1)  
              nextPage(goPage)
              $("#swiper_page").val(swiper_count-1)
            }
          }

        },
      },
      direction: 'vertical', // 垂直切换选项
      // loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination',
      },
      
    })
</script>
 