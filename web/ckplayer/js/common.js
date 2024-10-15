//滚动条 返回顶部事件
function scllTop(){
    $(window).scrollTop(0)
}
$.orientationModel=true  //竖屏显示菜单，横屏不显示菜单
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
function getprintHtml(url,callback,goPage){
    // console.log(222)
    //自动采集--回调
    var is_cache =$("#is_cache").val();
    if(is_cache==2){
        removeLoading()
    }else{
        addLoading()
    }
    var goPage =goPage||1;
    //开启async 任务，防止页面空白请求--5-10
   try{
    fetch(url).then(response =>{
        //请求失败，抛出错误
        if (!response.ok) { removeLoading();  
        layer.open({
            type: 1
            ,title: false //不显示标题栏
            ,closeBtn: false
            ,area: '300px;'
            ,shade: 0.8
            ,id: 'LAY_layuipro_error' //设定一个id，防止重复弹出
            ,btn: ['确定']
            ,btnAlign: 'c'
            ,moveType: 1 //拖拽模式，0或者1
            ,content: ' <div class="center" style="margin-top:20px">请求失败,请重新操作!</div>'
            ,success: function(layero){
                removeLoading()
            }
        })
        $('#getPage').val(1); return }
        return response.text();
    }).then(data => { 
        // $('.list_html').html(data)
        $('#getPage').val(1) //等待请求--滚动到底部释放处理，防止多次请求
        if(is_cache==2){
            //已缓存+1
            $('.end_cache_num').text(parseInt($('.end_cache_num').text( ))+1);
            //不跳转返回
            callback(false,goPage)
            //检查是否继续下一页缓存
            isGetCaches()
        }else{
            //正常放回
            callback(data,goPage)
        }
    });
   } catch(e){ removeLoading(); $('#getPage').val(1)  }
}
//list_html 页面回调
function getprintHtml_list_html(html,goPage){
    if(html){
        // $('.list_html').html(html)
        $('.list_html').html(html)
        //回填
        is_last_button() //上一页
        is_next_button() //下一页
        // var t = $("#top").offset().top;
        // $(window).scrollTop(t);
        scllTop()
    }
    removeLoading()
}
//header_content 页面回调
function getprintHtml_content_goStaticHtml(html){
    if(html){ $('.header_content').html(html);}
    removeLoading()
}

//friend_detai 页面回调--全屏模式
function getprintHtml_friend_detail(html,chat_belong){
    if(html){
        $('#show-logs').html(html);
        $('#chat_belong').val(chat_belong)
    }
    removeLoading()
}
//video_pic 页面回调--全屏模式
function getprintHtml_video_pic(html,goPage){
    removeLoading()
    if(html){
        $('.pic_html').html(html)
    }
}
//content_append 页面回调--全屏模式
function getprintHtml_content_append_full_model(html,goPage){
    if(html){
        //分页后初始页码
        page_change();
        // console.log(111)
        $("#goPage").val(goPage);
        $('#content_append').html(html);    
        // 滚动监听页面数量回填
        //监听页面变化  like,query,collect 3个页面，滚动监听回填
        var  total_count =  $('.return_count').eq(0).val();
        $('#total_count').html(total_count)
        $("#goPageCount").val(total_count)
        //定位变化
        scoll_change();
    }else{
        page_unchange();
    }
    removeLoading()
}
//content_append 页面回调
function getprintHtml_content_append(html,goPage){
    if(html){
        $("#goPage").val(goPage);
        $('#content_append').append(html);
        // 滚动监听页面数量回填
        var  total_count =  $('.return_count').eq(0).val();
        $('#total_count').html(total_count)
        $("#goPageCount").val(total_count)
        removeLoading()
    }else{
        full_out()
    }
}

//退出全屏
function full_out(){
    $("#full_model").val(0);
    $(".video_header").css("display","block");
    $(".video_footer").css("display","block");
    $('.go_hidden').removeClass('hiddened');
    $('#content_append').html("");
    static_gou();
}
//ajax 请求前添加加载状态
$(document).ajaxStart(function( ) {
    var is_cache =$("#is_cache").val();
    if(is_cache!=2){
        addLoading()
    }
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
                var goPageCount =  parseInt($('#goPageCount').val());
                //当滚动条到底时,这里是触发内容
                //判断是否使用分页插件
                if(goPageCount){
                    var goPage = Number($("#goPage").val()) + Number(1)   
                    // console.log(goPage,goPageCount)
                    if(goPage<=goPageCount){
                        $('#getPage').val(0) //等待请求---防止多次请求
                        static_nextPage(goPage); //list 页面没有滚动分页nextPage(goPage)
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
    //头部显示
    function header_title_show(){
        $('.top-title').removeClass('hiddened');
        $('.page_bottom').css('display','table');
        $('.video_hidden_button').css('display','block');
    }
    //头部隐藏
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
  /*  header ______________________ */
    //首页 
    //静态跳转
    function goStaticHtml(url){
        //跳转chat后返回list
        if(window.location.pathname.split('/')[2]=='chat'){
            window.location.href='/cn/video/list';
        }
        MenuHidden()
        getprintHtml(url,getprintHtml_content_goStaticHtml);
        // var html = getprintHtml(url);
        // if(html){ $('.header_content').html(html);}
    }
    function window_clear(){
    //    window.location.reload()
        //清空所有缓存
        clearSession(2)
    }
    function window_Vue(){
    //    window.location.reload()
        window.location.href='/vue/home/index';
    }
    function window_reload(){
    //    window.location.reload()
       window.location.href='/cn/video/list';
    }
    //list 返回不刷新
    function video_list(){
        // window.location.href='/cn/video/list';
        var url="/cn/video/list?html=2";
        goStaticHtml(url)
    }
    function my_collect(){
        // window.location.href='/cn/video/query-video';  
        var url="/cn/video/query-video";
        goStaticHtml(url)
    }
    function old_content(){
        // window.location.href='/cn/video/like';  
        var url="/cn/video/like?html=1";
        goStaticHtml(url)
    }
    function my_video(){
        // window.location.href='/cn/video/collect-video';
        var url="/cn/video/collect-video";
        goStaticHtml(url)
    }
    function my_like(){
        // window.location.href='/cn/video/collect-like';
        var url="/cn/video/collect-like";
        goStaticHtml(url)
    }
    function my_chat(){
        window.location.href='/cn/chat/list';
        // var url="/cn/chat/list";
        // goStaticHtml(url)
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
        addLoading()
        //结束自动缓存
        endCache()
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
                removeLoading()
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
        }else{
            return
        }
     }
     // 点击事件监听
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            gou();
        }
    });
//获取文件数量
function downloadUrl(id){
    var url = $("#form"+id+"  input[name=url]").val();
    var fileName = $("#form"+id+"  input[name=title]").val();
    downloadUrlMethod(id,url,fileName)
}

function downloadUrlMethod(id,url,fileName){
    var domain_url =  getDomain(url)     //截取域名
    fetch(url).then(response => response.text()).then(data => {  
        // 解析 m3u8 文件，获取所有的 ts 视频链接  
        var urls = parseM3u8Urls(data);
        //是否有ts文件
        if(urls.length==0){
            var urls_online = parseM3u8Urls_online(data);  
            if(url.length!=0){
                //筛选m3u8是否有解析地址
                var new_url =domain_url+urls_online[0]
                fetch(new_url).then(response => response.text()).then(data => {   
                    var urls = parseM3u8Urls(data);  
                    if(urls.length!=0){
                        layerOpen(id,url,fileName,urls.length);
                    }
                })
            }
        }else{
            layerOpen(id,url,fileName,urls.length);
        }
    });    
}

function layerOpen(id,url,fileName,flie_length){
    var fileType = '.m3u8'
    var fileTips =fileName+fileType
    // var fileTips =''
    var type_str ='是否下载：'+fileTips+'</br><p style="color:red">('+flie_length+'.ts)</p?'; 
    layer.open({
        type: 1
        ,title: false //不显示标题栏
        ,closeBtn: false
        ,area: '300px;'
        ,shade: 0.8
        ,id: 'LAY_download' //设定一个id，防止重复弹出
        ,btn: ['确定', '取消']
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: ' <div class="center user_text_hidden" style="margin-top:20px">'+type_str+'</div>'
        ,success: function(layero){
            var btn = layero.find('.layui-layer-btn');
            btn.find('.layui-layer-btn0').click(function(){
                // window.open(url)
                ajaxDown(id,url,fileTips,flie_length)//加载资源
        });

        }
    })
}
//进度条
// ：https://www.zhihu.com/question/596582533/answer/2991540255
// 1、使用 fetch 函数获取 m3u8 文件。
var controller = new AbortController(); //停止fetch
function ajaxDown(id,url,fileTips,flie_length){
    //查看是否有进度条
    if(!$('#dplay_video'+id).next().hasClass('progress'+id)){
        var string ='<div class="progress progress'+id+'"><div class="progress_bar'+id+' progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div><span class="progress_text'+id+'" style="display: flex;position: absolute;width: 100%;line-height: 16px;font-weight: bold;justify-content: center;"></span></div>'
        $('#dplay_video'+id).after(string)
    }else{
        var progress_text ='(0/'+flie_length+') 0%'
        // 调用函数来更新进度条
        $('.progress_bar'+id).css('width','1%');
        // 更新内部文本以显示当前百分比
        $('.progress_text'+id).text(progress_text); // 设置进度条为50%
    }
    this.controller .abort(); // 中止！ 防止内存泄漏，一次只能加载一个视频
    this.controller = new AbortController(); //实例化新的controler
    var domain_url =  getDomain(url)     //截取域名
    var httpurl =    url.replace('index.m3u8','')    //截取url
    fetch(url,{ signal: this.controller.signal}).then(response => response.text()).then(data => {  
        // 解析 m3u8 文件，获取所有的 ts 视频链接  
        var urls = parseM3u8Urls(data);
        //是否有ts文件
        if(urls.length==0){
            var urls_online = parseM3u8Urls_online(data);  
            if(url.length!=0){
                var new_url =domain_url+urls_online[0]       //筛选m3u8是否有解析地址
                fetch(new_url,{ signal: controller.signal}).then(response => response.text()).then(data => {   
                    var urls = parseM3u8Urls(data);  
                    if(urls.length!=0){
                        mergeTsVideos(id,urls,domain_url,fileTips);      // 合并 ts 视频 
                    }})
                }
        }else{
            mergeTsVideos(id,urls,httpurl,fileTips);          // 合并 ts 视频  
        }
    });    
}
// 2、解析 m3u8 文件，获取所有的 ts 视频链接。
function parseM3u8Urls(m3u8Content) {  
    const lines = m3u8Content.trim().split("\n");  
    // 找到所有的 ts 视频链接  
    const urls = lines.filter(line => line.trim().endsWith('.ts'));  
    return urls;
}
// 2、解析 m3u8 文件，里面的url--特殊情况，有2层
function parseM3u8Urls_online(m3u8Content) {  
    const lines = m3u8Content.trim().split("\n");  
    // 找到所有的 ts 视频链接  
    const urls = lines.filter(line => line.trim().endsWith('.m3u8'));  
    return urls;
}
// 3、合并 ts 视频。
async function mergeTsVideos(id,urls,httpurl,fileTips) { 
    window.URL = window.URL || window.webkitURL
    const blobs = [];  
    let index = 0;
    let total_index =urls.length
    for (const url of urls) {    
        //事务等待
        try {
            const  new_url = httpurl+url
            const response = await fetch(new_url,{ signal: this.controller.signal}) //强制停止这里promise会报错终止,不影响后续操作
            const blob = await response.blob();   
            blobs.push(blob);
        } catch (error) {
         // 处理错误
            return
        }
        index++; //百分比--加1之后--从1开始计算
        let percent = ((index / total_index*100).toFixed(0))
        // console.log(index,urls.length,percent)
        var progress_text ='('+index+'/'+total_index+') '+percent+'%'
        // 调用函数来更新进度条
        $('.progress_bar'+id).css('width', percent + '%');
        // 更新内部文本以显示当前百分比
        $('.progress_text'+id).text(progress_text); // 设置进度条为50%
     
    } 
    // 将所有的 ts 视频合并成一个 Blob  
    const mergedBlob = new Blob(blobs); 
    // 创建 URL 对象，用于播放视频  
    const url = URL.createObjectURL(mergedBlob); 
    // 在页面中播放视频  
    const link = document.createElement("a");  
    document.body.appendChild(link);
    //下载
    link.href = url
    link.download = fileTips
    link.click()
    document.body.removeChild(link)     // 销毁创建的url
    window.URL.revokeObjectURL(url)
    // link.remove()
}
//url截取域名，获取域名
function getDomain(url){
   return url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/img)[0];
}
// // 使用 await 结合 waitFor 函数
// try {
//     const result = await waitFor(fetch(url, { signal }), 5000); // 在5秒内完成，否则终止
//     // 处理结果
//   } catch (error) {
//     // 处理错误
//   }




// video-js 改过来了---------------------------------------------------------------------------------------------------------

// $(function(){
// <img class="img" src="https://data1.huakuibf2.com/20220722/CFFA575AA9A87353/CFFA575AA9A87353.jpg" onerror="imgError(this);">
//     //图片加载失败
//     function imgError(image){ 
//         // 隐藏图片 
//         // image.style.display = 'none'; 
//         // 替换为默认图片
//         image.setAttribute("src", "nophoto.png") 
//         // document.getElementsByClassName("img")[0].setAttribute("src", "nophoto.png"); 
//     }
// })
//图片报错监听
function imageError(){
    $('.video_image').error(function(){
        var id= $(this).siblings("input[name=video_id]").val();
        videoList(id,0,1);
    }) 
}
//判断图片是否存在
function is_img_url(imgurl) {
    return new Promise(function(resolve, reject) {
        var ImgObj = new Image(); //判断图片是否存在
        ImgObj.src = imgurl;
        ImgObj.onload = function(res) {
            resolve(res);
        }
        ImgObj.onerror = function(err) {
            reject(err)
        }
    }).catch((e) => {}); // 加上这句不会报错（Uncaught (in promise)）
}
// isbofang //滚动自动播放时为0，使用ckplayer播放器(能自动播放)--- 不滚动播放时为1，使用移动端自带控制器(会出现暂停)。 请根据情况进行传值
function  videoList(id,key,isbofang){
    var key=key||'1c0';
   //判断播放器类型
   var isbofang  = $("#is_bofang_type").val();
    //暂停在播视频
    var now_video =$("#now_video").val();
    //存储当前的视频id
    $("#now_video").val(id); 
    //判断是否是影视，影视不为空
    var goBelong  = $("#goBelong").val();
    //判断是否是采集页面--只有采集页面才有影视
    var isCollect  = $("#isCollect").val();
    if(goBelong==0&&isCollect==1){
        //获取视频
        var url =$("#form"+key+"  input[name=url]").val();
        var title =$("#form"+key+"  input[name=title]").val();
        var imageurl =$("#form"+key+"  input[name=imageurl]").val();
        $('.click_video').removeClass('btn-success');
        $('#click_video'+key).addClass('btn-success');
        var now_video_str =now_video+',"'+key+'"';
        $("#now_video_key").val(key);
    }else{
        //获取视频
        var url =$("#form"+id+"  input[name=url]").val();
        var title =$("#form"+id+"  input[name=title]").val();
        var imageurl =$("#form"+id+"  input[name=imageurl]").val();
        var now_video_str =now_video;
    }
    //选择视频
    if(isbofang==1){
    //1 ckplayer 播放器
        ckplayerVideo(id,now_video,isbofang,now_video_str,url,imageurl,title)
    }else{
    //0 dplayer 播放器
        dplayerVideo(id,now_video,isbofang,now_video_str,url,imageurl,title)
    }
    //因为对象覆盖了，所以要放最后面--实例化后加上标签
    if(now_video!=0&&now_video!=id){
        var player ="<span onclick='videoList("+now_video_str+")'  class='video_box '></span>";
        // console.log(now_video)
        // console.log(player)
        $(".video"+now_video).html(player);
    }
}

function videoDestory(){
    var _this=this;
    var isbofang  = $("#is_bofang_type").val();
    // videoHidden(0);//隐藏窗口
    if(isbofang==1){
        //销毁视频，并重新生成
        _this.newdplayer.destroy();
        _this.newplayer.remove();
    }else{
        _this.newdplayer.destroy();
        _this.newplayer.remove();
    }
}

//dplayer 播放器
function dplayerVideo(id,now_video,isbofang,now_video_str,url,imageurl,title){
    //播放窗口模式。。
    var video_model = $('#is_model_type').val();
    if(video_model==0&&id!=0){
        var container_id=   'dplay_video'+id;
        videoHidden(0);//隐藏窗口
    }else{
        var container_id=   'dplay_video';
        videoHidden(1);//显示窗口
    }
    var vid = $.md5(url);
    var dplayerObject={
        container: document.getElementById(container_id),
        autoplay: true, // 自动播放
        // theme: '#FADFA3', // 主题
        loop: true, // 循环播放
        lang: 'zh-cn', // 语言
        // screenshot: true, // 截图
        hotkey: true, // 热键
        preload: 'auto', // 预加载
        // logo: '/assets/octocat.png', // 左上角logo
        volume: 0, // 音量
        playbackSpeed:[0.5, 1, 1.5, 2],
        mutex: true, // 多个视频互斥
        landscape: true,        //手机端默认进入横屏全屏时设置true  默认false
        playNext: true,           //全屏时是否显示下一集图标   选集数组小于等于1时不显示
        title: title,            //视频标题
        header: true,             //全屏显示头部信息(返回图标+标题) 
        // 常规方式
        video: {
            url: url,
            type: 'hls',
            pic: imageurl, // 封面
            thumbnails: imageurl, // 缩略图
        },
    }
    var _this=this;
    _this.newdplayer.destroy();
    _this.newplayer.remove();
    _this.newdplayer = new DPlayer(dplayerObject);//初始化播放器
    _this.newplayer.play()//点击播放
    // if (isQQBrowser()) {
    //     // 用户正在使用QQ浏览器
    //     console.log("当前是QQ浏览器");
    //     videoHidden(0);//隐藏窗口
    // }
 
}
//ckplayer 播放器
function ckplayerVideo(id,now_video,isbofang,now_video_str,url,imageurl,title){
    //播放窗口模式。。
    var video_model = $('#is_model_type').val();
    if(video_model==0&&id!=0){
        var container_id=   '.video'+id;
        videoHidden(0);//隐藏窗口
    }else{
        var container_id=   '.video';
        videoHidden(1);//显示窗口
    }
    
    
    //获取播cookie放时间
    // var videoID =$.md5(url); //视频的区分ID，每个视频分配一个唯一的ID
    var videoID = $.md5(url);
    var videoObject = {
            debug:true,//开启调试模式
            container: container_id, //“#”代表容器的ID，“.”或“”代表容器的class
            plug:'hls.js',//设置使用hls插件
            autoplay:true,
            video:url,
            // [ 
            //     [url, 'video/m3u8', '标清', 0],
            //     ['05cacb4e02f9d9e.mp4', 'video/mp4', '高清', 0],//视频地址
            // ],
            live: false,//是否是直播
            rightBar: true,//右边控制栏
            // poster:imageurl,//封面图片
            title:title,//视频标题
            // rotate:90,//旋转90度
            // seek:180,
            // debug:true,//开启调试模式
            next:false,
            rightBar:true,
            screenshot:true,
            smallWindows:true,
            flashplayer: false,//设置成true则强制使用flashplayer
            // html5m3u8: true,//PC平台上是否使用h5播放器播放m3u8---强制html播放全屏
            webFull:true,
            // mobileAutoFull: true,//移动端是否默认全屏播放
            // mobileCkControls: false,//移动端h5显示控制栏
            theatre:true,
            crossOrigin:'Anonymous',//设置html5视频的crossOrigin属性
            // loop: true,//是否需要循环播放 
            // seek: 42,//默认需要跳转的秒数
            controls:isbofang, // 1 使用浏览器自带控制栏  / 0 自动播放，启用控制栏
            // // language:'en',
            // // rotate:90,//旋转90度
            // documentFocusPause:false,//窗口失去焦点后暂停播放
            // playbackrate: 1,//默认倍速
            // debug: false,//是否开启调试模式
            volume:0,//音量
            overspread:true,//是否让视频铺满播放器
            playbackrateOpen: true, // 是否开启控制栏倍速选项
            playbackrateList: [0.75, 1, 1.25, 1.5, 2, 4], // 倍速配置值
            loaded:'loadHandler',// 监听播放时间方法
            seek:'cookie',//指定跳转到cookie记录的时间，使用该属性必需配置属性cookie
		    cookie:videoID,//cookie名称,请在同一域中保持唯一
            // timeScheduleAdjust:1,//是否可调节播放进度,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退，4是只能前进但能回到第一次拖动时的位置，5是看过的地方可以随意拖动
        }; 
       // document.querySelector('video').playbackRate = 4.0   //可以f12 控制台直接倍速播放
        var videoObject = cokieTime(videoObject,videoID);//开启视频缓存
        // console.log(videoObject);
        //刷新视频
        //销毁视频，并重新生成
        var _this=this;
        _this.newdplayer.destroy();
        _this.newplayer.remove();
        _this.newplayer= new ckplayer(videoObject);//初始化播放器
        _this.newplayer.addListener('time', timeHandler,videoID); //监听播放时间
        // _this.newplayer.addListener('ended', VideoPlayEndedHandler);//监听播放结束
        // newplayer.visibilityState(function(state){   
        // //state=show，页面标签当前处于显示状态，=hidden，页面标签当前处理隐藏状态  
        // console.log(state)
        // });
        _this.newplayer.play()//点击播放
        function timeHandler(t) {
            // console.log(videoID)
            cookie.set('time_'+videoID, t); //当前视频播放时间写入cookie
            // cookie.set('time_' + videoID, t); //当前视频播放时间写入cookie
        }
        // function VideoPlayEndedHandler(){//监听视频播放完成
        //     // alert('本视频已结束');
        // }
        // if (isQQBrowser()) {
        //     // 用户正在使用QQ浏览器
        //     console.log("当前是QQ浏览器");
        //     videoHidden(0);//隐藏窗口
        // }
        //  else {
        //     // 用户不是使用QQ浏览器
        //     console.log("当前不是QQ浏览器");
        // }
}

function isQQBrowser() {
    var userAgent = navigator.userAgent;
    return userAgent.indexOf("QQBrowser") !== -1;
}
 // 视频隐藏
function videoHidden(open){
    if(open==1){
        var hiddenvalue = 0; //默认开启
    }else{
        var hiddenvalue = $("#hiddenvalue").val();
    }
    // console.log(hiddenvalue)
    if(hiddenvalue==1){
        $("#hiddenvalue").val(0); 
        $('.videohidden').css("display","table-column");
    }else{
        $("#hiddenvalue").val(1); 
        $('.videohidden').css("display","table-cell");
    }

}
 
//cookie---js改过来的
function cokieTime(videoObject,videoID){
    // console.log(videoID)
    var cookieTime = cookie.get('time_'+videoID); //调用已记录的time
    if(!cookieTime || cookieTime == undefined) { //如果没有记录值，则设置时间0开始播放
        cookieTime = 0;
    }
    // if(cookieTime > 0) {
    //     alert('本视频记录的上次观看时间(秒)为：' + cookieTime);
    // }
    if(cookieTime > 0) { //如果记录时间大于0，则设置视频播放后跳转至上次记录时间
        videoObject['seek'] = parseInt(cookieTime) ;
    }
    return videoObject;
}
// //操作cookie的对象
var cookie = {
    set: function(name, value) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
    },
    get: function(name) {
        var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if(arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    },
    del: function(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if(cval != null) {
            document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
        }
    }
};