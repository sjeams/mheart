/**
 * Http 请求封装
 */
var https_url = 'https://www.aheart.cn';
// var https_url = 'http://cs.aheart.com';
const HttpHelper = cc.Class({
    extends: cc.Component,

    statics: {
    },

    properties: {

    },
    onLoad () {
        // 开启调试
        // cc.dynamicAtlasManager.showDebug(true);
        // 关闭调试
        // cc.dynamicAtlasManager.showDebug(false);
        // 从服务器加载mp3来进行播放
        //动态合图
        this.image_cache();
        this.current = cc.audioEngine.play(res.url, false, 1);  
    }
    ,
    /**
     * get请求
     * @param {string} url
     * @param {function} callback 
     */
        httpUrl(new_url){
            return https_url+'/app/api/file-content?url='+https_url+new_url;
            //https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/loading.jpg
        },
        httpUrlJson(new_url){
            return https_url+'/app/api/file-json?url='+https_url+new_url;
            //https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/loading.jpg
        },
        httpGets: function (url, callback) {
            var url =https_url+url;
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                    var respone = xhr.responseText;
                    callback(respone);
                }
            };
            xhr.open("GET", url, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
            }
        
            // note: In Internet Explorer, the timeout property may be set only after calling the open()
            // method and before calling the send() method.
            xhr.timeout = 5000;// 5 seconds for timeout
        
            xhr.send();
        },
        
        httpPostLogin: function (url, params, callback) {
            var token = cc.sys.localStorage.getItem('token');
            // cc.log(token)
            params['token'] = token;
            var url =https_url+url;
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                // cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                    var respone = xhr.responseText;
                    callback(JSON.parse(respone));  // json 转数组
                }else{
                    //   callback(-1);
                }
            };
            xhr.open("POST", url, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
            }
            // xhr.setRequestHeader("Http-Edition", "1.0.0.0");  // 版本
            // xhr.setRequestHeader("Ip", "192.168.1.1");
            // xhr.setRequestHeader("Http-Token", "gzipdeflate");
            xhr.timeout = 5000;// 5 seconds for timeout
            // xhr.setRequestHeader('Content-Type', 'application/json,multipart/form-data');
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8")
            // xhr.send(JSON.stringify(params));
            xhr.send('data='+JSON.stringify(params));
            //  xhr.send(params);

        },
        //带token访问
        httpPost: function (url, params, callback) {
            var token = cc.sys.localStorage.getItem('token');
            // cc.log(token)
            params['token'] = token;
            var url =https_url+url;
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                // cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                    var respone = xhr.responseText;
                    var new_respone =JSON.parse(respone);
                    if(new_respone.code==0){
                        //未登录
                        // console.log(JSON.parse(respone))
                        cc.director.loadScene('login/登录');
                    }else{
                        callback(JSON.parse(respone));  // json 转数组
                    }
                }else{
                    //   callback(-1);
                }
            };
            xhr.open("POST", url, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
            }
            // xhr.setRequestHeader("Http-Edition", "1.0.0.0");  // 版本
            // xhr.setRequestHeader("Ip", "192.168.1.1");
            // xhr.setRequestHeader("Http-Token", "gzipdeflate");
            xhr.timeout = 5000;// 5 seconds for timeout
            // xhr.setRequestHeader('Content-Type', 'application/json,multipart/form-data');
            // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8")
            // xhr.send(JSON.stringify(params));
            xhr.send('data='+JSON.stringify(params));
            //  xhr.send(params);

        },
        //场景加载--进度条
        playGame(sence,task) {
            var _task =task||0;
            var _this =this;
            //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
            cc.loader.loadRes('/sprite_loading', function(errorMessage,loadedResource){
                //检查资源加载
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                if( !(loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
                //开始实例化预制资源
                var TipBoxPrefab = cc.instantiate(loadedResource);
                //将预制资源添加到父节点
                // CanvasNode.addChild(TipBoxPrefab);
                cc.find('Canvas').addChild(TipBoxPrefab);
                //请求战斗记录
                if(_task==1){
                    _this.fightint(sence);
                }else{
                    _this.progress(sence);
                }

            });
        },

        progress(sence){
            //预加载场景并获得加载进度
            cc.director.preloadScene(sence,function (completeCount, totalCount,item) {
                var progressBar = cc.find('Canvas/loading/progressBar').getComponent(cc.ProgressBar);
                // console.log(item)
                // console.log(completeCount)
                // console.log(totalCount)
                //加载进度回调
                // console.log('资源 ' + completeCount + '加载完成！资源加载中...');
                // console.log('加载场景资源');
                progressBar.progress = completeCount / totalCount;
                // console.log(progressBar.progress)
                progressBar.completeCount = completeCount;
                progressBar.totalCount = totalCount;
                resource = item;
                // // 代码里面获取cc.Label组件, 修改文本内容
                // //在代码里面获取cc.Label组件
                var sys_label = cc.find('Canvas/loading/progressBar/sys_label').getComponent(cc.Label);
                sys_label.string = parseInt( progressBar.progress * 100) + '%';
                // if( this.resource.type=='mp3'){
                //     // console.log(res);  // mp3
                //     // this.audio.clip = res;
                //     // this.audio.play();
                //     // 从服务器加载mp3来进行播放
                //     this.current = cc.audioEngine.play(res.url, false, 1);
                // }
            }, function (){
                // progressBar.hide();
                //加载场景
                cc.director.loadScene(sence, function () {  
                        // spawnTools();
                });
            })
        },
        //请求战斗--写入文本记录
        fightint(sence){
            var _this =this;
            var map_int = cc.sys.localStorage.getItem('figthing_map_int'); //读取数据--临时地图id
            var userid = cc.sys.localStorage.getItem('figthing_userid'); //读取数据--玩家对战id
            if(map_int==''&&userid==''){
                cc.director.loadScene('大厅');
            }else{
                _this.httpPost('/app/app-apinew/fight', {
                  'map_int': map_int,
                  'userid': userid,
                }, function (data) {
                    //战斗历史路径
                    if(data.code==1){
                        cc.sys.localStorage.setItem('figthing_remote_url', data.data.sid); 
                        for (let i=0; i<data.data.img_list; i++) {
                            var remoteUrl = httpRequest.httpUrl(img_list[i]);
                            cc.resources.preload(remoteUrl, cc.SpriteFrame);
                        }
                        // // console.log(remoteUrl)
                        // cc.loader.load({ url: remoteUrl }, function (err, texture) {  
                        //   _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                        // });
                        _this.progress(sence)
                    }else{
                        // cc.director.loadScene('大厅');  
                        callback(JSON.parse(data));  // json 转数组
                    }
                })   
            }
        },
        image_cache(){
            //动态合图
            cc.macro.CLEANUP_IMAGE_CACHE = false;
            cc.dynamicAtlasManager.enabled = true;
            cc.dynamicAtlasManager.maxFrameSize = 2048;
        }
});
// httpRequest = new HttpHelper();
// window.HttpHelper = new HttpHelper();