
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