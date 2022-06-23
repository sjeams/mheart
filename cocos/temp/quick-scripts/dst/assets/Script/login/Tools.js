
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

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-server', {
      'id': info['id']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZXJ2ZXJfdHlwZSIsIk5vZGUiLCJzZXJ2ZXJfbmFtZSIsInNwcml0ZV9zZXJ2ZXJfbG9naW4iLCJCdXR0b24iLCJpbml0SW5mbyIsImluZm8iLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiTGFiZWwiLCJzdHJpbmciLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiYmluZENsaWNrRXZlbnQiLCJidXR0b24iLCJpbmRleCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImNsaWNrRXZlbnRzIiwicHVzaCIsIm9uQ29uZmlyQnRuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwiaHR0cFBvc3QiLCJkYXRhIiwic2VydmVyX2Nob2VzX2xhYmVsIiwiZmluZCIsInNlcnZlcl9jaG9lc190eXBlIiwibWFzayIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBRVJDLElBQUFBLFdBQVcsRUFBRUosRUFBRSxDQUFDSyxJQUZSO0FBR1JDLElBQUFBLFdBQVcsRUFBRU4sRUFBRSxDQUFDSyxJQUhSO0FBSVJFLElBQUFBLG1CQUFtQixFQUFFUCxFQUFFLENBQUNRO0FBSmhCLEdBSFA7QUFVTDtBQUVBQyxFQUFBQSxRQVpLLG9CQVlLQyxJQVpMLEVBWVc7QUFDWjtB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V0EsUUFBSXFDLElBQUksR0FBRS9DLEVBQUUsQ0FBQzZDLElBQUgsQ0FBUSxhQUFSLENBQVY7QUFDQUUsSUFBQUEsSUFBSSxDQUFDQyxNQUFMLEdBQVksS0FBWixDQWhCd0IsQ0FpQnhCO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQXJGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBzamVhbVxyXG4gKiBARGF0ZTogMjAyMi0wNi0xNCAxNjowMTo0MVxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICBcclxuICAgICAgICBzZXJ2ZXJfdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfbmFtZTogY2MuTm9kZSxcclxuICAgICAgICBzcHJpdGVfc2VydmVyX2xvZ2luOiBjYy5CdXR0b25cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgaW5pdEluZm8gKGluZm8pIHtcclxuICAgICAgICAvLyDliJ3lp4vljJbor6XpgZPlhbfnm7jlhbPkv6Hmga9cclxuXHJcbiAgICAgICAgLy8g5Zu+54mHXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGluZm9bJ3BpY1VybCddKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoaW5mb1sncGljVXJsJ10sIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgaWYoaW5mb1snbnVtJ108MTAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n56m66ZeyJztcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCdncmVlbicpO1xyXG4gICAgICAgIH1lbHNlIGlmKGluZm9bJ251bSddPDUwMCYmaW5mb1snbnVtJ10+PTEwMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+a1geeVhSc7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgICAgIH1lbHNlIGlmKGluZm9bJ251bSddPDEwMDAmJmluZm9bJ251bSddPj01MDApe1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmi6XmjKQnO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRkQxMDAnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n54iG5ruhJztcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkYwMDAwJyk7IFxyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIHRoaXMuc2VydmVyX25hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9IGluZm9bJ2lkJ10rJ+WMuiAgLSAgJytpbmZvWyduYW1lJ107XHJcbiAgICAgICAgLy/liJvlu7rkuIDkuKrmlrBidXR0b24g5bm25bCG5YW25oyC6L295Yiw5Yib5bu655qE57K+54G15LiLXHJcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudCggdGhpcy5zcHJpdGVfc2VydmVyX2xvZ2luLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBpbmZvKTtcclxuICAgIH0sXHJcbiAgICAvLyDnu5HlrprmjInpkq7kuovku7ZcclxuICAgIGJpbmRDbGlja0V2ZW50OiBmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IFxyXG4gICAgICAgIC8v6L+Z5Liq5piv5Luj56CB5paH5Lu25ZCNXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJUb29sc1wiOyAgLy8ganPohJrmnKzmlofku7Yt57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25Db25maXJCdG5cIjsvLyBqc+aWueazleWQjeensC0t57uR5a6aXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaW5kZXg7IC8vIOWbnuiwg+WGheWuuVxyXG4gICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbiBcclxuXHJcbiAgICAvL+aMiemSrueCueWHu+Wbnuiwg1xyXG4gICAgb25Db25maXJCdG46ZnVuY3Rpb24oZSxpbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICAgIHZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdXNlci1zZXJ2ZXInLCB7XHJcbiAgICAgICAgICAgICdpZCc6IGluZm9bJ2lkJ11cclxuICAgICAgICB9LCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHZhciBzZXJ2ZXJfY2hvZXNfbGFiZWwgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX2xhYmVsXCIpO1xyXG4gICAgICAgICAgICBzZXJ2ZXJfY2hvZXNfbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1snbmFtZSddO1xyXG4gICAgICAgICAgICB2YXIgc2VydmVyX2Nob2VzX3R5cGUgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX3R5cGVcIik7XHJcbiAgICAgICAgICAgIHNlcnZlcl9jaG9lc190eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAgICAgc2VydmVyX2Nob2VzX3R5cGUuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7IFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdmFyIG1hc2sgPWNjLmZpbmQoXCJDYW52YXMvbWFza1wiKTtcclxuICAgICAgICBtYXNrLmFjdGl2ZT1mYWxzZVxyXG4gICAgICAgIC8vIHZhciBtYXNrID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbWFzaycpXHJcbiAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpO1xyXG4gICAgIFxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwcml0ZV9zZXJ2ZXJfbG9naW5cIikub24oJ2NsaWNrJyxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi54K55Ye75Yiw5oyJ6ZKuXCIpO1xyXG4gICAgICAgIC8vICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIC8vIH0sdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7IC8vIOebtOaOpeWOu+aOieaooeWei+iKgueCuVxyXG4gICAgfSxcclxuIFxyXG59KTtcclxuIl19