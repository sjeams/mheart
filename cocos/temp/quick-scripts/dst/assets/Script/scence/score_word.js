
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/score_word.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6b99ZAVAJJtbvT/VopdNIP', 'score_word');
// Script/scence/score_word.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// 世界操作  
var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
var params = [];
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    //测试item
    //   content: {
    //     default: null,
    //     type: cc.Node
    //   },
    // person: {
    //   default: null,
    //   type: cc.Prefab
    // },
    content: cc.Node,
    person: cc.Prefab,
    //列表
    test_scrollView: {
      "default": null,
      type: cc.ScrollView
    },
    //翻页容器
    test_pageView: {
      "default": null,
      type: cc.PageView
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // for (let i = 0; i < 10; i++) {
    //     let person = cc.instantiate(this.person);
    //     this.conten=person
    //     // person.parent = this.content;
    //     // this.addTouchEvent(person);  //添加触摸事件
    //   }
    // this.value_set = [];
    // // 如果你这里是排行榜，那么你就push排行榜的数据;
    // for(var i = 1; i <= 100; i ++) {
    //     this.value_set.push(i);
    // }
    // this.content = this.scroll_view.content;
    // this.opt_item_set = [];
    // for(var i = 0; i < this.PAGE_NUM * 3; i ++) {
    //     var item = cc.instantiate(this.item_prefab);
    //     this.content.addChild(item);
    //     this.opt_item_set.push(item);
    // }
    this.spawnTools(); // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
  },
  spawnTools: function spawnTools() {
    var _this = this;

    var params = {
      'page': 1,
      'pageSize': 12
    };
    httpRequest.httpPost('/app/app-apiword/index', params, function (data) {
      //  console.log(data);
      // console.log(_this.content)
      if (data.data) {
        //跳转到世界
        httpRequest.playGame('map/诸天地图');
      } else {
        //生成世界
        // let cellWidth = _this.content.width * 0.2;
        // let cellHeight = _this.content.height * 0.4;
        // let spacingX = _this.content.width * 0.1;
        // let spacingY = _this.content.height * 0.1;
        // _this.content.getComponent(cc.Layout).cellSize.width = cellWidth;
        // _this.content.getComponent(cc.Layout).cellSize.height = cellHeight;
        // _this.content.getComponent(cc.Layout).spacingX = spacingX;
        // _this.content.getComponent(cc.Layout).spacingY = spacingY;
        _this.addWord();
      }
    });
  },
  addWord: function addWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/rand-word', params, function (data) {
      // console.log(data);
      // let cellWidth = _this.content.width * 0.105;
      // let cellHeight = _this.content.height * 0.215;
      // let spacingX = _this.content.width * 0.022;
      // let spacingY = _this.content.height * 0.045;
      // 根据MapTools生成相应的道具
      // _this.toolsArray = [];
      var TOOLS = data.data;
      var total = data.data.length;
      console.log(TOOLS);
      var fi = cc.fadeIn(2); //渐显效果

      _this.content.runAction(fi);

      var fo = cc.fadeOut(1); //渐隐效果

      _this.content.runAction(fo); //移除节点


      _this.content.removeAllChildren();

      _this.content.destroyAllChildren(); //添加节点


      for (var i = 0; i < total; i++) {
        // console.log(i) 
        var tool = cc.instantiate(_this.person);
        tool.getComponent('wordTools').initInfo(TOOLS[i]); // _this.toolsArray.push(tool);

        _this.content.addChild(tool);
      } // 定义content滚动条高度
      // let scorllheight =  _this.content.parent;
      // //计算滚动条高度
      // let  height =  (cellHeight+spacingY)*( Math.ceil(total/2));
      // // console.log(height);
      // // scorllheight.designResolution  = new cc.Size(600, height);
      // scorllheight.setContentSize(600,height);

    });
  },
  addTouchEvent: function addTouchEvent(node_1) {
    node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
  } // start: function() {
  //     this.start_y = this.content.y;
  //     this.start_index = 0; // 当前我们24个Item加载的 100项数据里面的起始数据记录的索引;
  //     this.load_record(this.start_index);
  // },
  // // 从这个索引开始，加载数据记录到我们的滚动列表里面的选项
  // load_record: function(start_index) {
  //     this.start_index = start_index;
  //     for(var i = 0; i < this.PAGE_NUM * 3; i ++) {
  //         var label = this.opt_item_set[i].getChildByName("src").getComponent(cc.Label);
  //         // 显示我们的记录;
  //         label.string = this.value_set[start_index + i];
  //     }
  // },
  // on_scroll_ended: function() {
  //     this.scrollveiw_load_recode();
  //     this.scroll_view.elastic = true;
  // },
  // scrollveiw_load_recode: function() {
  //      // 向下加载了
  //     if (this.start_index + this.PAGE_NUM * 3 < this.value_set.length &&
  //         this.content.y >= this.start_y + this.PAGE_NUM * 2 * this.OPT_HEIGHT) { // 动态加载
  //         if (this.scroll_view._autoScrolling) { // 等待这个自动滚动结束以后再做加载
  //             this.scroll_view.elastic = false; // 暂时关闭回弹效果
  //             return;
  //         }
  //         var down_loaded = this.PAGE_NUM;
  //         this.start_index += down_loaded;
  //         if (this.start_index + this.PAGE_NUM * 3 > this.value_set.length) {
  //             var out_len = this.start_index + this.PAGE_NUM * 3 - this.value_set.length;
  //             down_loaded -= (out_len);
  //             this.start_index -= (out_len);
  //         }
  //         this.load_record(this.start_index);
  //         this.content.y -= (down_loaded * this.OPT_HEIGHT);
  //         return;
  //     }
  //     // 向上加载
  //     if (this.start_index > 0 && this.content.y <= this.start_y) {
  //         if (this.scroll_view._autoScrolling) { // 等待这个自动滚动结束以后再做加载
  //             this.scroll_view.elastic = false;
  //             return;
  //         }
  //         var up_loaded = this.PAGE_NUM;
  //         this.start_index -= up_loaded;
  //         if (this.start_index < 0) {
  //             up_loaded += this.start_index;
  //             this.start_index = 0; 
  //         }
  //         this.load_record(this.start_index);
  //         this.content.y += (up_loaded * this.OPT_HEIGHT);
  //     }
  //     // end 
  // },
  // // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  //     this.scrollveiw_load_recode();
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JlX3dvcmQuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJ0ZXN0X3Njcm9sbFZpZXciLCJ0eXBlIiwiU2Nyb2xsVmlldyIsInRlc3RfcGFnZVZpZXciLCJQYWdlVmlldyIsIm9uTG9hZCIsInNwYXduVG9vbHMiLCJfdGhpcyIsImh0dHBQb3N0IiwiZGF0YSIsInBsYXlHYW1lIiwiYWRkV29yZCIsIlRPT0xTIiwidG90YWwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmkiLCJmYWRlSW4iLCJydW5BY3Rpb24iLCJmbyIsImZhZGVPdXQiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsImkiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0SW5mbyIsImFkZENoaWxkIiwiYWRkVG91Y2hFdmVudCIsIm5vZGVfMSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoTW92ZSIsIlRPVUNIX0VORCIsInRvdWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLElBQUlHLE1BQU0sR0FBRSxFQUFaO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FB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dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vIOS4lueVjOaTjeS9nCAgXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcIi4uL2h0dHBcIik7IFxyXG52YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG52YXIgcGFyYW1zID1bXTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy/mtYvor5VpdGVtXHJcbiAgICAgIC8vICAgY29udGVudDoge1xyXG4gICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgLy8gICB9LFxyXG5cclxuICAgICAgLy8gcGVyc29uOiB7XHJcbiAgICAgIC8vICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgLy8gfSxcclxuXHJcbiAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXHJcbiAgICAgIHBlcnNvbjogY2MuUHJlZmFiLFxyXG5cclxuICAgICAgLy/liJfooahcclxuICAgICAgdGVzdF9zY3JvbGxWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5TY3JvbGxWaWV3XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v57+76aG15a655ZmoXHJcbiAgICAgIHRlc3RfcGFnZVZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlBhZ2VWaWV3XHJcbiAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHBlcnNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc29uKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW49cGVyc29uXHJcbiAgICAgICAgLy8gICAgIC8vIHBlcnNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuYWRkVG91Y2hFdmVudChwZXJzb24pOyAgLy/mt7vliqDop6bmkbjkuovku7ZcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB0aGlzLnZhbHVlX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIC8vIOWmguaenOS9oOi/memHjOaYr+aOkuihjOamnO+8jOmCo+S5iOS9oOWwsXB1c2jmjpLooYzmppznmoTmlbDmja47XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8PSAxMDA7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52YWx1ZV9zZXQucHVzaChpKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY29udGVudCA9IHRoaXMuc2Nyb2xsX3ZpZXcuY29udGVudDtcclxuICAgICAgICAvLyB0aGlzLm9wdF9pdGVtX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9wcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub3B0X2l0ZW1fc2V0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB0aGlzLnNwYXduVG9vbHMoKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuXHJcbiAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgJ3BhZ2UnOiAxLFxyXG4gICAgICAgICAgICAgICdwYWdlU2l6ZSc6IDEyLFxyXG4gICAgICB9O1xyXG4gICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpd29yZC9pbmRleCcsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhfdGhpcy5jb250ZW50KVxyXG4gICAgICAgICAgaWYoZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICAvL+i3s+i9rOWIsOS4lueVjFxyXG4gICAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAvL+eUn+aIkOS4lueVjFxyXG4gICAgICAgICAgICAgIC8vIGxldCBjZWxsV2lkdGggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC4yO1xyXG4gICAgICAgICAgICAgIC8vIGxldCBjZWxsSGVpZ2h0ID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjQ7XHJcbiAgICAgICAgICAgICAgLy8gbGV0IHNwYWNpbmdYID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMTtcclxuICAgICAgICAgICAgICAvLyBsZXQgc3BhY2luZ1kgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMTtcclxuICAgIFxyXG4gICAgICAgICAgICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICAgICAgLy8gX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5jZWxsU2l6ZS5oZWlnaHQgPSBjZWxsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcbiAgICAgICAgICAgICAgX3RoaXMuYWRkV29yZCgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBhZGRXb3JkKCl7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvcmFuZC13b3JkJywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAvLyBsZXQgY2VsbFdpZHRoID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMTA1O1xyXG4gICAgICAgICAgLy8gbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMjE1O1xyXG4gICAgICAgICAgLy8gbGV0IHNwYWNpbmdYID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMDIyO1xyXG4gICAgICAgICAgLy8gbGV0IHNwYWNpbmdZID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjA0NTtcclxuXHJcbiAgICAgICAgICAvLyDmoLnmja5NYXBUb29sc+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgICAgLy8gX3RoaXMudG9vbHNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgbGV0IFRPT0xTID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgdmFyIHRvdGFsID0gZGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFRPT0xTKSBcclxuXHJcbiAgICAgICAgICB2YXIgZmkgPSBjYy5mYWRlSW4oMikvL+a4kOaYvuaViOaenFxyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5ydW5BY3Rpb24oZmkpO1xyXG4gICAgICAgICAgdmFyIGZvID0gY2MuZmFkZU91dCgxKS8v5riQ6ZqQ5pWI5p6cXHJcbiAgICAgICAgICBfdGhpcy5jb250ZW50LnJ1bkFjdGlvbihmbyk7XHJcbiAgICAgICAgICAvL+enu+mZpOiKgueCuVxyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgIC8v5re75Yqg6IqC54K5XHJcbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dG90YWw7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKSBcclxuICAgICAgICAgICAgICBsZXQgdG9vbCA9IGNjLmluc3RhbnRpYXRlKF90aGlzLnBlcnNvbik7XHJcbiAgICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ3dvcmRUb29scycpLmluaXRJbmZvKFRPT0xTW2ldKTtcclxuICAgICAgICAgICAgICAvLyBfdGhpcy50b29sc0FycmF5LnB1c2godG9vbCk7XHJcbiAgICAgICAgICAgICAgX3RoaXMuY29udGVudC5hZGRDaGlsZCh0b29sKTsgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyDlrprkuYljb250ZW505rua5Yqo5p2h6auY5bqmXHJcbiAgICAgICAgICAvLyBsZXQgc2NvcmxsaGVpZ2h0ID0gIF90aGlzLmNvbnRlbnQucGFyZW50O1xyXG4gICAgICAgICAgLy8gLy/orqHnrpfmu5rliqjmnaHpq5jluqZcclxuICAgICAgICAgIC8vIGxldCAgaGVpZ2h0ID0gIChjZWxsSGVpZ2h0K3NwYWNpbmdZKSooIE1hdGguY2VpbCh0b3RhbC8yKSk7XHJcbiAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhoZWlnaHQpO1xyXG4gICAgICAgICAgLy8gLy8gc2NvcmxsaGVpZ2h0LmRlc2lnblJlc29sdXRpb24gID0gbmV3IGNjLlNpemUoNjAwLCBoZWlnaHQpO1xyXG4gICAgICAgICAgLy8gc2NvcmxsaGVpZ2h0LnNldENvbnRlbnRTaXplKDYwMCxoZWlnaHQpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUb3VjaEV2ZW50KG5vZGVfMSkge1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICB9LFxyXG4gICAgLy8gc3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfeSA9IHRoaXMuY29udGVudC55O1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyAvLyDlvZPliY3miJHku6wyNOS4qkl0ZW3liqDovb3nmoQgMTAw6aG55pWw5o2u6YeM6Z2i55qE6LW35aeL5pWw5o2u6K6w5b2V55qE57Si5byVO1xyXG4gICAgLy8gICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIC8vIOS7jui/meS4que0ouW8leW8gOWni++8jOWKoOi9veaVsOaNruiusOW9leWIsOaIkeS7rOeahOa7muWKqOWIl+ihqOmHjOmdoueahOmAiemhuVxyXG4gICAgLy8gbG9hZF9yZWNvcmQ6IGZ1bmN0aW9uKHN0YXJ0X2luZGV4KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IHN0YXJ0X2luZGV4O1xyXG5cclxuICAgIC8vICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5QQUdFX05VTSAqIDM7IGkgKyspIHtcclxuICAgIC8vICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5vcHRfaXRlbV9zZXRbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzcmNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIC8vICAgICAgICAgLy8g5pi+56S65oiR5Lus55qE6K6w5b2VO1xyXG4gICAgLy8gICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aGlzLnZhbHVlX3NldFtzdGFydF9pbmRleCArIGldO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gb25fc2Nyb2xsX2VuZGVkOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSB0cnVlO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBzY3JvbGx2ZWl3X2xvYWRfcmVjb2RlOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgLy8g5ZCR5LiL5Yqg6L295LqGXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA8IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCAmJlxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSA+PSB0aGlzLnN0YXJ0X3kgKyB0aGlzLlBBR0VfTlVNICogMiAqIHRoaXMuT1BUX0hFSUdIVCkgeyAvLyDliqjmgIHliqDovb1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7IC8vIOaaguaXtuWFs+mXreWbnuW8ueaViOaenFxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgZG93bl9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ICs9IGRvd25fbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzID4gdGhpcy52YWx1ZV9zZXQubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgb3V0X2xlbiA9IHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyAtIHRoaXMudmFsdWVfc2V0Lmxlbmd0aDtcclxuICAgIC8vICAgICAgICAgICAgIGRvd25fbG9hZGVkIC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSAtPSAoZG93bl9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyDlkJHkuIrliqDovb1cclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA+IDAgJiYgdGhpcy5jb250ZW50LnkgPD0gdGhpcy5zdGFydF95KSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciB1cF9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IHVwX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPCAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB1cF9sb2FkZWQgKz0gdGhpcy5zdGFydF9pbmRleDtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyBcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSArPSAodXBfbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gZW5kIFxyXG4gICAgLy8gfSxcclxuICAgIC8vIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gfSxcclxufSk7XHJcbiJdfQ==