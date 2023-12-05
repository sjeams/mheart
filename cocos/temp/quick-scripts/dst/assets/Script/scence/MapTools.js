
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
    server_star: cc.Node,
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


    var star = '';

    for (i = 0; i <= info['star']; i++) {
      star += '⭐';
    }

    this.server_type.getComponent(cc.Label).string = info['typeName'];
    this.server_star.getComponent(cc.Label).string = star;
    this.node.getChildByName('server_type').color = new cc.color(info['color']);
    this.server_name.getComponent(cc.Label).string = info['name']; //创建一个新button 并将其挂载到创建的精灵下

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXE1hcFRvb2xzLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNlcnZlcl90eXBlIiwiTm9kZSIsInNlcnZlcl9uYW1lIiwic2VydmVyX3N0YXIiLCJzcHJpdGVfc2VydmVyX2xvZ2luIiwiQnV0dG9uIiwiaW5pdEluZm8iLCJpbmZvIiwiX3NlbGYiLCJyZW1vdGVVcmwiLCJodHRwVXJsIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsInRleHR1cmUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInN0YXIiLCJpIiwiTGFiZWwiLCJzdHJpbmciLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiYmluZENsaWNrRXZlbnQiLCJidXR0b24iLCJpbmRleCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImNsaWNrRXZlbnRzIiwicHVzaCIsIm9uQ29uZmlyQnRuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJodHRwUG9zdCIsImRhdGEiLCJzZXJ2ZXJfY2hvZXNfbGFiZWwiLCJmaW5kIiwic2VydmVyX2Nob2VzX3R5cGUiLCJtYXNrIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHLElBQUlGLFVBQUosRUFBbEI7QUFDQSxJQUFJRyxNQUFNLEdBQUUsRUFBWjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFB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LENBbkJ3QixDQXFCeEI7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBdkdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHNqZWFtXHJcbiAqIEBEYXRlOiAyMDIyLTA2LTE0IDE2OjAxOjQxXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqL1xyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxudmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxudmFyIHBhcmFtcyA9W107XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgXHJcbiAgICAgICAgc2VydmVyX3R5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgc2VydmVyX25hbWU6IGNjLk5vZGUsXHJcbiAgICAgICAgc2VydmVyX3N0YXI6IGNjLk5vZGUsXHJcbiAgICAgICAgc3ByaXRlX3NlcnZlcl9sb2dpbjogY2MuQnV0dG9uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIGluaXRJbmZvIChpbmZvKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6K+l6YGT5YW355u45YWz5L+h5oGvXHJcbiAgICAgICAgLy8g5Zu+54mHXHJcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuIFxyXG4gICAgICAgIGlmKGluZm9bJ3BpY3R1cmUnXSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVtb3RlVXJsID0gaHR0cFJlcXVlc3QuaHR0cFVybChpbmZvWydwaWN0dXJlJ10pO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhodHRwUmVxdWVzdC5odHRwVXJsKGluZm9bJ3BpY3R1cmUnXSksIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkgeyAgIFxyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coX3NlbGYpXHJcbiAgICAgICAgICAgIC8vICAgICBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7IFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7ICBcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhfc2VsZilcclxuICAgICAgICAgICAgICAgICAgICAvLyBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7IFxyXG4gICAgICAgICAgICAgICAgX3NlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgLy8gaWYoaW5mb1snbnVtJ108MTAwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n56m66ZeyJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCdncmVlbicpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDUwMCYmaW5mb1snbnVtJ10+PTEwMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+a1geeVhSc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDEwMDAmJmluZm9bJ251bSddPj01MDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmi6XmjKQnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRkQxMDAnKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n54iG5ruhJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkYwMDAwJyk7IFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB2YXIgc3RhciA9Jyc7ICAgIFxyXG4gICAgICAgIGZvcihpPTA7aTw9aW5mb1snc3RhciddO2krKyl7XHJcbiAgICAgICAgICAgIHN0YXIgKz0n4q2QJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0gaW5mb1sndHlwZU5hbWUnXTtcclxuICAgICAgICB0aGlzLnNlcnZlcl9zdGFyLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSBzdGFyO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcihpbmZvWydjb2xvciddKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfbmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyduYW1lJ107XHJcbiAgICAgICAgLy/liJvlu7rkuIDkuKrmlrBidXR0b24g5bm25bCG5YW25oyC6L295Yiw5Yib5bu655qE57K+54G15LiLXHJcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudCggdGhpcy5zcHJpdGVfc2VydmVyX2xvZ2luLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBpbmZvKTtcclxuICAgIH0sXHJcbiAgICAvLyDnu5HlrprmjInpkq7kuovku7ZcclxuICAgIGJpbmRDbGlja0V2ZW50OiBmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IFxyXG4gICAgICAgIC8v6L+Z5Liq5piv5Luj56CB5paH5Lu25ZCNXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNYXBUb29sc1wiOyAgLy8ganPohJrmnKzmlofku7Yt57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25Db25maXJCdG5cIjsvLyBqc+aWueazleWQjeensC0t57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaW5kZXg7IC8vIOWbnuiwg+WGheWuuVxyXG4gICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbiBcclxuXHJcbiAgICAvL+aMiemSrueCueWHu+Wbnuiwg1xyXG4gICAgb25Db25maXJCdG46ZnVuY3Rpb24oZSxpbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBpLXNlcnZlci91c2VyLXNlcnZlcicsIHtcclxuICAgICAgICAgICAgJ2lkJzogaW5mb1snaWQnXSxcclxuICAgICAgICAgICAgJ3Rva2VuJzogbnVsbFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgc2VydmVyX2Nob2VzX2xhYmVsICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc19sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VydmVyX2Nob2VzX2xhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICAgICAgdmFyIHNlcnZlcl9jaG9lc190eXBlICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc190eXBlXCIpO1xyXG4gICAgICAgICAgICBzZXJ2ZXJfY2hvZXNfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgICAgIHNlcnZlcl9jaG9lc190eXBlLmNvbG9yID0gbmV3IGNjLmNvbG9yKGluZm9bJ2NvbG9yJ10pOyBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgbWFzayA9Y2MuZmluZChcIkNhbnZhcy9tYXNrXCIpO1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgbWFzay5hY3RpdmU9ZmFsc2VcclxuICAgICAgXHJcbiAgICAgICAgLy8gdmFyIG1hc2sgPSAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdtYXNrJylcclxuICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSk7XHJcbiAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3ByaXRlX3NlcnZlcl9sb2dpblwiKS5vbignY2xpY2snLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLngrnlh7vliLDmjInpkq5cIik7XHJcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgLy8gfSx0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTsgLy8g55u05o6l5Y675o6J5qih5Z6L6IqC54K5XHJcbiAgICB9LFxyXG4gXHJcbn0pO1xyXG4iXX0=