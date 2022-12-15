// 显示图片
function toBigPhoto() {
    $(".friend_opacityBottom").addClass("friend_opacityBottom");//添加遮罩层
    $(".friend_opacityBottom").show();
    $("html,body").addClass("none-scroll");//下层不可滑动
    $(".bigImg").addClass("bigImg");//添加图片样式
    // $(".friend_opacityBottom").click(function () {//点击关闭
    //     $("html,body").removeClass("none-scroll");
    //     $(".friend_opacityBottom").remove();
    // });
}
function toBigPhotoClose() {
    // $(".friend_opacityBottom").click(function () {//点击关闭
        $("html,body").removeClass("none-scroll");
        $(".friend_opacityBottom").remove();
		$(".chat_title").html('');

    // });
}

//监听 左右滑动事件
var winHeight = $(window).height(),
$body = $("body");
$body.css("height", winHeight);
$("body").on("touchstart", function(e) {
	e.preventDefault();
	startX = e.originalEvent.changedTouches[0].pageX,
	startY = e.originalEvent.changedTouches[0].pageY;
});
$("body").on("touchmove", function(e) {
	//滑动页面才监听
	var chat_belong =$('#chat_belong').val();
	if(chat_belong==5){
		e.preventDefault();
		EndX = e.originalEvent.changedTouches[0].pageX,
		EndY = e.originalEvent.changedTouches[0].pageY,
		X = EndX - startX,
		Y = EndY - startY;
	
		if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
			// toBigPhotoClose() 
			click_left()
			// alert("左滑");
		}else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
			// toBigPhotoClose() 
			click_rigth()
			// alert("右滑");
		}
	}
});

function show_photo(){
	// 当前图片页码
	var photo_page = $("#photo_page").val();
	var imgsrc =img[parseInt(photo_page)-1];
	var title = '<span >'+photo_time +'</span></br>'+photo_page+'/'+num;
	$(".chat_title").html(title);
	//获取图片路径
    // var imgsrc = $(this).attr("src");
	var new_content =  '</br><span class="photo_content">'+photo_content +'</span>';
    var friend_opacityBottom =  '<div class="friend_opacityBottom" style = "display:none"><img class="bigImg" src="' + imgsrc + '">'+new_content+'</div>';
    $(document.body).append(friend_opacityBottom);
    toBigPhoto();//变大函数
}

function click_left(){
	var photo_page = $("#photo_page").val();
	var now_photo = parseInt(photo_page)-1; 
	if(now_photo!=0){
		toBigPhotoClose() 
		$("#photo_page").val(now_photo)
		show_photo()
	}else if(now_photo<=0){
		// console.log(111)
		// 上一页
		if(photo_next!=0){
			toBigPhotoClose();
			detail_photo(photo_next,1)
		}else{
			toBigPhotoClose();
			show_photo()
		}
	}
}
function click_rigth(){
	var photo_page = $("#photo_page").val();
	var now_photo = parseInt(photo_page)+1; 
	if(now_photo<=num){
		toBigPhotoClose() 
		$("#photo_page").val(now_photo)
		show_photo()
	} else if (now_photo>num){
		// console.log(222)
		//    下一页
		if(photo_last!=0){
			toBigPhotoClose();
			detail_photo(photo_last);
		}else{
			toBigPhotoClose();
			show_photo()
		}
	}
}