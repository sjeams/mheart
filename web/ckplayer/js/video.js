 
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
function  videoList(id,key=0,isbofang=1){
    //暂停在播视频
    var now_video =$("#now_video").val();
    //判断是否是影视，影视不为空
    if(key!=0){
        $("#now_video").val(id); 
        //获取视频
        var url =$("#form"+key+"  input[name=url]").val();
        // var title =$("#form"+key+"  input[name=title]").val();
        // var imageurl =$("#form"+key+"  input[name=imageurl]").val();
        $('.click_video').removeClass('btn-success');
        $('#click_video'+key).addClass('btn-success');
        // console.log( title)
        var now_video_str =now_video+',"'+now_video+'c0"';
    }else{
        $("#now_video").val(id); 
        //获取视频
        var url =$("#form"+id+"  input[name=url]").val();
        // var title =$("#form"+id+"  input[name=title]").val();
        // var imageurl =$("#form"+id+"  input[name=imageurl]").val();
        var now_video_str =now_video;
    }
    // console.log(key)
    if(now_video!=0){
        var player ="<span onclick='videoList("+now_video_str+")'  class='video_box '></span>";
        $(".video"+now_video).html(player);
    } 

    // var url ='https://wolongzywcdn2.com:65/20220417/nJ0C6TnT/index.m3u8';
    //播放窗口模式。。
    var video_model = $('#is_model_type').val();
    if(video_model==0){
        var container_id=   '.video'+id;
        videoHidden(0);//隐藏窗口
    }else{
        var container_id=   '.video';
        videoHidden(1);//显示窗口
    }
    //获取播cookie放时间
    var videoID =$.md5(url); //视频的区分ID，每个视频分配一个唯一的ID
    var videoObject = {
            container: container_id, //“#”代表容器的ID，“.”或“”代表容器的class
            plug:'hls.js',//设置使用hls插件
            autoplay:true,
            video: url,//视频地址
            live: false,//是否是直播
            // poster:imageurl,//封面图片
            // title:title,//视频标题
            // rotate:90,//旋转90度
            // seek:180,
            // debug:true,//开启调试模式
            rightBar:true,
            screenshot:true,
            smallWindows:true,
            flashplayer: false,//设置成true则强制使用flashplayer
            html5m3u8: true,//PC平台上是否使用h5播放器播放m3u8---强制html播放全屏
            webFull:true,
            // mobileAutoFull: true,//移动端是否默认全屏播放
            // mobileCkControls: false,//移动端h5显示控制栏
            // theatre:true,
            crossOrigin:'Anonymous',//设置html5视频的crossOrigin属性
            // loop: true,//是否需要循环播放 
            // seek: 42,//默认需要跳转的秒数
            controls:isbofang, // 1 使用浏览器自带控制栏  / 0 自动播放，启用控制栏
            // // language:'en',
            // // rotate:90,//旋转90度
            documentFocusPause:false,//窗口失去焦点后暂停播放
            // playbackrate: 1,//默认倍速
            // debug: false,//是否开启调试模式
            // overspread:true,//是否让视频铺满播放器
            loaded:'loadHandler',// 监听播放时间方法
            // seek:'cookie',//指定跳转到cookie记录的时间，使用该属性必需配置属性cookie
		    // cookie:videoID,//cookie名称,请在同一域中保持唯一
            timeScheduleAdjust:1,//是否可调节播放进度,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退，4是只能前进但能回到第一次拖动时的位置，5是看过的地方可以随意拖动
            mouseWheelVolume:2,//是否启用鼠标滚轮调节音量功能，0=不启用，1=启用，2=全屏时才启用
            keyVolume:2//是否启用键盘控制音量调节，0=不启用，1=启用，2=全屏时才启用
        };
 
        // document.querySelector('video').playbackRate = 4.0   //可以f12 控制台直接倍速播放
        // var videoObject = cokieTime(videoObject,videoID)
        // console.log(videoObject);
        var newplayer= new ckplayer(videoObject);//初始化播放器
        // newplayer.addListener('time', timeHandler,videoID); //监听播放时间
        // newplayer.addListener('ended', VideoPlayEndedHandler);//监听播放结束
        newplayer=false;
        videoObject=false;
        url =false;
        // title =null;
        // imageurl =null;
        player=false;
        // videoHidden(1);//显示窗口

        // newplayer.visibilityState(function(state){   
        // //state=show，页面标签当前处于显示状态，=hidden，页面标签当前处理隐藏状态  
        // console.log(state)
        // });
        
        // newplayer.mouseActive(function(bool){ //bool=true，活跃，=false，静止  
        //     // var time = newplayer.time()
        //     // console.log(time)
        //     // newplayer.seek(0)
        //     // console.log(bool)
        //     //开启倍数
        //     // if(bool){
        //     //     document.querySelector('video').playbackRate=4
        //     // }else{
        //     //     document.querySelector('video').playbackRate=1
        //     // }
        // });

        // function timeHandler(t) {
        //     // console.log(videoID)
        //     cookie.set('time_'+videoID, t); //当前视频播放时间写入cookie
        //     // cookie.set('time_' + videoID, t); //当前视频播放时间写入cookie
        // }
        // function VideoPlayEndedHandler(){//监听视频播放完成
        //     // alert('本视频已结束');
        // }
 

    }
    // CV.singleClick(player.playOrPause);//监听视频单击


    // function cokieTime(videoObject,videoID){
    //     // console.log(videoID)
    //     var cookieTime = cookie.get('time_'+videoID); //调用已记录的time
    //     // console.log(cookieTime)
    //     //console.log(cookieTime);
    //     if(!cookieTime || cookieTime == undefined) { //如果没有记录值，则设置时间0开始播放
    //         cookieTime = 0;
    //     }
    //     // if(cookieTime > 0) {
    //     //     alert('本视频记录的上次观看时间(秒)为：' + cookieTime);
    //     // }
    //     if(cookieTime > 0) { //如果记录时间大于0，则设置视频播放后跳转至上次记录时间
    //         videoObject['seek'] = parseInt(cookieTime) ;
    //         // videoObject.seek=cookieTime;
    //     }
    //     return videoObject;
    // }

    // //操作cookie的对象
    // var cookie = {
    //     set: function(name, value) {
    //         var Days = 30;
    //         var exp = new Date();
    //         exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    //         document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
    //     },
    //     get: function(name) {
    //         var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    //         if(arr = document.cookie.match(reg)) {
    //             return unescape(arr[2]);
    //         } else {
    //             return null;
    //         }
    //     },
    //     del: function(name) {
    //         var exp = new Date();
    //         exp.setTime(exp.getTime() - 1);
    //         var cval = getCookie(name);
    //         if(cval != null) {
    //             document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    //         }
    //     }
    // };
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
// 点击事件监听
$(document).keyup(function(event){
    if(event.keyCode ==13){
        gou();
    }
});