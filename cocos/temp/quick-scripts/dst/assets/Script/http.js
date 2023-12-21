
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
          cc.director.loadScene('登录');
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
  playGame: function playGame(sence, task) {
    var _task = task || 0;

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

      if (_task == 1) {
        _this.fightint();
      } //预加载场景并获得加载进度


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
        if (data.code == 1) {
          cc.sys.localStorage.setItem('figthing_remote_url', data.data.sid);
        } else {
          // cc.director.loadScene('大厅');  
          callback(JSON.parse(data)); // json 转数组
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxodHRwLmpzIl0sIm5hbWVzIjpbImh0dHBzX3VybCIsIkh0dHBIZWxwZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RhdGljcyIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjdXJyZW50IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwicmVzIiwidXJsIiwiaHR0cFVybCIsIm5ld191cmwiLCJodHRwVXJsSnNvbiIsImh0dHBHZXRzIiwiY2FsbGJhY2siLCJ4aHIiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25lIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInN5cyIsImlzTmF0aXZlIiwic2V0UmVxdWVzdEhlYWRlciIsInRpbWVvdXQiLCJzZW5kIiwiaHR0cFBvc3RMb2dpbiIsInBhcmFtcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImh0dHBQb3N0IiwibmV3X3Jlc3BvbmUiLCJjb2RlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJwbGF5R2FtZSIsInNlbmNlIiwidGFzayIsIl90YXNrIiwiX3RoaXMiLCJsb2FkUmVzIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJQcmVmYWIiLCJUaXBCb3hQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImZpbmQiLCJhZGRDaGlsZCIsImZpZ2h0aW50IiwicHJlbG9hZFNjZW5lIiwiY29tcGxldGVDb3VudCIsInRvdGFsQ291bnQiLCJpdGVtIiwicHJvZ3Jlc3NCYXIiLCJnZXRDb21wb25lbnQiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzIiwicmVzb3VyY2UiLCJzeXNfbGFiZWwiLCJMYWJlbCIsInN0cmluZyIsInBhcnNlSW50IiwibWFwX2ludCIsInVzZXJpZCIsImRhdGEiLCJzZXRJdGVtIiwic2lkIiwi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LHVCQUFmLEVBQXdDO0FBQ3RDLG1CQUFXaUMsT0FEMkI7QUFFdEMsa0JBQVVDO0FBRjRCLE9BQXhDLEVBR0csVUFBVUMsSUFBVixFQUFnQjtBQUNmO0FBQ0EsWUFBR0EsSUFBSSxDQUFDakMsSUFBTCxJQUFXLENBQWQsRUFBZ0I7QUFDWnhDLFVBQUFBLEVBQUUsQ0FBQ3lCLEdBQUgsQ0FBT1EsWUFBUCxDQUFvQnlDLE9BQXBCLENBQTRCLHFCQUE1QixFQUFtREQsSUFBSSxDQUFDQSxJQUFMLENBQVVFLEdBQTdEO0FBQ0gsU0FGRCxNQUVLO0FBQ0Q7QUFDQTVELFVBQUFBLFFBQVEsQ0FBQ29CLElBQUksQ0FBQ0MsS0FBTCxDQUFXcUMsSUFBWCxDQUFELENBQVIsQ0FGQyxDQUU0QjtBQUNoQztBQUNKLE9BWEQ7QUFZSDtBQUNKO0FBMUxtQixDQUFULENBQW5CO0FBNkxBRyxXQUFXLEdBQUcsSUFBSTdFLFVBQUosRUFBZCxFQUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSHR0cCDor7fmsYLlsIHoo4VcclxuICovXHJcbnZhciBodHRwc191cmwgPSAnaHR0cHM6Ly93d3cuYWhlYXJ0LmNuJztcclxuY29uc3QgSHR0cEhlbHBlciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBzdGF0aWNzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyDku47mnI3liqHlmajliqDovb1tcDPmnaXov5vooYzmkq3mlL5cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHJlcy51cmwsIGZhbHNlLCAxKTsgIFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogZ2V06K+35rGCXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcclxuICAgICAqL1xyXG4gICAgICAgIGh0dHBVcmwobmV3X3VybCl7XHJcbiAgICAgICAgICAgIHJldHVybiBodHRwc191cmwrJy9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9JytodHRwc191cmwrbmV3X3VybDtcclxuICAgICAgICAgICAgLy9odHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvbG9hZGluZy9sb2FkaW5nLmpwZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaHR0cFVybEpzb24obmV3X3VybCl7XHJcbiAgICAgICAgICAgIHJldHVybiBodHRwc191cmwrJy9hcHAvYXBpL2ZpbGUtanNvbj91cmw9JytodHRwc191cmwrbmV3X3VybDtcclxuICAgICAgICAgICAgLy9odHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvbG9hZGluZy9sb2FkaW5nLmpwZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaHR0cEdldHM6IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPWh0dHBzX3VybCt1cmw7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIG5vdGU6IEluIEludGVybmV0IEV4cGxvcmVyLCB0aGUgdGltZW91dCBwcm9wZXJ0eSBtYXkgYmUgc2V0IG9ubHkgYWZ0ZXIgY2FsbGluZyB0aGUgb3BlbigpXHJcbiAgICAgICAgICAgIC8vIG1ldGhvZCBhbmQgYmVmb3JlIGNhbGxpbmcgdGhlIHNlbmQoKSBtZXRob2QuXHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICBcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGh0dHBQb3N0TG9naW46IGZ1bmN0aW9uICh1cmwsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICBwYXJhbXNbJ3Rva2VuJ10gPSB0b2tlbjtcclxuICAgICAgICAgICAgdmFyIHVybCA9aHR0cHNfdXJsK3VybDtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCd4aHIucmVhZHlTdGF0ZT0nK3hoci5yZWFkeVN0YXRlKycgIHhoci5zdGF0dXM9Jyt4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShyZXNwb25lKSk7ICAvLyBqc29uIOi9rOaVsOe7hFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjYWxsYmFjaygtMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkh0dHAtRWRpdGlvblwiLCBcIjEuMC4wLjBcIik7ICAvLyDniYjmnKxcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJJcFwiLCBcIjE5Mi4xNjguMS4xXCIpO1xyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkh0dHAtVG9rZW5cIiwgXCJnemlwZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24sbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOFwiKVxyXG4gICAgICAgICAgICAvLyB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoJ2RhdGE9JytKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAgICAgLy8gIHhoci5zZW5kKHBhcmFtcyk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/luKZ0b2tlbuiuv+mXrlxyXG4gICAgICAgIGh0dHBQb3N0OiBmdW5jdGlvbiAodXJsLCBwYXJhbXMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICAgICAgcGFyYW1zWyd0b2tlbiddID0gdG9rZW47XHJcbiAgICAgICAgICAgIHZhciB1cmwgPWh0dHBzX3VybCt1cmw7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZygneGhyLnJlYWR5U3RhdGU9Jyt4aHIucmVhZHlTdGF0ZSsnICB4aHIuc3RhdHVzPScreGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfcmVzcG9uZSA9SlNPTi5wYXJzZShyZXNwb25lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihuZXdfcmVzcG9uZS5jb2RlPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mnKrnmbvlvZVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShyZXNwb25lKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCfnmbvlvZUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShyZXNwb25lKSk7ICAvLyBqc29uIOi9rOaVsOe7hFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLUVkaXRpb25cIiwgXCIxLjAuMC4wXCIpOyAgLy8g54mI5pysXHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSXBcIiwgXCIxOTIuMTY4LjEuMVwiKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLVRva2VuXCIsIFwiZ3ppcGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uLG11bHRpcGFydC9mb3JtLWRhdGEnKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLThcIilcclxuICAgICAgICAgICAgLy8geGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCdkYXRhPScrSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIC8vICB4aHIuc2VuZChwYXJhbXMpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5Zy65pmv5Yqg6L29LS3ov5vluqbmnaFcclxuICAgICAgICBwbGF5R2FtZShzZW5jZSx0YXNrKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGFzayA9dGFza3x8MDtcclxuICAgICAgICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgICAgICAgICAvL+WKoOi9vemihOWItui1hOa6kCBQcmVmYWJVcmzkuLog6aKE5Yi26LWE5rqQ5ZyoIOi1hOa6kOS4reeahOi3r+W+hFxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnL3Nwcml0ZV9sb2FkaW5nJywgZnVuY3Rpb24oZXJyb3JNZXNzYWdlLGxvYWRlZFJlc291cmNlKXtcclxuICAgICAgICAgICAgICAgIC8v5qOA5p+l6LWE5rqQ5Yqg6L29XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjYy5sb2coICfovb3lhaXpooTliLbotYTmupDlpLHotKUsIOWOn+WboDonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEobG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY2MubG9nKCAn5L2g6L295YWl55qE5LiN5piv6aKE5Yi26LWE5rqQIScgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAvL+W8gOWni+WunuS+i+WMlumihOWItui1hOa6kFxyXG4gICAgICAgICAgICAgICAgdmFyIFRpcEJveFByZWZhYiA9IGNjLmluc3RhbnRpYXRlKGxvYWRlZFJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgIC8v5bCG6aKE5Yi26LWE5rqQ5re75Yqg5Yiw54i26IqC54K5XHJcbiAgICAgICAgICAgICAgICAvLyBDYW52YXNOb2RlLmFkZENoaWxkKFRpcEJveFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5hZGRDaGlsZChUaXBCb3hQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgLy/or7fmsYLmiJjmlpforrDlvZVcclxuICAgICAgICAgICAgICAgIGlmKF90YXNrPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5maWdodGludCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/pooTliqDovb3lnLrmma/lubbojrflvpfliqDovb3ov5vluqZcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzZW5jZSxmdW5jdGlvbiAoY29tcGxldGVDb3VudCwgdG90YWxDb3VudCxpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzQmFyID0gY2MuZmluZCgnQ2FudmFzL2xvYWRpbmcvcHJvZ3Jlc3NCYXInKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29tcGxldGVDb3VudClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3RhbENvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+i1hOa6kCAnICsgY29tcGxldGVDb3VudCArICfliqDovb3lrozmiJDvvIHotYTmupDliqDovb3kuK0uLi4nKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5Yqg6L295Zy65pmv6LWE5rqQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzc0Jhci5wcm9ncmVzcylcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jb21wbGV0ZUNvdW50ID0gY29tcGxldGVDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci50b3RhbENvdW50ID0gdG90YWxDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8g5Luj56CB6YeM6Z2i6I635Y+WY2MuTGFiZWznu4Tku7YsIOS/ruaUueaWh+acrOWGheWuuVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8v5Zyo5Luj56CB6YeM6Z2i6I635Y+WY2MuTGFiZWznu4Tku7ZcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3lzX2xhYmVsID0gY2MuZmluZCgnQ2FudmFzL2xvYWRpbmcvcHJvZ3Jlc3NCYXIvc3lzX2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBzeXNfbGFiZWwuc3RyaW5nID0gcGFyc2VJbnQoIHByb2dyZXNzQmFyLnByb2dyZXNzICogMTAwKSArICclJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiggdGhpcy5yZXNvdXJjZS50eXBlPT0nbXAzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7ICAvLyBtcDNcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5hdWRpby5jbGlwID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8g5LuO5pyN5Yqh5Zmo5Yqg6L29bXAz5p2l6L+b6KGM5pKt5pS+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkocmVzLnVybCwgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2dyZXNzQmFyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WKoOi9veWcuuaZr1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzZW5jZSwgZnVuY3Rpb24gKCkgeyAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v6K+35rGC5oiY5paXLS3lhpnlhaXmlofmnKzorrDlvZVcclxuICAgICAgICBmaWdodGludCgpe1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgICAgICAgIHZhciBtYXBfaW50ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWd0aGluZ19tYXBfaW50Jyk7IC8v6K+75Y+W5pWw5o2uLS3kuLTml7blnLDlm75pZFxyXG4gICAgICAgICAgICB2YXIgdXNlcmlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWd0aGluZ191c2VyaWQnKTsgLy/or7vlj5bmlbDmja4tLeeOqeWutuWvueaImGlkXHJcbiAgICAgICAgICAgIGlmKG1hcF9pbnQ9PScnJiZ1c2VyaWQ9PScnKXtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgn5aSn5Y6FJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaW5ldy9maWdodCcsIHtcclxuICAgICAgICAgICAgICAgICAgJ21hcF9pbnQnOiBtYXBfaW50LFxyXG4gICAgICAgICAgICAgICAgICAndXNlcmlkJzogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+aImOaWl+WOhuWPsui3r+W+hFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlndGhpbmdfcmVtb3RlX3VybCcsIGRhdGEuZGF0YS5zaWQpOyBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKCflpKfljoUnKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGRhdGEpKTsgIC8vIGpzb24g6L2s5pWw57uEXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbn0pO1xyXG5odHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbi8vIHdpbmRvdy5IdHRwSGVscGVyID0gbmV3IEh0dHBIZWxwZXIoKTsiXX0=