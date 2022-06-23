
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

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    scorllview: cc.ScorllView // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },

  },
  // LIFE-CYCLE CALLBACKS:
  // cc.loader.releaseRes("test assets/anim");
  onLoad: function onLoad() {
    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_sx'];
    });
  },
  start: function start() {},
  gonggao_sz: function gonggao_sz() {
    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_sz'];
    });
  },
  gonggao_sx: function gonggao_sx() {
    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_sx'];
    });
  },
  gonggao_gx: function gonggao_gx() {
    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_gx'];
    });
  },
  gonggao_lx: function gonggao_lx() {
    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_lx'];
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcdGlwcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjb3JsbHZpZXciLCJTY29ybGxWaWV3Iiwib25Mb2FkIiwiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImh0dHBQb3N0IiwiZGF0YSIsInRpcHMiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJzdGFydCIsImdvbmdnYW9fc3oiLCJnb25nZ2FvX3N4IiwiZ29uZ2dhb19neCIsImdvbmdnYW9fbHgiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFDSixFQUFFLENBQUNLLFVBRE4sQ0FFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaEJRLEdBSFA7QUF1Qkw7QUFDQTtBQUNBQyxFQUFBQSxNQXpCSyxvQkF5Qks7QUFDTixRQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCOztBQUNBLFFBQUlDLFdBQVcsR0FBRyxJQUFJRixVQUFKLEVBQWxCO0FBQ0FFLElBQUFBLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQixpREFBckIsRUFBd0UsRUFBeEUsRUFBNEUsVUFBVUMsSUFBVixFQUFnQjtBQUN4RixVQUFJQyxJQUFJLEdBQUdaLEVBQUUsQ0FBQ2EsSUFBSCxDQUFRLHVEQUFSLENBQVg7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxZQUFMLENBQWtCZCxFQUFFLENBQUNlLEtB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LyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzY29ybGx2aWV3OmNjLlNjb3JsbFZpZXdcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvLyBjYy5sb2FkZXIucmVsZWFzZVJlcyhcInRlc3QgYXNzZXRzL2FuaW1cIik7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdXNlci10aXBzJywgW10sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciB0aXBzICA9Y2MuZmluZChcIkNhbnZhcy90aXBzL2dvbmdnYW9fdGlwc19zY29ybGx2aWV3L3ZpZXcvZ29uZ2dhb190aXBzXCIpO1xyXG4gICAgICAgICAgICB0aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWRhdGEuZGF0YVsnZ29uZ2dhb19zeCddO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBnb25nZ2FvX3N6KCl7XHJcbiAgICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLXRpcHMnLCBbXSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAgICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9ZGF0YS5kYXRhWydnb25nZ2FvX3N6J107XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnb25nZ2FvX3N4KCl7XHJcbiAgICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLXRpcHMnLCBbXSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAgICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9ZGF0YS5kYXRhWydnb25nZ2FvX3N4J107XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnb25nZ2FvX2d4KCl7XHJcbiAgICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLXRpcHMnLCBbXSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAgICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9ZGF0YS5kYXRhWydnb25nZ2FvX2d4J107XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnb25nZ2FvX2x4KCl7XHJcbiAgICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLXRpcHMnLCBbXSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAgICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9ZGF0YS5kYXRhWydnb25nZ2FvX2x4J107XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19