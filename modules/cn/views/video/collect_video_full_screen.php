<style type="text/css">
  .collect-video-style{
	  height: -webkit-fill-available;
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
		width:18%;
    overflow-y: auto;

    height: inherit;
    /* opacity: 0.8;  */
  }
	.swiper-pagination-bullet{
		width:100%;
		height:auto;
		background:none;}
	.swiper-pagination-bullet img{
		width:100%;
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
    <div class="swiper-wrapper">
        <?php  foreach($content as $kss => $v) { ?>
        <div class="swiper-slide">
            <td class="remove_<?php echo $v['id']?> p-0">
                <div id="form<?php echo $v['id']?>" class="formkey<?php echo $kss?>">
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
<!-- <p class="center btn-primary video_footer "   id="full_buttom">
  <span style="width: 49%!important;max-width:210px" onclick="videoList_click( )" class="btn btn-primary p-0 collect"> 重播 </span>
  <span style="width: 49%!important;max-width:210px" onclick="Update_my_click( )" class="btn btn-danger  p-0 collect my_collect_<?php echo $v['id']?> "> 移除</span>
</p> -->


<input type="hidden" value="<?php echo count($content) ?>" id="swiper_count">

<!-- //f防止重复提交，1秒后可切换分页 -->
<input type="hidden" value="0" id="swiper_isover">


</div>
<script language="javascript"> 
    // 初始化
    $(function(){
      //列表隐藏
      list_hide()
      video_title()
      //0.5秒后可再次分页
      setTimeout(function(){
        $("#swiper_isover").val(1)
      },500)
    })
    $('body').click(function(){
      list_show();
    })
    //显示边框
    function list_show(){
      clearTimeout(timer);
      $("#full_out").show()
      $(".swiper-pagination").show()
      list_hide()
    }
    //定时隐藏边框
    function list_hide(){
      // full_out
      // alert(111)
      timer = setTimeout(function(){
        $(".swiper-pagination").hide()
        $("#full_out").hide();
      },8000)
    }

    function videoList_click(){
      var swiper_page  = Number($("#swiper_page").val());
      var video_id =$(".formkey"+swiper_page+"  input[name=video_id]").val();
      videoList(video_id);
    }
    function Update_my_click(){
      var swiper_page  = Number($("#swiper_page").val());
      var video_id =$(".formkey"+swiper_page+"  input[name=video_id]").val();
      Update_my(video_id);
      full_screen()
    }

    function video_title(){
      var page =<?php echo (($data['page']) ) ?>;
      var swiper_page  = Number($("#swiper_page").val());
      var title =$(".formkey"+swiper_page+"  input[name=title]").val();
      var title = page+'-'+(swiper_page+1)+'、'+title
      $('.video_title').text(title);
    }
    //page_change  分页后判断初始页码-有数据
    function page_change(){
      var swiper_type =  Number($("#swiper_type").val());
      //0上1下
      if(swiper_type==0){
            // var swiper_count =  Number($("#swiper_count").val());
            $("#swiper_page").val(10)
            $("#swiper_type").val(1)
      }else{
            $("#swiper_page").val(0)
            $("#swiper_type").val(0)
      }
    }
     //page_unchange  分页后判断初始页码-没数据
    function page_unchange(){
      var swiper_type =  Number($("#swiper_type").val());
      //0上1下
      if(swiper_type==0){
            $("#swiper_page").val(0)
      }else{
            var swiper_count =  Number($("#swiper_count").val());
            $("#swiper_page").val(swiper_count-1)
      }
    }

    //初始页码监听页码
    var swiper_page  = Number($("#swiper_page").val());
    // console.log(swiper_page)
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
          list_show();
          var swiper_type =  Number($("#swiper_type").val());
          var swiper_page  = Number($("#swiper_page").val());
          //点击
          if(Math.abs((this.activeIndex-swiper_page))>0){
            $("#swiper_page").val(this.activeIndex)
          }else{
          //正常切换0上 1下
            if(swiper_type==0){
              $("#swiper_page").val(Number(swiper_page)-1);
              var swiper_page  =   Number($("#swiper_page").val());
              if(swiper_page<0){
                console.log('上分页');
                // 页面跳转
                var goPage = Number($("#goPage").val()) - Number(1)   
                if(goPage>0){
                  if( $("#swiper_isover").val()==1){
                    nextPage(goPage)
                  }
             
                }else{
                  page_unchange();
                }
              }
            }else{
              $("#swiper_page").val(Number(swiper_page)+1);
              var swiper_page  =  Number($("#swiper_page").val());
              var swiper_count =  Number($("#swiper_count").val());
              if(swiper_page>=swiper_count){
                console.log('下分页');
                // 页面跳转
                var goPage = Number($("#goPage").val()) + Number(1)  
                if( $("#swiper_isover").val()==1){
                  nextPage(goPage)
                }
              }else{
                page_unchange(); 
              }
            }
          }
          //标题切换
          video_title();
        },
      },
      initialSlide: swiper_page,
      direction: 'vertical', // 垂直切换选项
      // loop: true, // 循环模式选项
      // pagination: {
      //   el: '.swiper-pagination',
      //   type : 'progressbar',
      //   progressbarOpposite: true,
      // },
      pagination: {
			    el: '.swiper-pagination',
		    	clickable: true,
			    renderBullet: function (index, className) {
            // console.log(index)
            var swiper_page  = Number($("#swiper_page").val());
            var imageurl =$(".formkey"+index+"  input[name=imageurl]").val();
			        return '<span class="' + className + '"><image src='+imageurl+'></span>';
		    	},
	       },
    })
</script>
 