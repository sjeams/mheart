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
		bottom: 40px;
		color: white;
		display:-webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
		overflow:hidden;	
		padding: 0px 20px;
		line-height: 25px;
	}
	.photo_content_detail{
		position: fixed;
		bottom: 10px;
		color: white;
		display:-webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
		overflow:hidden;	
		padding: 0px 20px;
		line-height: 25px;
	}
	.photo_content_left{	
		/* left: 20px;
		position: fixed; */
	}
	.photo_content_right{
		right: 20px;
		position: fixed;
	}
</style>
<?php 
$img = explode(',',$data['data']['img']);
$num = count($img);
// var_dump($img );die;
?>
<input type="hidden" name="" value="<?php echo $num ?>" id="photo_num">
<input type="hidden" name="" value="<?php echo $prev?$num:1; ?>" id="photo_page">

<input type="hidden" name="" value="<?php echo $data['next'] ?>" id="photo_next">
<input type="hidden" name="" value="<?php echo $data['last'] ?>" id="photo_last">
<input type="hidden" name="" value="<?php echo $data['data']['id'] ?>" id="photo_id">
<input type="hidden" name="" value="<?php echo date('Y年m月d日 H:i',$data['data']['create_time'])?>" id="photo_time">
<input type="hidden" name="" value="<?php echo $data['data']['content'] ?>" id="photo_content">

<script>
//总共图片数量
var photo_next =$('#photo_next').val();
var photo_last =$('#photo_last').val();

var img =<?php echo json_encode($img)?>;
var num =$('#photo_num').val();
var photo_time = $("#photo_time").val();
var photo_id = $("#photo_id").val();
var photo_content = $("#photo_content").val();
var friend_id =$('#friend_id').val();


$(function(){
	show_photo();
})
</script> 
