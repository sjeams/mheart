    // 全部移动到common.js 去了
    
    //滚动条头部和底部隐藏事件
    // $(function(){   
    //     // t/scrollY  记录滚动条高度，判断上下   getScrollHeight()/ etWindowHeight() + getDocumentTop() 窗口高度
    //     var winHeight = $(document).scrollTop();
    //     var t = 0;
    //     $(window).scroll(function() {
    //         //禁用滚动监听
    //         if($('#getPage').val()==1){
    //             getPage();  //分页
    //         }
    //         var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
    //         //上下滚动操作
    //         if(t<=scrollY&&t>=160){
    //             // console.log("往下滚动");
    //             header_title_hidden();
    //         }else{
    //             // console.log("往上滚动");
    //             header_title_show();
    //          }
    //         setTimeout(function(){t=scrollY},0);

    //     });
    // });
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
    // function getPage(){
    //     //窗口高度 = 滚动高度+页面高度+160.触发
    //     if (getScrollHeight()<= getWindowHeight() + getDocumentTop()+160) {
    //         var goPageCount = $('#goPageCount').val();
    //         //当滚动条到底时,这里是触发内容
    //         //判断是否使用分页插件
    //         if(goPageCount){
    //             var goPage = Number($("#goPage").val()) + Number(1)   
    //             if(goPage<=goPageCount){
    //                 static_nextPage(goPage); //list 页面没有滚动分页nextPage(goPage)
    //             }else{
    //                 //到底部距离160 显示 底部
    //                 if(getScrollHeight()<= getWindowHeight() + getDocumentTop()+160){
    //                     header_title_show();
    //                 }
    //             }
    //         }
    //     }
    //     goPageCount=null;
    //     goPage=null;
    // }

    //改到common js
    // function header_title_show(){
    //     $('.top-title').removeClass('hiddened');
    //     $('.page_bottom').css('display','table');
    //     $('.video_hidden_button').css('display','block');
    // }
    // function header_title_hidden(){
    //     $('.top-title').addClass('hiddened');
    //     $('.page_bottom').css('display','none');
    //     $('.video_hidden_button').css('display','none');
    // }

 
 
    // <!-- 窗口滚动异步事件 -->
 
    //文档高度
    // function getDocumentTop() {
    //     var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    //     if (document.body) {
    //         bodyScrollTop = document.body.scrollTop;
    //     }
    //     if (document.documentElement) {
    //         documentScrollTop = document.documentElement.scrollTop;
    //     }
    //     scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    //     return scrollTop;
    // }

    // //可视窗口高度
    // function getWindowHeight() {
    //     var windowHeight = 0;
    //     if (document.compatMode == "CSS1Compat") {
    //         windowHeight = document.documentElement.clientHeight;
    //     } else {
    //         windowHeight = document.body.clientHeight;
    //     }
    //     return windowHeight;
    // }

    // //滚动条滚动高度
    // function getScrollHeight() {
    //     var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    //     if (document.body) {
    //         bodyScrollHeight = document.body.scrollHeight;
    //     }

    //     if (document.documentElement) {
    //         documentScrollHeight = document.documentElement.scrollHeight;
    //     }
    //     scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    //     return scrollHeight;
    // }


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