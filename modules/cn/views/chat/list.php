<?php foreach($userList as $user){ ?>
	<tr id="user_list<?php echo $user['friend_id'] ?>"  class="user_list">
		<td onclick="gouSerach(<?php echo $user['friend_id']?>)" >
			<div  class="user_information_left">
				<span class="user_tips_title <?php echo $user['num']>0?'user_tips':''?>"></span> 	
				<a href="/cn/chat/detail?uid=<?php echo $user['friend_id'] ?>"><img class="user_photo" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt=""></a>
			</div>
			<div  class="user_information_left user_float_left_10">
				<span class="user_title user_text_hidden"><?php echo $user['name']?> </span><br>
				<span class="user_content user_text_hidden"> <?php echo $user['content']?></span> 
			</div>
			<div  class="user_information_right" > 
				<!-- <span class="user_num"><?php echo $user['num']?($user['num']>99?"99+":$user['num']):''?></span><br> -->
				<span class="user_time"><?php echo $user['last_time']?date('H:i',$user['last_time']):''?><span>	
			</div>
		</td>
	</tr>  
<?php } ?>