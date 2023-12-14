
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

    var HttpHelper = require("../http");

    var httpRequest = new HttpHelper();
    var params = {
      'page': 1,
      'pageSize': 11
    };
    httpRequest.httpPostLogin('/app/api-server/user-register', params, function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcQWxlcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJvbkxvYWQiLCJzcGF3blRvb2xzIiwic3RhcnQiLCJfdGhpcyIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJodHRwUG9zdExvZ2luIiwiZGF0YSIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsInRvb2xzQXJyYXkiLCJUT09MUyIsInNlcnZlciIsImkiLCJsZW5ndGgiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsInB1c2giLCJhZGRDaGlsZCIsInNjb3JsbGhlaWdodCIsInBhcmVudCIsIk1hdGgiLCJjZWlsIiwic2V0Q29udGVudFNpemUiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLLElBRFA7QUFFUkMsSUFBQUEsVUFBVSxFQUFFTixFQUFFLENBQUNPLE1BRlAsQ0FHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFaUSxHQUhQO0FBa0JMO0FBRUFDLEVBQUFBLE1BcEJLLG9CQW9CSztBQUNMO0FBQ0EsU0FBS0MsVUFBTDtBQUNKLEdBdkJJO0FBeUJMQyxFQUFBQSxLQXpCSyxt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QUE0RUxxQixFQUFBQSxRQTVFSyxzQkE0RU87QUFHUixTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBa0IsSUFBbEIsQ0FIUSxDQUlSO0FBQ0E7QUFDQTtBQUNBO0FBRUgsR0FyRkk7QUF1RkxDLEVBQUFBLFVBdkZLLHdCQXVGUztBQUNWLFNBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQixDQURVLENBRVY7QUFDSDtBQTFGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JpZExheW91dDogY2MuTm9kZSxcclxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgLy8gX2FsZXJ0Om51bGwsIC8v5o+Q56S65qGGXHJcbiAgICAgICAgLy8gX2J0bk9LOm51bGwsIC8v5o+Q56S65qGG56Gu5a6a5oyJ6ZKuXHJcbiAgICAgICAgLy8gX2J0bkNhbmNlbDpudWxsLCAvL+aPkOekuuahhuWPlua2iOaMiemSrlxyXG4gICAgICAgIC8vIF90aXRsZTpudWxsLCAvL+aPkOekuuahhuagh+mimFxyXG4gICAgICAgIC8vIF9jb250ZW50Om51bGwsIC8v5o+Q56S65qGG5YaF5a65XHJcbiAgICAgICAgLy8gX2J0bk9LQ2FsbGJhY2s6bnVsbCwgLy/ngrnlh7vnoa7lrprmjInpkq7nmoTlm57osIPkuovku7ZcclxuICAgICAgICAvLyBtYXNrOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGxcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgeyBcclxuICAgICAgICAgLy8g55Sf5oiQ5omA5pyJ6YGT5YW3XHJcbiAgICAgICAgIHRoaXMuc3Bhd25Ub29scygpOyAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcIi4uL2h0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICdwYWdlJzogMSxcclxuICAgICAgICAgICAgICAgICdwYWdlU2l6ZSc6IDExLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3RMb2dpbignL2FwcC9hcGktc2VydmVyL3VzZXItcmVnaXN0ZXInLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coX3RoaXMuZ3JpZExheW91dClcclxuICAgICAgICAgICAgLy8gbGV0IGNlbGxXaWR0aCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjEwNTtcclxuICAgICAgICAgICAgLy8gbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMjE1O1xyXG4gICAgICAgICAgICAvLyBsZXQgc3BhY2luZ1ggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4wMjI7XHJcbiAgICAgICAgICAgIC8vIGxldCBzcGFjaW5nWSA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNDU7XHJcbiAgICAgICAgICAgIGxldCBjZWxsV2lkdGggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC40NTtcclxuICAgICAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMTU7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nWCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjA4O1xyXG4gICAgICAgICAgICBsZXQgc3BhY2luZ1kgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMDU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgICAgX3RoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xyXG4gICAgICAgICAgICAvLyDmoLnmja5UT09MU+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgICAgICBfdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YS5zZXJ2ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPGRhdGEuZGF0YS5zZXJ2ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMudG9vbFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUT09MU1tpXSlcclxuICAgICAgICAgICAgICAgIC8vIF90aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgICAgICAgICB0b29sLmdldENvbXBvbmVudCgnVG9vbHMnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50b29sc0FycmF5LnB1c2godG9vbCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmFkZENoaWxkKHRvb2wpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5a6a5LmJY29udGVudOa7muWKqOadoemrmOW6plxyXG4gICAgICAgICAgICBsZXQgc2NvcmxsaGVpZ2h0ID0gIF90aGlzLmdyaWRMYXlvdXQucGFyZW50O1xyXG4gICAgICAgICAgICAvL+iuoeeul+a7muWKqOadoemrmOW6plxyXG4gICAgICAgICAgICBsZXQgIGhlaWdodCA9ICAoY2VsbEhlaWdodCtzcGFjaW5nWSkqKCBNYXRoLmNlaWwoIGRhdGEuZGF0YS5zZXJ2ZXIubGVuZ3RoLzIpKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGVpZ2h0KTtcclxuICAgICAgICAgICAgLy8gc2NvcmxsaGVpZ2h0LmRlc2lnblJlc29sdXRpb24gID0gbmV3IGNjLlNpemUoNjAwLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBzY29ybGxoZWlnaHQuc2V0Q29udGVudFNpemUoNjAwLGhlaWdodCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHNob3dfZGxnICgpIHtcclxuICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICAgICAgLy8gICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgZWxlbWVudC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgICAgICAvLyDor7fmsYLmm7TmjaIgc2VydmVyXHJcbiAgICB9LFxyXG4gXHJcblxyXG5cclxufSk7XHJcbiJdfQ==