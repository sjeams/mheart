
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
  // loadnextScene: function() {
  //     // 登录预加载
  //     cc.director.preloadScene('login', function () {
  //         cc.log('登录预加载');
  //     });
  //     cc.director.loadScene('login');
  // },
  //登录
  诸天万界: function _() {
    cc.director.loadScene('home/诸天万界');
  },
  //登录
  大厅: function _() {
    cc.director.loadScene('home/大厅');
  },
  创造生物: function _() {
    cc.director.loadScene('home/创造生物');
  },
  //注册
  神魔炼狱: function _() {
    cc.director.loadScene('home/神魔炼狱');
  },
  //大厅
  秘境探索: function _() {
    cc.director.loadScene('home/秘境探索');
  },
  //奖励
  万古仙门: function _() {
    cc.director.loadScene('home/万古仙门');
  },
  //充值
  天地熔炉: function _() {
    cc.director.loadScene('home/天地熔炉');
  },
  //支付
  镇妖塔: function _() {
    cc.director.loadScene('home/镇妖塔');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXGhvbWVfc2NlbmNlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCLor7jlpKnkuIfnlYwiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIuWkp+WOhSIsIuWIm+mAoOeUn+eJqSIsIuelnumtlOeCvOeLsSIsIuenmOWig+aOoue0oiIsIuS4h+WPpOS7memXqCIsIuWkqeWcsOeGlOeCiSIsIumVh+WmluWhlCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZlEsR0FIUDtBQXFCTDtBQUVBO0FBRUFDLEVBQUFBLEtBekJLLG1CQXlCSSxDQUVSLENBM0JJO0FBNkJMO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBQyxFQUFBQSxJQUFJLEVBQUUsYUFBVztBQUNqQkwsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7QUFDQyxHQTNDSTtBQTRDTDtBQUNBQyxFQUFBQSxFQUFFLEVBQUUsYUFBVztBQUNYUixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixTQUF0QjtBQUNILEdBL0NJO0FBaURMRSxFQUFBQSxJQUFJLEVBQUUsYUFBVztBQUNiVCxJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixXQUF0QjtBQUNILEdBbkRJO0FBcURMO0FBQ0FHLEVBQUFBLElBQUksRUFBRSxhQUFXO0FBQ2JWLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0FBQ0gsR0F4REk7QUEwREw7QUFDQUksRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDYlgsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7QUFDSCxHQTdESTtBQStETDtBQUNBSyxFQUFBQSxJQUFJLEVBQUUsYUFBVztBQUNiWixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixXQUF0QjtBQUNILEdBbEVJO0FBb0VMO0FBQ0FNLEVBQUFBLElBQUksRUFBRSxhQUFXO0FBQ2JiLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0FBQ0gsR0F2RUk7QUF5RUw7QUFDQU8sRUFBQUEsR0FBRyxFQUFFLGFBQVc7QUFDWmQsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsVUFBdEI7QUFDSDtBQTVFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcblxyXG4gICAgLy8gbG9hZG5leHRTY2VuZTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgLy8g55m75b2V6aKE5Yqg6L29XHJcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdsb2dpbicsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICAgY2MubG9nKCfnmbvlvZXpooTliqDovb0nKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2xvZ2luJyk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8v55m75b2VXHJcbiAgICDor7jlpKnkuIfnlYw6IGZ1bmN0aW9uKCkge1xyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lL+ivuOWkqeS4h+eVjCcpO1xyXG4gICAgfSxcclxuICAgIC8v55m75b2VXHJcbiAgICDlpKfljoU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS/lpKfljoUnKTtcclxuICAgIH0sXHJcbiBcclxuICAgIOWIm+mAoOeUn+eJqTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lL+WIm+mAoOeUn+eJqScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+azqOWGjFxyXG4gICAg56We6a2U54K854uxOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2hvbWUv56We6a2U54K854uxJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5aSn5Y6FXHJcbiAgICDnp5jlooPmjqLntKI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS/np5jlooPmjqLntKInKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/lpZblirFcclxuICAgIOS4h+WPpOS7memXqDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lL+S4h+WPpOS7memXqCcpO1xyXG4gICAgfSxcclxuICAgXHJcbiAgICAvL+WFheWAvFxyXG4gICAg5aSp5Zyw54aU54KJOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2hvbWUv5aSp5Zyw54aU54KJJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5pSv5LuYXHJcbiAgICDplYflppbloZQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS/plYflppbloZQnKTtcclxuICAgIH0sXHJcblxyXG5cclxufSk7XHJcbiJdfQ==