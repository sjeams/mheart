
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

/*
 * @Author: sjeam
 * @Date: 2023-12-14 15:37:12
 * @Description: 
 */
// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Node,
    progress: cc.Prefab // foo: {
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
  start: function start() {} // //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
  // cc.loader.loadRes(PrefabUrl, function(errorMessage,loadedResource){});
  // //开始实例化预制资源(这是个实例化是我自己理解的，可能说的不正确)
  // var TipBoxPrefab = cc.instantiate(loadedResource);
  // //将预制资源添加到父节点CanvasNode为画布canvas节点 是用cc.find()获得的对象
  // CanvasNode.addChild(TipBoxPrefab);
  // update (dt) {},
  // 远程加载图片
  // cc.loader.load(umlP2, function (err, tex) {
  //     var spFrame = new cc.SpriteFrame();
  //     spFrame.setTexture(tex);
  //     cc.find("Canvas/londing/playerNode2/mask/playerphoto").
  //     getComponent(cc.Sprite).spriteFrame = spFrame;
  // });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwcm9ncmVzc1Rvb2xzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwcm9ncmVzcyIsIlByZWZhYiIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFSixFQUFFLENBQUNLLElBREo7QUFFUkMsSUFBQUEsUUFBUSxFQUFFTixFQUFFLENBQUNPLE1BRkwsQ0FHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBakJRLEdBSFA7QUF1Qkw7QUFFQTtBQUVBQyxFQUFBQSxLQTNCSyxtQkEyQkksQ0FFUixDQTdCSSxDQThCTDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTVDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBzamVhbVxyXG4gKiBARGF0ZTogMjAyMy0xMi0xNCAxNTozNzoxMlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IGNjLlByZWZhYixcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgLy8gLy/liqDovb3pooTliLbotYTmupAgUHJlZmFiVXJs5Li6IOmihOWItui1hOa6kOWcqCDotYTmupDkuK3nmoTot6/lvoRcclxuICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKFByZWZhYlVybCwgZnVuY3Rpb24oZXJyb3JNZXNzYWdlLGxvYWRlZFJlc291cmNlKXt9KTtcclxuICAgIC8vIC8v5byA5aeL5a6e5L6L5YyW6aKE5Yi26LWE5rqQKOi/meaYr+S4quWunuS+i+WMluaYr+aIkeiHquW3seeQhuino+eahO+8jOWPr+iDveivtOeahOS4jeato+ehrilcclxuICAgIC8vIHZhciBUaXBCb3hQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShsb2FkZWRSZXNvdXJjZSk7XHJcblxyXG4gICAgLy8gLy/lsIbpooTliLbotYTmupDmt7vliqDliLDniLboioLngrlDYW52YXNOb2Rl5Li655S75biDY2FudmFz6IqC54K5IOaYr+eUqGNjLmZpbmQoKeiOt+W+l+eahOWvueixoVxyXG4gICAgLy8gQ2FudmFzTm9kZS5hZGRDaGlsZChUaXBCb3hQcmVmYWIpO1xyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICAvLyDov5znqIvliqDovb3lm77niYdcclxuICAgIC8vIGNjLmxvYWRlci5sb2FkKHVtbFAyLCBmdW5jdGlvbiAoZXJyLCB0ZXgpIHtcclxuICAgIC8vICAgICB2YXIgc3BGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSgpO1xyXG4gICAgLy8gICAgIHNwRnJhbWUuc2V0VGV4dHVyZSh0ZXgpO1xyXG4gICAgLy8gICAgIGNjLmZpbmQoXCJDYW52YXMvbG9uZGluZy9wbGF5ZXJOb2RlMi9tYXNrL3BsYXllcnBob3RvXCIpLlxyXG4gICAgLy8gICAgIGdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3BGcmFtZTtcclxuICAgIC8vIH0pO1xyXG4gXHJcbn0pO1xyXG4iXX0=