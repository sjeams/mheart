
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

/*
 * @Author: sjeam
 * @Date: 2023-11-08 15:57:05
 * @Description: 
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXGhvbWVfc2NlbmNlLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzdGFydCIsIlByb2dyZXNzQmFyIiwi6K+45aSp5LiH55WMIiwicGFyYW1zIiwiaHR0cFJlcXVlc3QiLCJodHRwUG9zdCIsImRhdGEiLCJwbGF5R2FtZSIsIuWkp+WOhSIsIuWIm+mAoOeUn+eJqSIsIuelnumtlOeCvOeLsSIsIuenmOWig+aOoue0oiIsIuS4h+WPpOS7memXqCIsIuWkqeWcsOeGlOeCiSIsIumVh+WmluWhlCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXhCLEVBQ0E7OztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUVMLGFBQVNELEVBQUUsQ0FBQ0UsU0FGUDtBQUlMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUpQO0FBc0JMO0FBRUFDLEVBQUFBLE1BeEJLLG9CQXdCSyxDQUNOO0FBQ0E7QUFDQTtBQUNILEdBNUJJO0FBOEJMQyxFQUFBQSxLQTlCSyxtQkE4QkksQ0FFUixDQWhDSTtBQWlDTEMsRUFBQUEsV0FqQ0sseUJBaUNRLENBRVosQ0FuQ0k7QUFvQ0w7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FDLEVBQUFBLElBQUksRUFBRSxhQUFXO0FBRWYsUUFBSUMsTUFBTSxHQUFHO0FBQ1gsY0FBUSxDQURHO0FBRVgsa0JBQVk7QUFGRCxLQUFiO0FBSUVDLElBQUFBLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQix3QkFBckIsRUFBK0NGLE1BQS9DLEVBQXVELFVBQVVHLElBQVYsRUFBZ0I7QUFDdkU7QUFDRTtBQUNBLFVBQUdBLElBQUksQ0FBQ0EsSUFBUixFQUFhO0FBQ1Q7QUFDRjtBQUNJO0FBQ0FGLFFBQUFBLFdBQVcsQ0FBQ0csUUFBWixDQUFxQixVQUFyQixFQUpPLENBS1g7QUFDRCxPQU5ELE1BTUs7QUFDSDtBQUNBSCxRQUFBQSxXQUFXLENBQUNHLFFBQVosQ0FBcUIsV0FBckI7QUFDRDtBQUNKLEtBYkM7QUFjSCxHQXBFSTtBQXFFTDtBQUNBQyxFQUFBQSxFQUFFLEVBQUUsYUFBVztBQUNWSixJQUFBQSxXQUFXLENBQUNHLFFBQVosQ0FBcUIsU0FBckI7QUFDSixHQXhFSTtBQTBFTEUsRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDWkwsSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFdBQXJCO0FBQ0osR0E1RUk7QUE4RUw7QUFDQUcsRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDWk4sSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFdBQXJCO0FBQ0osR0FqRkk7QUFtRkw7QUFDQUksRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDWlAsSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFdBQXJCO0FBQ0osR0F0Rkk7QUF3Rkw7QUFDQUssRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDWlIsSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFdBQXJCO0FBQ0osR0EzRkk7QUE2Rkw7QUFDQU0sRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDWlQsSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFdBQXJCO0FBQ0osR0FoR0k7QUFrR0w7QUFDQU8sRUFBQUEsR0FBRyxFQUFFLGFBQVc7QUFDWFYsSUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQXFCLFVBQXJCO0FBQ0o7QUFyR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogc2plYW1cclxuICogQERhdGU6IDIwMjMtMTEtMDggMTU6NTc6MDVcclxuICogQERlc2NyaXB0aW9uOiBcclxuICovXHJcblxyXG5cclxuLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcIi4uL2h0dHBcIik7IFxyXG4vLyB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy8g5bi46am76IqC54K5XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUoIG15Tm9kZSlcclxuICAgICAgICAvLyBjYy5nYW1lLnJlbW92ZVBlcnNpc3RSb290Tm9kZSggbXlOb2RlKVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIFByb2dyZXNzQmFyKCl7XHJcblxyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuXHJcbiAgICAvLyBsb2FkbmV4dFNjZW5lOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAvLyDnmbvlvZXpooTliqDovb1cclxuICAgIC8vICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ2xvZ2luJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICBjYy5sb2coJ+eZu+W9lemihOWKoOi9vScpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy/nmbvlvZVcclxuICAgIOivuOWkqeS4h+eVjDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICdwYWdlJzogMSxcclxuICAgICAgICAncGFnZVNpemUnOiAxMixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL2luZGV4JywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKF90aGlzLmNvbnRlbnQpXHJcbiAgICAgICAgICBpZihkYXRhLmRhdGEpe1xyXG4gICAgICAgICAgICAgIC8v6Lez6L2s5Yiw5LiW55WMXHJcbiAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImxvYWRpbmdcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICAgICAgICAgICAgICBodHRwUmVxdWVzdC5wbGF5R2FtZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyAgaHR0cFJlcXVlc3QucGxheUdhbWUoJ2hvbWUv6K+45aSp5LiH55WMJyk7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdob21lL+ivuOWkqeS4h+eVjCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8v55m75b2VXHJcbiAgICDlpKfljoU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICBodHRwUmVxdWVzdC5wbGF5R2FtZSgnaG9tZS/lpKfljoUnKTtcclxuICAgIH0sXHJcbiBcclxuICAgIOWIm+mAoOeUn+eJqTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdob21lL+WIm+mAoOeUn+eJqScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+azqOWGjFxyXG4gICAg56We6a2U54K854uxOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgaHR0cFJlcXVlc3QucGxheUdhbWUoJ2hvbWUv56We6a2U54K854uxJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5aSn5Y6FXHJcbiAgICDnp5jlooPmjqLntKI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICBodHRwUmVxdWVzdC5wbGF5R2FtZSgnaG9tZS/np5jlooPmjqLntKInKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/lpZblirFcclxuICAgIOS4h+WPpOS7memXqDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdob21lL+S4h+WPpOS7memXqCcpO1xyXG4gICAgfSxcclxuICAgXHJcbiAgICAvL+WFheWAvFxyXG4gICAg5aSp5Zyw54aU54KJOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgaHR0cFJlcXVlc3QucGxheUdhbWUoJ2hvbWUv5aSp5Zyw54aU54KJJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5pSv5LuYXHJcbiAgICDplYflppbloZQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICBodHRwUmVxdWVzdC5wbGF5R2FtZSgnaG9tZS/plYflppbloZQnKTtcclxuICAgIH0sXHJcblxyXG5cclxufSk7XHJcbiJdfQ==