
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
cc._RF.push(module, '4b399vzZ3RO+bGBH1k2sE4C', 'mapTools');
// Script/scence/mapTools.js

"use strict";

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
    var info = info_list['biology_list'][0]; // 初始化该道具相关信息
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

    this.bindClickEvent(this.sprite_server_login.getComponent(cc.Button), info_list.map_int);
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
  onConfirBtn: function onConfirBtn(e, map_int) {
    //session设置战斗请求id
    cc.sys.localStorage.setItem('figthing_map_int', JSON.stringify(map_int));
    httpRequest.playGame('战斗场景', 1); // console.log(info)
    // var HttpHelper = require("../http"); 
    // var httpRequest = new HttpHelper();
    // httpRequest.httpPost('/app/app-apiword/in-word', {
    //     'id': info['id'],
    //     'star': info['star'],
    //     'token': null
    // }, function (data) {
    //     //跳转到世界
    //     // cc.director.loadScene('战斗场景');
    //     cc.sys.localStorage.setItem('figthing', JSON.stringify(info)); 
    //     // console.log(data);
    //     // var server_choes_label  =cc.find("Canvas/server/server_choes/server_choes_label");
    //     // server_choes_label.getComponent(cc.Label).string=info['name'];
    //     // var server_choes_type  =cc.find("Canvas/server/server_choes/server_choes_type");
    //     // server_choes_type.getComponent(cc.Label).string=info['type'];
    //     // server_choes_type.color = new cc.color(info['color']); 
    // })
    // var mask =cc.find("Canvas/mask");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXG1hcFRvb2xzLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNlcnZlcl9waWN0dXJlIiwiTm9kZSIsInNlcnZlcl90eXBlIiwic2VydmVyX25hbWUiLCJzZXJ2ZXJfc3RhciIsInNwcml0ZV9zZXJ2ZXJfbG9naW4iLCJCdXR0b24iLCJpbml0SW5mbyIsImluZm9fbGlzdCIsImluZm8iLCJfc2VsZiIsInJlbW90ZVVybCIsImh0dHBVcmwiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwiZXJyIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJjb2xvciIsInR5cGVfY29sb3IiLCJzdGFyIiwiaSIsIkxhYmVsIiwic3RyaW5nIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYmluZENsaWNrRXZlbnQiLCJtYXBfaW50IiwiYnV0dG9uIiwiaW5kZXgiLCJjbGlja0V2ZW50SGFuZGxlciIsIkV2ZW50SGFuZGxlciIsInRhcmdldCIsImNvbXBvbmVudCIsImhhbmRsZXIiLCJjdXN0b21FdmVudERhdGEiLCJjbGlja0V2ZW50cyIsInB1c2giLCJvbkNvbmZpckJ0biIsImUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBsYXlHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHLElBQUlGLFVBQUosRUFBbEI7QUFDQSxJQUFJRyxNQUFNLEdBQUUsRUFBWjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdM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c0NvbnRlbnQiOlsidmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiLi4vaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNlcnZlcl9waWN0dXJlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl90eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl9uYW1lOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl9zdGFyOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNwcml0ZV9zZXJ2ZXJfbG9naW46IGNjLkJ1dHRvblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBpbml0SW5mbyAoaW5mb19saXN0KSB7XHJcbiAgICAgICAgdmFyIGluZm89aW5mb19saXN0WydiaW9sb2d5X2xpc3QnXVswXTtcclxuICAgICAgICAvLyDliJ3lp4vljJbor6XpgZPlhbfnm7jlhbPkv6Hmga9cclxuICAgICAgICAvLyDlm77niYdcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gXHJcbiAgICAgICAgaWYoaW5mb1sncGljdHVyZSddKXtcclxuICAgICAgICAgICAgdmFyIHJlbW90ZVVybCA9IGh0dHBSZXF1ZXN0Lmh0dHBVcmwoaW5mb1sncGljdHVyZSddKTtcclxuICAgICAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoaHR0cFJlcXVlc3QuaHR0cFVybChpbmZvWydwaWN0dXJlJ10pLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHsgICBcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKF9zZWxmKVxyXG4gICAgICAgICAgICAvLyAgICAgX3NlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lOyBcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICAgICAgICAvLyBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICBfc2VsZi5zZXJ2ZXJfcGljdHVyZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1sndHlwZSddO1xyXG4gICAgICAgIC8vIGlmKGluZm9bJ3R5cGUnXT09MSl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+epuumXsic7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignZ3JlZW4nKTtcclxuICAgICAgICAvLyB9ZWxzZSBpZihpbmZvWydudW0nXTw1MDAmJmluZm9bJ251bSddPj0xMDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmtYHnlYUnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNCREZGMDAnKTtcclxuICAgICAgICAvLyB9ZWxzZSBpZihpbmZvWydudW0nXTwxMDAwJiZpbmZvWydudW0nXT49NTAwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n5oul5oykJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkZEMTAwJyk7XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+eIhua7oSc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0ZGMDAwMCcpOyBcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGNvbG9yID0gWycjZmZmZmZmJywnZ3JlZW4nLCcjQkRGRjAwJywnI0ZGRDEwMCcsJyNGRjAwMDAnLCcjZmZlMDAwJyxdO1xyXG4gICAgICAgIHZhciB0eXBlX2NvbG9yID0gY29sb3JbaW5mb1sneWlYaW5nJ11dO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgdmFyIHN0YXIgPScnOyAgICBcclxuICAgICAgICBmb3IoaT0wO2k8PWluZm9bJ3lpWGluZyddO2krKyl7XHJcbiAgICAgICAgICAgIHN0YXIgKz0n4q2QJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfc3Rhci5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0gc3RhcjtcclxuXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0nTHYuJytpbmZvWydncmFkZSddKycoJytpbmZvWydzdGF0ZV9uYW1lJ11bJ25hbWUnXSsnKSc7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKHR5cGVfY29sb3IpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfbmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyduYW1lJ107XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfbmFtZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKHR5cGVfY29sb3IpO1xyXG4gICAgICAgIC8v5Yib5bu65LiA5Liq5pawYnV0dG9uIOW5tuWwhuWFtuaMgui9veWIsOWIm+W7uueahOeyvueBteS4i1xyXG4gICAgICAgIHRoaXMuYmluZENsaWNrRXZlbnQoIHRoaXMuc3ByaXRlX3NlcnZlcl9sb2dpbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSxpbmZvX2xpc3QubWFwX2ludCk7XHJcbiAgICB9LFxyXG4gICAgLy8g57uR5a6a5oyJ6ZKu5LqL5Lu2XHJcbiAgICBiaW5kQ2xpY2tFdmVudDogZnVuY3Rpb24gKGJ1dHRvbiwgaW5kZXgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICB2YXIgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlOyBcclxuICAgICAgICAvL+i/meS4quaYr+S7o+eggeaWh+S7tuWQjVxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwibWFwVG9vbHNcIjsgIC8vIGpz6ISa5pys5paH5Lu2Lee7keWumlxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm9uQ29uZmlyQnRuXCI7Ly8ganPmlrnms5XlkI3np7AtLee7keWumlxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGluZGV4OyAvLyDlm57osIPlhoXlrrlcclxuICAgICAgICBidXR0b24uY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9LFxyXG4gXHJcblxyXG4gICAgLy/mjInpkq7ngrnlh7vlm57osINcclxuICAgIG9uQ29uZmlyQnRuOmZ1bmN0aW9uKGUsbWFwX2ludCl7XHJcbiAgICAgICAgLy9zZXNzaW9u6K6+572u5oiY5paX6K+35rGCaWRcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpZ3RoaW5nX21hcF9pbnQnLCBKU09OLnN0cmluZ2lmeShtYXBfaW50KSk7IFxyXG4gICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCfmiJjmlpflnLrmma8nLDEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgLy8gdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiLi4vaHR0cFwiKTsgXHJcbiAgICAgICAgLy8gdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICAvLyBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpd29yZC9pbi13b3JkJywge1xyXG4gICAgICAgIC8vICAgICAnaWQnOiBpbmZvWydpZCddLFxyXG4gICAgICAgIC8vICAgICAnc3Rhcic6IGluZm9bJ3N0YXInXSxcclxuICAgICAgICAvLyAgICAgJ3Rva2VuJzogbnVsbFxyXG4gICAgICAgIC8vIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy8gICAgIC8v6Lez6L2s5Yiw5LiW55WMXHJcbiAgICAgICAgLy8gICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgn5oiY5paX5Zy65pmvJyk7XHJcbiAgICAgICAgLy8gICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlndGhpbmcnLCBKU09OLnN0cmluZ2lmeShpbmZvKSk7IFxyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAvLyAgICAgLy8gdmFyIHNlcnZlcl9jaG9lc19sYWJlbCAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3NlcnZlcl9jaG9lcy9zZXJ2ZXJfY2hvZXNfbGFiZWxcIik7XHJcbiAgICAgICAgLy8gICAgIC8vIHNlcnZlcl9jaG9lc19sYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyduYW1lJ107XHJcbiAgICAgICAgLy8gICAgIC8vIHZhciBzZXJ2ZXJfY2hvZXNfdHlwZSAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3NlcnZlcl9jaG9lcy9zZXJ2ZXJfY2hvZXNfdHlwZVwiKTtcclxuICAgICAgICAvLyAgICAgLy8gc2VydmVyX2Nob2VzX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1sndHlwZSddO1xyXG4gICAgICAgIC8vICAgICAvLyBzZXJ2ZXJfY2hvZXNfdHlwZS5jb2xvciA9IG5ldyBjYy5jb2xvcihpbmZvWydjb2xvciddKTsgXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgLy8gdmFyIG1hc2sgPWNjLmZpbmQoXCJDYW52YXMvbWFza1wiKTtcclxuICAgICAgICAvLyBtYXNrLmFjdGl2ZT1mYWxzZVxyXG4gICAgICAgIC8vIHZhciBtYXNrID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbWFzaycpXHJcbiAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpO1xyXG4gICAgIFxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwcml0ZV9zZXJ2ZXJfbG9naW5cIikub24oJ2NsaWNrJyxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi54K55Ye75Yiw5oyJ6ZKuXCIpO1xyXG4gICAgICAgIC8vICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIC8vIH0sdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7IC8vIOebtOaOpeWOu+aOieaooeWei+iKgueCuVxyXG4gICAgfSxcclxuIFxyXG59KTtcclxuIl19