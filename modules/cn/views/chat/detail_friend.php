<style>
	/* .chat_background{
		width: 100%;
	    margin-top: -20px;
	} */
	.user_information_left{
		height: 120px;
	}
	.msg-user{
		max-width: 50%;
		display:-webkit-box;
		-webkit-line-clamp:3;
		-webkit-box-orient:vertical;
		overflow:hidden;	
		margin-left:0px; 
		padding: 5px 10px;
		line-height: 25px;
	}
	body{
		background-color: white;
	}
	.chat_friend_time{
		font-weight: bold;
		font-size: 24px;
	}
	.user_photo{
		/* height:80px; */
		/* width:100%; */
		border-radius: 5px;
		vertical-align: top;
		margin-top: 5px;
		/* margin-left: 20px; */
		float: left;
		/* max-width: 20%; */
		margin-left: 0px!important;
		padding: 5px 5px;
	}
	.user_information_left_year{
		height:60px!important;

	}
	.msg-user-time{
		width: 88px;
		/* text-align: center; */
	}
	.msg-camera{
		height:80px;
		width:80px;
		border-radius: 5px;
		vertical-align: top;
		margin-top: 10px;
		/* margin-left: 20px; */
		float: left;
		background-color: #f3f3f3;
	}
	.msg-camera i{
		font-size: 60px;
		color: white;
		/* vertical-align: center; */
	}
</style>
<!-- <div  class="user_information_left"> -->
<!-- <img class="chat_background " s  src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt="">  -->
<!-- </div>  -->
<?php if($user['id']==$friend['id']){ ?>
<div  class="user_information_left">
	<div class="msg-user msg-user-time">
		<span class="chat_friend_time">今天</span> 
	</div>
	<div class="msg-user msg-camera">
		<i class="bi bi-camera"></i> 	
	</div> 
</div> 
<?php } ?>
<input type="hidden" value="<?php echo isset($data['page'])?$data['page']:1; ?>" id="goPage">
<input type="hidden" id="goPageCount" value="<?php echo isset($data['count'])?$data['count']:0; ?>">
 <div id="content_append">
		
 </div>
 <script>
	$(function(){
		nextPage(1);
	})
	function nextPage(goPage){
		var friend_id =$('#friend_id').val();
		var chat_belong = 4;
		// var chat_belong =$('#chat_belong').val();
		// console.log(chat_belong)
			// window.location.href="/cn/chat/list?friend_title="+friend_title ;
		var	url="/cn/chat/detail?page="+goPage+"&uid="+friend_id+"&html="+chat_belong+"&list=1";
         getprintHtml(url,getprintHtml_content_append,goPage);
	}
 </script>