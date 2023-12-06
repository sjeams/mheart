
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXG1hcFRvb2xzLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNlcnZlcl9waWN0dXJlIiwiTm9kZSIsInNlcnZlcl90eXBlIiwic2VydmVyX25hbWUiLCJzZXJ2ZXJfc3RhciIsInNwcml0ZV9zZXJ2ZXJfbG9naW4iLCJCdXR0b24iLCJpbml0SW5mbyIsImluZm8iLCJfc2VsZiIsInJlbW90ZVVybCIsImh0dHBVcmwiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwiZXJyIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJjb2xvciIsInR5cGVfY29sb3IiLCJzdGFyIiwiaSIsIkxhYmVsIiwic3RyaW5nIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYmluZENsaWNrRXZlbnQiLCJidXR0b24iLCJpbmRleCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImNsaWNrRXZlbnRzIiwicHVzaCIsIm9uQ29uZmlyQnRuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJodHRwUG9zdCIsImRhdGEiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCOztBQUNBLElBQUlDLFdBQVcsR0FBRyxJQUFJRixVQUFKLEVBQWxCO0FBQ0EsSUFBSUcsTUFBTSxHQUFFLEVBQVo7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFF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QWxCLEdBQThCLFVBQTlCLENBTnFDLENBTU07O0FBQzNDSCxJQUFBQSxpQkFBaUIsQ0FBQ0ksT0FBbEIsR0FBNEIsYUFBNUIsQ0FQcUMsQ0FPSzs7QUFDMUNKLElBQUFBLGlCQUFpQixDQUFDSyxlQUFsQixHQUFvQ04sS0FBcEMsQ0FScUMsQ0FRTTs7QUFDM0NELElBQUFBLE1BQU0sQ0FBQ1EsV0FBUCxDQUFtQkMsSUFBbkIsQ0FBd0JQLGlCQUF4QjtBQUNILEdBdEVJO0FBeUVMO0FBQ0FRLEVBQUFBLFdBQVcsRUFBQyxxQkFBU0MsQ0FBVCxFQUFXakMsSUFBWCxFQUFnQjtBQUN4QmtDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbkMsSUFBWjs7QUFDQSxRQUFJaEIsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxRQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBRSxJQUFBQSxXQUFXLENBQUNrRCxRQUFaLENBQXFCLDBCQUFyQixFQUFpRDtBQUM3QyxZQUFNcEMsSUFBSSxDQUFDLElBQUQsQ0FEbUM7QUFFN0MsY0FBUUEsSUFBSSxDQUFDLE1BQUQsQ0FGaUM7QUFHN0MsZUFBUztBQUhvQyxLQUFqRCxFQUlHLFVBQVVxQyxJQUFWLEVBQWdCO0FBQ2Y7QUFDQWpELE1BQUFBLEVBQUUsQ0FBQ2tELFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QixFQUZlLENBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsS0FiRCxFQUp3QixDQW1CeEI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQXpHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBzamVhbVxyXG4gKiBARGF0ZTogMjAyMi0wNi0xNCAxNjowMTo0MVxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNlcnZlcl9waWN0dXJlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl90eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl9uYW1lOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl9zdGFyOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNwcml0ZV9zZXJ2ZXJfbG9naW46IGNjLkJ1dHRvblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBpbml0SW5mbyAoaW5mbykge1xyXG4gICAgICAgIC8vIOWIneWni+WMluivpemBk+WFt+ebuOWFs+S/oeaBr1xyXG4gICAgICAgIC8vIOWbvueJh1xyXG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiBcclxuICAgICAgICBpZihpbmZvWydwaWN0dXJlJ10pe1xyXG4gICAgICAgICAgICB2YXIgcmVtb3RlVXJsID0gaHR0cFJlcXVlc3QuaHR0cFVybChpbmZvWydwaWN0dXJlJ10pO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhodHRwUmVxdWVzdC5odHRwVXJsKGluZm9bJ3BpY3R1cmUnXSksIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkgeyAgIFxyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coX3NlbGYpXHJcbiAgICAgICAgICAgIC8vICAgICBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7IFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7ICBcclxuICAgICAgICAgICAgICAgIC8vIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSlcclxuICAgICAgICAgICAgICAgIF9zZWxmLnNlcnZlcl9waWN0dXJlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgLy8gaWYoaW5mb1sndHlwZSddPT0xKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n56m66ZeyJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCdncmVlbicpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDUwMCYmaW5mb1snbnVtJ10+PTEwMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+a1geeVhSc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDEwMDAmJmluZm9bJ251bSddPj01MDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmi6XmjKQnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRkQxMDAnKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n54iG5ruhJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkYwMDAwJyk7IFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgY29sb3IgPSBbJyNmZmZmZmYnLCdncmVlbicsJyNCREZGMDAnLCcjRkZEMTAwJywnI0ZGMDAwMCcsJyNmZmUwMDAnLF07XHJcbiAgICAgICAgdmFyIHR5cGVfY29sb3IgPSBjb2xvcltpbmZvWyd0eXBlJ11dO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgdmFyIHN0YXIgPScnOyAgICBcclxuICAgICAgICBmb3IoaT0wO2k8PWluZm9bJ3N0YXInXTtpKyspe1xyXG4gICAgICAgICAgICBzdGFyICs9J+KtkCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9IGluZm9bJ3R5cGVfbmFtZSddO1xyXG4gICAgICAgIHRoaXMuc2VydmVyX3N0YXIuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9IHN0YXI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKHR5cGVfY29sb3IpO1xyXG5cclxuICAgICAgICB0aGlzLnNlcnZlcl9uYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICAvL+WIm+W7uuS4gOS4quaWsGJ1dHRvbiDlubblsIblhbbmjILovb3liLDliJvlu7rnmoTnsr7ngbXkuItcclxuICAgICAgICB0aGlzLmJpbmRDbGlja0V2ZW50KCB0aGlzLnNwcml0ZV9zZXJ2ZXJfbG9naW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIGluZm8pO1xyXG4gICAgfSxcclxuICAgIC8vIOe7keWumuaMiemSruS6i+S7tlxyXG4gICAgYmluZENsaWNrRXZlbnQ6IGZ1bmN0aW9uIChidXR0b24sIGluZGV4KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgdmFyIGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgXHJcbiAgICAgICAgLy/ov5nkuKrmmK/ku6PnoIHmlofku7blkI1cclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIk1hcFRvb2xzXCI7ICAvLyBqc+iEmuacrOaWh+S7ti3nu5HlrppcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJvbkNvbmZpckJ0blwiOy8vIGpz5pa55rOV5ZCN56ewLS3nu5HlrppcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBpbmRleDsgLy8g5Zue6LCD5YaF5a65XHJcbiAgICAgICAgYnV0dG9uLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfSxcclxuIFxyXG5cclxuICAgIC8v5oyJ6ZKu54K55Ye75Zue6LCDXHJcbiAgICBvbkNvbmZpckJ0bjpmdW5jdGlvbihlLGluZm8pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpd29yZC9pbi13b3JkJywge1xyXG4gICAgICAgICAgICAnaWQnOiBpbmZvWydpZCddLFxyXG4gICAgICAgICAgICAnc3Rhcic6IGluZm9bJ3N0YXInXSxcclxuICAgICAgICAgICAgJ3Rva2VuJzogbnVsbFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8v6Lez6L2s5Yiw5LiW55WMXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gdmFyIHNlcnZlcl9jaG9lc19sYWJlbCAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3NlcnZlcl9jaG9lcy9zZXJ2ZXJfY2hvZXNfbGFiZWxcIik7XHJcbiAgICAgICAgICAgIC8vIHNlcnZlcl9jaG9lc19sYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyduYW1lJ107XHJcbiAgICAgICAgICAgIC8vIHZhciBzZXJ2ZXJfY2hvZXNfdHlwZSAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3NlcnZlcl9jaG9lcy9zZXJ2ZXJfY2hvZXNfdHlwZVwiKTtcclxuICAgICAgICAgICAgLy8gc2VydmVyX2Nob2VzX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1sndHlwZSddO1xyXG4gICAgICAgICAgICAvLyBzZXJ2ZXJfY2hvZXNfdHlwZS5jb2xvciA9IG5ldyBjYy5jb2xvcihpbmZvWydjb2xvciddKTsgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gdmFyIG1hc2sgPWNjLmZpbmQoXCJDYW52YXMvbWFza1wiKTtcclxuICAgICAgICAvLyBtYXNrLmFjdGl2ZT1mYWxzZVxyXG4gICAgICAgIC8vIHZhciBtYXNrID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbWFzaycpXHJcbiAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpO1xyXG4gICAgIFxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwcml0ZV9zZXJ2ZXJfbG9naW5cIikub24oJ2NsaWNrJyxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi54K55Ye75Yiw5oyJ6ZKuXCIpO1xyXG4gICAgICAgIC8vICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIC8vIH0sdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7IC8vIOebtOaOpeWOu+aOieaooeWei+iKgueCuVxyXG4gICAgfSxcclxuIFxyXG59KTtcclxuIl19