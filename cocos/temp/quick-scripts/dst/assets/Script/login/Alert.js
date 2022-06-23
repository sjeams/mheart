
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
    toolPrefab: cc.Prefab // _alert:null, //提示框
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
      'pageSize': 12
    };
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-register', params, function (data) {
      //   console.log(data);
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
    this.node.active = false; // console.log(222)
    // this.gridLayout.destroy();
    // var ac1 =cc.fadeOut(0.3);
    // this.mask.runAction(ac1);
    // console.log( getComponent(cc.Label));
    // var ac2 =cc.scaleTo(0.3,0).easing(cc.easeBackIn());
    // this.dlg.runAction(ac2);
    // this.node.destroy();
    // this.bt_StartGame.node.on("sprite_server_login", this.onStartGameTouchStart, this);
    // console.log( this.bt_StartGame.node);
    // 请求更换 server
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcQWxlcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJvbkxvYWQiLCJzcGF3blRvb2xzIiwic3RhcnQiLCJfdGhpcyIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJodHRwUG9zdCIsImRhdGEiLCJjZWxsV2lkdGgiLCJ3aWR0aCIsImNlbGxIZWlnaHQiLCJoZWlnaHQiLCJzcGFjaW5nWCIsInNwYWNpbmdZIiwiZ2V0Q29tcG9uZW50IiwiTGF5b3V0IiwiY2VsbFNpemUiLCJ0b29sc0FycmF5IiwiVE9PTFMiLCJzZXJ2ZXIiLCJpIiwibGVuZ3RoIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJwdXNoIiwiYWRkQ2hpbGQiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLLElBRFA7QUFFUkMsSUFBQUEsVUFBVSxFQUFFTixFQUFFLENBQUNPLE1BRlAsQ0FHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQ1EsR0FIUDtBQXlDTDtBQUVBQyxFQUFBQSxNQTNDSyxvQkEyQ0s7QUFDTDtB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VSxDQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQXpJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JpZExheW91dDogY2MuTm9kZSxcclxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgLy8gX2FsZXJ0Om51bGwsIC8v5o+Q56S65qGGXHJcbiAgICAgICAgLy8gX2J0bk9LOm51bGwsIC8v5o+Q56S65qGG56Gu5a6a5oyJ6ZKuXHJcbiAgICAgICAgLy8gX2J0bkNhbmNlbDpudWxsLCAvL+aPkOekuuahhuWPlua2iOaMiemSrlxyXG4gICAgICAgIC8vIF90aXRsZTpudWxsLCAvL+aPkOekuuahhuagh+mimFxyXG4gICAgICAgIC8vIF9jb250ZW50Om51bGwsIC8v5o+Q56S65qGG5YaF5a65XHJcbiAgICAgICAgLy8gX2J0bk9LQ2FsbGJhY2s6bnVsbCwgLy/ngrnlh7vnoa7lrprmjInpkq7nmoTlm57osIPkuovku7ZcclxuICAgICAgICAvLyBtYXNrOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGRsZzp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpudWxsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBzZXJ2ZXI6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6dHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIC8vIHRpcHM6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6dHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gZ3JpZExheW91dDp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDp0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB0b29sUHJlZmFiOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OnRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIG1hc2tfb3BhY2l0eTogMTAwLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHsgXHJcbiAgICAgICAgIC8vIOeUn+aIkOaJgOaciemBk+WFt1xyXG4gICAgICAgICB0aGlzLnNwYXduVG9vbHMoKTsgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAncGFnZSc6IDEsXHJcbiAgICAgICAgICAgICAgICAncGFnZVNpemUnOiAxMixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3VzZXItcmVnaXN0ZXInLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKF90aGlzLmdyaWRMYXlvdXQpXHJcbiAgICAgICAgICAgIC8vIGxldCBjZWxsV2lkdGggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4xMDU7XHJcbiAgICAgICAgICAgIC8vIGxldCBjZWxsSGVpZ2h0ID0gX3RoaXMuZ3JpZExheW91dC5oZWlnaHQgKiAwLjIxNTtcclxuICAgICAgICAgICAgLy8gbGV0IHNwYWNpbmdYID0gX3RoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMDIyO1xyXG4gICAgICAgICAgICAvLyBsZXQgc3BhY2luZ1kgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMDQ1O1xyXG4gICAgICAgICAgICBsZXQgY2VsbFdpZHRoID0gX3RoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuNDU7XHJcbiAgICAgICAgICAgIGxldCBjZWxsSGVpZ2h0ID0gX3RoaXMuZ3JpZExheW91dC5oZWlnaHQgKiAwLjI7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nWCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjA1O1xyXG4gICAgICAgICAgICBsZXQgc3BhY2luZ1kgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMDU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgICAgX3RoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xyXG4gICAgICAgICAgICAvLyDmoLnmja5UT09MU+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgICAgICBfdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YS5zZXJ2ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPGRhdGEuZGF0YS5zZXJ2ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMudG9vbFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUT09MU1tpXSlcclxuICAgICAgICAgICAgICAgIC8vIF90aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgICAgICAgICB0b29sLmdldENvbXBvbmVudCgnVG9vbHMnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50b29sc0FycmF5LnB1c2godG9vbCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmFkZENoaWxkKHRvb2wpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID10cnVlO1xyXG4gICAgICAgIC8vIHRoaXMubWFzayxvcGFjaXR5ID0gMDtcclxuICAgICAgICAvLyB2YXIgYWMxID1jYy5mYWRlVG8oMC4zLHRoaXMubWFza19vcGFjaXR5KTtcclxuICAgICAgICAvLyB0aGlzLm1hc2sucnVuQWN0aW9uKGFjMSk7XHJcbiAgICAgICAgLy8gdGhpcy5kbGcuc2NhbGUgPTA7XHJcbiAgICAgICAgLy8gdmFyIGFjMiA9Y2Muc2NhbGVUbygwLjMsMSkuZWFzaW5nKGNjLmVhc2VCYWNrb3V0KCkpO1xyXG4gICAgICAgIC8vIHRoaXMuZGxnLnJ1bkFjdGlvbihhYzIpO1xyXG5cclxuICAgICAgICAvLyAvLyDog4zljIXmjInpkq5cclxuICAgICAgICAvLyBpZiAodGhpcy5ncmlkTGF5b3V0LnBhcmVudC5hY3RpdmUpIHtcclxuICAgICAgICAvLyAgICAgLy8g6ZqQ6JeP6IqC54K5XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyDliKDpmaTmiYDmnInpgZPlhbco5oiW6ICF5LiN5Yig77yM5Y+q5piv6ZqQ6JeP77yM6Ieq5bex5Yaz5a6aKVxyXG4gICAgICAgIC8vICAgICB0aGlzLnRvb2xzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGVsZW1lbnQucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOaYvuekuuiKgueCuVxyXG4gICAgICAgICAgICAvLyB0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICBcclxuICAgICAgICAvLyB9XHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIGhpZGRlbl9kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKDIyMilcclxuICAgICAgICAvLyB0aGlzLmdyaWRMYXlvdXQuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIHZhciBhYzEgPWNjLmZhZGVPdXQoMC4zKTtcclxuICAgICAgICAvLyB0aGlzLm1hc2sucnVuQWN0aW9uKGFjMSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIGdldENvbXBvbmVudChjYy5MYWJlbCkpO1xyXG4gICAgICAgIC8vIHZhciBhYzIgPWNjLnNjYWxlVG8oMC4zLDApLmVhc2luZyhjYy5lYXNlQmFja0luKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuZGxnLnJ1bkFjdGlvbihhYzIpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gdGhpcy5idF9TdGFydEdhbWUubm9kZS5vbihcInNwcml0ZV9zZXJ2ZXJfbG9naW5cIiwgdGhpcy5vblN0YXJ0R2FtZVRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLmJ0X1N0YXJ0R2FtZS5ub2RlKTtcclxuICAgICAgICAvLyDor7fmsYLmm7TmjaIgc2VydmVyXHJcbiAgICB9LFxyXG4gXHJcblxyXG5cclxufSk7XHJcbiJdfQ==