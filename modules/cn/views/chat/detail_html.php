<!-- 聊天室模板 -->
<html>
	<!-- <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script> -->
<body>
<style>
	table td {
		padding:0.25rem!important;
	}
 	body{
		background-color: #f3f3f3;
		height: auto!important;
	}
	.chat_body{
		margin-bottom: 20px;
	}
	.user_information_center{
		cursor: pointer;
		text-align: center;
		margin-top:1px ;
		margin-bottom: 10px;
    }
	/* 时间 */
	.msg-time{
		color:black;
		background-color:white;
		/* border-bottom: 1px solid #f1f1f1; */
		text-align:center;
		word-wrap:break-word;
		/* display: inline-block; */
		line-height:  60px;
		border-radius: 5px;
		padding:0px 10px;
		height: 60px;
		/* max-width: 400px; */
		width: 100%;
		color:#005fcc;
		margin-top:1px ;
	}

    .user_information_left{
		cursor: pointer;
		/* margin-top: 30px; */
		padding-top: 20px;
		background-color: white;
		height: 160px;
		width: 100%;
    }
	.user_photo{
		height:80px;
		width:80px;
		border-radius: 5px;
		vertical-align: top;
		margin-top: 10px;
		margin-left: 20px;
		float: left;
	}
	/* 对面 */
	.msg-user{
		margin-left: 10px;
		color:black;
		background-color:white;
		/* border:1px solid #bbbbbb; */
		text-align:left;
		word-wrap:break-word;
		display: inline-block;
		line-height: 30px;
		border-radius: 5px;
		padding:5px 10px;
		min-height: 40px;
		max-width: 65%;
		float: left;
	}
	/* 我的 */
	.msg-user-mine{
		margin-right: 10px;
		color:black;
		background-color:#89d964;
		/* border:1px solid #ccc; */
		text-align: left;
		word-wrap:break-word;
		display: inline-block;
		line-height: 30px;
		border-radius: 5px;
		padding:5px 10px;
		min-height: 40px;
		float: left;
		max-width: 65%;
	}

	.message-send-input{
		min-width:240px;
        width: 100%;
        height:60px;
	}
	.message-send-button{
		background-color:#0000FF;
		color:white;
		border:2px solid;
		border-radius:25px;
		width:100%!important;
        text-align: center;
        height:60px;
	}

  #onlineUserFD{
	display: none;
  }
  .float_left{
	margin-left: 10px;
	float: left;
  }
  .float_rigth{
	float: right;
  }
  .clolor_red{
	color:#ff7cfb;
  }
  .clolor_blue{
	color:#005fcc;
  }
</style>

<div class="center chat_body">
    <!-- 当前在线人数：<span id="onlineUser">0</span>人&nbsp;&nbsp; -->
    <!-- 客户端FD： -->
	<span id="onlineUserFD"></span> 
    <div id="show-logs">
	

	</div>
</body>
<!-- 标题 -->
<input type="hidden" value="<?php echo $friend['id'] ?>" id="friend_id">
<input type="hidden" value="<?php echo $chat_title ?>" id="chat_title">
<input type="hidden" value="<?php echo $chat_belong ?>" id="chat_belong">
<script lang="javascript">


// 回退按钮
function gou_back(){
	var chat_belong =$('#chat_belong').val();
	console.log(chat_belong)
	if(chat_belong==1){
		window.history.back(-1);
	}else{
		if(chat_belong==5){
	
			toBigPhotoClose() 
			$('#chat_belong').val(4)
			gou(4)
			// window.history.back(-1);
		}else{
			gou(1)
		}
	} 
}
function detail_remark(){ gou(2) }
function detail_graden(){ gou(3) }
function detail_friend(){ gou(4) }
$(function(){
	var chat_belong =$('#chat_belong').val();
	gou(chat_belong)
	// detail_photo(2)
})
function  gou(chat_belong){
	var friend_id =$('#friend_id').val();
	// window.location.href="/cn/chat/list?friend_title="+friend_title ;
	url="/cn/chat/detail?uid="+friend_id+"&html="+chat_belong;
	getprintHtml(url,getprintHtml_friend_detail,chat_belong);
} 
//朋友圈图片查看
function  detail_photo(photo_id,prev=0){
	var friend_id =$('#friend_id').val();
	var	chat_belong=5;
	url="/cn/chat/detail?uid="+friend_id+"&html="+chat_belong+"&photo_id="+photo_id+"&prev="+prev;
	getprintHtml(url,getprintHtml_friend_detail,chat_belong);
} 

function  add_friend(friend_id){
	$.ajax({
		url: '/cn/chat/add-friend', // 跳转到 action 
		type: 'post',
		data:{fid:friend_id},
		dataType: 'json',
		success: function (data){
			location.reload();
		},
	});
}



function  remove_friend(friend_id){
	$.ajax({
		url: '/cn/chat/remove-friend', // 跳转到 action 
		type: 'post',
		data:{fid:friend_id},
		dataType: 'json',
		success: function (data){
			location.reload();
		},
	});
}


// //上一个
// function  detail_photo_prev(photo_id){
// 	detail_photo(photo_id,1);
// }
// //下一个
// function  detail_photo_next(photo_id){
// 	detail_photo(photo_id,2);
// }
function show_photo(){
	// 当前图片页码
	var photo_page = $("#photo_page").val();
	var imgsrc =img[parseInt(photo_page)-1];
	var title = '<span >'+photo_time +'</span></br>'+photo_page+'/'+num;
	$(".chat_title").html(title);
	//获取图片路径
    // var imgsrc = $(this).attr("src");
	var new_content =  '</br><span class="photo_content">'+photo_content +'</span>';

	var new_content = new_content+'</br><span class=" photo_content_detail">    <span class=" photo_content_left"><i class="bi bi-heart"></i> 16 <i class="bi bi-chat-left"></i> 12 </span>  <span class=" photo_content_right">详情<i class="bi bi-chevron-right"></i></span></span>';
    var friend_opacityBottom =  '<div class="friend_opacityBottom" style = "display:none"><img class="bigImg" src="' + imgsrc + '">'+new_content+'</div>';
    $(document.body).append(friend_opacityBottom);
    toBigPhoto();//变大函数
}

</script>
 <!-- //引入监听滑动事件 声明变量后执行 -->
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/click_move.js"></script>
</html>