
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
    var params = {
      'page': 1,
      'pageSize': 8
    };
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-register', params, function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcQWxlcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJzY3JvbGxfdmlldyIsIlNjcm9sbFZpZXciLCJvbkxvYWQiLCJzcGF3blRvb2xzIiwic3RhcnQiLCJfdGhpcyIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJodHRwUG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaSIsInNlcnZlciIsInZpZXciLCJwYXRoIiwicm9vdCIsImNoaWxkcmVuIiwibmFtZSIsImxvYWRfYWxsX29iamVjdCIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsInRvb2xzQXJyYXkiLCJUT09MUyIsImxlbmd0aCIsInRvb2wiLCJpbnN0YW50aWF0ZSIsImluaXRJbmZvIiwicHVzaCIsImFkZENoaWxkIiwic2hvd19kbGciLCJub2RlIiwiYWN0aXZlIiwiZGVzdHJveSIsImhpZGRlbl9kbGciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEUDtBQUVSQyxJQUFBQSxVQUFVLEVBQUVOLEVBQUUsQ0FBQ08sTUFGUDtBQUdSQyxJQUFBQSxXQUFXLEVBQUNSLEVBQUUsQ0FBQ1MsVUFIUCxDQUlSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LFlBQUlvQixJQUFJLEdBQUcxQyxFQUFFLENBQUMyQyxXQUFILENBQWU5QixLQUFLLENBQUNQLFVBQXJCLENBQVgsQ0FEMEMsQ0FFMUM7QUFDQTs7QUFDQW9DLFFBQUFBLElBQUksQ0FBQ04sWUFBTCxDQUFrQixPQUFsQixFQUEyQlEsUUFBM0IsQ0FBb0NKLEtBQUssQ0FBQ2xCLEVBQUQsQ0FBekM7O0FBQ0FULFFBQUFBLEtBQUssQ0FBQzBCLFVBQU4sQ0FBaUJNLElBQWpCLENBQXNCSCxJQUF0Qjs7QUFDQTdCLFFBQUFBLEtBQUssQ0FBQ1QsVUFBTixDQUFpQjBDLFFBQWpCLENBQTBCSixJQUExQjtBQUVIO0FBRUosS0FwQ0Q7QUFxQ0gsR0FqR0k7QUFvR0xLLEVBQUFBLFFBcEdLLHNCQW9HTztBQUVSLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjs7QUFDQXBDLElBQUFBLEtBQUssQ0FBQ1QsVUFBTixDQUFpQjhDLE9BQWpCLEdBSFEsQ0FJUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFHSjs7QUFFSCxHQWhJSTtBQWtJTEMsRUFBQUEsVUFsSUssd0JBa0lTO0FBRVY7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQUtILElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQixDQVJVLENBU1Y7QUFFSDtBQTdJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JpZExheW91dDogY2MuTm9kZSxcclxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgc2Nyb2xsX3ZpZXc6Y2MuU2Nyb2xsVmlld1xyXG4gICAgICAgIC8vIF9hbGVydDpudWxsLCAvL+aPkOekuuahhlxyXG4gICAgICAgIC8vIF9idG5PSzpudWxsLCAvL+aPkOekuuahhuehruWumuaMiemSrlxyXG4gICAgICAgIC8vIF9idG5DYW5jZWw6bnVsbCwgLy/mj5DnpLrmoYblj5bmtojmjInpkq5cclxuICAgICAgICAvLyBfdGl0bGU6bnVsbCwgLy/mj5DnpLrmoYbmoIfpophcclxuICAgICAgICAvLyBfY29udGVudDpudWxsLCAvL+aPkOekuuahhuWGheWuuVxyXG4gICAgICAgIC8vIF9idG5PS0NhbGxiYWNrOm51bGwsIC8v54K55Ye756Gu5a6a5oyJ6ZKu55qE5Zue6LCD5LqL5Lu2XHJcbiAgICAgICAgLy8gbWFzazp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpudWxsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBkbGc6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6bnVsbFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gc2VydmVyOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OnRydWVcclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAvLyB0aXBzOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OnRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGdyaWRMYXlvdXQ6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6dHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gdG9vbFByZWZhYjp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDp0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBtYXNrX29wYWNpdHk6IDEwMCxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7IFxyXG4gICAgICAgICAgICAgLy8g55Sf5oiQ5omA5pyJ6YGT5YW3XHJcbiAgICAgICAgICAgICB0aGlzLnNwYXduVG9vbHMoKTsgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAncGFnZSc6IDEsXHJcbiAgICAgICAgICAgICAgICAncGFnZVNpemUnOiA4LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdXNlci1yZWdpc3RlcicsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEuZGF0YS5zZXJ2ZXI7IGkgKyspIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3W3BhdGggKyByb290LmNoaWxkcmVuW2ldLm5hbWVdID0gcm9vdC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkX2FsbF9vYmplY3Qocm9vdC5jaGlsZHJlbltpXSwgcGF0aCArIHJvb3QuY2hpbGRyZW5baV0ubmFtZSArIFwiL1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhfdGhpcy5ncmlkTGF5b3V0KVxyXG4gICAgICAgICAgICAvLyBsZXQgY2VsbFdpZHRoID0gX3RoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMTA1O1xyXG4gICAgICAgICAgICAvLyBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgICAgIC8vIGxldCBzcGFjaW5nWCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjAyMjtcclxuICAgICAgICAgICAgLy8gbGV0IHNwYWNpbmdZID0gX3RoaXMuZ3JpZExheW91dC5oZWlnaHQgKiAwLjA0NTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjZWxsV2lkdGggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC40NTtcclxuICAgICAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMjtcclxuICAgICAgICAgICAgbGV0IHNwYWNpbmdYID0gX3RoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMDI7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nWSA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNTtcclxuXHJcbiAgICAgIFxyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgICAgX3RoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xyXG4gICAgICAgICAgICAvLyDmoLnmja5UT09MU+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgICAgICBfdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YS5zZXJ2ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPGRhdGEuZGF0YS5zZXJ2ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMudG9vbFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUT09MU1tpXSlcclxuICAgICAgICAgICAgICAgIC8vIF90aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgICAgICAgICB0b29sLmdldENvbXBvbmVudCgnVG9vbHMnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50b29sc0FycmF5LnB1c2godG9vbCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmFkZENoaWxkKHRvb2wpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICAgICAgX3RoaXMuZ3JpZExheW91dC5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gdGhpcy5tYXNrLG9wYWNpdHkgPSAwO1xyXG4gICAgICAgIC8vIHZhciBhYzEgPWNjLmZhZGVUbygwLjMsdGhpcy5tYXNrX29wYWNpdHkpO1xyXG4gICAgICAgIC8vIHRoaXMubWFzay5ydW5BY3Rpb24oYWMxKTtcclxuICAgICAgICAvLyB0aGlzLmRsZy5zY2FsZSA9MDtcclxuICAgICAgICAvLyB2YXIgYWMyID1jYy5zY2FsZVRvKDAuMywxKS5lYXNpbmcoY2MuZWFzZUJhY2tvdXQoKSk7XHJcbiAgICAgICAgLy8gdGhpcy5kbGcucnVuQWN0aW9uKGFjMik7XHJcblxyXG4gICAgICAgIC8vIC8vIOiDjOWMheaMiemSrlxyXG4gICAgICAgIC8vIGlmICh0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSkge1xyXG4gICAgICAgIC8vICAgICAvLyDpmpDol4/oioLngrlcclxuICAgICAgICAvLyAgICAgdGhpcy5ncmlkTGF5b3V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgZWxlbWVudC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5pi+56S66IqC54K5XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgIFxyXG4gICAgICAgIC8vIH1cclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgIFxyXG4gICAgICAgIC8vIHZhciBhYzEgPWNjLmZhZGVPdXQoMC4zKTtcclxuICAgICAgICAvLyB0aGlzLm1hc2sucnVuQWN0aW9uKGFjMSk7XHJcblxyXG4gICAgICAgIC8vIHZhciBhYzIgPWNjLnNjYWxlVG8oMC4zLDApLmVhc2luZyhjYy5lYXNlQmFja0luKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuZGxnLnJ1bkFjdGlvbihhYzIpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICAgICAgLy8g6K+35rGC5pu05o2iIHNlcnZlclxyXG5cclxuICAgIH0sXHJcbiAgICBcclxuXHJcblxyXG59KTtcclxuIl19