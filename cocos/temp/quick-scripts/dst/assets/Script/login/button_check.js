
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/button_check.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59db4kGzMNC6oyQTKOxxvj5', 'button_check');
// Script/login/button_check.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// scorllview:cc.ScorllView
  },
  // LIFE-CYCLE CALLBACKS:
  // cc.loader.releaseRes("test assets/anim");
  onLoad: function onLoad() {},
  start: function start() {},
  // gonggao_sz(){
  //         var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //         tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_sz');
  // },
  // gonggao_sx(){
  //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_sx');
  // },
  // gonggao_gx(){
  //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_gx');
  // },
  // gonggao_lx(){
  //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_lx');
  // },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcYnV0dG9uX2NoZWNrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwic3RhcnQiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQURRLEdBSFA7QUFPTDtBQUNBO0FBQ0FDLEVBQUFBLE1BVEssb0JBU0ssQ0FFVCxDQVhJO0FBYUxDLEVBQUFBLEtBYkssbUJBYUksQ0FFUixDQWZJO0FBZ0JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0FDLEVBQUFBLFFBbkNLLHNCQW1DTztBQUNSLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUNILEdBckNJO0FBc0NMQyxFQUFBQSxVQXRDSyx3QkFzQ1M7QUFDVixTQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEI7QUFDSCxHQXhDSSxDQXlDTDs7QUF6Q0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBzY29ybGx2aWV3OmNjLlNjb3JsbFZpZXdcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvLyBjYy5sb2FkZXIucmVsZWFzZVJlcyhcInRlc3QgYXNzZXRzL2FuaW1cIik7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIC8vIGdvbmdnYW9fc3ooKXtcclxuICAgIC8vICAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAvLyAgICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb25nZ2FvX3N6Jyk7XHJcbiAgICAvLyB9LFxyXG4gICAgLy8gZ29uZ2dhb19zeCgpe1xyXG4gXHJcbiAgICAvLyAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAvLyAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvbmdnYW9fc3gnKTtcclxuICAgIC8vIH0sXHJcbiAgICAvLyBnb25nZ2FvX2d4KCl7XHJcbiBcclxuICAgIC8vICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgIC8vICAgICB0aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29uZ2dhb19neCcpO1xyXG4gICAgLy8gfSxcclxuICAgIC8vIGdvbmdnYW9fbHgoKXtcclxuIFxyXG4gICAgLy8gICAgIHZhciB0aXBzICA9Y2MuZmluZChcIkNhbnZhcy90aXBzL2dvbmdnYW9fdGlwc19zY29ybGx2aWV3L3ZpZXcvZ29uZ2dhb190aXBzXCIpO1xyXG4gICAgLy8gICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb25nZ2FvX2x4Jyk7XHJcbiAgICAvLyB9LFxyXG4gICAgc2hvd19kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==