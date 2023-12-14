"use strict";
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