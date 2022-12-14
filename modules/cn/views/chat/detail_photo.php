<style>
	.video_header td {
		background-color: black;
	}
	.chat_back i{
		color: white;
	}
	.chat_title {
		color: white;
		line-height: 20px;
	}
	.photo_content{
		position: fixed;
		bottom:10px;
		color: white;
	}
</style>
<?php 
$img = explode(',',$data['data']['img']);
?>
<input type="hidden" name="" value="<?php echo $data['data']['id'] ?>" id="photo_id">
<input type="hidden" name="" value="1" id="photo_page">
<input type="hidden" name="" value="<?php echo date('Y年m月d日 H:i',$data['data']['create_time'])?>" id="photo_time">
<input type="hidden" name="" value="<?php echo $data['data']['content'] ?>" id="photo_content">
 <!-- //引入监听滑动事件 -->
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/click_move.js"></script>
<script>
$(function(){
	show_photo();

})
var img =<?php echo json_encode($img)?>;
//总共图片数量
var num =img.length;
var photo_time = $("#photo_time").val();
var photo_id = $("#photo_id").val();
var photo_content = $("#photo_content").val();
</script>