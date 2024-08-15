 
// <img class="img" src="https://data1.huakuibf2.com/20220722/CFFA575AA9A87353/CFFA575AA9A87353.jpg" onerror="imgError(this);">
// $(function(){
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
    // console.log(key)
    // console.log(url)
    // var url ='https://wolongzywcdn2.com:65/20220417/nJ0C6TnT/index.m3u8';


    
    //选择视频
    if(isbofang==1){
    //1 ckplayer 播放器
        ckplayerVideo(id,now_video,isbofang,now_video_str,url,imageurl,title)
        // var _this =this;
        // _this.newdplayer.destroy();
    }else{
    //0 dplayer 播放器
        dplayerVideo(id,now_video,isbofang,now_video_str,url,imageurl,title)
        // var _this =this;
        // _this.newplayer.remove();
    }
    
    //因为对象覆盖了，所以要放最后面--实例化后加上标签
    if(now_video!=0&&now_video!=id){
        var player ="<span onclick='videoList("+now_video_str+")'  class='video_box '></span>";
        // console.log(now_video)
        // console.log(player)
        $(".video"+now_video).html(player);
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
    var vid = md5(url);
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
    // console.log(_this);
    // console.log(_this.newdplayer)
    // var hls = Hls()
    // hls.destroy()
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
    var videoID = md5(url);
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
    // console.log(cookieTime)
    //console.log(cookieTime);
    if(!cookieTime || cookieTime == undefined) { //如果没有记录值，则设置时间0开始播放
        cookieTime = 0;
    }
    // if(cookieTime > 0) {
    //     alert('本视频记录的上次观看时间(秒)为：' + cookieTime);
    // }
    if(cookieTime > 0) { //如果记录时间大于0，则设置视频播放后跳转至上次记录时间
        videoObject['seek'] = parseInt(cookieTime) ;
        // videoObject.seek=cookieTime;
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