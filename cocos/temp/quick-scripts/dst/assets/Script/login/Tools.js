
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

cc.Class({
  "extends": cc.Component,
  properties: {
    server_type: cc.Node,
    server_name: cc.Node
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

    this.server_name.getComponent(cc.Label).string = info['id'] + '区  -  ' + info['name'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZXJ2ZXJfdHlwZSIsIk5vZGUiLCJzZXJ2ZXJfbmFtZSIsImluaXRJbmZvIiwiaW5mbyIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJMYWJlbCIsInN0cmluZyIsImdldENoaWxkQnlOYW1lIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEUjtBQUVSQyxJQUFBQSxXQUFXLEVBQUVOLEVBQUUsQ0FBQ0s7QUFGUixHQUhQO0FBUUw7QUFFQUUsRUFBQUEsUUFWSyxvQkFVS0MsSUFWTCxFQVVXO0FBQ1o7QUFFQTtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYOztBQUVBLFFBQUdELElBQUksQ0FBQyxRQUFELENBQVAsRUFBa0I7QUFDZFIsTUFBQUEsRUFBRSxDQUFDVSxNQUFILENBQVVDLE9BQVYsQ0FBa0JILElBQUksQ0FBQyxRQUFELENBQXRCLEVBQWtDUixFQUFFLENBQUNZLFdBQXJDLEVBQWtELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUMxRUwsUUFBQUEsSUFBSSxDQUFDTSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJoQixFQUFFLENBQUNpQixNQUExQixFQUFrQ0gsV0FBbEMsR0FBZ0RBLFdBQWhEO0FBQ0gsT0FGRDtBQUdILEtBVlcsQ0FZWjs7O0FBQ0EsUUFBR04sSUFBSSxDQUFDLEtBQUQsQ0FBSixHQUFZLEdBQWYsRUFBbUI7QUFDZixXQUFLSixXQUFMLENBQWlCWSxZQUFqQixDQUE4QmhCLEVBQUUsQ0FBQ2tCLEtBQWpDLEVBQXdDQyxNQUF4QyxHQUErQyxJQUEvQztBQUNBLFdBQUtKLElBQUwsQ0FBVUssY0FBVixDQUF5QixhQUF6QixFQUF3Q0MsS0FBeEMsR0FBZ0QsSUFBSXJCLEVBQUUsQ0FBQ3FCLEtBQVAsQ0FBYSxPQUFiLENBQWhEO0FBQ0gsS0FIRCxNQUdNLElBQUdiLElBQUksQ0FBQyxLQUFELENBQUosR0FBWSxHQUFaLElBQWlCQSxJQUFJLENBQUMsS0FBRCxDQUFKLElBQWEsR0FBakMsRUFBcUM7QUFDdkMsV0FBS0osV0FBTCxDQUFpQlksWUFBakIsQ0FBOEJoQixFQUFFLENBQUNrQixLQUFqQyxFQUF3Q0MsTUFBeEMsR0FBK0MsSUFBL0M7QUFDQSxXQUFLSixJQUFMLENBQVVLLGNBQVYsQ0FBeUIsYUFBekIsRUFBd0NDLEtBQXhDLEdBQWdELElBQUlyQixFQUFFLENBQUNxQixLQUFQLENBQWEsU0FBYixDQUFoRDtBQUNILEtBSEssTUFHQSxJQUFHYixJQUFJLENBQUMsS0FBRCxDQUFKLEdBQVksSUFBWixJQUFrQkEsSUFBSSxDQUFDLEtBQUQsQ0FBSixJQUFhLEdBQWxDLEVBQXNDO0FBQ3hDLFdBQUtKLFdBQUwsQ0FBaUJZLFlBQWpCLENBQThCaEIsRUFBRSxDQUFDa0IsS0FBakMsRUFBd0NDLE1BQXhDLEdBQStDLElBQS9DO0FBQ0EsV0FBS0osSUFBTCxDQUFVSyxjQUFWLENBQXlCLGFBQXpCLEVBQXdDQyxLQUF4QyxHQUFnRCxJQUFJckIsRUFBRSxDQUFDcUIsS0FBUCxDQUFhLFNBQWIsQ0FBaEQ7QUFDSCxLQUhLLE1BR0Q7QUFDRCxXQUFLakIsV0FBTCxDQUFpQlksWUFBakIsQ0FBOEJoQixFQUFFLENBQUNrQixLQUFqQyxFQUF3Q0MsTUFBeEMsR0FBK0MsSUFBL0M7QUFDQSxXQUFLSixJQUFMLENBQVVLLGNBQVYsQ0FBeUIsYUFBekIsRUFBd0NDLEtBQXhDLEdBQWdELElBQUlyQixFQUFFLENBQUNxQixLQUFQLENBQWEsU0FBYixDQUFoRDtBQUNIOztBQUVELFNBQUtmLFdBQUwsQ0FBaUJVLFlBQWpCLENBQThCaEIsRUFBRSxDQUFDa0IsS0FBakMsRUFBd0NDLE1BQXhDLEdBQWdEWCxJQUFJLENBQUMsSUFBRCxDQUFKLEdBQVcsUUFBWCxHQUFvQkEsSUFBSSxDQUFDLE1BQUQsQ0FBeEU7QUFFSDtBQXZDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNlcnZlcl90eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlcnZlcl9uYW1lOiBjYy5Ob2RlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIGluaXRJbmZvIChpbmZvKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6K+l6YGT5YW355u45YWz5L+h5oGvXHJcblxyXG4gICAgICAgIC8vIOWbvueJh1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICBpZihpbmZvWydwaWNVcmwnXSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGluZm9bJ3BpY1VybCddLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICBpZihpbmZvWydudW0nXTwxMDApe1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfnqbrpl7InO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJ2dyZWVuJyk7XHJcbiAgICAgICAgfWVsc2UgaWYoaW5mb1snbnVtJ108NTAwJiZpbmZvWydudW0nXT49MTAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n5rWB55WFJztcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAgICAgfWVsc2UgaWYoaW5mb1snbnVtJ108MTAwMCYmaW5mb1snbnVtJ10+PTUwMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+aLpeaMpCc7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0ZGRDEwMCcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfniIbmu6EnO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRjAwMDAnKTsgXHJcbiAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfbmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0gaW5mb1snaWQnXSsn5Yy6ICAtICAnK2luZm9bJ25hbWUnXTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=