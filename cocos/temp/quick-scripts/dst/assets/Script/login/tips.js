
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

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcdGlwcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjb3JsbHZpZXciLCJTY29ybGxWaWV3Iiwib25Mb2FkIiwic3lzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJodHRwUG9zdCIsImRhdGEiLCJ0aXBzIiwiZmluZCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwidmFsdWUiLCJzZXRJdGVtIiwic3RhcnQiLCJnb25nZ2FvX3N6IiwiZ2V0SXRlbSIsImdvbmdnYW9fc3giLCJnb25nZ2FvX2d4IiwiZ29uZ2dhb19seCIsInNob3dfZGxnIiwibm9kZSIsImFjdGl2ZSIsImhpZGRlbl9kbGciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUNKLEVBQUUsQ0FBQ0s7QUFETixHQUhQO0FBT0w7QUFDQTtBQUNBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ05OLElBQUFBLEVBQUUsQ0FBQ08sR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxVQUFwQixDQUErQixhQUEvQjs7QUFDQSxRQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCOztBQUNBLFFBQUlDLFdBQVcsR0FBRyxJQUFJRixVQUFKLEVBQWxCO0FBQ0FFLElBQUFBLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQixpREFBckIsRUFBd0UsRUFBeEUsRUFBNEUsVUFBVUMsSUFBVixFQUFnQjtBQUN4RixVQUFJQyxJQUFJLEdBQUdmLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUSx1REFBUixDQUFYO0FBQ0FELE1BQUFBLElBQUksQ0FBQ0UsWUFBTCxDQUFrQmpCLEVBQUUsQ0FBQ2tCLEtBQXJCLEVBQTRCQyxNQUE1QixHQUFtQ0wsSUFBSSxDQUFDQSxJQUFMLENBQVUsWUFBVixDQUFuQyxDQUZ3RixDQUd4RjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxXQUFJLElBQUlNLEtBQVIsSUFBaUJOLElBQUksQ0FBQ0EsSUFBdEIsRUFBMkI7QUFDdkJkLFFBQUFBLEVBQUUsQ0FBQ08sR0FBSCxDQUFPQyxZQUFQLENBQW9CYSxPQUFwQixDQUE0QkQsS0FBNUIsRUFBa0NOLElBQUksQ0FBQ0EsSUFBTCxDQUFVTSxLQUFWLENBQWxDO0FBQ0gsT0FUdUYsQ0FVeEY7O0FBQ0gsS0FYRDtBQVlILEdBekJJO0FBMkJMRSxFQUFBQSxLQTNCSyxtQkEyQkksQ0FFUixDQTdCSTtBQThCTEMsRUFBQUEsVUE5Qkssd0JBOEJPO0FBQ0osUUFBSVIsSUFBSSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVEsdURBQVIsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0JqQixFQUFFLENBQUNrQixLQUFyQixFQUE0QkMsTUFBNUIsR0FBbUNuQixFQUFFLENBQUNPLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQmdCLE9BQXBCLENBQTRCLFlBQTVCLENBQW5DO0FBQ1AsR0FqQ0k7QUFrQ0xDLEVBQUFBLFVBbENLLHdCQWtDTztBQUVSLFFBQUlWLElBQUksR0FBR2YsRUFBRSxDQUFDZ0IsSUFBSCxDQUFRLHVEQUFSLENBQVg7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRSxZQUFMLENBQWtCakIsRUFBRSxDQUFDa0IsS0FBckIsRUFBNEJDLE1BQTVCLEdBQW1DbkIsRUFBRSxDQUFDTyxHQUFILENBQU9DLFlBQVAsQ0FBb0JnQixPQUFwQixDQUE0QixZQUE1QixDQUFuQztBQUNILEdBdENJO0FBdUNMRSxFQUFBQSxVQXZDSyx3QkF1Q087QUFFUixRQUFJWCxJQUFJLEdBQUdmLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUSx1REFBUixDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0UsWUFBTCxDQUFrQmpCLEVBQUUsQ0FBQ2tCLEtBQXJCLEVBQTRCQyxNQUE1QixHQUFtQ25CLEVBQUUsQ0FBQ08sR0FBSCxDQUFPQyxZQUFQLENBQW9CZ0IsT0FBcEIsQ0FBNEIsWUFBNUIsQ0FBbkM7QUFDSCxHQTNDSTtBQTRDTEcsRUFBQUEsVUE1Q0ssd0JBNENPO0FBRVIsUUFBSVosSUFBSSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVEsdURBQVIsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0JqQixFQUFFLENBQUNrQixLQUFyQixFQUE0QkMsTUFBNUIsR0FBbUNuQixFQUFFLENBQUNPLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQmdCLE9BQXBCLENBQTRCLFlBQTVCLENBQW5DO0FBQ0gsR0FoREk7QUFpRExJLEVBQUFBLFFBakRLLHNCQWlETztBQUNSLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUNILEdBbkRJO0FBb0RMQyxFQUFBQSxVQXBESyx3QkFvRFM7QUFDVixTQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEI7QUFDSCxHQXRESSxDQXVETDs7QUF2REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzY29ybGx2aWV3OmNjLlNjb3JsbFZpZXdcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvLyBjYy5sb2FkZXIucmVsZWFzZVJlcyhcInRlc3QgYXNzZXRzL2FuaW1cIik7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2VydmVyX3RpcHMnKTtcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3VzZXItdGlwcycsIFtdLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgICAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1kYXRhLmRhdGFbJ2dvbmdnYW9fc3onXTtcclxuICAgICAgICAgICAgLy8g6L2s5pWw57uEXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhKU09OLnBhcnNlKCBkYXRhLmRhdGEgKSk7XHJcbiAgICAgICAgICAgIC8vIOi9rGpzb25cclxuICAgICAgICAgICAgLy8gY2MubG9nKEpTT04uc3RyaW5naWZ5KCBkYXRhLmRhdGEgKSk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgdmFsdWUgaW4gZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh2YWx1ZSxkYXRhLmRhdGFbdmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcnZlcl90aXBzJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgZ29uZ2dhb19zeigpe1xyXG4gICAgICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgICAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvbmdnYW9fc3onKTtcclxuICAgIH0sXHJcbiAgICBnb25nZ2FvX3N4KCl7XHJcbiBcclxuICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgICAgICB0aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29uZ2dhb19zeCcpO1xyXG4gICAgfSxcclxuICAgIGdvbmdnYW9fZ3goKXtcclxuIFxyXG4gICAgICAgIHZhciB0aXBzICA9Y2MuZmluZChcIkNhbnZhcy90aXBzL2dvbmdnYW9fdGlwc19zY29ybGx2aWV3L3ZpZXcvZ29uZ2dhb190aXBzXCIpO1xyXG4gICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb25nZ2FvX2d4Jyk7XHJcbiAgICB9LFxyXG4gICAgZ29uZ2dhb19seCgpe1xyXG4gXHJcbiAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvbmdnYW9fbHgnKTtcclxuICAgIH0sXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19