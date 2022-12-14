<?php $year = CHAT_YEAR; foreach($data['data']  as $v){  if(date('Y',$v['create_time'])<$year){
	// var_dump($year);
   	  $year = date('Y',$v['create_time']);?>
	<div  class="user_information_left user_information_left_year">   
		<div class="msg-user">
		<span class="chat_friend_time"><?php echo date('Y',$v['create_time'])?>年</span>
		</div> 
	</div> 
<?php }?>
<div  class="user_information_left" onclick="detail_photo(<?php echo $v['id'] ?>)" >
	<div class="msg-user msg-user-time">
	<span class="chat_friend_time"><?php echo date('d',$v['create_time'])?></span> <span>	<?php echo intval(date('m',$v['create_time']))?>月</span>
	</div> 	
	<img class="user_photo img_click" src="<?php echo isset($v['img'])?$v['img']:'/sign/img/contact.jpg'?>" alt=""> 
	<div class="msg-user">
		<?php echo $v['content'] ?>
	</div> 
</div> 
<?php  } ?>