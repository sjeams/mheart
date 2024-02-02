
    //cookie
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