
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/home_scence.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9acd6ttOHZOHr2DPhLJYZ2C', 'home_scence');
// Script/scence/home_scence.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var HttpHelper = require("../http"); // var httpRequest = new HttpHelper();


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
  onLoad: function onLoad() {// 常驻节点
    // cc.game.addPersistRootNode( myNode)
    // cc.game.removePersistRootNode( myNode)
  },
  start: function start() {},
  ProgressBar: function ProgressBar() {},
  // update (dt) {},
  // loadnextScene: function() {
  //     // 登录预加载
  //     cc.director.preloadScene('login', function () {
  //         cc.log('登录预加载');
  //     });
  //     cc.director.loadScene('login');
  // },
  //登录
  诸天万界: function _() {
    var params = {
      'page': 1,
      'pageSize': 12
    };
    httpRequest.httpPost('/app/app-apiword/index', params, function (data) {
      //  console.log(data);
      // console.log(_this.content)
      if (data.data) {
        //跳转到世界
        // cc.director.preloadScene("loading", function () {
        // cc.director.loadScene('map/诸天地图');
        httpRequest.playGame('map/诸天地图'); // });
      } else {
        //  httpRequest.playGame('home/诸天万界');
        httpRequest.playGame('home/诸天万界');
      }
    });
  },
  //登录
  大厅: function _() {
    httpRequest.playGame('home/大厅');
  },
  创造生物: function _() {
    httpRequest.playGame('home/创造生物');
  },
  //注册
  神魔炼狱: function _() {
    httpRequest.playGame('home/神魔炼狱');
  },
  //大厅
  秘境探索: function _() {
    httpRequest.playGame('home/秘境探索');
  },
  //奖励
  万古仙门: function _() {
    httpRequest.playGame('home/万古仙门');
  },
  //充值
  天地熔炉: function _() {
    httpRequest.playGame('home/天地熔炉');
  },
  //支付
  镇妖塔: function _() {
    httpRequest.playGame('home/镇妖塔');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXGhvbWVfc2NlbmNlLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzdGFydCIsIlByb2dyZXNzQmFyIiwi6K+45aSp5LiH55WMIiwicGFyYW1zIiwiaHR0cFJlcXVlc3QiLCJodHRwUG9zdCIsImRhdGEiLCJwbGF5R2FtZSIsIuWkp+WOhSIsIuWIm+mAoOeUn+eJqSIsIuelnumtlOeCvOeLsSIsIuenmOWig+aOoue0oiIsIuS4h+WPpOS7memXqCIsIuWkqeWcsOeGlOeCiSIsIumVh+WmluWhlCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXhCLEVBQ0E7OztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUVMLGFBQVNELEVBQUUsQ0FBQ0UsU0FGUDtBQUlMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUpQO0FBc0JMO0FBRUFDLEVBQUFBLE1BeEJLLG9CQXdCSyxDQUNOO0FBQ0E7QUFDQTtBQUNILEdBNUJJO0FBOEJMQyxFQUFBQSxLQTlCSyxtQkE4QkksQ0FFUixDQWhDSTtBQWlDTEMsRUFBQUEsV0FqQ0sseUJBaUNRLENBRVosQ0FuQ0k7QUFvQ0w7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FDLEVBQUFBLElBQUksRUFBRSxhQUFXO0FBRWYsUUFBSUMsTUFBTSxHQUFHO0FBQ1gsY0FBUSxDQURHO0FBRVgsa0JBQVk7QUFGRCxLQUFiO0FBSUVDLElBQUFBLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQix3QkFBckIsRUFBK0NGLE1BQS9DLEVBQXVELFVBQVVHLElBQVYsRUFBZ0I7QUFDdkU7QUFDRTtBQUNBLFVBQUdBLElBQUksQ0FBQ0EsSUFBUixFQUFhO0FBQ1Q7QUFDRjtBQUNJO0FBQ0FGLFFBQUFBLFdBQVcsQ0FBQ0csUUFBWixDQUFxQixVQUFyQixFQUpPLENBS1g7QUFDRCxPQU5ELE1BTUs7QUFDSDtBQUNBSCxRQUFBQSxXQUFXLENBQUNHLFFBQVosQ0FBcUIsV0FBckI7QUFDRDtBQUNKLEtBYkM7QUFjSCxHQXBFSTtBQXFFTDtBQUNBQyxFQUFBQSxFQUFFLEVBQUUsYUFBVztBQUNWSixJQUFBQSxXQUFXLENBQUNHLFFBQVosQ0FBcUIsU0FBckI7QUFDSixHQXhFSTtBQTBFTEUsRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDWkwsSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFdBQXJCO0FBQ0osR0E1RUk7QUE4RUw7QUFDQUcsRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDWk4sSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFdBQXJCO0FBQ0osR0FqRkk7QUFtRkw7QUFDQUksRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDWlAsSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFdBQXJCO0FBQ0osR0F0Rkk7QUF3Rkw7QUFDQUssRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDWlIsSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFdBQXJCO0FBQ0osR0EzRkk7QUE2Rkw7QUFDQU0sRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDWlQsSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFdBQXJCO0FBQ0osR0FoR0k7QUFrR0w7QUFDQU8sRUFBQUEsR0FBRyxFQUFFLGFBQVc7QUFDWFYsSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFVBQXJCO0FBQ0o7QUFyR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiLi4vaHR0cFwiKTsgXHJcbi8vIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbmNjLkNsYXNzKHtcclxuICAgIFxyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyDluLjpqbvoioLngrlcclxuICAgICAgICAvLyBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSggbXlOb2RlKVxyXG4gICAgICAgIC8vIGNjLmdhbWUucmVtb3ZlUGVyc2lzdFJvb3ROb2RlKCBteU5vZGUpXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgUHJvZ3Jlc3NCYXIoKXtcclxuXHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG5cclxuICAgIC8vIGxvYWRuZXh0U2NlbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIC8vIOeZu+W9lemihOWKoOi9vVxyXG4gICAgLy8gICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnbG9naW4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgIGNjLmxvZygn55m75b2V6aKE5Yqg6L29Jyk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdsb2dpbicpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvL+eZu+W9lVxyXG4gICAg6K+45aSp5LiH55WMOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgJ3BhZ2UnOiAxLFxyXG4gICAgICAgICdwYWdlU2l6ZSc6IDEyLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvaW5kZXgnLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coX3RoaXMuY29udGVudClcclxuICAgICAgICAgIGlmKGRhdGEuZGF0YSl7XHJcbiAgICAgICAgICAgICAgLy/ot7PovazliLDkuJbnlYxcclxuICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwibG9hZGluZ1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcC/or7jlpKnlnLDlm74nKTtcclxuICAgICAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vICBodHRwUmVxdWVzdC5wbGF5R2FtZSgnaG9tZS/or7jlpKnkuIfnlYwnKTtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3QucGxheUdhbWUoJ2hvbWUv6K+45aSp5LiH55WMJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy/nmbvlvZVcclxuICAgIOWkp+WOhTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdob21lL+Wkp+WOhScpO1xyXG4gICAgfSxcclxuIFxyXG4gICAg5Yib6YCg55Sf54mpOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgaHR0cFJlcXVlc3QucGxheUdhbWUoJ2hvbWUv5Yib6YCg55Sf54mpJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5rOo5YaMXHJcbiAgICDnpZ7prZTngrzni7E6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICBodHRwUmVxdWVzdC5wbGF5R2FtZSgnaG9tZS/npZ7prZTngrzni7EnKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/lpKfljoVcclxuICAgIOenmOWig+aOoue0ojogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdob21lL+enmOWig+aOoue0oicpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+WlluWKsVxyXG4gICAg5LiH5Y+k5LuZ6ZeoOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgaHR0cFJlcXVlc3QucGxheUdhbWUoJ2hvbWUv5LiH5Y+k5LuZ6ZeoJyk7XHJcbiAgICB9LFxyXG4gICBcclxuICAgIC8v5YWF5YC8XHJcbiAgICDlpKnlnLDnhpTngok6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICBodHRwUmVxdWVzdC5wbGF5R2FtZSgnaG9tZS/lpKnlnLDnhpTngoknKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/mlK/ku5hcclxuICAgIOmVh+WmluWhlDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdob21lL+mVh+WmluWhlCcpO1xyXG4gICAgfSxcclxuXHJcblxyXG59KTtcclxuIl19