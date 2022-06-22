
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
    scroll_view: cc.ScrollView // _alert:null, //提示框
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
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-register', [], function (data) {
      console.log(data);

      for (var i = 0; i < data.data.server; i++) {
        this.view[path + root.children[i].name] = root.children[i];
        this.load_all_object(root.children[i], path + root.children[i].name + "/");
      } // console.log(_this.gridLayout)
      // let cellWidth = _this.gridLayout.width * 0.105;
      // let cellHeight = _this.gridLayout.height * 0.215;
      // let spacingX = _this.gridLayout.width * 0.022;
      // let spacingY = _this.gridLayout.height * 0.045;


      var cellWidth = _this.gridLayout.width * 0.45;
      var cellHeight = _this.gridLayout.height * 0.2;
      var spacingX = _this.gridLayout.width * 0.02;
      var spacingY = _this.gridLayout.height * 0.05;
      _this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
      _this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
      _this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
      _this.gridLayout.getComponent(cc.Layout).spacingY = spacingY; // 根据TOOLS生成相应的道具

      _this.toolsArray = [];
      var TOOLS = data.data.server;

      for (var _i = 0; _i < data.data.server.length; _i++) {
        var tool = cc.instantiate(_this.toolPrefab); // console.log(TOOLS[i])
        // _this.gridLayout.addChild(tool);

        tool.getComponent('Tools').initInfo(TOOLS[_i]);

        _this.toolsArray.push(tool);

        _this.gridLayout.addChild(tool);
      }
    });
  },
  show_dlg: function show_dlg() {
    this.node.active = true;

    _this.gridLayout.destroy(); // this.mask,opacity = 0;
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
    // var ac1 =cc.fadeOut(0.3);
    // this.mask.runAction(ac1);
    // var ac2 =cc.scaleTo(0.3,0).easing(cc.easeBackIn());
    // this.dlg.runAction(ac2);
    // this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcQWxlcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJzY3JvbGxfdmlldyIsIlNjcm9sbFZpZXciLCJvbkxvYWQiLCJzcGF3blRvb2xzIiwic3RhcnQiLCJfdGhpcyIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJodHRwUG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaSIsInNlcnZlciIsInZpZXciLCJwYXRoIiwicm9vdCIsImNoaWxkcmVuIiwibmFtZSIsImxvYWRfYWxsX29iamVjdCIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsInRvb2xzQXJyYXkiLCJUT09MUyIsImxlbmd0aCIsInRvb2wiLCJpbnN0YW50aWF0ZSIsImluaXRJbmZvIiwicHVzaCIsImFkZENoaWxkIiwic2hvd19kbGciLCJub2RlIiwiYWN0aXZlIiwiZGVzdHJveSIsImhpZGRlbl9kbGciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEUDtBQUVSQyxJQUFBQSxVQUFVLEVBQUVOLEVBQUUsQ0FBQ08sTUFGUDtBQUdSQyxJQUFBQSxXQUFXLEVBQUNSLEVBQUUsQ0FBQ1MsVUFIUCxDQUlSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUQwQyxDQUUxQztBQUNBOztBQUNBbUMsUUFBQUEsSUFBSSxDQUFDTixZQUFMLENBQWtCLE9BQWxCLEVBQTJCUSxRQUEzQixDQUFvQ0osS0FBSyxDQUFDbEIsRUFBRCxDQUF6Qzs7QUFDQVIsUUFBQUEsS0FBSyxDQUFDeUIsVUFBTixDQUFpQk0sSUFBakIsQ0FBc0JILElBQXRCOztBQUNBNUIsUUFBQUEsS0FBSyxDQUFDVCxVQUFOLENBQWlCeUMsUUFBakIsQ0FBMEJKLElBQTFCO0FBRUg7QUFFSixLQXBDRDtBQXFDSCxHQTdGSTtBQWdHTEssRUFBQUEsUUFoR0ssc0JBZ0dPO0FBRVIsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLElBQWxCOztBQUNBbkMsSUFBQUEsS0FBSyxDQUFDVCxVQUFOLENBQWlCNkMsT0FBakIsR0FIUSxDQUlSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUdKOztBQUVILEdBNUhJO0FBOEhMQyxFQUFBQSxVQTlISyx3QkE4SFM7QUFFVjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBS0gsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLEtBQWxCLENBUlUsQ0FTVjtBQUVIO0FBeklJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBncmlkTGF5b3V0OiBjYy5Ob2RlLFxyXG4gICAgICAgIHRvb2xQcmVmYWI6IGNjLlByZWZhYixcclxuICAgICAgICBzY3JvbGxfdmlldzpjYy5TY3JvbGxWaWV3XHJcbiAgICAgICAgLy8gX2FsZXJ0Om51bGwsIC8v5o+Q56S65qGGXHJcbiAgICAgICAgLy8gX2J0bk9LOm51bGwsIC8v5o+Q56S65qGG56Gu5a6a5oyJ6ZKuXHJcbiAgICAgICAgLy8gX2J0bkNhbmNlbDpudWxsLCAvL+aPkOekuuahhuWPlua2iOaMiemSrlxyXG4gICAgICAgIC8vIF90aXRsZTpudWxsLCAvL+aPkOekuuahhuagh+mimFxyXG4gICAgICAgIC8vIF9jb250ZW50Om51bGwsIC8v5o+Q56S65qGG5YaF5a65XHJcbiAgICAgICAgLy8gX2J0bk9LQ2FsbGJhY2s6bnVsbCwgLy/ngrnlh7vnoa7lrprmjInpkq7nmoTlm57osIPkuovku7ZcclxuICAgICAgICAvLyBtYXNrOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGRsZzp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpudWxsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBzZXJ2ZXI6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6dHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIC8vIHRpcHM6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6dHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gZ3JpZExheW91dDp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDp0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB0b29sUHJlZmFiOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OnRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIG1hc2tfb3BhY2l0eTogMTAwLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHsgXHJcbiAgICAgICAgICAgICAvLyDnlJ/miJDmiYDmnInpgZPlhbdcclxuICAgICAgICAgICAgIHRoaXMuc3Bhd25Ub29scygpOyAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdXNlci1yZWdpc3RlcicsIFtdLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5kYXRhLnNlcnZlcjsgaSArKykge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdbcGF0aCArIHJvb3QuY2hpbGRyZW5baV0ubmFtZV0gPSByb290LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRfYWxsX29iamVjdChyb290LmNoaWxkcmVuW2ldLCBwYXRoICsgcm9vdC5jaGlsZHJlbltpXS5uYW1lICsgXCIvXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKF90aGlzLmdyaWRMYXlvdXQpXHJcbiAgICAgICAgICAgIC8vIGxldCBjZWxsV2lkdGggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4xMDU7XHJcbiAgICAgICAgICAgIC8vIGxldCBjZWxsSGVpZ2h0ID0gX3RoaXMuZ3JpZExheW91dC5oZWlnaHQgKiAwLjIxNTtcclxuICAgICAgICAgICAgLy8gbGV0IHNwYWNpbmdYID0gX3RoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMDIyO1xyXG4gICAgICAgICAgICAvLyBsZXQgc3BhY2luZ1kgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMDQ1O1xyXG5cclxuICAgICAgICAgICAgbGV0IGNlbGxXaWR0aCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjQ1O1xyXG4gICAgICAgICAgICBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yO1xyXG4gICAgICAgICAgICBsZXQgc3BhY2luZ1ggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4wMjtcclxuICAgICAgICAgICAgbGV0IHNwYWNpbmdZID0gX3RoaXMuZ3JpZExheW91dC5oZWlnaHQgKiAwLjA1O1xyXG5cclxuICAgICAgXHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUuaGVpZ2h0ID0gY2VsbEhlaWdodDtcclxuICAgICAgICAgICAgX3RoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWCA9IHNwYWNpbmdYO1xyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcbiAgICAgICAgICAgIC8vIOagueaNrlRPT0xT55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgICAgIF90aGlzLnRvb2xzQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgbGV0IFRPT0xTID0gZGF0YS5kYXRhLnNlcnZlcjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5kYXRhLnNlcnZlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvb2wgPSBjYy5pbnN0YW50aWF0ZShfdGhpcy50b29sUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRPT0xTW2ldKVxyXG4gICAgICAgICAgICAgICAgLy8gX3RoaXMuZ3JpZExheW91dC5hZGRDaGlsZCh0b29sKTtcclxuICAgICAgICAgICAgICAgIHRvb2wuZ2V0Q29tcG9uZW50KCdUb29scycpLmluaXRJbmZvKFRPT0xTW2ldKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHNob3dfZGxnICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmRlc3Ryb3koKTtcclxuICAgICAgICAvLyB0aGlzLm1hc2ssb3BhY2l0eSA9IDA7XHJcbiAgICAgICAgLy8gdmFyIGFjMSA9Y2MuZmFkZVRvKDAuMyx0aGlzLm1hc2tfb3BhY2l0eSk7XHJcbiAgICAgICAgLy8gdGhpcy5tYXNrLnJ1bkFjdGlvbihhYzEpO1xyXG4gICAgICAgIC8vIHRoaXMuZGxnLnNjYWxlID0wO1xyXG4gICAgICAgIC8vIHZhciBhYzIgPWNjLnNjYWxlVG8oMC4zLDEpLmVhc2luZyhjYy5lYXNlQmFja291dCgpKTtcclxuICAgICAgICAvLyB0aGlzLmRsZy5ydW5BY3Rpb24oYWMyKTtcclxuXHJcbiAgICAgICAgLy8gLy8g6IOM5YyF5oyJ6ZKuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIOmakOiXj+iKgueCuVxyXG4gICAgICAgIC8vICAgICB0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyAgICAgLy8g5Yig6Zmk5omA5pyJ6YGT5YW3KOaIluiAheS4jeWIoO+8jOWPquaYr+makOiXj++8jOiHquW3seWGs+WumilcclxuICAgICAgICAvLyAgICAgdGhpcy50b29sc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBlbGVtZW50LnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDmmL7npLroioLngrlcclxuICAgICAgICAgICAgLy8gdGhpcy5ncmlkTGF5b3V0LnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgXHJcbiAgICAgICAgLy8gdmFyIGFjMSA9Y2MuZmFkZU91dCgwLjMpO1xyXG4gICAgICAgIC8vIHRoaXMubWFzay5ydW5BY3Rpb24oYWMxKTtcclxuXHJcbiAgICAgICAgLy8gdmFyIGFjMiA9Y2Muc2NhbGVUbygwLjMsMCkuZWFzaW5nKGNjLmVhc2VCYWNrSW4oKSk7XHJcbiAgICAgICAgLy8gdGhpcy5kbGcucnVuQWN0aW9uKGFjMik7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgICAgICAvLyDor7fmsYLmm7TmjaIgc2VydmVyXHJcblxyXG4gICAgfSxcclxuICAgIFxyXG5cclxuXHJcbn0pO1xyXG4iXX0=