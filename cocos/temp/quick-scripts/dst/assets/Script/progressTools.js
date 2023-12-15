
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/progressTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '236d34ndr5Le5KyhPYJE5sU', 'progressTools');
// Script/progressTools.js

"use strict";

var HttpHelper = require("http");

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    progressBar: cc.ProgressBar,
    audio: {
      "default": null,
      type: cc.AudioClip
    },
    play: function play() {
      this.audioSource.play();
    },
    pause: function pause() {
      this.audioSource.pause();
    },
    sys_label: cc.Label
  },
  onLoad: function onLoad() {
    this.resource = null;
    this.progressBar.progress = 0;
    this.sys_label.string = "0%";
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwcm9ncmVzc1Rvb2xzLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInByb2dyZXNzQmFyIiwiUHJvZ3Jlc3NCYXIiLCJhdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJwbGF5IiwiYXVkaW9Tb3VyY2UiLCJwYXVzZSIsInN5c19sYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwicmVzb3VyY2UiLCJwcm9ncmVzcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFLENBREM7QUFFUkMsSUFBQUEsV0FBVyxFQUFDTCxFQUFFLENBQUNNLFdBRlA7QUFHUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVSLEVBQUUsQ0FBQ1M7QUFGTixLQUhDO0FBT1JDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkLFdBQUtDLFdBQUwsQ0FBaUJELElBQWpCO0FBQ0gsS0FUTztBQVdSRSxJQUFBQSxLQUFLLEVBQUUsaUJBQVk7QUFDZixXQUFLRCxXQUFMLENBQWlCQyxLQUFqQjtBQUNILEtBYk87QUFjUkMsSUFBQUEsU0FBUyxFQUFDYixFQUFFLENBQUNjO0FBZEwsR0FGUDtBQW1CTEMsRUFBQUEsTUFuQkssb0JBbUJLO0FBQ04sU0FBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUtYLFdBQUwsQ0FBaUJZLFFBQWpCLEdBQTJCLENBQTNCO0FBQ0EsU0FBS0osU0FBTCxDQUFlSyxNQUFmLEdBQXdCLElBQXhCO0FBQ0g7QUF2QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBwcm9ncmVzc0JhcjpjYy5Qcm9ncmVzc0JhcixcclxuICAgICAgICBhdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnBhdXNlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzeXNfbGFiZWw6Y2MuTGFiZWwsXHJcbiBcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPTA7XHJcbiAgICAgICAgdGhpcy5zeXNfbGFiZWwuc3RyaW5nID0gXCIwJVwiO1xyXG4gICAgfSxcclxuICAgIFxyXG59KSJdfQ==