
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/fighting/score_fighting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed8ebeqhB9JK7/jr/MBPGZr', 'score_fighting');
// Script/fighting/score_fighting.js

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
    home: cc.Node,
    reload: cc.Node,
    back: cc.Node,
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
    // httpRequest.playGameLoading()
    this.spawnTools(); // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
  },
  spawnTools: function spawnTools() {
    var _this = this;

    var figthing_remote_url = cc.sys.localStorage.getItem('figthing_remote_url'); //读取数据--战斗记录

    if (figthing_remote_url == '') {
      httpRequest.playGame('map/诸天地图');
    } else {
      var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
      cc.loader.load({
        url: remoteUrl
      }, function (err, data) {
        console.log(data); // _this.addWordMap(results) //生成生物
        // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
        //移除节点

        _this.content.removeAllChildren();

        _this.content.destroyAllChildren(); // 初始化阵容


        _this.init_postion(data.data.poition_my, data.data.biolgy_state); //生成生物--position_my


        _this.init_postion(data.data.poition_enemy, data.data.biolgy_state); //生成生物--position_ememy


        _this.addMapPic(data); //生成地图

      });
    }
  },
  //生成地图
  addMapPic: function addMapPic(data) {
    var _this = this;

    var map_pic = data.data['map_pic'];
    var remoteUrl = httpRequest.httpUrl(map_pic);
    cc.loader.load({
      url: remoteUrl
    }, function (err, texture) {
      _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
  },
  //生成生物
  init_postion: function init_postion(postion, biolgy_state) {
    var _this = this; // 根据MapTools生成相应的道具
    // _this.toolsArray = [];


    var TOOLS = postion;
    var total = postion.length; // var fi = cc.fadeIn(2)//渐显效果
    // _this.content.runAction(fi);
    // var fo = cc.fadeOut(1)//渐隐效果
    // _this.content.runAction(fo);
    //添加节点

    for (var i = 0; i < total; i++) {
      // console.log(i) 
      //死亡移除map_status
      var map = TOOLS[i]; // if(map.map_status==1){
      // console.log(map.x)
      // console.log(map.y)

      var tool = cc.instantiate(_this.person);
      console.log(map);
      tool.getComponent('fightingTools').initInfo(map.biology, biolgy_state);
      tool.x = map.x;
      tool.y = map.y; // _this.toolsArray.push(tool);
      // tool.setPosition(map.x,map.y);  

      _this.content.addChild(tool); // }

    }
  },
  reloadWord: function reloadWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
      //写入地图数据
      _this.addWordMap(data);
    });
  },
  back_map: function back_map() {
    cc.director.loadScene('map/诸天地图');
  },
  back_home: function back_home() {
    cc.director.loadScene('大厅');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmaWdodGluZ1xcc2NvcmVfZmlnaHRpbmcuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJob21lIiwicmVsb2FkIiwiYmFjayIsInRlc3Rfc2Nyb2xsVmlldyIsInR5cGUiLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwic3Bhd25Ub29scyIsIl90aGlzIiwiZmlndGhpbmdfcmVtb3RlX3VybCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwbGF5R2FtZSIsInJlbW90ZVVybCIsImh0dHBVcmxKc29uIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJpbml0X3Bvc3Rpb24iLCJwb2l0aW9uX215IiwiYmlvbGd5X3N0YXRlIiwicG9pdGlvbl9lbmVteSIsImFkZE1hcFBpYyIsIm1hcF9waWMiLCJodHRwVXJsIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJwb3N0aW9uIiwiVE9PTFMiLCJ0b3RhbCIsImxlbmd0aCIsImkiLCJtYXAiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsImJpb2xvZ3kiLCJ4IiwieSIsImFkZENoaWxkIiwicmVsb2FkV29yZCIsImh0dHBQb3N0IiwiYWRkV29yZE1hcCIsImJhY2tfbWFwIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJiYWNrX2hvbWUiLCJhZGRUb3VjaEV2ZW50Iiwibm9kZV8xIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRv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LFVBQTlDLEVBQTBELElBQTFEO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVckUsRUFBRSxDQUFDSyxJQUFILENBQVFpRSxTQUFSLENBQWtCRyxVQUE1QixFQUF3QyxLQUFLQyxTQUE3QyxFQUF3RCxJQUF4RDtBQUNBTixJQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVXJFLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRaUUsU0FBUixDQUFrQkssU0FBNUIsRUFBdUMsS0FBS0MsUUFBNUMsRUFBc0QsSUFBdEQ7QUFDRCxHQXhKRSxDQXlKTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUEzTkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vIOS4lueVjOaTjeS9nCAgXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcIi4uL2h0dHBcIik7IFxyXG52YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG52YXIgcGFyYW1zID1bXTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy/mtYvor5VpdGVtXHJcbiAgICAgIC8vICAgY29udGVudDoge1xyXG4gICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgLy8gICB9LFxyXG5cclxuICAgICAgLy8gcGVyc29uOiB7XHJcbiAgICAgIC8vICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgLy8gfSxcclxuICBcclxuICAgICAgY29udGVudDogY2MuTm9kZSxcclxuICAgICAgcGVyc29uOiBjYy5QcmVmYWIsXHJcbiAgICAgIGhvbWU6IGNjLk5vZGUsXHJcbiAgICAgIHJlbG9hZDogY2MuTm9kZSxcclxuICAgICAgYmFjazogY2MuTm9kZSxcclxuICAgICAgLy/liJfooahcclxuICAgICAgdGVzdF9zY3JvbGxWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5TY3JvbGxWaWV3XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v57+76aG15a655ZmoXHJcbiAgICAgIHRlc3RfcGFnZVZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlBhZ2VWaWV3XHJcbiAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBwZXJzb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBlcnNvbik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVuPXBlcnNvblxyXG4gICAgICAgIC8vICAgICAvLyBwZXJzb24ucGFyZW50ID0gdGhpcy5jb250ZW50O1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmFkZFRvdWNoRXZlbnQocGVyc29uKTsgIC8v5re75Yqg6Kem5pG45LqL5Lu2XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gdGhpcy52YWx1ZV9zZXQgPSBbXTtcclxuICAgICAgICAvLyAvLyDlpoLmnpzkvaDov5nph4zmmK/mjpLooYzmppzvvIzpgqPkuYjkvaDlsLFwdXNo5o6S6KGM5qac55qE5pWw5o2uO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDE7IGkgPD0gMTAwOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmFsdWVfc2V0LnB1c2goaSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmNvbnRlbnQgPSB0aGlzLnNjcm9sbF92aWV3LmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gdGhpcy5vcHRfaXRlbV9zZXQgPSBbXTtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5QQUdFX05VTSAqIDM7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1fcHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm9wdF9pdGVtX3NldC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgLy8gaHR0cFJlcXVlc3QucGxheUdhbWVMb2FkaW5nKClcclxuICAgICAgdGhpcy5zcGF3blRvb2xzKClcclxuICAgICAgICAvLyB0aGlzLnNjcm9sbF92aWV3Lm5vZGUub24oXCJzY3JvbGwtZW5kZWRcIiwgdGhpcy5vbl9zY3JvbGxfZW5kZWQuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgdmFyIGZpZ3RoaW5nX3JlbW90ZV91cmwgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpZ3RoaW5nX3JlbW90ZV91cmwnKTsgLy/or7vlj5bmlbDmja4tLeaImOaWl+iusOW9lVxyXG4gICAgICBpZihmaWd0aGluZ19yZW1vdGVfdXJsPT0nJyl7XHJcbiAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsSnNvbihmaWd0aGluZ19yZW1vdGVfdXJsKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsIH0sIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpIFxyXG4gICAgICAgICAgLy8gX3RoaXMuYWRkV29yZE1hcChyZXN1bHRzKSAvL+eUn+aIkOeUn+eJqVxyXG4gICAgICAgICAgLy8gX3NlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKVxyXG4gICAgICAgICAgLy/np7vpmaToioLngrlcclxuICAgICAgICAgIF90aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgIF90aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgLy8g5Yid5aeL5YyW6Zi15a65XHJcbiAgICAgICAgICBfdGhpcy5pbml0X3Bvc3Rpb24oZGF0YS5kYXRhLnBvaXRpb25fbXksZGF0YS5kYXRhLmJpb2xneV9zdGF0ZSkgLy/nlJ/miJDnlJ/niaktLXBvc2l0aW9uX215XHJcbiAgICAgICAgICBfdGhpcy5pbml0X3Bvc3Rpb24oZGF0YS5kYXRhLnBvaXRpb25fZW5lbXksZGF0YS5kYXRhLmJpb2xneV9zdGF0ZSkgLy/nlJ/miJDnlJ/niaktLXBvc2l0aW9uX2VtZW15XHJcbiAgICAgICAgICBfdGhpcy5hZGRNYXBQaWMoZGF0YSkgLy/nlJ/miJDlnLDlm75cclxuICAgICAgfSk7ICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/nlJ/miJDlnLDlm75cclxuICAgIGFkZE1hcFBpYyhkYXRhKXtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciAgbWFwX3BpYyA9ZGF0YS5kYXRhWydtYXBfcGljJ107XHJcbiAgICAgICAgdmFyIHJlbW90ZVVybCA9IGh0dHBSZXF1ZXN0Lmh0dHBVcmwobWFwX3BpYyk7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7ICBcclxuICAgICAgICAgIF90aGlzLmhvbWUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy/nlJ/miJDnlJ/nialcclxuICAgIGluaXRfcG9zdGlvbihwb3N0aW9uLGJpb2xneV9zdGF0ZSl7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyDmoLnmja5NYXBUb29sc+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgIC8vIF90aGlzLnRvb2xzQXJyYXkgPSBbXTtcclxuICAgICAgICBsZXQgVE9PTFMgPSBwb3N0aW9uO1xyXG4gICAgICAgIHZhciB0b3RhbCA9IHBvc3Rpb24ubGVuZ3RoO1xyXG4gICAgICAgIC8vIHZhciBmaSA9IGNjLmZhZGVJbigyKS8v5riQ5pi+5pWI5p6cXHJcbiAgICAgICAgLy8gX3RoaXMuY29udGVudC5ydW5BY3Rpb24oZmkpO1xyXG4gICAgICAgIC8vIHZhciBmbyA9IGNjLmZhZGVPdXQoMSkvL+a4kOmakOaViOaenFxyXG4gICAgICAgIC8vIF90aGlzLmNvbnRlbnQucnVuQWN0aW9uKGZvKTtcclxuICAgICAgICAvL+a3u+WKoOiKgueCuVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0b3RhbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpIFxyXG4gICAgICAgICAgICAvL+atu+S6oeenu+mZpG1hcF9zdGF0dXNcclxuICAgICAgICAgICAgdmFyIG1hcCA9VE9PTFNbaV07XHJcbiAgICAgICAgICAgIC8vIGlmKG1hcC5tYXBfc3RhdHVzPT0xKXtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXAueClcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXAueSlcclxuICAgICAgICAgICAgICBsZXQgdG9vbCA9IGNjLmluc3RhbnRpYXRlKF90aGlzLnBlcnNvbik7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobWFwKVxyXG4gICAgICAgICAgICAgIHRvb2wuZ2V0Q29tcG9uZW50KCdmaWdodGluZ1Rvb2xzJykuaW5pdEluZm8obWFwLmJpb2xvZ3ksYmlvbGd5X3N0YXRlKTtcclxuICAgICAgICAgICAgICB0b29sLng9bWFwLnhcclxuICAgICAgICAgICAgICB0b29sLnk9bWFwLnlcclxuICAgICAgICAgICAgICAvLyBfdGhpcy50b29sc0FycmF5LnB1c2godG9vbCk7XHJcbiAgICAgICAgICAgICAgLy8gdG9vbC5zZXRQb3NpdGlvbihtYXAueCxtYXAueSk7ICBcclxuICAgICAgICAgICAgICBfdGhpcy5jb250ZW50LmFkZENoaWxkKHRvb2wpOyAgIFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbG9hZFdvcmQoKXtcclxuICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpd29yZC9tYXAtd29yZCcsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvL+WGmeWFpeWcsOWbvuaVsOaNrlxyXG4gICAgICAgIF90aGlzLmFkZFdvcmRNYXAoZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGJhY2tfbWFwKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgfSxcclxuICAgIGJhY2tfaG9tZSgpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ+Wkp+WOhScpO1xyXG4gICAgfSxcclxuICAgIGFkZFRvdWNoRXZlbnQobm9kZV8xKSB7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgIH0sXHJcbiAgICAvLyBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF95ID0gdGhpcy5jb250ZW50Lnk7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IC8vIOW9k+WJjeaIkeS7rDI05LiqSXRlbeWKoOi9veeahCAxMDDpobnmlbDmja7ph4zpnaLnmoTotbflp4vmlbDmja7orrDlvZXnmoTntKLlvJU7XHJcbiAgICAvLyAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gLy8g5LuO6L+Z5Liq57Si5byV5byA5aeL77yM5Yqg6L295pWw5o2u6K6w5b2V5Yiw5oiR5Lus55qE5rua5Yqo5YiX6KGo6YeM6Z2i55qE6YCJ6aG5XHJcbiAgICAvLyBsb2FkX3JlY29yZDogZnVuY3Rpb24oc3RhcnRfaW5kZXgpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gc3RhcnRfaW5kZXg7XHJcblxyXG4gICAgLy8gICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgLy8gICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLm9wdF9pdGVtX3NldFtpXS5nZXRDaGlsZEJ5TmFtZShcInNyY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgLy8gICAgICAgICAvLyDmmL7npLrmiJHku6znmoTorrDlvZU7XHJcbiAgICAvLyAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRoaXMudmFsdWVfc2V0W3N0YXJ0X2luZGV4ICsgaV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBvbl9zY3JvbGxfZW5kZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IHRydWU7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHNjcm9sbHZlaXdfbG9hZF9yZWNvZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAvLyDlkJHkuIvliqDovb3kuoZcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIDwgdGhpcy52YWx1ZV9zZXQubGVuZ3RoICYmXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ID49IHRoaXMuc3RhcnRfeSArIHRoaXMuUEFHRV9OVU0gKiAyICogdGhpcy5PUFRfSEVJR0hUKSB7IC8vIOWKqOaAgeWKoOi9vVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTsgLy8g5pqC5pe25YWz6Zet5Zue5by55pWI5p6cXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciBkb3duX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggKz0gZG93bl9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPiB0aGlzLnZhbHVlX3NldC5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBvdXRfbGVuID0gdGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIC0gdGhpcy52YWx1ZV9zZXQubGVuZ3RoO1xyXG4gICAgLy8gICAgICAgICAgICAgZG93bl9sb2FkZWQgLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55IC09IChkb3duX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIOWQkeS4iuWKoOi9vVxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ID4gMCAmJiB0aGlzLmNvbnRlbnQueSA8PSB0aGlzLnN0YXJ0X3kpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIHVwX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gdXBfbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA8IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIHVwX2xvYWRlZCArPSB0aGlzLnN0YXJ0X2luZGV4O1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ICs9ICh1cF9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBlbmQgXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl19