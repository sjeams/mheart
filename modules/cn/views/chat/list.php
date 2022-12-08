<style>
	/* .user_information{
		vertical-align: center; text-align:center;
	} */
	.user_list{
		cursor: pointer;
	}
	.user_information_right{
		cursor: pointer;
        /* line-height: 45px; */
        height:45px;
        float: right;
		text-align:right;
    }
    .user_information_left{
		cursor: pointer;
        /* line-height: 45px; */
        height:45px;
     	float: left;
    }
	.user_photo{
		height:45px;
		width:45px;
		border-radius: 5px;
	}
	/* .user_block{
		display: block;
	} */
	.user_title{
		font-weight: bold;
		font-size: 14px;
	}
	.user_content{
		/* font-weight: bold; */
		font-size: 12px;
		color: #a5a5a5;
	}
	.user_text_hidden{
		/* //超出边界解决办法 隐藏*/
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-wrap: break-word;
		display: inline-block;
	 	max-width: 200px;
	}

	.user_float_left_10{
		margin-left:20px ;
	}
</style>
<form     >
    <table class="table table-bordered  tablestyle"  >
 
        <tbody id="content_append">
		<?php foreach($userList as $user){ ?>
			<tr>
				<td onclick="gouSerach(<?php echo $user['friend_id']?>)" class="user_list">
					<div  class="user_information_left"><img class="user_photo" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt=""></div>
					<div  class="user_information_left user_float_left_10">
						<span class="user_title user_text_hidden"><?php echo $user['name']?> </span><br>
						<span class="user_content user_text_hidden"> <?php echo $user['content']?>	 </span> 
					</div>
					<div  class="user_information_right" > 
						<?php echo $user['num']?$user['num']:''?><br>
						<?php echo $user['last_time']?>	
					</div>
				</td>
			</tr>  
		<?php } ?>
        </tbody>
    </table>
</form>

<script>
	function gouSerach(friend_id){
		window.location.href="/cn/chat/chat?uid="+friend_id;
	}
</script>