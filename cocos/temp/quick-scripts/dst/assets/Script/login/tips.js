
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/tips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e7f7ciNQRLOoO7QCll/I0d', 'tips');
// Script/login/tips.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scorllview: cc.ScorllView
  },
  // LIFE-CYCLE CALLBACKS:
  // cc.loader.releaseRes("test assets/anim");
  onLoad: function onLoad() {
    cc.sys.localStorage.removeItem('server_tips');

    var HttpHelper = require("../http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPostLogin('/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_sz']; // 转数组
      // cc.log(JSON.parse( data.data ));
      // 转json
      // cc.log(JSON.stringify( data.data ));

      for (var value in data.data) {
        cc.sys.localStorage.setItem(value, data.data[value]);
      } // cc.sys.localStorage.getItem('server_tips');

    });
  },
  start: function start() {},
  gonggao_sz: function gonggao_sz() {
    var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    tips.getComponent(cc.Label).string = cc.sys.localStorage.getItem('gonggao_sz');
  },
  gonggao_sx: function gonggao_sx() {
    var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    tips.getComponent(cc.Label).string = cc.sys.localStorage.getItem('gonggao_sx');
  },
  gonggao_gx: function gonggao_gx() {
    var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    tips.getComponent(cc.Label).string = cc.sys.localStorage.getItem('gonggao_gx');
  },
  gonggao_lx: function gonggao_lx() {
    var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    tips.getComponent(cc.Label).string = cc.sys.localStorage.getItem('gonggao_lx');
  },
  show_dlg: function show_dlg() {
    this.node.active = true;
  },
  hidden_dlg: function hidden_dlg() {
    this.node.active = false;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcdGlwcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjb3JsbHZpZXciLCJTY29ybGxWaWV3Iiwib25Mb2FkIiwic3lzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJodHRwUG9zdExvZ2luIiwiZGF0YSIsInRpcHMiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJ2YWx1ZSIsInNldEl0ZW0iLCJzdGFydCIsImdvbmdnYW9fc3oiLCJnZXRJdGVtIiwiZ29uZ2dhb19zeCIsImdvbmdnYW9fZ3giLCJnb25nZ2FvX2x4Iiwic2hvd19kbGciLCJub2RlIiwiYWN0aXZlIiwiaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBQ0osRUFBRSxDQUFDSztBQUROLEdBSFA7QUFPTDtBQUNBO0FBQ0FDLEVBQUFBLE1BVEssb0JBU0s7QUFDTk4sSUFBQUEsRUFBRSxDQUFDTyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLGFBQS9COztBQUNBLFFBQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBeEI7O0FBQ0EsUUFBSUMsV0FBVyxHQUFHLElBQUlGLFVBQUosRUFBbEI7QUFDQUUsSUFBQUEsV0FBVyxDQUFDQyxhQUFaLENBQTBCLDJCQUExQixFQUF1RCxFQUF2RCxFQUEyRCxVQUFVQyxJQUFWLEVBQWdCO0FBQ3ZFLFVBQUlDLElBQUksR0FBR2YsRUFBRSxDQUFDZ0IsSUFBSCxDQUFRLHVEQUFSLENBQVg7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxZQUFMLENBQWtCakIsRUFBRSxDQUFDa0IsS0FBckIsRUFBNEJDLE1BQTVCLEdBQW1DTCxJQUFJLENBQUNBLElBQUwsQ0FBVSxZQUFWLENBQW5DLENBRnVFLENBR3ZFO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFdBQUksSUFBSU0sS0FBUixJQUFpQk4sSUFBSSxDQUFDQSxJQUF0QixFQUEyQjtBQUN2QmQsUUFBQUEsRUFBRSxDQUFDTyxHQUFILENBQU9DLFlBQVAsQ0FBb0JhLE9BQXBCLENBQTRCRCxLQUE1QixFQUFrQ04sSUFBSSxDQUFDQSxJQUFMLENBQVVNLEtBQVYsQ0FBbEM7QUFDSCxPQVRzRSxDQVV2RTs7QUFDSCxLQVhEO0FBWUgsR0F6Qkk7QUEyQkxFLEVBQUFBLEtBM0JLLG1CQTJCSSxDQUVSLENBN0JJO0FBOEJMQyxFQUFBQSxVQTlCSyx3QkE4Qk87QUFDSixRQUFJUixJQUFJLEdBQUdmLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUSx1REFBUixDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0UsWUFBTCxDQUFrQmpCLEVBQUUsQ0FBQ2tCLEtBQXJCLEVBQTRCQyxNQUE1QixHQUFtQ25CLEVBQUUsQ0FBQ08sR0FBSCxDQUFPQyxZQUFQLENBQW9CZ0IsT0FBcEIsQ0FBNEIsWUFBNUIsQ0FBbkM7QUFDUCxHQWpDSTtBQWtDTEMsRUFBQUEsVUFsQ0ssd0JBa0NPO0FBRVIsUUFBSVYsSUFBSSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVEsdURBQVIsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0JqQixFQUFFLENBQUNrQixLQUFyQixFQUE0QkMsTUFBNUIsR0FBbUNuQixFQUFFLENBQUNPLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQmdCLE9BQXBCLENBQTRCLFlBQTVCLENBQW5DO0FBQ0gsR0F0Q0k7QUF1Q0xFLEVBQUFBLFVBdkNLLHdCQXVDTztBQUVSLFFBQUlYLElBQUksR0FBR2YsRUFBRSxDQUFDZ0IsSUFBSCxDQUFRLHVEQUFSLENBQVg7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRSxZQUFMLENBQWtCakIsRUFBRSxDQUFDa0IsS0FBckIsRUFBNEJDLE1BQTVCLEdBQW1DbkIsRUFBRSxDQUFDTyxHQUFILENBQU9DLFlBQVAsQ0FBb0JnQixPQUFwQixDQUE0QixZQUE1QixDQUFuQztBQUNILEdBM0NJO0FBNENMRyxFQUFBQSxVQTVDSyx3QkE0Q087QUFFUixRQUFJWixJQUFJLEdBQUdmLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUSx1REFBUixDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0UsWUFBTCxDQUFrQmpCLEVBQUUsQ0FBQ2tCLEtBQXJCLEVBQTRCQyxNQUE1QixHQUFtQ25CLEVBQUUsQ0FBQ08sR0FBSCxDQUFPQyxZQUFQLENBQW9CZ0IsT0FBcEIsQ0FBNEIsWUFBNUIsQ0FBbkM7QUFDSCxHQWhESTtBQWlETEksRUFBQUEsUUFqREssc0JBaURPO0FBQ1IsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLElBQWxCO0FBQ0gsR0FuREk7QUFvRExDLEVBQUFBLFVBcERLLHdCQW9EUztBQUNWLFNBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQjtBQUNILEdBdERJLENBdURMOztBQXZESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNjb3JsbHZpZXc6Y2MuU2NvcmxsVmlld1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlUmVzKFwidGVzdCBhc3NldHMvYW5pbVwiKTtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzZXJ2ZXJfdGlwcycpO1xyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcIi4uL2h0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3RMb2dpbignL2FwcC9hcGktc2VydmVyL3VzZXItdGlwcycsIFtdLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgICAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1kYXRhLmRhdGFbJ2dvbmdnYW9fc3onXTtcclxuICAgICAgICAgICAgLy8g6L2s5pWw57uEXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhKU09OLnBhcnNlKCBkYXRhLmRhdGEgKSk7XHJcbiAgICAgICAgICAgIC8vIOi9rGpzb25cclxuICAgICAgICAgICAgLy8gY2MubG9nKEpTT04uc3RyaW5naWZ5KCBkYXRhLmRhdGEgKSk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgdmFsdWUgaW4gZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh2YWx1ZSxkYXRhLmRhdGFbdmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcnZlcl90aXBzJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgZ29uZ2dhb19zeigpe1xyXG4gICAgICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgICAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvbmdnYW9fc3onKTtcclxuICAgIH0sXHJcbiAgICBnb25nZ2FvX3N4KCl7XHJcbiBcclxuICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgICAgICB0aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29uZ2dhb19zeCcpO1xyXG4gICAgfSxcclxuICAgIGdvbmdnYW9fZ3goKXtcclxuIFxyXG4gICAgICAgIHZhciB0aXBzICA9Y2MuZmluZChcIkNhbnZhcy90aXBzL2dvbmdnYW9fdGlwc19zY29ybGx2aWV3L3ZpZXcvZ29uZ2dhb190aXBzXCIpO1xyXG4gICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb25nZ2FvX2d4Jyk7XHJcbiAgICB9LFxyXG4gICAgZ29uZ2dhb19seCgpe1xyXG4gXHJcbiAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvbmdnYW9fbHgnKTtcclxuICAgIH0sXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19