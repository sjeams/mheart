
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
  httpPost: function httpPost(url, params, callback) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcaHR0cC5qcyJdLCJuYW1lcyI6WyJodHRwc191cmwiLCJIdHRwSGVscGVyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXRpY3MiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiY3VycmVudCIsImF1ZGlvRW5naW5lIiwicGxheSIsInJlcyIsInVybCIsImh0dHBVcmwiLCJuZXdfdXJsIiwiaHR0cEdldHMiLCJjYWxsYmFjayIsInhociIsImxvYWRlciIsImdldFhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbmUiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic3lzIiwiaXNOYXRpdmUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwidGltZW91dCIsInNlbmQiLCJodHRwUG9zdCIsInBhcmFtcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBS0E7OztBQUdBLElBQUlBLFNBQVMsR0FBRyx1QkFBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3hCLGFBQVNELEVBQUUsQ0FBQ0UsU0FEWTtBQUd4QkMsRUFBQUEsT0FBTyxFQUFFLEVBSGU7QUFNeEJDLEVBQUFBLFVBQVUsRUFBRSxFQU5ZO0FBU3hCQyxFQUFBQSxNQVR3QixvQkFTZDtBQUVOO0FBQ0EsU0FBS0MsT0FBTCxHQUFlTixFQUFFLENBQUNPLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkMsR0FBRyxDQUFDQyxHQUF4QixFQUE2QixLQUE3QixFQUFvQyxDQUFwQyxDQUFmO0FBQ0gsR0FidUI7O0FBY3hCOzs7OztBQUtJQyxFQUFBQSxPQW5Cb0IsbUJBbUJaQyxPQW5CWSxFQW1CSjtBQUNaLFdBQU9kLFNBQVMsR0FBQyw0QkFBVixHQUF1Q0EsU0FBdkMsR0FBaURjLE9BQXhELENBRFksQ0FFWjtBQUNILEdBdEJtQjtBQXVCcEJDLEVBQUFBLFFBQVEsRUFBRSxrQkFBVUgsR0FBVixFQUFlSSxRQUFmLEVBQXlCO0FBQy9CLFFBQUlKLEdBQUcsR0FBRVosU0FBUyxHQUFDWSxHQUFuQjtBQUNBLFFBQUlLLEdBQUcsR0FBR2YsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxpQkFBVixFQUFWOztBQUNBRixJQUFBQSxHQUFHLENBQUNHLGtCQUFKLEdBQXlCLFlBQVk7QUFDakMsVUFBSUgsR0FBRyxDQUFDSSxVQUFKLEtBQW1CLENBQW5CLElBQXlCSixHQUFHLENBQUNLLE1BQUosSUFBYyxHQUFkLElBQXFCTCxHQUFHLENBQUNLLE1BQUosR0FBYSxHQUEvRCxFQUFxRTtBQUNqRSxZQUFJQyxPQUFPLEdBQUdOLEdBQUcsQ0FBQ08sWUFBbEI7QUFDQVIsUUFBQUEsUUFBUSxDQUFDTyxPQUFELENBQVI7QUFDSDtBQUNKLEtBTEQ7O0FBTUFOLElBQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTLEtBQVQsRUFBZ0JiLEdBQWhCLEVBQXFCLElBQXJCOztBQUNBLFFBQUlWLEVBQUUsQ0FBQ3dCLEdBQUgsQ0FBT0MsUUFBWCxFQUFxQjtBQUNqQlYsTUFBQUEsR0FBRyxDQUFDVyxnQkFBSixDQUFxQixpQkFBckIsRUFBd0MsY0FBeEM7QUFDSCxLQVo4QixDQWMvQjtBQUNBOzs7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxPQUFKLEdBQWMsSUFBZCxDQWhCK0IsQ0FnQlo7O0FBRW5CWixJQUFBQSxHQUFHLENBQUNhLElBQUo7QUFDSCxHQTFDbUI7QUE0Q3BCQyxFQUFBQSxRQUFRLEVBQUUsa0JBQVVuQixHQUFWLEVBQWVvQixNQUFmLEVBQXVCaEIsUUFBdkIsRUFBaUM7QUFDdkMsUUFBSUosR0FBRyxHQUFFWixTQUFTLEdBQUNZLEdBQW5CO0FBQ0EsUUFBSUssR0FBRyxHQUFHZixFQUFFLENBQUNnQixNQUFILENBQVVDLGlCQUFWLEVBQVY7O0FBQ0FGLElBQUFBLEdBQUcsQ0FBQ0csa0JBQUosR0FBeUIsWUFBWTtBQUNqQztBQUNBLFVBQUlILEdBQUcsQ0FBQ0ksVUFBSixLQUFtQixDQUFuQixJQUF5QkosR0FBRyxDQUFDSyxNQUFKLElBQWMsR0FBZCxJQUFxQkwsR0FBRyxDQUFDSyxNQUFKLEdBQWEsR0FBL0QsRUFBcUU7QUFDakUsWUFBSUMsT0FBTyxHQUFHTixHQUFHLENBQUNPLFlBQWxCO0FBQ0FSLFFBQUFBLFFBQVEsQ0FBQ2lCLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxPQUFYLENBQUQsQ0FBUixDQUZpRSxDQUVqQztBQUNuQyxPQUhELE1BR0ssQ0FDRDtBQUNIO0FBQ0osS0FSRDs7QUFTQU4sSUFBQUEsR0FBRyxDQUFDUSxJQUFKLENBQVMsTUFBVCxFQUFpQmIsR0FBakIsRUFBc0IsSUFBdEI7O0FBQ0EsUUFBSVYsRUFBRSxDQUFDd0IsR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCVixNQUFBQSxHQUFHLENBQUNXLGdCQUFKLENBQXFCLGlCQUFyQixFQUF3QyxjQUF4QztBQUNILEtBZnNDLENBZ0J2QztBQUNBO0FBQ0E7OztBQUNBWCxJQUFBQSxHQUFHLENBQUNZLE9BQUosR0FBYyxJQUFkLENBbkJ1QyxDQW1CcEI7QUFDbkI7O0FBQ0FaLElBQUFBLEdBQUcsQ0FBQ1csZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsbUNBQXJDLEVBckJ1QyxDQXNCdkM7O0FBQ0FYLElBQUFBLEdBQUcsQ0FBQ2EsSUFBSixDQUFTLFVBQVFHLElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxNQUFmLENBQWpCLEVBdkJ1QyxDQXdCdkM7QUFFSDtBQXRFbUIsQ0FBVCxDQUFuQjtBQXlFQUksTUFBTSxDQUFDbkMsVUFBUCxHQUFvQixJQUFJQSxVQUFKLEVBQXBCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBzamVhbVxyXG4gKiBARGF0ZTogMjAyMi0wNi0xMyAxNjozNDo1MlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuLyoqXHJcbiAqIEh0dHAg6K+35rGC5bCB6KOFXHJcbiAqL1xyXG52YXIgaHR0cHNfdXJsID0gJ2h0dHBzOi8vd3d3LmFoZWFydC5jbic7XHJcbmNvbnN0IEh0dHBIZWxwZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgc3RhdGljczoge1xyXG4gICAgfSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5LuO5pyN5Yqh5Zmo5Yqg6L29bXAz5p2l6L+b6KGM5pKt5pS+XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY2MuYXVkaW9FbmdpbmUucGxheShyZXMudXJsLCBmYWxzZSwgMSk7ICBcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIGdldOivt+axglxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcbiAgICAgKi9cclxuICAgICAgICBodHRwVXJsKG5ld191cmwpe1xyXG4gICAgICAgICAgICByZXR1cm4gaHR0cHNfdXJsKycvYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPScraHR0cHNfdXJsK25ld191cmw7XHJcbiAgICAgICAgICAgIC8vaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwczovL3d3dy5haGVhcnQuY24vYXBwL2xvYWRpbmcvbG9hZGluZy5qcGdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGh0dHBHZXRzOiBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgdXJsID1odHRwc191cmwrdXJsO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBub3RlOiBJbiBJbnRlcm5ldCBFeHBsb3JlciwgdGhlIHRpbWVvdXQgcHJvcGVydHkgbWF5IGJlIHNldCBvbmx5IGFmdGVyIGNhbGxpbmcgdGhlIG9wZW4oKVxyXG4gICAgICAgICAgICAvLyBtZXRob2QgYW5kIGJlZm9yZSBjYWxsaW5nIHRoZSBzZW5kKCkgbWV0aG9kLlxyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBodHRwUG9zdDogZnVuY3Rpb24gKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgdXJsID1odHRwc191cmwrdXJsO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ3hoci5yZWFkeVN0YXRlPScreGhyLnJlYWR5U3RhdGUrJyAgeGhyLnN0YXR1cz0nK3hoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKHJlc3BvbmUpKTsgIC8vIGpzb24g6L2s5pWw57uEXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1FZGl0aW9uXCIsIFwiMS4wLjAuMFwiKTsgIC8vIOeJiOacrFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIklwXCIsIFwiMTkyLjE2OC4xLjFcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSHR0cC1Ub2tlblwiLCBcImd6aXBkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbixtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgnZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAvLyAgeGhyLnNlbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgfVxyXG59KTtcclxuXHJcbndpbmRvdy5IdHRwSGVscGVyID0gbmV3IEh0dHBIZWxwZXIoKTsiXX0=