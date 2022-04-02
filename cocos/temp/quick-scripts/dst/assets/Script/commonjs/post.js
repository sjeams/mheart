
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/commonjs/post.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f677Nj9JlG454nbHimbjZS', 'post');
// Script/commonjs/post.js

"use strict";

var HttpHelper = cc.Class({
  "extends": cc.Component,

  /**
   * get请求
   * @param {string} url 
   * @param {function} callback 
   */
  get: function get(url, callback) {
    var xhr = cc.loader.getXMLHttpRequest();
    console.log("Status: Send Get Request to " + url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 207) {
        callback(true, xhr.responseText);
      }
    };

    xhr.send();
  },

  /**
   * post请求
   * @param {string} url 
   * @param {object} params 
   * @param {function} callback 
   */
  post: function post(url, params, callback) {
    var nums = arguments.length;

    if (nums == 2) {
      callback = arguments[1];
      params = "";
    }

    var xhr = cc.loader.getXMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 207) {
        callback(true, xhr.responseText);
      }
    };

    xhr.send(params);
  } // update (dt) {},

});
window.HttpHelper = new HttpHelper(); // const socket = new WebSocket('ws://localhost:8080');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25qc1xccG9zdC5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImdldCIsInVybCIsImNhbGxiYWNrIiwieGhyIiwibG9hZGVyIiwiZ2V0WE1MSHR0cFJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwicG9zdCIsInBhcmFtcyIsIm51bXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzZXRSZXF1ZXN0SGVhZGVyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDeEIsYUFBU0QsRUFBRSxDQUFDRSxTQURZOztBQUd4Qjs7Ozs7QUFLQUMsRUFBQUEsR0FSd0IsZUFRcEJDLEdBUm9CLEVBUWZDLFFBUmUsRUFRTDtBQUNmLFFBQUlDLEdBQUcsR0FBR04sRUFBRSxDQUFDTyxNQUFILENBQVVDLGlCQUFWLEVBQVY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQWlDTixHQUE3QztBQUNBRSxJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUyxLQUFULEVBQWdCUCxHQUFoQixFQUFxQixJQUFyQjs7QUFDQUUsSUFBQUEsR0FBRyxDQUFDTSxrQkFBSixHQUF5QixZQUFZO0FBQ2pDLFVBQUlOLEdBQUcsQ0FBQ08sVUFBSixLQUFtQixDQUFuQixJQUF5QlAsR0FBRyxDQUFDUSxNQUFKLElBQWMsR0FBZCxJQUFxQlIsR0FBRyxDQUFDUSxNQUFKLElBQWMsR0FBaEUsRUFBc0U7QUFDbEVULFFBQUFBLFFBQVEsQ0FBQyxJQUFELEVBQU1DLEdBQUcsQ0FBQ1MsWUFBVixDQUFSO0FBQ0g7QUFDSixLQUpEOztBQUtBVCxJQUFBQSxHQUFHLENBQUNVLElBQUo7QUFDSCxHQWxCdUI7O0FBb0J4Qjs7Ozs7O0FBTUFDLEVBQUFBLElBMUJ3QixnQkEwQm5CYixHQTFCbUIsRUEwQmRjLE1BMUJjLEVBMEJOYixRQTFCTSxFQTBCSTtBQUN4QixRQUFJYyxJQUFJLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBckI7O0FBQ0EsUUFBR0YsSUFBSSxJQUFJLENBQVgsRUFBYTtBQUNUZCxNQUFBQSxRQUFRLEdBQUdlLFNBQVMsQ0FBQyxDQUFELENBQXBCO0FBQ0FGLE1BQUFBLE1BQU0sR0FBRyxFQUFUO0FBQ0g7O0FBQ0QsUUFBSVosR0FBRyxHQUFHTixFQUFFLENBQUNPLE1BQUgsQ0FBVUMsaUJBQVYsRUFBVjtBQUNBRixJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUyxNQUFULEVBQWlCUCxHQUFqQjtBQUNBRSxJQUFBQSxHQUFHLENBQUNnQixnQkFBSixDQUFxQixjQUFyQixFQUFvQyxnQ0FBcEM7O0FBQ0FoQixJQUFBQSxHQUFHLENBQUNNLGtCQUFKLEdBQXlCLFlBQVk7QUFDakMsVUFBSU4sR0FBRyxDQUFDTyxVQUFKLEtBQW1CLENBQW5CLElBQXlCUCxHQUFHLENBQUNRLE1BQUosSUFBYyxHQUFkLElBQXFCUixHQUFHLENBQUNRLE1BQUosSUFBYyxHQUFoRSxFQUFzRTtBQUNsRVQsUUFBQUEsUUFBUSxDQUFDLElBQUQsRUFBTUMsR0FBRyxDQUFDUyxZQUFWLENBQVI7QUFDSDtBQUNKLEtBSkQ7O0FBS0FULElBQUFBLEdBQUcsQ0FBQ1UsSUFBSixDQUFTRSxNQUFUO0FBQ0gsR0F6Q3VCLENBMEN2Qjs7QUExQ3VCLENBQVQsQ0FBbkI7QUE2Q0FLLE1BQU0sQ0FBQ3hCLFVBQVAsR0FBb0IsSUFBSUEsVUFBSixFQUFwQixFQUVBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIdHRwSGVscGVyID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V06K+35rGCXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcbiAgICAgKi9cclxuICAgIGdldCh1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhdHVzOiBTZW5kIEdldCBSZXF1ZXN0IHRvIFwiICsgdXJsKTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8PSAyMDcpKSB7ICBcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUseGhyLnJlc3BvbnNlVGV4dCk7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwb3N06K+35rGCXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG4gICAgICovXHJcbiAgICBwb3N0KHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBudW1zID0gYXJndW1lbnRzLmxlbmd0aCAgXHJcbiAgICAgICAgaWYobnVtcyA9PSAyKXsgIFxyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1sxXTsgIFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBcIlwiOyAgXHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpOyAgXHJcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7ICBcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIpOyAgXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgIFxyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPD0gMjA3KSkgeyAgXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLHhoci5yZXNwb25zZVRleHQpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07ICBcclxuICAgICAgICB4aHIuc2VuZChwYXJhbXMpOyBcclxuICAgIH1cclxuICAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcblxyXG53aW5kb3cuSHR0cEhlbHBlciA9IG5ldyBIdHRwSGVscGVyKCk7XHJcblxyXG4vLyBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo4MDgwJyk7Il19