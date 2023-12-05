
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/scoretrump.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6b99ZAVAJJtbvT/VopdNIP', 'scoretrump');
// Script/scence/scoretrump.js

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
        var cellWidth = _this.content.width * 0.2;
        var cellHeight = _this.content.height * 0.4;
        var spacingX = _this.content.width * 0.6;
        var spacingY = _this.content.height * 1;
        _this.content.getComponent(cc.Layout).cellSize.width = cellWidth;
        _this.content.getComponent(cc.Layout).cellSize.height = cellHeight;
        _this.content.getComponent(cc.Layout).spacingX = spacingX;
        _this.content.getComponent(cc.Layout).spacingY = spacingY;

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
        tool.getComponent('MapTools').initInfo(TOOLS[i]); // _this.toolsArray.push(tool);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JldHJ1bXAuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJ0ZXN0X3Njcm9sbFZpZXciLCJ0eXBlIiwiU2Nyb2xsVmlldyIsInRlc3RfcGFnZVZpZXciLCJQYWdlVmlldyIsIm9uTG9hZCIsInNwYXduVG9vbHMiLCJfdGhpcyIsImh0dHBQb3N0IiwiZGF0YSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiY2VsbFdpZHRoIiwid2lkdGgiLCJjZWxsSGVpZ2h0IiwiaGVpZ2h0Iiwic3BhY2luZ1giLCJzcGFjaW5nWSIsImdldENvbXBvbmVudCIsIkxheW91dCIsImNlbGxTaXplIiwiYWRkV29yZCIsIlRPT0xTIiwidG90YWwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmkiLCJmYWRlSW4iLCJydW5BY3Rpb24iLCJmbyIsImZhZGVPdXQiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsImkiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsImFkZENoaWxkIiwiYWRkVG91Y2hFdmVudCIsIm5vZGVfMSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoTW92ZSIsIlRPVUNIX0VORCIsInRvdWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLElBQUlHLE1BQU0sR0FBRSxFQUFaO0FB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QyxNQWxKVCxFQWtKaUI7QUFDbEJBLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVakQsRUFBRSxDQUFDSyxJQUFILENBQVE2QyxTQUFSLENBQWtCQyxXQUE1QixFQUF5QyxLQUFLQyxVQUE5QyxFQUEwRCxJQUExRDtBQUNBSixJQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVWpELEVBQUUsQ0FBQ0ssSUFBSCxDQUFRNkMsU0FBUixDQUFrQkcsVUFBNUIsRUFBd0MsS0FBS0MsU0FBN0MsRUFBd0QsSUFBeEQ7QUFDQU4sSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVqRCxFQUFFLENBQUNLLElBQUgsQ0FBUTZDLFNBQVIsQ0FBa0JLLFNBQTVCLEVBQXVDLEtBQUtDLFFBQTVDLEVBQXNELElBQXREO0FBQ0QsR0F0SkUsQ0F1Skw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBek5LLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyDkuJbnlYzmk43kvZwgIFxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxudmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxudmFyIHBhcmFtcyA9W107XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIC8v5rWL6K+VaXRlbVxyXG4gICAgICAvLyAgIGNvbnRlbnQ6IHtcclxuICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIC8vICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgIC8vICAgfSxcclxuXHJcbiAgICAgIC8vIHBlcnNvbjoge1xyXG4gICAgICAvLyAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIC8vICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgIC8vIH0sXHJcblxyXG4gICAgICBjb250ZW50OiBjYy5Ob2RlLFxyXG4gICAgICBwZXJzb246IGNjLlByZWZhYixcclxuXHJcbiAgICAgIC8v5YiX6KGoXHJcbiAgICAgIHRlc3Rfc2Nyb2xsVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlld1xyXG4gICAgICB9LFxyXG4gICAgICAvL+e/u+mhteWuueWZqFxyXG4gICAgICB0ZXN0X3BhZ2VWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5QYWdlVmlld1xyXG4gICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBwZXJzb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBlcnNvbik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVuPXBlcnNvblxyXG4gICAgICAgIC8vICAgICAvLyBwZXJzb24ucGFyZW50ID0gdGhpcy5jb250ZW50O1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmFkZFRvdWNoRXZlbnQocGVyc29uKTsgIC8v5re75Yqg6Kem5pG45LqL5Lu2XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gdGhpcy52YWx1ZV9zZXQgPSBbXTtcclxuICAgICAgICAvLyAvLyDlpoLmnpzkvaDov5nph4zmmK/mjpLooYzmppzvvIzpgqPkuYjkvaDlsLFwdXNo5o6S6KGM5qac55qE5pWw5o2uO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDE7IGkgPD0gMTAwOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmFsdWVfc2V0LnB1c2goaSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmNvbnRlbnQgPSB0aGlzLnNjcm9sbF92aWV3LmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gdGhpcy5vcHRfaXRlbV9zZXQgPSBbXTtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5QQUdFX05VTSAqIDM7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1fcHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm9wdF9pdGVtX3NldC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgdGhpcy5zcGF3blRvb2xzKClcclxuICAgICAgICAvLyB0aGlzLnNjcm9sbF92aWV3Lm5vZGUub24oXCJzY3JvbGwtZW5kZWRcIiwgdGhpcy5vbl9zY3JvbGxfZW5kZWQuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcblxyXG4gICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICdwYWdlJzogMSxcclxuICAgICAgICAgICAgICAncGFnZVNpemUnOiAxMixcclxuICAgICAgfTtcclxuICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvaW5kZXgnLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coX3RoaXMuY29udGVudClcclxuICAgICAgICAgIGlmKGRhdGEuZGF0YSl7XHJcbiAgICAgICAgICAgICAgLy/ot7PovazliLDkuJbnlYxcclxuICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcC/or7jlpKnlnLDlm74nKTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIC8v55Sf5oiQ5LiW55WMXHJcbiAgICAgICAgICAgICAgbGV0IGNlbGxXaWR0aCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjI7XHJcbiAgICAgICAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuNDtcclxuICAgICAgICAgICAgICBsZXQgc3BhY2luZ1ggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC42O1xyXG4gICAgICAgICAgICAgIGxldCBzcGFjaW5nWSA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMTtcclxuICAgIFxyXG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICAgICAgX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5jZWxsU2l6ZS5oZWlnaHQgPSBjZWxsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgICAgICBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcbiAgICAgICAgICAgICAgX3RoaXMuYWRkV29yZCgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBhZGRXb3JkKCl7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvcmFuZC13b3JkJywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAvLyBsZXQgY2VsbFdpZHRoID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMTA1O1xyXG4gICAgICAgICAgLy8gbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMjE1O1xyXG4gICAgICAgICAgLy8gbGV0IHNwYWNpbmdYID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMDIyO1xyXG4gICAgICAgICAgLy8gbGV0IHNwYWNpbmdZID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjA0NTtcclxuXHJcbiAgICAgICAgICAvLyDmoLnmja5NYXBUb29sc+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgICAgLy8gX3RoaXMudG9vbHNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgbGV0IFRPT0xTID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgdmFyIHRvdGFsID0gZGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFRPT0xTKSBcclxuXHJcbiAgICAgICAgICB2YXIgZmkgPSBjYy5mYWRlSW4oMikvL+a4kOaYvuaViOaenFxyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5ydW5BY3Rpb24oZmkpO1xyXG4gICAgICAgICAgdmFyIGZvID0gY2MuZmFkZU91dCgxKS8v5riQ6ZqQ5pWI5p6cXHJcbiAgICAgICAgICBfdGhpcy5jb250ZW50LnJ1bkFjdGlvbihmbyk7XHJcbiAgICAgICAgICAvL+enu+mZpOiKgueCuVxyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgIC8v5re75Yqg6IqC54K5XHJcbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dG90YWw7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKSBcclxuICAgICAgICAgICAgICBsZXQgdG9vbCA9IGNjLmluc3RhbnRpYXRlKF90aGlzLnBlcnNvbik7XHJcbiAgICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ01hcFRvb2xzJykuaW5pdEluZm8oVE9PTFNbaV0pO1xyXG4gICAgICAgICAgICAgIC8vIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICBfdGhpcy5jb250ZW50LmFkZENoaWxkKHRvb2wpOyAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOWumuS5iWNvbnRlbnTmu5rliqjmnaHpq5jluqZcclxuICAgICAgICAgIC8vIGxldCBzY29ybGxoZWlnaHQgPSAgX3RoaXMuY29udGVudC5wYXJlbnQ7XHJcbiAgICAgICAgICAvLyAvL+iuoeeul+a7muWKqOadoemrmOW6plxyXG4gICAgICAgICAgLy8gbGV0ICBoZWlnaHQgPSAgKGNlbGxIZWlnaHQrc3BhY2luZ1kpKiggTWF0aC5jZWlsKHRvdGFsLzIpKTtcclxuICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGhlaWdodCk7XHJcbiAgICAgICAgICAvLyAvLyBzY29ybGxoZWlnaHQuZGVzaWduUmVzb2x1dGlvbiAgPSBuZXcgY2MuU2l6ZSg2MDAsIGhlaWdodCk7XHJcbiAgICAgICAgICAvLyBzY29ybGxoZWlnaHQuc2V0Q29udGVudFNpemUoNjAwLGhlaWdodCk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFRvdWNoRXZlbnQobm9kZV8xKSB7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgIH0sXHJcbiAgICAvLyBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF95ID0gdGhpcy5jb250ZW50Lnk7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IC8vIOW9k+WJjeaIkeS7rDI05LiqSXRlbeWKoOi9veeahCAxMDDpobnmlbDmja7ph4zpnaLnmoTotbflp4vmlbDmja7orrDlvZXnmoTntKLlvJU7XHJcbiAgICAvLyAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gLy8g5LuO6L+Z5Liq57Si5byV5byA5aeL77yM5Yqg6L295pWw5o2u6K6w5b2V5Yiw5oiR5Lus55qE5rua5Yqo5YiX6KGo6YeM6Z2i55qE6YCJ6aG5XHJcbiAgICAvLyBsb2FkX3JlY29yZDogZnVuY3Rpb24oc3RhcnRfaW5kZXgpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gc3RhcnRfaW5kZXg7XHJcblxyXG4gICAgLy8gICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgLy8gICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLm9wdF9pdGVtX3NldFtpXS5nZXRDaGlsZEJ5TmFtZShcInNyY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgLy8gICAgICAgICAvLyDmmL7npLrmiJHku6znmoTorrDlvZU7XHJcbiAgICAvLyAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRoaXMudmFsdWVfc2V0W3N0YXJ0X2luZGV4ICsgaV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBvbl9zY3JvbGxfZW5kZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IHRydWU7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHNjcm9sbHZlaXdfbG9hZF9yZWNvZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAvLyDlkJHkuIvliqDovb3kuoZcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIDwgdGhpcy52YWx1ZV9zZXQubGVuZ3RoICYmXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ID49IHRoaXMuc3RhcnRfeSArIHRoaXMuUEFHRV9OVU0gKiAyICogdGhpcy5PUFRfSEVJR0hUKSB7IC8vIOWKqOaAgeWKoOi9vVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTsgLy8g5pqC5pe25YWz6Zet5Zue5by55pWI5p6cXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciBkb3duX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggKz0gZG93bl9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPiB0aGlzLnZhbHVlX3NldC5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBvdXRfbGVuID0gdGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIC0gdGhpcy52YWx1ZV9zZXQubGVuZ3RoO1xyXG4gICAgLy8gICAgICAgICAgICAgZG93bl9sb2FkZWQgLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55IC09IChkb3duX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIOWQkeS4iuWKoOi9vVxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ID4gMCAmJiB0aGlzLmNvbnRlbnQueSA8PSB0aGlzLnN0YXJ0X3kpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIHVwX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gdXBfbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA8IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIHVwX2xvYWRlZCArPSB0aGlzLnN0YXJ0X2luZGV4O1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ICs9ICh1cF9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBlbmQgXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl19