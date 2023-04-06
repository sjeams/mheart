$('.img_click').click(function () {
    //获取图片路径
    var imgsrc = $(this).attr("src");
    console.log(imgsrc);
    var opacityBottom = '<div class="opacityBottom" style = "display:none"><img class="bigImg" src="' + imgsrc + '"></div>';
    $(document.body).append(opacityBottom);
    toBigImg();//变大函数

});
function toBigImg() {
    $(".opacityBottom").addClass("opacityBottom");//添加遮罩层
    $(".opacityBottom").show();
    $("html,body").addClass("none-scroll");//下层不可滑动
    $(".bigImg").addClass("bigImg");//添加图片样式
    $(".opacityBottom").click(function () {//点击关闭
        $("html,body").removeClass("none-scroll");
        $(".opacityBottom").remove();
    });
}

//添加阴影加载中
function addLoading(){
    layer.open({
        type: 1
        ,title: false //不显示标题栏
        ,closeBtn: false
        ,skin: 'loading1 layui-anim-loop'
        ,shade: 0.8
        ,id: 'loading1' //设定一个id，防止重复弹出
        // ,content: '<div class="center layui-anim layui-anim-up   " ></div>'
        ,success: function(layero){  
    } });
}


//移除阴影加载中
function removeLoading(){
    layer.closeAll(); //疯狂模式，关闭所有层
    // layer.closeAll('dialog'); //关闭信息框
    // layer.closeAll('page'); //关闭所有页面层
    // layer.closeAll('iframe'); //关闭所有的iframe层
    // layer.closeAll('loading'); //关闭加载层
    // layer.closeAll('tips'); //关闭所有的tips层    
     
    // //关闭后的回调（layui 2.6.5、layer 3.4.0 新增）
    // layer.closeAll('loading', function(){ //关闭 loading 并执行回调
    //   //do something
    // }); 
    // layer.closeAll(function(){ //关闭所有层并执行回调
    //   //do something
    // }); 
}
