
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

      cc.find('Canvas').addChild(TipBoxPrefab); //预加载场景并获得加载进度

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxodHRwLmpzIl0sIm5hbWVzIjpbImh0dHBzX3VybCIsIkh0dHBIZWxwZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RhdGljcyIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjdXJyZW50IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwicmVzIiwidXJsIiwiaHR0cFVybCIsIm5ld191cmwiLCJodHRwVXJsSnNvbiIsImh0dHBHZXRzIiwiY2FsbGJhY2siLCJ4aHIiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25lIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInN5cyIsImlzTmF0aXZlIiwic2V0UmVxdWVzdEhlYWRlciIsInRpbWVvdXQiLCJzZW5kIiwiaHR0cFBvc3RMb2dpbiIsInBhcmFtcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImh0dHBQb3N0IiwibmV3X3Jlc3BvbmUiLCJjb2RlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJwbGF5R2FtZSIsInNlbmNlIiwibG9hZFJlcyIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwiUHJlZmFiIiwiVGlwQm94UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiYWRkQ2hpbGQiLCJwcmVsb2FkU2NlbmUiLCJjb21wbGV0ZUNvdW50IiwidG90YWxDb3VudCIsIml0ZW0iLCJwcm9ncmVzc0JhciIsImdldENvbXBvbmVudCIsIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJyZXNvdXJjZSIsInN5c19sYWJlbCIsIkxhYmVsIiwic3RyaW5nIiwicGFyc2VJbnQiLCJodHRwUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0EsSUFBSUEsU0FBUyxHQUFHLHVCQUFo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QW1CQyxRQUFRLENBQUVSLFdBQVcsQ0FBQ0csUUFBWixHQUF1QixHQUF6QixDQUFSLEdBQXdDLEdBQTNELENBaEJxRSxDQWlCckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxPQXhCRCxFQXdCRyxZQUFXO0FBQ1Y7QUFDQTtBQUNBN0QsUUFBQUEsRUFBRSxDQUFDeUMsUUFBSCxDQUFZQyxTQUFaLENBQXNCRSxLQUF0QixFQUE2QixZQUFZLENBQUksQ0FBN0M7QUFDSCxPQTVCRDtBQTZCSCxLQXZDRDtBQXdDSDtBQTlKbUIsQ0FBVCxDQUFuQjtBQWdLQXVCLFdBQVcsR0FBRyxJQUFJcEUsVUFBSixFQUFkLEVBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBIdHRwIOivt+axguWwgeijhVxyXG4gKi9cclxudmFyIGh0dHBzX3VybCA9ICdodHRwczovL3d3dy5haGVhcnQuY24nO1xyXG5jb25zdCBIdHRwSGVscGVyID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHN0YXRpY3M6IHtcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOS7juacjeWKoeWZqOWKoOi9vW1wM+adpei/m+ihjOaSreaUvlxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkocmVzLnVybCwgZmFsc2UsIDEpOyAgXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXTor7fmsYJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG4gICAgICovXHJcbiAgICAgICAgaHR0cFVybChuZXdfdXJsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGh0dHBzX3VybCsnL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD0nK2h0dHBzX3VybCtuZXdfdXJsO1xyXG4gICAgICAgICAgICAvL2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBodHRwVXJsSnNvbihuZXdfdXJsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGh0dHBzX3VybCsnL2FwcC9hcGkvZmlsZS1qc29uP3VybD0nK2h0dHBzX3VybCtuZXdfdXJsO1xyXG4gICAgICAgICAgICAvL2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBodHRwR2V0czogZnVuY3Rpb24gKHVybCwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9aHR0cHNfdXJsK3VybDtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gbm90ZTogSW4gSW50ZXJuZXQgRXhwbG9yZXIsIHRoZSB0aW1lb3V0IHByb3BlcnR5IG1heSBiZSBzZXQgb25seSBhZnRlciBjYWxsaW5nIHRoZSBvcGVuKClcclxuICAgICAgICAgICAgLy8gbWV0aG9kIGFuZCBiZWZvcmUgY2FsbGluZyB0aGUgc2VuZCgpIG1ldGhvZC5cclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaHR0cFBvc3RMb2dpbjogZnVuY3Rpb24gKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIHBhcmFtc1sndG9rZW4nXSA9IHRva2VuO1xyXG4gICAgICAgICAgICB2YXIgdXJsID1odHRwc191cmwrdXJsO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ3hoci5yZWFkeVN0YXRlPScreGhyLnJlYWR5U3RhdGUrJyAgeGhyLnN0YXR1cz0nK3hoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKHJlc3BvbmUpKTsgIC8vIGpzb24g6L2s5pWw57uEXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1FZGl0aW9uXCIsIFwiMS4wLjAuMFwiKTsgIC8vIOeJiOacrFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIklwXCIsIFwiMTkyLjE2OC4xLjFcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1Ub2tlblwiLCBcImd6aXBkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbixtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCIpXHJcbiAgICAgICAgICAgIC8vIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgnZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAvLyAgeGhyLnNlbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+W4pnRva2Vu6K6/6ZeuXHJcbiAgICAgICAgaHR0cFBvc3Q6IGZ1bmN0aW9uICh1cmwsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICBwYXJhbXNbJ3Rva2VuJ10gPSB0b2tlbjtcclxuICAgICAgICAgICAgdmFyIHVybCA9aHR0cHNfdXJsK3VybDtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCd4aHIucmVhZHlTdGF0ZT0nK3hoci5yZWFkeVN0YXRlKycgIHhoci5zdGF0dXM9Jyt4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19yZXNwb25lID1KU09OLnBhcnNlKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5ld19yZXNwb25lLmNvZGU9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+acqueZu+W9lVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlc3BvbmUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSkpOyAgLy8ganNvbiDovazmlbDnu4RcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1FZGl0aW9uXCIsIFwiMS4wLjAuMFwiKTsgIC8vIOeJiOacrFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIklwXCIsIFwiMTkyLjE2OC4xLjFcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1Ub2tlblwiLCBcImd6aXBkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbixtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCIpXHJcbiAgICAgICAgICAgIC8vIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgnZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAvLyAgeGhyLnNlbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+WcuuaZr+WKoOi9vS0t6L+b5bqm5p2hXHJcbiAgICAgICAgcGxheUdhbWUoc2VuY2UpIHtcclxuICAgICAgICAgICAgLy/liqDovb3pooTliLbotYTmupAgUHJlZmFiVXJs5Li6IOmihOWItui1hOa6kOWcqCDotYTmupDkuK3nmoTot6/lvoRcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJy9zcHJpdGVfbG9hZGluZycsIGZ1bmN0aW9uKGVycm9yTWVzc2FnZSxsb2FkZWRSZXNvdXJjZSl7XHJcbiAgICAgICAgICAgICAgICAvL+ajgOafpei1hOa6kOWKoOi9vVxyXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY2MubG9nKCAn6L295YWl6aKE5Yi26LWE5rqQ5aSx6LSlLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIGlmKCAhKGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNjLmxvZyggJ+S9oOi9veWFpeeahOS4jeaYr+mihOWItui1hOa6kCEnICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgLy/lvIDlp4vlrp7kvovljJbpooTliLbotYTmupBcclxuICAgICAgICAgICAgICAgIHZhciBUaXBCb3hQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShsb2FkZWRSZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAvL+WwhumihOWItui1hOa6kOa3u+WKoOWIsOeItuiKgueCuVxyXG4gICAgICAgICAgICAgICAgLy8gQ2FudmFzTm9kZS5hZGRDaGlsZChUaXBCb3hQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuYWRkQ2hpbGQoVGlwQm94UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIC8v6aKE5Yqg6L295Zy65pmv5bm26I635b6X5Yqg6L296L+b5bqmXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoc2VuY2UsZnVuY3Rpb24gKGNvbXBsZXRlQ291bnQsIHRvdGFsQ291bnQsaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc0JhciA9IGNjLmZpbmQoJ0NhbnZhcy9sb2FkaW5nL3Byb2dyZXNzQmFyJykuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbXBsZXRlQ291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG90YWxDb3VudClcclxuICAgICAgICAgICAgICAgICAgICAvL+WKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfotYTmupAgJyArIGNvbXBsZXRlQ291bnQgKyAn5Yqg6L295a6M5oiQ77yB6LWE5rqQ5Yqg6L295LitLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+WKoOi9veWcuuaZr+i1hOa6kCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnByb2dyZXNzID0gY29tcGxldGVDb3VudCAvIHRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3NCYXIucHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY29tcGxldGVDb3VudCA9IGNvbXBsZXRlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIOS7o+eggemHjOmdouiOt+WPlmNjLkxhYmVs57uE5Lu2LCDkv67mlLnmlofmnKzlhoXlrrlcclxuICAgICAgICAgICAgICAgICAgICAvLyAvL+WcqOS7o+eggemHjOmdouiOt+WPlmNjLkxhYmVs57uE5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5c19sYWJlbCA9IGNjLmZpbmQoJ0NhbnZhcy9sb2FkaW5nL3Byb2dyZXNzQmFyL3N5c19sYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3lzX2xhYmVsLnN0cmluZyA9IHBhcnNlSW50KCBwcm9ncmVzc0Jhci5wcm9ncmVzcyAqIDEwMCkgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoIHRoaXMucmVzb3VyY2UudHlwZT09J21wMycpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhyZXMpOyAgLy8gbXAzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuYXVkaW8uY2xpcCA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIOS7juacjeWKoeWZqOWKoOi9vW1wM+adpei/m+ihjOaSreaUvlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHJlcy51cmwsIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcm9ncmVzc0Jhci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/liqDovb3lnLrmma9cclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2VuY2UsIGZ1bmN0aW9uICgpIHsgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxufSk7XHJcbmh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuLy8gd2luZG93Lkh0dHBIZWxwZXIgPSBuZXcgSHR0cEhlbHBlcigpOyJdfQ==