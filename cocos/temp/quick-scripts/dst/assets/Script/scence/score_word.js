
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
var HttpHelper = require("http");

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
        cc.director.loadScene('map/诸天地图');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JlX3dvcmQuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJ0ZXN0X3Njcm9sbFZpZXciLCJ0eXBlIiwiU2Nyb2xsVmlldyIsInRlc3RfcGFnZVZpZXciLCJQYWdlVmlldyIsIm9uTG9hZCIsInNwYXduVG9vbHMiLCJfdGhpcyIsImh0dHBQb3N0IiwiZGF0YSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYWRkV29yZCIsIlRPT0xTIiwidG90YWwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmkiLCJmYWRlSW4iLCJydW5BY3Rpb24iLCJmbyIsImZhZGVPdXQiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsImkiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0SW5mbyIsImFkZENoaWxkIiwiYWRkVG91Y2hFdmVudCIsIm5vZGVfMSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoTW92ZSIsIlRPVUNIX0VORCIsInRvdWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLElBQUlHLE1BQU0sR0FBRSxFQUFaO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7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cm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vIOS4lueVjOaTjeS9nCAgXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG52YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG52YXIgcGFyYW1zID1bXTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy/mtYvor5VpdGVtXHJcbiAgICAgIC8vICAgY29udGVudDoge1xyXG4gICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgLy8gICB9LFxyXG5cclxuICAgICAgLy8gcGVyc29uOiB7XHJcbiAgICAgIC8vICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgLy8gfSxcclxuXHJcbiAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXHJcbiAgICAgIHBlcnNvbjogY2MuUHJlZmFiLFxyXG5cclxuICAgICAgLy/liJfooahcclxuICAgICAgdGVzdF9zY3JvbGxWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5TY3JvbGxWaWV3XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v57+76aG15a655ZmoXHJcbiAgICAgIHRlc3RfcGFnZVZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlBhZ2VWaWV3XHJcbiAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHBlcnNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc29uKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW49cGVyc29uXHJcbiAgICAgICAgLy8gICAgIC8vIHBlcnNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuYWRkVG91Y2hFdmVudChwZXJzb24pOyAgLy/mt7vliqDop6bmkbjkuovku7ZcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB0aGlzLnZhbHVlX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIC8vIOWmguaenOS9oOi/memHjOaYr+aOkuihjOamnO+8jOmCo+S5iOS9oOWwsXB1c2jmjpLooYzmppznmoTmlbDmja47XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8PSAxMDA7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52YWx1ZV9zZXQucHVzaChpKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY29udGVudCA9IHRoaXMuc2Nyb2xsX3ZpZXcuY29udGVudDtcclxuICAgICAgICAvLyB0aGlzLm9wdF9pdGVtX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9wcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub3B0X2l0ZW1fc2V0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB0aGlzLnNwYXduVG9vbHMoKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuXHJcbiAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgJ3BhZ2UnOiAxLFxyXG4gICAgICAgICAgICAgICdwYWdlU2l6ZSc6IDEyLFxyXG4gICAgICB9O1xyXG4gICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpd29yZC9pbmRleCcsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhfdGhpcy5jb250ZW50KVxyXG4gICAgICAgICAgaWYoZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICAvL+i3s+i9rOWIsOS4lueVjFxyXG4gICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgLy/nlJ/miJDkuJbnlYxcclxuICAgICAgICAgICAgICAvLyBsZXQgY2VsbFdpZHRoID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMjtcclxuICAgICAgICAgICAgICAvLyBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC40O1xyXG4gICAgICAgICAgICAgIC8vIGxldCBzcGFjaW5nWCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjE7XHJcbiAgICAgICAgICAgICAgLy8gbGV0IHNwYWNpbmdZID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjE7XHJcbiAgICBcclxuICAgICAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xyXG4gICAgICAgICAgICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUuaGVpZ2h0ID0gY2VsbEhlaWdodDtcclxuICAgICAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XHJcbiAgICAgICAgICAgICAgLy8gX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xyXG4gICAgICAgICAgICAgIF90aGlzLmFkZFdvcmQoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgYWRkV29yZCgpe1xyXG4gICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL3JhbmQtd29yZCcsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgLy8gbGV0IGNlbGxXaWR0aCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjEwNTtcclxuICAgICAgICAgIC8vIGxldCBjZWxsSGVpZ2h0ID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjIxNTtcclxuICAgICAgICAgIC8vIGxldCBzcGFjaW5nWCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjAyMjtcclxuICAgICAgICAgIC8vIGxldCBzcGFjaW5nWSA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC4wNDU7XHJcblxyXG4gICAgICAgICAgLy8g5qC55o2uTWFwVG9vbHPnlJ/miJDnm7jlupTnmoTpgZPlhbdcclxuICAgICAgICAgIC8vIF90aGlzLnRvb2xzQXJyYXkgPSBbXTtcclxuICAgICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgIHZhciB0b3RhbCA9IGRhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhUT09MUykgXHJcblxyXG4gICAgICAgICAgdmFyIGZpID0gY2MuZmFkZUluKDIpLy/muJDmmL7mlYjmnpxcclxuICAgICAgICAgIF90aGlzLmNvbnRlbnQucnVuQWN0aW9uKGZpKTtcclxuICAgICAgICAgIHZhciBmbyA9IGNjLmZhZGVPdXQoMSkvL+a4kOmakOaViOaenFxyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5ydW5BY3Rpb24oZm8pO1xyXG4gICAgICAgICAgLy/np7vpmaToioLngrlcclxuICAgICAgICAgIF90aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgIF90aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAvL+a3u+WKoOiKgueCuVxyXG4gICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRvdGFsOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSkgXHJcbiAgICAgICAgICAgICAgbGV0IHRvb2wgPSBjYy5pbnN0YW50aWF0ZShfdGhpcy5wZXJzb24pO1xyXG4gICAgICAgICAgICAgIHRvb2wuZ2V0Q29tcG9uZW50KCd3b3JkVG9vbHMnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgICAgLy8gX3RoaXMudG9vbHNBcnJheS5wdXNoKHRvb2wpO1xyXG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuYWRkQ2hpbGQodG9vbCk7ICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8g5a6a5LmJY29udGVudOa7muWKqOadoemrmOW6plxyXG4gICAgICAgICAgLy8gbGV0IHNjb3JsbGhlaWdodCA9ICBfdGhpcy5jb250ZW50LnBhcmVudDtcclxuICAgICAgICAgIC8vIC8v6K6h566X5rua5Yqo5p2h6auY5bqmXHJcbiAgICAgICAgICAvLyBsZXQgIGhlaWdodCA9ICAoY2VsbEhlaWdodCtzcGFjaW5nWSkqKCBNYXRoLmNlaWwodG90YWwvMikpO1xyXG4gICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coaGVpZ2h0KTtcclxuICAgICAgICAgIC8vIC8vIHNjb3JsbGhlaWdodC5kZXNpZ25SZXNvbHV0aW9uICA9IG5ldyBjYy5TaXplKDYwMCwgaGVpZ2h0KTtcclxuICAgICAgICAgIC8vIHNjb3JsbGhlaWdodC5zZXRDb250ZW50U2l6ZSg2MDAsaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVG91Y2hFdmVudChub2RlXzEpIHtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgfSxcclxuICAgIC8vIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X3kgPSB0aGlzLmNvbnRlbnQueTtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgLy8g5b2T5YmN5oiR5LusMjTkuKpJdGVt5Yqg6L2955qEIDEwMOmhueaVsOaNrumHjOmdoueahOi1t+Wni+aVsOaNruiusOW9leeahOe0ouW8lTtcclxuICAgIC8vICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyAvLyDku47ov5nkuKrntKLlvJXlvIDlp4vvvIzliqDovb3mlbDmja7orrDlvZXliLDmiJHku6znmoTmu5rliqjliJfooajph4zpnaLnmoTpgInpoblcclxuICAgIC8vIGxvYWRfcmVjb3JkOiBmdW5jdGlvbihzdGFydF9pbmRleCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSBzdGFydF9pbmRleDtcclxuXHJcbiAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMub3B0X2l0ZW1fc2V0W2ldLmdldENoaWxkQnlOYW1lKFwic3JjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAvLyAgICAgICAgIC8vIOaYvuekuuaIkeS7rOeahOiusOW9lTtcclxuICAgIC8vICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy52YWx1ZV9zZXRbc3RhcnRfaW5kZXggKyBpXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIG9uX3Njcm9sbF9lbmRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gdHJ1ZTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gc2Nyb2xsdmVpd19sb2FkX3JlY29kZTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgIC8vIOWQkeS4i+WKoOi9veS6hlxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPCB0aGlzLnZhbHVlX3NldC5sZW5ndGggJiZcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgPj0gdGhpcy5zdGFydF95ICsgdGhpcy5QQUdFX05VTSAqIDIgKiB0aGlzLk9QVF9IRUlHSFQpIHsgLy8g5Yqo5oCB5Yqg6L29XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlOyAvLyDmmoLml7blhbPpl63lm57lvLnmlYjmnpxcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIGRvd25fbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCArPSBkb3duX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA+IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG91dF9sZW4gPSB0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgLSB0aGlzLnZhbHVlX3NldC5sZW5ndGg7XHJcbiAgICAvLyAgICAgICAgICAgICBkb3duX2xvYWRlZCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgLT0gKGRvd25fbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8g5ZCR5LiK5Yqg6L29XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPiAwICYmIHRoaXMuY29udGVudC55IDw9IHRoaXMuc3RhcnRfeSkge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgdXBfbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSB1cF9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4IDwgMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdXBfbG9hZGVkICs9IHRoaXMuc3RhcnRfaW5kZXg7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgKz0gKHVwX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIGVuZCBcclxuICAgIC8vIH0sXHJcbiAgICAvLyAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iXX0=