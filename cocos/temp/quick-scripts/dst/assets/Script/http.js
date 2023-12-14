
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

/*
 * @Author: sjeam
 * @Date: 2022-06-13 16:34:52
 * @Description: 
 */

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

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // xhr.send(JSON.stringify(params));

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
    cc.director.preloadScene(sence, function () {
      //可以把进度数据打出来
      // progressBar.num =1;
      // progressBar.show();
      var loadedResource = []; //传入预制体的data参数--进度数据
      //加载预制资源 PrefabUrl为 预制资源在 资源中的路径

      cc.loader.loadRes('resources/sprite_loading', function (errorMessage, loadedResource) {
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

        CanvasNode.addChild(TipBoxPrefab); //获取预制资源中的js组件，并作出相应操作

        var TipBoxScript = TipBoxPrefab.getComponent('progressTools'); //开始操作JS组件脚本

        TipBoxScript.action(ButtonNumber, callbackObj); //开始为JS组件进行初始化操作,action 为自定义初始化方法

        TipBoxScript.setTipContent(content); //设置提示框的内容

        SelfCallBack(TipBoxPrefab, TipBoxScript);
      }); // //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
      // cc.loader.loadRes(PrefabUrl, function(errorMessage,loadedResource){});
      // //开始实例化预制资源(这是个实例化是我自己理解的，可能说的不正确)
      // var TipBoxPrefab = cc.instantiate(loadedResource);
      // //将预制资源添加到父节点CanvasNode为画布canvas节点 是用cc.find()获得的对象
      // CanvasNode.addChild(TipBoxPrefab);
    }, function () {
      // progressBar.hide();
      //加载场景
      cc.director.loadScene(sence, function () {// СameraСontrol.newGame();
        // spawnTools();
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxodHRwLmpzIl0sIm5hbWVzIjpbImh0dHBzX3VybCIsIkh0dHBIZWxwZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RhdGljcyIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjdXJyZW50IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwicmVzIiwidXJsIiwiaHR0cFVybCIsIm5ld191cmwiLCJodHRwVXJsSnNvbiIsImh0dHBHZXRzIiwiY2FsbGJhY2siLCJ4aHIiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25lIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInN5cyIsImlzTmF0aXZlIiwic2V0UmVxdWVzdEhlYWRlciIsInRpbWVvdXQiLCJzZW5kIiwiaHR0cFBvc3RMb2dpbiIsInBhcmFtcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImh0dHBQb3N0IiwibmV3X3Jlc3BvbmUiLCJjb2RlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJwbGF5R2FtZSIsInNlbmNlIiwicHJlbG9hZFNjZW5lIiwibG9hZGVkUmVzb3VyY2UiLCJsb2FkUmVzIiwiZXJyb3JNZXNzYWdlIiwibG9nIiwiUHJlZmFiIiwiVGlwQm94UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJDYW52YXNOb2RlIiwiYWRkQ2hpbGQiLCJUaXBCb3hTY3JpcHQiLCJnZXRDb21wb25lbnQiLCJhY3Rpb24iLCJCdXR0b25OdW1iZXIiLCJjYWxsYmFja09iaiIsInNldFRpcENvbnRlbnQiLCJjb250ZW50IiwiU2VsZkNhbGxCYWNrIiwiaHR0cFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUtBOzs7QUFHQSxJQUFJQSxTQUFTLEdBQUcsdUJBQWhCO0FBQ0EsSUFBTUMsVUFB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QSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogc2plYW1cclxuICogQERhdGU6IDIwMjItMDYtMTMgMTY6MzQ6NTJcclxuICogQERlc2NyaXB0aW9uOiBcclxuICovXHJcbi8qKlxyXG4gKiBIdHRwIOivt+axguWwgeijhVxyXG4gKi9cclxudmFyIGh0dHBzX3VybCA9ICdodHRwczovL3d3dy5haGVhcnQuY24nO1xyXG5jb25zdCBIdHRwSGVscGVyID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHN0YXRpY3M6IHtcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOS7juacjeWKoeWZqOWKoOi9vW1wM+adpei/m+ihjOaSreaUvlxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkocmVzLnVybCwgZmFsc2UsIDEpOyAgXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXTor7fmsYJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG4gICAgICovXHJcbiAgICAgICAgaHR0cFVybChuZXdfdXJsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGh0dHBzX3VybCsnL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD0nK2h0dHBzX3VybCtuZXdfdXJsO1xyXG4gICAgICAgICAgICAvL2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBodHRwVXJsSnNvbihuZXdfdXJsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGh0dHBzX3VybCsnL2FwcC9hcGkvZmlsZS1qc29uP3VybD0nK2h0dHBzX3VybCtuZXdfdXJsO1xyXG4gICAgICAgICAgICAvL2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBodHRwR2V0czogZnVuY3Rpb24gKHVybCwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9aHR0cHNfdXJsK3VybDtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gbm90ZTogSW4gSW50ZXJuZXQgRXhwbG9yZXIsIHRoZSB0aW1lb3V0IHByb3BlcnR5IG1heSBiZSBzZXQgb25seSBhZnRlciBjYWxsaW5nIHRoZSBvcGVuKClcclxuICAgICAgICAgICAgLy8gbWV0aG9kIGFuZCBiZWZvcmUgY2FsbGluZyB0aGUgc2VuZCgpIG1ldGhvZC5cclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaHR0cFBvc3RMb2dpbjogZnVuY3Rpb24gKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIHBhcmFtc1sndG9rZW4nXSA9IHRva2VuO1xyXG4gICAgICAgICAgICB2YXIgdXJsID1odHRwc191cmwrdXJsO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ3hoci5yZWFkeVN0YXRlPScreGhyLnJlYWR5U3RhdGUrJyAgeGhyLnN0YXR1cz0nK3hoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKHJlc3BvbmUpKTsgIC8vIGpzb24g6L2s5pWw57uEXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1FZGl0aW9uXCIsIFwiMS4wLjAuMFwiKTsgIC8vIOeJiOacrFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIklwXCIsIFwiMTkyLjE2OC4xLjFcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1Ub2tlblwiLCBcImd6aXBkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbixtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgnZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAvLyAgeGhyLnNlbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+W4pnRva2Vu6K6/6ZeuXHJcbiAgICAgICAgaHR0cFBvc3Q6IGZ1bmN0aW9uICh1cmwsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICBwYXJhbXNbJ3Rva2VuJ10gPSB0b2tlbjtcclxuICAgICAgICAgICAgdmFyIHVybCA9aHR0cHNfdXJsK3VybDtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCd4aHIucmVhZHlTdGF0ZT0nK3hoci5yZWFkeVN0YXRlKycgIHhoci5zdGF0dXM9Jyt4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19yZXNwb25lID1KU09OLnBhcnNlKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5ld19yZXNwb25lLmNvZGU9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+acqueZu+W9lVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlc3BvbmUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSkpOyAgLy8ganNvbiDovazmlbDnu4RcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1FZGl0aW9uXCIsIFwiMS4wLjAuMFwiKTsgIC8vIOeJiOacrFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIklwXCIsIFwiMTkyLjE2OC4xLjFcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1Ub2tlblwiLCBcImd6aXBkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbixtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCIpXHJcbiAgICAgICAgICAgIC8vIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgnZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAvLyAgeGhyLnNlbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+WcuuaZr+WKoOi9vVxyXG4gICAgICAgIHBsYXlHYW1lKHNlbmNlKSB7XHJcbiAgICAgICAgICAgIC8v6aKE5Yqg6L295Zy65pmv5bm26I635b6X5Yqg6L296L+b5bqmXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzZW5jZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy/lj6/ku6Xmiorov5vluqbmlbDmja7miZPlh7rmnaVcclxuICAgICAgICAgICAgICAgIC8vIHByb2dyZXNzQmFyLm51bSA9MTtcclxuICAgICAgICAgICAgICAgIC8vIHByb2dyZXNzQmFyLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHZhciBsb2FkZWRSZXNvdXJjZSA9W107IC8v5Lyg5YWl6aKE5Yi25L2T55qEZGF0YeWPguaVsC0t6L+b5bqm5pWw5o2uXHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9vemihOWItui1hOa6kCBQcmVmYWJVcmzkuLog6aKE5Yi26LWE5rqQ5ZyoIOi1hOa6kOS4reeahOi3r+W+hFxyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3Jlc291cmNlcy9zcHJpdGVfbG9hZGluZycsIGZ1bmN0aW9uKGVycm9yTWVzc2FnZSxsb2FkZWRSZXNvdXJjZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mo4Dmn6XotYTmupDliqDovb1cclxuICAgICAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjYy5sb2coICfovb3lhaXpooTliLbotYTmupDlpLHotKUsIOWOn+WboDonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhKGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNjLmxvZyggJ+S9oOi9veWFpeeahOS4jeaYr+mihOWItui1hOa6kCEnICk7IHJldHVybjsgfSBcclxuICAgICAgICAgICAgICAgICAgICAvL+W8gOWni+WunuS+i+WMlumihOWItui1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBUaXBCb3hQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShsb2FkZWRSZXNvdXJjZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIbpooTliLbotYTmupDmt7vliqDliLDniLboioLngrlcclxuICAgICAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKFRpcEJveFByZWZhYik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy/ojrflj5bpooTliLbotYTmupDkuK3nmoRqc+e7hOS7tu+8jOW5tuS9nOWHuuebuOW6lOaTjeS9nFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBUaXBCb3hTY3JpcHQgPSBUaXBCb3hQcmVmYWIuZ2V0Q29tcG9uZW50KCdwcm9ncmVzc1Rvb2xzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lvIDlp4vmk43kvZxKU+e7hOS7tuiEmuacrFxyXG4gICAgICAgICAgICAgICAgICAgIFRpcEJveFNjcmlwdC5hY3Rpb24oQnV0dG9uTnVtYmVyLGNhbGxiYWNrT2JqKTsgLy/lvIDlp4vkuLpKU+e7hOS7tui/m+ihjOWIneWni+WMluaTjeS9nCxhY3Rpb24g5Li66Ieq5a6a5LmJ5Yid5aeL5YyW5pa55rOVXHJcbiAgICAgICAgICAgICAgICAgICAgVGlwQm94U2NyaXB0LnNldFRpcENvbnRlbnQoY29udGVudCk7IC8v6K6+572u5o+Q56S65qGG55qE5YaF5a65XHJcbiAgICAgICAgICAgICAgICAgICAgU2VsZkNhbGxCYWNrKFRpcEJveFByZWZhYixUaXBCb3hTY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAvL+WKoOi9vemihOWItui1hOa6kCBQcmVmYWJVcmzkuLog6aKE5Yi26LWE5rqQ5ZyoIOi1hOa6kOS4reeahOi3r+W+hFxyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoUHJlZmFiVXJsLCBmdW5jdGlvbihlcnJvck1lc3NhZ2UsbG9hZGVkUmVzb3VyY2Upe30pO1xyXG4gICAgICAgICAgICAgICAgLy8gLy/lvIDlp4vlrp7kvovljJbpooTliLbotYTmupAo6L+Z5piv5Liq5a6e5L6L5YyW5piv5oiR6Ieq5bex55CG6Kej55qE77yM5Y+v6IO96K+055qE5LiN5q2j56GuKVxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIFRpcEJveFByZWZhYiA9IGNjLmluc3RhbnRpYXRlKGxvYWRlZFJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgIC8vIC8v5bCG6aKE5Yi26LWE5rqQ5re75Yqg5Yiw54i26IqC54K5Q2FudmFzTm9kZeS4uueUu+W4g2NhbnZhc+iKgueCuSDmmK/nlKhjYy5maW5kKCnojrflvpfnmoTlr7nosaFcclxuICAgICAgICAgICAgICAgIC8vIENhbnZhc05vZGUuYWRkQ2hpbGQoVGlwQm94UHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3NCYXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgLy/liqDovb3lnLrmma9cclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzZW5jZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINChYW1lcmHQoW9udHJvbC5uZXdHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3Bhd25Ub29scygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIFxyXG59KTtcclxuaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4vLyB3aW5kb3cuSHR0cEhlbHBlciA9IG5ldyBIdHRwSGVscGVyKCk7Il19