
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

    if (info['picUrl']) {
      cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
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
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-server', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZXJ2ZXJfdHlwZSIsIk5vZGUiLCJzZXJ2ZXJfbmFtZSIsInNwcml0ZV9zZXJ2ZXJfbG9naW4iLCJCdXR0b24iLCJpbml0SW5mbyIsImluZm8iLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiTGFiZWwiLCJzdHJpbmciLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiYmluZENsaWNrRXZlbnQiLCJidXR0b24iLCJpbmRleCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImNsaWNrRXZlbnRzIiwicHVzaCIsIm9uQ29uZmlyQnRuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwiaHR0cFBvc3QiLCJkYXRhIiwic2VydmVyX2Nob2VzX2xhYmVsIiwiZmluZCIsInNlcnZlcl9jaG9lc190eXBlIiwibWFzayIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBRVJDLElBQUFBLFdBQVcsRUFBRUosRUFBRSxDQUFDSyxJQUZSO0FBR1JDLElBQUFBLFdBQVcsRUFBRU4sRUFBRSxDQUFDSyxJQUhSO0FBSVJFLElBQUFBLG1CQUFtQixFQUFFUCxFQUFFLENBQUNRO0FBSmhCLEdBSFA7QUFVTDtBQUVBQyxFQUFBQSxRQVpLLG9CQVlLQyxJQVpMLEVBWVc7QUFDWjtB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QWlCLEdBQUc5QyxFQUFFLENBQUM2QyxJQUFILENBQVEsOENBQVIsQ0FBeEI7QUFDQUMsTUFBQUEsaUJBQWlCLENBQUM1QixZQUFsQixDQUErQmxCLEVBQUUsQ0FBQ29CLEtBQWxDLEVBQXlDQyxNQUF6QyxHQUFnRFgsSUFBSSxDQUFDLE1BQUQsQ0FBcEQ7QUFDQW9DLE1BQUFBLGlCQUFpQixDQUFDdkIsS0FBbEIsR0FBMEIsSUFBSXZCLEVBQUUsQ0FBQ3VCLEtBQVAsQ0FBYWIsSUFBSSxDQUFDLE9BQUQsQ0FBakIsQ0FBMUI7QUFDSCxLQVZEO0FBWUEsUUFBSXFDLElBQUksR0FBRS9DLEVBQUUsQ0FBQzZDLElBQUgsQ0FBUSxhQUFSLENBQVY7QUFHQUUsSUFBQUEsSUFBSSxDQUFDQyxNQUFMLEdBQVksS0FBWixDQW5Cd0IsQ0FxQnhCO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQTNGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBzamVhbVxyXG4gKiBARGF0ZTogMjAyMi0wNi0xNCAxNjowMTo0MVxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICBcclxuICAgICAgICBzZXJ2ZXJfdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfbmFtZTogY2MuTm9kZSxcclxuICAgICAgICBzcHJpdGVfc2VydmVyX2xvZ2luOiBjYy5CdXR0b25cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgaW5pdEluZm8gKGluZm8pIHtcclxuICAgICAgICAvLyDliJ3lp4vljJbor6XpgZPlhbfnm7jlhbPkv6Hmga9cclxuXHJcbiAgICAgICAgLy8g5Zu+54mHXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGluZm9bJ3BpY1VybCddKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoaW5mb1sncGljVXJsJ10sIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgLy8gaWYoaW5mb1snbnVtJ108MTAwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n56m66ZeyJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCdncmVlbicpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDUwMCYmaW5mb1snbnVtJ10+PTEwMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+a1geeVhSc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDEwMDAmJmluZm9bJ251bSddPj01MDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmi6XmjKQnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRkQxMDAnKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n54iG5ruhJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkYwMDAwJyk7IFxyXG4gICAgICAgIC8vIH0gICAgXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKGluZm9bJ2NvbG9yJ10pO1xyXG5cclxuICAgICAgICB0aGlzLnNlcnZlcl9uYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSBpbmZvWydpZCddKyfljLogIC0gICcraW5mb1snbmFtZSddO1xyXG4gICAgICAgIC8v5Yib5bu65LiA5Liq5pawYnV0dG9uIOW5tuWwhuWFtuaMgui9veWIsOWIm+W7uueahOeyvueBteS4i1xyXG4gICAgICAgIHRoaXMuYmluZENsaWNrRXZlbnQoIHRoaXMuc3ByaXRlX3NlcnZlcl9sb2dpbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSwgaW5mbyk7XHJcbiAgICB9LFxyXG4gICAgLy8g57uR5a6a5oyJ6ZKu5LqL5Lu2XHJcbiAgICBiaW5kQ2xpY2tFdmVudDogZnVuY3Rpb24gKGJ1dHRvbiwgaW5kZXgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICB2YXIgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlOyBcclxuICAgICAgICAvL+i/meS4quaYr+S7o+eggeaWh+S7tuWQjVxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiVG9vbHNcIjsgIC8vIGpz6ISa5pys5paH5Lu2Lee7keWumlxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm9uQ29uZmlyQnRuXCI7Ly8ganPmlrnms5XlkI3np7AtLee7keWumlxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGluZGV4OyAvLyDlm57osIPlhoXlrrlcclxuICAgICAgICBidXR0b24uY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9LFxyXG4gXHJcblxyXG4gICAgLy/mjInpkq7ngrnlh7vlm57osINcclxuICAgIG9uQ29uZmlyQnRuOmZ1bmN0aW9uKGUsaW5mbyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3VzZXItc2VydmVyJywge1xyXG4gICAgICAgICAgICAnaWQnOiBpbmZvWydpZCddLFxyXG4gICAgICAgICAgICAndG9rZW4nOiBudWxsXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHZhciBzZXJ2ZXJfY2hvZXNfbGFiZWwgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX2xhYmVsXCIpO1xyXG4gICAgICAgICAgICBzZXJ2ZXJfY2hvZXNfbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1snbmFtZSddO1xyXG4gICAgICAgICAgICB2YXIgc2VydmVyX2Nob2VzX3R5cGUgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX3R5cGVcIik7XHJcbiAgICAgICAgICAgIHNlcnZlcl9jaG9lc190eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAgICAgc2VydmVyX2Nob2VzX3R5cGUuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7IFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHZhciBtYXNrID1jYy5maW5kKFwiQ2FudmFzL21hc2tcIik7XHJcbiAgICAgIFxyXG5cclxuICAgICAgICBtYXNrLmFjdGl2ZT1mYWxzZVxyXG4gICAgICBcclxuICAgICAgICAvLyB2YXIgbWFzayA9ICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21hc2snKVxyXG4gICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pKTtcclxuICAgICBcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJpdGVfc2VydmVyX2xvZ2luXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIueCueWHu+WIsOaMiemSrlwiKTtcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAvLyB9LHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlOyAvLyDnm7TmjqXljrvmjonmqKHlnovoioLngrlcclxuICAgIH0sXHJcbiBcclxufSk7XHJcbiJdfQ==