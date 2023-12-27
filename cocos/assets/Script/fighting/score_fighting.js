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
      // 根据TOOLS生成相应的道具
      toolsArray:[],
      fightingArray:[],   
      content: cc.Node,
      person: cc.Prefab,
      home: cc.Node,
      reload: cc.Node,
      back: cc.Node,
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
    init(){
    
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad () {
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
      // cc.dynamicAtlasManager.showDebug(true);

        // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
          // fighting_history

        this.spawnTools()


    },
    start () {
      // console.log(this.toolsArray[0])
      // var _this =this;
      // var fighting_list = cc.sys.localStorage.getItem("fightingArray");
      // var fighting_list = JSON.parse(fighting_list);
      // for (let boat=0; boat<fighting_list.fighting_history.length; boat++) {
      //     _this.fighting_history(fighting_list.fighting_history[boat].fighting_history)//执行战斗顺序
      // }
    },
 
    spawnTools () {
      var _this =this;
      var figthing_remote_url = cc.sys.localStorage.getItem('figthing_remote_url'); //读取数据--战斗记录

      if(figthing_remote_url==null){
         httpRequest.playGame('map/诸天地图');
      }else{
        var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
        cc.loader.load({ url: remoteUrl }, function (err, data) {
            console.log(data) 
            // _this.addWordMap(results) //生成生物
            // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
            //移除节点
            _this.content.removeAllChildren();
            _this.content.destroyAllChildren();
            // 初始化阵容
            _this.init_postion(data.data.poition_my,data.data.biolgy_state,-50,1) //生成生物--position_my
            _this.init_postion(data.data.poition_enemy,data.data.biolgy_state,50,0) //生成生物--position_ememy
            _this.addMapPic(data) //生成地图
            // _this.fightingArray.push(data.data);
            // cc.sys.localStorage.setItem("fightingArray", JSON.stringify(data.data));
            // cc.sys.localStorage.setItem("toolsArray", JSON.stringify(_this.toolsArray));
            // var fighting_list = cc.sys.localStorage.getItem("fightingArray");
            // var fighting_list = JSON.parse(fighting_list);
            var fighting_list =data.data;
            var poition_my =fighting_list.poition_my
            var poition_enemy =fighting_list.poition_enemy
            for (let boat=0; boat<fighting_list.fighting_history.length; boat++) {
                var history =fighting_list.fighting_history[boat].fighting_history;
                _this.fighting_history(history,poition_my,poition_enemy)//执行战斗顺序
            }
        });    
      }
    },
    //生成地图
    addMapPic(data){
        var _this = this;
        var  map_pic =data.data['map_pic'];
        var remoteUrl = httpRequest.httpUrl(map_pic);
        // console.log(remoteUrl)
        cc.loader.load({ url: remoteUrl }, function (err, texture) {  
          _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
    },
    //生成生物
    init_postion(postion,biolgy_state,int_px,is_my){
        var _this = this;
        let TOOLS = postion;
        var total = postion.length;
        // var fi = cc.fadeIn(2)//渐显效果
        // _this.content.runAction(fi);
        // var fo = cc.fadeOut(1)//渐隐效果
        // _this.content.runAction(fo);
        // let  tool = cc.instantiate(_this.person);
        //添加节点
        for (let i=0; i<total; i++) {
            //死亡移除map_status
            var map =TOOLS[i];
            // console.log(map) 
            if(map.biology.length!=0){
              var tool = cc.instantiate(_this.person);
              tool.getComponent('fightingTools').initInfo(map.biology,biolgy_state,is_my);
              tool.x=parseInt(map.x+int_px)
              tool.y=map.y
              tool.biology_int=i //阵法编号
              tool.biology=map.biology.id
              tool.biology_name=map.biology.name
              _this.toolsArray.push(tool);
              // tool.setPosition(map.x,map.y);  
              _this.content.addChild(tool); 
            }
        }
    },

    fighting_history (fighting) {
      console.log(fighting)
      // var _this = this;
      var this_node =this.toolsArray[0];
      console.log(this_node)
      // for (let i=0; i<fighting.length; i++) {
        let action =  cc.speed(cc.sequence(cc.moveTo(5,400,200), cc.moveTo(5,this_node.x,this_node.y)),10)
        // let action = cc.moveTo(1, 100, 100)
        // cc.jumpTo(3, 200, 200, 50, 5)
        // 执行动作，所有的动作都需要一个目标通过 runAction 去执行它
        this_node.runAction(action)
      // }
        //   // 删除所有道具(或者不删，只是隐藏，自己决定)
        //   for (let i=0; i<total; i++) {
        //   this.toolsArray.forEach(element => {
        //   //     var color = ['#FFFFFF','green','#BDFF00','#FFD100','#FF0000','#ffe000',];
        //   //     // var type_color = color[info['yiXing']];
        //   //     // console.log(info['color']);
        //   //     element.getChildByName('生物').color = new cc.color(info['color']);
        //   //     // console.log(info)
        //   //     var star ='';    
        //   //     for(i=0;i<=info['yiXing'];i++){
        //   //         star +='⭐';
        //   //     }
        //   //     element.getChildByName('生命s').getComponent(cc.Label).string= info['shengMing']+'/'+info['shengMing'];
        //   //     element.getChildByName('魔法s').getComponent(cc.Label).string= info['moFa']+'/'+info['moFa'];
        //   //     element.getChildByName('生物名称s').getComponent(cc.Label).string= info['name'];
        //   //     element.getChildByName('生物等级s').getComponent(cc.Label).string= 'Lv.'+info['grade']+'('+biolgy_state[info['state']]+')';
        //   //     element.getChildByName('星星s').getComponent(cc.Label).string= star;
        //   //     console.log(element)
        //   //     // element.removeFromParent();
        //   });
        // }
    },
    bagBtn () {
      // 背包按钮
      if (this.gridLayout.parent.active) {
          // 隐藏节点
          this.gridLayout.parent.active = false;

          // 删除所有道具(或者不删，只是隐藏，自己决定)
          this.toolsArray.forEach(element => {
              element.removeFromParent();
          });
      }
      else {
          // 显示节点
          this.gridLayout.parent.active = true;

          // 生成所有道具
          this.spawnTools();
      }
    },
    // 刷新血条
    hp_update(){
      //受到15伤害
      this.hp -= 15;
      // 求出伤害血量占比并显示
      let fill = this.hp /this.all_hp;
      this.hp_now.fillstart = 1 - fill; 

      // 血条延迟，秒执行一次，一共执行六次，延迟为0
      // this.schedule(function(){
      //     this.magnetnumber-=5/8;
      // },1,6,0);

      //0.5秒内闪烁
      let act_shan = cc.sequence(cc .fadeTo(0.05,0),cc.fadeTo(0.05,255));
      element.runAction(cc.repeat(act_shan,5));
      //0.5秒后还可以被攻击
        this.scheduleOnce(function() {
          this.state = 0;
        }.bind(this),0.5);
    },
    reloadWord(){
      var _this =this;
      httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
        //写入地图数据
        _this.addWordMap(data)
        })
    },
    back_map(){
      //销毁动态合图
      cc.dynamicAtlasManager.reset()
      cc.director.loadScene('map/诸天地图');
    },
    back_home(){
      //销毁动态合图
      cc.dynamicAtlasManager.reset()
      cc.director.loadScene('大厅');
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
