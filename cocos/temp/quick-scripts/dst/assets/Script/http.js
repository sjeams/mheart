
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
      httpRequest.playGame('大厅');
    } else {
      httpRequest.httpPost('/app/app-apinew/fight', {
        'map_int': map_int,
        'userid': userid
      }, function (data) {
        //战斗历史路径
        cc.sys.localStorage.setItem('figthing_remote_url', JSON.stringify(data.data.sid));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxodHRwLmpzIl0sIm5hbWVzIjpbImh0dHBzX3VybCIsIkh0dHBIZWxwZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RhdGljcyIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjdXJyZW50IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwicmVzIiwidXJsIiwiaHR0cFVybCIsIm5ld191cmwiLCJodHRwVXJsSnNvbiIsImh0dHBHZXRzIiwiY2FsbGJhY2siLCJ4aHIiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25lIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInN5cyIsImlzTmF0aXZlIiwic2V0UmVxdWVzdEhlYWRlciIsInRpbWVvdXQiLCJzZW5kIiwiaHR0cFBvc3RMb2dpbiIsInBhcmFtcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImh0dHBQb3N0IiwibmV3X3Jlc3BvbmUiLCJjb2RlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJwbGF5R2FtZSIsInNlbmNlIiwiX3RoaXMiLCJsb2FkUmVzIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJQcmVmYWIiLCJUaXBCb3hQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImZpbmQiLCJhZGRDaGlsZCIsImZpZ2h0aW50IiwicHJlbG9hZFNjZW5lIiwiY29tcGxldGVDb3VudCIsInRvdGFsQ291bnQiLCJpdGVtIiwicHJvZ3Jlc3NCYXIiLCJnZXRDb21wb25lbnQiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzIiwicmVzb3VyY2UiLCJzeXNfbGFiZWwiLCJMYWJlbCIsInN0cmluZyIsInBhcnNlSW50IiwibWFwX2ludCIsInVzZXJpZCIsImh0dHBSZXF1ZXN0IiwiZGF0YSIsInNldEl0ZW0iLCJzaWQiXSwi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Q0FBT1EsWUFBUCxDQUFvQndDLE9BQXBCLENBQTRCLHFCQUE1QixFQUFtRHRDLElBQUksQ0FBQ0UsU0FBTCxDQUFlbUMsSUFBSSxDQUFDQSxJQUFMLENBQVVFLEdBQXpCLENBQW5EO0FBQ0gsT0FORDtBQU9IO0FBQ0o7QUFsTG1CLENBQVQsQ0FBbkI7QUFxTEFILFdBQVcsR0FBRyxJQUFJeEUsVUFBSixFQUFkLEVBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBIdHRwIOivt+axguWwgeijhVxyXG4gKi9cclxudmFyIGh0dHBzX3VybCA9ICdodHRwczovL3d3dy5haGVhcnQuY24nO1xyXG5jb25zdCBIdHRwSGVscGVyID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHN0YXRpY3M6IHtcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOS7juacjeWKoeWZqOWKoOi9vW1wM+adpei/m+ihjOaSreaUvlxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkocmVzLnVybCwgZmFsc2UsIDEpOyAgXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXTor7fmsYJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG4gICAgICovXHJcbiAgICAgICAgaHR0cFVybChuZXdfdXJsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGh0dHBzX3VybCsnL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD0nK2h0dHBzX3VybCtuZXdfdXJsO1xyXG4gICAgICAgICAgICAvL2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBodHRwVXJsSnNvbihuZXdfdXJsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGh0dHBzX3VybCsnL2FwcC9hcGkvZmlsZS1qc29uP3VybD0nK2h0dHBzX3VybCtuZXdfdXJsO1xyXG4gICAgICAgICAgICAvL2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBodHRwR2V0czogZnVuY3Rpb24gKHVybCwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9aHR0cHNfdXJsK3VybDtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gbm90ZTogSW4gSW50ZXJuZXQgRXhwbG9yZXIsIHRoZSB0aW1lb3V0IHByb3BlcnR5IG1heSBiZSBzZXQgb25seSBhZnRlciBjYWxsaW5nIHRoZSBvcGVuKClcclxuICAgICAgICAgICAgLy8gbWV0aG9kIGFuZCBiZWZvcmUgY2FsbGluZyB0aGUgc2VuZCgpIG1ldGhvZC5cclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaHR0cFBvc3RMb2dpbjogZnVuY3Rpb24gKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIHBhcmFtc1sndG9rZW4nXSA9IHRva2VuO1xyXG4gICAgICAgICAgICB2YXIgdXJsID1odHRwc191cmwrdXJsO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ3hoci5yZWFkeVN0YXRlPScreGhyLnJlYWR5U3RhdGUrJyAgeGhyLnN0YXR1cz0nK3hoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKHJlc3BvbmUpKTsgIC8vIGpzb24g6L2s5pWw57uEXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1FZGl0aW9uXCIsIFwiMS4wLjAuMFwiKTsgIC8vIOeJiOacrFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIklwXCIsIFwiMTkyLjE2OC4xLjFcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1Ub2tlblwiLCBcImd6aXBkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbixtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCIpXHJcbiAgICAgICAgICAgIC8vIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgnZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAvLyAgeGhyLnNlbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+W4pnRva2Vu6K6/6ZeuXHJcbiAgICAgICAgaHR0cFBvc3Q6IGZ1bmN0aW9uICh1cmwsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICBwYXJhbXNbJ3Rva2VuJ10gPSB0b2tlbjtcclxuICAgICAgICAgICAgdmFyIHVybCA9aHR0cHNfdXJsK3VybDtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCd4aHIucmVhZHlTdGF0ZT0nK3hoci5yZWFkeVN0YXRlKycgIHhoci5zdGF0dXM9Jyt4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19yZXNwb25lID1KU09OLnBhcnNlKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5ld19yZXNwb25lLmNvZGU9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+acqueZu+W9lVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlc3BvbmUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSkpOyAgLy8ganNvbiDovazmlbDnu4RcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1FZGl0aW9uXCIsIFwiMS4wLjAuMFwiKTsgIC8vIOeJiOacrFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIklwXCIsIFwiMTkyLjE2OC4xLjFcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1Ub2tlblwiLCBcImd6aXBkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbixtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCIpXHJcbiAgICAgICAgICAgIC8vIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgnZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAvLyAgeGhyLnNlbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+WcuuaZr+WKoOi9vS0t6L+b5bqm5p2hXHJcbiAgICAgICAgcGxheUdhbWUoc2VuY2UpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgICAgICAgICAvL+WKoOi9vemihOWItui1hOa6kCBQcmVmYWJVcmzkuLog6aKE5Yi26LWE5rqQ5ZyoIOi1hOa6kOS4reeahOi3r+W+hFxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnL3Nwcml0ZV9sb2FkaW5nJywgZnVuY3Rpb24oZXJyb3JNZXNzYWdlLGxvYWRlZFJlc291cmNlKXtcclxuICAgICAgICAgICAgICAgIC8v5qOA5p+l6LWE5rqQ5Yqg6L29XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjYy5sb2coICfovb3lhaXpooTliLbotYTmupDlpLHotKUsIOWOn+WboDonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEobG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY2MubG9nKCAn5L2g6L295YWl55qE5LiN5piv6aKE5Yi26LWE5rqQIScgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAvL+W8gOWni+WunuS+i+WMlumihOWItui1hOa6kFxyXG4gICAgICAgICAgICAgICAgdmFyIFRpcEJveFByZWZhYiA9IGNjLmluc3RhbnRpYXRlKGxvYWRlZFJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgIC8v5bCG6aKE5Yi26LWE5rqQ5re75Yqg5Yiw54i26IqC54K5XHJcbiAgICAgICAgICAgICAgICAvLyBDYW52YXNOb2RlLmFkZENoaWxkKFRpcEJveFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5hZGRDaGlsZChUaXBCb3hQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgLy/or7fmsYLmiJjmlpforrDlvZVcclxuICAgICAgICAgICAgICAgIF90aGlzLmZpZ2h0aW50KCk7XHJcbiAgICAgICAgICAgICAgICAvL+mihOWKoOi9veWcuuaZr+W5tuiOt+W+l+WKoOi9vei/m+W6plxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHNlbmNlLGZ1bmN0aW9uIChjb21wbGV0ZUNvdW50LCB0b3RhbENvdW50LGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3NCYXIgPSBjYy5maW5kKCdDYW52YXMvbG9hZGluZy9wcm9ncmVzc0JhcicpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wbGV0ZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvdGFsQ291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy/liqDovb3ov5vluqblm57osINcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn6LWE5rqQICcgKyBjb21wbGV0ZUNvdW50ICsgJ+WKoOi9veWujOaIkO+8gei1hOa6kOWKoOi9veS4rS4uLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfliqDovb3lnLrmma/otYTmupAnKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5wcm9ncmVzcyA9IGNvbXBsZXRlQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2dyZXNzQmFyLnByb2dyZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNvbXBsZXRlQ291bnQgPSBjb21wbGV0ZUNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyDku6PnoIHph4zpnaLojrflj5ZjYy5MYWJlbOe7hOS7tiwg5L+u5pS55paH5pys5YaF5a65XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy/lnKjku6PnoIHph4zpnaLojrflj5ZjYy5MYWJlbOe7hOS7tlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzeXNfbGFiZWwgPSBjYy5maW5kKCdDYW52YXMvbG9hZGluZy9wcm9ncmVzc0Jhci9zeXNfbGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN5c19sYWJlbC5zdHJpbmcgPSBwYXJzZUludCggcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgKiAxMDApICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKCB0aGlzLnJlc291cmNlLnR5cGU9PSdtcDMnKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocmVzKTsgIC8vIG1wM1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmF1ZGlvLmNsaXAgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyDku47mnI3liqHlmajliqDovb1tcDPmnaXov5vooYzmkq3mlL5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50ID0gY2MuYXVkaW9FbmdpbmUucGxheShyZXMudXJsLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3NCYXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yqg6L295Zy65pmvXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNlbmNlLCBmdW5jdGlvbiAoKSB7ICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/or7fmsYLmiJjmlpctLeWGmeWFpeaWh+acrOiusOW9lVxyXG4gICAgICAgIGZpZ2h0aW50KCl7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgICAgICAgdmFyIG1hcF9pbnQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpZ3RoaW5nX21hcF9pbnQnKTsgLy/or7vlj5bmlbDmja4tLeS4tOaXtuWcsOWbvmlkXHJcbiAgICAgICAgICAgIHZhciB1c2VyaWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpZ3RoaW5nX3VzZXJpZCcpOyAvL+ivu+WPluaVsOaNri0t546p5a625a+55oiYaWRcclxuICAgICAgICAgICAgaWYobWFwX2ludD09JycmJnVzZXJpZD09Jycpe1xyXG4gICAgICAgICAgICAgICBodHRwUmVxdWVzdC5wbGF5R2FtZSgn5aSn5Y6FJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaW5ldy9maWdodCcsIHtcclxuICAgICAgICAgICAgICAgICAgJ21hcF9pbnQnOiBtYXBfaW50LFxyXG4gICAgICAgICAgICAgICAgICAndXNlcmlkJzogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+aImOaWl+WOhuWPsui3r+W+hFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlndGhpbmdfcmVtb3RlX3VybCcsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS5zaWQpKTsgXHJcbiAgICAgICAgICAgICAgICB9KSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxufSk7XHJcbmh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuLy8gd2luZG93Lkh0dHBIZWxwZXIgPSBuZXcgSHR0cEhlbHBlcigpOyJdfQ==