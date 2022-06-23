
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
  properties: {// foo: {
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
      var tips = cc.find("Canvas/tips/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_sz'];
    });
  },
  start: function start() {},
  gonggao_sz: function gonggao_sz() {
    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_sz'];
    });
  },
  gonggao_sx: function gonggao_sx() {
    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_sx'];
    });
  },
  gonggao_gx: function gonggao_gx() {
    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_gx'];
    });
  },
  gonggao_lx: function gonggao_lx() {
    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcdGlwcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJodHRwUG9zdCIsImRhdGEiLCJ0aXBzIiwiZmluZCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwic3RhcnQiLCJnb25nZ2FvX3N6IiwiZ29uZ2dhb19zeCIsImdvbmdnYW9fZ3giLCJnb25nZ2FvX2x4Iiwic2hvd19kbGciLCJub2RlIiwiYWN0aXZlIiwiaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZlEsR0FIUDtBQXNCTDtBQUNBO0FBQ0FDLEVBQUFBLE1BeEJLLG9CQXdCSztBQUNOLFFBQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEI7O0FBQ0EsUUFBSUMsV0FBVyxHQUFHLElBQUlGLFVBQUosRUFBbEI7QUFDQUUsSUFBQUEsV0FBVyxDQUFDQyxRQUFaLENBQXFCLGlEQUFyQixFQUF3RSxFQUF4RSxFQUE0RSxVQUFVQyxJQUFWLEVBQWdCO0FBQ3hGLFVBQUlDLElBQUksR0FBR1YsRUFBRSxDQUFDVyxJQUFILENBQVEsMEJBQVIsQ0FBWDtBQUNBRCxNQUFBQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0JaLEVBQUUsQ0FBQ2EsS0FBckIsRUFBNEJDLE1BQTVCLEdBQW1DTCxJQUFJLENBQUNBLElBQUwsQ0FBVSxZQUFWLENBQW5DO0FBQ0gsS0FIRDtBQUlILEdBL0JJO0FBaUNMTSxFQUFBQSxLQWpDSyxtQkFpQ0ksQ0FFUixDQW5DSTtBQW9DTEMsRUFBQUEsVUFwQ0ssd0JBb0NPO0FBQ1IsUUFBSVgsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxRQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBRSxJQUFBQSxXQUFXLENBQUNDLFFBQVosQ0FBcUIsaURBQXJCLEVBQXdFLEVBQXhFLEVBQTRFLFVBQVVDLElBQVYsRUFBZ0I7QUFDeEYsVUFBSUMsSUFBSSxHQUFHVixFQUFFLENBQUNXLElBQUgsQ0FBUSwwQkFBUixDQUFYO0FBQ0FELE1BQUFBLElBQUksQ0FBQ0UsWUFBTCxDQUFrQlosRUFBRSxDQUFDYSxLQUFyQixFQUE0QkMsTUFBNUIsR0FBbUNMLElBQUksQ0FBQ0EsSUFBTCxDQUFVLFlBQVYsQ0FBbkM7QUFDSCxLQUhEO0FBSUgsR0EzQ0k7QUE0Q0xRLEVBQUFBLFVBNUNLLHdCQTRDTztBQUNSLFFBQUlaLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEI7O0FBQ0EsUUFBSUMsV0FBVyxHQUFHLElBQUlGLFVBQUosRUFBbEI7QUFDQUUsSUFBQUEsV0FBVyxDQUFDQyxRQUFaLENBQXFCLGlEQUFyQixFQUF3RSxFQUF4RSxFQUE0RSxVQUFVQyxJQUFWLEVBQWdCO0FBQ3hGLFVBQUlDLElBQUksR0FBR1YsRUFBRSxDQUFDVyxJQUFILENBQVEsMEJBQVIsQ0FBWDtBQUNBRCxNQUFBQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0JaLEVBQUUsQ0FBQ2EsS0FBckIsRUFBNEJDLE1BQTVCLEdBQW1DTCxJQUFJLENBQUNBLElBQUwsQ0FBVSxZQUFWLENBQW5DO0FBQ0gsS0FIRDtBQUlILEdBbkRJO0FBb0RMUyxFQUFBQSxVQXBESyx3QkFvRE87QUFDUixRQUFJYixVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCOztBQUNBLFFBQUlDLFdBQVcsR0FBRyxJQUFJRixVQUFKLEVBQWxCO0FBQ0FFLElBQUFBLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQixpREFBckIsRUFBd0UsRUFBeEUsRUFBNEUsVUFBVUMsSUFBVixFQUFnQjtBQUN4RixVQUFJQyxJQUFJLEdBQUdWLEVBQUUsQ0FBQ1csSUFBSCxDQUFRLDBCQUFSLENBQVg7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxZQUFMLENBQWtCWixFQUFFLENBQUNhLEtBQXJCLEVBQTRCQyxNQUE1QixHQUFtQ0wsSUFBSSxDQUFDQSxJQUFMLENBQVUsWUFBVixDQUFuQztBQUNILEtBSEQ7QUFJSCxHQTNESTtBQTRETFUsRUFBQUEsVUE1REssd0JBNERPO0FBQ1IsUUFBSWQsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxRQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBRSxJQUFBQSxXQUFXLENBQUNDLFFBQVosQ0FBcUIsaURBQXJCLEVBQXdFLEVBQXhFLEVBQTRFLFVBQVVDLElBQVYsRUFBZ0I7QUFDeEYsVUFBSUMsSUFBSSxHQUFHVixFQUFFLENBQUNXLElBQUgsQ0FBUSwwQkFBUixDQUFYO0FBQ0FELE1BQUFBLElBQUksQ0FBQ0UsWUFBTCxDQUFrQlosRUFBRSxDQUFDYSxLQUFyQixFQUE0QkMsTUFBNUIsR0FBbUNMLElBQUksQ0FBQ0EsSUFBTCxDQUFVLFlBQVYsQ0FBbkM7QUFDSCxLQUhEO0FBSUgsR0FuRUk7QUFvRUxXLEVBQUFBLFFBcEVLLHNCQW9FTztBQUNSLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUNILEdBdEVJO0FBdUVMQyxFQUFBQSxVQXZFSyx3QkF1RVM7QUFDVixTQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEI7QUFDSCxHQXpFSSxDQTBFTDs7QUExRUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlUmVzKFwidGVzdCBhc3NldHMvYW5pbVwiKTtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLXRpcHMnLCBbXSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzXCIpO1xyXG4gICAgICAgICAgICB0aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWRhdGEuZGF0YVsnZ29uZ2dhb19zeiddO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIGdvbmdnYW9fc3ooKXtcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3VzZXItdGlwcycsIFtdLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAgICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9ZGF0YS5kYXRhWydnb25nZ2FvX3N6J107XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnb25nZ2FvX3N4KCl7XHJcbiAgICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLXRpcHMnLCBbXSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzXCIpO1xyXG4gICAgICAgICAgICB0aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWRhdGEuZGF0YVsnZ29uZ2dhb19zeCddO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZ29uZ2dhb19neCgpe1xyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdXNlci10aXBzJywgW10sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciB0aXBzICA9Y2MuZmluZChcIkNhbnZhcy90aXBzL2dvbmdnYW9fdGlwc1wiKTtcclxuICAgICAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1kYXRhLmRhdGFbJ2dvbmdnYW9fZ3gnXTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGdvbmdnYW9fbHgoKXtcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3VzZXItdGlwcycsIFtdLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAgICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9ZGF0YS5kYXRhWydnb25nZ2FvX2x4J107XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19