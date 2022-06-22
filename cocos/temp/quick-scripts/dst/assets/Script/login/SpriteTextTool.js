
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/SpriteTextTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '522f7RUlNhOh5+SscH5tMhK', 'SpriteTextTool');
// Script/login/SpriteTextTool.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    content: "1000",
    text_sprite: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  start: function start() {
    this.setContent("8934873");
  },
  // 设置文本
  setContent: function setContent(str) {
    this.content = str;
    this.onSetContentChange();
  },
  onSetContentChange: function onSetContentChange() {
    this.createSpriteText();
  },
  createSpriteText: function createSpriteText() {
    this.clearItem();
    var childs = this.node.children;
    var count = childs.length;

    for (var i = 0; i < this.content.length; i++) {
      var item = null;
      var sprite = null;

      if (i < count) {
        item = childs[i];
        item.active = true;
        sprite = item.getComponent(cc.Sprite);
      } else {
        item = new cc.Node("item");
        sprite = item.addComponent(cc.Sprite);
      }

      this.setSprite(this.content[i], sprite);
      item.parent = this.node;
    }
  },
  // 获取贴图
  getSprite: function getSprite(index) {
    var sprite = this.text_sprite.clone(); // 克隆一张图片

    var width = sprite.getRect().width / 10;
    var height = sprite.getRect().height;
    var x = sprite.getRect().x + index * width;
    var y = sprite.getRect().y;
    var tmpRect = new cc.Rect(x, y, width, height);
    sprite.setRect(tmpRect); // 设置 SpriteFrame 的纹理矩形区域

    return sprite;
  },
  // 设置贴图
  setSprite: function setSprite(value, sprite) {
    switch (value) {
      case "0":
        sprite.spriteFrame = this.getSprite(0);
        break;

      case "1":
        sprite.spriteFrame = this.getSprite(1);
        break;

      case "2":
        sprite.spriteFrame = this.getSprite(2);
        break;

      case "3":
        sprite.spriteFrame = this.getSprite(3);
        break;

      case "4":
        sprite.spriteFrame = this.getSprite(4);
        break;

      case "5":
        sprite.spriteFrame = this.getSprite(5);
        break;

      case "6":
        sprite.spriteFrame = this.getSprite(6);
        break;

      case "7":
        sprite.spriteFrame = this.getSprite(7);
        break;

      case "8":
        sprite.spriteFrame = this.getSprite(8);
        break;

      case "9":
        sprite.spriteFrame = this.getSprite(9);
        break;

      default:
        console.log("value not find :" + value);
        break;
    }
  },
  clearItem: function clearItem() {
    var childs = this.node.children;

    for (var i = 0; i < childs.length; i++) {
      childs[i].active = false;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcU3ByaXRlVGV4dFRvb2wuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwidGV4dF9zcHJpdGUiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzdGFydCIsInNldENvbnRlbnQiLCJzdHIiLCJvblNldENvbnRlbnRDaGFuZ2UiLCJjcmVhdGVTcHJpdGVUZXh0IiwiY2xlYXJJdGVtIiwiY2hpbGRzIiwibm9kZSIsImNoaWxkcmVuIiwiY291bnQiLCJsZW5ndGgiLCJpIiwiaXRlbSIsInNwcml0ZSIsImFjdGl2ZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsIk5vZGUiLCJhZGRDb21wb25lbnQiLCJzZXRTcHJpdGUiLCJwYXJlbnQiLCJnZXRTcHJpdGUiLCJpbmRleCIsImNsb25lIiwid2lkdGgiLCJnZXRSZWN0IiwiaGVpZ2h0IiwieCIsInkiLCJ0bXBSZWN0IiwiUmVjdCIsInNldFJlY3QiLCJ2YWx1ZSIsInNwcml0ZUZyYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRyxNQURGO0FBRVJDLElBQUFBLFdBQVcsRUFBQztBQUNSLGlCQUFVLElBREY7QUFFUkMsTUFBQUEsSUFBSSxFQUFHTixFQUFFLENBQUNPO0FBRkY7QUFGSixHQUhQO0FBV0xDLEVBQUFBLEtBWEssbUJBWUw7QUFDSSxTQUFLQyxVQUFMLENBQWdCLFNBQWhCO0FBQ0gsR0FkSTtBQWdCTDtBQUNBQSxFQUFBQSxVQWpCSyxzQkFpQk1DLEdBakJOLEVBa0JMO0FBQ0ksU0FBS04sT0FBTCxHQUFlTSxHQUFmO0FBQ0EsU0FBS0Msa0JBQUw7QUFDSCxHQXJCSTtBQXVCTEEsRUFBQUEs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QUFLLEdBQUw7QUFDSVIsUUFBQUEsTUFBTSxDQUFDb0IsV0FBUCxHQUFxQixLQUFLWixTQUFMLENBQWUsQ0FBZixDQUFyQjtBQUNBOztBQUNKLFdBQUssR0FBTDtBQUNJUixRQUFBQSxNQUFNLENBQUNvQixXQUFQLEdBQXFCLEtBQUtaLFNBQUwsQ0FBZSxDQUFmLENBQXJCO0FBQ0E7O0FBQ0osV0FBSyxHQUFMO0FBQ0lSLFFBQUFBLE1BQU0sQ0FBQ29CLFdBQVAsR0FBcUIsS0FBS1osU0FBTCxDQUFlLENBQWYsQ0FBckI7QUFDQTs7QUFDSixXQUFLLEdBQUw7QUFDSVIsUUFBQUEsTUFBTSxDQUFDb0IsV0FBUCxHQUFxQixLQUFLWixTQUFMLENBQWUsQ0FBZixDQUFyQjtBQUNBOztBQUNKLFdBQUssR0FBTDtBQUNJUixRQUFBQSxNQUFNLENBQUNvQixXQUFQLEdBQXFCLEtBQUtaLFNBQUwsQ0FBZSxDQUFmLENBQXJCO0FBQ0E7O0FBQ0o7QUFDSWEsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQXFCSCxLQUFqQztBQUNBO0FBakNSO0FBbUNILEdBdkdJO0FBeUdMM0IsRUFBQUEsU0F6R0ssdUJBMEdMO0FBQ0ksUUFBSUMsTUFBTSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBdkI7O0FBQ0EsU0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxNQUFNLENBQUNJLE1BQTNCLEVBQW1DQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDTCxNQUFBQSxNQUFNLENBQUNLLENBQUQsQ0FBTixDQUFVRyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSjtBQS9HSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjb250ZW50IDogXCIxMDAwXCIsXHJcbiAgICAgICAgdGV4dF9zcHJpdGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZSA6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRDb250ZW50KFwiODkzNDg3M1wiKTtcclxuICAgIH0sXHJcbiBcclxuICAgIC8vIOiuvue9ruaWh+acrFxyXG4gICAgc2V0Q29udGVudChzdHIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gc3RyO1xyXG4gICAgICAgIHRoaXMub25TZXRDb250ZW50Q2hhbmdlKCk7XHJcbiAgICB9LFxyXG4gXHJcbiAgICBvblNldENvbnRlbnRDaGFuZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3ByaXRlVGV4dCgpOyAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIGNyZWF0ZVNwcml0ZVRleHQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xlYXJJdGVtKCk7XHJcbiAgICAgICAgdmFyIGNoaWxkcyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICB2YXIgY291bnQgPSBjaGlsZHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYoaSA8IGNvdW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2hpbGRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlID0gaXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBuZXcgY2MuTm9kZShcIml0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUgPSBpdGVtLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKHRoaXMuY29udGVudFtpXSxzcHJpdGUpO1xyXG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gXHJcbiAgICAvLyDojrflj5botLTlm75cclxuICAgIGdldFNwcml0ZShpbmRleClcclxuICAgIHtcclxuICAgICAgICB2YXIgc3ByaXRlID0gdGhpcy50ZXh0X3Nwcml0ZS5jbG9uZSgpOyAvLyDlhYvpmobkuIDlvKDlm77niYdcclxuICAgICAgICB2YXIgd2lkdGggPSBzcHJpdGUuZ2V0UmVjdCgpLndpZHRoLzEwO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBzcHJpdGUuZ2V0UmVjdCgpLmhlaWdodDtcclxuICAgICAgICB2YXIgeCA9IHNwcml0ZS5nZXRSZWN0KCkueCArIGluZGV4ICogd2lkdGg7XHJcbiAgICAgICAgdmFyIHkgPSBzcHJpdGUuZ2V0UmVjdCgpLnk7XHJcbiAgICAgICAgdmFyIHRtcFJlY3QgPSBuZXcgY2MuUmVjdCh4LHksd2lkdGgsaGVpZ2h0KTtcclxuICAgICAgICBzcHJpdGUuc2V0UmVjdCh0bXBSZWN0KTsgICAvLyDorr7nva4gU3ByaXRlRnJhbWUg55qE57q555CG55+p5b2i5Yy65Z+fXHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgIH0sXHJcbiAgICAvLyDorr7nva7otLTlm75cclxuICAgIHNldFNwcml0ZSh2YWx1ZSxzcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRTcHJpdGUoMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDEpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNwcml0ZSgyKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNwcml0ZSg0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRTcHJpdGUoNSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjZcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDYpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI3XCI6XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNwcml0ZSg3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiOFwiOlxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRTcHJpdGUoOCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjlcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG5vdCBmaW5kIDpcIiArIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfSxcclxuIFxyXG4gICAgY2xlYXJJdGVtKClcclxuICAgIHtcclxuICAgICAgICB2YXIgY2hpbGRzID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkc1tpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19