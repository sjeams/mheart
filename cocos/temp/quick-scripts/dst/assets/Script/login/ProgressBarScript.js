
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/ProgressBarScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f03637Rq8NIL4xawPe0R84Z', 'ProgressBarScript');
// Script/login/ProgressBarScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    progressBarView: {
      type: cc.ProgressBar,
      "default": null
    }
  },
  //当我们将脚本添加到节点 `node`上面的时候
  onLoad: function onLoad() {
    this._ping = true;
    this.progressBarView.progress = 0;
  },
  update: function update(dt) {
    this._updateProgressBar(this.progressBarView, dt);
  },
  _updateProgressBar: function _updateProgressBar(progressBar, dt) {
    var progress = progressBar.progress;

    if (progress < 1.0 && this._ping) {
      progress += dt * this.speed;
    } else {
      progress -= dt * this.speed;
      this._ping = progress <= 0;
    }

    progressBar.progress = progress;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcUHJvZ3Jlc3NCYXJTY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInByb2dyZXNzQmFyVmlldyIsInR5cGUiLCJQcm9ncmVzc0JhciIsIm9uTG9hZCIsIl9waW5nIiwicHJvZ3Jlc3MiLCJ1cGRhdGUiLCJkdCIsIl91cGRhdGVQcm9ncmVzc0JhciIsInByb2dyZXNzQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsS0FBSyxFQUFFLENBRkM7QUFHUkMsSUFBQUEsZUFBZSxFQUFFO0FBQ2JDLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDTyxXQURJO0FBRWIsaUJBQVM7QUFGSTtBQUhULEdBSFA7QUFZRDtBQUNKQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFFaEIsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLSixlQUFMLENBQXFCSyxRQUFyQixHQUFnQyxDQUFoQztBQUNILEdBakJJO0FBbUJMQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQixTQUFLQyxrQkFBTCxDQUF3QixLQUFLUixlQUE3QixFQUE4Q08sRUFBOUM7QUFDSCxHQXJCSTtBQXVCTEMsRUFBQUEsa0JBQWtCLEVBQUUsNEJBQVNDLFdBQVQsRUFBc0JGLEVBQXRCLEVBQXlCO0FBRXpDLFFBQUlGLFFBQVEsR0FBR0ksV0FBVyxDQUFDSixRQUEzQjs7QUFDQSxRQUFHQSxRQUFRLEdBQUcsR0FBWCxJQUFrQixLQUFLRCxLQUExQixFQUFnQztBQUM1QkMsTUFBQUEsUUFBUSxJQUFJRSxFQUFFLEdBQUcsS0FBS1IsS0FBdEI7QUFDSCxLQUZELE1BR0s7QUFDRE0sTUFBQUEsUUFBUSxJQUFJRSxFQUFFLEdBQUcsS0FBS1IsS0FBdEI7QUFDQSxXQUFLSyxLQUFMLEdBQWFDLFFBQVEsSUFBSSxDQUF6QjtBQUNIOztBQUNESSxJQUFBQSxXQUFXLENBQUNKLFFBQVosR0FBdUJBLFFBQXZCO0FBQ0gsR0FsQ0ksQ0FxQ0w7O0FBckNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBwcm9ncmVzc0JhclZpZXc6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgICAgICAvL+W9k+aIkeS7rOWwhuiEmuacrOa3u+WKoOWIsOiKgueCuSBgbm9kZWDkuIrpnaLnmoTml7blgJlcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5fcGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhclZpZXcucHJvZ3Jlc3MgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKHRoaXMucHJvZ3Jlc3NCYXJWaWV3LCBkdCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBfdXBkYXRlUHJvZ3Jlc3NCYXI6IGZ1bmN0aW9uKHByb2dyZXNzQmFyLCBkdCl7XHJcblxyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHByb2dyZXNzQmFyLnByb2dyZXNzO1xyXG4gICAgICAgIGlmKHByb2dyZXNzIDwgMS4wICYmIHRoaXMuX3Bpbmcpe1xyXG4gICAgICAgICAgICBwcm9ncmVzcyArPSBkdCAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyAtPSBkdCAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3BpbmcgPSBwcm9ncmVzcyA8PSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=