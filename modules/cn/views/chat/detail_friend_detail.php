<style>
	img{
		object-fit:cover;
		vertical-align: top;
		float: left;
	}
</style>
<?php if(empty($data['data'])&&$data['page']==1){ ?>
	暂无内容
<?php } ?>

<?php 
	// var_dump($data['data']);die;
	$year = CHAT_YEAR; 
	foreach($data['data']  as $v){  if(date('Y',$v['create_time'])<$year){
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
	<div class="msg-user msg-user-time user_photo pictures-adaptive">
	<div class="wrap">
		<?php $img = explode(',',$v['img']);   $leng= count($img); foreach($img  as$key=>$val){  if($leng==1){ ?>
				<img class=" img_click" src="<?php echo $val; ?>" alt="" style="width:100%;height:80px"  > 
			<?php }else if( $leng==2){ ?>    
				<img class=" img_click" src="<?php echo $val; ?>" alt="" style="<?php echo $leng>1?"width:50%;height:80px":""; ?>" > 
			<?php }else if( $leng==3){ ?>
				<img class=" img_click" src="<?php echo $val; ?>" alt="" style="<?php echo $key==0?"width:50%;height:80px":"width:50%;height:40px"; ?>" > 
			<?php }else { ?>
				<img class=" img_click" src="<?php echo $val; ?>" alt="" style="width:50%;height:40px" > 
			<?php } ?>
		<?php } ?>
	</div>
	</div> 
	<div class="msg-user">
		<?php echo $v['content'] ?>
	</div> 
</div> 
<?php  }  ?>
 