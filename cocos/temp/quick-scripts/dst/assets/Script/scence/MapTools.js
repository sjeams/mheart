
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/MapTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9fe90XuBmFABbeLvXUzRi55', 'MapTools');
// Script/scence/MapTools.js

"use strict";

/*
 * @Author: sjeam
 * @Date: 2022-06-14 16:01:41
 * @Description: 
 */
var HttpHelper = require("http");

var httpRequest = new HttpHelper();
var params = [];
cc.Class({
  "extends": cc.Component,
  properties: {
    server_type: cc.Node,
    server_name: cc.Node,
    sprite_server_login: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  initInfo: function initInfo(info) {
    // 初始化该道具相关信息
    // 图片
    var _self = this;

    if (info['picture']) {
      var remoteUrl = httpRequest.httpUrl(info['picture']); // cc.loader.loadRes(httpRequest.httpUrl(info['picture']), cc.SpriteFrame, function (err, spriteFrame) {   
      //     console.log(_self)
      //     _self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
      // });

      cc.loader.load({
        url: remoteUrl
      }, function (err, texture) {
        //     console.log(_self)
        // _self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
        _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      });
    } // this.server_type.getComponent(cc.Label).string=info['type'];
    // if(info['num']<100){
    //     this.server_type.getComponent(cc.Label).string='空闲';
    //     this.node.getChildByName('server_type').color = new cc.color('green');
    // }else if(info['num']<500&&info['num']>=100){
    //     this.server_type.getComponent(cc.Label).string='流畅';
    //     this.node.getChildByName('server_type').color = new cc.color('#BDFF00');
    // }else if(info['num']<1000&&info['num']>=500){
    //     this.server_type.getComponent(cc.Label).string='拥挤';
    //     this.node.getChildByName('server_type').color = new cc.color('#FFD100');
    // }else{
    //     this.server_type.getComponent(cc.Label).string='爆满';
    //     this.node.getChildByName('server_type').color = new cc.color('#FF0000'); 
    // }    


    this.server_type.getComponent(cc.Label).string = info['type'];
    this.server_type.getComponent(cc.Label).string = info['type'];
    this.node.getChildByName('server_type').color = new cc.color(info['color']);
    this.server_name.getComponent(cc.Label).string = info['id'] + '区  -  ' + info['name']; //创建一个新button 并将其挂载到创建的精灵下

    this.bindClickEvent(this.sprite_server_login.getComponent(cc.Button), info);
  },
  // 绑定按钮事件
  bindClickEvent: function bindClickEvent(button, index) {
    // console.log(index)
    var clickEventHandler = new cc.Component.EventHandler(); //这个 node 节点是你的事件处理代码组件所属的节点

    clickEventHandler.target = this.node; //这个是代码文件名

    clickEventHandler.component = "MapTools"; // js脚本文件-绑定

    clickEventHandler.handler = "onConfirBtn"; // js方法名称--绑定

    clickEventHandler.customEventData = index; // 回调内容

    button.clickEvents.push(clickEventHandler);
  },
  //按钮点击回调
  onConfirBtn: function onConfirBtn(e, info) {
    console.log(info);

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('/app/api-server/user-server', {
      'id': info['id'],
      'token': null
    }, function (data) {
      console.log(data);
      var server_choes_label = cc.find("Canvas/server/server_choes/server_choes_label");
      server_choes_label.getComponent(cc.Label).string = info['name'];
      var server_choes_type = cc.find("Canvas/server/server_choes/server_choes_type");
      server_choes_type.getComponent(cc.Label).string = info['type'];
      server_choes_type.color = new cc.color(info['color']);
    });
    var mask = cc.find("Canvas/mask");
    mask.active = false; // var mask =  this.node.getChildByName('mask')
    // console.log(this.node.getSiblingIndex())
    // console.log( this.node.parent.getComponent(cc.Button));
    // this.node.getChildByName("sprite_server_login").on('click',function(event){
    //     console.log("点击到按钮");
    //     callback();
    // },this);
    // this.node.active =false; // 直接去掉模型节点
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXE1hcFRvb2xzLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNlcnZlcl90eXBlIiwiTm9kZSIsInNlcnZlcl9uYW1lIiwic3ByaXRlX3NlcnZlcl9sb2dpbiIsIkJ1dHRvbiIsImluaXRJbmZvIiwiaW5mbyIsIl9zZWxmIiwicmVtb3RlVXJsIiwiaHR0cFVybCIsImxvYWRlciIsImxvYWQiLCJ1cmwiLCJlcnIiLCJ0ZXh0dXJlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJMYWJlbCIsInN0cmluZyIsImdldENoaWxkQnlOYW1lIiwiY29sb3IiLCJiaW5kQ2xpY2tFdmVudCIsImJ1dHRvbiIsImluZGV4IiwiY2xpY2tFdmVudEhhbmRsZXIiLCJFdmVudEhhbmRsZXIiLCJ0YXJnZXQiLCJjb21wb25lbnQiLCJoYW5kbGVyIiwiY3VzdG9tRXZlbnREYXRhIiwiY2xpY2tFdmVudHMiLCJwdXNoIiwib25Db25maXJCdG4iLCJlIiwiY29uc29sZSIsImxvZyIsImh0dHBQb3N0IiwiZGF0YSIsInNlcnZlcl9jaG9lc19sYWJlbCIsImZpbmQiLCJzZXJ2ZXJfY2hvZXNfdHlwZSIsIm1hc2siLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLElBQUlHLE1BQU0sR0FBRSxFQUFaO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxX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TUFBRCxDQUF4Qjs7QUFDQSxRQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBRSxJQUFBQSxXQUFXLENBQUM2QyxRQUFaLENBQXFCLDZCQUFyQixFQUFvRDtBQUNoRCxZQUFNakMsSUFBSSxDQUFDLElBQUQsQ0FEc0M7QUFFaEQsZUFBUztBQUZ1QyxLQUFwRCxFQUdHLFVBQVVrQyxJQUFWLEVBQWdCO0FBQ0hILE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaO0FBQ1osVUFBSUMsa0JBQWtCLEdBQUc3QyxFQUFFLENBQUM4QyxJQUFILENBQVEsK0NBQVIsQ0FBekI7QUFDQUQsTUFBQUEsa0JBQWtCLENBQUN6QixZQUFuQixDQUFnQ3BCLEVBQUUsQ0FBQ3dCLEtBQW5DLEVBQTBDQyxNQUExQyxHQUFpRGYsSUFBSSxDQUFDLE1BQUQsQ0FBckQ7QUFDQSxVQUFJcUMsaUJBQWlCLEdBQUcvQyxFQUFFLENBQUM4QyxJQUFILENBQVEsOENBQVIsQ0FBeEI7QUFDQUMsTUFBQUEsaUJBQWlCLENBQUMzQixZQUFsQixDQUErQnBCLEVBQUUsQ0FBQ3dCLEtBQWxDLEVBQXlDQyxNQUF6QyxHQUFnRGYsSUFBSSxDQUFDLE1BQUQsQ0FBcEQ7QUFDQXFDLE1BQUFBLGlCQUFpQixDQUFDcEIsS0FBbEIsR0FBMEIsSUFBSTNCLEVBQUUsQ0FBQzJCLEtBQVAsQ0FBYWpCLElBQUksQ0FBQyxPQUFELENBQWpCLENBQTFCO0FBQ0gsS0FWRDtBQVlBLFFBQUlzQyxJQUFJLEdBQUVoRCxFQUFFLENBQUM4QyxJQUFILENBQVEsYUFBUixDQUFWO0FBR0FFLElBQUFBLElBQUksQ0FBQ0MsTUFBTCxHQUFZLEtBQVosQ0FuQndCLENBcUJ4QjtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFsR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogc2plYW1cclxuICogQERhdGU6IDIwMjItMDYtMTQgMTY6MDE6NDFcclxuICogQERlc2NyaXB0aW9uOiBcclxuICovXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG52YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG52YXIgcGFyYW1zID1bXTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICBcclxuICAgICAgICBzZXJ2ZXJfdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfbmFtZTogY2MuTm9kZSxcclxuICAgICAgICBzcHJpdGVfc2VydmVyX2xvZ2luOiBjYy5CdXR0b25cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgaW5pdEluZm8gKGluZm8pIHtcclxuICAgICAgICAvLyDliJ3lp4vljJbor6XpgZPlhbfnm7jlhbPkv6Hmga9cclxuICAgICAgICAvLyDlm77niYdcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gXHJcbiAgICAgICAgaWYoaW5mb1sncGljdHVyZSddKXtcclxuXHJcbiAgICAgICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsKGluZm9bJ3BpY3R1cmUnXSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKGh0dHBSZXF1ZXN0Lmh0dHBVcmwoaW5mb1sncGljdHVyZSddKSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7ICAgXHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhfc2VsZilcclxuICAgICAgICAgICAgLy8gICAgIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsIH0sIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHsgIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKF9zZWxmKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgICAgICAgICBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAvLyBpZihpbmZvWydudW0nXTwxMDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfnqbrpl7InO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJ2dyZWVuJyk7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYoaW5mb1snbnVtJ108NTAwJiZpbmZvWydudW0nXT49MTAwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n5rWB55WFJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYoaW5mb1snbnVtJ108MTAwMCYmaW5mb1snbnVtJ10+PTUwMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+aLpeaMpCc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0ZGRDEwMCcpO1xyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfniIbmu6EnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRjAwMDAnKTsgXHJcbiAgICAgICAgLy8gfSAgICBcclxuICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VydmVyX25hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9IGluZm9bJ2lkJ10rJ+WMuiAgLSAgJytpbmZvWyduYW1lJ107XHJcbiAgICAgICAgLy/liJvlu7rkuIDkuKrmlrBidXR0b24g5bm25bCG5YW25oyC6L295Yiw5Yib5bu655qE57K+54G15LiLXHJcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudCggdGhpcy5zcHJpdGVfc2VydmVyX2xvZ2luLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBpbmZvKTtcclxuICAgIH0sXHJcbiAgICAvLyDnu5HlrprmjInpkq7kuovku7ZcclxuICAgIGJpbmRDbGlja0V2ZW50OiBmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IFxyXG4gICAgICAgIC8v6L+Z5Liq5piv5Luj56CB5paH5Lu25ZCNXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNYXBUb29sc1wiOyAgLy8ganPohJrmnKzmlofku7Yt57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25Db25maXJCdG5cIjsvLyBqc+aWueazleWQjeensC0t57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaW5kZXg7IC8vIOWbnuiwg+WGheWuuVxyXG4gICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbiBcclxuXHJcbiAgICAvL+aMiemSrueCueWHu+Wbnuiwg1xyXG4gICAgb25Db25maXJCdG46ZnVuY3Rpb24oZSxpbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBpLXNlcnZlci91c2VyLXNlcnZlcicsIHtcclxuICAgICAgICAgICAgJ2lkJzogaW5mb1snaWQnXSxcclxuICAgICAgICAgICAgJ3Rva2VuJzogbnVsbFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgc2VydmVyX2Nob2VzX2xhYmVsICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc19sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VydmVyX2Nob2VzX2xhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICAgICAgdmFyIHNlcnZlcl9jaG9lc190eXBlICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc190eXBlXCIpO1xyXG4gICAgICAgICAgICBzZXJ2ZXJfY2hvZXNfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgICAgIHNlcnZlcl9jaG9lc190eXBlLmNvbG9yID0gbmV3IGNjLmNvbG9yKGluZm9bJ2NvbG9yJ10pOyBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgbWFzayA9Y2MuZmluZChcIkNhbnZhcy9tYXNrXCIpO1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgbWFzay5hY3RpdmU9ZmFsc2VcclxuICAgICAgXHJcbiAgICAgICAgLy8gdmFyIG1hc2sgPSAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdtYXNrJylcclxuICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSk7XHJcbiAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3ByaXRlX3NlcnZlcl9sb2dpblwiKS5vbignY2xpY2snLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLngrnlh7vliLDmjInpkq5cIik7XHJcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgLy8gfSx0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTsgLy8g55u05o6l5Y675o6J5qih5Z6L6IqC54K5XHJcbiAgICB9LFxyXG4gXHJcbn0pO1xyXG4iXX0=