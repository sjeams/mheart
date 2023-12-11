
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8228eqRxUNJ4IVqrOVz3ZWN', 'http');
// Script/login/http.js

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

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // xhr.send(JSON.stringify(params));

    xhr.send('data=' + JSON.stringify(params)); //  xhr.send(params);
  }
});
window.HttpHelper = new HttpHelper();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcaHR0cC5qcyJdLCJuYW1lcyI6WyJodHRwc191cmwiLCJIdHRwSGVscGVyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXRpY3MiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiY3VycmVudCIsImF1ZGlvRW5naW5lIiwicGxheSIsInJlcyIsInVybCIsImh0dHBVcmwiLCJuZXdfdXJsIiwiaHR0cEdldHMiLCJjYWxsYmFjayIsInhociIsImxvYWRlciIsImdldFhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbmUiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic3lzIiwiaXNOYXRpdmUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwidGltZW91dCIsInNlbmQiLCJodHRwUG9zdExvZ2luIiwicGFyYW1zIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaHR0cFBvc3QiLCJuZXdfcmVzcG9uZSIsImNvZGUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBS0E7OztBQUdBLElBQUlBLFNBQVMsR0FBRyx1QkFBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3hCLGFBQVNELEVBQUUsQ0FBQ0UsU0FEWTtBQUd4QkMsRUFBQUEsT0FBTyxFQUFFLEVBSGU7QUFNeEJDLEVBQUFBLFVBQVUsRUFBRSxFQU5ZO0FBU3hCQyxFQUFBQSxNQVR3QixvQkFTZDtBQUVOO0FBQ0EsU0FBS0MsT0FBTCxHQUFlTixFQUFFLENBQUNPLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkMsR0FBRyxDQUFDQyxHQUF4QixFQUE2QixLQUE3QixFQUFvQyxDQUFwQyxDQUFmO0FBQ0gsR0FidUI7O0FBY3hCOzs7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QUFPQyxRQUFYLEVBQXFCO0FBQ2pCVixNQUFBQSxHQUFHLENBQUNXLGdCQUFKLENBQXFCLGlCQUFyQixFQUF3QyxjQUF4QztBQUNILEtBeEJzQyxDQXlCdkM7QUFDQTtBQUNBOzs7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxPQUFKLEdBQWMsSUFBZCxDQTVCdUMsQ0E0QnBCO0FBQ25COztBQUNBWixJQUFBQSxHQUFHLENBQUNXLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLG1DQUFyQyxFQTlCdUMsQ0ErQnZDOztBQUNBWCxJQUFBQSxHQUFHLENBQUNhLElBQUosQ0FBUyxVQUFRTSxJQUFJLENBQUNFLFNBQUwsQ0FBZU4sTUFBZixDQUFqQixFQWhDdUMsQ0FpQ3ZDO0FBRUg7QUE3R21CLENBQVQsQ0FBbkI7QUFnSEFZLE1BQU0sQ0FBQzNDLFVBQVAsR0FBb0IsSUFBSUEsVUFBSixFQUFwQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogc2plYW1cclxuICogQERhdGU6IDIwMjItMDYtMTMgMTY6MzQ6NTJcclxuICogQERlc2NyaXB0aW9uOiBcclxuICovXHJcbi8qKlxyXG4gKiBIdHRwIOivt+axguWwgeijhVxyXG4gKi9cclxudmFyIGh0dHBzX3VybCA9ICdodHRwczovL3d3dy5haGVhcnQuY24nO1xyXG5jb25zdCBIdHRwSGVscGVyID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHN0YXRpY3M6IHtcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOS7juacjeWKoeWZqOWKoOi9vW1wM+adpei/m+ihjOaSreaUvlxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkocmVzLnVybCwgZmFsc2UsIDEpOyAgXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXTor7fmsYJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG4gICAgICovXHJcbiAgICAgICAgaHR0cFVybChuZXdfdXJsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGh0dHBzX3VybCsnL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD0nK2h0dHBzX3VybCtuZXdfdXJsO1xyXG4gICAgICAgICAgICAvL2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBodHRwR2V0czogZnVuY3Rpb24gKHVybCwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9aHR0cHNfdXJsK3VybDtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gbm90ZTogSW4gSW50ZXJuZXQgRXhwbG9yZXIsIHRoZSB0aW1lb3V0IHByb3BlcnR5IG1heSBiZSBzZXQgb25seSBhZnRlciBjYWxsaW5nIHRoZSBvcGVuKClcclxuICAgICAgICAgICAgLy8gbWV0aG9kIGFuZCBiZWZvcmUgY2FsbGluZyB0aGUgc2VuZCgpIG1ldGhvZC5cclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaHR0cFBvc3RMb2dpbjogZnVuY3Rpb24gKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIHBhcmFtc1sndG9rZW4nXSA9IHRva2VuO1xyXG4gICAgICAgICAgICB2YXIgdXJsID1odHRwc191cmwrdXJsO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ3hoci5yZWFkeVN0YXRlPScreGhyLnJlYWR5U3RhdGUrJyAgeGhyLnN0YXR1cz0nK3hoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKHJlc3BvbmUpKTsgIC8vIGpzb24g6L2s5pWw57uEXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1FZGl0aW9uXCIsIFwiMS4wLjAuMFwiKTsgIC8vIOeJiOacrFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIklwXCIsIFwiMTkyLjE2OC4xLjFcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1Ub2tlblwiLCBcImd6aXBkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbixtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgnZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAvLyAgeGhyLnNlbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+W4pnRva2Vu6K6/6ZeuXHJcbiAgICAgICAgaHR0cFBvc3Q6IGZ1bmN0aW9uICh1cmwsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICBwYXJhbXNbJ3Rva2VuJ10gPSB0b2tlbjtcclxuICAgICAgICAgICAgdmFyIHVybCA9aHR0cHNfdXJsK3VybDtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCd4aHIucmVhZHlTdGF0ZT0nK3hoci5yZWFkeVN0YXRlKycgIHhoci5zdGF0dXM9Jyt4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19yZXNwb25lID1KU09OLnBhcnNlKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5ld19yZXNwb25lLmNvZGU9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+acqueZu+W9lVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlc3BvbmUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSkpOyAgLy8ganNvbiDovazmlbDnu4RcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1FZGl0aW9uXCIsIFwiMS4wLjAuMFwiKTsgIC8vIOeJiOacrFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIklwXCIsIFwiMTkyLjE2OC4xLjFcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1Ub2tlblwiLCBcImd6aXBkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbixtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgnZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAvLyAgeGhyLnNlbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgfVxyXG59KTtcclxuXHJcbndpbmRvdy5IdHRwSGVscGVyID0gbmV3IEh0dHBIZWxwZXIoKTsiXX0=