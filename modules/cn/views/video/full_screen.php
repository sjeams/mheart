 
<style>
  .collect-video-style{
	height: -webkit-fill-available;
  }
</style>
<div class="friend_opacityBottom">
<!-- 标题 -->
<p class="center btn-primary" onclick="full_out()" id="full_out">退出全屏</p>
<?php   foreach($content as $kss => $v) { ?>
	<!-- <p class="center btn-primary"  >  <?php echo $v['title']?></p> -->
        <tr>
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
                <div id="dplay_video<?php echo $v['id']?>"  class="video<?php echo $v['id']?> collect-video-style" style="//background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $v['id']?>)"  class="video_box "></span></div> 
                <div id="form<?php echo $v['id']?>" style="display:none">
                    <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                </div>
                <p class="center"  onclick="video(<?php echo $v['id']?>)"><span ><b>P<?php echo (($data['page']-1) ) ?>-<?php echo ( (($data['page']-1)*10 )+($kss+1)) ?>、</b></span>  <?php echo $v['title']?></p>
                <p class="center">
                    <span style="width: 49%!important;max-width:210px" onclick="videoList(<?php echo $v['id']?>)" class="btn btn-primary collect"> 重播 </span>
                    <span style="width: 49%!important;max-width:210px" onclick="Update_my(<?php echo $v['id']?>)" class="btn btn-danger collect my_collect_<?php echo $v['id']?> "> 移除</span>
                </p>
            </td>
        </tr>

<?php  } ?>
</div>
  <!-- //引入监听滑动事件 声明变量后执行 -->
<script>
//监听 左右滑动事件
var winHeight = $(window).height(),
$body = $(".friend_opacityBottom");
$body.css("height", winHeight);
$(".friend_opacityBottom").on("touchstart", function(e) {
	// e.preventDefault();
	startX = e.originalEvent.changedTouches[0].pageX,
	startY = e.originalEvent.changedTouches[0].pageY;
	// e.stopPropagation();   
});

$(".friend_opacityBottom").on("touchend", function(e) {
	//滑动页面才监听
	// e.preventDefault();
	EndX = e.originalEvent.changedTouches[0].pageX,
	EndY = e.originalEvent.changedTouches[0].pageY,
	// X = EndX - startX,
	Y = EndY - startY;
	// console.log(X)
	// console.log(Y)
	if(Y>0){
		if(Number($("#goPage").val())>0){
			var goPage = Number($("#goPage").val()) - Number(1)   
			nextPage(goPage)
		}
	}else{
		var goPage = Number($("#goPage").val()) + Number(1)  
		nextPage(goPage)
	}
	// e.stopPropagation();   
})
</script>