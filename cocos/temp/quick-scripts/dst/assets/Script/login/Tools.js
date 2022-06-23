
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
      this.server_type.getComponent(cc.Label).string = info['type'];
      this.node.getChildByName('server_type').color = new cc.color(info['color']);
    } else if (info['num'] < 500 && info['num'] >= 100) {
      this.server_type.getComponent(cc.Label).string = info['type'];
      this.node.getChildByName('server_type').color = new cc.color(info['color']);
    } else if (info['num'] < 1000 && info['num'] >= 500) {
      this.server_type.getComponent(cc.Label).string = info['type'];
      this.node.getChildByName('server_type').color = new cc.color(info['color']);
    } else {
      this.server_type.getComponent(cc.Label).string = info['type'];
      this.node.getChildByName('server_type').color = new cc.color(info['color']);
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

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-server', {
      'id': info['id'],
      'token': null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZXJ2ZXJfdHlwZSIsIk5vZGUiLCJzZXJ2ZXJfbmFtZSIsInNwcml0ZV9zZXJ2ZXJfbG9naW4iLCJCdXR0b24iLCJpbml0SW5mbyIsImluZm8iLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiTGFiZWwiLCJzdHJpbmciLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiYmluZENsaWNrRXZlbnQiLCJidXR0b24iLCJpbmRleCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImNsaWNrRXZlbnRzIiwicHVzaCIsIm9uQ29uZmlyQnRuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwiaHR0cFBvc3QiLCJkYXRhIiwic2VydmVyX2Nob2VzX2xhYmVsIiwiZmluZCIsInNlcnZlcl9jaG9lc190eXBlIiwibWFzayIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBRVJDLElBQUFBLFdBQVcsRUFBRUosRUFBRSxDQUFDSyxJQUZSO0FBR1JDLElBQUFBLFdBQVcsRUFBRU4sRUFBRSxDQUFDSyxJQUhSO0FBSVJFLElBQUFBLG1CQUFtQixFQUFFUCxFQUFFLENBQUNRO0FBSmhCLEdBSFA7QUFVTDtBQUVBQyxFQUFBQSxRQVpLLG9CQVlLQyxJQVpMLEVBWVc7QUFDWjtB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eUNDLE1BQXpDLEdBQWdEWCxJQUFJLENBQUMsTUFBRCxDQUFwRDtBQUNBb0MsTUFBQUEsaUJBQWlCLENBQUN2QixLQUFsQixHQUEwQixJQUFJdkIsRUFBRSxDQUFDdUIsS0FBUCxDQUFhYixJQUFJLENBQUMsT0FBRCxDQUFqQixDQUExQjtBQUNILEtBVkQ7QUFXQSxRQUFJcUMsSUFBSSxHQUFFL0MsRUFBRSxDQUFDNkMsSUFBSCxDQUFRLGFBQVIsQ0FBVjtBQUNBRSxJQUFBQSxJQUFJLENBQUNDLE1BQUwsR0FBWSxLQUFaLENBaEJ3QixDQWlCeEI7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBckZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHNqZWFtXHJcbiAqIEBEYXRlOiAyMDIyLTA2LTE0IDE2OjAxOjQxXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqL1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gIFxyXG4gICAgICAgIHNlcnZlcl90eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl9uYW1lOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNwcml0ZV9zZXJ2ZXJfbG9naW46IGNjLkJ1dHRvblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBpbml0SW5mbyAoaW5mbykge1xyXG4gICAgICAgIC8vIOWIneWni+WMluivpemBk+WFt+ebuOWFs+S/oeaBr1xyXG5cclxuICAgICAgICAvLyDlm77niYdcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaW5mb1sncGljVXJsJ10pe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhpbmZvWydwaWNVcmwnXSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgICAgICAvLyB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICBpZihpbmZvWydudW0nXTwxMDApe1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKGluZm9bJ2NvbG9yJ10pO1xyXG4gICAgICAgIH1lbHNlIGlmKGluZm9bJ251bSddPDUwMCYmaW5mb1snbnVtJ10+PTEwMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1sndHlwZSddO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7XHJcbiAgICAgICAgfWVsc2UgaWYoaW5mb1snbnVtJ108MTAwMCYmaW5mb1snbnVtJ10+PTUwMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1sndHlwZSddO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1sndHlwZSddO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7XHJcbiAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfbmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0gaW5mb1snaWQnXSsn5Yy6ICAtICAnK2luZm9bJ25hbWUnXTtcclxuICAgICAgICAvL+WIm+W7uuS4gOS4quaWsGJ1dHRvbiDlubblsIblhbbmjILovb3liLDliJvlu7rnmoTnsr7ngbXkuItcclxuICAgICAgICB0aGlzLmJpbmRDbGlja0V2ZW50KCB0aGlzLnNwcml0ZV9zZXJ2ZXJfbG9naW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIGluZm8pO1xyXG4gICAgfSxcclxuICAgIC8vIOe7keWumuaMiemSruS6i+S7tlxyXG4gICAgYmluZENsaWNrRXZlbnQ6IGZ1bmN0aW9uIChidXR0b24sIGluZGV4KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgdmFyIGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgXHJcbiAgICAgICAgLy/ov5nkuKrmmK/ku6PnoIHmlofku7blkI1cclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlRvb2xzXCI7ICAvLyBqc+iEmuacrOaWh+S7ti3nu5HlrppcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJvbkNvbmZpckJ0blwiOy8vIGpz5pa55rOV5ZCN56ewLS3nu5HlrppcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBpbmRleDsgLy8g5Zue6LCD5YaF5a65XHJcbiAgICAgICAgYnV0dG9uLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfSxcclxuIFxyXG5cclxuICAgIC8v5oyJ6ZKu54K55Ye75Zue6LCDXHJcbiAgICBvbkNvbmZpckJ0bjpmdW5jdGlvbihlLGluZm8pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLXNlcnZlcicsIHtcclxuICAgICAgICAgICAgJ2lkJzogaW5mb1snaWQnXSxcclxuICAgICAgICAgICAgJ3Rva2VuJzogbnVsbFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgc2VydmVyX2Nob2VzX2xhYmVsICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc19sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VydmVyX2Nob2VzX2xhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ25hbWUnXTtcclxuICAgICAgICAgICAgdmFyIHNlcnZlcl9jaG9lc190eXBlICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvc2VydmVyX2Nob2VzL3NlcnZlcl9jaG9lc190eXBlXCIpO1xyXG4gICAgICAgICAgICBzZXJ2ZXJfY2hvZXNfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgICAgIHNlcnZlcl9jaG9lc190eXBlLmNvbG9yID0gbmV3IGNjLmNvbG9yKGluZm9bJ2NvbG9yJ10pOyBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHZhciBtYXNrID1jYy5maW5kKFwiQ2FudmFzL21hc2tcIik7XHJcbiAgICAgICAgbWFzay5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAvLyB2YXIgbWFzayA9ICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21hc2snKVxyXG4gICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pKTtcclxuICAgICBcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJpdGVfc2VydmVyX2xvZ2luXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIueCueWHu+WIsOaMiemSrlwiKTtcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAvLyB9LHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlOyAvLyDnm7TmjqXljrvmjonmqKHlnovoioLngrlcclxuICAgIH0sXHJcbiBcclxufSk7XHJcbiJdfQ==