<!-- 聊天室模板 -->
<html>
	<!-- <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script> -->
<body>
<style>
	.user_information_right{
		cursor: pointer;
		text-align: right;
		margin-top:30px ;

    }
    .user_information_left{
		cursor: pointer;
		text-align: left;
		margin-top:30px ;
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
		background-color: #efefef;
	}
  #onlineUserFD{
	display: none;
  }
</style>
 
<div class="center chat_body">
    <!-- 当前在线人数：<span id="onlineUser">0</span>人&nbsp;&nbsp; -->
    <!-- 客户端FD： -->
	<span id="onlineUserFD"></span> 
    <div id="message-body" class="message-body">

    </div>
    <div id="show-logs">		
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
</body>
 
<script lang="javascript">
    var wsServer = "ws://124.221.174.216:9501?room=<?php echo $room;?>";
    var websocket = new WebSocket(wsServer);
    websocket.onopen = function (evt) {// 建立连接
        showServerInfoSuccess("连接成功.");
		// showServerInfoSuccess(JSON.parse(evt.data).content);
    };
 
    websocket.onclose = function (evt) {// 关闭连接
        showServerInfoFailured("关闭连接");
    };
 
    websocket.onmessage = function (evt) {// 接收服务器推送的消息
        //showInfo(evt.data);
		// 进入或退出
		if(JSON.parse(evt.data).type == 'USER_IN'){
			if(typeof JSON.parse(evt.data).fd !== 'undefined'){
				$("#onlineUserFD").html(JSON.parse(evt.data).fd);
			}
			
			$("#onlineUser").html(JSON.parse(evt.data).num);
 
			console.log(JSON.parse(evt.data) )
		}
 
		if(JSON.parse(evt.data).type == 'USER_OUT' ){
			$("#onlineUser").html(JSON.parse(evt.data).num);
			// showServerInfoFailured(JSON.parse(evt.data).msg);
		}
		
		if(JSON.parse(evt.data).type == 'USER_MSG'){		
			
			console.log(JSON.parse(evt.data) )
			if(JSON.parse(evt.data).from_fd == $("#onlineUserFD").html()){
				var msg = JSON.parse(evt.data).msg;
							// + ' 说：我';
				
				showUserMessageMine(msg);
			}else{
				// var msg = JSON.parse(evt.data).from_fd 
				// 			+ ' 说：'
				// 			+ JSON.parse(evt.data).msg;
				var msg =JSON.parse(evt.data).msg;
				showUserMessage(msg);
			}
		}
    };
 
    websocket.onerror = function (evt, e) {
        // showInfo('发生错误: ' + evt.data);
    };
 
    var msg;
	var room_id;
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
        if (websocket.readyState === 1) {
            msg = $('#msg').val();
			room_id = '<?php echo $room;?>';
			uid = '<?php echo $user['id'];?>';
			if(msg){
				var message = {
					msg: msg,
					room:room_id,
					uid:uid,
				};			
				websocket.send(JSON.stringify(message));// 发送消息到服务器
				$('#msg').val('');
			}
        } else {
            alert('WebSocket 连接失败');
        }  
    }

	//监听回车事件
  	function gou(){
		sendBtn();
	}
 
	// function showInfo(msg){
    //     $("#show-logs").append("<div class='msg-logs'>"+msg+"</div>");
	// }
	
	// friend
	function showUserMessage(msg){
		var news ='<div  class="user_information_left"><img class="user_photo" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt=""> <div class="msg-user">'+msg+'</div></div>';
		$("#message-body").append(news);
	}
	//my
	function showUserMessageMine(msg){
		var news ='<div class="user_information_right"><div class="msg-user-mine">'+msg+'</div><img class="user_photo" src="<?php echo $user['photo']?$user['photo']:'/sign/img/contact.jpg'?>" alt=""> </div> </div>';
        $("#message-body").append(news);
	}
	// function showServerMsg(msg){
        // $("#message-body").append("<div class='msg-server'>服务器消息："+msg+"</div>");
	// }
	// 回填聊天记录
	function showServerInfoSuccess(content){
		
        // $("#message-body").append("<div class='msg-green'>服务器消息："+msg+"</div>");
	}
	// function showServerInfoFailured(msg){
    //     $("#message-body").append("<div class='msg-exit'>服务器消息："+msg+"</div>");
	// }
 
</script>
 
</html>