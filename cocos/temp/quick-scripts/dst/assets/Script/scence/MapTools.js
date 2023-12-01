
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
    console.log(httpRequest.httpUrl(info['picture'])); // 图片

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

    clickEventHandler.component = "Tools"; // js脚本文件-绑定

    clickEventHandler.handler = "onConfirBtn"; // js方法名称--绑定

    clickEventHandler.customEventData = index; // 回调内容

    button.clickEvents.push(clickEventHandler);
  },
  //按钮点击回调
  onConfirBtn: function onConfirBtn(e, info) {
    console.log(info);

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.aheart.cn/app/api-server/user-server', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXE1hcFRvb2xzLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNlcnZlcl90eXBlIiwiTm9kZSIsInNlcnZlcl9uYW1lIiwic3ByaXRlX3NlcnZlcl9sb2dpbiIsIkJ1dHRvbiIsImluaXRJbmZvIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJodHRwVXJsIiwiX3NlbGYiLCJyZW1vdGVVcmwiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwiZXJyIiwidGV4dHVyZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwiTGFiZWwiLCJzdHJpbmciLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiYmluZENsaWNrRXZlbnQiLCJidXR0b24iLCJpbmRleCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImNsaWNrRXZlbnRzIiwicHVzaCIsIm9uQ29uZmlyQnRuIiwiZSIsImh0dHBQb3N0IiwiZGF0YSIsInNlcnZlcl9jaG9lc19sYWJlbCIsImZpbmQiLCJzZXJ2ZXJfY2hvZXNfdHlwZSIsIm1hc2siLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLElBQUlHLE1BQU0sR0FBRSxFQUFaO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxX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c291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBzamVhbVxyXG4gKiBARGF0ZTogMjAyMi0wNi0xNCAxNjowMTo0MVxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gIFxyXG4gICAgICAgIHNlcnZlcl90eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl9uYW1lOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNwcml0ZV9zZXJ2ZXJfbG9naW46IGNjLkJ1dHRvblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBpbml0SW5mbyAoaW5mbykge1xyXG4gICAgICAgIC8vIOWIneWni+WMluivpemBk+WFt+ebuOWFs+S/oeaBr1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGh0dHBSZXF1ZXN0Lmh0dHBVcmwoaW5mb1sncGljdHVyZSddKSlcclxuICAgICAgICAvLyDlm77niYdcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gXHJcbiAgICAgICAgaWYoaW5mb1sncGljdHVyZSddKXtcclxuXHJcbiAgICAgICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsKGluZm9bJ3BpY3R1cmUnXSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKGh0dHBSZXF1ZXN0Lmh0dHBVcmwoaW5mb1sncGljdHVyZSddKSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7ICAgXHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhfc2VsZilcclxuICAgICAgICAgICAgLy8gICAgIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsIH0sIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHsgIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKF9zZWxmKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgICAgICAgICBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAvLyBpZihpbmZvWydudW0nXTwxMDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfnqbrpl7InO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJ2dyZWVuJyk7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYoaW5mb1snbnVtJ108NTAwJiZpbmZvWydudW0nXT49MTAwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n5rWB55WFJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYoaW5mb1snbnVtJ108MTAwMCYmaW5mb1snbnVtJ10+PTUwMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+aLpeaMpCc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0ZGRDEwMCcpO1xyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfniIbmu6EnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRjAwMDAnKTsgXHJcbiAgICAgICAgLy8gfSAgICBcclxuICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VydmVyX25hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9IGluZm9bJ2lkJ10rJ+WMuiAgLSAgJytpbmZvWyduYW1lJ107XHJcbiAgICAgICAgLy/liJvlu7rkuIDkuKrmlrBidXR0b24g5bm25bCG5YW25oyC6L295Yiw5Yib5bu655qE57K+54G15LiLXHJcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudCggdGhpcy5zcHJpdGVfc2VydmVyX2xvZ2luLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBpbmZvKTtcclxuICAgIH0sXHJcbiAgICAvLyDnu5HlrprmjInpkq7kuovku7ZcclxuICAgIGJpbmRDbGlja0V2ZW50OiBmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IFxyXG4gICAgICAgIC8v6L+Z5Liq5piv5Luj56CB5paH5Lu25ZCNXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJUb29sc1wiOyAgLy8ganPohJrmnKzmlofku7Yt57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25Db25maXJCdG5cIjsvLyBqc+aWueazleWQjeensC0t57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaW5kZXg7IC8vIOWbnuiwg+WGheWuuVxyXG4gICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbiBcclxuXHJcbiAgICAvL+aMiemSrueCueWHu+Wbnuiwg1xyXG4gICAgb25Db25maXJCdG46ZnVuY3Rpb24oZSxpbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpLXNlcnZlci91c2VyLXNlcnZlcicsIHtcclxuICAgICAgICAgICAgJ2lkJzogaW5mb1snaWQnXSxcclxuICAgICAgICAgICAgJ3Rva2VuJzogbnVsbFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgc2VydmVyX2Nob2VzX2xhYmVsICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc19sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VydmVyX2Nob2VzX2xhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICAgICAgdmFyIHNlcnZlcl9jaG9lc190eXBlICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc190eXBlXCIpO1xyXG4gICAgICAgICAgICBzZXJ2ZXJfY2hvZXNfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgICAgIHNlcnZlcl9jaG9lc190eXBlLmNvbG9yID0gbmV3IGNjLmNvbG9yKGluZm9bJ2NvbG9yJ10pOyBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgbWFzayA9Y2MuZmluZChcIkNhbnZhcy9tYXNrXCIpO1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgbWFzay5hY3RpdmU9ZmFsc2VcclxuICAgICAgXHJcbiAgICAgICAgLy8gdmFyIG1hc2sgPSAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdtYXNrJylcclxuICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSk7XHJcbiAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3ByaXRlX3NlcnZlcl9sb2dpblwiKS5vbignY2xpY2snLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLngrnlh7vliLDmjInpkq5cIik7XHJcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgLy8gfSx0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTsgLy8g55u05o6l5Y675o6J5qih5Z6L6IqC54K5XHJcbiAgICB9LFxyXG4gXHJcbn0pO1xyXG4iXX0=