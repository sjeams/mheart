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
	.user_num{
		/* height: 20px;
		width: 20px; */
		padding: 5px;
		border-radius:50%;
		text-align: center;
		vertical-align: center;
		background-color: red;
		color: #ffffff;
		display: inline-block;
		font-weight: bold;
		line-height: 10px;
	}
	.user_tips{
		/* height: 20px;
		width: 20px; */
		padding: 5px;
		border-radius:50%;
		text-align: center;
		vertical-align: center;
		background-color: red;
		color: #ffffff;
		display: inline-block;
		font-weight: bold;
		position: relative;
		right: 5px;
    	bottom: 5px;
		float: right;
	}
</style>
<form >
	<input type="hidden" id="usernum" value="<?php echo $total ?>">
    <table class="table table-bordered  tablestyle"  >
        <tbody id="content_append">
	
        </tbody>
    </table>
</form>

<script>
    function  gou(){
        var friend_title =$("#friend_title").val();
        // window.location.href="/cn/chat/list?friend_title="+friend_title ;
		url="/cn/chat/list?friend_title="+friend_title+"&html=1";
		var html = getprintHtml(url);
		// if(html){
            $('#content_append').html(html);
			$("#friend_title").val('');
		// }
    } 
	
	// websocket通讯
	$(function(){
		gou()
		//修改消息数量
		var num = Number($("#usernum").val());
		if(num>0){Update_user_num(num);	}
	})
	function gouSerach(friend_id){
		window.location.href="/cn/chat/chat?uid="+friend_id;
	}
	// 外部监听事件
    // var wsServer = "ws://124.221.174.216:9501?room="+room_id+"&uid="+uid; 
	var wsServer = "wss://www.mheart.xyz/wss";
    var websocket = new WebSocket(wsServer);
	// /监听消息数量和最新消息
	websocket.onmessage = function (evt) {// 接收服务器推送的消息
		if(JSON.parse(evt.data).type == 'USER_MSG'){		
			// console.log(JSON.parse(evt.data) )
			var msg =JSON.parse(JSON.parse(evt.data).frame);
			// console.log(msg)
			//消息监听并且替换
			Update_user_news(msg.uid,msg.fid,msg.time,msg.msg);
		}
	}
	function  Update_user_num(num){ 
		if(num>99){	num= '99+';}

		// console.log($('.user_chat').text());
		var chat_num='<span class="user_num">'+num+'</span>';
		$('.user_chat').html('聊天'+chat_num);
	}
	//修改好友消息数 
	function  Update_user_news(uid,fid,time,msg){ 
		
		$("#user_list"+uid).find('.user_content').text(msg);
		var myDate =new Date(time)
		var h =  toZero(myDate.getHours());//获取当前小时数(0-23)
		var m =  toZero(myDate.getMinutes());//获取当前分钟数(0-59)
		$("#user_list"+uid).find('.user_time').text(h +":"+ m);
		$("#user_list"+uid).find('.user_tips_title').addClass('user_tips');
		
		var num = Number($("#usernum").val()) + Number(1);
		$("#usernum").val(num);
		Update_user_num(num);

		// console.log($("#user_list"+uid).html());
		var move_html = $("#user_list"+uid).html();
		var move_html ='<tr id="user_list'+uid+'"  class="user_list">'+move_html+' </tr>';
		$("#user_list"+uid).remove();
 		$(".user_list").first().before(move_html);

		// $.ajax({
		// 	url: '/cn/chat/get-news-num', // 跳转到 action 
		// 	type: 'post',
		// 	data:{uid:uid,fid:fid,time:time,content:msg},
		// 	dataType: 'json',
		// 	success: function (data){
		// 		$("#user_list"+uid).find('.user_content').text(msg);
		// 		$("#user_list"+uid).find('.user_num').text(data);
		// 		var myDate =new Date(time)
		// 		var h =  toZero(myDate.getHours());//获取当前小时数(0-23)
    	// 		var m =  toZero(myDate.getMinutes());//获取当前分钟数(0-59)
		// 		// $("#user_list"+uid).find('.user_time').text(h +":"+ m);
		// 	},
		// });
	} 
</script>

