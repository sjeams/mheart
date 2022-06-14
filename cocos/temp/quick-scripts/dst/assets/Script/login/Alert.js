
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
  onLoad: function onLoad() {},
  start: function start() {// this.node.active =false;
  },
  spawnTools: function spawnTools() {
    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-register', [], function (data) {
      //   for(let i = 0; i < data.server; i ++) {
      //     this.view[path + root.children[i].name] = root.children[i];
      //     this.load_all_object(root.children[i], path + root.children[i].name + "/");
      //     }
      console.log(this.gridLayout);
      var cellWidth = this.gridLayout.width * 0.105;
      var cellHeight = this.gridLayout.height * 0.215;
      var spacingX = this.gridLayout.width * 0.022;
      var spacingY = this.gridLayout.height * 0.045;
      this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
      this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
      this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
      this.gridLayout.getComponent(cc.Layout).spacingY = spacingY; // 根据TOOLS生成相应的道具

      this.toolsArray = [];
      var TOOLS = data.server;

      for (var i = 0; i < data.server.length; i++) {
        var tool = cc.instantiate(this.toolPrefab);
        tool.getComponent('Tools').initInfo(TOOLS[i]);
        this.toolsArray.push(tool);
        this.gridLayout.addChild(tool);
      }
    });
  },
  show_dlg: function show_dlg() {
    // 生成所有道具
    this.spawnTools();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcQWxlcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJvbkxvYWQiLCJzdGFydCIsInNwYXduVG9vbHMiLCJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwiaHR0cFBvc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsInRvb2xzQXJyYXkiLCJUT09MUyIsInNlcnZlciIsImkiLCJsZW5ndGgiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsInB1c2giLCJhZGRDaGlsZCIsInNob3dfZGxnIiwibm9kZSIsImFjdGl2ZSIsImhpZGRlbl9kbGciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEUDtBQUVSQyxJQUFBQSxVQUFVLEVBQUVOLEVBQUUsQ0FBQ08sTUFGUCxDQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWxDUSxHQUhQO0FBeUNMO0FBRUFDLEVBQUFBLE1BM0NLLG9CQTJDSyxDQUVULENBN0NJO0FBK0NMQyxFQUFBQSxLQS9DSyxtQkErQ0ksQ0FDTDtBQUNILEdBakRJO0FBa0RMQyxFQUFBQSxVQWxESyx3QkFrRFM7QUFDVixRQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCOztBQUNBLFFBQUlDLFdBQVcsR0FBRyxJQUFJRixVQUFKLEVBQWxCO0FBQ0FFLElBQUFBLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQixxREFBckIsRUFBNEUsRUFBNUUsRUFBZ0YsVUFBVUMsSUFBVixFQUFnQjtBQUVoRztBQUNBO0FBQ0E7QUFDQTtBQUNJQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLYixVQUFqQjtBQUNBLFVBQUljLFNBQVMsR0FBRyxLQUFLZCxVQUFMLENBQWdCZSxLQUFoQixHQUF3QixLQUF4QztBQUNBLFVBQUlDLFVBQVUsR0FBRyxLQUFLaEIsVUFBTCxDQUFnQmlCLE1BQWhCLEdBQXlCLEtBQTFDO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLEtBQUtsQixVQUFMLENBQWdCZSxLQUFoQixHQUF3QixLQUF2QztBQUNBLFVBQUlJLFFBQVEsR0FBRyxLQUFLbkIsVUFBTCxDQUFnQmlCLE1BQWhCLEdBQXlCLEtBQXhDO0FBRUEsV0FBS2pCLFVBQUwsQ0FBZ0JvQixZQUFoQixDQUE2QnhCLEVBQUUsQ0FBQ3lCLE1BQWhDLEVBQXdDQyxRQUF4QyxDQUFpRFAsS0FBakQsR0FBeURELFNBQXpEO0FBQ0EsV0FBS2QsVUFBTCxDQUFnQm9CLFlBQWhCLENBQTZCeEIsRUFBRSxDQUFDeUIsTUFBaEMsRUFBd0NDLFFBQXhDLENBQWlETCxNQUFqRCxHQUEwREQsVUFBMUQ7QUFDQSxXQUFLaEIsVUFBTCxDQUFnQm9CLFlBQWhCLENBQTZCeEIsRUFBRSxDQUFDeUIsTUFBaEMsRUFBd0NILFFBQXhDLEdBQW1EQSxRQUFuRDtBQUNBLFdBQUtsQixVQUFMLENBQWdCb0IsWUFBaEIsQ0FBNkJ4QixFQUFFLENBQUN5QixNQUFoQyxFQUF3Q0YsUUFBeEMsR0FBbURBLFFBQW5ELENBZjRGLENBZ0I1Rjs7QUFDQSxXQUFLSSxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHYixJQUFJLENBQUNjLE1BQWpCOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDZixJQUFJLENBQUNjLE1BQUwsQ0FBWUUsTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7QUFDckMsWUFBSUUsSUFBSSxHQUFHaEMsRUFBRSxDQUFDaUMsV0FBSCxDQUFlLEtBQUszQixVQUFwQixDQUFYO0FBQ0EwQixRQUFBQSxJQUFJLENBQUNSLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJVLFFBQTNCLENBQW9DTixLQUFLLENBQUNFLENBQUQsQ0FBekM7QUFDQSxhQUFLSCxVQUFMLENBQWdCUSxJQUFoQixDQUFxQkgsSUFBckI7QUFDQSxhQUFLNUIsVUFBTCxDQUFnQmdDLFFBQWhCLENBQXlCSixJQUF6QjtBQUNIO0FBQ0osS0F6QkQ7QUEwQkgsR0EvRUk7QUFrRkxLLEVBQUFBLFFBbEZLLHNCQWtGTztBQUNSO0FBQ0EsU0FBSzNCLFVBQUw7QUFDQSxTQUFLNEIsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLElBQWxCLENBSFEsQ0FLUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFHSjtBQUVILEdBL0dJO0FBaUhMQyxFQUFBQSxVQWpISyx3QkFpSFM7QUFFVjtBQUNBO0FBRUE7QUFDQTtBQUVBLFNBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQixDQVJVLENBU1Y7QUFFSDtBQTVISSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JpZExheW91dDogY2MuTm9kZSxcclxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWJcclxuICAgICAgICAvLyBfYWxlcnQ6bnVsbCwgLy/mj5DnpLrmoYZcclxuICAgICAgICAvLyBfYnRuT0s6bnVsbCwgLy/mj5DnpLrmoYbnoa7lrprmjInpkq5cclxuICAgICAgICAvLyBfYnRuQ2FuY2VsOm51bGwsIC8v5o+Q56S65qGG5Y+W5raI5oyJ6ZKuXHJcbiAgICAgICAgLy8gX3RpdGxlOm51bGwsIC8v5o+Q56S65qGG5qCH6aKYXHJcbiAgICAgICAgLy8gX2NvbnRlbnQ6bnVsbCwgLy/mj5DnpLrmoYblhoXlrrlcclxuICAgICAgICAvLyBfYnRuT0tDYWxsYmFjazpudWxsLCAvL+eCueWHu+ehruWumuaMiemSrueahOWbnuiwg+S6i+S7tlxyXG4gICAgICAgIC8vIG1hc2s6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6bnVsbFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gZGxnOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHNlcnZlcjp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDp0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgLy8gdGlwczp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDp0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBncmlkTGF5b3V0OntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OnRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHRvb2xQcmVmYWI6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLm5vZGUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6dHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gbWFza19vcGFjaXR5OiAxMDAsXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgeyBcclxuIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLXJlZ2lzdGVyJywgW10sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgXHJcbiAgICAgICAgLy8gICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5zZXJ2ZXI7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52aWV3W3BhdGggKyByb290LmNoaWxkcmVuW2ldLm5hbWVdID0gcm9vdC5jaGlsZHJlbltpXTtcclxuICAgICAgICAvLyAgICAgdGhpcy5sb2FkX2FsbF9vYmplY3Qocm9vdC5jaGlsZHJlbltpXSwgcGF0aCArIHJvb3QuY2hpbGRyZW5baV0ubmFtZSArIFwiL1wiKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRMYXlvdXQpXHJcbiAgICAgICAgICAgIGxldCBjZWxsV2lkdGggPSB0aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjEwNTtcclxuICAgICAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nWCA9IHRoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMDIyO1xyXG4gICAgICAgICAgICBsZXQgc3BhY2luZ1kgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5jZWxsU2l6ZS5oZWlnaHQgPSBjZWxsSGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcbiAgICAgICAgICAgIC8vIOagueaNrlRPT0xT55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgVE9PTFMgPSBkYXRhLnNlcnZlcjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPGRhdGEuc2VydmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9vbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudG9vbFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0b29sLmdldENvbXBvbmVudCgnVG9vbHMnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZExheW91dC5hZGRDaGlsZCh0b29sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICAgLy8g55Sf5oiQ5omA5pyJ6YGT5YW3XHJcbiAgICAgICAgdGhpcy5zcGF3blRvb2xzKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5tYXNrLG9wYWNpdHkgPSAwO1xyXG4gICAgICAgIC8vIHZhciBhYzEgPWNjLmZhZGVUbygwLjMsdGhpcy5tYXNrX29wYWNpdHkpO1xyXG4gICAgICAgIC8vIHRoaXMubWFzay5ydW5BY3Rpb24oYWMxKTtcclxuICAgICAgICAvLyB0aGlzLmRsZy5zY2FsZSA9MDtcclxuICAgICAgICAvLyB2YXIgYWMyID1jYy5zY2FsZVRvKDAuMywxKS5lYXNpbmcoY2MuZWFzZUJhY2tvdXQoKSk7XHJcbiAgICAgICAgLy8gdGhpcy5kbGcucnVuQWN0aW9uKGFjMik7XHJcblxyXG4gICAgICAgIC8vIC8vIOiDjOWMheaMiemSrlxyXG4gICAgICAgIC8vIGlmICh0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSkge1xyXG4gICAgICAgIC8vICAgICAvLyDpmpDol4/oioLngrlcclxuICAgICAgICAvLyAgICAgdGhpcy5ncmlkTGF5b3V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgZWxlbWVudC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5pi+56S66IqC54K5XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgIFxyXG4gICAgICAgIC8vIH1cclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgIFxyXG4gICAgICAgIC8vIHZhciBhYzEgPWNjLmZhZGVPdXQoMC4zKTtcclxuICAgICAgICAvLyB0aGlzLm1hc2sucnVuQWN0aW9uKGFjMSk7XHJcblxyXG4gICAgICAgIC8vIHZhciBhYzIgPWNjLnNjYWxlVG8oMC4zLDApLmVhc2luZyhjYy5lYXNlQmFja0luKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuZGxnLnJ1bkFjdGlvbihhYzIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgICAgICAvLyDor7fmsYLmm7TmjaIgc2VydmVyXHJcblxyXG4gICAgfSxcclxuICAgIFxyXG5cclxuXHJcbn0pO1xyXG4iXX0=