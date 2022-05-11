
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/bage/Conf');
require('./assets/Script/bage/Game');
require('./assets/Script/bage/Tool');
require('./assets/Script/commonjs/alert');
require('./assets/Script/commonjs/post');
require('./assets/Script/home_js/userinfo');
require('./assets/Script/login/Alert');
require('./assets/Script/login/ProgressBarScript');
require('./assets/Script/login/SpriteTextTool');
require('./assets/Script/login/background');
require('./assets/Script/login/http');
require('./assets/Script/login/jspfile');
require('./assets/Script/login/loading');
require('./assets/Script/login/myserver');
require('./assets/Script/login/popup_dlg');
require('./assets/Script/login/role');
require('./assets/Script/scence/loading_fist');
require('./assets/Script/scence/scoretrump');
require('./assets/Script/scence/wap');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/commonjs/alert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '264a58ZMhVJpLKSN93M4Wxc', 'alert');
// Script/commonjs/alert.js

"use strict";

// //引入alert    
// let alert = require('alert');
// //弹窗调用
// alert.show.call(this, "确认退出游戏？", "取消", "确认", function (type) {
//    if (type == "取消") {
//        console.log("取消");
//    }
//    if (type == "确认") {
//        console.log("确认");
//    }
// });
var tipAlert = {
  _alert: null,
  //prefab
  _animSpeed: 0.3 //弹窗动画速度

};
/**
 * @param tipStr
 * @param leftStr
 * @param rightStr
 * @param callback
 */

var show = function show(tipStr, leftStr, rightStr, callback) {
  cc.loader.loadRes("alert/tipAlert", cc.Prefab, function (error, prefab) {
    if (error) {
      cc.error(error);
      return;
    }

    tipAlert._alert = cc.instantiate(prefab);
    cc.director.getScene().addChild(tipAlert._alert, 3);
    cc.find("tipAlert/content/top/tip").getComponent(cc.Label).string = tipStr;
    cc.find("tipAlert/content/bottom/left_btn/leftbtn").getComponent(cc.Label).string = leftStr;
    cc.find("tipAlert/content/bottom/right_btn/rightbtn").getComponent(cc.Label).string = rightStr;

    if (callback) {
      cc.find("tipAlert/content/bottom/left_btn").on('click', function (event) {
        dismiss();
        callback(leftStr);
      }, this);
      cc.find("tipAlert/content/bottom/right_btn").on('click', function (event) {
        dismiss();
        callback(rightStr);
      }, this);
    } //设置parent 为当前场景的Canvas ，position跟随父节点


    tipAlert._alert.parent = cc.find("Canvas");
    startFadeIn();
  });
}; // 执行弹进动画


var startFadeIn = function startFadeIn() {
  //动画
  tipAlert._alert.setScale(2);

  tipAlert._alert.opacity = 0;
  var cbFadeIn = cc.callFunc(onFadeInFinish, this);
  var actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(tipAlert._animSpeed, 255), cc.scaleTo(tipAlert._animSpeed, 1.0)), cbFadeIn);

  tipAlert._alert.runAction(actionFadeIn);
}; // 弹进动画完成回调


var onFadeInFinish = function onFadeInFinish() {}; // 执行弹出动画


var dismiss = function dismiss() {
  if (!tipAlert._alert) {
    return;
  }

  var cbFadeOut = cc.callFunc(onFadeOutFinish, this);
  var actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(tipAlert._animSpeed, 0), cc.scaleTo(tipAlert._animSpeed, 2.0)), cbFadeOut);

  tipAlert._alert.runAction(actionFadeOut);
}; // 弹出动画完成回调


var onFadeOutFinish = function onFadeOutFinish() {
  onDestroy();
};

var onDestroy = function onDestroy() {
  if (tipAlert._alert != null) {
    tipAlert._alert.removeFromParent();

    tipAlert._alert = null;
  }
};

module.exports = {
  show: show
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25qc1xcYWxlcnQuanMiXSwibmFtZXMiOlsidGlwQWxlcnQiLCJfYWxlcnQiLCJfYW5pbVNwZWVkIiwic2hvdyIsInRpcFN0ciIsImxlZnRTdHIiLCJyaWdodFN0ciIsImNhbGxiYWNrIiwiY2MiLCJsb2FkZXIiLCJsb2FkUmVzIiwiUHJlZmFiIiwiZXJyb3IiLCJwcmVmYWIiLCJpbnN0YW50aWF0ZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJhZGRDaGlsZCIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsIm9uIiwiZXZlbnQiLCJkaXNtaXNzIiwicGFyZW50Iiwic3RhcnRGYWRlSW4iLCJzZXRTY2FsZSIsIm9wYWNpdHkiLCJjYkZhZGVJbiIsImNhbGxGdW5jIiwib25GYWRlSW5GaW5pc2giLCJhY3Rpb25GYWRlSW4iLCJzZXF1ZW5jZSIsInNwYXduIiwiZmFkZVRvIiwic2NhbGVUbyIsInJ1bkFjdGlvbiIsImNiRmFkZU91dCIsIm9uRmFkZU91dEZpbmlzaCIsImFjdGlvbkZhZGVPdXQiLCJvbkRlc3Ryb3kiLCJyZW1vdmVGcm9tUGFyZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBSUEsUUFBUSxHQUFHO0FBQ1hDLEVBQUFBLE1BQU0sRUFBRSxJQURHO0FBQ2E7QUFDeEJDLEVBQUFBLFVBQVUsRUFBRSxHQUZELENBRWE7O0FBRmIsQ0FBZjtBQUtBOzs7Ozs7O0FBTUEsSUFBSUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBVUMsTUFBVixFQUFpQkMsT0FBakIsRUFBeUJDLFFBQXpCLEVBQWtDQyxRQUFsQyxFQUE0QztBQUNuREMsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLE9BQVYsQ0FBa0IsZ0JBQWxCLEVBQW1DRixFQUFF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N0IsQ0FBaEI7QUFDQSxNQUFJQyxhQUFhLEdBQUdoQyxFQUFFLENBQUN5QixRQUFILENBQVl6QixFQUFFLENBQUMwQixLQUFILENBQVMxQixFQUFFLENBQUMyQixNQUFILENBQVVuQyxRQUFRLENBQUNFLFVBQW5CLEVBQStCLENBQS9CLENBQVQsRUFBNENNLEVBQUUsQ0FBQzRCLE9BQUgsQ0FBV3BDLFFBQVEsQ0FBQ0UsVUFBcEIsRUFBZ0MsR0FBaEMsQ0FBNUMsQ0FBWixFQUErRm9DLFNBQS9GLENBQXBCOztBQUNBdEMsRUFBQUEsUUFBUSxDQUFDQyxNQUFULENBQWdCb0MsU0FBaEIsQ0FBMEJHLGFBQTFCO0FBQ0gsQ0FQRCxFQVNBOzs7QUFDQSxJQUFJRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDOUJFLEVBQUFBLFNBQVM7QUFDWixDQUZEOztBQUlBLElBQUlBLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVk7QUFDeEIsTUFBSXpDLFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQixJQUF2QixFQUE2QjtBQUN6QkQsSUFBQUEsUUFBUSxDQUFDQyxNQUFULENBQWdCeUMsZ0JBQWhCOztBQUNBMUMsSUFBQUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLElBQWxCO0FBQ0g7QUFDSixDQUxEOztBQU9BMEMsTUFBTSxDQUFDQyxPQUFQLEdBQWU7QUFDYnpDLEVBQUFBLElBQUksRUFBSkE7QUFEYSxDQUFmIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvL+W8leWFpWFsZXJ0ICAgIFxyXG4vLyBsZXQgYWxlcnQgPSByZXF1aXJlKCdhbGVydCcpO1xyXG5cclxuLy8gLy/lvLnnqpfosIPnlKhcclxuLy8gYWxlcnQuc2hvdy5jYWxsKHRoaXMsIFwi56Gu6K6k6YCA5Ye65ri45oiP77yfXCIsIFwi5Y+W5raIXCIsIFwi56Gu6K6kXCIsIGZ1bmN0aW9uICh0eXBlKSB7XHJcbi8vICAgIGlmICh0eXBlID09IFwi5Y+W5raIXCIpIHtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKFwi5Y+W5raIXCIpO1xyXG4vLyAgICB9XHJcbi8vICAgIGlmICh0eXBlID09IFwi56Gu6K6kXCIpIHtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKFwi56Gu6K6kXCIpO1xyXG4vLyAgICB9XHJcbi8vIH0pO1xyXG5cclxuXHJcblxyXG5sZXQgdGlwQWxlcnQgPSB7XHJcbiAgICBfYWxlcnQ6IG51bGwsICAgICAgICAgICAvL3ByZWZhYlxyXG4gICAgX2FuaW1TcGVlZDogMC4zLCAgICAgICAgLy/lvLnnqpfliqjnlLvpgJ/luqZcclxufTtcclxuIFxyXG4vKipcclxuICogQHBhcmFtIHRpcFN0clxyXG4gKiBAcGFyYW0gbGVmdFN0clxyXG4gKiBAcGFyYW0gcmlnaHRTdHJcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqL1xyXG5sZXQgc2hvdyA9IGZ1bmN0aW9uICh0aXBTdHIsbGVmdFN0cixyaWdodFN0cixjYWxsYmFjaykge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhbGVydC90aXBBbGVydFwiLGNjLlByZWZhYiwgZnVuY3Rpb24gKGVycm9yLCBwcmVmYWIpe1xyXG4gICAgICAgIGlmIChlcnJvcil7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aXBBbGVydC5fYWxlcnQgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQodGlwQWxlcnQuX2FsZXJ0LDMpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJ0aXBBbGVydC9jb250ZW50L3RvcC90aXBcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aXBTdHI7XHJcbiAgICAgICAgY2MuZmluZChcInRpcEFsZXJ0L2NvbnRlbnQvYm90dG9tL2xlZnRfYnRuL2xlZnRidG5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBsZWZ0U3RyO1xyXG4gICAgICAgIGNjLmZpbmQoXCJ0aXBBbGVydC9jb250ZW50L2JvdHRvbS9yaWdodF9idG4vcmlnaHRidG5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByaWdodFN0cjtcclxuICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJ0aXBBbGVydC9jb250ZW50L2JvdHRvbS9sZWZ0X2J0blwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxlZnRTdHIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuIFxyXG4gICAgICAgICAgICBjYy5maW5kKFwidGlwQWxlcnQvY29udGVudC9ib3R0b20vcmlnaHRfYnRuXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZGlzbWlzcygpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmlnaHRTdHIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva5wYXJlbnQg5Li65b2T5YmN5Zy65pmv55qEQ2FudmFzIO+8jHBvc2l0aW9u6Lef6ZqP54i26IqC54K5XHJcbiAgICAgICAgdGlwQWxlcnQuX2FsZXJ0LnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgc3RhcnRGYWRlSW4oKTtcclxuICAgIH0pO1xyXG59O1xyXG4gXHJcbi8vIOaJp+ihjOW8uei/m+WKqOeUu1xyXG5sZXQgc3RhcnRGYWRlSW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvL+WKqOeUu1xyXG4gICAgdGlwQWxlcnQuX2FsZXJ0LnNldFNjYWxlKDIpO1xyXG4gICAgdGlwQWxlcnQuX2FsZXJ0Lm9wYWNpdHkgPSAwO1xyXG4gICAgbGV0IGNiRmFkZUluID0gY2MuY2FsbEZ1bmMob25GYWRlSW5GaW5pc2gsIHRoaXMpO1xyXG4gICAgbGV0IGFjdGlvbkZhZGVJbiA9IGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLmZhZGVUbyh0aXBBbGVydC5fYW5pbVNwZWVkLCAyNTUpLCBjYy5zY2FsZVRvKHRpcEFsZXJ0Ll9hbmltU3BlZWQsIDEuMCkpLCBjYkZhZGVJbik7XHJcbiAgICB0aXBBbGVydC5fYWxlcnQucnVuQWN0aW9uKGFjdGlvbkZhZGVJbik7XHJcbn07XHJcbiBcclxuIFxyXG4vLyDlvLnov5vliqjnlLvlrozmiJDlm57osINcclxubGV0IG9uRmFkZUluRmluaXNoID0gZnVuY3Rpb24gKCkge1xyXG59O1xyXG4gXHJcbi8vIOaJp+ihjOW8ueWHuuWKqOeUu1xyXG5sZXQgZGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGlwQWxlcnQuX2FsZXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGNiRmFkZU91dCA9IGNjLmNhbGxGdW5jKG9uRmFkZU91dEZpbmlzaCwgdGhpcyk7XHJcbiAgICBsZXQgYWN0aW9uRmFkZU91dCA9IGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLmZhZGVUbyh0aXBBbGVydC5fYW5pbVNwZWVkLCAwKSwgY2Muc2NhbGVUbyh0aXBBbGVydC5fYW5pbVNwZWVkLCAyLjApKSwgY2JGYWRlT3V0KTtcclxuICAgIHRpcEFsZXJ0Ll9hbGVydC5ydW5BY3Rpb24oYWN0aW9uRmFkZU91dCk7XHJcbn07XHJcbiBcclxuLy8g5by55Ye65Yqo55S75a6M5oiQ5Zue6LCDXHJcbmxldCBvbkZhZGVPdXRGaW5pc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBvbkRlc3Ryb3koKTtcclxufTtcclxuIFxyXG5sZXQgb25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRpcEFsZXJ0Ll9hbGVydCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGlwQWxlcnQuX2FsZXJ0LnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB0aXBBbGVydC5fYWxlcnQgPSBudWxsO1xyXG4gICAgfVxyXG59O1xyXG4gXHJcbm1vZHVsZS5leHBvcnRzPXtcclxuICBzaG93XHJcbn07Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bage/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca358Mpn0dPrJ82VRBGkbhR', 'Game');
// Script/bage/Game.js

"use strict";

var _Conf = require("./Conf");

cc.Class({
  "extends": cc.Component,
  properties: {
    gridLayout: cc.Node,
    toolPrefab: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  spawnTools: function spawnTools() {
    // 首先确定gridLayout的各个属性
    var cellWidth = this.gridLayout.width * 0.105;
    var cellHeight = this.gridLayout.height * 0.215;
    var spacingX = this.gridLayout.width * 0.022;
    var spacingY = this.gridLayout.height * 0.045;
    this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
    this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
    this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
    this.gridLayout.getComponent(cc.Layout).spacingY = spacingY; // 根据TOOLS生成相应的道具

    this.toolsArray = [];

    for (var i = 0; i < _Conf.TOOLS.length; i++) {
      var tool = cc.instantiate(this.toolPrefab);
      tool.getComponent('Tool').initInfo(_Conf.TOOLS[i]);
      this.toolsArray.push(tool);
      this.gridLayout.addChild(tool);
    }
  },
  bagBtn: function bagBtn() {
    // 背包按钮
    if (this.gridLayout.parent.active) {
      // 隐藏节点
      this.gridLayout.parent.active = false; // 删除所有道具(或者不删，只是隐藏，自己决定)

      this.toolsArray.forEach(function (element) {
        element.removeFromParent();
      });
    } else {
      // 显示节点
      this.gridLayout.parent.active = true; // 生成所有道具

      this.spawnTools();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxiYWdlXFxHYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ3JpZExheW91dCIsIk5vZGUiLCJ0b29sUHJlZmFiIiwiUHJlZmFiIiwic3Bhd25Ub29scyIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsInRvb2xzQXJyYXkiLCJpIiwiVE9PTFMiLCJsZW5ndGgiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsInB1c2giLCJhZGRDaGlsZCIsImJhZ0J0biIsInBhcmVudCIsImFjdGl2ZSIsImZvckVhY2giLCJlbGVtZW50IiwicmVtb3ZlRnJvbVBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBRU4sRUFBRSxDQUFDTztBQUZQLEdBSFA7QUFRTDtBQUVBQyxFQUFBQSxVQVZLLHdCQVVTO0FBQ1Y7QUFDQSxRQUFJQyxTQUFTLEdBQUcsS0FBS0wsVUFBTCxDQUFnQk0sS0FBaEIsR0FBd0IsS0FBeEM7QUFDQSxRQUFJQyxVQUFVLEdBQUcsS0FBS1AsVUFBTCxDQUFnQlEsTUFBaEIsR0FBeUIsS0FBMUM7QUFDQSxRQUFJQyxRQUFRLEdBQUcsS0FBS1QsVUFBTCxDQUFnQk0sS0FBaEIsR0FBd0IsS0FBdkM7QUFDQSxRQUFJSSxRQUFRLEdBQUcsS0FBS1YsVUFBTCxDQUFnQlEsTUFBaEIsR0FBeUIsS0FBeEM7QUFFQSxTQUFLUixVQUFMLENBQWdCVyxZQUFoQixDQUE2QmYsRUFBRSxDQUFDZ0IsTUFBaEMsRUFBd0NDLFFBQXhDLENBQWlEUCxLQUFqRCxHQUF5REQsU0FBekQ7QUFDQSxTQUFLTCxVQUFMLENBQWdCVyxZQUFoQixDQUE2QmYsRUFBRSxDQUFDZ0IsTUFBaEMsRUFBd0NDLFFBQXhDLENBQWlETCxNQUFqRCxHQUEwREQsVUFBMUQ7QUFDQSxTQUFLUCxVQUFMLENBQWdCVyxZQUFoQixDQUE2QmYsRUFBRSxDQUFDZ0IsTUFBaEMsRUFBd0NILFFBQXhDLEdBQW1EQSxRQUFuRDtBQUNBLFNBQUtULFVBQUwsQ0FBZ0JXLFlBQWhCLENBQTZCZixFQUFFLENBQUNnQixNQUFoQyxFQUF3Q0YsUUFBeEMsR0FBbURBLFFBQW5ELENBVlUsQ0FZVjs7QUFDQSxTQUFLSSxVQUFMLEdBQWtCLEVBQWxCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDQyxZQUFNQyxNQUF0QixFQUE4QkYsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixVQUFJRyxJQUFJLEdBQUd0QixFQUFFLENBQUN1QixXQUFILENBQWUsS0FBS2pCLFVBQXBCLENBQVg7QUFDQWdCLE1BQUFBLElBQUksQ0FBQ1AsWUFBTCxDQUFrQixNQUFsQixFQUEwQlMsUUFBMUIsQ0FBbUNKLFlBQU1ELENBQU4sQ0FBbkM7QUFDQSxXQUFLRCxVQUFMLENBQWdCTyxJQUFoQixDQUFxQkgsSUFBckI7QUFDQSxXQUFLbEIsVUFBTCxDQUFnQnNCLFFBQWhCLENBQXlCSixJQUF6QjtBQUNIO0FBQ0osR0E5Qkk7QUFnQ0xLLEVBQUFBLE1BaENLLG9CQWdDSztBQUNOO0FBQ0EsUUFBSSxLQUFLdkIsVUFBTCxDQUFnQndCLE1BQWhCLENBQXVCQyxNQUEzQixFQUFtQztBQUMvQjtBQUNBLFdBQUt6QixVQUFMLENBQWdCd0IsTUFBaEIsQ0FBdUJDLE1BQXZCLEdBQWdDLEtBQWhDLENBRitCLENBSS9COztBQUNBLFdBQUtYLFVBQUwsQ0FBZ0JZLE9BQWhCLENBQXdCLFVBQUFDLE9BQU8sRUFBSTtBQUMvQkEsUUFBQUEsT0FBTyxDQUFDQyxnQkFBUjtBQUNILE9BRkQ7QUFHSCxLQVJELE1BU0s7QUFDRDtBQUNBLFdBQUs1QixVQUFMLENBQWdCd0IsTUFBaEIsQ0FBdUJDLE1BQXZCLEdBQWdDLElBQWhDLENBRkMsQ0FJRDs7QUFDQSxXQUFLckIsVUFBTDtBQUNIO0FBQ0o7QUFsREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUT09MU30gZnJvbSAnLi9Db25mJztcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JpZExheW91dDogY2MuTm9kZSxcclxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICAgIC8vIOmmluWFiOehruWummdyaWRMYXlvdXTnmoTlkITkuKrlsZ7mgKdcclxuICAgICAgICBsZXQgY2VsbFdpZHRoID0gdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4xMDU7XHJcbiAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgbGV0IHNwYWNpbmdYID0gdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4wMjI7XHJcbiAgICAgICAgbGV0IHNwYWNpbmdZID0gdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMDQ1O1xyXG5cclxuICAgICAgICB0aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XHJcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcblxyXG4gICAgICAgIC8vIOagueaNrlRPT0xT55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPFRPT0xTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUodGhpcy50b29sUHJlZmFiKTtcclxuICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ1Rvb2wnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHNBcnJheS5wdXNoKHRvb2wpO1xyXG4gICAgICAgICAgICB0aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBiYWdCdG4gKCkge1xyXG4gICAgICAgIC8vIOiDjOWMheaMiemSrlxyXG4gICAgICAgIGlmICh0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyDpmpDol4/oioLngrlcclxuICAgICAgICAgICAgdGhpcy5ncmlkTGF5b3V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXHJcbiAgICAgICAgICAgIHRoaXMudG9vbHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5pi+56S66IqC54K5XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOeUn+aIkOaJgOaciemBk+WFt1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduVG9vbHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/home_js/userinfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb9c9nq1ARCEIGdOhdxiwAf', 'userinfo');
// Script/home_js/userinfo.js

"use strict";

var HttpHelper = require("http"); // var fs = require('fs'); // 引入fs模块
// var globaluserinfo = require("GlobaluserInfo");


var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {
    editbox: cc.EditBox
  },
  onLoad: function onLoad() {
    // 操作文本--读取用户信息
    this.tokenlogin(); // 快捷登录
    // // 账号密码登录
    // this.login();
    //储存缓存
    // cc.sys.localStorage.setItem('token', value);
    // cc.sys.localStorage.getItem(key);
    // cc.sys.localStorage.removeItem(key);
  },
  tokenlogin: function tokenlogin() {
    // 获取本地json  信息
    // cc.loader.load( cc.url.raw("resources/login.json"),function(err,res){  
    cc.loader.loadRes('login.json', function (err, res) {
      //默认resources
      var json = res.json;
      var params = {
        'token': json.token
      };
      cc.log(json.token);
      var res = httpRequest.httpPost('http://www.monster.com/app/api-server/token-login', params, function (data) {
        cc.loader.release('resources/login.json'); //释放json 资源
        // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // 未登录弹出登录

        if (data.code == 0) {// this.loginbox.node.active = false;  // 进度隐藏
        }
      });
    });
  },
  login: function login() {
    var params = {
      'loginname': 'yincan1993',
      'password': 123456
    };
    httpRequest.httpPost('http://www.monster.com/app/api-server/login', params, function (data) {// cc.log(data); 
      //操作文本--修改用户信息
    });
  },
  btnClick1: function btnClick1(event, customEventData) {
    // // 请求登录接口
    // var params = {
    //         'loginname': 'yincan1993',
    //         'password': 123456,
    //         'serverid': 1,
    // };
    // cc.sys.localStorage.setItem('params', JSON.stringify(params));
    var params = JSON.parse(cc.sys.localStorage.getItem("params")); // cc.log(value); 
    // let httpRequest =  new HttpHelper();  

    httpRequest.httpPost('http://www.monster.com/app/api-server/user-login', params, function (data) {
      cc.log(data);

      if (data.code == 0) {// 登录失败，或本地数据失效
        // 弹窗
      } else {
        // 设置服务器
        cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));

        if (data.code == 1) {
          // 登录成功，进入游戏
          // cc.log(data.data.userinfo); 
          cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          cc.director.loadScene('home/dating'); // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          // cc.sys.localStorage.getItem(key); //读取数据
        }

        if (data.code == 2) {
          // 登录成功，未定义角色
          // 进入定义角色界面     
          var server = JSON.parse(cc.sys.localStorage.getItem('server')); // cc.log(server); 
          // 创建角色

          cc.director.loadScene('register');
        }
      }
    }); //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
    // var node = event.target;
    // var button = node.getComponent(cc.Button);
    //这里的 customEventData 参数就等于你之前设置的 "click1 user data"
    // cc.log("node=", node.name, " event=", event.type, " data=", customEventData);
  },
  callback: function callback(event) {
    // cc.log(data)
    // var userCount =  cc.find("Canvas/ground/editbox_count").getComponent(cc.EditBox).string;
    // var userPassward =  cc.find("Canvas/ground/editbox_passward").getComponent(cc.EditBox).string;
    // console.log("用户账号："+userCount+ "用户密码："+ userPassward);
    // HttpHelp.login(userCount,userPassward,function(isSuccess,Data){
    //     var info = Data;
    //     if(true == isSuccess){
    //         console.log("login  success!!!");
    //         console.log(info);
    //         globaluserinfo.username = info.username;
    //         globaluserinfo.gamepoint = info.gamepoint;
    //         globaluserinfo.skey = info.skey;
    //         globaluserinfo.userid = info.userid;
    //         globaluserinfo.money = info.money;
    //         globaluserinfo.userid = info.userid;
    //         globaluserinfo.password = info.password;
    //         globaluserinfo.salt = info.salt;
    //         //登录成功后加载地图资源
    cc.director.loadScene('map'); //     }else{
    //         console.log("login  filed!!!")
    //     }
    // });
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxob21lX2pzXFx1c2VyaW5mby5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJlZGl0Ym94IiwiRWRpdEJveCIsIm9uTG9hZCIsInRva2VubG9naW4iLCJsb2FkZXIiLCJsb2FkUmVzIiwiZXJyIiwicmVzIiwianNvbiIsInBhcmFtcyIsInRva2VuIiwibG9nIiwiaHR0cFBvc3QiLCJkYXRhIiwicmVsZWFzZSIsImNvZGUiLCJsb2dpbiIsImJ0bkNsaWNrMSIsImV2ZW50IiwiY3VzdG9tRXZlbnREYXRhIiwiSlNPTiIsInBhcnNlIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXJ2ZXIiLCJ1c2VyaW5mbyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiY2FsbGJhY2siLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCLEVBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsV0FBVyxHQUFJLElBQUlGLFVBQUosRUFBbkI7QUFDQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSztBQURKLEdBSFA7QUFPTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBRWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUhnQixDQUdHO0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBbEJJO0FBb0JMQSxFQUFBQSxVQUFVLEVBQUUsc0JBQVU7QUFDbEI7QUFDQTtBQUNBUCxJQUFBQSxFQUFFLENBQUNRLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixZQUFsQixF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNRdEIsSUFBQUEsRUFBRSxDQUFDaUMsUUFBSCxDQUFZQyxTQUFaLENBQXNCLEtBQXRCLEVBckJlLENBc0J2QjtBQUNBO0FBQ0E7QUFDQTtBQUVILEdBbElJO0FBb0lMRSxFQUFBQSxLQXBJSyxtQkFvSUksQ0FFUixDQXRJSSxDQXdJTDs7QUF4SUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7XHJcbi8vIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7IC8vIOW8leWFpWZz5qih5Z2XXHJcbi8vIHZhciBnbG9iYWx1c2VyaW5mbyA9IHJlcXVpcmUoXCJHbG9iYWx1c2VySW5mb1wiKTtcclxubGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZWRpdGJveDogY2MuRWRpdEJveFxyXG4gICAgfSxcclxuIFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIOaTjeS9nOaWh+acrC0t6K+75Y+W55So5oi35L+h5oGvXHJcbiAgICAgICAgdGhpcy50b2tlbmxvZ2luKCk7IC8vIOW/q+aNt+eZu+W9lVxyXG5cclxuICAgICAgICAvLyAvLyDotKblj7flr4bnoIHnmbvlvZVcclxuICAgICAgICAvLyB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgLy/lgqjlrZjnvJPlrZhcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdmFsdWUpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfSxcclxuICAgICBcclxuICAgIHRva2VubG9naW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8g6I635Y+W5pys5ZywanNvbiAg5L+h5oGvXHJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWQoIGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvbG9naW4uanNvblwiKSxmdW5jdGlvbihlcnIscmVzKXsgIFxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsb2dpbi5qc29uJyxmdW5jdGlvbihlcnIscmVzKXsgICAvL+m7mOiupHJlc291cmNlc1xyXG4gICAgICAgICAgICBsZXQganNvbiA9IHJlcy5qc29uO1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzoganNvbi50b2tlbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2MubG9nKGpzb24udG9rZW4pOyBcclxuICAgICAgICAgICAgdmFyIHJlcyA9IGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwOi8vd3d3Lm1vbnN0ZXIuY29tL2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UoJ3Jlc291cmNlcy9sb2dpbi5qc29uJyk7IC8v6YeK5pS+anNvbiDotYTmupBcclxuICAgICAgICAgICAgICAgIC8vIGlmKGNjLnN5cy5pc05hdGl2ZSl7ICAvLyAganNiLmZpbGVVdGlsc+S4jeaUr+aMgSB3ZWIgIOivu+WGmVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgICAgICAvLyDmnKrnmbvlvZXlvLnlh7rnmbvlvZVcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwOi8vd3d3Lm1vbnN0ZXIuY29tL2FwcC9hcGktc2VydmVyL2xvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICAvL+aTjeS9nOaWh+acrC0t5L+u5pS555So5oi35L+h5oGvXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBidG5DbGljazE6IGZ1bmN0aW9uIChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyAvLyDor7fmsYLnmbvlvZXmjqXlj6NcclxuICAgICAgICAvLyB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgJ2xvZ2lubmFtZSc6ICd5aW5jYW4xOTkzJyxcclxuICAgICAgICAvLyAgICAgICAgICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgICAgICAvLyAgICAgICAgICdzZXJ2ZXJpZCc6IDEsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmFtcycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhcmFtc1wiKSk7XHJcbiAgICAgICAgLy8gY2MubG9nKHZhbHVlKTsgXHJcbiAgICAgICAgLy8gbGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cDovL3d3dy5tb25zdGVyLmNvbS9hcHAvYXBpLXNlcnZlci91c2VyLWxvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICBpZihkYXRhLmNvZGU9PTApeyAvLyDnmbvlvZXlpLHotKXvvIzmiJbmnKzlnLDmlbDmja7lpLHmlYhcclxuICAgICAgICAgICAgICAgIC8vIOW8ueeql1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIOiuvue9ruacjeWKoeWZqFxyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXJ2ZXInLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuc2VydmVyKSk7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpey8vIOeZu+W9leaIkOWKn++8jOi/m+WFpea4uOaIj1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhLmRhdGEudXNlcmluZm8pOyBcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS9kYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7IC8v6K+75Y+W5pWw5o2uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTIpeyAvLyDnmbvlvZXmiJDlip/vvIzmnKrlrprkuYnop5LoibJcclxuICAgICAgICAgICAgICAgICAgICAvLyDov5vlhaXlrprkuYnop5LoibLnlYzpnaIgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXJ2ZXIgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VydmVyJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhzZXJ2ZXIpOyBcclxuICAgICAgICAgICAgICAgICAgICAvLyDliJvlu7rop5LoibJcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3JlZ2lzdGVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/ov5nph4wgZXZlbnQg5piv5LiA5LiqIFRvdWNoIEV2ZW50IOWvueixoe+8jOS9oOWPr+S7pemAmui/hyBldmVudC50YXJnZXQg5Y+W5Yiw5LqL5Lu255qE5Y+R6YCB6IqC54K5XHJcbiAgICAgICAgLy8gdmFyIG5vZGUgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgLy8gdmFyIGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgLy/ov5nph4znmoQgY3VzdG9tRXZlbnREYXRhIOWPguaVsOWwseetieS6juS9oOS5i+WJjeiuvue9rueahCBcImNsaWNrMSB1c2VyIGRhdGFcIlxyXG4gICAgICAgIC8vIGNjLmxvZyhcIm5vZGU9XCIsIG5vZGUubmFtZSwgXCIgZXZlbnQ9XCIsIGV2ZW50LnR5cGUsIFwiIGRhdGE9XCIsIGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyBjYy5sb2coZGF0YSlcclxuICAgICAgICAvLyB2YXIgdXNlckNvdW50ID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICAvLyB2YXIgdXNlclBhc3N3YXJkID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfcGFzc3dhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueUqOaIt+i0puWPt++8mlwiK3VzZXJDb3VudCsgXCLnlKjmiLflr4bnoIHvvJpcIisgdXNlclBhc3N3YXJkKTtcclxuICAgICAgICAvLyBIdHRwSGVscC5sb2dpbih1c2VyQ291bnQsdXNlclBhc3N3YXJkLGZ1bmN0aW9uKGlzU3VjY2VzcyxEYXRhKXtcclxuICAgICAgICAvLyAgICAgdmFyIGluZm8gPSBEYXRhO1xyXG4gICAgICAgIC8vICAgICBpZih0cnVlID09IGlzU3VjY2Vzcyl7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBzdWNjZXNzISEhXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VybmFtZSA9IGluZm8udXNlcm5hbWU7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5nYW1lcG9pbnQgPSBpbmZvLmdhbWVwb2ludDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNrZXkgPSBpbmZvLnNrZXk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuIFxyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ubW9uZXkgPSBpbmZvLm1vbmV5O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5wYXNzd29yZCA9IGluZm8ucGFzc3dvcmQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5zYWx0ID0gaW5mby5zYWx0O1xyXG4gXHJcbiAgICAgICAgLy8gICAgICAgICAvL+eZu+W9leaIkOWKn+WQjuWKoOi9veWcsOWbvui1hOa6kFxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAnKTtcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBmaWxlZCEhIVwiKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcbiBcclxuICAgIH0sXHJcbiBcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/wap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b005bs3OsxEXphcM4J27bYW', 'wap');
// Script/model/wap.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {// this.updateCanvasSize();
    // cc.view.setResizeCallback(() => {
    //     this.updateCanvasSize();
    // })
  } // 自由切换横竖屏，动态设置设计分辨率和适配模式。
  // updateCanvasSize() {
  //     let size = cc.view.getFrameSize();
  //     if (size.width > size.height) {
  //         this.canvas.fitWidth = false;
  //         this.canvas.fitHeight = true;
  //         this.canvas.designResolution = cc.size(1920, 1080);
  //         this.showLandscape();
  //     } else {
  //         this.canvas.fitWidth = true;
  //         this.canvas.fitHeight = false;
  //         this.canvas.designResolution = cc.size(1080, 1920);
  //         this.showPortait();
  //     }
  // },
  // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2RlbFxcd2FwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQTtBQUVBQyxFQUFBQSxLQXpCSyxtQkF5QkcsQ0FDSjtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBOUJJLENBZ0NMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQWhESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLnVwZGF0ZUNhbnZhc1NpemUoKTtcclxuICAgICAgICAvLyBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVDYW52YXNTaXplKCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgIH0sXHJcblxyXG4gICAgLy8g6Ieq55Sx5YiH5o2i5qiq56uW5bGP77yM5Yqo5oCB6K6+572u6K6+6K6h5YiG6L6o546H5ZKM6YCC6YWN5qih5byP44CCXHJcbiAgICAvLyB1cGRhdGVDYW52YXNTaXplKCkge1xyXG4gICAgLy8gICAgIGxldCBzaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgIC8vICAgICBpZiAoc2l6ZS53aWR0aCA+IHNpemUuaGVpZ2h0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2FudmFzLmRlc2lnblJlc29sdXRpb24gPSBjYy5zaXplKDE5MjAsIDEwODApO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNob3dMYW5kc2NhcGUoKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNhbnZhcy5maXRXaWR0aCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNhbnZhcy5kZXNpZ25SZXNvbHV0aW9uID0gY2Muc2l6ZSgxMDgwLCAxOTIwKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93UG9ydGFpdCgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bage/Tool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49a64EsluZBxJenF/5eS2wy', 'Tool');
// Script/bage/Tool.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  initInfo: function initInfo(info) {
    // 初始化该道具相关信息
    // 图片
    var self = this;
    cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
      self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    }); // 介绍

    this.node.intro = info['intro'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxiYWdlXFxUb29sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdEluZm8iLCJpbmZvIiwic2VsZiIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImludHJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MO0FBRUFDLEVBQUFBLFFBUkssb0JBUUtDLElBUkwsRUFRVztBQUNaO0FBRUE7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBTixJQUFBQSxFQUFFLENBQUNPLE1BQUgsQ0FBVUMsT0FBVixDQUFrQkgsSUFBSSxDQUFDLFFBQUQsQ0FBdEIsRUFBa0NMLEVBQUUsQ0FBQ1MsV0FBckMsRUFBa0QsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO0FBQzFFTCxNQUFBQSxJQUFJLENBQUNNLElBQUwsQ0FBVUMsWUFBVixDQUF1QmIsRUFBRSxDQUFDYyxNQUExQixFQUFrQ0gsV0FBbEMsR0FBZ0RBLFdBQWhEO0FBQ0gsS0FGRCxFQUxZLENBU1o7O0FBQ0EsU0FBS0MsSUFBTCxDQUFVRyxLQUFWLEdBQWtCVixJQUFJLENBQUMsT0FBRCxDQUF0QjtBQUNIO0FBbkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIGluaXRJbmZvIChpbmZvKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6K+l6YGT5YW355u45YWz5L+h5oGvXHJcblxyXG4gICAgICAgIC8vIOWbvueJh1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhpbmZvWydwaWNVcmwnXSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDku4vnu41cclxuICAgICAgICB0aGlzLm5vZGUuaW50cm8gPSBpbmZvWydpbnRybyddO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/background.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e483aavH0JDcYCPFVIozWXt', 'background');
// Script/login/background.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {// this.loadingBackground();
  },
  start: function start() {},
  // update (dt) {},
  loadingBackground: function loadingBackground() {
    // 下载资源包
    // 远程 url 带图片后缀名
    var remoteUrl = "http://127.0.0.1/ceshi.php?url=http://www.monster.com/app/loading/loading.jpg";
    var self = this; // cc.loader.load(remoteUrl, function (err, texture) {

    cc.loader.load({
      url: remoteUrl,
      type: 'jpg'
    }, function (err, texture) {
      //   直接释放某个贴图
      // cc.loader.release(texture);
      // // 释放一个 prefab 以及所有它依赖的资源
      // var deps = cc.loader.getDependsRecursively('url_photo');
      // cc.loader.release(deps);
      // // 如果在这个 prefab 中有一些和场景其他部分共享的资源，你不希望它们被释放，有两种方法：
      // // 1. 显式声明禁止某个资源的自动释放
      // cc.loader.setAutoRelease(this.background, false);
      // // 2. 将这个资源从依赖列表中删除
      // var deps = cc.loader.getDependsRecursively('url_photo');
      // var index = deps.indexOf(this.background);
      // if (index !== -1)
      //     deps.splice(index, 1);
      // cc.loader.release(deps);
      // this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
      //  // 改用 cc.url.raw，此时需要声明 resources 目录和文件后缀名
      // //  var realUrl = cc.url.raw("loading");
      // //  var texture = cc.textureCache.addImage(realUrl);
      // console.log( texture);    
      self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture); // self.node.spriteFrame.setTexture(texture.url);
      // self.node.spriteFrame.setContentSize(res.getContentSize());
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInN0YXJ0IiwibG9hZGluZ0JhY2tncm91bmQiLCJyZW1vdGVVcmwiLCJzZWxmIiwibG9hZGVyIiwibG9hZCIsInVybCIsInR5cGUiLCJlcnIiLCJ0ZXh0dXJlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQUMsRUFBQUEsTUF2Qkssb0JBdUJLLENBQ047QUFDSCxHQXpCSTtBQTJCTEMsRUFBQUEsS0EzQkssbUJBMkJJLENBRVIsQ0E3Qkk7QUErQkw7QUFFQUMsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQVU7QUFDVDtBQUNaO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLCtFQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYLENBSnFCLENBS3JCOztBQUNBUixJQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVUMsSUFBVixDQUFlO0FBQUVDLE1BQUFBLEdBQUcsRUFBRUosU0FBUDtBQUFrQkssTUFBQUEsSUFBSSxFQUFFO0FBQXhCLEtBQWYsRUFBZ0QsVUFBVUMsR0FBVixFQUFlQyxPQUFmLEVBQXdCO0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUpOLE1BQUFBLElBQUksQ0FBQ08sSUFBTCxDQUFVQyxZQUFWLENBQXVCaEIsRUFBRSxDQUFDaUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdELElBQUlsQixFQUFFLENBQUNtQixXQUFQLENBQW1CTCxPQUFuQixDQUFoRCxDQTdCd0UsQ0E4QnhFO0FBQ0E7QUFHQyxLQWxDRDtBQW1DUDtBQTFFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyB0aGlzLmxvYWRpbmdCYWNrZ3JvdW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGxvYWRpbmdCYWNrZ3JvdW5kOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDkuIvovb3otYTmupDljIVcclxuICAgICAgICAgICAgLy8g6L+c56iLIHVybCDluKblm77niYflkI7nvIDlkI1cclxuICAgICAgICAgICAgdmFyIHJlbW90ZVVybCA9IFwiaHR0cDovLzEyNy4wLjAuMS9jZXNoaS5waHA/dXJsPWh0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2xvYWRpbmcvbG9hZGluZy5qcGdcIjtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZChyZW1vdGVVcmwsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCwgdHlwZTogJ2pwZycgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gICDnm7TmjqXph4rmlL7mn5DkuKrotLTlm75cclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8g6YeK5pS+5LiA5LiqIHByZWZhYiDku6Xlj4rmiYDmnInlroPkvp3otZbnmoTotYTmupBcclxuICAgICAgICAgICAgICAgIC8vIHZhciBkZXBzID0gY2MubG9hZGVyLmdldERlcGVuZHNSZWN1cnNpdmVseSgndXJsX3Bob3RvJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2FkZXIucmVsZWFzZShkZXBzKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIOWmguaenOWcqOi/meS4qiBwcmVmYWIg5Lit5pyJ5LiA5Lqb5ZKM5Zy65pmv5YW25LuW6YOo5YiG5YWx5Lqr55qE6LWE5rqQ77yM5L2g5LiN5biM5pyb5a6D5Lus6KKr6YeK5pS+77yM5pyJ5Lik56eN5pa55rOV77yaXHJcbiAgICAgICAgICAgICAgICAvLyAvLyAxLiDmmL7lvI/lo7DmmI7npoHmraLmn5DkuKrotYTmupDnmoToh6rliqjph4rmlL5cclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5zZXRBdXRvUmVsZWFzZSh0aGlzLmJhY2tncm91bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIDIuIOWwhui/meS4qui1hOa6kOS7juS+nei1luWIl+ihqOS4reWIoOmZpFxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGRlcHMgPSBjYy5sb2FkZXIuZ2V0RGVwZW5kc1JlY3Vyc2l2ZWx5KCd1cmxfcGhvdG8nKTtcclxuICAgICAgICAgICAgICAgIC8vIHZhciBpbmRleCA9IGRlcHMuaW5kZXhPZih0aGlzLmJhY2tncm91bmQpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGluZGV4ICE9PSAtMSlcclxuICAgICAgICAgICAgICAgIC8vICAgICBkZXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2FkZXIucmVsZWFzZShkZXBzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSlcclxuICAgICAgICAgICAgICAgIC8vICAvLyDmlLnnlKggY2MudXJsLnJhd++8jOatpOaXtumcgOimgeWjsOaYjiByZXNvdXJjZXMg55uu5b2V5ZKM5paH5Lu25ZCO57yA5ZCNXHJcbiAgICAgICAgICAgICAgICAvLyAvLyAgdmFyIHJlYWxVcmwgPSBjYy51cmwucmF3KFwibG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vICB2YXIgdGV4dHVyZSA9IGNjLnRleHR1cmVDYWNoZS5hZGRJbWFnZShyZWFsVXJsKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCB0ZXh0dXJlKTsgICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSlcclxuICAgICAgICAgICAgLy8gc2VsZi5ub2RlLnNwcml0ZUZyYW1lLnNldFRleHR1cmUodGV4dHVyZS51cmwpO1xyXG4gICAgICAgICAgICAvLyBzZWxmLm5vZGUuc3ByaXRlRnJhbWUuc2V0Q29udGVudFNpemUocmVzLmdldENvbnRlbnRTaXplKCkpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/Alert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2045b71nHFDw7X/Kgx+6xMy', 'Alert');
// Script/login/Alert.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    _alert: null,
    //提示框
    _btnOK: null,
    //提示框确定按钮
    _btnCancel: null,
    //提示框取消按钮
    _title: null,
    //提示框标题
    _content: null,
    //提示框内容
    _btnOKCallback: null,
    //点击确定按钮的回调事件
    mask: {
      tyep: cc.node,
      "default": null
    },
    dlg: {
      tyep: cc.node,
      "default": null
    },
    server: {
      tyep: cc.node,
      "default": true
    },
    tips: {
      tyep: cc.node,
      "default": true
    },
    mask_opacity: 100
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () { },
  start: function start() {// this.node.active =false;
  },
  show_dlg: function show_dlg() {
    this.node.active = true; // this.mask,opacity = 0;
    // var ac1 =cc.fadeTo(0.3,this.mask_opacity);
    // this.mask.runAction(ac1);
    // this.dlg.scale =0;
    // var ac2 =cc.scaleTo(0.3,1).easing(cc.easeBackout());
    // this.dlg.runAction(ac2);
  },
  hidden_dlg: function hidden_dlg() {
    // var ac1 =cc.fadeOut(0.3);
    // this.mask.runAction(ac1);
    // var ac2 =cc.scaleTo(0.3,0).easing(cc.easeBackIn());
    // this.dlg.runAction(ac2);
    this.node.active = false; // 请求更换 server
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcQWxlcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJfYWxlcnQiLCJfYnRuT0siLCJfYnRuQ2FuY2VsIiwiX3RpdGxlIiwiX2NvbnRlbnQiLCJfYnRuT0tDYWxsYmFjayIsIm1hc2siLCJ0eWVwIiwibm9kZSIsImRsZyIsInNlcnZlciIsInRpcHMiLCJtYXNrX29wYWNpdHkiLCJzdGFydCIsInNob3dfZGxnIiwiYWN0aXZlIiwiaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBQyxJQURDO0FBQ0s7QUFDYkMsSUFBQUEsTUFBTSxFQUFDLElBRkM7QUFFSztBQUNiQyxJQUFBQSxVQUFVLEVBQUMsSUFISDtBQUdTO0FBQ2pCQyxJQUFBQSxNQUFNLEVBQUMsSUFKQztBQUlLO0FBQ2JDLElBQUFBLFFBQVEsRUFBQyxJQUxEO0FBS087QUFDZkMsSUFBQUEsY0FBYyxFQUFDLElBTlA7QUFNYTtBQUVyQkMsSUFBQUEsSUFBSSxFQUFDO0FBQ0RDLE1BQUFBLElBQUksRUFBQ1gsRUFBRSxDQUFDWSxJQURQO0FBRUQsaUJBQVE7QUFGUCxLQVJHO0FBWVJDLElBQUFBLEdBQUcsRUFBQztBQUNBRixNQUFBQSxJQUFJLEVBQUNYLEVBQUUsQ0FBQ1ksSUFEUjtBQUVBLGlCQUFRO0FBRlIsS0FaSTtBQWdCUkUsSUFBQUEsTUFBTSxFQUFDO0FBQ0hILE1BQUFBLElBQUksRUFBQ1gsRUFBRSxDQUFDWSxJQURMO0FBRUgsaUJBQVE7QUFGTCxLQWhCQztBQXFCUkcsSUFBQUEsSUFBSSxFQUFDO0FBQ0RKLE1BQUFBLElBQUksRUFBQ1gsRUFBRSxDQUFDWSxJQURQO0FBRUQsaUJBQVE7QUFGUCxLQXJCRztBQXlCUkksSUFBQUEsWUFBWSxFQUFFO0FBekJOLEdBSFA7QUErQkw7QUFFQTtBQUVBQyxFQUFBQSxLQW5DSyxtQkFtQ0ksQ0FDTDtBQUNILEdBckNJO0FBc0NMQyxFQUFBQSxRQXRDSyxzQkFzQ087QUFDUixTQUFLTixJQUFMLENBQVVPLE1BQVYsR0FBa0IsSUFBbEIsQ0FEUSxDQUVSO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVILEdBaERJO0FBa0RMQyxFQUFBQSxVQWxESyx3QkFrRFM7QUFFVjtBQUNBO0FBRUE7QUFDQTtBQUVBLFNBQUtSLElBQUwsQ0FBVU8sTUFBVixHQUFrQixLQUFsQixDQVJVLENBU1Y7QUFFSDtBQTdESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgX2FsZXJ0Om51bGwsIC8v5o+Q56S65qGGXHJcbiAgICAgICAgX2J0bk9LOm51bGwsIC8v5o+Q56S65qGG56Gu5a6a5oyJ6ZKuXHJcbiAgICAgICAgX2J0bkNhbmNlbDpudWxsLCAvL+aPkOekuuahhuWPlua2iOaMiemSrlxyXG4gICAgICAgIF90aXRsZTpudWxsLCAvL+aPkOekuuahhuagh+mimFxyXG4gICAgICAgIF9jb250ZW50Om51bGwsIC8v5o+Q56S65qGG5YaF5a65XHJcbiAgICAgICAgX2J0bk9LQ2FsbGJhY2s6bnVsbCwgLy/ngrnlh7vnoa7lrprmjInpkq7nmoTlm57osIPkuovku7ZcclxuXHJcbiAgICAgICAgbWFzazp7XHJcbiAgICAgICAgICAgIHR5ZXA6Y2Mubm9kZSxcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkbGc6e1xyXG4gICAgICAgICAgICB0eWVwOmNjLm5vZGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VydmVyOntcclxuICAgICAgICAgICAgdHllcDpjYy5ub2RlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OnRydWVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0aXBzOntcclxuICAgICAgICAgICAgdHllcDpjYy5ub2RlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hc2tfb3BhY2l0eTogMTAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkgeyB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLm1hc2ssb3BhY2l0eSA9IDA7XHJcbiAgICAgICAgLy8gdmFyIGFjMSA9Y2MuZmFkZVRvKDAuMyx0aGlzLm1hc2tfb3BhY2l0eSk7XHJcbiAgICAgICAgLy8gdGhpcy5tYXNrLnJ1bkFjdGlvbihhYzEpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmRsZy5zY2FsZSA9MDtcclxuICAgICAgICAvLyB2YXIgYWMyID1jYy5zY2FsZVRvKDAuMywxKS5lYXNpbmcoY2MuZWFzZUJhY2tvdXQoKSk7XHJcbiAgICAgICAgLy8gdGhpcy5kbGcucnVuQWN0aW9uKGFjMik7XHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIGhpZGRlbl9kbGcgKCkge1xyXG4gICBcclxuICAgICAgICAvLyB2YXIgYWMxID1jYy5mYWRlT3V0KDAuMyk7XHJcbiAgICAgICAgLy8gdGhpcy5tYXNrLnJ1bkFjdGlvbihhYzEpO1xyXG5cclxuICAgICAgICAvLyB2YXIgYWMyID1jYy5zY2FsZVRvKDAuMywwKS5lYXNpbmcoY2MuZWFzZUJhY2tJbigpKTtcclxuICAgICAgICAvLyB0aGlzLmRsZy5ydW5BY3Rpb24oYWMyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICAgICAgLy8g6K+35rGC5pu05o2iIHNlcnZlclxyXG5cclxuICAgIH0sXHJcbiAgICBcclxuXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bage/Conf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97691f40R5PXJGQYZGIsa5O', 'Conf');
// Script/bage/Conf.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOOLS = void 0;
var TOOLS = [{
  name: '卷轴',
  // 道具名称，对应resources/tools中的图片名字
  intro: '这是一个卷轴',
  // 道具介绍，当玩家在背包中点击道具后，显示介绍
  picUrl: 'tools/卷轴' // 动态加载路径

}, {
  name: '心经',
  intro: '欲练此功，必先自宫',
  picUrl: 'tools/心经'
}, {
  name: '火腿',
  intro: '来自金华',
  picUrl: 'tools/火腿'
}, {
  name: '煎饺',
  intro: '挺好吃的',
  picUrl: 'tools/煎饺'
}, {
  name: '烈酒',
  intro: '武松当年喝这个的话，可能过不了岗',
  picUrl: 'tools/烈酒'
}, {
  name: '金钥匙',
  intro: '金色的要钥匙',
  picUrl: 'tools/金钥匙'
}, {
  name: '银钥匙',
  intro: '银色的钥匙',
  picUrl: 'tools/银钥匙'
}, {
  name: '黄石',
  intro: '来自黄石公园的石头叫做黄石',
  picUrl: 'tools/黄石'
}];
exports.TOOLS = TOOLS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxiYWdlXFxDb25mLmpzIl0sIm5hbWVzIjpbIlRPT0xTIiwibmFtZSIsImludHJvIiwicGljVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUcsQ0FDVjtBQUNJQyxFQUFBQSxJQUFJLEVBQUUsSUFEVjtBQUN1QztBQUNuQ0MsRUFBQUEsS0FBSyxFQUFFLFFBRlg7QUFFb0M7QUFDaENDLEVBQUFBLE1BQU0sRUFBRSxVQUhaLENBR3VDOztBQUh2QyxDQURVLEVBTVY7QUFDSUYsRUFBQUEsSUFBSSxFQUFFLElBRFY7QUFFSUMsRUFBQUEsS0FBSyxFQUFFLFdBRlg7QUFHSUMsRUFBQUEsTUFBTSxFQUFFO0FBSFosQ0FOVSxFQVdWO0FBQ0lGLEVBQUFBLElBQUksRUFBRSxJQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRSxNQUZYO0FBR0lDLEVBQUFBLE1BQU0sRUFBRTtBQUhaLENBWFUsRUFnQlY7QUFDSUYsRUFBQUEsSUFBSSxFQUFFLElBRFY7QUFFSUMsRUFBQUEsS0FBSyxFQUFFLE1BRlg7QUFHSUMsRUFBQUEsTUFBTSxFQUFFO0FBSFosQ0FoQlUsRUFxQlY7QUFDSUYsRUFBQUEsSUFBSSxFQUFFLElBRFY7QUFFSUMsRUFBQUEsS0FBSyxFQUFFLGtCQUZYO0FBR0lDLEVBQUFBLE1BQU0sRUFBRTtBQUhaLENBckJVLEVBMEJWO0FBQ0lGLEVBQUFBLElBQUksRUFBRSxLQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRSxRQUZYO0FBR0lDLEVBQUFBLE1BQU0sRUFBRTtBQUhaLENBMUJVLEVBK0JWO0FBQ0lGLEVBQUFBLElBQUksRUFBRSxLQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRSxPQUZYO0FBR0lDLEVBQUFBLE1BQU0sRUFBRTtBQUhaLENBL0JVLEVBb0NWO0FBQ0lGLEVBQUFBLElBQUksRUFBRSxJQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRSxlQUZYO0FBR0lDLEVBQUFBLE1BQU0sRUFBRTtBQUhaLENBcENVLENBQWQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRPT0xTID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ+WNt+i9tCcsICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YGT5YW35ZCN56ew77yM5a+55bqUcmVzb3VyY2VzL3Rvb2xz5Lit55qE5Zu+54mH5ZCN5a2XXG4gICAgICAgIGludHJvOiAn6L+Z5piv5LiA5Liq5Y236L20JywgICAgICAgICAgICAgICAgLy8g6YGT5YW35LuL57uN77yM5b2T546p5a625Zyo6IOM5YyF5Lit54K55Ye76YGT5YW35ZCO77yM5pi+56S65LuL57uNXG4gICAgICAgIHBpY1VybDogJ3Rvb2xzL+WNt+i9tCcgICAgICAgICAgICAgICAgIC8vIOWKqOaAgeWKoOi9vei3r+W+hFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAn5b+D57uPJyxcbiAgICAgICAgaW50cm86ICfmrLLnu4PmraTlip/vvIzlv4XlhYjoh6rlrqsnLFxuICAgICAgICBwaWNVcmw6ICd0b29scy/lv4Pnu48nICAgICAgICAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICfngavohb8nLFxuICAgICAgICBpbnRybzogJ+adpeiHqumHkeWNjicsXG4gICAgICAgIHBpY1VybDogJ3Rvb2xzL+eBq+iFvycgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICfnhY7ppbonLFxuICAgICAgICBpbnRybzogJ+aMuuWlveWQg+eahCcsXG4gICAgICAgIHBpY1VybDogJ3Rvb2xzL+eFjumluicgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICfng4jphZInLFxuICAgICAgICBpbnRybzogJ+atpuadvuW9k+W5tOWWnei/meS4queahOivne+8jOWPr+iDvei/h+S4jeS6huWylycsXG4gICAgICAgIHBpY1VybDogJ3Rvb2xzL+eDiOmFkicgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICfph5HpkqXljJknLFxuICAgICAgICBpbnRybzogJ+mHkeiJsueahOimgemSpeWMmScsXG4gICAgICAgIHBpY1VybDogJ3Rvb2xzL+mHkemSpeWMmSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ+mTtumSpeWMmScsXG4gICAgICAgIGludHJvOiAn6ZO26Imy55qE6ZKl5YyZJyxcbiAgICAgICAgcGljVXJsOiAndG9vbHMv6ZO26ZKl5YyZJyBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ+m7hOefsycsXG4gICAgICAgIGludHJvOiAn5p2l6Ieq6buE55+z5YWs5Zut55qE55+z5aS05Y+r5YGa6buE55+zJyxcbiAgICAgICAgcGljVXJsOiAndG9vbHMv6buE55+zJyBcbiAgICB9XG5dO1xuXG5leHBvcnQge1RPT0xTfTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/myserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bfe2c9uBzZLZbQL4m1ej4tE', 'myserver');
// Script/login/myserver.js

"use strict";

var HttpHelper = require("http"); // var fs = require('fs'); // 引入fs模块
// var globaluserinfo = require("GlobaluserInfo");


var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {
    editbox: cc.EditBox
  },
  onLoad: function onLoad() {
    // 操作文本--读取用户信息
    this.tokenlogin(); // 快捷登录
    // // 账号密码登录
    // this.login();
    //储存缓存
    // cc.sys.localStorage.setItem('token', value);
    // cc.sys.localStorage.getItem(key);
    // cc.sys.localStorage.removeItem(key);
  },
  tokenlogin: function tokenlogin() {
    // 获取本地json  信息
    // cc.loader.load( cc.url.raw("resources/login.json"),function(err,res){  
    cc.loader.loadRes('login.json', function (err, res) {
      //默认resources
      var json = res.json;
      var params = {
        'token': json.token
      };
      cc.log(json.token);
      var res = httpRequest.httpPost('http://www.monster.com/app/api-server/token-login', params, function (data) {
        cc.loader.release('resources/login.json'); //释放json 资源
        // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // 未登录弹出登录

        if (data.code == 0) {// this.loginbox.node.active = false;  // 进度隐藏
        }
      });
    });
  },
  login: function login() {
    var params = {
      'loginname': 'yincan1993',
      'password': 123456
    };
    httpRequest.httpPost('http://www.monster.com/app/api-server/login', params, function (data) {// cc.log(data); 
      //操作文本--修改用户信息
    });
  },
  btnClick1: function btnClick1(event, customEventData) {
    // // 请求登录接口
    // var params = {
    //         'loginname': 'yincan1993',
    //         'password': 123456,
    //         'serverid': 1,
    // };
    // cc.sys.localStorage.setItem('params', JSON.stringify(params));
    var params = JSON.parse(cc.sys.localStorage.getItem("params")); // cc.log(value); 
    // let httpRequest =  new HttpHelper();  

    httpRequest.httpPost('http://www.monster.com/app/api-server/user-login', params, function (data) {
      cc.log(data);

      if (data.code == 0) {// 登录失败，或本地数据失效
        // 弹窗
      } else {
        // 设置服务器
        cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));

        if (data.code == 1) {
          // 登录成功，进入游戏
          // cc.log(data.data.userinfo); 
          cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          cc.director.loadScene('home/dating'); // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          // cc.sys.localStorage.getItem(key); //读取数据
        }

        if (data.code == 2) {
          // 登录成功，未定义角色
          // 进入定义角色界面     
          var server = JSON.parse(cc.sys.localStorage.getItem('server')); // cc.log(server); 
          // 创建角色

          cc.director.loadScene('register');
        }
      }
    }); //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
    // var node = event.target;
    // var button = node.getComponent(cc.Button);
    //这里的 customEventData 参数就等于你之前设置的 "click1 user data"
    // cc.log("node=", node.name, " event=", event.type, " data=", customEventData);
  },
  callback: function callback(event) {
    // cc.log(data)
    // var userCount =  cc.find("Canvas/ground/editbox_count").getComponent(cc.EditBox).string;
    // var userPassward =  cc.find("Canvas/ground/editbox_passward").getComponent(cc.EditBox).string;
    // console.log("用户账号："+userCount+ "用户密码："+ userPassward);
    // HttpHelp.login(userCount,userPassward,function(isSuccess,Data){
    //     var info = Data;
    //     if(true == isSuccess){
    //         console.log("login  success!!!");
    //         console.log(info);
    //         globaluserinfo.username = info.username;
    //         globaluserinfo.gamepoint = info.gamepoint;
    //         globaluserinfo.skey = info.skey;
    //         globaluserinfo.userid = info.userid;
    //         globaluserinfo.money = info.money;
    //         globaluserinfo.userid = info.userid;
    //         globaluserinfo.password = info.password;
    //         globaluserinfo.salt = info.salt;
    //         //登录成功后加载地图资源
    cc.director.loadScene('map'); //     }else{
    //         console.log("login  filed!!!")
    //     }
    // });
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbXlzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZWRpdGJveCIsIkVkaXRCb3giLCJvbkxvYWQiLCJ0b2tlbmxvZ2luIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsInJlcyIsImpzb24iLCJwYXJhbXMiLCJ0b2tlbiIsImxvZyIsImh0dHBQb3N0IiwiZGF0YSIsInJlbGVhc2UiLCJjb2RlIiwibG9naW4iLCJidG5DbGljazEiLCJldmVudCIsImN1c3RvbUV2ZW50RGF0YSIsIkpTT04iLCJwYXJzZSIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2VydmVyIiwidXNlcmluZm8iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImNhbGxiYWNrIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4QixFQUNBO0FBQ0E7OztBQUNBLElBQUlDLFdBQVcsR0FBSSxJQUFJRixVQUFKLEVBQW5CO0FBQ0FHLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUVKLEVBQUUsQ0FBQ0s7QUFESixHQUhQO0FBT0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUVoQjtBQUNBLFNBQUtDLFVBQUwsR0FIZ0IsQ0FHRztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxHQWxCSTtBQW9CTEEsRUFBQUEsVUFBVSxFQUFFLHNCQUFVO0FBQ2xCO0FBQ0E7QUFDQVAsSUFBQUEsRUFBRSxDQUFDUSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsWUFBbEIsRUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDUXRCLElBQUFBLEVBQUUsQ0FBQ2lDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixLQUF0QixFQXJCZSxDQXNCdkI7QUFDQTtBQUNBO0FBQ0E7QUFFSCxHQWxJSTtBQW9JTEUsRUFBQUEsS0FwSUssbUJBb0lJLENBRVIsQ0F0SUksQ0F3SUw7O0FBeElLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG4vLyB2YXIgZnMgPSByZXF1aXJlKCdmcycpOyAvLyDlvJXlhaVmc+aooeWdl1xyXG4vLyB2YXIgZ2xvYmFsdXNlcmluZm8gPSByZXF1aXJlKFwiR2xvYmFsdXNlckluZm9cIik7XHJcbmxldCBodHRwUmVxdWVzdCA9ICBuZXcgSHR0cEhlbHBlcigpOyAgXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuIFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGVkaXRib3g6IGNjLkVkaXRCb3hcclxuICAgIH0sXHJcbiBcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyDmk43kvZzmlofmnKwtLeivu+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICAgIHRoaXMudG9rZW5sb2dpbigpOyAvLyDlv6vmjbfnmbvlvZVcclxuXHJcbiAgICAgICAgLy8gLy8g6LSm5Y+35a+G56CB55m75b2VXHJcbiAgICAgICAgLy8gdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIC8v5YKo5a2Y57yT5a2YXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHZhbHVlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH0sXHJcbiAgICAgXHJcbiAgICB0b2tlbmxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIOiOt+WPluacrOWcsGpzb24gIOS/oeaBr1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKCBjYy51cmwucmF3KFwicmVzb3VyY2VzL2xvZ2luLmpzb25cIiksZnVuY3Rpb24oZXJyLHJlcyl7ICBcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbG9naW4uanNvbicsZnVuY3Rpb24oZXJyLHJlcyl7ICAgLy/pu5jorqRyZXNvdXJjZXNcclxuICAgICAgICAgICAgbGV0IGpzb24gPSByZXMuanNvbjtcclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IGpzb24udG9rZW4sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvZyhqc29uLnRva2VuKTsgXHJcbiAgICAgICAgICAgIHZhciByZXMgPSBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cDovL3d3dy5tb25zdGVyLmNvbS9hcHAvYXBpLXNlcnZlci90b2tlbi1sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAvLyBpZihjYy5zeXMuaXNOYXRpdmUpeyAgLy8gIGpzYi5maWxlVXRpbHPkuI3mlK/mjIEgd2ViICDor7vlhplcclxuICAgICAgICAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgLy8g5pyq55m75b2V5by55Ye655m75b2VXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBsb2dpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgICAgICAgICAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cDovL3d3dy5tb25zdGVyLmNvbS9hcHAvYXBpLXNlcnZlci9sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgLy/mk43kvZzmlofmnKwtLeS/ruaUueeUqOaIt+S/oeaBr1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYnRuQ2xpY2sxOiBmdW5jdGlvbiAoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLy8g6K+35rGC55m75b2V5o6l5Y+jXHJcbiAgICAgICAgLy8gdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgLy8gICAgICAgICAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgLy8gICAgICAgICAnc2VydmVyaWQnOiAxLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJhbXMnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXJhbXNcIikpO1xyXG4gICAgICAgIC8vIGNjLmxvZyh2YWx1ZSk7IFxyXG4gICAgICAgIC8vIGxldCBodHRwUmVxdWVzdCA9ICBuZXcgSHR0cEhlbHBlcigpOyAgXHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2FwaS1zZXJ2ZXIvdXNlci1sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0wKXsgLy8g55m75b2V5aSx6LSl77yM5oiW5pys5Zyw5pWw5o2u5aSx5pWIXHJcbiAgICAgICAgICAgICAgICAvLyDlvLnnqpdcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyDorr7nva7mnI3liqHlmahcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VydmVyJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnNlcnZlcikpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXsvLyDnmbvlvZXmiJDlip/vvIzov5vlhaXmuLjmiI9cclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YS5kYXRhLnVzZXJpbmZvKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyaW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS51c2VyaW5mbykpOyBcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2hvbWUvZGF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyaW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS51c2VyaW5mbykpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpOyAvL+ivu+WPluaVsOaNrlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0yKXsgLy8g55m75b2V5oiQ5Yqf77yM5pyq5a6a5LmJ6KeS6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6L+b5YWl5a6a5LmJ6KeS6Imy55WM6Z2iICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VydmVyID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcnZlcicpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coc2VydmVyKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yib5bu66KeS6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdyZWdpc3RlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v6L+Z6YeMIGV2ZW50IOaYr+S4gOS4qiBUb3VjaCBFdmVudCDlr7nosaHvvIzkvaDlj6/ku6XpgJrov4cgZXZlbnQudGFyZ2V0IOWPluWIsOS6i+S7tueahOWPkemAgeiKgueCuVxyXG4gICAgICAgIC8vIHZhciBub2RlID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIC8vIHZhciBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIC8v6L+Z6YeM55qEIGN1c3RvbUV2ZW50RGF0YSDlj4LmlbDlsLHnrYnkuo7kvaDkuYvliY3orr7nva7nmoQgXCJjbGljazEgdXNlciBkYXRhXCJcclxuICAgICAgICAvLyBjYy5sb2coXCJub2RlPVwiLCBub2RlLm5hbWUsIFwiIGV2ZW50PVwiLCBldmVudC50eXBlLCBcIiBkYXRhPVwiLCBjdXN0b21FdmVudERhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gY2MubG9nKGRhdGEpXHJcbiAgICAgICAgLy8gdmFyIHVzZXJDb3VudCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X2NvdW50XCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8gdmFyIHVzZXJQYXNzd2FyZCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X3Bhc3N3YXJkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnlKjmiLfotKblj7fvvJpcIit1c2VyQ291bnQrIFwi55So5oi35a+G56CB77yaXCIrIHVzZXJQYXNzd2FyZCk7XHJcbiAgICAgICAgLy8gSHR0cEhlbHAubG9naW4odXNlckNvdW50LHVzZXJQYXNzd2FyZCxmdW5jdGlvbihpc1N1Y2Nlc3MsRGF0YSl7XHJcbiAgICAgICAgLy8gICAgIHZhciBpbmZvID0gRGF0YTtcclxuICAgICAgICAvLyAgICAgaWYodHJ1ZSA9PSBpc1N1Y2Nlc3Mpe1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgc3VjY2VzcyEhIVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcm5hbWUgPSBpbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uZ2FtZXBvaW50ID0gaW5mby5nYW1lcG9pbnQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5za2V5ID0gaW5mby5za2V5O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLm1vbmV5ID0gaW5mby5tb25leTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ucGFzc3dvcmQgPSBpbmZvLnBhc3N3b3JkO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2FsdCA9IGluZm8uc2FsdDtcclxuIFxyXG4gICAgICAgIC8vICAgICAgICAgLy/nmbvlvZXmiJDlip/lkI7liqDovb3lnLDlm77otYTmupBcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwJyk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgZmlsZWQhISFcIilcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gXHJcbiAgICB9LFxyXG4gXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/popup_dlg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f10d1IxjONKCYev3tfm660U', 'popup_dlg');
// Script/login/popup_dlg.js

"use strict";

// popup_dlg.js
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
    mask: {
      type: cc.Node,
      "default": null
    },
    mask_opacity: 128,
    content: {
      type: cc.Node,
      "default": null
    }
  },
  // use this for initialization
  onLoad: function onLoad() {},
  show_dlg: function show_dlg() {
    this.node.active = true; // mask 渐变出来;

    this.mask.opacity = 0;
    var fin = cc.fadeTo(0.3, this.mask_opacity);
    this.mask.runAction(fin); // dlg由小到大

    this.content.scale = 0;
    var s = cc.scaleTo(0.4, 1).easing(cc.easeBackOut());
    this.content.runAction(s);
  },
  hide_dlg: function hide_dlg() {
    // 
    var fout = cc.fadeOut(0.3);
    this.mask.runAction(fout);
    var s = cc.scaleTo(0.3, 0).easing(cc.easeBackIn());
    var end_func = cc.callFunc(function () {
      this.node.active = false;
    }.bind(this));
    var seq = cc.sequence([s, end_func]);
    this.content.runAction(seq);
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccG9wdXBfZGxnLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWFzayIsInR5cGUiLCJOb2RlIiwibWFza19vcGFjaXR5IiwiY29udGVudCIsIm9uTG9hZCIsInNob3dfZGxnIiwibm9kZSIsImFjdGl2ZSIsIm9wYWNpdHkiLCJmaW4iLCJmYWRlVG8iLCJydW5BY3Rpb24iLCJzY2FsZSIsInMiLCJzY2FsZVRvIiwiZWFzaW5nIiwiZWFzZUJhY2tPdXQiLCJoaWRlX2RsZyIsImZvdXQiLCJmYWRlT3V0IiwiZWFzZUJhY2tJbiIsImVuZF9mdW5jIiwiY2FsbEZ1bmMiLCJiaW5kIiwic2VxIiwic2VxdWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQ0EsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNEO0FBQ0M7QUFDRDtBQUNDO0FBQ0M7QUFDRDtBQUNBO0FBQ0M7QUFDQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQURQO0FBRUosaUJBQVM7QUFGTCxLQVhDO0FBZ0JQQyxJQUFBQSxZQUFZLEVBQUUsR0FoQlA7QUFrQlJDLElBQUFBLE9BQU8sRUFBRTtBQUNMSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFESjtBQUVKLGlCQUFTO0FBRkw7QUFsQkQsR0FGTjtBQTJCTjtBQUNDRyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FFcEIsQ0E5Qks7QUFnQ0xDLEVBQUFBLFFBQVEsRUFBRSxvQkFBVztBQUNqQixTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkIsQ0FEaUIsQ0FFakI7O0FBQ0EsU0FBS1IsSUFBTCxDQUFVUyxPQUFWLEdBQW9CLENBQXBCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHZCxFQUFFLENBQUNlLE1BQUgsQ0FBVSxHQUFWLEVBQWUsS0FBS1IsWUFBcEIsQ0FBVjtBQUNELFNBQUtILElBQUwsQ0FBVVksU0FBVixDQUFvQkYsR0FBcEIsRUFMa0IsQ0FNckI7O0FBRUcsU0FBS04sT0FBTCxDQUFhUyxLQUFiLEdBQXFCLENBQXJCO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHbEIsRUFBRSxDQUFDbUIsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsRUFBbUJDLE1BQW5CLENBQTBCcEIsRUFBRSxDQUFDcUIsV0FBSCxFQUExQixDQUFSO0FBQ0MsU0FBS2IsT0FBTCxDQUFhUSxTQUFiLENBQXVCRSxDQUF2QjtBQUNILEdBM0NJO0FBNkNMSSxFQUFBQSxRQUFRLEVBQUUsb0JBQVc7QUFDakI7QUFDQSxRQUFJQyxJQUFJLEdBQUd2QixFQUFFLENBQUN3QixPQUFILENBQVcsR0FBWCxDQUFYO0FBQ0YsU0FBS3BCLElBQUwsQ0FBVVksU0FBVixDQUFvQk8sSUFBcEI7QUFFQyxRQUFJTCxDQUFDLEdBQUdsQixFQUFFLENBQUNtQixPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixFQUFtQkMsTUFBbkIsQ0FBMEJwQixFQUFFLENBQUN5QixVQUFILEVBQTFCLENBQVI7QUFDQSxRQUFJQyxRQUFRLEdBQUcxQixFQUFFLENBQUMyQixRQUFILENBQVksWUFBVztBQUNqQyxXQUFLaEIsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsS0FGeUIsQ0FFeEJnQixJQUZ3QixDQUVuQixJQUZtQixDQUFaLENBQWY7QUFJQyxRQUFJQyxHQUFHLEdBQUc3QixFQUFFLENBQUM4QixRQUFILENBQVksQ0FBQ1osQ0FBRCxFQUFJUSxRQUFKLENBQVosQ0FBVjtBQUNELFNBQUtsQixPQUFMLENBQWFRLFNBQWIsQ0FBdUJhLEdBQXZCO0FBQ0YsR0F6REksQ0EwREw7QUFDQTtBQUVBOztBQTdESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwb3B1cF9kbGcuanNcclxuIGNjLkNsYXNzKHtcclxuICAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAvLyAuLi5cclxuICAgICAgICAgbWFzazoge1xyXG4gICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICB9LFxyXG4gXHJcbiAgICAgICAgIG1hc2tfb3BhY2l0eTogMTI4LFxyXG4gXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAgc2hvd19kbGc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgLy8gbWFzayDmuJDlj5jlh7rmnaU7XHJcbiAgICAgICAgIHRoaXMubWFzay5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgdmFyIGZpbiA9IGNjLmZhZGVUbygwLjMsIHRoaXMubWFza19vcGFjaXR5KTtcclxuICAgICAgICB0aGlzLm1hc2sucnVuQWN0aW9uKGZpbik7XHJcbiAgICAgLy8gZGxn55Sx5bCP5Yiw5aSnXHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5zY2FsZSA9IDA7XHJcbiAgICAgICAgdmFyIHMgPSBjYy5zY2FsZVRvKDAuNCwgMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpO1xyXG4gICAgICAgICB0aGlzLmNvbnRlbnQucnVuQWN0aW9uKHMpO1xyXG4gICAgIH0sXHJcbiBcclxuICAgICBoaWRlX2RsZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIC8vIFxyXG4gICAgICAgICB2YXIgZm91dCA9IGNjLmZhZGVPdXQoMC4zKTtcclxuICAgICAgIHRoaXMubWFzay5ydW5BY3Rpb24oZm91dCk7XHJcblxyXG4gICAgICAgIHZhciBzID0gY2Muc2NhbGVUbygwLjMsIDApLmVhc2luZyhjYy5lYXNlQmFja0luKCkpO1xyXG4gICAgICAgIHZhciBlbmRfZnVuYyA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKFtzLCBlbmRfZnVuY10pO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5ydW5BY3Rpb24oc2VxKTtcclxuICAgICB9LFxyXG4gICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAgLy8gfSxcclxuIH0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/jspfile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '418e4mQmD5NULo0MWDBNMnw', 'jspfile');
// Script/login/jspfile.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
  },
  // use this for initialization
  onLoad: function onLoad() {
    // jsb.fileUtils获取全局的工具类的实例, cc.director;
    // 如果是在电脑的模拟器上，就会是安装路径下模拟器的位置;
    // 如果是手机上，那么就是手机OS为这个APP分配的可以读写的路径; 
    // jsb --> javascript binding --> jsb是不支持h5的
    var writeable_path = jsb.fileUtils.getWritablePath();
    console.log(writeable_path); // 要在可写的路径先创建一个文件夹

    var new_dir = writeable_path + "new_dir"; // 路径也可以是 外部存储的路径，只要你有可写外部存储的权限;
    // getWritablePath这个路径下，会随着我们的程序卸载而删除,外部存储除非你自己删除，否者的话，卸载APP数据还在;

    if (!jsb.fileUtils.isDirectoryExist(new_dir)) {
      jsb.fileUtils.createDirectory(new_dir);
    } else {
      console.log("dir is exist!!!");
    } // 读写文件我们分两种,文本文件, 二进制文件;
    // (1)文本文件的读,返回的是一个string对象


    var str_data = jsb.fileUtils.getStringFromFile(new_dir + "/test_str_read.txt");
    console.log(str_data);
    str_data = "hello test_write !!!!!";
    jsb.fileUtils.writeStringToFile(str_data, new_dir + "/test_str_write.txt"); // (2)二进制文件的读写, Uint8Array --> js对象

    var bin_array = jsb.fileUtils.getDataFromFile(new_dir + "/test_bin_read.png");
    console.log(bin_array[0], bin_array[1]); // 使用这个就能访问二进制的每一个字节数据;

    jsb.fileUtils.writeDataToFile(bin_array, new_dir + "/test_bin_write.png"); // end 
    // 删除文件和文件夹
    // jsb.fileUtils.removeFile(new_dir + "/test_bin_write.png"); 
    // jsb.fileUtils.removeDirectory(new_dir);
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcanNwZmlsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIndyaXRlYWJsZV9wYXRoIiwianNiIiwiZmlsZVV0aWxzIiwiZ2V0V3JpdGFibGVQYXRoIiwiY29uc29sZSIsImxvZyIsIm5ld19kaXIiLCJpc0RpcmVjdG9yeUV4aXN0IiwiY3JlYXRlRGlyZWN0b3J5Iiwic3RyX2RhdGEiLCJnZXRTdHJpbmdGcm9tRmlsZSIsIndyaXRlU3RyaW5nVG9GaWxlIiwiYmluX2FycmF5IiwiZ2V0RGF0YUZyb21GaWxlIiwid3JpdGVEYXRhVG9GaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZRLEdBSFA7QUFnQkw7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBSUMsY0FBYyxHQUFHQyxHQUFHLENBQUNDLFNBQUosQ0FBY0MsZUFBZCxFQUFyQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsY0FBWixFQU5nQixDQVNoQjs7QUFDQSxRQUFJTSxPQUFPLEdBQUdOLGNBQWMsR0FBRyxTQUEvQixDQVZnQixDQVdoQjtBQUNBOztBQUNBLFFBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxTQUFKLENBQWNLLGdCQUFkLENBQStCRCxPQUEvQixDQUFKLEVBQTZDO0FBQ3pDTCxNQUFBQSxHQUFHLENBQUNDLFNBQUosQ0FBY00sZUFBZCxDQUE4QkYsT0FBOUI7QUFDSCxLQUZELE1BR0s7QUFDREYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDSCxLQWxCZSxDQW9CaEI7QUFDQTs7O0FBQ0EsUUFBSUksUUFBUSxHQUFHUixHQUFHLENBQUNDLFNBQUosQ0FBY1EsaUJBQWQsQ0FBZ0NKLE9BQU8sR0FBRyxvQkFBMUMsQ0FBZjtBQUNBRixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWjtBQUNBQSxJQUFBQSxRQUFRLEdBQUcsd0JBQVg7QUFDQVIsSUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWNTLGlCQUFkLENBQWdDRixRQUFoQyxFQUEwQ0gsT0FBTyxHQUFHLHFCQUFwRCxFQXpCZ0IsQ0EwQmhCOztBQUNBLFFBQUlNLFNBQVMsR0FBR1gsR0FBRyxDQUFDQyxTQUFKLENBQWNXLGVBQWQsQ0FBOEJQLE9BQU8sR0FBRyxvQkFBeEMsQ0FBaEI7QUFDQUYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlPLFNBQVMsQ0FBQyxDQUFELENBQXJCLEVBQTBCQSxTQUFTLENBQUMsQ0FBRCxDQUFuQyxFQTVCZ0IsQ0E0QnlCOztBQUN6Q1gsSUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWNZLGVBQWQsQ0FBOEJGLFNBQTlCLEVBQXlDTixPQUFPLEdBQUcscUJBQW5ELEVBN0JnQixDQThCaEI7QUFFQTtBQUNBO0FBQ0E7QUFDSCxHQXBESSxDQXNETDtBQUNBO0FBRUE7O0FBekRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBqc2IuZmlsZVV0aWxz6I635Y+W5YWo5bGA55qE5bel5YW357G755qE5a6e5L6LLCBjYy5kaXJlY3RvcjtcclxuICAgICAgICAvLyDlpoLmnpzmmK/lnKjnlLXohJHnmoTmqKHmi5/lmajkuIrvvIzlsLHkvJrmmK/lronoo4Xot6/lvoTkuIvmqKHmi5/lmajnmoTkvY3nva47XHJcbiAgICAgICAgLy8g5aaC5p6c5piv5omL5py65LiK77yM6YKj5LmI5bCx5piv5omL5py6T1PkuLrov5nkuKpBUFDliIbphY3nmoTlj6/ku6Xor7vlhpnnmoTot6/lvoQ7IFxyXG4gICAgICAgIC8vIGpzYiAtLT4gamF2YXNjcmlwdCBiaW5kaW5nIC0tPiBqc2LmmK/kuI3mlK/mjIFoNeeahFxyXG4gICAgICAgIHZhciB3cml0ZWFibGVfcGF0aCA9IGpzYi5maWxlVXRpbHMuZ2V0V3JpdGFibGVQYXRoKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cod3JpdGVhYmxlX3BhdGgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8g6KaB5Zyo5Y+v5YaZ55qE6Lev5b6E5YWI5Yib5bu65LiA5Liq5paH5Lu25aS5XHJcbiAgICAgICAgdmFyIG5ld19kaXIgPSB3cml0ZWFibGVfcGF0aCArIFwibmV3X2RpclwiO1xyXG4gICAgICAgIC8vIOi3r+W+hOS5n+WPr+S7peaYryDlpJbpg6jlrZjlgqjnmoTot6/lvoTvvIzlj6ropoHkvaDmnInlj6/lhpnlpJbpg6jlrZjlgqjnmoTmnYPpmZA7XHJcbiAgICAgICAgLy8gZ2V0V3JpdGFibGVQYXRo6L+Z5Liq6Lev5b6E5LiL77yM5Lya6ZqP552A5oiR5Lus55qE56iL5bqP5Y246L296ICM5Yig6ZmkLOWklumDqOWtmOWCqOmZpOmdnuS9oOiHquW3seWIoOmZpO+8jOWQpuiAheeahOivne+8jOWNuOi9vUFQUOaVsOaNrui/mOWcqDtcclxuICAgICAgICBpZighanNiLmZpbGVVdGlscy5pc0RpcmVjdG9yeUV4aXN0KG5ld19kaXIpKSB7XHJcbiAgICAgICAgICAgIGpzYi5maWxlVXRpbHMuY3JlYXRlRGlyZWN0b3J5KG5ld19kaXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXIgaXMgZXhpc3QhISFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOivu+WGmeaWh+S7tuaIkeS7rOWIhuS4pOenjSzmlofmnKzmlofku7YsIOS6jOi/m+WItuaWh+S7tjtcclxuICAgICAgICAvLyAoMSnmlofmnKzmlofku7bnmoTor7ss6L+U5Zue55qE5piv5LiA5Liqc3RyaW5n5a+56LGhXHJcbiAgICAgICAgdmFyIHN0cl9kYXRhID0ganNiLmZpbGVVdGlscy5nZXRTdHJpbmdGcm9tRmlsZShuZXdfZGlyICsgXCIvdGVzdF9zdHJfcmVhZC50eHRcIik7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cl9kYXRhKTtcclxuICAgICAgICBzdHJfZGF0YSA9IFwiaGVsbG8gdGVzdF93cml0ZSAhISEhIVwiXHJcbiAgICAgICAganNiLmZpbGVVdGlscy53cml0ZVN0cmluZ1RvRmlsZShzdHJfZGF0YSwgbmV3X2RpciArIFwiL3Rlc3Rfc3RyX3dyaXRlLnR4dFwiKTtcclxuICAgICAgICAvLyAoMinkuozov5vliLbmlofku7bnmoTor7vlhpksIFVpbnQ4QXJyYXkgLS0+IGpz5a+56LGhXHJcbiAgICAgICAgdmFyIGJpbl9hcnJheSA9IGpzYi5maWxlVXRpbHMuZ2V0RGF0YUZyb21GaWxlKG5ld19kaXIgKyBcIi90ZXN0X2Jpbl9yZWFkLnBuZ1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhiaW5fYXJyYXlbMF0sIGJpbl9hcnJheVsxXSk7IC8vIOS9v+eUqOi/meS4quWwseiDveiuv+mXruS6jOi/m+WItueahOavj+S4gOS4quWtl+iKguaVsOaNrjtcclxuICAgICAgICBqc2IuZmlsZVV0aWxzLndyaXRlRGF0YVRvRmlsZShiaW5fYXJyYXksIG5ld19kaXIgKyBcIi90ZXN0X2Jpbl93cml0ZS5wbmdcIik7XHJcbiAgICAgICAgLy8gZW5kIFxyXG5cclxuICAgICAgICAvLyDliKDpmaTmlofku7blkozmlofku7blpLlcclxuICAgICAgICAvLyBqc2IuZmlsZVV0aWxzLnJlbW92ZUZpbGUobmV3X2RpciArIFwiL3Rlc3RfYmluX3dyaXRlLnBuZ1wiKTsgXHJcbiAgICAgICAgLy8ganNiLmZpbGVVdGlscy5yZW1vdmVEaXJlY3RvcnkobmV3X2Rpcik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77e07WCeNBJrJqHjwTfqjkf', 'loading');
// Script/login/loading.js

"use strict";

var self = void 0;
cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    progressBar: {
      "default": null,
      type: cc.ProgressBar,
      text: cc.Sprite
    },
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
    bmp_font: {
      "default": null,
      type: cc.Label
    } // //默认头像
    // headpic:{
    //     type:cc.SpriteFrame,
    //     default:null,
    // },
    //头像
    // background:{
    //     default:null,
    //     type:cc.Sprite,
    // },

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    console.log(this.node);
    console.log('正在对比资源'); // // 远程 url 不带图片后缀名，此时必须指定远程图片文件的类型
    // remoteUrl = "http://unknown.org/emoji?id=124982374";
    // cc.loader.load({url: remoteUrl, type: 'png'}, function () {
    //     // Use texture to create sprite frame
    // });
    // // 用绝对路径加载设备存储内的资源，比如相册
    // var absolutePath = "/dara/data/some/path/to/image.png"
    // cc.loader.load(absolutePath, function () {
    //     // Use texture to create sprite frame
    // });

    console.log('正在加载场景资源，请耐心等待...'); // 加载资源包

    this._urls = [{
      url: 'http://www.monster.com/app/api/file-content?url=http://www.monster.com/app/loading/剑指苍茫.mp3',
      type: 'mp3'
    } // {url:'http://www.monster.com/app/api/file-content?url=http://www.monster.com/app/loading/loading.jpg', type:'jpg'},
    // {url:'http://www.monster.com/app/api/file-content?url=http://127.0.0.1/123.jpg', type:'jpg'},
    // {url:'http://www.monster.com/app/api/file-content?url=http://127.0.0.1/ccc.png', type:'png'},
    // {url:'http://www.monster.com/app/api/file-content?url=http://127.0.0.1/jq22honey.zip', type:'zip'},
    // {url:'http://www.monster.com/app/api/file-content?url=http://127.0.0.1/monster.zip', type:'zip'},
    // {url:'http://www.monster.com/app/api/file-content?url=http://127.0.0.1（这里填你的服务器ip)/image2.png', type:'png'}, 
    ];
    console.log(this.progressBar); // console.log( this.sprite); 

    this.resource = null;
    this.progressBar.progress = 0;
    this.bmp_font.string = "0%"; // this.ProgressBar.progress += math_random / 100; 

    this._clearAll();

    cc.loader.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));
  },
  start: function start() {},
  _clearAll: function _clearAll() {
    for (var i = 0; i < this._urls.length; ++i) {
      var url = this._urls[i];
      cc.loader.release(url);
    }
  },
  _progressCallback: function _progressCallback(completeCount, totalCount, res) {
    //加载进度回调
    // console.log('资源 ' + completeCount + '加载完成！资源加载中...');
    // console.log('加载场景资源');
    this.progress = completeCount / totalCount;
    this.resource = res;
    this.completeCount = completeCount;
    this.totalCount = totalCount; // 代码里面获取cc.Label组件, 修改文本内容
    //在代码里面获取cc.Label组件

    var sys_label = this.node.getChildByName("sys_label").getComponent(cc.Label);
    sys_label.string = parseInt(this.progress * 100) + '%';

    if (this.resource.type == 'json') {// console.log(this.resource);  // json
      // 从服务器加载mp3来进行播放
      // this.audio.clip = ret;
      // this.audio.play();
    }

    if (this.resource.type == 'png' || this.resource.type == 'jpg') {
      console.log(res); // json
      //res是cc.Texture2D这样对象 
      //   this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(res)
      // this.headpic.spriteFrame.setTexture(res);
      // this.node.spriteFrame.setTexture(res);
      // this.sprite.spriteFrame.setContentSize(res.getContentSize());
      // this.node.getComponent(cc.Sprite).spriteFrame = res;
    }

    if (this.resource.type == 'mp3') {
      console.log(res); // mp3
      // this.audio.clip = res;
      // this.audio.play();
      // 从服务器加载mp3来进行播放

      this.current = cc.audioEngine.play(res.url, false, 1);
    }
  },
  _completeCallback: function _completeCallback(err, texture) {
    //加载完成回调
    this.loadnextScene(); // 下一场景 
  },
  update: function update(dt) {
    if (!this.resource) {
      return;
    }

    var progress = this.progressBar.progress;

    if (progress >= 1) {
      console.log('加载完成'); //加载完成

      this.progressBar.node.active = false; //进度条隐藏

      this.bmp_font.node.active = false; // 进度隐藏

      this.enabled = false;
      return;
    }

    if (progress < this.progress) {
      progress += dt;
    }

    this.progressBar.progress = progress;
  },
  loadnextScene: function loadnextScene() {
    // 登录预加载
    cc.director.preloadScene('index', function () {
      cc.log('登录预加载'); // // 请求登录接口
      // var params = {
      //         'loginname': 'yincan1993',
      //         'password': 123456,
      //         'serverid': 1,
      // };
    });
    var params = cc.sys.localStorage.getItem("params");

    if (params) {
      cc.log('快速登录');
      cc.log(params);
      cc.director.loadScene('index'); // cc.sys.localStorage.setItem('params', JSON.stringify(params)); 
    } else {
      cc.log('账号注册/登录');
      cc.director.loadScene('index'); // cc.sys.localStorage.setItem('params', JSON.stringify(params));
    }
  } // 　　 changeBj: function(){
  // 　　　　var url = 'globalUI/video/gVideoPlayClick';
  // 　　　　var _this = this; cc.loader.loadRes(url,cc.SpriteFrame,function(err,spriteFrame)
  // 　　　　{ 　
  // 　　　　　　_this.isPlay.spriteFrame = spriteFrame;
  // 　　　　 });
  // 　　　
  // 　　　　//加载网络图片
  //         var url = "www.monster.com/web/app/loading.jpg";
  //         cc.loader.load({url: url, type: 'png'}, function(err,img){
  //             var mylogo  = new cc.SpriteFrame(img); 
  //             self.logo.spriteFrame = mylogo;
  //         });
  // 　　　},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJzZWxmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInByb2dyZXNzQmFyIiwidHlwZSIsIlByb2dyZXNzQmFyIiwidGV4dCIsIlNwcml0ZSIsImF1ZGlvIiwiQXVkaW9DbGlwIiwicGxheSIsImF1ZGlvU291cmNlIiwicGF1c2UiLCJibXBfZm9udCIsIkxhYmVsIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJfdXJscyIsInVybCIsInJlc291cmNlIiwicHJvZ3Jlc3MiLCJzdHJpbmciLCJfY2xlYXJBbGwiLCJsb2FkZXIiLCJsb2FkIiwiX3Byb2dyZXNzQ2FsbGJhY2siLCJiaW5kIiwiX2NvbXBsZXRlQ2FsbGJhY2siLCJzdGFydCIsImkiLCJsZW5ndGgiLCJyZWxlYXNlIiwiY29tcGxldGVDb3VudCIsInRvdGFsQ291bnQiLCJyZXMiLCJzeXNfbGFiZWwiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInBhcnNlSW50IiwiY3VycmVudCIsImF1ZGlvRW5naW5lIiwiZXJyIiwidGV4dHVyZSIsImxvYWRuZXh0U2NlbmUiLCJ1cGRhdGUiLCJkdCIsImFjdGl2ZSIsImVuYWJsZWQiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsInBhcmFtcyIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsSUFBSSxTQUFSO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUUsQ0FEQztBQUVSQyxJQUFBQSxXQUFXLEVBQUM7QUFDUixpQkFBUSxJQURBO0FBRVJDLE1BQUFBLElBQUksRUFBQ04sRUFB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QUF2TVMsQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNlbGYgPSB0aGlzO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBwcm9ncmVzc0Jhcjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Qcm9ncmVzc0JhcixcclxuICAgICAgICAgICAgdGV4dDpjYy5TcHJpdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnBhdXNlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBibXBfZm9udDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIC8v6buY6K6k5aS05YOPXHJcbiAgICAgICAgLy8gaGVhZHBpYzp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8v5aS05YOPXHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDp7XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5TcHJpdGUsXHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjlr7nmr5TotYTmupAnKTtcclxuICAgICAgICAgICAgLy8gLy8g6L+c56iLIHVybCDkuI3luKblm77niYflkI7nvIDlkI3vvIzmraTml7blv4XpobvmjIflrprov5znqIvlm77niYfmlofku7bnmoTnsbvlnotcclxuICAgICAgICAgICAgLy8gcmVtb3RlVXJsID0gXCJodHRwOi8vdW5rbm93bi5vcmcvZW1vamk/aWQ9MTI0OTgyMzc0XCI7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKHt1cmw6IHJlbW90ZVVybCwgdHlwZTogJ3BuZyd9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBVc2UgdGV4dHVyZSB0byBjcmVhdGUgc3ByaXRlIGZyYW1lXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gLy8g55So57ud5a+56Lev5b6E5Yqg6L296K6+5aSH5a2Y5YKo5YaF55qE6LWE5rqQ77yM5q+U5aaC55u45YaMXHJcbiAgICAgICAgICAgIC8vIHZhciBhYnNvbHV0ZVBhdGggPSBcIi9kYXJhL2RhdGEvc29tZS9wYXRoL3RvL2ltYWdlLnBuZ1wiXHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKGFic29sdXRlUGF0aCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gVXNlIHRleHR1cmUgdG8gY3JlYXRlIHNwcml0ZSBmcmFtZVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ato+WcqOWKoOi9veWcuuaZr+i1hOa6kO+8jOivt+iAkOW/g+etieW+hS4uLicpO1xyXG4gICAgICAgIC8vIOWKoOi9vei1hOa6kOWMhVxyXG4gICAgICAgIHRoaXMuX3VybHMgPSBbXHJcbiAgICAgICAgICAgIHt1cmw6J2h0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2xvYWRpbmcv5YmR5oyH6IuN6IyrLm1wMycsIHR5cGU6J21wMyd9LFxyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwOi8vd3d3Lm1vbnN0ZXIuY29tL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vd3d3Lm1vbnN0ZXIuY29tL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnJywgdHlwZTonanBnJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly8xMjcuMC4wLjEvMTIzLmpwZycsIHR5cGU6J2pwZyd9LFxyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwOi8vd3d3Lm1vbnN0ZXIuY29tL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vMTI3LjAuMC4xL2NjYy5wbmcnLCB0eXBlOidwbmcnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cDovL3d3dy5tb25zdGVyLmNvbS9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS9qcTIyaG9uZXkuemlwJywgdHlwZTonemlwJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly8xMjcuMC4wLjEvbW9uc3Rlci56aXAnLCB0eXBlOid6aXAnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cDovL3d3dy5tb25zdGVyLmNvbS9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMe+8iOi/memHjOWhq+S9oOeahOacjeWKoeWZqGlwKS9pbWFnZTIucG5nJywgdHlwZToncG5nJ30sIFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLnByb2dyZXNzQmFyKTsgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMuc3ByaXRlKTsgXHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9MDtcclxuXHJcbiAgICAgICAgdGhpcy5ibXBfZm9udC5zdHJpbmcgPSBcIjAlXCI7XHJcblxyXG5cclxuICBcclxuICAgICAgICAvLyB0aGlzLlByb2dyZXNzQmFyLnByb2dyZXNzICs9IG1hdGhfcmFuZG9tIC8gMTAwOyBcclxuICAgICAgICB0aGlzLl9jbGVhckFsbCgpO1xyXG4gICAgICAgXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy5fdXJscywgdGhpcy5fcHJvZ3Jlc3NDYWxsYmFjay5iaW5kKHRoaXMpLCB0aGlzLl9jb21wbGV0ZUNhbGxiYWNrLmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcbiBcclxuICAgIF9jbGVhckFsbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3VybHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuX3VybHNbaV07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuIFxyXG4gICAgX3Byb2dyZXNzQ2FsbGJhY2s6IGZ1bmN0aW9uKGNvbXBsZXRlQ291bnQsIHRvdGFsQ291bnQsIHJlcykge1xyXG4gICAgICAgIC8v5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+i1hOa6kCAnICsgY29tcGxldGVDb3VudCArICfliqDovb3lrozmiJDvvIHotYTmupDliqDovb3kuK0uLi4nKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5Yqg6L295Zy65pmv6LWE5rqQJyk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IGNvbXBsZXRlQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByZXM7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZUNvdW50ID0gY29tcGxldGVDb3VudDtcclxuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xyXG5cclxuICAgICAgICAvLyDku6PnoIHph4zpnaLojrflj5ZjYy5MYWJlbOe7hOS7tiwg5L+u5pS55paH5pys5YaF5a65XHJcbiAgICAgICAgLy/lnKjku6PnoIHph4zpnaLojrflj5ZjYy5MYWJlbOe7hOS7tlxyXG4gICAgICAgIHZhciBzeXNfbGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzeXNfbGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBzeXNfbGFiZWwuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5wcm9ncmVzcyAqIDEwMCkgKyAnJSc7XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLnJlc291cmNlLnR5cGU9PSdqc29uJyl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmVzb3VyY2UpOyAgLy8ganNvblxyXG4gICAgICAgICAgICAvLyDku47mnI3liqHlmajliqDovb1tcDPmnaXov5vooYzmkq3mlL5cclxuICAgICAgICAgICAgLy8gdGhpcy5hdWRpby5jbGlwID0gcmV0O1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIHRoaXMucmVzb3VyY2UudHlwZT09J3BuZyd8fHRoaXMucmVzb3VyY2UudHlwZT09J2pwZycpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTsgIC8vIGpzb25cclxuICAgICAgICAgICAgLy9yZXPmmK9jYy5UZXh0dXJlMkTov5nmoLflr7nosaEgXHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHJlcylcclxuICAgICAgICAgICAgLy8gdGhpcy5oZWFkcGljLnNwcml0ZUZyYW1lLnNldFRleHR1cmUocmVzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNwcml0ZUZyYW1lLnNldFRleHR1cmUocmVzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUuc2V0Q29udGVudFNpemUocmVzLmdldENvbnRlbnRTaXplKCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCB0aGlzLnJlc291cmNlLnR5cGU9PSdtcDMnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTsgIC8vIG1wM1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF1ZGlvLmNsaXAgPSByZXM7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAvLyDku47mnI3liqHlmajliqDovb1tcDPmnaXov5vooYzmkq3mlL5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gY2MuYXVkaW9FbmdpbmUucGxheShyZXMudXJsLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG4gXHJcbiAgICBfY29tcGxldGVDYWxsYmFjazogZnVuY3Rpb24oZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgLy/liqDovb3lrozmiJDlm57osINcclxuICAgICAgICB0aGlzLmxvYWRuZXh0U2NlbmUoKTsgIC8vIOS4i+S4gOWcuuaZryBcclxuICAgIH0sXHJcbiBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZighdGhpcy5yZXNvdXJjZSl7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgaWYocHJvZ3Jlc3MgPj0gMSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliqDovb3lrozmiJAnKVxyXG4gICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7IC8v6L+b5bqm5p2h6ZqQ6JePXHJcbiAgICAgICAgICAgIHRoaXMuYm1wX2ZvbnQubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBpZihwcm9ncmVzcyA8IHRoaXMucHJvZ3Jlc3Mpe1xyXG4gICAgICAgICAgICBwcm9ncmVzcyArPSBkdDtcclxuICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgXHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRuZXh0U2NlbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIOeZu+W9lemihOWKoOi9vVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnaW5kZXgnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZygn55m75b2V6aKE5Yqg6L29Jyk7XHJcbiAgICAgICAgICAgIC8vIC8vIOivt+axgueZu+W9leaOpeWPo1xyXG4gICAgICAgICAgICAvLyB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgJ3Bhc3N3b3JkJzogMTIzNDU2LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICdzZXJ2ZXJpZCc6IDEsXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhcmFtc1wiKVxyXG4gICAgICAgIGlmKHBhcmFtcyl7XHJcbiAgICAgICAgICAgIGNjLmxvZygn5b+r6YCf55m75b2VJyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhwYXJhbXMpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2luZGV4Jyk7XHJcbiAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFyYW1zJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7IFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5sb2coJ+i0puWPt+azqOWGjC/nmbvlvZUnKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdpbmRleCcpO1xyXG4gICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmFtcycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIH0sXHJcblxyXG4vLyDjgIDjgIAgY2hhbmdlQmo6IGZ1bmN0aW9uKCl7XHJcbi8vIOOAgOOAgOOAgOOAgHZhciB1cmwgPSAnZ2xvYmFsVUkvdmlkZW8vZ1ZpZGVvUGxheUNsaWNrJztcclxuLy8g44CA44CA44CA44CAdmFyIF90aGlzID0gdGhpczsgY2MubG9hZGVyLmxvYWRSZXModXJsLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcHJpdGVGcmFtZSlcclxuLy8g44CA44CA44CA44CAeyDjgIBcclxuLy8g44CA44CA44CA44CA44CA44CAX3RoaXMuaXNQbGF5LnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbi8vIOOAgOOAgOOAgOOAgCB9KTtcclxuICAgIFxyXG4vLyDjgIDjgIDjgIBcclxuLy8g44CA44CA44CA44CALy/liqDovb3nvZHnu5zlm77niYdcclxuLy8gICAgICAgICB2YXIgdXJsID0gXCJ3d3cubW9uc3Rlci5jb20vd2ViL2FwcC9sb2FkaW5nLmpwZ1wiO1xyXG4vLyAgICAgICAgIGNjLmxvYWRlci5sb2FkKHt1cmw6IHVybCwgdHlwZTogJ3BuZyd9LCBmdW5jdGlvbihlcnIsaW1nKXtcclxuLy8gICAgICAgICAgICAgdmFyIG15bG9nbyAgPSBuZXcgY2MuU3ByaXRlRnJhbWUoaW1nKTsgXHJcbi8vICAgICAgICAgICAgIHNlbGYubG9nby5zcHJpdGVGcmFtZSA9IG15bG9nbztcclxuLy8gICAgICAgICB9KTtcclxuLy8g44CA44CA44CAfSxcclxufSk7XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/role.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba2146UZDNDA7jR6DbxLO8s', 'role');
// Script/login/role.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var HttpHelper = require("http"); // var fs = require('fs'); // 引入fs模块
// var globaluserinfo = require("GlobaluserInfo");


var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  //创建角色
  create_role: function create_role() {
    var server = JSON.parse(cc.sys.localStorage.getItem('server')); // 请求登录接口

    var params = {
      'loginid': server.loginid,
      'server': server.id,
      'name': '测试',
      'servername': server.name
    }; // cc.log(server); 

    httpRequest.httpPost('http://www.monster.com/app/api-server/user-role', params, function (data) {
      cc.log(data);

      if (data.code == 0) {
        // 登录失败，或本地数据失效
        cc.director.loadScene('login');
      } else {
        cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
        cc.director.loadScene('model/dating');
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccm9sZS5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImNyZWF0ZV9yb2xlIiwic2VydmVyIiwiSlNPTiIsInBhcnNlIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcmFtcyIsImxvZ2luaWQiLCJpZCIsIm5hbWUiLCJodHRwUG9zdCIsImRhdGEiLCJsb2ciLCJjb2RlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXNlcmluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4QixFQUNBO0FBQ0E7OztBQUNBLElBQUlDLFdBQVcsR0FBSSxJQUFJRixVQUFKLEVBQW5CO0FBQ0FHLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQTtBQUVBQyxFQUFBQSxLQXpCSyxtQkF5QkksQ0FFUixDQTNCSTtBQTZCTDtBQUNBQyxFQUFBQSxXQTlCSyx5QkE4QlE7QUFDVCxRQUFJQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixFQUFFLENBQUNTLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsUUFBNUIsQ0FBWCxDQUFiLENBRFMsQ0FFVDs7QUFDSSxRQUFJQyxNQUFNLEdBQUc7QUFDVCxpQkFBV04sTUFBTSxDQUFDTyxPQURUO0FBRVQsZ0JBQVVQLE1BQU0sQ0FBQ1EsRUFGUjtBQUdULGNBQVEsSUFIQztBQUlULG9CQUFjUixNQUFNLENBQUNTO0FBSlosS0FBYixDQUhLLENBU1Q7O0FBQ0FoQixJQUFBQSxXQUFXLENBQUNpQixRQUFaLENBQXFCLGlEQUFyQixFQUF3RUosTUFBeEUsRUFBZ0YsVUFBVUssSUFBVixFQUFnQjtBQUM1RmpCLE1BQUFBLEVBQUUsQ0FBQ2tCLEdBQUgsQ0FBT0QsSUFBUDs7QUFDQSxVQUFHQSxJQUFJLENBQUNFLElBQUwsSUFBVyxDQUFkLEVBQWdCO0FBQUU7QUFDZG5CLFFBQUFBLEVBQUUsQ0FBQ29CLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixPQUF0QjtBQUNILE9BRkQsTUFFSztBQUNEckIsUUFBQUEsRUFBRSxDQUFDUyxHQUFILENBQU9DLFlBQVAsQ0FBb0JZLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDZixJQUFJLENBQUNnQixTQUFMLENBQWVOLElBQUksQ0FBQ0EsSUFBTCxDQUFVTyxRQUF6QixDQUF4QztBQUNBeEIsUUFBQUEsRUFBRSxDQUFDb0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLGNBQXRCO0FBQ0g7QUFFSixLQVREO0FBWUgsR0FwREksQ0FzREw7O0FBdERLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG4vLyB2YXIgZnMgPSByZXF1aXJlKCdmcycpOyAvLyDlvJXlhaVmc+aooeWdl1xyXG4vLyB2YXIgZ2xvYmFsdXNlcmluZm8gPSByZXF1aXJlKFwiR2xvYmFsdXNlckluZm9cIik7XHJcbmxldCBodHRwUmVxdWVzdCA9ICBuZXcgSHR0cEhlbHBlcigpOyAgXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvL+WIm+W7uuinkuiJslxyXG4gICAgY3JlYXRlX3JvbGUoKXtcclxuICAgICAgICB2YXIgc2VydmVyID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcnZlcicpKTtcclxuICAgICAgICAvLyDor7fmsYLnmbvlvZXmjqXlj6NcclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICdsb2dpbmlkJzogc2VydmVyLmxvZ2luaWQsXHJcbiAgICAgICAgICAgICAgICAnc2VydmVyJzogc2VydmVyLmlkLFxyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAn5rWL6K+VJyxcclxuICAgICAgICAgICAgICAgICdzZXJ2ZXJuYW1lJzogc2VydmVyLm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjYy5sb2coc2VydmVyKTsgXHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2FwaS1zZXJ2ZXIvdXNlci1yb2xlJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICBpZihkYXRhLmNvZGU9PTApeyAvLyDnmbvlvZXlpLHotKXvvIzmiJbmnKzlnLDmlbDmja7lpLHmlYhcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7IFxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtb2RlbC9kYXRpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/SpriteTextTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '522f7RUlNhOh5+SscH5tMhK', 'SpriteTextTool');
// Script/login/SpriteTextTool.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    content: "1000",
    text_sprite: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  start: function start() {
    this.setContent("8934873");
  },
  // 设置文本
  setContent: function setContent(str) {
    this.content = str;
    this.onSetContentChange();
  },
  onSetContentChange: function onSetContentChange() {
    this.createSpriteText();
  },
  createSpriteText: function createSpriteText() {
    this.clearItem();
    var childs = this.node.children;
    var count = childs.length;

    for (var i = 0; i < this.content.length; i++) {
      var item = null;
      var sprite = null;

      if (i < count) {
        item = childs[i];
        item.active = true;
        sprite = item.getComponent(cc.Sprite);
      } else {
        item = new cc.Node("item");
        sprite = item.addComponent(cc.Sprite);
      }

      this.setSprite(this.content[i], sprite);
      item.parent = this.node;
    }
  },
  // 获取贴图
  getSprite: function getSprite(index) {
    var sprite = this.text_sprite.clone(); // 克隆一张图片

    var width = sprite.getRect().width / 10;
    var height = sprite.getRect().height;
    var x = sprite.getRect().x + index * width;
    var y = sprite.getRect().y;
    var tmpRect = new cc.Rect(x, y, width, height);
    sprite.setRect(tmpRect); // 设置 SpriteFrame 的纹理矩形区域

    return sprite;
  },
  // 设置贴图
  setSprite: function setSprite(value, sprite) {
    switch (value) {
      case "0":
        sprite.spriteFrame = this.getSprite(0);
        break;

      case "1":
        sprite.spriteFrame = this.getSprite(1);
        break;

      case "2":
        sprite.spriteFrame = this.getSprite(2);
        break;

      case "3":
        sprite.spriteFrame = this.getSprite(3);
        break;

      case "4":
        sprite.spriteFrame = this.getSprite(4);
        break;

      case "5":
        sprite.spriteFrame = this.getSprite(5);
        break;

      case "6":
        sprite.spriteFrame = this.getSprite(6);
        break;

      case "7":
        sprite.spriteFrame = this.getSprite(7);
        break;

      case "8":
        sprite.spriteFrame = this.getSprite(8);
        break;

      case "9":
        sprite.spriteFrame = this.getSprite(9);
        break;

      default:
        console.log("value not find :" + value);
        break;
    }
  },
  clearItem: function clearItem() {
    var childs = this.node.children;

    for (var i = 0; i < childs.length; i++) {
      childs[i].active = false;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcU3ByaXRlVGV4dFRvb2wuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwidGV4dF9zcHJpdGUiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzdGFydCIsInNldENvbnRlbnQiLCJzdHIiLCJvblNldENvbnRlbnRDaGFuZ2UiLCJjcmVhdGVTcHJpdGVUZXh0IiwiY2xlYXJJdGVtIiwiY2hpbGRzIiwibm9kZSIsImNoaWxkcmVuIiwiY291bnQiLCJsZW5ndGgiLCJpIiwiaXRlbSIsInNwcml0ZSIsImFjdGl2ZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsIk5vZGUiLCJhZGRDb21wb25lbnQiLCJzZXRTcHJpdGUiLCJwYXJlbnQiLCJnZXRTcHJpdGUiLCJpbmRleCIsImNsb25lIiwid2lkdGgiLCJnZXRSZWN0IiwiaGVpZ2h0IiwieCIsInkiLCJ0bXBSZWN0IiwiUmVjdCIsInNldFJlY3QiLCJ2YWx1ZSIsInNwcml0ZUZyYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRyxNQURGO0FBRVJDLElBQUFBLFdBQVcsRUFBQztBQUNSLGlCQUFVLElBREY7QUFFUkMsTUFBQUEsSUFBSSxFQUFHTixFQUFFLENBQUNPO0FBRkY7QUFGSixHQUhQO0FBV0xDLEVBQUFBLEtBWEssbUJBWUw7QUFDSSxTQUFLQyxVQUFMLENBQWdCLFNBQWhCO0FBQ0gsR0FkSTtBQWdCTDtBQUNBQSxFQUFBQSxVQWpCSyxzQkFpQk1DLEdBakJOLEVBa0JMO0FBQ0ksU0FBS04sT0FBTCxHQUFlTSxHQUFmO0FBQ0EsU0FBS0Msa0JBQUw7QUFDSCxHQXJCSTtBQXVCTEEsRUFBQUEs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QUFLLEdBQUw7QUFDSVIsUUFBQUEsTUFBTSxDQUFDb0IsV0FBUCxHQUFxQixLQUFLWixTQUFMLENBQWUsQ0FBZixDQUFyQjtBQUNBOztBQUNKLFdBQUssR0FBTDtBQUNJUixRQUFBQSxNQUFNLENBQUNvQixXQUFQLEdBQXFCLEtBQUtaLFNBQUwsQ0FBZSxDQUFmLENBQXJCO0FBQ0E7O0FBQ0osV0FBSyxHQUFMO0FBQ0lSLFFBQUFBLE1BQU0sQ0FBQ29CLFdBQVAsR0FBcUIsS0FBS1osU0FBTCxDQUFlLENBQWYsQ0FBckI7QUFDQTs7QUFDSixXQUFLLEdBQUw7QUFDSVIsUUFBQUEsTUFBTSxDQUFDb0IsV0FBUCxHQUFxQixLQUFLWixTQUFMLENBQWUsQ0FBZixDQUFyQjtBQUNBOztBQUNKLFdBQUssR0FBTDtBQUNJUixRQUFBQSxNQUFNLENBQUNvQixXQUFQLEdBQXFCLEtBQUtaLFNBQUwsQ0FBZSxDQUFmLENBQXJCO0FBQ0E7O0FBQ0o7QUFDSWEsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQXFCSCxLQUFqQztBQUNBO0FBakNSO0FBbUNILEdBdkdJO0FBeUdMM0IsRUFBQUEsU0F6R0ssdUJBMEdMO0FBQ0ksUUFBSUMsTUFBTSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBdkI7O0FBQ0EsU0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxNQUFNLENBQUNJLE1BQTNCLEVBQW1DQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDTCxNQUFBQSxNQUFNLENBQUNLLENBQUQsQ0FBTixDQUFVRyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSjtBQS9HSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjb250ZW50IDogXCIxMDAwXCIsXHJcbiAgICAgICAgdGV4dF9zcHJpdGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZSA6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRDb250ZW50KFwiODkzNDg3M1wiKTtcclxuICAgIH0sXHJcbiBcclxuICAgIC8vIOiuvue9ruaWh+acrFxyXG4gICAgc2V0Q29udGVudChzdHIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gc3RyO1xyXG4gICAgICAgIHRoaXMub25TZXRDb250ZW50Q2hhbmdlKCk7XHJcbiAgICB9LFxyXG4gXHJcbiAgICBvblNldENvbnRlbnRDaGFuZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3ByaXRlVGV4dCgpOyAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIGNyZWF0ZVNwcml0ZVRleHQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xlYXJJdGVtKCk7XHJcbiAgICAgICAgdmFyIGNoaWxkcyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICB2YXIgY291bnQgPSBjaGlsZHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYoaSA8IGNvdW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2hpbGRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlID0gaXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBuZXcgY2MuTm9kZShcIml0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUgPSBpdGVtLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKHRoaXMuY29udGVudFtpXSxzcHJpdGUpO1xyXG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gXHJcbiAgICAvLyDojrflj5botLTlm75cclxuICAgIGdldFNwcml0ZShpbmRleClcclxuICAgIHtcclxuICAgICAgICB2YXIgc3ByaXRlID0gdGhpcy50ZXh0X3Nwcml0ZS5jbG9uZSgpOyAvLyDlhYvpmobkuIDlvKDlm77niYdcclxuICAgICAgICB2YXIgd2lkdGggPSBzcHJpdGUuZ2V0UmVjdCgpLndpZHRoLzEwO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBzcHJpdGUuZ2V0UmVjdCgpLmhlaWdodDtcclxuICAgICAgICB2YXIgeCA9IHNwcml0ZS5nZXRSZWN0KCkueCArIGluZGV4ICogd2lkdGg7XHJcbiAgICAgICAgdmFyIHkgPSBzcHJpdGUuZ2V0UmVjdCgpLnk7XHJcbiAgICAgICAgdmFyIHRtcFJlY3QgPSBuZXcgY2MuUmVjdCh4LHksd2lkdGgsaGVpZ2h0KTtcclxuICAgICAgICBzcHJpdGUuc2V0UmVjdCh0bXBSZWN0KTsgICAvLyDorr7nva4gU3ByaXRlRnJhbWUg55qE57q555CG55+p5b2i5Yy65Z+fXHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgIH0sXHJcbiAgICAvLyDorr7nva7otLTlm75cclxuICAgIHNldFNwcml0ZSh2YWx1ZSxzcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRTcHJpdGUoMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDEpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNwcml0ZSgyKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNwcml0ZSg0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRTcHJpdGUoNSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjZcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDYpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI3XCI6XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNwcml0ZSg3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiOFwiOlxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRTcHJpdGUoOCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjlcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG5vdCBmaW5kIDpcIiArIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfSxcclxuIFxyXG4gICAgY2xlYXJJdGVtKClcclxuICAgIHtcclxuICAgICAgICB2YXIgY2hpbGRzID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkc1tpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/loading_fist.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9df1hntNVFBZSGCCOYdkEb', 'loading_fist');
// Script/scence/loading_fist.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  loadnextScene: function loadnextScene() {
    // 登录预加载
    cc.director.preloadScene('login', function () {
      cc.log('登录预加载');
    });
    cc.director.loadScene('login');
  },
  //登录
  login: function login() {
    cc.director.loadScene('login');
  },
  //角色
  role: function role() {
    cc.director.loadScene('role');
  },
  //注册
  register: function register() {
    cc.director.loadScene('register');
  },
  //大厅
  home: function home() {
    cc.director.loadScene('home');
  },
  //奖励
  jiangli: function jiangli() {
    cc.director.loadScene('jiangli');
  },
  //充值
  chongzhi: function chongzhi() {
    cc.director.loadScene('chongzhi');
  },
  //支付
  zhifu: function zhifu() {
    cc.director.loadScene('zhifu');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXGxvYWRpbmdfZmlzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwibG9hZG5leHRTY2VuZSIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwibG9nIiwibG9hZFNjZW5lIiwibG9naW4iLCJyb2xlIiwicmVnaXN0ZXIiLCJob21lIiwiamlhbmdsaSIsImNob25nemhpIiwiemhpZnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQTtBQUVBQyxFQUFBQSxLQXpCSyxtQkF5QkksQ0FFUixDQTNCSTtBQTZCTDtBQUdBQyxFQUFBQSxhQUFhLEVBQUUseUJBQVc7QUFDdEI7QUFDQUwsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFlBQVosQ0FBeUIsT0FBekIsRUFBa0MsWUFBWTtBQUMxQ1AsTUFBQUEsRUFBRSxDQUFDUSxHQUFILENBQU8sT0FBUDtBQUNILEtBRkQ7QUFHQVIsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlHLFNBQVosQ0FBc0IsT0FBdEI7QUFDSCxHQXRDSTtBQXdDTDtBQUNBQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVc7QUFDbEJWLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZRyxTQUFaLENBQXNCLE9BQXRCO0FBQ0MsR0EzQ0k7QUE2Q0w7QUFDQUUsRUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JYLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZRyxTQUFaLENBQXNCLE1BQXRCO0FBQ0gsR0FoREk7QUFrREw7QUFDQUcsRUFBQUEsUUFBUSxFQUFFLG9CQUFXO0FBQ2pCWixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUcsU0FBWixDQUFzQixVQUF0QjtBQUNILEdBckRJO0FBdURMO0FBQ0FJLEVBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiYixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUcsU0FBWixDQUFzQixNQUF0QjtBQUNILEdBMURJO0FBNERMO0FBQ0FLLEVBQUFBLE9BQU8sRUFBRSxtQkFBVztBQUNoQmQsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlHLFNBQVosQ0FBc0IsU0FBdEI7QUFDSCxHQS9ESTtBQWlFTDtBQUNBTSxFQUFBQSxRQUFRLEVBQUUsb0JBQVc7QUFDakJmLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZRyxTQUFaLENBQXNCLFVBQXRCO0FBQ0gsR0FwRUk7QUFzRUw7QUFDQU8sRUFBQUEsS0FBSyxFQUFFLGlCQUFXO0FBQ2RoQixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUcsU0FBWixDQUFzQixPQUF0QjtBQUNIO0FBekVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuXHJcbiAgICBsb2FkbmV4dFNjZW5lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDnmbvlvZXpooTliqDovb1cclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ2xvZ2luJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2coJ+eZu+W9lemihOWKoOi9vScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/nmbvlvZVcclxuICAgIGxvZ2luOiBmdW5jdGlvbigpIHtcclxuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/op5LoibJcclxuICAgIHJvbGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncm9sZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+azqOWGjFxyXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncmVnaXN0ZXInKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/lpKfljoVcclxuICAgIGhvbWU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+WlluWKsVxyXG4gICAgamlhbmdsaTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdqaWFuZ2xpJyk7XHJcbiAgICB9LFxyXG4gICBcclxuICAgIC8v5YWF5YC8XHJcbiAgICBjaG9uZ3poaTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdjaG9uZ3poaScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+aUr+S7mFxyXG4gICAgemhpZnU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnemhpZnUnKTtcclxuICAgIH0sXHJcblxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/scoretrump.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6b99ZAVAJJtbvT/VopdNIP', 'scoretrump');
// Script/scence/scoretrump.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    //测试item
    content: {
      "default": null,
      type: cc.Node
    },
    person: {
      "default": null,
      type: cc.Prefab
    },
    //列表
    test_scrollView: {
      "default": null,
      type: cc.ScrollView
    },
    //翻页容器
    test_pageView: {
      "default": null,
      type: cc.PageView
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    for (var i = 0; i < 10; i++) {
      var person = cc.instantiate(this.person);
      this.conten = person; // person.parent = this.content;
      // this.addTouchEvent(person);  //添加触摸事件
    } // this.value_set = [];
    // // 如果你这里是排行榜，那么你就push排行榜的数据;
    // for(var i = 1; i <= 100; i ++) {
    //     this.value_set.push(i);
    // }
    // this.content = this.scroll_view.content;
    // this.opt_item_set = [];
    // for(var i = 0; i < this.PAGE_NUM * 3; i ++) {
    //     var item = cc.instantiate(this.item_prefab);
    //     this.content.addChild(item);
    //     this.opt_item_set.push(item);
    // }
    // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);

  },
  addTouchEvent: function addTouchEvent(node_1) {
    node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
  } // start: function() {
  //     this.start_y = this.content.y;
  //     this.start_index = 0; // 当前我们24个Item加载的 100项数据里面的起始数据记录的索引;
  //     this.load_record(this.start_index);
  // },
  // // 从这个索引开始，加载数据记录到我们的滚动列表里面的选项
  // load_record: function(start_index) {
  //     this.start_index = start_index;
  //     for(var i = 0; i < this.PAGE_NUM * 3; i ++) {
  //         var label = this.opt_item_set[i].getChildByName("src").getComponent(cc.Label);
  //         // 显示我们的记录;
  //         label.string = this.value_set[start_index + i];
  //     }
  // },
  // on_scroll_ended: function() {
  //     this.scrollveiw_load_recode();
  //     this.scroll_view.elastic = true;
  // },
  // scrollveiw_load_recode: function() {
  //      // 向下加载了
  //     if (this.start_index + this.PAGE_NUM * 3 < this.value_set.length &&
  //         this.content.y >= this.start_y + this.PAGE_NUM * 2 * this.OPT_HEIGHT) { // 动态加载
  //         if (this.scroll_view._autoScrolling) { // 等待这个自动滚动结束以后再做加载
  //             this.scroll_view.elastic = false; // 暂时关闭回弹效果
  //             return;
  //         }
  //         var down_loaded = this.PAGE_NUM;
  //         this.start_index += down_loaded;
  //         if (this.start_index + this.PAGE_NUM * 3 > this.value_set.length) {
  //             var out_len = this.start_index + this.PAGE_NUM * 3 - this.value_set.length;
  //             down_loaded -= (out_len);
  //             this.start_index -= (out_len);
  //         }
  //         this.load_record(this.start_index);
  //         this.content.y -= (down_loaded * this.OPT_HEIGHT);
  //         return;
  //     }
  //     // 向上加载
  //     if (this.start_index > 0 && this.content.y <= this.start_y) {
  //         if (this.scroll_view._autoScrolling) { // 等待这个自动滚动结束以后再做加载
  //             this.scroll_view.elastic = false;
  //             return;
  //         }
  //         var up_loaded = this.PAGE_NUM;
  //         this.start_index -= up_loaded;
  //         if (this.start_index < 0) {
  //             up_loaded += this.start_index;
  //             this.start_index = 0; 
  //         }
  //         this.load_record(this.start_index);
  //         this.content.y += (up_loaded * this.OPT_HEIGHT);
  //     }
  //     // end 
  // },
  // // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  //     this.scrollveiw_load_recode();
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JldHJ1bXAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwidHlwZSIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJ0ZXN0X3Njcm9sbFZpZXciLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwiaSIsImluc3RhbnRpYXRlIiwiY29udGVuIiwiYWRkVG91Y2hFdmVudCIsIm5vZGVfMSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoTW92ZSIsIlRPVUNIX0VORCIsInRvdWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNKQyxJQUFBQSxPQUFPLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZGLEtBakJEO0FBc0JWQyxJQUFBQSxNQUFNLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5GLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZILEtBdEJFO0FBMEJWO0FBQ0FDLElBQUFBLGVBQWUsRUFBRTtBQUNmLGlCQUFTLElBRE07QUFFZkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRk0sS0EzQlA7QUErQlY7QUFDQUMsSUFBQUEsYUFBYSxFQUFFO0FBQ2IsaUJBQVMsSUFESTtBQUViTixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1k7QUFGSTtBQWhDTCxHQUhQO0FBNkNMO0FBRUFDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekIsVUFBSVAsTUFBTSxHQUFHUCxFQUFFLENBQUNlLFdBQUgsQ0FBZSxLQUFLUixNQUFwQixDQUFiO0FBQ0EsV0FBS1MsTUFBTCxHQUFZVCxNQUFaLENBRnlCLENBR3pCO0FBQ0E7QUFDRCxLQU5hLENBT2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNILEdBckVJO0FBc0VMVSxFQUFBQSxhQXRFSyx5QkFzRVNDLE1BdEVULEVBc0VpQjtBQUNsQkEsSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVuQixFQUFFLENBQUNNLElBQUgsQ0FBUWMsU0FBUixDQUFrQkMsV0FBNUIsRUFBeUMsS0FBS0MsVUFBOUMsRUFBMEQsSUFBMUQ7QUFDQUosSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVuQixFQUFFLENBQUNNLElBQUgsQ0FBUWMsU0FBUixDQUFrQkcsVUFBNUIsRUFBd0MsS0FBS0MsU0FBN0MsRUFBd0QsSUFBeEQ7QUFDQU4sSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVuQixFQUFFLENBQUNNLElBQUgsQ0FBUWMsU0FBUixDQUFrQkssU0FBNUIsRUFBdUMsS0FBS0MsUUFBNUMsRUFBc0QsSUFBdEQ7QUFDRCxHQTFFRSxDQTJFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE3SUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvL+a1i+ivlWl0ZW1cclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICBwZXJzb246IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICB9LFxyXG4gICAgICAvL+WIl+ihqFxyXG4gICAgICB0ZXN0X3Njcm9sbFZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXdcclxuICAgICAgfSxcclxuICAgICAgLy/nv7vpobXlrrnlmahcclxuICAgICAgdGVzdF9wYWdlVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuUGFnZVZpZXdcclxuICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcGVyc29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzb24pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbj1wZXJzb25cclxuICAgICAgICAgICAgLy8gcGVyc29uLnBhcmVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAgICAgLy8gdGhpcy5hZGRUb3VjaEV2ZW50KHBlcnNvbik7ICAvL+a3u+WKoOinpuaRuOS6i+S7tlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMudmFsdWVfc2V0ID0gW107XHJcbiAgICAgICAgLy8gLy8g5aaC5p6c5L2g6L+Z6YeM5piv5o6S6KGM5qac77yM6YKj5LmI5L2g5bCxcHVzaOaOkuihjOamnOeahOaVsOaNrjtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAxOyBpIDw9IDEwMDsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZhbHVlX3NldC5wdXNoKGkpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jb250ZW50ID0gdGhpcy5zY3JvbGxfdmlldy5jb250ZW50O1xyXG4gICAgICAgIC8vIHRoaXMub3B0X2l0ZW1fc2V0ID0gW107XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX3ByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5vcHRfaXRlbV9zZXQucHVzaChpdGVtKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBhZGRUb3VjaEV2ZW50KG5vZGVfMSkge1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICB9LFxyXG4gICAgLy8gc3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfeSA9IHRoaXMuY29udGVudC55O1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyAvLyDlvZPliY3miJHku6wyNOS4qkl0ZW3liqDovb3nmoQgMTAw6aG55pWw5o2u6YeM6Z2i55qE6LW35aeL5pWw5o2u6K6w5b2V55qE57Si5byVO1xyXG4gICAgLy8gICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIC8vIOS7jui/meS4que0ouW8leW8gOWni++8jOWKoOi9veaVsOaNruiusOW9leWIsOaIkeS7rOeahOa7muWKqOWIl+ihqOmHjOmdoueahOmAiemhuVxyXG4gICAgLy8gbG9hZF9yZWNvcmQ6IGZ1bmN0aW9uKHN0YXJ0X2luZGV4KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IHN0YXJ0X2luZGV4O1xyXG5cclxuICAgIC8vICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5QQUdFX05VTSAqIDM7IGkgKyspIHtcclxuICAgIC8vICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5vcHRfaXRlbV9zZXRbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzcmNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIC8vICAgICAgICAgLy8g5pi+56S65oiR5Lus55qE6K6w5b2VO1xyXG4gICAgLy8gICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aGlzLnZhbHVlX3NldFtzdGFydF9pbmRleCArIGldO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gb25fc2Nyb2xsX2VuZGVkOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSB0cnVlO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBzY3JvbGx2ZWl3X2xvYWRfcmVjb2RlOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgLy8g5ZCR5LiL5Yqg6L295LqGXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA8IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCAmJlxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSA+PSB0aGlzLnN0YXJ0X3kgKyB0aGlzLlBBR0VfTlVNICogMiAqIHRoaXMuT1BUX0hFSUdIVCkgeyAvLyDliqjmgIHliqDovb1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7IC8vIOaaguaXtuWFs+mXreWbnuW8ueaViOaenFxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgZG93bl9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ICs9IGRvd25fbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzID4gdGhpcy52YWx1ZV9zZXQubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgb3V0X2xlbiA9IHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyAtIHRoaXMudmFsdWVfc2V0Lmxlbmd0aDtcclxuICAgIC8vICAgICAgICAgICAgIGRvd25fbG9hZGVkIC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSAtPSAoZG93bl9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyDlkJHkuIrliqDovb1cclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA+IDAgJiYgdGhpcy5jb250ZW50LnkgPD0gdGhpcy5zdGFydF95KSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciB1cF9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IHVwX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPCAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB1cF9sb2FkZWQgKz0gdGhpcy5zdGFydF9pbmRleDtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyBcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSArPSAodXBfbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gZW5kIFxyXG4gICAgLy8gfSxcclxuICAgIC8vIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
