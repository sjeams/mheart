<!-- 聊天室模板 -->
<html>
	<!-- <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script> -->
<body>
<style>
	.message-body{
		/* border:1px solid #ccc; */
	}
	.msg-server{
		background-color:blue;
		border:1px solid #ccc;
		height:23px;
		margin-top:0px;
		text-align: center;
		word-wrap:break-word;
	}
	.msg-user{
		color:black;
		background-color:#00FFCC;
		border:1px solid #ccc;
		margin-top:0px;
		text-align:left;
		word-wrap:break-word;
	}
	.msg-user-mine{
		color:black;
		background-color:green;
		border:1px solid #ccc;
		margin-top:0px;
		text-align: right;
        float: right;
		word-wrap:break-word;
        width: 50%;
	}
	.msg-green{
		background-color:#DDFF77;
		border:1px solid #ccc;
		height:23px;
		margin-top:0px;
		text-align: center;
	}
	.msg-exit{
		background-color:#DDDDDD;
		border:1px solid #ccc;
		height:23px;
		margin-top:0px;
		text-align: center;
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

</style>
<div class="center">
    当前在线人数：<span id="onlineUser">0</span>人&nbsp;&nbsp;
    客户端FD：<span id="onlineUserFD"></span> 
    <div id="message-body" class="message-body">

    </div>
    <div id="show-logs">
    
    </div>
</div>
</body>
 
<script lang="javascript">
    var wsServer = 'ws://124.221.174.216:9501';
    var websocket = new WebSocket(wsServer);
    websocket.onopen = function (evt) {// 建立连接
        // showServerInfoSuccess("连接成功.");
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
			// showServerInfoSuccess(JSON.parse(evt.data).msg);
		}
 
		if(JSON.parse(evt.data).type == 'USER_OUT' ){
			$("#onlineUser").html(JSON.parse(evt.data).num);
			// showServerInfoFailured(JSON.parse(evt.data).msg);
		}
		
		if(JSON.parse(evt.data).type == 'USER_MSG'){			
			if(JSON.parse(evt.data).from_fd == $("#onlineUserFD").html()){
				var msg = JSON.parse(evt.data).msg 
							+ ' 说：我';
				
				showUserMessageMine(msg);
			}else{
				var msg = JSON.parse(evt.data).from_fd 
							+ ' 说：'
							+ JSON.parse(evt.data).msg;
				
				showUserMessage(msg);
			}
		}
    };
 
    websocket.onerror = function (evt, e) {
        showInfo('发生错误: ' + evt.data);
    };
 
    var msg;
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
            websocket.send(msg);// 发送消息到服务器
        } else {
            alert('WebSocket 连接失败');
        }  
    }


	function showInfo(msg){
        $("#show-logs").append("<div class='msg-logs'>"+msg+"</div>");
	}
	function showUserMessage(msg){
        $("#message-body").append("<div class='msg-user'>"+msg+"</div>");
	}
	function showUserMessageMine(msg){
        $("#message-body").append("<div class='msg-user-mine'>"+msg+"</div>");
	}
	function showServerMsg(msg){
        $("#message-body").append("<div class='msg-server'>服务器消息："+msg+"</div>");
	}
	function showServerInfoSuccess(msg){
        $("#message-body").append("<div class='msg-green'>服务器消息："+msg+"</div>");
	}
	function showServerInfoFailured(msg){
        $("#message-body").append("<div class='msg-exit'>服务器消息："+msg+"</div>");
	}
 
</script>
 
</html>