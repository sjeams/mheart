
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/fighting/fightingTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ac9fkSQUlL+ayF4+pxgOVe', 'fightingTools');
// Script/fighting/fightingTools.js

"use strict";

/*
 * @Author: sjeam
 * @Date: 2022-06-14 16:01:41
 * @Description: 
 */
var HttpHelper = require("../http");

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
    info = info_list['biology']; // 初始化该道具相关信息
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
    this.server_type.getComponent(cc.Label).string = 'Lv.' + info['grade'] + '(' + info['state_name']['name'] + ')';
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

    var HttpHelper = require("../http");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmaWdodGluZ1xcZmlnaHRpbmdUb29scy5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwicGFyYW1zIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZXJ2ZXJfcGljdHVyZSIsIk5vZGUiLCJzZXJ2ZXJfdHlwZSIsInNlcnZlcl9uYW1lIiwic2VydmVyX3N0YXIiLCJzcHJpdGVfc2VydmVyX2xvZ2luIiwiQnV0dG9uIiwiaW5pdEluZm8iLCJpbmZvX2xpc3QiLCJpbmZvIiwiX3NlbGYiLCJyZW1vdGVVcmwiLCJodHRwVXJsIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsInRleHR1cmUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwiY29sb3IiLCJ0eXBlX2NvbG9yIiwic3RhciIsImkiLCJMYWJlbCIsInN0cmluZyIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImJpbmRDbGlja0V2ZW50IiwiYnV0dG9uIiwiaW5kZXgiLCJjbGlja0V2ZW50SGFuZGxlciIsIkV2ZW50SGFuZGxlciIsInRhcmdldCIsImNvbXBvbmVudCIsImhhbmRsZXIiLCJjdXN0b21FdmVudERhdGEiLCJjbGlja0V2ZW50cyIsInB1c2giLCJvbkNvbmZpckJ0biIsImUiLCJjb25zb2xlIiwibG9nIiwiaHR0cFBvc3QiLCJkYXRhIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLElBQUlHLE1BQU0sR0FBRSxFQUFaO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FB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QUFDSCxLQWJELEVBSndCLENBbUJ4QjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBNUdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHNqZWFtXHJcbiAqIEBEYXRlOiAyMDIyLTA2LTE0IDE2OjAxOjQxXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqL1xyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCIuLi9odHRwXCIpOyBcclxudmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxudmFyIHBhcmFtcyA9W107XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc2VydmVyX3BpY3R1cmU6IGNjLk5vZGUsXHJcbiAgICAgICAgc2VydmVyX3R5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgc2VydmVyX25hbWU6IGNjLk5vZGUsXHJcbiAgICAgICAgc2VydmVyX3N0YXI6IGNjLk5vZGUsXHJcbiAgICAgICAgc3ByaXRlX3NlcnZlcl9sb2dpbjogY2MuQnV0dG9uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIGluaXRJbmZvIChpbmZvX2xpc3QpIHtcclxuICAgICAgICBpbmZvPWluZm9fbGlzdFsnYmlvbG9neSddO1xyXG4gICAgICAgIC8vIOWIneWni+WMluivpemBk+WFt+ebuOWFs+S/oeaBr1xyXG4gICAgICAgIC8vIOWbvueJh1xyXG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiBcclxuICAgICAgICBpZihpbmZvWydwaWN0dXJlJ10pe1xyXG4gICAgICAgICAgICB2YXIgcmVtb3RlVXJsID0gaHR0cFJlcXVlc3QuaHR0cFVybChpbmZvWydwaWN0dXJlJ10pO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhodHRwUmVxdWVzdC5odHRwVXJsKGluZm9bJ3BpY3R1cmUnXSksIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkgeyAgIFxyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coX3NlbGYpXHJcbiAgICAgICAgICAgIC8vICAgICBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7IFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7ICBcclxuICAgICAgICAgICAgICAgIC8vIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSlcclxuICAgICAgICAgICAgICAgIF9zZWxmLnNlcnZlcl9waWN0dXJlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgLy8gaWYoaW5mb1sndHlwZSddPT0xKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n56m66ZeyJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCdncmVlbicpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDUwMCYmaW5mb1snbnVtJ10+PTEwMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+a1geeVhSc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDEwMDAmJmluZm9bJ251bSddPj01MDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmi6XmjKQnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRkQxMDAnKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n54iG5ruhJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkYwMDAwJyk7IFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgY29sb3IgPSBbJyNmZmZmZmYnLCdncmVlbicsJyNCREZGMDAnLCcjRkZEMTAwJywnI0ZGMDAwMCcsJyNmZmUwMDAnLF07XHJcbiAgICAgICAgdmFyIHR5cGVfY29sb3IgPSBjb2xvcltpbmZvWyd5aVhpbmcnXV07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5mbylcclxuICAgICAgICB2YXIgc3RhciA9Jyc7ICAgIFxyXG4gICAgICAgIGZvcihpPTA7aTw9aW5mb1sneWlYaW5nJ107aSsrKXtcclxuICAgICAgICAgICAgc3RhciArPSfirZAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlcnZlcl9zdGFyLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSBzdGFyO1xyXG5cclxuICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSdMdi4nK2luZm9bJ2dyYWRlJ10rJygnK2luZm9bJ3N0YXRlX25hbWUnXVsnbmFtZSddKycpJztcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IodHlwZV9jb2xvcik7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNlcnZlcl9uYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl9uYW1lJykuY29sb3IgPSBuZXcgY2MuY29sb3IodHlwZV9jb2xvcik7XHJcbiAgICAgICAgLy/liJvlu7rkuIDkuKrmlrBidXR0b24g5bm25bCG5YW25oyC6L295Yiw5Yib5bu655qE57K+54G15LiLXHJcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudCggdGhpcy5zcHJpdGVfc2VydmVyX2xvZ2luLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBpbmZvKTtcclxuICAgIH0sXHJcbiAgICAvLyDnu5HlrprmjInpkq7kuovku7ZcclxuICAgIGJpbmRDbGlja0V2ZW50OiBmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IFxyXG4gICAgICAgIC8v6L+Z5Liq5piv5Luj56CB5paH5Lu25ZCNXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJtYXBUb29sc1wiOyAgLy8ganPohJrmnKzmlofku7Yt57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25Db25maXJCdG5cIjsvLyBqc+aWueazleWQjeensC0t57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaW5kZXg7IC8vIOWbnuiwg+WGheWuuVxyXG4gICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbiBcclxuXHJcbiAgICAvL+aMiemSrueCueWHu+Wbnuiwg1xyXG4gICAgb25Db25maXJCdG46ZnVuY3Rpb24oZSxpbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcIi4uL2h0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvaW4td29yZCcsIHtcclxuICAgICAgICAgICAgJ2lkJzogaW5mb1snaWQnXSxcclxuICAgICAgICAgICAgJ3N0YXInOiBpbmZvWydzdGFyJ10sXHJcbiAgICAgICAgICAgICd0b2tlbic6IG51bGxcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL+i3s+i9rOWIsOS4lueVjFxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcC/or7jlpKnlnLDlm74nKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBzZXJ2ZXJfY2hvZXNfbGFiZWwgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX2xhYmVsXCIpO1xyXG4gICAgICAgICAgICAvLyBzZXJ2ZXJfY2hvZXNfbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1snbmFtZSddO1xyXG4gICAgICAgICAgICAvLyB2YXIgc2VydmVyX2Nob2VzX3R5cGUgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX3R5cGVcIik7XHJcbiAgICAgICAgICAgIC8vIHNlcnZlcl9jaG9lc190eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAgICAgLy8gc2VydmVyX2Nob2VzX3R5cGUuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7IFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHZhciBtYXNrID1jYy5maW5kKFwiQ2FudmFzL21hc2tcIik7XHJcbiAgICAgICAgLy8gbWFzay5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAvLyB2YXIgbWFzayA9ICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21hc2snKVxyXG4gICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pKTtcclxuICAgICBcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJpdGVfc2VydmVyX2xvZ2luXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIueCueWHu+WIsOaMiemSrlwiKTtcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAvLyB9LHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlOyAvLyDnm7TmjqXljrvmjonmqKHlnovoioLngrlcclxuICAgIH0sXHJcbiBcclxufSk7XHJcbiJdfQ==