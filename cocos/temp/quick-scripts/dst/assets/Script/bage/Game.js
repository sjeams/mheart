
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bage/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca358Mpn0dPrJ82VRBGkbhR', 'Game');
// Script/bage/Game.js

"use strict";

var _Conf = require("./Conf");

cc.Class({
  "extends": cc.Component,
  properties: {
    gridLayout: cc.Node,
    toolPrefab: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  spawnTools: function spawnTools() {
    // 首先确定gridLayout的各个属性
    var cellWidth = this.gridLayout.width * 0.105;
    var cellHeight = this.gridLayout.height * 0.215;
    var spacingX = this.gridLayout.width * 0.022;
    var spacingY = this.gridLayout.height * 0.045;
    this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
    this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
    this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
    this.gridLayout.getComponent(cc.Layout).spacingY = spacingY; // 根据TOOLS生成相应的道具

    this.toolsArray = [];

    for (var i = 0; i < _Conf.TOOLS.length; i++) {
      var tool = cc.instantiate(this.toolPrefab);
      tool.getComponent('Tool').initInfo(_Conf.TOOLS[i]);
      this.toolsArray.push(tool);
      this.gridLayout.addChild(tool);
    }
  },
  bagBtn: function bagBtn() {
    // 背包按钮
    if (this.gridLayout.parent.active) {
      // 隐藏节点
      this.gridLayout.parent.active = false; // 删除所有道具(或者不删，只是隐藏，自己决定)

      this.toolsArray.forEach(function (element) {
        element.removeFromParent();
      });
    } else {
      // 显示节点
      this.gridLayout.parent.active = true; // 生成所有道具

      this.spawnTools();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxiYWdlXFxHYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ3JpZExheW91dCIsIk5vZGUiLCJ0b29sUHJlZmFiIiwiUHJlZmFiIiwic3Bhd25Ub29scyIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsInRvb2xzQXJyYXkiLCJpIiwiVE9PTFMiLCJsZW5ndGgiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsInB1c2giLCJhZGRDaGlsZCIsImJhZ0J0biIsInBhcmVudCIsImFjdGl2ZSIsImZvckVhY2giLCJlbGVtZW50IiwicmVtb3ZlRnJvbVBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBRU4sRUFBRSxDQUFDTztBQUZQLEdBSFA7QUFRTDtBQUVBQyxFQUFBQSxVQVZLLHdCQVVTO0FBQ1Y7QUFDQSxRQUFJQyxTQUFTLEdBQUcsS0FBS0wsVUFBTCxDQUFnQk0sS0FBaEIsR0FBd0IsS0FBeEM7QUFDQSxRQUFJQyxVQUFVLEdBQUcsS0FBS1AsVUFBTCxDQUFnQlEsTUFBaEIsR0FBeUIsS0FBMUM7QUFDQSxRQUFJQyxRQUFRLEdBQUcsS0FBS1QsVUFBTCxDQUFnQk0sS0FBaEIsR0FBd0IsS0FBdkM7QUFDQSxRQUFJSSxRQUFRLEdBQUcsS0FBS1YsVUFBTCxDQUFnQlEsTUFBaEIsR0FBeUIsS0FBeEM7QUFFQSxTQUFLUixVQUFMLENBQWdCVyxZQUFoQixDQUE2QmYsRUFBRSxDQUFDZ0IsTUFBaEMsRUFBd0NDLFFBQXhDLENBQWlEUCxLQUFqRCxHQUF5REQsU0FBekQ7QUFDQSxTQUFLTCxVQUFMLENBQWdCVyxZQUFoQixDQUE2QmYsRUFBRSxDQUFDZ0IsTUFBaEMsRUFBd0NDLFFBQXhDLENBQWlETCxNQUFqRCxHQUEwREQsVUFBMUQ7QUFDQSxTQUFLUCxVQUFMLENBQWdCVyxZQUFoQixDQUE2QmYsRUFBRSxDQUFDZ0IsTUFBaEMsRUFBd0NILFFBQXhDLEdBQW1EQSxRQUFuRDtBQUNBLFNBQUtULFVBQUwsQ0FBZ0JXLFlBQWhCLENBQTZCZixFQUFFLENBQUNnQixNQUFoQyxFQUF3Q0YsUUFBeEMsR0FBbURBLFFBQW5ELENBVlUsQ0FZVjs7QUFDQSxTQUFLSSxVQUFMLEdBQWtCLEVBQWxCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDQyxZQUFNQyxNQUF0QixFQUE4QkYsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixVQUFJRyxJQUFJLEdBQUd0QixFQUFFLENBQUN1QixXQUFILENBQWUsS0FBS2pCLFVBQXBCLENBQVg7QUFDQWdCLE1BQUFBLElBQUksQ0FBQ1AsWUFBTCxDQUFrQixNQUFsQixFQUEwQlMsUUFBMUIsQ0FBbUNKLFlBQU1ELENBQU4sQ0FBbkM7QUFDQSxXQUFLRCxVQUFMLENBQWdCTyxJQUFoQixDQUFxQkgsSUFBckI7QUFDQSxXQUFLbEIsVUFBTCxDQUFnQnNCLFFBQWhCLENBQXlCSixJQUF6QjtBQUNIO0FBQ0osR0E5Qkk7QUFnQ0xLLEVBQUFBLE1BaENLLG9CQWdDSztBQUNOO0FBQ0EsUUFBSSxLQUFLdkIsVUFBTCxDQUFnQndCLE1BQWhCLENBQXVCQyxNQUEzQixFQUFtQztBQUMvQjtBQUNBLFdBQUt6QixVQUFMLENBQWdCd0IsTUFBaEIsQ0FBdUJDLE1BQXZCLEdBQWdDLEtBQWhDLENBRitCLENBSS9COztBQUNBLFdBQUtYLFVBQUwsQ0FBZ0JZLE9BQWhCLENBQXdCLFVBQUFDLE9BQU8sRUFBSTtBQUMvQkEsUUFBQUEsT0FBTyxDQUFDQyxnQkFBUjtBQUNILE9BRkQ7QUFHSCxLQVJELE1BU0s7QUFDRDtBQUNBLFdBQUs1QixVQUFMLENBQWdCd0IsTUFBaEIsQ0FBdUJDLE1BQXZCLEdBQWdDLElBQWhDLENBRkMsQ0FJRDs7QUFDQSxXQUFLckIsVUFBTDtBQUNIO0FBQ0o7QUFsREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUT09MU30gZnJvbSAnLi9Db25mJztcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JpZExheW91dDogY2MuTm9kZSxcclxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICAgIC8vIOmmluWFiOehruWummdyaWRMYXlvdXTnmoTlkITkuKrlsZ7mgKdcclxuICAgICAgICBsZXQgY2VsbFdpZHRoID0gdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4xMDU7XHJcbiAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgbGV0IHNwYWNpbmdYID0gdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4wMjI7XHJcbiAgICAgICAgbGV0IHNwYWNpbmdZID0gdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMDQ1O1xyXG5cclxuICAgICAgICB0aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XHJcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcblxyXG4gICAgICAgIC8vIOagueaNrlRPT0xT55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPFRPT0xTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUodGhpcy50b29sUHJlZmFiKTtcclxuICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ1Rvb2wnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHNBcnJheS5wdXNoKHRvb2wpO1xyXG4gICAgICAgICAgICB0aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBiYWdCdG4gKCkge1xyXG4gICAgICAgIC8vIOiDjOWMheaMiemSrlxyXG4gICAgICAgIGlmICh0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyDpmpDol4/oioLngrlcclxuICAgICAgICAgICAgdGhpcy5ncmlkTGF5b3V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXHJcbiAgICAgICAgICAgIHRoaXMudG9vbHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5pi+56S66IqC54K5XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOeUn+aIkOaJgOaciemBk+WFt1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduVG9vbHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19