
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
  //场景加载
  playGame: function playGame(sence) {
    //预加载场景并获得加载进度
    cc.director.preloadScene(sence, function () {//可以把进度数据打出来
      // progressBar.num =1;
      // progressBar.show();
      // //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
      // cc.loader.loadRes(PrefabUrl, function(errorMessage,loadedResource){});
      // //开始实例化预制资源(这是个实例化是我自己理解的，可能说的不正确)
      // var TipBoxPrefab = cc.instantiate(loadedResource);
      // //将预制资源添加到父节点CanvasNode为画布canvas节点 是用cc.find()获得的对象
      // CanvasNode.addChild(TipBoxPrefab);
    }, function () {
      // console.log(11)
      // progressBar.hide();
      //加载场景
      cc.director.loadScene(sence, function () {//     // СameraСontrol.newGame();
        //     // spawnTools();
      });
    });
  },
  //场景加载--进度条
  playGameLoading: function playGameLoading() {
    //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
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

      cc.find('Canvas').addChild(TipBoxPrefab); //获取预制资源中的js组件，并作出相应操作
      // var TipBoxScript = TipBoxPrefab.getComponent('progressTools');
      // //开始操作JS组件脚本
      // TipBoxScript.action(ButtonNumber,callbackObj); //开始为JS组件进行初始化操作,action 为自定义初始化方法
      // TipBoxScript.setTipContent(content); //设置提示框的内容
      // SelfCallBack(TipBoxPrefab,TipBoxScript);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxodHRwLmpzIl0sIm5hbWVzIjpbImh0dHBzX3VybCIsIkh0dHBIZWxwZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RhdGljcyIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjdXJyZW50IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwicmVzIiwidXJsIiwiaHR0cFVybCIsIm5ld191cmwiLCJodHRwVXJsSnNvbiIsImh0dHBHZXRzIiwiY2FsbGJhY2siLCJ4aHIiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25lIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInN5cyIsImlzTmF0aXZlIiwic2V0UmVxdWVzdEhlYWRlciIsInRpbWVvdXQiLCJzZW5kIiwiaHR0cFBvc3RMb2dpbiIsInBhcmFtcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImh0dHBQb3N0IiwibmV3X3Jlc3BvbmUiLCJjb2RlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJwbGF5R2FtZSIsInNlbmNlIiwicHJlbG9hZFNjZW5lIiwicGxheUdhbWVMb2FkaW5nIiwibG9hZFJlcyIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwiUHJlZmFiIiwiVGlwQm94UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiYWRkQ2hpbGQiLCJodHRwUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0EsSUFBSUEsU0FBUyxHQUFHLHVCQUFoQjtBQUNBLElBQU1DLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDeEIsYUFBU0QsRUFBRSxDQUFDRSxTQURZO0FBR3hCQyxFQUFBQSxPQUFPLEVBQUUsRUFIZTtBQU14QkMsRUFBQUEsVUFBVSxFQUFF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LEtBbEJEO0FBbUJILEdBekltQjtBQTBJcEI7QUFDQUUsRUFBQUEsZUEzSW9CLDZCQTJJRjtBQUNkO0FBQ0E5QyxJQUFBQSxFQUFFLENBQUNpQixNQUFILENBQVU4QixPQUFWLENBQWtCLGlCQUFsQixFQUFxQyxVQUFTQyxZQUFULEVBQXNCQyxjQUF0QixFQUFxQztBQUN0RTtBQUNBLFVBQUlELFlBQUosRUFBbUI7QUFBRWhELFFBQUFBLEVBQUUsQ0FBQ2tELEdBQUgsQ0FBUSxrQkFBa0JGLFlBQTFCO0FBQTBDO0FBQVM7O0FBQ3hFLFVBQUksRUFBRUMsY0FBYyxZQUFZakQsRUFBRSxDQUFDbUQsTUFBL0IsQ0FBSixFQUE4QztBQUFFbkQsUUFBQUEsRUFBRSxDQUFDa0QsR0FBSCxDQUFRLGFBQVI7QUFBeUI7QUFBUyxPQUhaLENBSXRFOzs7QUFDQSxVQUFJRSxZQUFZLEdBQUdwRCxFQUFFLENBQUNxRCxXQUFILENBQWVKLGNBQWYsQ0FBbkIsQ0FMc0UsQ0FNdEU7QUFDQTs7QUFDQWpELE1BQUFBLEVBQUUsQ0FBQ3NELElBQUgsQ0FBUSxRQUFSLEVBQWtCQyxRQUFsQixDQUEyQkgsWUFBM0IsRUFSc0UsQ0FTdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsS0FmRDtBQWdCSDtBQTdKbUIsQ0FBVCxDQUFuQjtBQStKQUksV0FBVyxHQUFHLElBQUl6RCxVQUFKLEVBQWQsRUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEh0dHAg6K+35rGC5bCB6KOFXHJcbiAqL1xyXG52YXIgaHR0cHNfdXJsID0gJ2h0dHBzOi8vd3d3LmFoZWFydC5jbic7XHJcbmNvbnN0IEh0dHBIZWxwZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgc3RhdGljczoge1xyXG4gICAgfSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5LuO5pyN5Yqh5Zmo5Yqg6L29bXAz5p2l6L+b6KGM5pKt5pS+XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY2MuYXVkaW9FbmdpbmUucGxheShyZXMudXJsLCBmYWxzZSwgMSk7ICBcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIGdldOivt+axglxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcbiAgICAgKi9cclxuICAgICAgICBodHRwVXJsKG5ld191cmwpe1xyXG4gICAgICAgICAgICByZXR1cm4gaHR0cHNfdXJsKycvYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPScraHR0cHNfdXJsK25ld191cmw7XHJcbiAgICAgICAgICAgIC8vaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwczovL3d3dy5haGVhcnQuY24vYXBwL2xvYWRpbmcvbG9hZGluZy5qcGdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGh0dHBVcmxKc29uKG5ld191cmwpe1xyXG4gICAgICAgICAgICByZXR1cm4gaHR0cHNfdXJsKycvYXBwL2FwaS9maWxlLWpzb24/dXJsPScraHR0cHNfdXJsK25ld191cmw7XHJcbiAgICAgICAgICAgIC8vaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwczovL3d3dy5haGVhcnQuY24vYXBwL2xvYWRpbmcvbG9hZGluZy5qcGdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGh0dHBHZXRzOiBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgdXJsID1odHRwc191cmwrdXJsO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBub3RlOiBJbiBJbnRlcm5ldCBFeHBsb3JlciwgdGhlIHRpbWVvdXQgcHJvcGVydHkgbWF5IGJlIHNldCBvbmx5IGFmdGVyIGNhbGxpbmcgdGhlIG9wZW4oKVxyXG4gICAgICAgICAgICAvLyBtZXRob2QgYW5kIGJlZm9yZSBjYWxsaW5nIHRoZSBzZW5kKCkgbWV0aG9kLlxyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBodHRwUG9zdExvZ2luOiBmdW5jdGlvbiAodXJsLCBwYXJhbXMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICAgICAgcGFyYW1zWyd0b2tlbiddID0gdG9rZW47XHJcbiAgICAgICAgICAgIHZhciB1cmwgPWh0dHBzX3VybCt1cmw7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZygneGhyLnJlYWR5U3RhdGU9Jyt4aHIucmVhZHlTdGF0ZSsnICB4aHIuc3RhdHVzPScreGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSkpOyAgLy8ganNvbiDovazmlbDnu4RcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLUVkaXRpb25cIiwgXCIxLjAuMC4wXCIpOyAgLy8g54mI5pysXHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSXBcIiwgXCIxOTIuMTY4LjEuMVwiKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLVRva2VuXCIsIFwiZ3ppcGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uLG11bHRpcGFydC9mb3JtLWRhdGEnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLThcIilcclxuICAgICAgICAgICAgLy8geGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCdkYXRhPScrSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIC8vICB4aHIuc2VuZChwYXJhbXMpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5bimdG9rZW7orr/pl65cclxuICAgICAgICBodHRwUG9zdDogZnVuY3Rpb24gKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIHBhcmFtc1sndG9rZW4nXSA9IHRva2VuO1xyXG4gICAgICAgICAgICB2YXIgdXJsID1odHRwc191cmwrdXJsO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ3hoci5yZWFkeVN0YXRlPScreGhyLnJlYWR5U3RhdGUrJyAgeGhyLnN0YXR1cz0nK3hoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X3Jlc3BvbmUgPUpTT04ucGFyc2UocmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobmV3X3Jlc3BvbmUuY29kZT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5pyq55m75b2VXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocmVzcG9uZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShyZXNwb25lKSk7ICAvLyBqc29uIOi9rOaVsOe7hFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLUVkaXRpb25cIiwgXCIxLjAuMC4wXCIpOyAgLy8g54mI5pysXHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSXBcIiwgXCIxOTIuMTY4LjEuMVwiKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLVRva2VuXCIsIFwiZ3ppcGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uLG11bHRpcGFydC9mb3JtLWRhdGEnKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLThcIilcclxuICAgICAgICAgICAgLy8geGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCdkYXRhPScrSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIC8vICB4aHIuc2VuZChwYXJhbXMpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5Zy65pmv5Yqg6L29XHJcbiAgICAgICAgcGxheUdhbWUoc2VuY2UpIHtcclxuICAgICAgICAgICAgLy/pooTliqDovb3lnLrmma/lubbojrflvpfliqDovb3ov5vluqZcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHNlbmNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WPr+S7peaKiui/m+W6puaVsOaNruaJk+WHuuadpVxyXG4gICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3NCYXIubnVtID0xO1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3NCYXIuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy/liqDovb3pooTliLbotYTmupAgUHJlZmFiVXJs5Li6IOmihOWItui1hOa6kOWcqCDotYTmupDkuK3nmoTot6/lvoRcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKFByZWZhYlVybCwgZnVuY3Rpb24oZXJyb3JNZXNzYWdlLGxvYWRlZFJlc291cmNlKXt9KTtcclxuICAgICAgICAgICAgICAgIC8vIC8v5byA5aeL5a6e5L6L5YyW6aKE5Yi26LWE5rqQKOi/meaYr+S4quWunuS+i+WMluaYr+aIkeiHquW3seeQhuino+eahO+8jOWPr+iDveivtOeahOS4jeato+ehrilcclxuICAgICAgICAgICAgICAgIC8vIHZhciBUaXBCb3hQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShsb2FkZWRSZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAvL+WwhumihOWItui1hOa6kOa3u+WKoOWIsOeItuiKgueCuUNhbnZhc05vZGXkuLrnlLvluINjYW52YXPoioLngrkg5piv55SoY2MuZmluZCgp6I635b6X55qE5a+56LGhXHJcbiAgICAgICAgICAgICAgICAvLyBDYW52YXNOb2RlLmFkZENoaWxkKFRpcEJveFByZWZhYik7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coMTEpXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9ncmVzc0Jhci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veWcuuaZr1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNlbmNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8g0KFhbWVyYdChb250cm9sLm5ld0dhbWUoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBzcGF3blRvb2xzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgLy/lnLrmma/liqDovb0tLei/m+W6puadoVxyXG4gICAgICAgIHBsYXlHYW1lTG9hZGluZygpIHtcclxuICAgICAgICAgICAgLy/liqDovb3pooTliLbotYTmupAgUHJlZmFiVXJs5Li6IOmihOWItui1hOa6kOWcqCDotYTmupDkuK3nmoTot6/lvoRcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJy9zcHJpdGVfbG9hZGluZycsIGZ1bmN0aW9uKGVycm9yTWVzc2FnZSxsb2FkZWRSZXNvdXJjZSl7XHJcbiAgICAgICAgICAgICAgICAvL+ajgOafpei1hOa6kOWKoOi9vVxyXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY2MubG9nKCAn6L295YWl6aKE5Yi26LWE5rqQ5aSx6LSlLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIGlmKCAhKGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNjLmxvZyggJ+S9oOi9veWFpeeahOS4jeaYr+mihOWItui1hOa6kCEnICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgLy/lvIDlp4vlrp7kvovljJbpooTliLbotYTmupBcclxuICAgICAgICAgICAgICAgIHZhciBUaXBCb3hQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShsb2FkZWRSZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAvL+WwhumihOWItui1hOa6kOa3u+WKoOWIsOeItuiKgueCuVxyXG4gICAgICAgICAgICAgICAgLy8gQ2FudmFzTm9kZS5hZGRDaGlsZChUaXBCb3hQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuYWRkQ2hpbGQoVGlwQm94UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W6aKE5Yi26LWE5rqQ5Lit55qEanPnu4Tku7bvvIzlubbkvZzlh7rnm7jlupTmk43kvZxcclxuICAgICAgICAgICAgICAgIC8vIHZhciBUaXBCb3hTY3JpcHQgPSBUaXBCb3hQcmVmYWIuZ2V0Q29tcG9uZW50KCdwcm9ncmVzc1Rvb2xzJyk7XHJcbiAgICAgICAgICAgICAgICAvLyAvL+W8gOWni+aTjeS9nEpT57uE5Lu26ISa5pysXHJcbiAgICAgICAgICAgICAgICAvLyBUaXBCb3hTY3JpcHQuYWN0aW9uKEJ1dHRvbk51bWJlcixjYWxsYmFja09iaik7IC8v5byA5aeL5Li6SlPnu4Tku7bov5vooYzliJ3lp4vljJbmk43kvZwsYWN0aW9uIOS4uuiHquWumuS5ieWIneWni+WMluaWueazlVxyXG4gICAgICAgICAgICAgICAgLy8gVGlwQm94U2NyaXB0LnNldFRpcENvbnRlbnQoY29udGVudCk7IC8v6K6+572u5o+Q56S65qGG55qE5YaF5a65XHJcbiAgICAgICAgICAgICAgICAvLyBTZWxmQ2FsbEJhY2soVGlwQm94UHJlZmFiLFRpcEJveFNjcmlwdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxufSk7XHJcbmh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuLy8gd2luZG93Lkh0dHBIZWxwZXIgPSBuZXcgSHR0cEhlbHBlcigpOyJdfQ==