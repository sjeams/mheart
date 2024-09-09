<div  class="user_information_left">
	<img class="user_photo img_click" src="<?php echo $friend['photo']?$friend['photo']:'/sign/img/contact.jpg'?>" alt=""> 
	<div class="msg-user">
		<span style="font-size: 24px;"><strong><?php echo $friend['name']?></strong> <i class="bi bi-person <?php echo $friend['sex']==1?'clolor_red':'clolor_blue'?>"></i></span> <br>
			昵称：<span><?php echo $friend['name']?></span> <br>
			手机号：<span><?php echo $friend['phone']?></span> <br>
			地区：<span><?php echo $friend['city']?></span> <br>
	</div> 
</div> 

<div class="user_information_center"> 
	<div class="msg-time" onclick="detail_remark()">
		<span class="float_left">
			备注和标签
		</span>
		<span class="float_rigth">
		<i class="bi bi-chevron-right"></i>
		</span>
	</div>
	
	<div class="msg-time" onclick="detail_graden()">
	<span class="float_left">
			朋友权限
		</span>
		<span class="float_rigth">
		<i class="bi bi-chevron-right"></i>
		</span>
		
	</div>
</div>	
<div class="user_information_center"> 
	<div class="msg-time" onclick="detail_friend()">
		<span class="float_left" >
			朋友圈
		</span>
		<span class="float_rigth">
		<i class="bi bi-chevron-right"></i>
		</span>
	</div>
</div>	
<div class="user_information_center"> 

	<?php if($user['id'] != $friend['id']){ if($user['is_friend'] ==1){?>
		<a href="/cn/chat/chat?uid=<?php echo $friend['id'] ?>">
			<div class="msg-time">
			<i class="bi bi-chat"></i> 发送消息
			</div>
		</a>
		<div class="msg-time" onclick="remove_friend(<?php echo $friend['id'] ?>)">
				删除好友
		</div>
	<?php }else{?>
		<div class="msg-time" onclick="add_friend(<?php echo $friend['id'] ?>)">
				添加好友
		</div>
	<?php  } }?>
</div>	
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/common.js"></script>
