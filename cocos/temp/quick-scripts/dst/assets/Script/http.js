
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
      }); // //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
      // cc.loader.loadRes(PrefabUrl, function(errorMessage,loadedResource){});
      // //开始实例化预制资源(这是个实例化是我自己理解的，可能说的不正确)
      // var TipBoxPrefab = cc.instantiate(loadedResource);
      // //将预制资源添加到父节点CanvasNode为画布canvas节点 是用cc.find()获得的对象
      // CanvasNode.addChild(TipBoxPrefab);
    }, function () {// progressBar.hide();
      //加载场景
      // cc.director.loadScene(sence, function () {
      //     // СameraСontrol.newGame();
      //     // spawnTools();
      // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxodHRwLmpzIl0sIm5hbWVzIjpbImh0dHBzX3VybCIsIkh0dHBIZWxwZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RhdGljcyIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjdXJyZW50IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwicmVzIiwidXJsIiwiaHR0cFVybCIsIm5ld191cmwiLCJodHRwVXJsSnNvbiIsImh0dHBHZXRzIiwiY2FsbGJhY2siLCJ4aHIiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25lIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInN5cyIsImlzTmF0aXZlIiwic2V0UmVxdWVzdEhlYWRlciIsInRpbWVvdXQiLCJzZW5kIiwiaHR0cFBvc3RMb2dpbiIsInBhcmFtcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImh0dHBQb3N0IiwibmV3X3Jlc3BvbmUiLCJjb2RlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJwbGF5R2FtZSIsInNlbmNlIiwicHJlbG9hZFNjZW5lIiwibG9hZGVkUmVzb3VyY2UiLCJsb2FkUmVzIiwiZXJyb3JNZXNzYWdlIiwibG9nIiwiUHJlZmFiIiwiVGlwQm94UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiYWRkQ2hpbGQiLCJodHRwUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBS0E7OztBQUdBLElBQUlBLFNBQVMsR0FBRyx1QkFBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3hCLGFBQVNELEVBQUUsQ0FBQ0UsU0FEWTtBQUd4QkMsRUFBQUEsT0FBTyxFQUFFLEVBSGU7QUFNeEJDLEVBQUFBLFVBQVUsRUFBRSxFQU5ZO0FB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QjtBQUFFaEQsVUFBQUEsRUFBRSxDQUFDaUQsR0FBSCxDQUFRLGtCQUFrQkQsWUFBMUI7QUFBMEM7QUFBUzs7QUFDeEUsWUFBSSxFQUFFRixjQUFjLFlBQVk5QyxFQUFFLENBQUNrRCxNQUEvQixDQUFKLEVBQThDO0FBQUVsRCxVQUFBQSxFQUFFLENBQUNpRCxHQUFILENBQVEsYUFBUjtBQUF5QjtBQUFTLFNBSFosQ0FJdEU7OztBQUNBLFlBQUlFLFlBQVksR0FBR25ELEVBQUUsQ0FBQ29ELFdBQUgsQ0FBZU4sY0FBZixDQUFuQixDQUxzRSxDQU10RTtBQUNBOztBQUNBOUMsUUFBQUEsRUFBRSxDQUFDcUQsSUFBSCxDQUFRLFFBQVIsRUFBa0JDLFFBQWxCLENBQTJCSCxZQUEzQixFQVJzRSxDQVN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxPQWZELEVBTndDLENBc0J4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSCxLQTdCRCxFQTZCRyxZQUFXLENBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsS0FwQ0Q7QUFxQ0g7QUEzSm1CLENBQVQsQ0FBbkI7QUE2SkFJLFdBQVcsR0FBRyxJQUFJeEQsVUFBSixFQUFkLEVBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHNqZWFtXHJcbiAqIEBEYXRlOiAyMDIyLTA2LTEzIDE2OjM0OjUyXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqL1xyXG4vKipcclxuICogSHR0cCDor7fmsYLlsIHoo4VcclxuICovXHJcbnZhciBodHRwc191cmwgPSAnaHR0cHM6Ly93d3cuYWhlYXJ0LmNuJztcclxuY29uc3QgSHR0cEhlbHBlciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBzdGF0aWNzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyDku47mnI3liqHlmajliqDovb1tcDPmnaXov5vooYzmkq3mlL5cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHJlcy51cmwsIGZhbHNlLCAxKTsgIFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogZ2V06K+35rGCXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcclxuICAgICAqL1xyXG4gICAgICAgIGh0dHBVcmwobmV3X3VybCl7XHJcbiAgICAgICAgICAgIHJldHVybiBodHRwc191cmwrJy9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9JytodHRwc191cmwrbmV3X3VybDtcclxuICAgICAgICAgICAgLy9odHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvbG9hZGluZy9sb2FkaW5nLmpwZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaHR0cFVybEpzb24obmV3X3VybCl7XHJcbiAgICAgICAgICAgIHJldHVybiBodHRwc191cmwrJy9hcHAvYXBpL2ZpbGUtanNvbj91cmw9JytodHRwc191cmwrbmV3X3VybDtcclxuICAgICAgICAgICAgLy9odHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvbG9hZGluZy9sb2FkaW5nLmpwZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaHR0cEdldHM6IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPWh0dHBzX3VybCt1cmw7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIG5vdGU6IEluIEludGVybmV0IEV4cGxvcmVyLCB0aGUgdGltZW91dCBwcm9wZXJ0eSBtYXkgYmUgc2V0IG9ubHkgYWZ0ZXIgY2FsbGluZyB0aGUgb3BlbigpXHJcbiAgICAgICAgICAgIC8vIG1ldGhvZCBhbmQgYmVmb3JlIGNhbGxpbmcgdGhlIHNlbmQoKSBtZXRob2QuXHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICBcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGh0dHBQb3N0TG9naW46IGZ1bmN0aW9uICh1cmwsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICBwYXJhbXNbJ3Rva2VuJ10gPSB0b2tlbjtcclxuICAgICAgICAgICAgdmFyIHVybCA9aHR0cHNfdXJsK3VybDtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCd4aHIucmVhZHlTdGF0ZT0nK3hoci5yZWFkeVN0YXRlKycgIHhoci5zdGF0dXM9Jyt4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShyZXNwb25lKSk7ICAvLyBqc29uIOi9rOaVsOe7hFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjYWxsYmFjaygtMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkh0dHAtRWRpdGlvblwiLCBcIjEuMC4wLjBcIik7ICAvLyDniYjmnKxcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJJcFwiLCBcIjE5Mi4xNjguMS4xXCIpO1xyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkh0dHAtVG9rZW5cIiwgXCJnemlwZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24sbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgICAgICAvLyB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoJ2RhdGE9JytKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAgICAgLy8gIHhoci5zZW5kKHBhcmFtcyk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/luKZ0b2tlbuiuv+mXrlxyXG4gICAgICAgIGh0dHBQb3N0OiBmdW5jdGlvbiAodXJsLCBwYXJhbXMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICAgICAgcGFyYW1zWyd0b2tlbiddID0gdG9rZW47XHJcbiAgICAgICAgICAgIHZhciB1cmwgPWh0dHBzX3VybCt1cmw7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZygneGhyLnJlYWR5U3RhdGU9Jyt4aHIucmVhZHlTdGF0ZSsnICB4aHIuc3RhdHVzPScreGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfcmVzcG9uZSA9SlNPTi5wYXJzZShyZXNwb25lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihuZXdfcmVzcG9uZS5jb2RlPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mnKrnmbvlvZVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShyZXNwb25lKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdpbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKHJlc3BvbmUpKTsgIC8vIGpzb24g6L2s5pWw57uEXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjYWxsYmFjaygtMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkh0dHAtRWRpdGlvblwiLCBcIjEuMC4wLjBcIik7ICAvLyDniYjmnKxcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJJcFwiLCBcIjE5Mi4xNjguMS4xXCIpO1xyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkh0dHAtVG9rZW5cIiwgXCJnemlwZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24sbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOFwiKVxyXG4gICAgICAgICAgICAvLyB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoJ2RhdGE9JytKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAgICAgLy8gIHhoci5zZW5kKHBhcmFtcyk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/lnLrmma/liqDovb1cclxuICAgICAgICBwbGF5R2FtZShzZW5jZSkge1xyXG4gICAgICAgICAgICAvL+mihOWKoOi9veWcuuaZr+W5tuiOt+W+l+WKoOi9vei/m+W6plxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoc2VuY2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8v5Y+v5Lul5oqK6L+b5bqm5pWw5o2u5omT5Ye65p2lXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9ncmVzc0Jhci5udW0gPTE7XHJcbiAgICAgICAgICAgICAgICAvLyBwcm9ncmVzc0Jhci5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9hZGVkUmVzb3VyY2UgPVtdOyAvL+S8oOWFpemihOWItuS9k+eahGRhdGHlj4LmlbAtLei/m+W6puaVsOaNrlxyXG4gICAgICAgICAgICAgICAgLy/liqDovb3pooTliLbotYTmupAgUHJlZmFiVXJs5Li6IOmihOWItui1hOa6kOWcqCDotYTmupDkuK3nmoTot6/lvoRcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCcvc3ByaXRlX2xvYWRpbmcnLCBmdW5jdGlvbihlcnJvck1lc3NhZ2UsbG9hZGVkUmVzb3VyY2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5qOA5p+l6LWE5rqQ5Yqg6L29XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY2MubG9nKCAn6L295YWl6aKE5Yi26LWE5rqQ5aSx6LSlLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiggIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjYy5sb2coICfkvaDovb3lhaXnmoTkuI3mmK/pooTliLbotYTmupAhJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICAvL+W8gOWni+WunuS+i+WMlumihOWItui1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBUaXBCb3hQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShsb2FkZWRSZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIbpooTliLbotYTmupDmt7vliqDliLDniLboioLngrlcclxuICAgICAgICAgICAgICAgICAgICAvLyBDYW52YXNOb2RlLmFkZENoaWxkKFRpcEJveFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuYWRkQ2hpbGQoVGlwQm94UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iOt+WPlumihOWItui1hOa6kOS4reeahGpz57uE5Lu277yM5bm25L2c5Ye655u45bqU5pON5L2cXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIFRpcEJveFNjcmlwdCA9IFRpcEJveFByZWZhYi5nZXRDb21wb25lbnQoJ3Byb2dyZXNzVG9vbHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAvL+W8gOWni+aTjeS9nEpT57uE5Lu26ISa5pysXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGlwQm94U2NyaXB0LmFjdGlvbihCdXR0b25OdW1iZXIsY2FsbGJhY2tPYmopOyAvL+W8gOWni+S4ukpT57uE5Lu26L+b6KGM5Yid5aeL5YyW5pON5L2cLGFjdGlvbiDkuLroh6rlrprkuYnliJ3lp4vljJbmlrnms5VcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaXBCb3hTY3JpcHQuc2V0VGlwQ29udGVudChjb250ZW50KTsgLy/orr7nva7mj5DnpLrmoYbnmoTlhoXlrrlcclxuICAgICAgICAgICAgICAgICAgICAvLyBTZWxmQ2FsbEJhY2soVGlwQm94UHJlZmFiLFRpcEJveFNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIC8v5Yqg6L296aKE5Yi26LWE5rqQIFByZWZhYlVybOS4uiDpooTliLbotYTmupDlnKgg6LWE5rqQ5Lit55qE6Lev5b6EXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhQcmVmYWJVcmwsIGZ1bmN0aW9uKGVycm9yTWVzc2FnZSxsb2FkZWRSZXNvdXJjZSl7fSk7XHJcbiAgICAgICAgICAgICAgICAvLyAvL+W8gOWni+WunuS+i+WMlumihOWItui1hOa6kCjov5nmmK/kuKrlrp7kvovljJbmmK/miJHoh6rlt7HnkIbop6PnmoTvvIzlj6/og73or7TnmoTkuI3mraPnoa4pXHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgVGlwQm94UHJlZmFiID0gY2MuaW5zdGFudGlhdGUobG9hZGVkUmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy/lsIbpooTliLbotYTmupDmt7vliqDliLDniLboioLngrlDYW52YXNOb2Rl5Li655S75biDY2FudmFz6IqC54K5IOaYr+eUqGNjLmZpbmQoKeiOt+W+l+eahOWvueixoVxyXG4gICAgICAgICAgICAgICAgLy8gQ2FudmFzTm9kZS5hZGRDaGlsZChUaXBCb3hQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgICAgICAvLyBwcm9ncmVzc0Jhci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veWcuuaZr1xyXG4gICAgICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNlbmNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8g0KFhbWVyYdChb250cm9sLm5ld0dhbWUoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBzcGF3blRvb2xzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgXHJcbn0pO1xyXG5odHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbi8vIHdpbmRvdy5IdHRwSGVscGVyID0gbmV3IEh0dHBIZWxwZXIoKTsiXX0=