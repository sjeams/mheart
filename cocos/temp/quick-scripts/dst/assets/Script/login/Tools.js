
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c99erZc29ESIVQKwP6Lsma', 'Tools');
// Script/login/Tools.js

"use strict";

/*
 * @Author: sjeam
 * @Date: 2022-06-14 16:01:41
 * @Description: 
 */
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
    var self = this;

    if (info['picture']) {
      cc.loader.loadRes(info['picture'], cc.SpriteFrame, function (err, spriteFrame) {
        self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
    httpRequest.httpPostLogin('/app/api-server/user-server', {
      'id': info['id']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZXJ2ZXJfdHlwZSIsIk5vZGUiLCJzZXJ2ZXJfbmFtZSIsInNwcml0ZV9zZXJ2ZXJfbG9naW4iLCJCdXR0b24iLCJpbml0SW5mbyIsImluZm8iLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiTGFiZWwiLCJzdHJpbmciLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiYmluZENsaWNrRXZlbnQiLCJidXR0b24iLCJpbmRleCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImNsaWNrRXZlbnRzIiwicHVzaCIsIm9uQ29uZmlyQnRuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwiaHR0cFBvc3RMb2dpbiIsImRhdGEiLCJzZXJ2ZXJfY2hvZXNfbGFiZWwiLCJmaW5kIiwic2VydmVyX2Nob2VzX3R5cGUiLCJtYXNrIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsV0FBVyxFQUFFSixFQUFFLENBQUNLLElBRlI7QUFHUkMsSUFBQUEsV0FBVyxFQUFFTixFQUFFLENBQUNLLElBSFI7QUFJUkUsSUFBQUEsbUJBQW1CLEVBQUVQLEVBQUUsQ0FBQ1E7QUFKaEIsR0FIUDtBQVVMO0FBRUFDLEVBQUFBLFFBWkssb0JBWUtDLElBWkwsRUFZVztB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QUFFLENBQUM2QyxJQUFILENBQVEsOENBQVIsQ0FBeEI7QUFDQUMsTUFBQUEsaUJBQWlCLENBQUM1QixZQUFsQixDQUErQmxCLEVBQUUsQ0FBQ29CLEtBQWxDLEVBQXlDQyxNQUF6QyxHQUFnRFgsSUFBSSxDQUFDLE1BQUQsQ0FBcEQ7QUFDQW9DLE1BQUFBLGlCQUFpQixDQUFDdkIsS0FBbEIsR0FBMEIsSUFBSXZCLEVBQUUsQ0FBQ3VCLEtBQVAsQ0FBYWIsSUFBSSxDQUFDLE9BQUQsQ0FBakIsQ0FBMUI7QUFDSCxLQVREO0FBV0EsUUFBSXFDLElBQUksR0FBRS9DLEVBQUUsQ0FBQzZDLElBQUgsQ0FBUSxhQUFSLENBQVY7QUFHQUUsSUFBQUEsSUFBSSxDQUFDQyxNQUFMLEdBQVksS0FBWixDQWxCd0IsQ0FvQnhCO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQTFGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBzamVhbVxyXG4gKiBARGF0ZTogMjAyMi0wNi0xNCAxNjowMTo0MVxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICBcclxuICAgICAgICBzZXJ2ZXJfdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfbmFtZTogY2MuTm9kZSxcclxuICAgICAgICBzcHJpdGVfc2VydmVyX2xvZ2luOiBjYy5CdXR0b25cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgaW5pdEluZm8gKGluZm8pIHtcclxuICAgICAgICAvLyDliJ3lp4vljJbor6XpgZPlhbfnm7jlhbPkv6Hmga9cclxuXHJcbiAgICAgICAgLy8g5Zu+54mHXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGluZm9bJ3BpY3R1cmUnXSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGluZm9bJ3BpY3R1cmUnXSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgICAgICAvLyB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAvLyBpZihpbmZvWydudW0nXTwxMDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfnqbrpl7InO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJ2dyZWVuJyk7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYoaW5mb1snbnVtJ108NTAwJiZpbmZvWydudW0nXT49MTAwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n5rWB55WFJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYoaW5mb1snbnVtJ108MTAwMCYmaW5mb1snbnVtJ10+PTUwMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+aLpeaMpCc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0ZGRDEwMCcpO1xyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfniIbmu6EnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRjAwMDAnKTsgXHJcbiAgICAgICAgLy8gfSAgICBcclxuICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VydmVyX25hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9IGluZm9bJ2lkJ10rJ+WMuiAgLSAgJytpbmZvWyduYW1lJ107XHJcbiAgICAgICAgLy/liJvlu7rkuIDkuKrmlrBidXR0b24g5bm25bCG5YW25oyC6L295Yiw5Yib5bu655qE57K+54G15LiLXHJcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudCggdGhpcy5zcHJpdGVfc2VydmVyX2xvZ2luLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBpbmZvKTtcclxuICAgIH0sXHJcbiAgICAvLyDnu5HlrprmjInpkq7kuovku7ZcclxuICAgIGJpbmRDbGlja0V2ZW50OiBmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IFxyXG4gICAgICAgIC8v6L+Z5Liq5piv5Luj56CB5paH5Lu25ZCNXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJUb29sc1wiOyAgLy8ganPohJrmnKzmlofku7Yt57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25Db25maXJCdG5cIjsvLyBqc+aWueazleWQjeensC0t57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaW5kZXg7IC8vIOWbnuiwg+WGheWuuVxyXG4gICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbiBcclxuXHJcbiAgICAvL+aMiemSrueCueWHu+Wbnuiwg1xyXG4gICAgb25Db25maXJCdG46ZnVuY3Rpb24oZSxpbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3RMb2dpbignL2FwcC9hcGktc2VydmVyL3VzZXItc2VydmVyJywge1xyXG4gICAgICAgICAgICAnaWQnOiBpbmZvWydpZCddLFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgc2VydmVyX2Nob2VzX2xhYmVsICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc19sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VydmVyX2Nob2VzX2xhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICAgICAgdmFyIHNlcnZlcl9jaG9lc190eXBlICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc190eXBlXCIpO1xyXG4gICAgICAgICAgICBzZXJ2ZXJfY2hvZXNfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgICAgIHNlcnZlcl9jaG9lc190eXBlLmNvbG9yID0gbmV3IGNjLmNvbG9yKGluZm9bJ2NvbG9yJ10pOyBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgbWFzayA9Y2MuZmluZChcIkNhbnZhcy9tYXNrXCIpO1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgbWFzay5hY3RpdmU9ZmFsc2VcclxuICAgICAgXHJcbiAgICAgICAgLy8gdmFyIG1hc2sgPSAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdtYXNrJylcclxuICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSk7XHJcbiAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3ByaXRlX3NlcnZlcl9sb2dpblwiKS5vbignY2xpY2snLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLngrnlh7vliLDmjInpkq5cIik7XHJcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgLy8gfSx0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTsgLy8g55u05o6l5Y675o6J5qih5Z6L6IqC54K5XHJcbiAgICB9LFxyXG4gXHJcbn0pO1xyXG4iXX0=