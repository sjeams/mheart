
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

    var map_int = cc.sys.localStorage.getItem('figthing_map_int'); //读取数据

    var userid = cc.sys.localStorage.getItem('figthing_userid'); //读取数据

    if (map_int == '' && userid == '') {
      httpRequest.playGame('map/诸天地图');
    } else {
      var params = {
        'map_int': map_int,
        'userid': userid
      };
      httpRequest.httpPost('/app/app-apinew/fight', params, function (data) {
        // var sn_id ='/app_resources/fighting/history/'+data.data+'.json';
        var remoteUrl = httpRequest.httpUrlJson(data.data.sid); // cc.assetManager.loadRemote({});  

        cc.loader.load({
          url: remoteUrl
        }, function (err, results) {
          _this.addMapPic(results); //生成地图
          // _this.addWordMap(results) //生成生物
          // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)

        });
      }); // if(!data.data){
      //     //刷新地图
      //     // cc.director.loadScene('map/诸天地图');
      //     _this.reloadWord()//刷新世界地图
      // }else{
      //     //生成世界
      //     // let cellWidth = _this.content.width * 0.105;
      //     // let cellHeight = _this.content.height * 0.215;
      //     // let spacingX = _this.content.width * 0.022;
      //     // let spacingY = _this.content.height * 0.045;
      //     // _this.content.getComponent(cc.Layout).cellSize.width = cellWidth;
      //     // _this.content.getComponent(cc.Layout).cellSize.height = cellHeight;
      //     // _this.content.getComponent(cc.Layout).spacingX = spacingX;
      //     // _this.content.getComponent(cc.Layout).spacingY = spacingY;
      //     _this.addMapPic(data) //生成地图
      //     _this.addWordMap(data) //生成生物
      // }
    }
  },
  //生成地图
  addMapPic: function addMapPic(data) {
    var _this = this;

    var map_pic = data.data['map_pic'];
    var remoteUrl = httpRequest.httpUrl(map_pic);
    console.log(remoteUrl);
    cc.loader.load({
      url: remoteUrl
    }, function (err, texture) {
      _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
  },
  reloadWord: function reloadWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
      //写入地图数据
      _this.addWordMap(data);
    });
  },
  //生成生物
  addWordMap: function addWordMap(data) {
    console.log(data);

    var _this = this; // 根据MapTools生成相应的道具
    // _this.toolsArray = [];


    var TOOLS = data.data.user_in_word_map;
    var total = data.data.user_in_word_map.length; // var fi = cc.fadeIn(2)//渐显效果
    // _this.content.runAction(fi);
    // var fo = cc.fadeOut(1)//渐隐效果
    // _this.content.runAction(fo);
    //移除节点

    _this.content.removeAllChildren();

    _this.content.destroyAllChildren(); //添加节点


    for (var i = 0; i < total; i++) {
      // console.log(i) 
      //死亡移除map_status
      var map = TOOLS[i];

      if (map.map_status == 1) {
        // console.log(map.x)
        // console.log(map.y)
        var tool = cc.instantiate(_this.person);
        console.log(map);
        tool.getComponent('fightingTools').initInfo(map);
        tool.x = map.x;
        tool.y = map.y; // _this.toolsArray.push(tool);
        // tool.setPosition(map.x,map.y);  

        _this.content.addChild(tool);
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmaWdodGluZ1xcc2NvcmVfZmlnaHRpbmcuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJob21lIiwicmVsb2FkIiwiYmFjayIsInRlc3Rfc2Nyb2xsVmlldyIsInR5cGUiLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwic3Bhd25Ub29scyIsIl90aGlzIiwibWFwX2ludCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyaWQiLCJwbGF5R2FtZSIsImh0dHBQb3N0IiwiZGF0YSIsInJlbW90ZVVybCIsImh0dHBVcmxKc29uIiwic2lkIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsInJlc3VsdHMiLCJhZGRNYXBQaWMiLCJtYXBfcGljIiwiaHR0cFVybCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0dXJlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInJlbG9hZFdvcmQiLCJhZGRXb3JkTWFwIiwiVE9PTFMiLCJ1c2VyX2luX3dvcmRfbWFwIiwidG90YWwiLCJsZW5ndGgiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsImkiLCJtYXAiLCJtYXBfc3RhdHVzIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJ4IiwieSIsImFkZENoaWxkIiwiYmFja19tYXAiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImJhY2tfaG9tZSIsImFkZFRvdWNoRXZlbnQiLCJub2RlXzEiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJ0b3VjaE1vdmUi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QUNUakUsSUFBQUEsRUFBRSxDQUFDK0QsUUFBSCxDQUFZQyxTQUFaLENBQXNCLElBQXRCO0FBQ0QsR0FuTEk7QUFvTExFLEVBQUFBLGFBcExLLHlCQW9MU0MsTUFwTFQsRUFvTGlCO0FBQ2xCQSxJQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVXBFLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRZ0UsU0FBUixDQUFrQkMsV0FBNUIsRUFBeUMsS0FBS0MsVUFBOUMsRUFBMEQsSUFBMUQ7QUFDQUosSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVwRSxFQUFFLENBQUNLLElBQUgsQ0FBUWdFLFNBQVIsQ0FBa0JHLFVBQTVCLEVBQXdDLEtBQUtDLFNBQTdDLEVBQXdELElBQXhEO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVcEUsRUFBRSxDQUFDSyxJQUFILENBQVFnRSxTQUFSLENBQWtCSyxTQUE1QixFQUF1QyxLQUFLQyxRQUE1QyxFQUFzRCxJQUF0RDtBQUNELEdBeExFLENBeUxMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTNQSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8g5LiW55WM5pON5L2cICBcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiLi4vaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvL+a1i+ivlWl0ZW1cclxuICAgICAgLy8gICBjb250ZW50OiB7XHJcbiAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAvLyAgIH0sXHJcblxyXG4gICAgICAvLyBwZXJzb246IHtcclxuICAgICAgLy8gICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAvLyB9LFxyXG4gIFxyXG4gICAgICBjb250ZW50OiBjYy5Ob2RlLFxyXG4gICAgICBwZXJzb246IGNjLlByZWZhYixcclxuICAgICAgaG9tZTogY2MuTm9kZSxcclxuICAgICAgcmVsb2FkOiBjYy5Ob2RlLFxyXG4gICAgICBiYWNrOiBjYy5Ob2RlLFxyXG4gICAgICAvL+WIl+ihqFxyXG4gICAgICB0ZXN0X3Njcm9sbFZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXdcclxuICAgICAgfSxcclxuICAgICAgLy/nv7vpobXlrrnlmahcclxuICAgICAgdGVzdF9wYWdlVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuUGFnZVZpZXdcclxuICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHBlcnNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc29uKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW49cGVyc29uXHJcbiAgICAgICAgLy8gICAgIC8vIHBlcnNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuYWRkVG91Y2hFdmVudChwZXJzb24pOyAgLy/mt7vliqDop6bmkbjkuovku7ZcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB0aGlzLnZhbHVlX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIC8vIOWmguaenOS9oOi/memHjOaYr+aOkuihjOamnO+8jOmCo+S5iOS9oOWwsXB1c2jmjpLooYzmppznmoTmlbDmja47XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8PSAxMDA7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52YWx1ZV9zZXQucHVzaChpKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY29udGVudCA9IHRoaXMuc2Nyb2xsX3ZpZXcuY29udGVudDtcclxuICAgICAgICAvLyB0aGlzLm9wdF9pdGVtX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9wcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub3B0X2l0ZW1fc2V0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAvLyBodHRwUmVxdWVzdC5wbGF5R2FtZUxvYWRpbmcoKVxyXG4gICAgICB0aGlzLnNwYXduVG9vbHMoKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgdmFyIG1hcF9pbnQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpZ3RoaW5nX21hcF9pbnQnKTsgLy/or7vlj5bmlbDmja5cclxuICAgICAgdmFyIHVzZXJpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlndGhpbmdfdXNlcmlkJyk7IC8v6K+75Y+W5pWw5o2uXHJcbiAgICAgIGlmKG1hcF9pbnQ9PScnJiZ1c2VyaWQ9PScnKXtcclxuICAgICAgICAgaHR0cFJlcXVlc3QucGxheUdhbWUoJ21hcC/or7jlpKnlnLDlm74nKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAnbWFwX2ludCc6IG1hcF9pbnQsXHJcbiAgICAgICAgICAgICd1c2VyaWQnOiB1c2VyaWQsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaW5ldy9maWdodCcsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gdmFyIHNuX2lkID0nL2FwcF9yZXNvdXJjZXMvZmlnaHRpbmcvaGlzdG9yeS8nK2RhdGEuZGF0YSsnLmpzb24nO1xyXG4gICAgICAgICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsSnNvbihkYXRhLmRhdGEuc2lkKTtcclxuICAgICAgICAgICAgICAvLyBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh7fSk7ICBcclxuICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcclxuICAgXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGRNYXBQaWMocmVzdWx0cykgLy/nlJ/miJDlnLDlm75cclxuICAgICAgICAgICAgICAgIC8vIF90aGlzLmFkZFdvcmRNYXAocmVzdWx0cykgLy/nlJ/miJDnlJ/nialcclxuICAgICAgICAgICAgICAgICAgLy8gX3NlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pOyAgICAgICAgICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIGlmKCFkYXRhLmRhdGEpe1xyXG4gICAgICAgICAgICAvLyAgICAgLy/liLfmlrDlnLDlm75cclxuICAgICAgICAgICAgLy8gICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgICAgICAgICAvLyAgICAgX3RoaXMucmVsb2FkV29yZCgpLy/liLfmlrDkuJbnlYzlnLDlm75cclxuICAgICAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgICAgIC8vICAgICAvL+eUn+aIkOS4lueVjFxyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IGNlbGxXaWR0aCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjEwNTtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGxldCBjZWxsSGVpZ2h0ID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjIxNTtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGxldCBzcGFjaW5nWCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjAyMjtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGxldCBzcGFjaW5nWSA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC4wNDU7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgLy8gX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5jZWxsU2l6ZS53aWR0aCA9IGNlbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUuaGVpZ2h0ID0gY2VsbEhlaWdodDtcclxuICAgICAgICAgICAgLy8gICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgICAgLy8gICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1kgPSBzcGFjaW5nWTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICBfdGhpcy5hZGRNYXBQaWMoZGF0YSkgLy/nlJ/miJDlnLDlm75cclxuICAgICAgICAgICAgLy8gICAgIF90aGlzLmFkZFdvcmRNYXAoZGF0YSkgLy/nlJ/miJDnlJ/nialcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+eUn+aIkOWcsOWbvlxyXG4gICAgYWRkTWFwUGljKGRhdGEpe1xyXG4gICAgICAgIHZhciAgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciAgbWFwX3BpYyA9ZGF0YS5kYXRhWydtYXBfcGljJ107XHJcbiAgIFxyXG4gICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsKG1hcF9waWMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlbW90ZVVybCk7XHJcbiAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsIH0sIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHsgIFxyXG4gICAgICAgICAgICAgIF90aGlzLmhvbWUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVsb2FkV29yZCgpe1xyXG4gICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL21hcC13b3JkJywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8v5YaZ5YWl5Zyw5Zu+5pWw5o2uXHJcbiAgICAgICAgX3RoaXMuYWRkV29yZE1hcChkYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy/nlJ/miJDnlJ/nialcclxuICAgIGFkZFdvcmRNYXAoZGF0YSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpIFxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8g5qC55o2uTWFwVG9vbHPnlJ/miJDnm7jlupTnmoTpgZPlhbdcclxuICAgICAgICAvLyBfdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IFRPT0xTID0gZGF0YS5kYXRhLnVzZXJfaW5fd29yZF9tYXA7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gZGF0YS5kYXRhLnVzZXJfaW5fd29yZF9tYXAubGVuZ3RoO1xyXG4gIFxyXG4gICAgICAgIC8vIHZhciBmaSA9IGNjLmZhZGVJbigyKS8v5riQ5pi+5pWI5p6cXHJcbiAgICAgICAgLy8gX3RoaXMuY29udGVudC5ydW5BY3Rpb24oZmkpO1xyXG4gICAgICAgIC8vIHZhciBmbyA9IGNjLmZhZGVPdXQoMSkvL+a4kOmakOaViOaenFxyXG4gICAgICAgIC8vIF90aGlzLmNvbnRlbnQucnVuQWN0aW9uKGZvKTtcclxuICAgICAgICAvL+enu+mZpOiKgueCuVxyXG4gICAgICAgIF90aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBfdGhpcy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIC8v5re75Yqg6IqC54K5XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRvdGFsOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSkgXHJcbiAgICAgICAgICAgIC8v5q275Lqh56e76ZmkbWFwX3N0YXR1c1xyXG4gICAgICAgICAgICB2YXIgbWFwID1UT09MU1tpXTtcclxuICAgICAgICAgICAgaWYobWFwLm1hcF9zdGF0dXM9PTEpe1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcC54KVxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcC55KVxyXG4gICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMucGVyc29uKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXApXHJcbiAgICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ2ZpZ2h0aW5nVG9vbHMnKS5pbml0SW5mbyhtYXApO1xyXG4gICAgICAgICAgICAgIHRvb2wueD1tYXAueFxyXG4gICAgICAgICAgICAgIHRvb2wueT1tYXAueVxyXG4gICAgICAgICAgICAgIC8vIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICAvLyB0b29sLnNldFBvc2l0aW9uKG1hcC54LG1hcC55KTsgIFxyXG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuYWRkQ2hpbGQodG9vbCk7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmFja19tYXAoKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICB9LFxyXG4gICAgYmFja19ob21lKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgn5aSn5Y6FJyk7XHJcbiAgICB9LFxyXG4gICAgYWRkVG91Y2hFdmVudChub2RlXzEpIHtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgfSxcclxuICAgIC8vIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X3kgPSB0aGlzLmNvbnRlbnQueTtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgLy8g5b2T5YmN5oiR5LusMjTkuKpJdGVt5Yqg6L2955qEIDEwMOmhueaVsOaNrumHjOmdoueahOi1t+Wni+aVsOaNruiusOW9leeahOe0ouW8lTtcclxuICAgIC8vICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyAvLyDku47ov5nkuKrntKLlvJXlvIDlp4vvvIzliqDovb3mlbDmja7orrDlvZXliLDmiJHku6znmoTmu5rliqjliJfooajph4zpnaLnmoTpgInpoblcclxuICAgIC8vIGxvYWRfcmVjb3JkOiBmdW5jdGlvbihzdGFydF9pbmRleCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSBzdGFydF9pbmRleDtcclxuXHJcbiAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMub3B0X2l0ZW1fc2V0W2ldLmdldENoaWxkQnlOYW1lKFwic3JjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAvLyAgICAgICAgIC8vIOaYvuekuuaIkeS7rOeahOiusOW9lTtcclxuICAgIC8vICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy52YWx1ZV9zZXRbc3RhcnRfaW5kZXggKyBpXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIG9uX3Njcm9sbF9lbmRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gdHJ1ZTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gc2Nyb2xsdmVpd19sb2FkX3JlY29kZTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgIC8vIOWQkeS4i+WKoOi9veS6hlxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPCB0aGlzLnZhbHVlX3NldC5sZW5ndGggJiZcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgPj0gdGhpcy5zdGFydF95ICsgdGhpcy5QQUdFX05VTSAqIDIgKiB0aGlzLk9QVF9IRUlHSFQpIHsgLy8g5Yqo5oCB5Yqg6L29XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlOyAvLyDmmoLml7blhbPpl63lm57lvLnmlYjmnpxcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIGRvd25fbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCArPSBkb3duX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA+IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG91dF9sZW4gPSB0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgLSB0aGlzLnZhbHVlX3NldC5sZW5ndGg7XHJcbiAgICAvLyAgICAgICAgICAgICBkb3duX2xvYWRlZCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgLT0gKGRvd25fbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8g5ZCR5LiK5Yqg6L29XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPiAwICYmIHRoaXMuY29udGVudC55IDw9IHRoaXMuc3RhcnRfeSkge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgdXBfbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSB1cF9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4IDwgMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdXBfbG9hZGVkICs9IHRoaXMuc3RhcnRfaW5kZXg7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgKz0gKHVwX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIGVuZCBcclxuICAgIC8vIH0sXHJcbiAgICAvLyAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iXX0=