
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37519x8HVRNp7PiAVwxTFrW', 'http');
// Script/http.js

"use strict";

/**
 * Http 请求封装
 */
var https_url = 'https://www.aheart.cn';
var HttpHelper = cc.Class({
  "extends": cc.Component,
  statics: {},
  properties: {},
  onLoad: function onLoad() {
    // 从服务器加载mp3来进行播放
    this.current = cc.audioEngine.play(res.url, false, 1);
  },

  /**
   * get请求
   * @param {string} url
   * @param {function} callback 
   */
  httpUrl: function httpUrl(new_url) {
    return https_url + '/app/api/file-content?url=' + https_url + new_url; //https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/loading.jpg
  },
  httpUrlJson: function httpUrlJson(new_url) {
    return https_url + '/app/api/file-json?url=' + https_url + new_url; //https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/loading.jpg
  },
  httpGets: function httpGets(url, callback) {
    var url = https_url + url;
    var xhr = cc.loader.getXMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        var respone = xhr.responseText;
        callback(respone);
      }
    };

    xhr.open("GET", url, true);

    if (cc.sys.isNative) {
      xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    } // note: In Internet Explorer, the timeout property may be set only after calling the open()
    // method and before calling the send() method.


    xhr.timeout = 5000; // 5 seconds for timeout

    xhr.send();
  },
  httpPostLogin: function httpPostLogin(url, params, callback) {
    var token = cc.sys.localStorage.getItem('token');
    params['token'] = token;
    var url = https_url + url;
    var xhr = cc.loader.getXMLHttpRequest();

    xhr.onreadystatechange = function () {
      // cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        var respone = xhr.responseText;
        callback(JSON.parse(respone)); // json 转数组
      } else {//   callback(-1);
        }
    };

    xhr.open("POST", url, true);

    if (cc.sys.isNative) {
      xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    } // xhr.setRequestHeader("Http-Edition", "1.0.0.0");  // 版本
    // xhr.setRequestHeader("Ip", "192.168.1.1");
    // xhr.setRequestHeader("Http-Token", "gzipdeflate");


    xhr.timeout = 5000; // 5 seconds for timeout
    // xhr.setRequestHeader('Content-Type', 'application/json,multipart/form-data');

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8"); // xhr.send(JSON.stringify(params));

    xhr.send('data=' + JSON.stringify(params)); //  xhr.send(params);
  },
  //带token访问
  httpPost: function httpPost(url, params, callback) {
    var token = cc.sys.localStorage.getItem('token');
    params['token'] = token;
    var url = https_url + url;
    var xhr = cc.loader.getXMLHttpRequest();

    xhr.onreadystatechange = function () {
      // cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        var respone = xhr.responseText;
        var new_respone = JSON.parse(respone);

        if (new_respone.code == 0) {
          //未登录
          // console.log(JSON.parse(respone))
          cc.director.loadScene('index');
        } else {
          callback(JSON.parse(respone)); // json 转数组
        }
      } else {//   callback(-1);
        }
    };

    xhr.open("POST", url, true);

    if (cc.sys.isNative) {
      xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    } // xhr.setRequestHeader("Http-Edition", "1.0.0.0");  // 版本
    // xhr.setRequestHeader("Ip", "192.168.1.1");
    // xhr.setRequestHeader("Http-Token", "gzipdeflate");


    xhr.timeout = 5000; // 5 seconds for timeout
    // xhr.setRequestHeader('Content-Type', 'application/json,multipart/form-data');
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8"); // xhr.send(JSON.stringify(params));

    xhr.send('data=' + JSON.stringify(params)); //  xhr.send(params);
  },
  //场景加载--进度条
  playGame: function playGame(sence) {
    var _this = this; //加载预制资源 PrefabUrl为 预制资源在 资源中的路径


    cc.loader.loadRes('/sprite_loading', function (errorMessage, loadedResource) {
      //检查资源加载
      if (errorMessage) {
        cc.log('载入预制资源失败, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        cc.log('你载入的不是预制资源!');
        return;
      } //开始实例化预制资源


      var TipBoxPrefab = cc.instantiate(loadedResource); //将预制资源添加到父节点
      // CanvasNode.addChild(TipBoxPrefab);

      cc.find('Canvas').addChild(TipBoxPrefab); //请求战斗记录

      _this.fightint(); //预加载场景并获得加载进度


      cc.director.preloadScene(sence, function (completeCount, totalCount, item) {
        var progressBar = cc.find('Canvas/loading/progressBar').getComponent(cc.ProgressBar); // console.log(item)
        // console.log(completeCount)
        // console.log(totalCount)
        //加载进度回调
        // console.log('资源 ' + completeCount + '加载完成！资源加载中...');
        // console.log('加载场景资源');

        progressBar.progress = completeCount / totalCount; // console.log(progressBar.progress)

        progressBar.completeCount = completeCount;
        progressBar.totalCount = totalCount;
        resource = item; // // 代码里面获取cc.Label组件, 修改文本内容
        // //在代码里面获取cc.Label组件

        var sys_label = cc.find('Canvas/loading/progressBar/sys_label').getComponent(cc.Label);
        sys_label.string = parseInt(progressBar.progress * 100) + '%'; // if( this.resource.type=='mp3'){
        //     // console.log(res);  // mp3
        //     // this.audio.clip = res;
        //     // this.audio.play();
        //     // 从服务器加载mp3来进行播放
        //     this.current = cc.audioEngine.play(res.url, false, 1);
        // }
      }, function () {
        // progressBar.hide();
        //加载场景
        cc.director.loadScene(sence, function () {});
      });
    });
  },
  //请求战斗--写入文本记录
  fightint: function fightint() {
    var _this = this;

    var map_int = cc.sys.localStorage.getItem('figthing_map_int'); //读取数据--临时地图id

    var userid = cc.sys.localStorage.getItem('figthing_userid'); //读取数据--玩家对战id

    if (map_int == '' && userid == '') {
      cc.director.loadScene('大厅');
    } else {
      _this.httpPost('/app/app-apinew/fight', {
        'map_int': map_int,
        'userid': userid
      }, function (data) {
        //战斗历史路径
        cc.sys.localStorage.setItem('figthing_remote_url', data.data.sid);
      });
    }
  }
});
httpRequest = new HttpHelper(); // window.HttpHelper = new HttpHelper();

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxodHRwLmpzIl0sIm5hbWVzIjpbImh0dHBzX3VybCIsIkh0dHBIZWxwZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RhdGljcyIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjdXJyZW50IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwicmVzIiwidXJsIiwiaHR0cFVybCIsIm5ld191cmwiLCJodHRwVXJsSnNvbiIsImh0dHBHZXRzIiwiY2FsbGJhY2siLCJ4aHIiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25lIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInN5cyIsImlzTmF0aXZlIiwic2V0UmVxdWVzdEhlYWRlciIsInRpbWVvdXQiLCJzZW5kIiwiaHR0cFBvc3RMb2dpbiIsInBhcmFtcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImh0dHBQb3N0IiwibmV3X3Jlc3BvbmUiLCJjb2RlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJwbGF5R2FtZSIsInNlbmNlIiwiX3RoaXMiLCJsb2FkUmVzIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJQcmVmYWIiLCJUaXBCb3hQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImZpbmQiLCJhZGRDaGlsZCIsImZpZ2h0aW50IiwicHJlbG9hZFNjZW5lIiwiY29tcGxldGVDb3VudCIsInRvdGFsQ291bnQiLCJpdGVtIiwicHJvZ3Jlc3NCYXIiLCJnZXRDb21wb25lbnQiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzIiwicmVzb3VyY2UiLCJzeXNfbGFiZWwiLCJMYWJlbCIsInN0cmluZyIsInBhcnNlSW50IiwibWFwX2ludCIsInVzZXJpZCIsImRhdGEiLCJzZXRJdGVtIiwic2lkIiwiaHR0cFJlcXVlc3QiXSwi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eUIsR0FBSCxDQUFPUSxZQUFQLENBQW9CdUMsT0FBcEIsQ0FBNEIscUJBQTVCLEVBQW1ERCxJQUFJLENBQUNBLElBQUwsQ0FBVUUsR0FBN0Q7QUFDSCxPQU5EO0FBT0g7QUFDSjtBQWxMbUIsQ0FBVCxDQUFuQjtBQXFMQUMsV0FBVyxHQUFHLElBQUkzRSxVQUFKLEVBQWQsRUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEh0dHAg6K+35rGC5bCB6KOFXHJcbiAqL1xyXG52YXIgaHR0cHNfdXJsID0gJ2h0dHBzOi8vd3d3LmFoZWFydC5jbic7XHJcbmNvbnN0IEh0dHBIZWxwZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgc3RhdGljczoge1xyXG4gICAgfSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5LuO5pyN5Yqh5Zmo5Yqg6L29bXAz5p2l6L+b6KGM5pKt5pS+XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY2MuYXVkaW9FbmdpbmUucGxheShyZXMudXJsLCBmYWxzZSwgMSk7ICBcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIGdldOivt+axglxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcbiAgICAgKi9cclxuICAgICAgICBodHRwVXJsKG5ld191cmwpe1xyXG4gICAgICAgICAgICByZXR1cm4gaHR0cHNfdXJsKycvYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPScraHR0cHNfdXJsK25ld191cmw7XHJcbiAgICAgICAgICAgIC8vaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwczovL3d3dy5haGVhcnQuY24vYXBwL2xvYWRpbmcvbG9hZGluZy5qcGdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGh0dHBVcmxKc29uKG5ld191cmwpe1xyXG4gICAgICAgICAgICByZXR1cm4gaHR0cHNfdXJsKycvYXBwL2FwaS9maWxlLWpzb24/dXJsPScraHR0cHNfdXJsK25ld191cmw7XHJcbiAgICAgICAgICAgIC8vaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwczovL3d3dy5haGVhcnQuY24vYXBwL2xvYWRpbmcvbG9hZGluZy5qcGdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGh0dHBHZXRzOiBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgdXJsID1odHRwc191cmwrdXJsO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBub3RlOiBJbiBJbnRlcm5ldCBFeHBsb3JlciwgdGhlIHRpbWVvdXQgcHJvcGVydHkgbWF5IGJlIHNldCBvbmx5IGFmdGVyIGNhbGxpbmcgdGhlIG9wZW4oKVxyXG4gICAgICAgICAgICAvLyBtZXRob2QgYW5kIGJlZm9yZSBjYWxsaW5nIHRoZSBzZW5kKCkgbWV0aG9kLlxyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBodHRwUG9zdExvZ2luOiBmdW5jdGlvbiAodXJsLCBwYXJhbXMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICAgICAgcGFyYW1zWyd0b2tlbiddID0gdG9rZW47XHJcbiAgICAgICAgICAgIHZhciB1cmwgPWh0dHBzX3VybCt1cmw7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZygneGhyLnJlYWR5U3RhdGU9Jyt4aHIucmVhZHlTdGF0ZSsnICB4aHIuc3RhdHVzPScreGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSkpOyAgLy8ganNvbiDovazmlbDnu4RcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLUVkaXRpb25cIiwgXCIxLjAuMC4wXCIpOyAgLy8g54mI5pysXHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSXBcIiwgXCIxOTIuMTY4LjEuMVwiKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLVRva2VuXCIsIFwiZ3ppcGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uLG11bHRpcGFydC9mb3JtLWRhdGEnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLThcIilcclxuICAgICAgICAgICAgLy8geGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCdkYXRhPScrSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIC8vICB4aHIuc2VuZChwYXJhbXMpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5bimdG9rZW7orr/pl65cclxuICAgICAgICBodHRwUG9zdDogZnVuY3Rpb24gKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIHBhcmFtc1sndG9rZW4nXSA9IHRva2VuO1xyXG4gICAgICAgICAgICB2YXIgdXJsID1odHRwc191cmwrdXJsO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ3hoci5yZWFkeVN0YXRlPScreGhyLnJlYWR5U3RhdGUrJyAgeGhyLnN0YXR1cz0nK3hoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X3Jlc3BvbmUgPUpTT04ucGFyc2UocmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobmV3X3Jlc3BvbmUuY29kZT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5pyq55m75b2VXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocmVzcG9uZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShyZXNwb25lKSk7ICAvLyBqc29uIOi9rOaVsOe7hFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLUVkaXRpb25cIiwgXCIxLjAuMC4wXCIpOyAgLy8g54mI5pysXHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSXBcIiwgXCIxOTIuMTY4LjEuMVwiKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLVRva2VuXCIsIFwiZ3ppcGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uLG11bHRpcGFydC9mb3JtLWRhdGEnKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLThcIilcclxuICAgICAgICAgICAgLy8geGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCdkYXRhPScrSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIC8vICB4aHIuc2VuZChwYXJhbXMpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5Zy65pmv5Yqg6L29LS3ov5vluqbmnaFcclxuICAgICAgICBwbGF5R2FtZShzZW5jZSkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgICAgICAgIC8v5Yqg6L296aKE5Yi26LWE5rqQIFByZWZhYlVybOS4uiDpooTliLbotYTmupDlnKgg6LWE5rqQ5Lit55qE6Lev5b6EXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCcvc3ByaXRlX2xvYWRpbmcnLCBmdW5jdGlvbihlcnJvck1lc3NhZ2UsbG9hZGVkUmVzb3VyY2Upe1xyXG4gICAgICAgICAgICAgICAgLy/mo4Dmn6XotYTmupDliqDovb1cclxuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNjLmxvZyggJ+i9veWFpemihOWItui1hOa6kOWksei0pSwg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICBpZiggIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjYy5sb2coICfkvaDovb3lhaXnmoTkuI3mmK/pooTliLbotYTmupAhJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIC8v5byA5aeL5a6e5L6L5YyW6aKE5Yi26LWE5rqQXHJcbiAgICAgICAgICAgICAgICB2YXIgVGlwQm94UHJlZmFiID0gY2MuaW5zdGFudGlhdGUobG9hZGVkUmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgLy/lsIbpooTliLbotYTmupDmt7vliqDliLDniLboioLngrlcclxuICAgICAgICAgICAgICAgIC8vIENhbnZhc05vZGUuYWRkQ2hpbGQoVGlwQm94UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLmFkZENoaWxkKFRpcEJveFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAvL+ivt+axguaImOaWl+iusOW9lVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuZmlnaHRpbnQoKTtcclxuICAgICAgICAgICAgICAgIC8v6aKE5Yqg6L295Zy65pmv5bm26I635b6X5Yqg6L296L+b5bqmXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoc2VuY2UsZnVuY3Rpb24gKGNvbXBsZXRlQ291bnQsIHRvdGFsQ291bnQsaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc0JhciA9IGNjLmZpbmQoJ0NhbnZhcy9sb2FkaW5nL3Byb2dyZXNzQmFyJykuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbXBsZXRlQ291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG90YWxDb3VudClcclxuICAgICAgICAgICAgICAgICAgICAvL+WKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfotYTmupAgJyArIGNvbXBsZXRlQ291bnQgKyAn5Yqg6L295a6M5oiQ77yB6LWE5rqQ5Yqg6L295LitLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+WKoOi9veWcuuaZr+i1hOa6kCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnByb2dyZXNzID0gY29tcGxldGVDb3VudCAvIHRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3NCYXIucHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY29tcGxldGVDb3VudCA9IGNvbXBsZXRlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIOS7o+eggemHjOmdouiOt+WPlmNjLkxhYmVs57uE5Lu2LCDkv67mlLnmlofmnKzlhoXlrrlcclxuICAgICAgICAgICAgICAgICAgICAvLyAvL+WcqOS7o+eggemHjOmdouiOt+WPlmNjLkxhYmVs57uE5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5c19sYWJlbCA9IGNjLmZpbmQoJ0NhbnZhcy9sb2FkaW5nL3Byb2dyZXNzQmFyL3N5c19sYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3lzX2xhYmVsLnN0cmluZyA9IHBhcnNlSW50KCBwcm9ncmVzc0Jhci5wcm9ncmVzcyAqIDEwMCkgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoIHRoaXMucmVzb3VyY2UudHlwZT09J21wMycpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhyZXMpOyAgLy8gbXAzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuYXVkaW8uY2xpcCA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIOS7juacjeWKoeWZqOWKoOi9vW1wM+adpei/m+ihjOaSreaUvlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHJlcy51cmwsIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcm9ncmVzc0Jhci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/liqDovb3lnLrmma9cclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2VuY2UsIGZ1bmN0aW9uICgpIHsgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+ivt+axguaImOaWly0t5YaZ5YWl5paH5pys6K6w5b2VXHJcbiAgICAgICAgZmlnaHRpbnQoKXtcclxuICAgICAgICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgICAgICAgICB2YXIgbWFwX2ludCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlndGhpbmdfbWFwX2ludCcpOyAvL+ivu+WPluaVsOaNri0t5Li05pe25Zyw5Zu+aWRcclxuICAgICAgICAgICAgdmFyIHVzZXJpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlndGhpbmdfdXNlcmlkJyk7IC8v6K+75Y+W5pWw5o2uLS3njqnlrrblr7nmiJhpZFxyXG4gICAgICAgICAgICBpZihtYXBfaW50PT0nJyYmdXNlcmlkPT0nJyl7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ+Wkp+WOhScpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIF90aGlzLmh0dHBQb3N0KCcvYXBwL2FwcC1hcGluZXcvZmlnaHQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICdtYXBfaW50JzogbWFwX2ludCxcclxuICAgICAgICAgICAgICAgICAgJ3VzZXJpZCc6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/miJjmlpfljoblj7Lot6/lvoRcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpZ3RoaW5nX3JlbW90ZV91cmwnLCBkYXRhLmRhdGEuc2lkKTsgXHJcbiAgICAgICAgICAgICAgICB9KSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxufSk7XHJcbmh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuLy8gd2luZG93Lkh0dHBIZWxwZXIgPSBuZXcgSHR0cEhlbHBlcigpOyJdfQ==