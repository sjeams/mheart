//滚动条 返回顶部事件
function scllTop(){
    $(window).scrollTop(0)
}

$.orientationModel=true  //竖屏显示菜单，横屏不显示菜单
// {/* <script type="text/javascript">
//     //滚动条头部和底部隐藏事件 */}
$(function(){   
    scllTop()
    //禁用滚动监听
    var winHeight = $(document).scrollTop();
    var t = 0;
    $(window).scroll(function() {
        getPage();  //滚动分页
        if($.orientationModel){
            var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
            //上下滚动操作
            if(t<=scrollY&&t>=160){
                // console.log("往下滚动");
                header_title_hidden();
                MenuHidden();//隐藏菜单
            }else{
                // console.log("往上滚动");
                header_title_show();
                MenuHidden();//隐藏菜单
                }
            setTimeout(function(){t=scrollY},0);
        }
    });
});
// </script>
//监听旋转
$(window).on('orientationchange', function(event) {
    var isbofang  = $("#is_bofang_type").val();
    // ckplayer监听播放旋转
    if(isbofang==1){
        if (window.orientation == 0 || window.orientation == 180) {
            // console.log("竖屏状态！");
            // alert("竖屏状态！!");
            onorientationChangeModel(true);
             $.orientationModel=true
        } else {
            // 横屏模式
            // console.log("横屏状态！");
            // alert("横屏状态！!");
            onorientationChangeModel(false);
             $.orientationModel=false
        }
    }
    //旋转，关闭弹窗
    // cancelSerach()

});
// player.webFull(function(bool){//bool=true，页面全屏状态，=false，普通状态});
function onorientationChangeModel(type) {
    var _this =this;
    // console.log(_this.newplayer);
    if(_this.newplayer){
        if(type){
            // 退出全屏状态
            _this.newplayer.exitFull();
            // header_title_show();//显示标题
            // _this.newplayer.exitWebFull();
            _this.newplayer.play();
        }else{
            // 页面全屏状态
            _this.newplayer.full();
            header_title_hidden()
            MenuHidden();//隐藏侧边菜单
            // _this.newplayer.webFull();
            _this.newplayer.play();
        }
    }
}

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
// function addLoading(){
//     layer.open({
//         type: 3
//         ,title: false //不显示标题栏
//         ,closeBtn: false
//         ,skin: 'loading1 layui-anim-loop'
//         ,shade: 0.1
//         ,id: 'loading1' //设定一个id，防止重复弹出
//         // ,content: '<div class="center layui-anim layui-anim-up   " ></div>'
//         ,success: function(layero){  
//     } });
// }
function addLoading(){
    layer.open({
        type: 3  // 默认弹出加载层
        ,title: false //不显示标题栏
        ,closeBtn: false
        ,icon:0
        ,skin: ' loading1 layui-anim-loop'
        ,shade: 0.1
        ,id: 'loading1' //设定一个id，防止重复弹出
        // ,content: '<div class="center layui-anim layui-anim-up   " ></div>'
        ,success: function(layero){  
    } });
}

function removeLoadingPage(){
    layer.closeAll('page'); //关闭所有页面层  1
}

//移除阴影加载中
function removeLoading(){
    // 对应所有的type  
    // layer.closeAll(); //疯狂模式，关闭所有层
    // layer.closeAll('dialog'); //关闭信息框  0
    // layer.closeAll('page'); //关闭所有页面层  1
    // layer.closeAll('iframe'); //关闭所有的iframe层 2
    layer.closeAll('loading'); //关闭加载层 3
    // layer.closeAll('tips'); //关闭所有的tips层   4
     
    // //关闭后的回调（layui 2.6.5、layer 3.4.0 新增）
    // layer.closeAll('loading', function(){ //关闭 loading 并执行回调
    //   //do something
    // }); 
    // layer.closeAll(function(){ //关闭所有层并执行回调
    //   //do something
    // }); 
}
// 异步html
function getprintHtml(url){
    var getHtml =$.ajax({
        type:"post",
        url: url,
        cache:true,
        dataType: 'json',
        async: false,
        success: function (data) {
            removeLoading()
        },error:function(data){
            removeLoading()
        }
    });
    return getHtml.responseText;
}

//ajax 请求前添加加载状态
$(document).ajaxStart(function( ) {
    addLoading()
 
});
$(document).ajaxError(function( ) {
    removeLoading()
 
});
$(document).ajaxStop(function( ) {
    removeLoading()
});
// $(document).ajaxSuccess(function( ) {
//     removeLoading()
// });
 


  /*  footer ______________________ */


    //滚动条触发事件--分页
    // $(window).scroll(function() {
    //     //监听事件内容
    //     // console.log(getScrollHeight()) 
    //     // console.log(getWindowHeight() + getDocumentTop())  
    //     // console.log(id)
    //     if (getScrollHeight() <= getWindowHeight() + getDocumentTop() ) {
    //         var goPageCount = $('#goPageCount').val();
    //         //当滚动条到底时,这里是触发内容
    //         //分页
    //         if(goPageCount){
    //             var goPage = Number($("#goPage").val()) + Number(1)   
    //             if(goPage<=goPageCount){
    //                 nextPage(goPage);
    //             }
    //         }
    //     }
    //     goPageCount=null;
    //     goPage=null;
    // });
     //监听分页
    function getPage(){

        if($('#getPage').val()==1){
            //窗口高度 = 滚动高度+页面高度+160.触发
            if (getScrollHeight()<= getWindowHeight() + getDocumentTop()+160) {
                var goPageCount = $('#goPageCount').val();
                //当滚动条到底时,这里是触发内容
                //判断是否使用分页插件
                if(goPageCount){
                    var goPage = Number($("#goPage").val()) + Number(1)   
                    if(goPage<=goPageCount){
                        nextPage(goPage);
                    }else{
                        //到底部距离160 显示 底部
                        if(getScrollHeight()<= getWindowHeight() + getDocumentTop()+160){
                            header_title_show();
                        }
                    }
                }
            }
            goPageCount=null;
            goPage=null;
        }
    }
 

    function header_title_show(){
        $('.top-title').removeClass('hiddened');
        $('.page_bottom').css('display','table');
        $('.video_hidden_button').css('display','block');
    }
    function header_title_hidden(){
        $('.top-title').addClass('hiddened');
        $('.page_bottom').css('display','none');
        $('.video_hidden_button').css('display','none');
    }

 
 
    // <!-- 窗口滚动异步事件 -->
 
    //文档高度
    function getDocumentTop() {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }

    //可视窗口高度
    function getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }

    //滚动条滚动高度
    function getScrollHeight() {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }

        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }


    /*
    当滚动条滑动，触发事件，判断是否到达最底部
    然后调用ajax处理函数异步加载数据
    */
    // window.onscroll = function () {
    //     //监听事件内容
    //     if (getScrollHeight() == getWindowHeight() + getDocumentTop()) {
    //         //当滚动条到底时,这里是触发内容
    //         //异步请求数据,局部刷新dom
    //         ajax_function(); 
    //     }
    // }
    
    // function ajax_function() {
    //     $.get(
    //         url,
    //         data,
    //         function (data) {
    //             // dosomething
    //         }
    //     );
    // }







  /*  header ______________________ */
    //首页 
    function video_list(){
        window.location.href='/cn/video/list';
    }

    function my_collect(){
        window.location.href='/cn/video/query-video';  
    }
    function old_content(){
        window.location.href='/cn/video/like';  
    }
    function my_video(){
        window.location.href='/cn/video/collect-video';
    }
    function my_like(){
        window.location.href='/cn/video/collect-like';
    }
    function my_chat(){
        window.location.href='/cn/chat/list';
    }

    function Menu(){
       var menu =$("#menu").val();
       if(menu==1){
            $('.menu_list').css('display','none');
            $("#menu").val(0)
       }else{
            $('.menu_list').css('display','block');
            $("#menu").val(1)
        }
    }
    
    function vidoeModel(){
        $.ajax({
            url: '/cn/video-api/video-model', // 跳转到 action 
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if(data==1){
                    $('.model_name').text('窗口√');
                    $('.model_name').removeClass('btn-defult');
                    $('.model_name').addClass('btn-success');
                    $('#is_model_type').val(1)
    
                    //暂停在播视频
                    var now_video =$("#now_video").val();
                    var now_video_key =$("#now_video_key").val();
                    //暂停在播视频
                    if(now_video!=0){
                        var goBelong =$("#goBelong").val(); 
                        if(goBelong==0){
                            var player ="<span onclick='videoList("+now_video+","+now_video_key+")'  class='video_box '></span>";
                        }else{
                            var player ="<span onclick='videoList("+now_video+")'  class='video_box '></span>";
                        }
                        $(".video"+now_video).html(player);
                    } 
                    
                    //显示窗口播放栏
                    $('.video_old').css('display','table-cell');
                }else{
                    $('.model_name').text('列表×');
                    $('.model_name').removeClass('btn-success');
                    $('.model_name').addClass('btn-defult');
                    $('#is_model_type').val(0)
                    //隐藏窗口播放栏
                    $('.video_old').css('display','none');
    
                }
                // removeLoading()
                // console.log(data);
                // window.location.reload();  
                var now_video =$("#now_video").val();
                var now_video_key =$("#now_video_key").val();
                videoList(now_video,now_video_key) 
            } 
        });
    } 
    function isBofang(){
        $.ajax({
            url: '/cn/video-api/is-bofang', // 跳转到 action 
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if(data==1){
                    $('.bofang_name').text('Ckplay');
                    $('.bofang_name').removeClass('btn-defult');
                    $('.bofang_name').addClass('btn-success');
                    $('#is_bofang_type').val(1)
                }else{
                    $('.bofang_name').text('Dplay');
                    $('.bofang_name').removeClass('btn-success');
                    $('.bofang_name').addClass('btn-defult');
                    $('#is_bofang_type').val(0)
                }
                // 切换视频
                var now_video =  $("#now_video").val(); 
                var now_video_key =$("#now_video_key").val();
                videoList(now_video,now_video_key)
                // console.log(data);
                // window.location.reload();   
            },
        });
    } 
    
    function isCache(){
        $.ajax({
            url: '/cn/video-api/is-cache', // 跳转到 action 
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if(data==1){
                    $('.cache_name').text('缓存√');
                    $('.cache_name').removeClass('btn-defult');
                    $('.cache_name').addClass('btn-success');
                    isGetCaches();
                }else{
                    $('.cache_name').text('缓存×');
                    $('.cache_name').removeClass('btn-success');
                    $('.cache_name').addClass('btn-defult');
                }
                $("#is_cache").val(data);
                // console.log(data);
                // window.location.reload();   
            },
        });
    } 
    
    //退出
    function  loginOuts(){
        $.ajax({
            url: '/cn/login/login-out', // 跳转到 action 
            type: 'post',
            data:{
                out:1,
            },
            dataType: 'json',
            success: function (data) {
                localStorage.setItem('sslToken','');
                window.location.reload();   
            },
        });
    }
    
    function toZero(t){
        return	(t < 10 ? "0" + t : t);
    }
    
    function MenuHidden(){
        var menu =$("#menu").val();
        if(menu==1){
             $('.menu_list').css('display','none');
             $("#menu").val(0)
        }
     }

     // 点击事件监听
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            gou();
        }
    });