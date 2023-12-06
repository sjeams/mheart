
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/wordTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9fe90XuBmFABbeLvXUzRi55', 'wordTools');
// Script/scence/wordTools.js

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
    var type_color = color[info['type']]; // console.log(info)

    var star = '';

    for (i = 0; i <= info['star']; i++) {
      star += '⭐';
    }

    this.server_type.getComponent(cc.Label).string = info['type_name'];
    this.server_star.getComponent(cc.Label).string = star;
    this.node.getChildByName('server_type').color = new cc.color(type_color);
    this.server_name.getComponent(cc.Label).string = info['name']; //创建一个新button 并将其挂载到创建的精灵下

    this.bindClickEvent(this.sprite_server_login.getComponent(cc.Button), info);
  },
  // 绑定按钮事件
  bindClickEvent: function bindClickEvent(button, index) {
    // console.log(index)
    var clickEventHandler = new cc.Component.EventHandler(); //这个 node 节点是你的事件处理代码组件所属的节点

    clickEventHandler.target = this.node; //这个是代码文件名

    clickEventHandler.component = "wordTools"; // js脚本文件-绑定

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHdvcmRUb29scy5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwicGFyYW1zIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZXJ2ZXJfcGljdHVyZSIsIk5vZGUiLCJzZXJ2ZXJfdHlwZSIsInNlcnZlcl9uYW1lIiwic2VydmVyX3N0YXIiLCJzcHJpdGVfc2VydmVyX2xvZ2luIiwiQnV0dG9uIiwiaW5pdEluZm8iLCJpbmZvIiwiX3NlbGYiLCJyZW1vdGVVcmwiLCJodHRwVXJsIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsInRleHR1cmUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwiY29sb3IiLCJ0eXBlX2NvbG9yIiwic3RhciIsImkiLCJMYWJlbCIsInN0cmluZyIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImJpbmRDbGlja0V2ZW50IiwiYnV0dG9uIiwiaW5kZXgiLCJjbGlja0V2ZW50SGFuZGxlciIsIkV2ZW50SGFuZGxlciIsInRhcmdldCIsImNvbXBvbmVudCIsImhhbmRsZXIiLCJjdXN0b21FdmVudERhdGEiLCJjbGlja0V2ZW50cyIsInB1c2giLCJvbkNvbmZpckJ0biIsImUiLCJjb25zb2xlIiwibG9nIiwiaHR0cFBvc3QiLCJkYXRhIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLElBQUlHLE1BQU0sR0FBRSxFQUFaO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFB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U0FBbEIsR0FBOEIsV0FBOUIsQ0FOcUMsQ0FNTzs7QUFDNUNILElBQUFBLGlCQUFpQixDQUFDSSxPQUFsQixHQUE0QixhQUE1QixDQVBxQyxDQU9LOztBQUMxQ0osSUFBQUEsaUJBQWlCLENBQUNLLGVBQWxCLEdBQW9DTixLQUFwQyxDQVJxQyxDQVFNOztBQUMzQ0QsSUFBQUEsTUFBTSxDQUFDUSxXQUFQLENBQW1CQyxJQUFuQixDQUF3QlAsaUJBQXhCO0FBQ0gsR0F2RUk7QUEwRUw7QUFDQVEsRUFBQUEsV0FBVyxFQUFDLHFCQUFTQyxDQUFULEVBQVdqQyxJQUFYLEVBQWdCO0FBQ3hCa0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVluQyxJQUFaOztBQUNBLFFBQUloQixVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCOztBQUNBLFFBQUlDLFdBQVcsR0FBRyxJQUFJRixVQUFKLEVBQWxCO0FBQ0FFLElBQUFBLFdBQVcsQ0FBQ2tELFFBQVosQ0FBcUIsMEJBQXJCLEVBQWlEO0FBQzdDLFlBQU1wQyxJQUFJLENBQUMsSUFBRCxDQURtQztBQUU3QyxjQUFRQSxJQUFJLENBQUMsTUFBRCxDQUZpQztBQUc3QyxlQUFTO0FBSG9DLEtBQWpELEVBSUcsVUFBVXFDLElBQVYsRUFBZ0I7QUFDZjtBQUNBakQsTUFBQUEsRUFBRSxDQUFDa0QsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFVBQXRCLEVBRmUsQ0FHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxLQWJELEVBSndCLENBbUJ4QjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBMUdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHNqZWFtXHJcbiAqIEBEYXRlOiAyMDIyLTA2LTE0IDE2OjAxOjQxXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqL1xyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxudmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxudmFyIHBhcmFtcyA9W107XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc2VydmVyX3BpY3R1cmU6IGNjLk5vZGUsXHJcbiAgICAgICAgc2VydmVyX3R5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgc2VydmVyX25hbWU6IGNjLk5vZGUsXHJcbiAgICAgICAgc2VydmVyX3N0YXI6IGNjLk5vZGUsXHJcbiAgICAgICAgc3ByaXRlX3NlcnZlcl9sb2dpbjogY2MuQnV0dG9uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIGluaXRJbmZvIChpbmZvKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6K+l6YGT5YW355u45YWz5L+h5oGvXHJcbiAgICAgICAgLy8g5Zu+54mHXHJcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuIFxyXG4gICAgICAgIGlmKGluZm9bJ3BpY3R1cmUnXSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVtb3RlVXJsID0gaHR0cFJlcXVlc3QuaHR0cFVybChpbmZvWydwaWN0dXJlJ10pO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhodHRwUmVxdWVzdC5odHRwVXJsKGluZm9bJ3BpY3R1cmUnXSksIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkgeyAgIFxyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coX3NlbGYpXHJcbiAgICAgICAgICAgIC8vICAgICBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7IFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7ICBcclxuICAgICAgICAgICAgICAgIC8vIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSlcclxuICAgICAgICAgICAgICAgIF9zZWxmLnNlcnZlcl9waWN0dXJlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgLy8gaWYoaW5mb1sndHlwZSddPT0xKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n56m66ZeyJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCdncmVlbicpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDUwMCYmaW5mb1snbnVtJ10+PTEwMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+a1geeVhSc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDEwMDAmJmluZm9bJ251bSddPj01MDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmi6XmjKQnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRkQxMDAnKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n54iG5ruhJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkYwMDAwJyk7IFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgY29sb3IgPSBbJyNmZmZmZmYnLCdncmVlbicsJyNCREZGMDAnLCcjRkZEMTAwJywnI0ZGMDAwMCcsJyNmZmUwMDAnLF07XHJcbiAgICAgICAgdmFyIHR5cGVfY29sb3IgPSBjb2xvcltpbmZvWyd0eXBlJ11dO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgdmFyIHN0YXIgPScnOyAgICBcclxuICAgICAgICBmb3IoaT0wO2k8PWluZm9bJ3N0YXInXTtpKyspe1xyXG4gICAgICAgICAgICBzdGFyICs9J+KtkCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9IGluZm9bJ3R5cGVfbmFtZSddO1xyXG4gICAgICAgIHRoaXMuc2VydmVyX3N0YXIuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9IHN0YXI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKHR5cGVfY29sb3IpO1xyXG5cclxuICAgICAgICB0aGlzLnNlcnZlcl9uYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICAvL+WIm+W7uuS4gOS4quaWsGJ1dHRvbiDlubblsIblhbbmjILovb3liLDliJvlu7rnmoTnsr7ngbXkuItcclxuICAgICAgICB0aGlzLmJpbmRDbGlja0V2ZW50KCB0aGlzLnNwcml0ZV9zZXJ2ZXJfbG9naW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIGluZm8pO1xyXG4gICAgfSxcclxuICAgIC8vIOe7keWumuaMiemSruS6i+S7tlxyXG4gICAgYmluZENsaWNrRXZlbnQ6IGZ1bmN0aW9uIChidXR0b24sIGluZGV4KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgdmFyIGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgXHJcbiAgICAgICAgLy/ov5nkuKrmmK/ku6PnoIHmlofku7blkI1cclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIndvcmRUb29sc1wiOyAgLy8ganPohJrmnKzmlofku7Yt57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25Db25maXJCdG5cIjsvLyBqc+aWueazleWQjeensC0t57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaW5kZXg7IC8vIOWbnuiwg+WGheWuuVxyXG4gICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbiBcclxuXHJcbiAgICAvL+aMiemSrueCueWHu+Wbnuiwg1xyXG4gICAgb25Db25maXJCdG46ZnVuY3Rpb24oZSxpbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvaW4td29yZCcsIHtcclxuICAgICAgICAgICAgJ2lkJzogaW5mb1snaWQnXSxcclxuICAgICAgICAgICAgJ3N0YXInOiBpbmZvWydzdGFyJ10sXHJcbiAgICAgICAgICAgICd0b2tlbic6IG51bGxcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL+i3s+i9rOWIsOS4lueVjFxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcC/or7jlpKnlnLDlm74nKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBzZXJ2ZXJfY2hvZXNfbGFiZWwgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX2xhYmVsXCIpO1xyXG4gICAgICAgICAgICAvLyBzZXJ2ZXJfY2hvZXNfbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1snbmFtZSddO1xyXG4gICAgICAgICAgICAvLyB2YXIgc2VydmVyX2Nob2VzX3R5cGUgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX3R5cGVcIik7XHJcbiAgICAgICAgICAgIC8vIHNlcnZlcl9jaG9lc190eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAgICAgLy8gc2VydmVyX2Nob2VzX3R5cGUuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7IFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHZhciBtYXNrID1jYy5maW5kKFwiQ2FudmFzL21hc2tcIik7XHJcbiAgICAgICAgLy8gbWFzay5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAvLyB2YXIgbWFzayA9ICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21hc2snKVxyXG4gICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pKTtcclxuICAgICBcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJpdGVfc2VydmVyX2xvZ2luXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIueCueWHu+WIsOaMiemSrlwiKTtcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAvLyB9LHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlOyAvLyDnm7TmjqXljrvmjonmqKHlnovoioLngrlcclxuICAgIH0sXHJcbiBcclxufSk7XHJcbiJdfQ==