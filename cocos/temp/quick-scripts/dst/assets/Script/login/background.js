
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
    var remoteUrl = "http://127.0.0.1/ceshi.php?url=https://www.aheart.cn/app/loading/loading.jpg";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInN0YXJ0IiwibG9hZGluZ0JhY2tncm91bmQiLCJyZW1vdGVVcmwiLCJzZWxmIiwibG9hZGVyIiwibG9hZCIsInVybCIsInR5cGUiLCJlcnIiLCJ0ZXh0dXJlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQUMsRUFBQUEsTUF2Qkssb0JBdUJLLENBQ047QUFDSCxHQXpCSTtBQTJCTEMsRUFBQUEsS0EzQkssbUJBMkJJLENBRVIsQ0E3Qkk7QUErQkw7QUFFQUMsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQVU7QUFDVDtBQUNaO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLDhFQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYLENBSnFCLENBS3JCOztBQUNBUixJQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVUMsSUFBVixDQUFlO0FBQUVDLE1BQUFBLEdBQUcsRUFBRUosU0FBUDtBQUFrQkssTUFBQUEsSUFBSSxFQUFFO0FBQXhCLEtBQWYsRUFBZ0QsVUFBVUMsR0FBVixFQUFlQyxPQUFmLEVBQXdCO0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUpOLE1BQUFBLElBQUksQ0FBQ08sSUFBTCxDQUFVQyxZQUFWLENBQXVCaEIsRUFBRSxDQUFDaUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdELElBQUlsQixFQUFFLENBQUNtQixXQUFQLENBQW1CTCxPQUFuQixDQUFoRCxDQTdCd0UsQ0E4QnhFO0FBQ0E7QUFHQyxLQWxDRDtBQW1DUDtBQTFFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyB0aGlzLmxvYWRpbmdCYWNrZ3JvdW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGxvYWRpbmdCYWNrZ3JvdW5kOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDkuIvovb3otYTmupDljIVcclxuICAgICAgICAgICAgLy8g6L+c56iLIHVybCDluKblm77niYflkI7nvIDlkI1cclxuICAgICAgICAgICAgdmFyIHJlbW90ZVVybCA9IFwiaHR0cDovLzEyNy4wLjAuMS9jZXNoaS5waHA/dXJsPWh0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvbG9hZGluZy9sb2FkaW5nLmpwZ1wiO1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKHJlbW90ZVVybCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsLCB0eXBlOiAnanBnJyB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7ICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyAgIOebtOaOpemHiuaUvuafkOS4qui0tOWbvlxyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9hZGVyLnJlbGVhc2UodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAvLyDph4rmlL7kuIDkuKogcHJlZmFiIOS7peWPiuaJgOacieWug+S+nei1lueahOi1hOa6kFxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGRlcHMgPSBjYy5sb2FkZXIuZ2V0RGVwZW5kc1JlY3Vyc2l2ZWx5KCd1cmxfcGhvdG8nKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlKGRlcHMpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8g5aaC5p6c5Zyo6L+Z5LiqIHByZWZhYiDkuK3mnInkuIDkupvlkozlnLrmma/lhbbku5bpg6jliIblhbHkuqvnmoTotYTmupDvvIzkvaDkuI3luIzmnJvlroPku6zooqvph4rmlL7vvIzmnInkuKTnp43mlrnms5XvvJpcclxuICAgICAgICAgICAgICAgIC8vIC8vIDEuIOaYvuW8j+WjsOaYjuemgeatouafkOS4qui1hOa6kOeahOiHquWKqOmHiuaUvlxyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9hZGVyLnNldEF1dG9SZWxlYXNlKHRoaXMuYmFja2dyb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gMi4g5bCG6L+Z5Liq6LWE5rqQ5LuO5L6d6LWW5YiX6KGo5Lit5Yig6ZmkXHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgZGVwcyA9IGNjLmxvYWRlci5nZXREZXBlbmRzUmVjdXJzaXZlbHkoJ3VybF9waG90bycpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGluZGV4ID0gZGVwcy5pbmRleE9mKHRoaXMuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoaW5kZXggIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRlcHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlKGRlcHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgLy8gIC8vIOaUueeUqCBjYy51cmwucmF377yM5q2k5pe26ZyA6KaB5aOw5piOIHJlc291cmNlcyDnm67lvZXlkozmlofku7blkI7nvIDlkI1cclxuICAgICAgICAgICAgICAgIC8vIC8vICB2YXIgcmVhbFVybCA9IGNjLnVybC5yYXcoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gIHZhciB0ZXh0dXJlID0gY2MudGV4dHVyZUNhY2hlLmFkZEltYWdlKHJlYWxVcmwpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIHRleHR1cmUpOyAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKVxyXG4gICAgICAgICAgICAvLyBzZWxmLm5vZGUuc3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0ZXh0dXJlLnVybCk7XHJcbiAgICAgICAgICAgIC8vIHNlbGYubm9kZS5zcHJpdGVGcmFtZS5zZXRDb250ZW50U2l6ZShyZXMuZ2V0Q29udGVudFNpemUoKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=