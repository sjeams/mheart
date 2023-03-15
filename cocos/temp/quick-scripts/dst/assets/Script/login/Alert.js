
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
      'pageSize': 11
    };
    httpRequest.httpPost('https://www.aheart.cn/app/api-server/user-register', params, function (data) {
      //   console.log(data);
      // console.log(_this.gridLayout)
      // let cellWidth = _this.gridLayout.width * 0.105;
      // let cellHeight = _this.gridLayout.height * 0.215;
      // let spacingX = _this.gridLayout.width * 0.022;
      // let spacingY = _this.gridLayout.height * 0.045;
      var cellWidth = _this.gridLayout.width * 0.45;
      var cellHeight = _this.gridLayout.height * 0.15;
      var spacingX = _this.gridLayout.width * 0.08;
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
      } // 定义content滚动条高度


      var scorllheight = _this.gridLayout.parent; //计算滚动条高度

      var height = (cellHeight + spacingY) * Math.ceil(data.data.server.length / 2); // console.log(height);
      // scorllheight.designResolution  = new cc.Size(600, height);

      scorllheight.setContentSize(600, height);
    });
  },
  show_dlg: function show_dlg() {
    this.node.active = true; //     // 删除所有道具(或者不删，只是隐藏，自己决定)
    //     this.toolsArray.forEach(element => {
    //         element.removeFromParent();
    //     });
  },
  hidden_dlg: function hidden_dlg() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcQWxlcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJvbkxvYWQiLCJzcGF3blRvb2xzIiwic3RhcnQiLCJfdGhpcyIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJodHRwUG9zdCIsImRhdGEiLCJjZWxsV2lkdGgiLCJ3aWR0aCIsImNlbGxIZWlnaHQiLCJoZWlnaHQiLCJzcGFjaW5nWCIsInNwYWNpbmdZIiwiZ2V0Q29tcG9uZW50IiwiTGF5b3V0IiwiY2VsbFNpemUiLCJ0b29sc0FycmF5IiwiVE9PTFMiLCJzZXJ2ZXIiLCJpIiwibGVuZ3RoIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJwdXNoIiwiYWRkQ2hpbGQiLCJzY29ybGxoZWlnaHQiLCJwYXJlbnQiLCJNYXRoIiwiY2VpbCIsInNldENvbnRlbnRTaXplIiwic2hvd19kbGciLCJub2RlIiwiYWN0aXZlIiwiaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBRU4sRUFBRSxDQUFDTyxNQUZQLENBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWlEsR0FIUDtBQWtCTDtBQUVBQyxFQUFBQSxNQXBCSyxvQkFvQks7QUFDTDtBQUNBLFNBQUtDLFVBQUw7QUFDSixHQXZCSTtBQXlCTEMsRUFBQUEsS0F6QkssbUJBeUJJ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cUIsRUFBQUEsUUE1RUssc0JBNEVPO0FBR1IsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLElBQWxCLENBSFEsQ0FJUjtBQUNBO0FBQ0E7QUFDQTtBQUVILEdBckZJO0FBdUZMQyxFQUFBQSxVQXZGSyx3QkF1RlM7QUFDVixTQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEIsQ0FEVSxDQUVWO0FBQ0g7QUExRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdyaWRMYXlvdXQ6IGNjLk5vZGUsXHJcbiAgICAgICAgdG9vbFByZWZhYjogY2MuUHJlZmFiLFxyXG4gICAgICAgIC8vIF9hbGVydDpudWxsLCAvL+aPkOekuuahhlxyXG4gICAgICAgIC8vIF9idG5PSzpudWxsLCAvL+aPkOekuuahhuehruWumuaMiemSrlxyXG4gICAgICAgIC8vIF9idG5DYW5jZWw6bnVsbCwgLy/mj5DnpLrmoYblj5bmtojmjInpkq5cclxuICAgICAgICAvLyBfdGl0bGU6bnVsbCwgLy/mj5DnpLrmoYbmoIfpophcclxuICAgICAgICAvLyBfY29udGVudDpudWxsLCAvL+aPkOekuuahhuWGheWuuVxyXG4gICAgICAgIC8vIF9idG5PS0NhbGxiYWNrOm51bGwsIC8v54K55Ye756Gu5a6a5oyJ6ZKu55qE5Zue6LCD5LqL5Lu2XHJcbiAgICAgICAgLy8gbWFzazp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpudWxsXHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHsgXHJcbiAgICAgICAgIC8vIOeUn+aIkOaJgOaciemBk+WFt1xyXG4gICAgICAgICB0aGlzLnNwYXduVG9vbHMoKTsgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAncGFnZSc6IDEsXHJcbiAgICAgICAgICAgICAgICAncGFnZVNpemUnOiAxMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS1zZXJ2ZXIvdXNlci1yZWdpc3RlcicsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhfdGhpcy5ncmlkTGF5b3V0KVxyXG4gICAgICAgICAgICAvLyBsZXQgY2VsbFdpZHRoID0gX3RoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMTA1O1xyXG4gICAgICAgICAgICAvLyBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgICAgIC8vIGxldCBzcGFjaW5nWCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjAyMjtcclxuICAgICAgICAgICAgLy8gbGV0IHNwYWNpbmdZID0gX3RoaXMuZ3JpZExheW91dC5oZWlnaHQgKiAwLjA0NTtcclxuICAgICAgICAgICAgbGV0IGNlbGxXaWR0aCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjQ1O1xyXG4gICAgICAgICAgICBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4xNTtcclxuICAgICAgICAgICAgbGV0IHNwYWNpbmdYID0gX3RoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMDg7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nWSA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUuaGVpZ2h0ID0gY2VsbEhlaWdodDtcclxuICAgICAgICAgICAgX3RoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWCA9IHNwYWNpbmdYO1xyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcbiAgICAgICAgICAgIC8vIOagueaNrlRPT0xT55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgICAgIF90aGlzLnRvb2xzQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgbGV0IFRPT0xTID0gZGF0YS5kYXRhLnNlcnZlcjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5kYXRhLnNlcnZlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvb2wgPSBjYy5pbnN0YW50aWF0ZShfdGhpcy50b29sUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRPT0xTW2ldKVxyXG4gICAgICAgICAgICAgICAgLy8gX3RoaXMuZ3JpZExheW91dC5hZGRDaGlsZCh0b29sKTtcclxuICAgICAgICAgICAgICAgIHRvb2wuZ2V0Q29tcG9uZW50KCdUb29scycpLmluaXRJbmZvKFRPT0xTW2ldKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlrprkuYljb250ZW505rua5Yqo5p2h6auY5bqmXHJcbiAgICAgICAgICAgIGxldCBzY29ybGxoZWlnaHQgPSAgX3RoaXMuZ3JpZExheW91dC5wYXJlbnQ7XHJcbiAgICAgICAgICAgIC8v6K6h566X5rua5Yqo5p2h6auY5bqmXHJcbiAgICAgICAgICAgIGxldCAgaGVpZ2h0ID0gIChjZWxsSGVpZ2h0K3NwYWNpbmdZKSooIE1hdGguY2VpbCggZGF0YS5kYXRhLnNlcnZlci5sZW5ndGgvMikpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoZWlnaHQpO1xyXG4gICAgICAgICAgICAvLyBzY29ybGxoZWlnaHQuZGVzaWduUmVzb2x1dGlvbiAgPSBuZXcgY2MuU2l6ZSg2MDAsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIHNjb3JsbGhlaWdodC5zZXRDb250ZW50U2l6ZSg2MDAsaGVpZ2h0KTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc2hvd19kbGcgKCkge1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgICAgICAvLyAgICAgLy8g5Yig6Zmk5omA5pyJ6YGT5YW3KOaIluiAheS4jeWIoO+8jOWPquaYr+makOiXj++8jOiHquW3seWGs+WumilcclxuICAgICAgICAvLyAgICAgdGhpcy50b29sc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBlbGVtZW50LnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIGhpZGRlbl9kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgICAgIC8vIOivt+axguabtOaNoiBzZXJ2ZXJcclxuICAgIH0sXHJcbiBcclxuXHJcblxyXG59KTtcclxuIl19