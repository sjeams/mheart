
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

/**
 * Http 请求封装
 */
var HttpHelper = cc.Class({
  "extends": cc.Component,
  statics: {},
  properties: {},

  /**
   * get请求
   * @param {string} url 
   * @param {function} callback 
   */
  httpGets: function httpGets(url, callback) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcaHR0cC5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXRpY3MiLCJwcm9wZXJ0aWVzIiwiaHR0cEdldHMiLCJ1cmwiLCJjYWxsYmFjayIsInhociIsImxvYWRlciIsImdldFhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbmUiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic3lzIiwiaXNOYXRpdmUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwidGltZW91dCIsInNlbmQiLCJodHRwUG9zdCIsInBhcmFtcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0EsSUFBTUEsVUFBVSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUN4QixhQUFTRCxFQUFFLENBQUNFLFNBRFk7QUFHeEJDLEVBQUFBLE9BQU8sRUFBRSxFQUhlO0FBTXhCQyxFQUFBQSxVQUFVLEVBQUUsRUFOWTs7QUFVeEI7Ozs7O0FBTUlDLEVBQUFBLFFBQVEsRUFBRSxrQkFBVUMsR0FBVixFQUFlQyxRQUFmLEVBQXlCO0FBQy9CLFFBQUlDLEdBQUcsR0FBR1IsRUFBRSxDQUFDUyxNQUFILENBQVVDLGlCQUFWLEVBQVY7O0FBQ0FGLElBQUFBLEdBQUcsQ0FBQ0csa0JBQUosR0FBeUIsWUFBWTtBQUNqQyxVQUFJSCxHQUFHLENBQUNJLFVBQUosS0FBbUIsQ0FBbkIsSUFBeUJKLEdBQUcsQ0FBQ0ssTUFBSixJQUFjLEdBQWQsSUFBcUJMLEdBQUcsQ0FBQ0ssTUFBSixHQUFhLEdBQS9ELEVBQXFFO0FBQ2pFLFlBQUlDLE9BQU8sR0FBR04sR0FBRyxDQUFDTyxZQUFsQjtBQUNBUixRQUFBQSxRQUFRLENBQUNPLE9BQUQsQ0FBUjtBQUNIO0FBQ0osS0FMRDs7QUFNQU4sSUFBQUEsR0FBRyxDQUFDUSxJQUFKLENBQVMsS0FBVCxFQUFnQlYsR0FBaEIsRUFBcUIsSUFBckI7O0FBQ0EsUUFBSU4sRUFBRSxDQUFDaUIsR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCVixNQUFBQSxHQUFHLENBQUNXLGdCQUFKLENBQXFCLGlCQUFyQixFQUF3QyxjQUF4QztBQUNILEtBWDhCLENBYS9CO0FBQ0E7OztBQUNBWCxJQUFBQSxHQUFHLENBQUNZLE9BQUosR0FBYyxJQUFkLENBZitCLENBZVo7O0FBRW5CWixJQUFBQSxHQUFHLENBQUNhLElBQUo7QUFDSCxHQWxDbUI7QUFvQ3BCQyxFQUFBQSxRQUFRLEVBQUUsa0JBQVVoQixHQUFWLEVBQWVpQixNQUFmLEVBQXVCaEIsUUFBdkIsRUFBaUM7QUFDdkMsUUFBSUMsR0FBRyxHQUFHUixFQUFFLENBQUNTLE1BQUgsQ0FBVUMsaUJBQVYsRUFBVjs7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxrQkFBSixHQUF5QixZQUFZO0FBQ2pDO0FBQ0EsVUFBSUgsR0FBRyxDQUFDSSxVQUFKLEtBQW1CLENBQW5CLElBQXlCSixHQUFHLENBQUNLLE1BQUosSUFBYyxHQUFkLElBQXFCTCxHQUFHLENBQUNLLE1BQUosR0FBYSxHQUEvRCxFQUFxRTtBQUNqRSxZQUFJQyxPQUFPLEdBQUdOLEdBQUcsQ0FBQ08sWUFBbEI7QUFDQVIsUUFBQUEsUUFBUSxDQUFDaUIsSUFBSSxDQUFDQyxLQUFMLENBQVdYLE9BQVgsQ0FBRCxDQUFSLENBRmlFLENBRWpDO0FBQ25DLE9BSEQsTUFHSyxDQUNEO0FBQ0g7QUFDSixLQVJEOztBQVNBTixJQUFBQSxHQUFHLENBQUNRLElBQUosQ0FBUyxNQUFULEVBQWlCVixHQUFqQixFQUFzQixJQUF0Qjs7QUFDQSxRQUFJTixFQUFFLENBQUNpQixHQUFILENBQU9DLFFBQVgsRUFBcUI7QUFDakJWLE1BQUFBLEdBQUcsQ0FBQ1csZ0JBQUosQ0FBcUIsaUJBQXJCLEVBQXdDLGNBQXhDO0FBQ0gsS0Fkc0MsQ0FldkM7QUFDQTtBQUNBOzs7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxPQUFKLEdBQWMsSUFBZCxDQWxCdUMsQ0FrQnBCO0FBQ25COztBQUNBWixJQUFBQSxHQUFHLENBQUNXLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLG1DQUFyQyxFQXBCdUMsQ0FxQnZDOztBQUNBWCxJQUFBQSxHQUFHLENBQUNhLElBQUosQ0FBUyxVQUFRRyxJQUFJLENBQUNFLFNBQUwsQ0FBZUgsTUFBZixDQUFqQixFQXRCdUMsQ0F1QnZDO0FBRUg7QUE3RG1CLENBQVQsQ0FBbkI7QUFnRUFJLE1BQU0sQ0FBQzVCLFVBQVAsR0FBb0IsSUFBSUEsVUFBSixFQUFwQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEh0dHAg6K+35rGC5bCB6KOFXHJcbiAqL1xyXG5jb25zdCBIdHRwSGVscGVyID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHN0YXRpY3M6IHtcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXTor7fmsYJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcclxuICAgICAqL1xyXG4gICAgXHJcbiAgICAgICAgaHR0cEdldHM6IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIG5vdGU6IEluIEludGVybmV0IEV4cGxvcmVyLCB0aGUgdGltZW91dCBwcm9wZXJ0eSBtYXkgYmUgc2V0IG9ubHkgYWZ0ZXIgY2FsbGluZyB0aGUgb3BlbigpXHJcbiAgICAgICAgICAgIC8vIG1ldGhvZCBhbmQgYmVmb3JlIGNhbGxpbmcgdGhlIHNlbmQoKSBtZXRob2QuXHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICBcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGh0dHBQb3N0OiBmdW5jdGlvbiAodXJsLCBwYXJhbXMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZygneGhyLnJlYWR5U3RhdGU9Jyt4aHIucmVhZHlTdGF0ZSsnICB4aHIuc3RhdHVzPScreGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSkpOyAgLy8ganNvbiDovazmlbDnu4RcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLUVkaXRpb25cIiwgXCIxLjAuMC4wXCIpOyAgLy8g54mI5pysXHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSXBcIiwgXCIxOTIuMTY4LjEuMVwiKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJIdHRwLVRva2VuXCIsIFwiZ3ppcGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uLG11bHRpcGFydC9mb3JtLWRhdGEnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICAgICAgLy8geGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCdkYXRhPScrSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIC8vICB4aHIuc2VuZChwYXJhbXMpO1xyXG5cclxuICAgICAgICB9XHJcbn0pO1xyXG5cclxud2luZG93Lkh0dHBIZWxwZXIgPSBuZXcgSHR0cEhlbHBlcigpOyJdfQ==