
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
      'pageSize': 8
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcQWxlcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJvbkxvYWQiLCJzcGF3blRvb2xzIiwic3RhcnQiLCJfdGhpcyIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJodHRwUG9zdCIsImRhdGEiLCJjZWxsV2lkdGgiLCJ3aWR0aCIsImNlbGxIZWlnaHQiLCJoZWlnaHQiLCJzcGFjaW5nWCIsInNwYWNpbmdZIiwiZ2V0Q29tcG9uZW50IiwiTGF5b3V0IiwiY2VsbFNpemUiLCJ0b29sc0FycmF5IiwiVE9PTFMiLCJzZXJ2ZXIiLCJpIiwibGVuZ3RoIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJwdXNoIiwiYWRkQ2hpbGQiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLLElBRFA7QUFFUkMsSUFBQUEsVUFBVSxFQUFFTixFQUFFLENBQUNPLE1BRlAsQ0FHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQ1EsR0FIUDtBQXlDTDtBQUVBQyxFQUFBQSxNQTNDSyxvQkEyQ0s7QUFDTDtB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VSxDQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQXpJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JpZExheW91dDogY2MuTm9kZSxcclxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgLy8gX2FsZXJ0Om51bGwsIC8v5o+Q56S65qGGXHJcbiAgICAgICAgLy8gX2J0bk9LOm51bGwsIC8v5o+Q56S65qGG56Gu5a6a5oyJ6ZKuXHJcbiAgICAgICAgLy8gX2J0bkNhbmNlbDpudWxsLCAvL+aPkOekuuahhuWPlua2iOaMiemSrlxyXG4gICAgICAgIC8vIF90aXRsZTpudWxsLCAvL+aPkOekuuahhuagh+mimFxyXG4gICAgICAgIC8vIF9jb250ZW50Om51bGwsIC8v5o+Q56S65qGG5YaF5a65XHJcbiAgICAgICAgLy8gX2J0bk9LQ2FsbGJhY2s6bnVsbCwgLy/ngrnlh7vnoa7lrprmjInpkq7nmoTlm57osIPkuovku7ZcclxuICAgICAgICAvLyBtYXNrOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGRsZzp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpudWxsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBzZXJ2ZXI6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6dHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIC8vIHRpcHM6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6dHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gZ3JpZExheW91dDp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDp0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB0b29sUHJlZmFiOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OnRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIG1hc2tfb3BhY2l0eTogMTAwLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHsgXHJcbiAgICAgICAgIC8vIOeUn+aIkOaJgOaciemBk+WFt1xyXG4gICAgICAgICB0aGlzLnNwYXduVG9vbHMoKTsgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAncGFnZSc6IDEsXHJcbiAgICAgICAgICAgICAgICAncGFnZVNpemUnOiA4LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdXNlci1yZWdpc3RlcicsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coX3RoaXMuZ3JpZExheW91dClcclxuICAgICAgICAgICAgLy8gbGV0IGNlbGxXaWR0aCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjEwNTtcclxuICAgICAgICAgICAgLy8gbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMjE1O1xyXG4gICAgICAgICAgICAvLyBsZXQgc3BhY2luZ1ggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4wMjI7XHJcbiAgICAgICAgICAgIC8vIGxldCBzcGFjaW5nWSA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNDU7XHJcbiAgICAgICAgICAgIGxldCBjZWxsV2lkdGggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC40NTtcclxuICAgICAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMjtcclxuICAgICAgICAgICAgbGV0IHNwYWNpbmdYID0gX3RoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMDU7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nWSA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUuaGVpZ2h0ID0gY2VsbEhlaWdodDtcclxuICAgICAgICAgICAgX3RoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWCA9IHNwYWNpbmdYO1xyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcbiAgICAgICAgICAgIC8vIOagueaNrlRPT0xT55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgICAgIF90aGlzLnRvb2xzQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgbGV0IFRPT0xTID0gZGF0YS5kYXRhLnNlcnZlcjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5kYXRhLnNlcnZlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvb2wgPSBjYy5pbnN0YW50aWF0ZShfdGhpcy50b29sUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRPT0xTW2ldKVxyXG4gICAgICAgICAgICAgICAgLy8gX3RoaXMuZ3JpZExheW91dC5hZGRDaGlsZCh0b29sKTtcclxuICAgICAgICAgICAgICAgIHRvb2wuZ2V0Q29tcG9uZW50KCdUb29scycpLmluaXRJbmZvKFRPT0xTW2ldKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHNob3dfZGxnICgpIHtcclxuICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5tYXNrLG9wYWNpdHkgPSAwO1xyXG4gICAgICAgIC8vIHZhciBhYzEgPWNjLmZhZGVUbygwLjMsdGhpcy5tYXNrX29wYWNpdHkpO1xyXG4gICAgICAgIC8vIHRoaXMubWFzay5ydW5BY3Rpb24oYWMxKTtcclxuICAgICAgICAvLyB0aGlzLmRsZy5zY2FsZSA9MDtcclxuICAgICAgICAvLyB2YXIgYWMyID1jYy5zY2FsZVRvKDAuMywxKS5lYXNpbmcoY2MuZWFzZUJhY2tvdXQoKSk7XHJcbiAgICAgICAgLy8gdGhpcy5kbGcucnVuQWN0aW9uKGFjMik7XHJcblxyXG4gICAgICAgIC8vIC8vIOiDjOWMheaMiemSrlxyXG4gICAgICAgIC8vIGlmICh0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSkge1xyXG4gICAgICAgIC8vICAgICAvLyDpmpDol4/oioLngrlcclxuICAgICAgICAvLyAgICAgdGhpcy5ncmlkTGF5b3V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgZWxlbWVudC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5pi+56S66IqC54K5XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgIFxyXG4gICAgICAgIC8vIH1cclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coMjIyKVxyXG4gICAgICAgIC8vIHRoaXMuZ3JpZExheW91dC5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gdmFyIGFjMSA9Y2MuZmFkZU91dCgwLjMpO1xyXG4gICAgICAgIC8vIHRoaXMubWFzay5ydW5BY3Rpb24oYWMxKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSk7XHJcbiAgICAgICAgLy8gdmFyIGFjMiA9Y2Muc2NhbGVUbygwLjMsMCkuZWFzaW5nKGNjLmVhc2VCYWNrSW4oKSk7XHJcbiAgICAgICAgLy8gdGhpcy5kbGcucnVuQWN0aW9uKGFjMik7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyB0aGlzLmJ0X1N0YXJ0R2FtZS5ub2RlLm9uKFwic3ByaXRlX3NlcnZlcl9sb2dpblwiLCB0aGlzLm9uU3RhcnRHYW1lVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMuYnRfU3RhcnRHYW1lLm5vZGUpO1xyXG4gICAgICAgIC8vIOivt+axguabtOaNoiBzZXJ2ZXJcclxuICAgIH0sXHJcbiBcclxuXHJcblxyXG59KTtcclxuIl19