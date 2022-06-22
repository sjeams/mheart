
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
    gridLayout: cc.Node,
    toolPrefab: cc.Prefab,
    bt_StartGame: cc.Button // _alert:null, //提示框
    // _btnOK:null, //提示框确定按钮
    // _btnCancel:null, //提示框取消按钮
    // _title:null, //提示框标题
    // _content:null, //提示框内容
    // _btnOKCallback:null, //点击确定按钮的回调事件
    // mask:{
    //     type:cc.node,
    //     default:null
    // },
    // dlg:{
    //     type:cc.node,
    //     default:null
    // },
    // server:{
    //     type:cc.node,
    //     default:true
    // },
    // tips:{
    //     type:cc.node,
    //     default:true
    // },
    // gridLayout:{
    //     type:cc.node,
    //     default:true
    // },
    // toolPrefab:{
    //     type:cc.node,
    //     default:true
    // },
    // mask_opacity: 100,

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 生成所有道具
    this.spawnTools();
  },
  start: function start() {// this.node.active =false;
  },
  spawnTools: function spawnTools() {
    var _this = this;

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    var params = {
      'page': 1,
      'pageSize': 8
    };
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-register', params, function (data) {
      console.log(data); //   for(let i = 0; i < data.data.server; i ++) {
      //     this.view[path + root.children[i].name] = root.children[i];
      //     this.load_all_object(root.children[i], path + root.children[i].name + "/");
      //     }
      // console.log(_this.gridLayout)
      // let cellWidth = _this.gridLayout.width * 0.105;
      // let cellHeight = _this.gridLayout.height * 0.215;
      // let spacingX = _this.gridLayout.width * 0.022;
      // let spacingY = _this.gridLayout.height * 0.045;

      var cellWidth = _this.gridLayout.width * 0.45;
      var cellHeight = _this.gridLayout.height * 0.2;
      var spacingX = _this.gridLayout.width * 0.05;
      var spacingY = _this.gridLayout.height * 0.05;
      _this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
      _this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
      _this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
      _this.gridLayout.getComponent(cc.Layout).spacingY = spacingY; // 根据TOOLS生成相应的道具

      _this.toolsArray = [];
      var TOOLS = data.data.server;

      for (var i = 0; i < data.data.server.length; i++) {
        var tool = cc.instantiate(_this.toolPrefab); // console.log(TOOLS[i])
        // _this.gridLayout.addChild(tool);

        tool.getComponent('Tools').initInfo(TOOLS[i]);

        _this.toolsArray.push(tool);

        _this.gridLayout.addChild(tool);
      }
    });
  },
  show_dlg: function show_dlg() {
    this.node.active = true; // this.mask,opacity = 0;
    // var ac1 =cc.fadeTo(0.3,this.mask_opacity);
    // this.mask.runAction(ac1);
    // this.dlg.scale =0;
    // var ac2 =cc.scaleTo(0.3,1).easing(cc.easeBackout());
    // this.dlg.runAction(ac2);
    // // 背包按钮
    // if (this.gridLayout.parent.active) {
    //     // 隐藏节点
    //     this.gridLayout.parent.active = false;
    //     // 删除所有道具(或者不删，只是隐藏，自己决定)
    //     this.toolsArray.forEach(element => {
    //         element.removeFromParent();
    //     });
    // }
    // else {
    // 显示节点
    // this.gridLayout.parent.active = true;
    // }
  },
  hidden_dlg: function hidden_dlg() {
    // this.gridLayout.destroy();
    // var ac1 =cc.fadeOut(0.3);
    // this.mask.runAction(ac1);
    // console.log( getComponent(cc.Label));
    // var ac2 =cc.scaleTo(0.3,0).easing(cc.easeBackIn());
    // this.dlg.runAction(ac2);
    // this.node.destroy();
    this.bt_StartGame.node.on("touchstart", this.onStartGameTouchStart, this);
    console.log(this.bt_StartGame.node);
    this.node.active = false; // 请求更换 server
  },
  onStartGameTouchStart: function onStartGameTouchStart() {
    console.log("1111"); // console.log("onStartGameTouchStart.");
    // cc.director.loadScene("GameScene");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcQWxlcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJidF9TdGFydEdhbWUiLCJCdXR0b24iLCJvbkxvYWQiLCJzcGF3blRvb2xzIiwic3RhcnQiLCJfdGhpcyIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJodHRwUG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2VsbFdpZHRoIiwid2lkdGgiLCJjZWxsSGVpZ2h0IiwiaGVpZ2h0Iiwic3BhY2luZ1giLCJzcGFjaW5nWSIsImdldENvbXBvbmVudCIsIkxheW91dCIsImNlbGxTaXplIiwidG9vbHNBcnJheSIsIlRPT0xTIiwic2VydmVyIiwiaSIsImxlbmd0aCIsInRvb2wiLCJpbnN0YW50aWF0ZSIsImluaXRJbmZvIiwicHVzaCIsImFkZENoaWxkIiwic2hvd19kbGciLCJub2RlIiwiYWN0aXZlIiwiaGlkZGVuX2RsZyIsIm9uIiwib25TdGFydEdhbWVUb3VjaFN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLLElBRFA7QUFFUkMsSUFBQUEsVUFBVSxFQUFFTixFQUFFLENBQUNPLE1BRlA7QUFHUkMsSUFBQUEsWUFBWSxFQUFDUixFQUFFLENBQUNTLE1BSFIsQ0FJUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtB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SVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBR0o7QUFFSCxHQWhJSTtBQWtJTEMsRUFBQUEsVUFsSUssd0JBa0lTO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFLcEMsWUFBTCxDQUFrQmtDLElBQWxCLENBQXVCRyxFQUF2QixDQUEwQixZQUExQixFQUF3QyxLQUFLQyxxQkFBN0MsRUFBb0UsSUFBcEU7QUFDQTFCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLEtBQUtiLFlBQUwsQ0FBa0JrQyxJQUEvQjtBQUVBLFNBQUtBLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQixDQVhVLENBWVY7QUFFSCxHQWhKSTtBQWlKTEcsRUFBQUEscUJBakpLLG1DQWlKbUI7QUFDcEIxQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBRG9CLENBRXBCO0FBQ0E7QUFDSDtBQXJKSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JpZExheW91dDogY2MuTm9kZSxcclxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgYnRfU3RhcnRHYW1lOmNjLkJ1dHRvblxyXG4gICAgICAgIC8vIF9hbGVydDpudWxsLCAvL+aPkOekuuahhlxyXG4gICAgICAgIC8vIF9idG5PSzpudWxsLCAvL+aPkOekuuahhuehruWumuaMiemSrlxyXG4gICAgICAgIC8vIF9idG5DYW5jZWw6bnVsbCwgLy/mj5DnpLrmoYblj5bmtojmjInpkq5cclxuICAgICAgICAvLyBfdGl0bGU6bnVsbCwgLy/mj5DnpLrmoYbmoIfpophcclxuICAgICAgICAvLyBfY29udGVudDpudWxsLCAvL+aPkOekuuahhuWGheWuuVxyXG4gICAgICAgIC8vIF9idG5PS0NhbGxiYWNrOm51bGwsIC8v54K55Ye756Gu5a6a5oyJ6ZKu55qE5Zue6LCD5LqL5Lu2XHJcbiAgICAgICAgLy8gbWFzazp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpudWxsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBkbGc6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6bnVsbFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gc2VydmVyOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OnRydWVcclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAvLyB0aXBzOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OnRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGdyaWRMYXlvdXQ6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6dHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gdG9vbFByZWZhYjp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDp0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBtYXNrX29wYWNpdHk6IDEwMCxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7IFxyXG4gICAgICAgICAgICAgLy8g55Sf5oiQ5omA5pyJ6YGT5YW3XHJcbiAgICAgICAgICAgICB0aGlzLnNwYXduVG9vbHMoKTsgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAncGFnZSc6IDEsXHJcbiAgICAgICAgICAgICAgICAncGFnZVNpemUnOiA4LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdXNlci1yZWdpc3RlcicsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIC8vICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEuZGF0YS5zZXJ2ZXI7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52aWV3W3BhdGggKyByb290LmNoaWxkcmVuW2ldLm5hbWVdID0gcm9vdC5jaGlsZHJlbltpXTtcclxuICAgICAgICAvLyAgICAgdGhpcy5sb2FkX2FsbF9vYmplY3Qocm9vdC5jaGlsZHJlbltpXSwgcGF0aCArIHJvb3QuY2hpbGRyZW5baV0ubmFtZSArIFwiL1wiKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhfdGhpcy5ncmlkTGF5b3V0KVxyXG4gICAgICAgICAgICAvLyBsZXQgY2VsbFdpZHRoID0gX3RoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMTA1O1xyXG4gICAgICAgICAgICAvLyBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgICAgIC8vIGxldCBzcGFjaW5nWCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjAyMjtcclxuICAgICAgICAgICAgLy8gbGV0IHNwYWNpbmdZID0gX3RoaXMuZ3JpZExheW91dC5oZWlnaHQgKiAwLjA0NTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjZWxsV2lkdGggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC40NTtcclxuICAgICAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMjtcclxuICAgICAgICAgICAgbGV0IHNwYWNpbmdYID0gX3RoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMDU7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nWSA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNTtcclxuXHJcbiAgICAgIFxyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgICAgX3RoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xyXG4gICAgICAgICAgICAvLyDmoLnmja5UT09MU+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgICAgICBfdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YS5zZXJ2ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPGRhdGEuZGF0YS5zZXJ2ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMudG9vbFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUT09MU1tpXSlcclxuICAgICAgICAgICAgICAgIC8vIF90aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgICAgICAgICB0b29sLmdldENvbXBvbmVudCgnVG9vbHMnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50b29sc0FycmF5LnB1c2godG9vbCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmFkZENoaWxkKHRvb2wpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID10cnVlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm1hc2ssb3BhY2l0eSA9IDA7XHJcbiAgICAgICAgLy8gdmFyIGFjMSA9Y2MuZmFkZVRvKDAuMyx0aGlzLm1hc2tfb3BhY2l0eSk7XHJcbiAgICAgICAgLy8gdGhpcy5tYXNrLnJ1bkFjdGlvbihhYzEpO1xyXG4gICAgICAgIC8vIHRoaXMuZGxnLnNjYWxlID0wO1xyXG4gICAgICAgIC8vIHZhciBhYzIgPWNjLnNjYWxlVG8oMC4zLDEpLmVhc2luZyhjYy5lYXNlQmFja291dCgpKTtcclxuICAgICAgICAvLyB0aGlzLmRsZy5ydW5BY3Rpb24oYWMyKTtcclxuXHJcbiAgICAgICAgLy8gLy8g6IOM5YyF5oyJ6ZKuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIOmakOiXj+iKgueCuVxyXG4gICAgICAgIC8vICAgICB0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyAgICAgLy8g5Yig6Zmk5omA5pyJ6YGT5YW3KOaIluiAheS4jeWIoO+8jOWPquaYr+makOiXj++8jOiHquW3seWGs+WumilcclxuICAgICAgICAvLyAgICAgdGhpcy50b29sc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBlbGVtZW50LnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDmmL7npLroioLngrlcclxuICAgICAgICAgICAgLy8gdGhpcy5ncmlkTGF5b3V0LnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICAvLyB0aGlzLmdyaWRMYXlvdXQuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIHZhciBhYzEgPWNjLmZhZGVPdXQoMC4zKTtcclxuICAgICAgICAvLyB0aGlzLm1hc2sucnVuQWN0aW9uKGFjMSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIGdldENvbXBvbmVudChjYy5MYWJlbCkpO1xyXG4gICAgICAgIC8vIHZhciBhYzIgPWNjLnNjYWxlVG8oMC4zLDApLmVhc2luZyhjYy5lYXNlQmFja0luKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuZGxnLnJ1bkFjdGlvbihhYzIpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5idF9TdGFydEdhbWUubm9kZS5vbihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblN0YXJ0R2FtZVRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmJ0X1N0YXJ0R2FtZS5ub2RlKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgICAgIC8vIOivt+axguabtOaNoiBzZXJ2ZXJcclxuIFxyXG4gICAgfSxcclxuICAgIG9uU3RhcnRHYW1lVG91Y2hTdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjExMTFcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvblN0YXJ0R2FtZVRvdWNoU3RhcnQuXCIpO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTY2VuZVwiKTtcclxuICAgIH0gIFxyXG5cclxuXHJcbn0pO1xyXG4iXX0=