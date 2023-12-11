
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
    cc.sys.localStorage.setItem('figthing_map_int', JSON.stringify(map_int));
    cc.director.loadScene('战斗场景'); // console.log(info)
    // var HttpHelper = require("http"); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXG1hcFRvb2xzLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNlcnZlcl9waWN0dXJlIiwiTm9kZSIsInNlcnZlcl90eXBlIiwic2VydmVyX25hbWUiLCJzZXJ2ZXJfc3RhciIsInNwcml0ZV9zZXJ2ZXJfbG9naW4iLCJCdXR0b24iLCJpbml0SW5mbyIsImluZm9fbGlzdCIsImluZm8iLCJfc2VsZiIsInJlbW90ZVVybCIsImh0dHBVcmwiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwiZXJyIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJjb2xvciIsInR5cGVfY29sb3IiLCJzdGFyIiwiaSIsIkxhYmVsIiwic3RyaW5nIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYmluZENsaWNrRXZlbnQiLCJtYXBfaW50IiwiYnV0dG9uIiwiaW5kZXgiLCJjbGlja0V2ZW50SGFuZGxlciIsIkV2ZW50SGFuZGxlciIsInRhcmdldCIsImNvbXBvbmVudCIsImhhbmRsZXIiLCJjdXN0b21FdmVudERhdGEiLCJjbGlja0V2ZW50cyIsInB1c2giLCJvbkNvbmZpckJ0biIsImUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHLElBQUlGLFVBQUosRUFBbEI7QUFDQSxJQUFJRyxNQUFNLEdBQUUsRUFBWjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNE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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogc2plYW1cclxuICogQERhdGU6IDIwMjItMDYtMTQgMTY6MDE6NDFcclxuICogQERlc2NyaXB0aW9uOiBcclxuICovXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG52YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG52YXIgcGFyYW1zID1bXTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzZXJ2ZXJfcGljdHVyZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfbmFtZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfc3RhcjogY2MuTm9kZSxcclxuICAgICAgICBzcHJpdGVfc2VydmVyX2xvZ2luOiBjYy5CdXR0b25cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgaW5pdEluZm8gKGluZm9fbGlzdCkge1xyXG4gICAgICAgIHZhciBpbmZvPWluZm9fbGlzdFsnYmlvbG9neV9saXN0J11bMF07XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6K+l6YGT5YW355u45YWz5L+h5oGvXHJcbiAgICAgICAgLy8g5Zu+54mHXHJcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuIFxyXG4gICAgICAgIGlmKGluZm9bJ3BpY3R1cmUnXSl7XHJcbiAgICAgICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsKGluZm9bJ3BpY3R1cmUnXSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKGh0dHBSZXF1ZXN0Lmh0dHBVcmwoaW5mb1sncGljdHVyZSddKSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7ICAgXHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhfc2VsZilcclxuICAgICAgICAgICAgLy8gICAgIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsIH0sIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHsgIFxyXG4gICAgICAgICAgICAgICAgLy8gX3NlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgX3NlbGYuc2VydmVyX3BpY3R1cmUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAvLyBpZihpbmZvWyd0eXBlJ109PTEpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfnqbrpl7InO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJ2dyZWVuJyk7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYoaW5mb1snbnVtJ108NTAwJiZpbmZvWydudW0nXT49MTAwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n5rWB55WFJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYoaW5mb1snbnVtJ108MTAwMCYmaW5mb1snbnVtJ10+PTUwMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+aLpeaMpCc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0ZGRDEwMCcpO1xyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfniIbmu6EnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRjAwMDAnKTsgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjb2xvciA9IFsnI2ZmZmZmZicsJ2dyZWVuJywnI0JERkYwMCcsJyNGRkQxMDAnLCcjRkYwMDAwJywnI2ZmZTAwMCcsXTtcclxuICAgICAgICB2YXIgdHlwZV9jb2xvciA9IGNvbG9yW2luZm9bJ3lpWGluZyddXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICAgIHZhciBzdGFyID0nJzsgICAgXHJcbiAgICAgICAgZm9yKGk9MDtpPD1pbmZvWyd5aVhpbmcnXTtpKyspe1xyXG4gICAgICAgICAgICBzdGFyICs9J+KtkCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VydmVyX3N0YXIuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9IHN0YXI7XHJcblxyXG4gICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J0x2LicraW5mb1snZ3JhZGUnXSsnKCcraW5mb1snc3RhdGVfbmFtZSddWyduYW1lJ10rJyknO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcih0eXBlX2NvbG9yKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc2VydmVyX25hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1snbmFtZSddO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX25hbWUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcih0eXBlX2NvbG9yKTtcclxuICAgICAgICAvL+WIm+W7uuS4gOS4quaWsGJ1dHRvbiDlubblsIblhbbmjILovb3liLDliJvlu7rnmoTnsr7ngbXkuItcclxuICAgICAgICB0aGlzLmJpbmRDbGlja0V2ZW50KCB0aGlzLnNwcml0ZV9zZXJ2ZXJfbG9naW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIGluZm9fbGlzdC5tYXBfaW50KTtcclxuICAgIH0sXHJcbiAgICAvLyDnu5HlrprmjInpkq7kuovku7ZcclxuICAgIGJpbmRDbGlja0V2ZW50OiBmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IFxyXG4gICAgICAgIC8v6L+Z5Liq5piv5Luj56CB5paH5Lu25ZCNXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJtYXBUb29sc1wiOyAgLy8ganPohJrmnKzmlofku7Yt57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25Db25maXJCdG5cIjsvLyBqc+aWueazleWQjeensC0t57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaW5kZXg7IC8vIOWbnuiwg+WGheWuuVxyXG4gICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbiBcclxuXHJcbiAgICAvL+aMiemSrueCueWHu+Wbnuiwg1xyXG4gICAgb25Db25maXJCdG46ZnVuY3Rpb24oZSxtYXBfaW50KXtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpZ3RoaW5nX21hcF9pbnQnLCBKU09OLnN0cmluZ2lmeShtYXBfaW50KSk7IFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgn5oiY5paX5Zy65pmvJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5mbylcclxuICAgICAgICAvLyB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICAvLyB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIC8vIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL2luLXdvcmQnLCB7XHJcbiAgICAgICAgLy8gICAgICdpZCc6IGluZm9bJ2lkJ10sXHJcbiAgICAgICAgLy8gICAgICdzdGFyJzogaW5mb1snc3RhciddLFxyXG4gICAgICAgIC8vICAgICAndG9rZW4nOiBudWxsXHJcbiAgICAgICAgLy8gfSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyAgICAgLy/ot7PovazliLDkuJbnlYxcclxuICAgICAgICAvLyAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKCfmiJjmlpflnLrmma8nKTtcclxuICAgICAgICAvLyAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWd0aGluZycsIEpTT04uc3RyaW5naWZ5KGluZm8pKTsgXHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIC8vICAgICAvLyB2YXIgc2VydmVyX2Nob2VzX2xhYmVsICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc19sYWJlbFwiKTtcclxuICAgICAgICAvLyAgICAgLy8gc2VydmVyX2Nob2VzX2xhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICAvLyAgICAgLy8gdmFyIHNlcnZlcl9jaG9lc190eXBlICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc190eXBlXCIpO1xyXG4gICAgICAgIC8vICAgICAvLyBzZXJ2ZXJfY2hvZXNfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgLy8gICAgIC8vIHNlcnZlcl9jaG9lc190eXBlLmNvbG9yID0gbmV3IGNjLmNvbG9yKGluZm9bJ2NvbG9yJ10pOyBcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAvLyB2YXIgbWFzayA9Y2MuZmluZChcIkNhbnZhcy9tYXNrXCIpO1xyXG4gICAgICAgIC8vIG1hc2suYWN0aXZlPWZhbHNlXHJcbiAgICAgICAgLy8gdmFyIG1hc2sgPSAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdtYXNrJylcclxuICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSk7XHJcbiAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3ByaXRlX3NlcnZlcl9sb2dpblwiKS5vbignY2xpY2snLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLngrnlh7vliLDmjInpkq5cIik7XHJcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgLy8gfSx0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTsgLy8g55u05o6l5Y675o6J5qih5Z6L6IqC54K5XHJcbiAgICB9LFxyXG4gXHJcbn0pO1xyXG4iXX0=