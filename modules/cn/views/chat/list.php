
<?php foreach($userList as $key=> $user){ ?>
	<input type="hidden" value="<?php echo $user['fid']?>" id="fid_<?php echo $key?>">
	<input type="hidden" value="<?php echo $user['friend_id']?>" id="friend_<?php echo $key?>">
	<tr id="user_list<?php echo $user['friend_id'] ?>"  class="user_list">
		<td>
			<?php if($user['is_friend']==1){ ?>
				<p onclick="gouSerach(<?php echo $key?>,<?php echo $is_friend?>)" class="user_information_detail">
					<div  class="user_information_left">
						<span class="user_tips_title <?php echo $user['num']>0?'user_tips':''?>"><?php echo $user['num']?($user['num']>99?"99+":$user['num']):''?></span> 	
						<a href="/cn/chat/detail?uid=<?php echo $user['friend_id'] ?>">
							<img class="user_photo" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt="">
						</a>
					</div>
					<div  class="user_information_left user_float_left_10">
						<span class="user_title user_text_hidden"><?php echo $user['name']?> </span><br>
						<span class="user_content user_text_hidden"> <?php echo $user['content']?></span> 
					</div>
					<div  class="user_information_right" > 
						<!-- <span class="user_num"><?php echo $user['num']?($user['num']>99?"99+":$user['num']):''?></span><br> -->
						<span class="user_time"><?php echo $user['last_time']?date('H:i',$user['last_time']):''?><span>	<br>
						<!-- <span class="user_time  ">已添加</span> -->
					</div>
				</p>
			<?php }else{ ?>
				<p onclick="gouSerach(<?php echo $key?>,<?php echo $is_friend?>)" class="user_information_detail">
					<div  class="user_information_left">
						<span class="user_tips_title <?php echo $user['num']>0?'user_tips':''?>"><?php echo $user['num']?($user['num']>99?"99+":$user['num']):''?></span> 	
						<a href="/cn/chat/detail?uid=<?php echo $user['fid'] ?>">
							<img class="user_photo" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt="">
						</a>
					</div>
					<div  class="user_information_left user_float_left_10">
						<span class="user_title user_text_hidden"><?php echo $user['name']?> </span><br>
					</div>
				</p>
				<div  class="user_information_right remove_add_<?php echo $key ?>"  onclick="search_add_friend(<?php echo $key ?>)"> 
					<span class="user_time btn-success">添加
						<!-- <i class="bi bi-plus "></i> -->
					</span>
				</div>
			<?php } ?>

		</td>
	</tr>  
<?php } ?>
<tr class="user_list" style="visibility: hidden;"><td><div  class="user_information_left"></div></td></tr>