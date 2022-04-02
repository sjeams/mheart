"use strict";
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