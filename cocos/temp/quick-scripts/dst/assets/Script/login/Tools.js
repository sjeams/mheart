
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


    if (info['num'] < 100) {
      this.server_type.getComponent(cc.Label).string = '空闲';
      this.node.getChildByName('server_type').color = new cc.color('green');
    } else if (info['num'] < 500 && info['num'] >= 100) {
      this.server_type.getComponent(cc.Label).string = '流畅';
      this.node.getChildByName('server_type').color = new cc.color('#BDFF00');
    } else if (info['num'] < 1000 && info['num'] >= 500) {
      this.server_type.getComponent(cc.Label).string = '拥挤';
      this.node.getChildByName('server_type').color = new cc.color('#FFD100');
    } else {
      this.server_type.getComponent(cc.Label).string = '爆满';
      this.node.getChildByName('server_type').color = new cc.color('#FF0000');
    }

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
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-server', {
      'id': str
    }, function (data) {
      //     console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZXJ2ZXJfdHlwZSIsIk5vZGUiLCJzZXJ2ZXJfbmFtZSIsInNwcml0ZV9zZXJ2ZXJfbG9naW4iLCJCdXR0b24iLCJpbml0SW5mbyIsImluZm8iLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiTGFiZWwiLCJzdHJpbmciLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiYmluZENsaWNrRXZlbnQiLCJidXR0b24iLCJpbmRleCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImNsaWNrRXZlbnRzIiwicHVzaCIsIm9uQ29uZmlyQnRuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJodHRwUmVxdWVzdCIsImh0dHBQb3N0Iiwic3RyIiwiZGF0YSIsInNlcnZlcl9jaG9lc19sYWJlbCIsImZpbmQiLCJzZXJ2ZXJfY2hvZXNfdHlwZSIsIm1hc2siLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxXQUFXLEVBQUVKLEVBQUUsQ0FBQ0ssSUFGUjtBQUdSQyxJQUFBQSxXQUFXLEVBQUVOLEVBQUUsQ0FBQ0ssSUFIUjtBQUlSRSxJQUFBQSxtQkFBbUIsRUFBRVAsRUFBRSxDQUFDUTtBQUpoQixHQUhQO0FBVUw7QUFFQUMsRUFBQUEsUUFaSyxvQkFZS0MsSUFaTCxFQVlXO0FBQ1o7QUFFQTtBQUNBLFFBQUlDLElB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFuRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogc2plYW1cclxuICogQERhdGU6IDIwMjItMDYtMTQgMTY6MDE6NDFcclxuICogQERlc2NyaXB0aW9uOiBcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgXHJcbiAgICAgICAgc2VydmVyX3R5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgc2VydmVyX25hbWU6IGNjLk5vZGUsXHJcbiAgICAgICAgc3ByaXRlX3NlcnZlcl9sb2dpbjogY2MuQnV0dG9uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIGluaXRJbmZvIChpbmZvKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6K+l6YGT5YW355u45YWz5L+h5oGvXHJcblxyXG4gICAgICAgIC8vIOWbvueJh1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICBpZihpbmZvWydwaWNVcmwnXSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGluZm9bJ3BpY1VybCddLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgIC8vIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1sndHlwZSddO1xyXG4gICAgICAgIGlmKGluZm9bJ251bSddPDEwMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+epuumXsic7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignZ3JlZW4nKTtcclxuICAgICAgICB9ZWxzZSBpZihpbmZvWydudW0nXTw1MDAmJmluZm9bJ251bSddPj0xMDApe1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmtYHnlYUnO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNCREZGMDAnKTtcclxuICAgICAgICB9ZWxzZSBpZihpbmZvWydudW0nXTwxMDAwJiZpbmZvWydudW0nXT49NTAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n5oul5oykJztcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkZEMTAwJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+eIhua7oSc7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0ZGMDAwMCcpOyBcclxuICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICB0aGlzLnNlcnZlcl9uYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSBpbmZvWydpZCddKyfljLogIC0gICcraW5mb1snbmFtZSddO1xyXG4gICAgICAgIC8v5Yib5bu65LiA5Liq5pawYnV0dG9uIOW5tuWwhuWFtuaMgui9veWIsOWIm+W7uueahOeyvueBteS4i1xyXG4gICAgICAgIHRoaXMuYmluZENsaWNrRXZlbnQoIHRoaXMuc3ByaXRlX3NlcnZlcl9sb2dpbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSwgaW5mbyk7XHJcbiAgICB9LFxyXG4gICAgLy8g57uR5a6a5oyJ6ZKu5LqL5Lu2XHJcbiAgICBiaW5kQ2xpY2tFdmVudDogZnVuY3Rpb24gKGJ1dHRvbiwgaW5kZXgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICB2YXIgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlOyBcclxuICAgICAgICAvL+i/meS4quaYr+S7o+eggeaWh+S7tuWQjVxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiVG9vbHNcIjsgIC8vIGpz6ISa5pys5paH5Lu2Lee7keWumlxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm9uQ29uZmlyQnRuXCI7Ly8ganPmlrnms5XlkI3np7AtLee7keWumlxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGluZGV4OyAvLyDlm57osIPlhoXlrrlcclxuICAgICAgICBidXR0b24uY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9LFxyXG4gXHJcblxyXG4gICAgLy/mjInpkq7ngrnlh7vlm57osINcclxuICAgIG9uQ29uZmlyQnRuOmZ1bmN0aW9uKGUsaW5mbyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLXNlcnZlcicsIHtcclxuICAgICAgICAgICAgJ2lkJzogc3RyXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgc2VydmVyX2Nob2VzX2xhYmVsICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc19sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VydmVyX2Nob2VzX2xhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICAgICAgdmFyIHNlcnZlcl9jaG9lc190eXBlICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc190eXBlXCIpO1xyXG4gICAgICAgICAgICBzZXJ2ZXJfY2hvZXNfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgICAgIHNlcnZlcl9jaG9lc190eXBlLmNvbG9yID0gbmV3IGNjLmNvbG9yKGluZm9bJ2NvbG9yJ10pOyBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHZhciBtYXNrID1jYy5maW5kKFwiQ2FudmFzL21hc2tcIik7XHJcbiAgICAgICAgbWFzay5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAvLyB2YXIgbWFzayA9ICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21hc2snKVxyXG4gICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pKTtcclxuICAgICBcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJpdGVfc2VydmVyX2xvZ2luXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIueCueWHu+WIsOaMiemSrlwiKTtcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAvLyB9LHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlOyAvLyDnm7TmjqXljrvmjonmqKHlnovoioLngrlcclxuICAgIH0sXHJcbiBcclxufSk7XHJcbiJdfQ==