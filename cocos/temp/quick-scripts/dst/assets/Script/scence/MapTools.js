
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/mapTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df10ejMPvRJdp1lxSv9/YbW', 'mapTools');
// Script/scence/mapTools.js

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
    server_picture: cc.Node,
    server_type: cc.Node,
    server_name: cc.Node,
    server_star: cc.Node,
    sprite_server_login: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  initInfo: function initInfo(info_list) {
    info = info_list['biology_list'][0]; // 初始化该道具相关信息
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
        // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
        _self.server_picture.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      });
    } // this.server_type.getComponent(cc.Label).string=info['type'];
    // if(info['type']==1){
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


    var color = ['#ffffff', 'green', '#BDFF00', '#FFD100', '#FF0000', '#ffe000'];
    var type_color = color[info['yiXing']]; // console.log(info)

    var star = '';

    for (i = 0; i <= info['yiXing']; i++) {
      star += '⭐';
    }

    this.server_star.getComponent(cc.Label).string = star;
    this.server_type.getComponent(cc.Label).string = 'Lv.' + info['grade'];
    this.node.getChildByName('server_type').color = new cc.color(type_color);
    this.server_name.getComponent(cc.Label).string = info['name'];
    this.node.getChildByName('server_name').color = new cc.color(type_color); //创建一个新button 并将其挂载到创建的精灵下

    this.bindClickEvent(this.sprite_server_login.getComponent(cc.Button), info);
  },
  // 绑定按钮事件
  bindClickEvent: function bindClickEvent(button, index) {
    // console.log(index)
    var clickEventHandler = new cc.Component.EventHandler(); //这个 node 节点是你的事件处理代码组件所属的节点

    clickEventHandler.target = this.node; //这个是代码文件名

    clickEventHandler.component = "mapTools"; // js脚本文件-绑定

    clickEventHandler.handler = "onConfirBtn"; // js方法名称--绑定

    clickEventHandler.customEventData = index; // 回调内容

    button.clickEvents.push(clickEventHandler);
  },
  //按钮点击回调
  onConfirBtn: function onConfirBtn(e, info) {
    console.log(info);

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('/app/app-apiword/in-word', {
      'id': info['id'],
      'star': info['star'],
      'token': null
    }, function (data) {
      //跳转到世界
      cc.director.loadScene('map/诸天地图'); // console.log(data);
      // var server_choes_label  =cc.find("Canvas/server/server_choes/server_choes_label");
      // server_choes_label.getComponent(cc.Label).string=info['name'];
      // var server_choes_type  =cc.find("Canvas/server/server_choes/server_choes_type");
      // server_choes_type.getComponent(cc.Label).string=info['type'];
      // server_choes_type.color = new cc.color(info['color']); 
    }); // var mask =cc.find("Canvas/mask");
    // mask.active=false
    // var mask =  this.node.getChildByName('mask')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXG1hcFRvb2xzLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNlcnZlcl9waWN0dXJlIiwiTm9kZSIsInNlcnZlcl90eXBlIiwic2VydmVyX25hbWUiLCJzZXJ2ZXJfc3RhciIsInNwcml0ZV9zZXJ2ZXJfbG9naW4iLCJCdXR0b24iLCJpbml0SW5mbyIsImluZm9fbGlzdCIsImluZm8iLCJfc2VsZiIsInJlbW90ZVVybCIsImh0dHBVcmwiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwiZXJyIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJjb2xvciIsInR5cGVfY29sb3IiLCJzdGFyIiwiaSIsIkxhYmVsIiwic3RyaW5nIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYmluZENsaWNrRXZlbnQiLCJidXR0b24iLCJpbmRleCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImNsaWNrRXZlbnRzIiwicHVzaCIsIm9uQ29uZmlyQnRuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJodHRwUG9zdCIsImRhdGEiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCOztBQUNBLElBQUlDLFdBQVcsR0FBRyxJQUFJRixVQUFKLEVBQWxCO0FBQ0EsSUFBSUcsTUFBTSxHQUFFLEVBQVo7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFB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QUFDQTtBQUNBO0FBQ0g7QUE3R0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogc2plYW1cclxuICogQERhdGU6IDIwMjItMDYtMTQgMTY6MDE6NDFcclxuICogQERlc2NyaXB0aW9uOiBcclxuICovXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG52YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG52YXIgcGFyYW1zID1bXTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzZXJ2ZXJfcGljdHVyZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfbmFtZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfc3RhcjogY2MuTm9kZSxcclxuICAgICAgICBzcHJpdGVfc2VydmVyX2xvZ2luOiBjYy5CdXR0b25cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgaW5pdEluZm8gKGluZm9fbGlzdCkge1xyXG4gICAgICAgIGluZm89aW5mb19saXN0WydiaW9sb2d5X2xpc3QnXVswXTtcclxuICAgICAgICAvLyDliJ3lp4vljJbor6XpgZPlhbfnm7jlhbPkv6Hmga9cclxuICAgICAgICAvLyDlm77niYdcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gXHJcbiAgICAgICAgaWYoaW5mb1sncGljdHVyZSddKXtcclxuICAgICAgICAgICAgdmFyIHJlbW90ZVVybCA9IGh0dHBSZXF1ZXN0Lmh0dHBVcmwoaW5mb1sncGljdHVyZSddKTtcclxuICAgICAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoaHR0cFJlcXVlc3QuaHR0cFVybChpbmZvWydwaWN0dXJlJ10pLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHsgICBcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKF9zZWxmKVxyXG4gICAgICAgICAgICAvLyAgICAgX3NlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lOyBcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICAgICAgICAvLyBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICBfc2VsZi5zZXJ2ZXJfcGljdHVyZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1sndHlwZSddO1xyXG4gICAgICAgIC8vIGlmKGluZm9bJ3R5cGUnXT09MSl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+epuumXsic7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignZ3JlZW4nKTtcclxuICAgICAgICAvLyB9ZWxzZSBpZihpbmZvWydudW0nXTw1MDAmJmluZm9bJ251bSddPj0xMDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmtYHnlYUnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNCREZGMDAnKTtcclxuICAgICAgICAvLyB9ZWxzZSBpZihpbmZvWydudW0nXTwxMDAwJiZpbmZvWydudW0nXT49NTAwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n5oul5oykJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkZEMTAwJyk7XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+eIhua7oSc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0ZGMDAwMCcpOyBcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGNvbG9yID0gWycjZmZmZmZmJywnZ3JlZW4nLCcjQkRGRjAwJywnI0ZGRDEwMCcsJyNGRjAwMDAnLCcjZmZlMDAwJyxdO1xyXG4gICAgICAgIHZhciB0eXBlX2NvbG9yID0gY29sb3JbaW5mb1sneWlYaW5nJ11dO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgdmFyIHN0YXIgPScnOyAgICBcclxuICAgICAgICBmb3IoaT0wO2k8PWluZm9bJ3lpWGluZyddO2krKyl7XHJcbiAgICAgICAgICAgIHN0YXIgKz0n4q2QJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VydmVyX3N0YXIuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9IHN0YXI7XHJcblxyXG4gICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J0x2LicraW5mb1snZ3JhZGUnXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IodHlwZV9jb2xvcik7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNlcnZlcl9uYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl9uYW1lJykuY29sb3IgPSBuZXcgY2MuY29sb3IodHlwZV9jb2xvcik7XHJcbiAgICAgICAgLy/liJvlu7rkuIDkuKrmlrBidXR0b24g5bm25bCG5YW25oyC6L295Yiw5Yib5bu655qE57K+54G15LiLXHJcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudCggdGhpcy5zcHJpdGVfc2VydmVyX2xvZ2luLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBpbmZvKTtcclxuICAgIH0sXHJcbiAgICAvLyDnu5HlrprmjInpkq7kuovku7ZcclxuICAgIGJpbmRDbGlja0V2ZW50OiBmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IFxyXG4gICAgICAgIC8v6L+Z5Liq5piv5Luj56CB5paH5Lu25ZCNXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJtYXBUb29sc1wiOyAgLy8ganPohJrmnKzmlofku7Yt57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25Db25maXJCdG5cIjsvLyBqc+aWueazleWQjeensC0t57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaW5kZXg7IC8vIOWbnuiwg+WGheWuuVxyXG4gICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbiBcclxuXHJcbiAgICAvL+aMiemSrueCueWHu+Wbnuiwg1xyXG4gICAgb25Db25maXJCdG46ZnVuY3Rpb24oZSxpbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvaW4td29yZCcsIHtcclxuICAgICAgICAgICAgJ2lkJzogaW5mb1snaWQnXSxcclxuICAgICAgICAgICAgJ3N0YXInOiBpbmZvWydzdGFyJ10sXHJcbiAgICAgICAgICAgICd0b2tlbic6IG51bGxcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL+i3s+i9rOWIsOS4lueVjFxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcC/or7jlpKnlnLDlm74nKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBzZXJ2ZXJfY2hvZXNfbGFiZWwgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX2xhYmVsXCIpO1xyXG4gICAgICAgICAgICAvLyBzZXJ2ZXJfY2hvZXNfbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1snbmFtZSddO1xyXG4gICAgICAgICAgICAvLyB2YXIgc2VydmVyX2Nob2VzX3R5cGUgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX3R5cGVcIik7XHJcbiAgICAgICAgICAgIC8vIHNlcnZlcl9jaG9lc190eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAgICAgLy8gc2VydmVyX2Nob2VzX3R5cGUuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7IFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHZhciBtYXNrID1jYy5maW5kKFwiQ2FudmFzL21hc2tcIik7XHJcbiAgICAgICAgLy8gbWFzay5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAvLyB2YXIgbWFzayA9ICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21hc2snKVxyXG4gICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pKTtcclxuICAgICBcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJpdGVfc2VydmVyX2xvZ2luXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIueCueWHu+WIsOaMiemSrlwiKTtcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAvLyB9LHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlOyAvLyDnm7TmjqXljrvmjonmqKHlnovoioLngrlcclxuICAgIH0sXHJcbiBcclxufSk7XHJcbiJdfQ==