// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// 世界操作  
var HttpHelper = require("../http"); 
var httpRequest = new HttpHelper();
var params =[];
cc.Class({
    extends: cc.Component,
    properties: {  
      content: cc.Node,
      person: cc.Prefab,
      home: cc.Node,
      reload: cc.Node,
      //列表
      test_scrollView: {
        default: null,
        type: cc.ScrollView
      },
      //翻页容器
      test_pageView: {
        default: null,
        type: cc.PageView
      },

    },


    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
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
      this.spawnTools()
        // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
    },

    spawnTools () {
      var _this =this;
      httpRequest.httpPost('/app/app-apiword/index',{}, function (data) {

          // console.log(_this.content)
          if(!data.data){
              //刷新地图
              // cc.director.loadScene('map/诸天地图');
              _this.reloadWord()//刷新世界地图
          }else{
              //生成世界
              // let cellWidth = _this.content.width * 0.105;
              // let cellHeight = _this.content.height * 0.215;
              // let spacingX = _this.content.width * 0.022;
              // let spacingY = _this.content.height * 0.045;

              // _this.content.getComponent(cc.Layout).cellSize.width = cellWidth;
              // _this.content.getComponent(cc.Layout).cellSize.height = cellHeight;
              // _this.content.getComponent(cc.Layout).spacingX = spacingX;
              // _this.content.getComponent(cc.Layout).spacingY = spacingY;
              _this.addMapPic(data) //生成地图
              _this.addWordMap(data) //生成生物
          }
      })
    },
    //生成地图
    addMapPic(data){
        var _this = this;
        if(data.data['map_pic']){
          var  map_pic =data.data['map_pic'];
        }else{
          var  map_pic =data.data['picture'];
        }
        var remoteUrl = httpRequest.httpUrl(map_pic);
          cc.loader.load({ url: remoteUrl }, function (err, texture) {  
              _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
    },
    reloadWord(){
      var _this =this;
      // var params = {
      //   'page': 1,
      //   'pageSize': 12,
      // };
      httpRequest.httpPost('/app/app-apiword/map-word',{}, function (data) {
        //移除节点
        _this.content.removeAllChildren();
        _this.content.destroyAllChildren();
        //写入地图数据
        _this.addWordMap(data)
        })
    },
    //生成生物
    addWordMap(data){
        // console.log(data) 
        var _this = this;
        // 根据MapTools生成相应的道具
        // _this.toolsArray = [];
        let TOOLS = data.data.user_in_word_map;
        var total = data.data.user_in_word_map.length;
        // var fi = cc.fadeIn(2)//渐显效果
        // _this.content.runAction(fi);
        // var fo = cc.fadeOut(1)//渐隐效果
        // _this.content.runAction(fo);
        //添加节点
        for (let i=0; i<total; i++) {
            // console.log(i) 
            //死亡移除map_status
            var map =TOOLS[i];
            if(map.map_status==1){
              // console.log(map.x)
              // console.log(map.y)
              let tool = cc.instantiate(_this.person);
              tool.getComponent('mapTools').initInfo(map);
              tool.x=map.x
              tool.y=map.y
              // _this.toolsArray.push(tool);
              // tool.setPosition(map.x,map.y);  
              _this.content.addChild(tool);   
            }
        }
    },
    addTouchEvent(node_1) {
        node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
      },
    // start: function() {
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
