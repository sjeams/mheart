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
/* 
	.user_information_right{
		cursor: pointer;
		text-align: right;
		margin-top:30px ;

    } */
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
    <div id="message-body" class="message-body">

    </div>
    <div id="show-logs">
	
		<!-- <table  class="user_information_left">
			<tr>
				<td>
				<img class="user_photo" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt=""> 
				</td>
				<td>
					<div class="msg-user"><?php echo $user['name']?></div>
					<div class="msg-user"><?php echo $user['name']?></div>
					<div class="msg-user"><?php echo $user['phone']?></div>
					<div class="msg-user"><?php echo $user['city']?></div>
				</td>
			</tr>
		</table>  -->
		<div  class="user_information_left">
			<img class="user_photo img_click" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt=""> 
			<div class="msg-user">
				<span style="font-size: 24px;"><strong><?php echo $user['name']?></strong> <i class="bi bi-person <?php echo $user['sex']==1?'clolor_red':'clolor_blue'?>"></i></span> <br>
				 	昵称：<span><?php echo $user['name']?></span> <br>
					手机号：<span><?php echo $user['phone']?></span> <br>
					地区：<span><?php echo $user['city']?></span> <br>
			</div> 
		</div> 

		<div class="user_information_center"> 
			<div class="msg-time">
				<span class="float_left">
				 备注和标签
				</span>
				<span class="float_rigth">
				<i class="bi bi-chevron-right"></i>
				</span>
			</div>
			
			<div class="msg-time">
			<span class="float_left">
				 朋友权限
				</span>
				<span class="float_rigth">
				<i class="bi bi-chevron-right"></i>
				</span>
  				
			</div>
		</div>	
		<div class="user_information_center"> 
			<div class="msg-time">
				<span class="float_left">
				 朋友圈
				</span>
				<span class="float_rigth">
				<i class="bi bi-chevron-right"></i>
				</span>
			</div>
		</div>	
		<div class="user_information_center"> 
			<a href="/cn/chat/chat?uid=<?php echo $friend['id'] ?>">
				<div class="msg-time">
				<i class="bi bi-chat"></i> 发送消息
				</div>
			</a>

			<div class="msg-time">
  					删除好友
			</div>
		</div>	
	</div>
</body>
<!-- 标题 -->
<input type="hidden" value="<?php echo $chat_title ?>" id="chat_title">
<script lang="javascript">
// $('.img_click').click(function () {
//     console.log(111)
//     //获取图片路径
//     var imgsrc = $(this).attr("src");
//     console.log(imgsrc);
//     var opacityBottom = '<div class="opacityBottom" style = "display:none"><img class="bigImg" src="' + imgsrc + '"></div>';
//     $(document.body).append(opacityBottom);
//     toBigImg();//变大函数

// });
</script>
 
</html>