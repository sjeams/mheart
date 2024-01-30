<!-- 聊天室模板 -->
 
	<!-- <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script> -->
 
 <style>
	table td {
		padding:0.25rem!important;
	}
	.chat_body{
		margin-bottom: 40px;
		/* margin: 40px auto; */
	}
 
	.user_information_center{
		cursor: pointer;
		text-align: center;
		margin:30px 30px;
    }
	/* 时间 */
	.msg-time{
		margin-left: 10px;
		color:black;
		background-color:white;
		/* border:1px solid #bbbbbb; */
		text-align:center;
		word-wrap:break-word;
		display: inline-block;
		line-height: 30px;
		border-radius: 5px;
		padding:0px 10px;
		height: 30px;
		width: 200px;
		color:#ffffff;
		background-color: #dddddd;
	}

	.user_information_right{
		cursor: pointer;
		text-align: right;
		margin:30px 30px;
		margin-right: 20px;

    }
    .user_information_left{
		cursor: pointer;
		text-align: left;
		margin-top:30px ;
		margin-left: 20px;
    }
	.user_photo{
		height:40px;
		width:40px;
		border-radius: 5px;
		vertical-align: top
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
	body{
		background-color: #f3f3f3;
	}
  #onlineUserFD{
	display: none;
  }
</style>
</body>
<div class="center chat_body">
    <!-- 当前在线人数：<span id="onlineUser">0</span>人&nbsp;&nbsp; -->
    <!-- 客户端FD： -->
	<span id="onlineUserFD"></span> 
    <div id="message-body" class="message-body">

    </div>
    <div id="show-logs">
		<!-- <div class="user_information_center"> 
			<div class="msg-time">
				<?php echo date('Y-m-d H:i',time())?>
			</div>
		</div>		 -->
		<!-- <div  class="user_information_left">
			<img class="user_photo" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt=""> 
			<div class="msg-user">收到了双方的发是 试</div>
		</div> 
	
		<div class="user_information_right">
			<div class="msg-user-mine">测法大师傅士大夫发生</div>
			<img class="user_photo" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt=""> 
			</div> 
		</div> -->
	</div>
</div>
<!-- 标题 -->
<input type="hidden" value="<?php echo $chat_title ?>" id="chat_title">
<script lang="javascript">
	//补全标题
	$(function(){
		var chat_title =$('#chat_title').val();
		$('.chat_title').text(chat_title);
	})
	function chat_detail(){
		window.location.href='/cn/chat/detail?uid=<?php echo $friend['id'] ?>';
	}
    var msg;
	var uid='<?php echo $user['id'] ?>';
	var fid='<?php echo $friend['id'] ?>';
	var room_id='<?php echo $room ?>';
    var wsServer = "wss://www.aheart.cn/wss?room="+room_id+"&uid="+uid; 
    var websocket = new WebSocket(wsServer);
    websocket.onopen = function (evt) {// 建立连接
        // showServerInfoSuccess("连接成功.");
		// showServerInfoSuccess(JSON.parse(evt.data).content);
    };
    websocket.onclose = function (evt) {// 关闭连接
        // showServerInfoFailured("关闭连接");
    };
    websocket.onmessage = function (evt) {// 接收服务器推送的消息
        //showInfo(evt.data);
		// 进入或退出
		if(JSON.parse(evt.data).type == 'USER_IN'){
			if(typeof JSON.parse(evt.data).fd !== 'undefined'){
				$("#onlineUserFD").html(JSON.parse(evt.data).fd);
			}
			$("#onlineUser").html(JSON.parse(evt.data).num);
			//获取缓存
			// console.log(JSON.parse(evt.data) )
			//自己进去的时候缓存历史记录
			if(JSON.parse(evt.data).uid==uid){
				showHistory(JSON.parse(evt.data).content)
				//修改消息阅读状态
			}
		}
		if(JSON.parse(evt.data).type == 'USER_OUT' ){
			$("#onlineUser").html(JSON.parse(evt.data).num);
			// showServerInfoFailured(JSON.parse(evt.data).msg);
		}
		if(JSON.parse(evt.data).type == 'USER_MSG'){		
			if(JSON.parse(evt.data).from_fd == $("#onlineUserFD").html()){
				var msg = JSON.parse(evt.data).msg;
							// + ' 说：我';
				showUserMessageMine(msg);
				scrollToEnd();
			}else{
				// var msg = JSON.parse(evt.data).from_fd 
				// 			+ ' 说：'
				// 			+ JSON.parse(evt.data).msg;
				var msg =JSON.parse(evt.data).msg;
				showUserMessage(msg);
				scrollToEnd();
				my_num();//清空我的消息数
			}
		}
    };
 
    websocket.onerror = function (evt, e) {
        // showInfo('发生错误: ' + evt.data);
    };
 
    // var sendBtn = document.getElementById('sendBtn');
    
    // sendBtn.onclick = function(){
    //     if (websocket.readyState === 1) {
    //         msg = $('#msg').val();
    //         websocket.send(msg);// 发送消息到服务器
    //     } else {
    //         alert('WebSocket 连接失败');
    //     }
    // };
    function sendBtn(){
		// console.log(show_newTime())
		if (websocket.readyState === 1) {
            msg = $('#msg').val();
			var content_time =new Date().getTime();
			if(msg){
				var message = {
					msg: msg,
					room:room_id,
					uid:uid,
					fid:fid,
					time:content_time,
				};
				// console.log(message)
				websocket.send(JSON.stringify(message));// 发送消息到服务器
				$('#msg').val('');
				//给对应的好友标记消息数量
				Update_msg(content_time,msg);
			}
        } else {
            // alert('WebSocket 连接失败');
			msg = $('#msg').val();
			showUserMessageMine(msg)
        }  
    }

	//监听回车事件
  	function gou(){
		sendBtn();
	}
	// function showInfo(msg){
    //     $("#show-logs").append("<div class='msg-logs'>"+msg+"</div>");
	// }
	//历史回填
	function showHistory(msg_list){
		var history_time = 0;
		for(var  msg in msg_list){
			let new_time= show_newTime(msg_list[msg].time);
			let old_time= show_newTime(history_time);
			//时间
			if(new_time!= old_time){
				showTime(new_time);
				var	history_time = msg_list[msg].time;
			}
			//消息
			if(msg_list[msg].uid==uid){
				showUserMessageMine(msg_list[msg].msg);
			}else{
				showUserMessage(msg_list[msg].msg);
			}

		}
		scrollToEnd();
	}
	//显示日期
	function showTime(time){
		var news ='<div class="user_information_center scrollToLocation"><div class="msg-time">'+time+'</div></div>';
		$("#message-body").append(news);
	}
	// friend
	function showUserMessage(msg){
		var news ='<div  class="user_information_left son-panel"> <a href="/cn/chat/detail?uid=<?php echo $friend['id'] ?>"><img class="user_photo" src="<?php echo $friend['photo']?$friend['photo']:'/sign/img/contact.jpg'?>" alt=""> </a><div class="msg-user">'+msg+'</div></div>';
		$("#message-body").append(news);
	}
	//my
	function showUserMessageMine(msg){
		var news ='<div class="user_information_right son-panel"><div class="msg-user-mine">'+msg+'</div> <a href="/cn/chat/detail?uid=<?php echo $user['id'] ?>"><img class="user_photo" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt=""> </a></div> </div>';
        $("#message-body").append(news);
	}

	// function showServerMsg(msg){
        // $("#message-body").append("<div class='msg-server'>服务器消息："+msg+"</div>");
	// }
	// 回填聊天记录
	// function showServerInfoSuccess(content){
		// console.log(content );
        // $("#message-body").append("<div class='msg-green'>服务器消息："+msg+"</div>");
	// }
	// function showServerInfoFailured(msg){
    //     $("#message-body").append("<div class='msg-exit'>服务器消息："+msg+"</div>");
	// }
 //当前时间
function show_newTime(time){
    // var myDate = new Date;
	var myDate =new Date(time)
    var year = myDate.getFullYear(); //获取当前年
    var mon = toZero(myDate.getMonth() + 1); //获取当前月
    var date =  toZero(myDate.getDate()); //获取当前日
    var h =  toZero(myDate.getHours());//获取当前小时数(0-23)
    var m =  toZero(myDate.getMinutes());//获取当前分钟数(0-59)
    // var s = toZero(myDate.getSeconds());//获取当前秒
    var week =  toZero(myDate.getDay());
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    // console.log(year, mon, date, weeks[week])
	// return year + "年" + mon + "月" + date + "日" + weeks[week];
	return year + "年" + mon + "月" + date + "日 " + h +":"+ m;
}



//滚动到底部
// 如果要向下或向右等移动，可以用scrollTop或scrollRight等
//滚动到页面底端（页面内容过多时）
function scrollToEnd(){//滚动到底部
	var test_div = document.getElementById("message-body");
	test_div.scrollLeft = screen.width;  //screen.width就是要移动的像素
	var scrollHeight = $(document).height()-$(window).height();
	$(document).scrollTop(scrollHeight);
	// console.log("执行滚动到底端，height="+scrollHeight);
}
//修改好友消息数
function  Update_msg(time,msg){ 
	$.ajax({
		url: '/cn/chat/update-friend-msg', // 跳转到 action 
		type: 'post',
		data:{uid:uid,fid:fid,time:time,content:msg},
		dataType: 'json',
		success: function (data) {

		},
	});
} 
//修改自己的消息数
function  my_num(){ 
	$.ajax({
		url: '/cn/chat/update-my-num', // 跳转到 action 
		type: 'post',
		data:{uid:uid,fid:fid},
		dataType: 'json',
		success: function (data) {				
		},
	});
} 

</script>
 
 