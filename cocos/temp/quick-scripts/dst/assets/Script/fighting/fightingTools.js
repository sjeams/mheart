
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
    this.server_type.getComponent(cc.Label).string = 'Lv.' + info['grade'] + '(' + info['name'] + ')';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmaWdodGluZ1xcZmlnaHRpbmdUb29scy5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwicGFyYW1zIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZXJ2ZXJfcGljdHVyZSIsIk5vZGUiLCJzZXJ2ZXJfdHlwZSIsInNlcnZlcl9uYW1lIiwic2VydmVyX3N0YXIiLCJzcHJpdGVfc2VydmVyX2xvZ2luIiwiQnV0dG9uIiwiaW5pdEluZm8iLCJpbmZvX2xpc3QiLCJpbmZvIiwiX3NlbGYiLCJyZW1vdGVVcmwiLCJodHRwVXJsIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsInRleHR1cmUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwiY29sb3IiLCJ0eXBlX2NvbG9yIiwic3RhciIsImkiLCJMYWJlbCIsInN0cmluZyIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImJpbmRDbGlja0V2ZW50IiwiYnV0dG9uIiwiaW5kZXgiLCJjbGlja0V2ZW50SGFuZGxlciIsIkV2ZW50SGFuZGxlciIsInRhcmdldCIsImNvbXBvbmVudCIsImhhbmRsZXIiLCJjdXN0b21FdmVudERhdGEiLCJjbGlja0V2ZW50cyIsInB1c2giLCJvbkNvbmZpckJ0biIsImUiLCJjb25zb2xlIiwibG9nIiwiaHR0cFBvc3QiLCJkYXRhIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLElBQUlHLE1BQU0sR0FBRSxFQUFaO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxjQUFjLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEWDtBQUVSQyxJQUFBQSxXQUFXLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGUjtBQUdSRSxJQUFBQSxXQUFXLEVBQUVQLEVBQUUsQ0FBQ0ssSUFIUjtBQUlSRyxJQUFBQSxXQUFXLEVBQUVSLEVBQUUsQ0FBQ0ssSUFKUjtBQUtSSSxJQUFBQSxtQkFBbUIsRUFBRVQsRUFBRSxDQUFDVTtBQUxoQixHQUhQO0FBV0w7QUFFQUMsRUFBQUEsUUFiSyxvQkFhS0MsU0FiTCxFQWFnQjtBQUNqQkMsSUFBQUEsSUFBSSxHQUFDRCxTQUFTLENBQUMsU0FBRCxDQUFkLENBRGlCLENBRWpCO0FBQ0E7O0FBQ0EsUUFBSUUsS0FBSyxHQUFHLElBQVo7O0FBRUEsUUFBR0QsSUFBSSxDQUFDLFNBQUQsQ0FBUCxFQUFtQjtBQUNmLFVBQUlFLFNBQVMsR0FBR2pCLFdBQVcsQ0FBQ2tCLE9BQVosQ0FBb0JILElBQUksQ0FBQyxTQUFELENBQXhCLENBQWhCLENBRGUsQ0FFZjtBQUNBO0FBQ0E7QUFDQTs7QUFDQWIsTUFBQUEsRUFBRSxDQUFDaUIsTUFBSCxDQUFVQyxJQUFWLENBQWU7QUFBRUMsUUFBQUEsR0FBRyxFQUFFSjtBQUFQLE9BQWYsRUFBbUMsVUFBVUssR0FBVixFQUFlQyxPQUFmLEVBQXdCO0FBQ3ZEO0FBQ0FQLFFBQUFBLEtBQUssQ0FBQ1YsY0FBTixDQUFxQmtCLFlBQXJCLENBQWtDdEIsRUFBRSxDQUFDdUIsTUFBckMsRUFBNkNDLFdBQTdDLEdBQTJELElBQUl4QixFQUFFLENBQUN5QixXQUFQLENBQW1CSixPQUFuQixDQUEzRDtBQUNILE9BSEQ7QUFJSCxLQWhCZ0IsQ0FpQmpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFFBQUlLLEtBQUssR0FBRyxDQUFDLFNBQUQsRUFBVyxPQUFYLEVBQW1CLFNBQW5CLEVBQTZCLFNBQTdCLEVBQXVDLFNBQXZDLEVBQWlELFNBQWpELENBQVo7QUFDQSxRQUFJQyxVQUFVLEdBQUdELEtBQUssQ0FBQ2IsSUFBSSxDQUFDLFFBQUQsQ0FBTCxDQUF0QixDQWpDaUIsQ0FrQ2pCOztBQUNBLFFBQUllLElBQUksR0FBRSxFQUFWOztBQUNBLFNBQUlDLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsSUFBRWhCLElBQUksQ0FBQyxRQUFELENBQWYsRUFBMEJnQixDQUFDLEVBQTNCLEVBQThCO0FBQzFCRCxNQUFBQSxJQUFJLElBQUcsR0FBUDtBQUNIOztBQUNELFNBQUtwQixXQUFMLENBQWlCYyxZQUFqQixDQUE4QnRCLEVBQUUsQ0FBQzhCLEtBQWpDLEVBQXdDQyxNQUF4QyxHQUFnREgsSUFBaEQ7QUFFQSxTQUFLdEIsV0FBTCxDQUFpQmdCLFlBQWpCLENBQThCdEIsRUFBRSxDQUFDOEIsS0FBakMsRUFBd0NDLE1BQXhDLEdBQStDLFFBQU1sQixJQUFJLENBQUMsT0FBRCxDQUFWLEdBQW9CLEdBQXBCLEdBQXdCQSxJQUFJLENBQUMsTUFBRCxDQUE1QixHQUFxQyxHQUFwRjtBQUNBLFNBQUttQixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsYUFBekIsRUFBd0NQLEtBQXhDLEdBQWdELElBQUkxQixFQUFFLENBQUMwQixLQUFQLENBQWFDLFVBQWIsQ0FBaEQ7QUFFQSxTQUFLcEIsV0FBTCxDQUFpQmUsWUFBakIsQ0FBOEJ0QixFQUFFLENBQUM4QixLQUFqQyxFQUF3Q0MsTUFBeEMsR0FBK0NsQixJQUFJLENBQUMsTUFBRCxDQUFuRDtBQUNBLFNBQUttQixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsYUFBekIsRUFBd0NQLEtBQXhDLEdBQWdELElBQUkxQixFQUFFLENBQUMwQixLQUFQLENBQWFDLFVBQWIsQ0FBaEQsQ0E3Q2lCLENBOENqQjs7QUFDQSxTQUFLTyxjQUFMLENBQXFCLEtBQUt6QixtQkFBTCxDQUF5QmEsWUFBekIsQ0FBc0N0QixFQUFFLENBQUNVLE1BQXpDLENBQXJCLEVBQXVFRyxJQUF2RTtBQUNILEdBN0RJO0FBOERMO0FBQ0FxQixFQUFBQSxjQUFjLEVBQUUsd0JBQVVDLE1BQVYsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ3JDO0FBQ0EsUUFBSUMsaUJBQWlCLEdBQUcsSUFBSXJDLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhb0MsWUFBakIsRUFBeEIsQ0FGcUMsQ0FHckM7O0FBQ0FELElBQUFBLGlCQUFpQixDQUFDRSxNQUFsQixHQUEyQixLQUFLUCxJQUFoQyxDQUpxQyxDQUtyQzs7QUFDQUssSUFBQUEsaUJBQWlCLENBQUNHLFNBQWxCLEdBQThCLFVBQTlCLENBTnFDLENBTU07O0FBQzNDSCxJQUFBQSxpQkFBaUIsQ0FBQ0ksT0FBbEIsR0FBNEIsYUFBNUIsQ0FQcUMsQ0FPSzs7QUFDMUNKLElBQUFBLGlCQUFpQixDQUFDSyxlQUFsQixHQUFvQ04sS0FBcEMsQ0FScUMsQ0FRTTs7QUFDM0NELElBQUFBLE1BQU0sQ0FBQ1EsV0FBUCxDQUFtQkMsSUFBbkIsQ0FBd0JQLGlCQUF4QjtBQUNILEdBekVJO0FBNEVMO0FBQ0FRLEVBQUFBLFdBQVcsRUFBQyxxQkFBU0MsQ0FBVCxFQUFXakMsSUFBWCxFQUFnQjtBQUN4QmtDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbkMsSUFBWjs7QUFDQSxRQUFJakIsVUFBVSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF4Qjs7QUFDQSxRQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBRSxJQUFBQSxXQUFXLENBQUNtRCxRQUFaLENBQXFCLDBCQUFyQixFQUFpRDtBQUM3QyxZQUFNcEMsSUFBSSxDQUFDLElBQUQsQ0FEbUM7QUFFN0MsY0FBUUEsSUFBSSxDQUFDLE1BQUQsQ0FGaUM7QUFHN0MsZUFBUztBQUhvQyxLQUFqRCxFQUlHLFVBQVVxQyxJQUFWLEVBQWdCO0FBQ2Y7QUFDQWxELE1BQUFBLEVBQUUsQ0FBQ21ELFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QixFQUZlLENBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsS0FiRCxFQUp3QixDQW1CeEI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQTVHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBzamVhbVxyXG4gKiBARGF0ZTogMjAyMi0wNi0xNCAxNjowMTo0MVxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiLi4vaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNlcnZlcl9waWN0dXJlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl90eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl9uYW1lOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl9zdGFyOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNwcml0ZV9zZXJ2ZXJfbG9naW46IGNjLkJ1dHRvblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBpbml0SW5mbyAoaW5mb19saXN0KSB7XHJcbiAgICAgICAgaW5mbz1pbmZvX2xpc3RbJ2Jpb2xvZ3knXTtcclxuICAgICAgICAvLyDliJ3lp4vljJbor6XpgZPlhbfnm7jlhbPkv6Hmga9cclxuICAgICAgICAvLyDlm77niYdcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gXHJcbiAgICAgICAgaWYoaW5mb1sncGljdHVyZSddKXtcclxuICAgICAgICAgICAgdmFyIHJlbW90ZVVybCA9IGh0dHBSZXF1ZXN0Lmh0dHBVcmwoaW5mb1sncGljdHVyZSddKTtcclxuICAgICAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoaHR0cFJlcXVlc3QuaHR0cFVybChpbmZvWydwaWN0dXJlJ10pLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHsgICBcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKF9zZWxmKVxyXG4gICAgICAgICAgICAvLyAgICAgX3NlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lOyBcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICAgICAgICAvLyBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICBfc2VsZi5zZXJ2ZXJfcGljdHVyZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1sndHlwZSddO1xyXG4gICAgICAgIC8vIGlmKGluZm9bJ3R5cGUnXT09MSl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+epuumXsic7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignZ3JlZW4nKTtcclxuICAgICAgICAvLyB9ZWxzZSBpZihpbmZvWydudW0nXTw1MDAmJmluZm9bJ251bSddPj0xMDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmtYHnlYUnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNCREZGMDAnKTtcclxuICAgICAgICAvLyB9ZWxzZSBpZihpbmZvWydudW0nXTwxMDAwJiZpbmZvWydudW0nXT49NTAwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n5oul5oykJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkZEMTAwJyk7XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+eIhua7oSc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0ZGMDAwMCcpOyBcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGNvbG9yID0gWycjZmZmZmZmJywnZ3JlZW4nLCcjQkRGRjAwJywnI0ZGRDEwMCcsJyNGRjAwMDAnLCcjZmZlMDAwJyxdO1xyXG4gICAgICAgIHZhciB0eXBlX2NvbG9yID0gY29sb3JbaW5mb1sneWlYaW5nJ11dO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgdmFyIHN0YXIgPScnOyAgICBcclxuICAgICAgICBmb3IoaT0wO2k8PWluZm9bJ3lpWGluZyddO2krKyl7XHJcbiAgICAgICAgICAgIHN0YXIgKz0n4q2QJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfc3Rhci5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0gc3RhcjtcclxuXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0nTHYuJytpbmZvWydncmFkZSddKycoJytpbmZvWyduYW1lJ10rJyknO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcih0eXBlX2NvbG9yKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc2VydmVyX25hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1snbmFtZSddO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX25hbWUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcih0eXBlX2NvbG9yKTtcclxuICAgICAgICAvL+WIm+W7uuS4gOS4quaWsGJ1dHRvbiDlubblsIblhbbmjILovb3liLDliJvlu7rnmoTnsr7ngbXkuItcclxuICAgICAgICB0aGlzLmJpbmRDbGlja0V2ZW50KCB0aGlzLnNwcml0ZV9zZXJ2ZXJfbG9naW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIGluZm8pO1xyXG4gICAgfSxcclxuICAgIC8vIOe7keWumuaMiemSruS6i+S7tlxyXG4gICAgYmluZENsaWNrRXZlbnQ6IGZ1bmN0aW9uIChidXR0b24sIGluZGV4KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgdmFyIGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgXHJcbiAgICAgICAgLy/ov5nkuKrmmK/ku6PnoIHmlofku7blkI1cclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIm1hcFRvb2xzXCI7ICAvLyBqc+iEmuacrOaWh+S7ti3nu5HlrppcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJvbkNvbmZpckJ0blwiOy8vIGpz5pa55rOV5ZCN56ewLS3nu5HlrppcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBpbmRleDsgLy8g5Zue6LCD5YaF5a65XHJcbiAgICAgICAgYnV0dG9uLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfSxcclxuIFxyXG5cclxuICAgIC8v5oyJ6ZKu54K55Ye75Zue6LCDXHJcbiAgICBvbkNvbmZpckJ0bjpmdW5jdGlvbihlLGluZm8pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiLi4vaHR0cFwiKTsgXHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpd29yZC9pbi13b3JkJywge1xyXG4gICAgICAgICAgICAnaWQnOiBpbmZvWydpZCddLFxyXG4gICAgICAgICAgICAnc3Rhcic6IGluZm9bJ3N0YXInXSxcclxuICAgICAgICAgICAgJ3Rva2VuJzogbnVsbFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8v6Lez6L2s5Yiw5LiW55WMXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gdmFyIHNlcnZlcl9jaG9lc19sYWJlbCAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3NlcnZlcl9jaG9lcy9zZXJ2ZXJfY2hvZXNfbGFiZWxcIik7XHJcbiAgICAgICAgICAgIC8vIHNlcnZlcl9jaG9lc19sYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyduYW1lJ107XHJcbiAgICAgICAgICAgIC8vIHZhciBzZXJ2ZXJfY2hvZXNfdHlwZSAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3NlcnZlcl9jaG9lcy9zZXJ2ZXJfY2hvZXNfdHlwZVwiKTtcclxuICAgICAgICAgICAgLy8gc2VydmVyX2Nob2VzX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1sndHlwZSddO1xyXG4gICAgICAgICAgICAvLyBzZXJ2ZXJfY2hvZXNfdHlwZS5jb2xvciA9IG5ldyBjYy5jb2xvcihpbmZvWydjb2xvciddKTsgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gdmFyIG1hc2sgPWNjLmZpbmQoXCJDYW52YXMvbWFza1wiKTtcclxuICAgICAgICAvLyBtYXNrLmFjdGl2ZT1mYWxzZVxyXG4gICAgICAgIC8vIHZhciBtYXNrID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbWFzaycpXHJcbiAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpO1xyXG4gICAgIFxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwcml0ZV9zZXJ2ZXJfbG9naW5cIikub24oJ2NsaWNrJyxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi54K55Ye75Yiw5oyJ6ZKuXCIpO1xyXG4gICAgICAgIC8vICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIC8vIH0sdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7IC8vIOebtOaOpeWOu+aOieaooeWei+iKgueCuVxyXG4gICAgfSxcclxuIFxyXG59KTtcclxuIl19