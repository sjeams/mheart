
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXGhvbWVfc2NlbmNlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCLor7jlpKnkuIfnlYwiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIuWIm+mAoOeUn+eJqSIsIuelnumtlOeCvOeLsSIsIuenmOWig+aOoue0oiIsIuS4h+WPpOS7memXqCIsIuWkqeWcsOeGlOeCiSIsIumVh+WmluWhlCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZlEsR0FIUDtBQXFCTDtBQUVBO0FBRUFDLEVBQUFBLEtBekJLLG1CQXlCSSxDQUVSLENBM0JJO0FBNkJMO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBQyxFQUFBQSxJQUFJLEVBQUUsYUFBVztBQUNqQkwsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7QUFDQyxHQTNDSTtBQThDTEMsRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDYlIsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7QUFDSCxHQWhESTtBQWtETDtBQUNBRSxFQUFBQSxJQUFJLEVBQUUsYUFBVztBQUNiVCxJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixXQUF0QjtBQUNILEdBckRJO0FBdURMO0FBQ0FHLEVBQUFBLElBQUksRUFBRSxhQUFXO0FBQ2JWLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0FBQ0gsR0ExREk7QUE0REw7QUFDQUksRUFBQUEsSUFBSSxFQUFFLGFBQVc7QUFDYlgsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7QUFDSCxHQS9ESTtBQWlFTDtBQUNBSyxFQUFBQSxJQUFJLEVBQUUsYUFBVztBQUNiWixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixXQUF0QjtBQUNILEdBcEVJO0FBc0VMO0FBQ0FNLEVBQUFBLEdBQUcsRUFBRSxhQUFXO0FBQ1piLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLFVBQXRCO0FBQ0g7QUF6RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG5cclxuICAgIC8vIGxvYWRuZXh0U2NlbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIC8vIOeZu+W9lemihOWKoOi9vVxyXG4gICAgLy8gICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnbG9naW4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgIGNjLmxvZygn55m75b2V6aKE5Yqg6L29Jyk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdsb2dpbicpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvL+eZu+W9lVxyXG4gICAg6K+45aSp5LiH55WMOiBmdW5jdGlvbigpIHtcclxuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS/or7jlpKnkuIfnlYwnKTtcclxuICAgIH0sXHJcblxyXG4gXHJcbiAgICDliJvpgKDnlJ/niak6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS/liJvpgKDnlJ/niaknKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/ms6jlhoxcclxuICAgIOelnumtlOeCvOeLsTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lL+elnumtlOeCvOeLsScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+Wkp+WOhVxyXG4gICAg56eY5aKD5o6i57SiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2hvbWUv56eY5aKD5o6i57SiJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5aWW5YqxXHJcbiAgICDkuIflj6Tku5npl6g6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS/kuIflj6Tku5npl6gnKTtcclxuICAgIH0sXHJcbiAgIFxyXG4gICAgLy/lhYXlgLxcclxuICAgIOWkqeWcsOeGlOeCiTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lL+WkqeWcsOeGlOeCiScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+aUr+S7mFxyXG4gICAg6ZWH5aaW5aGUOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2hvbWUv6ZWH5aaW5aGUJyk7XHJcbiAgICB9LFxyXG5cclxuXHJcbn0pO1xyXG4iXX0=