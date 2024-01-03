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
      cc.director.getScene();//获取当前场景
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad () {

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
    update (dt) {
 
      // console.log(3333)
    },
 
    spawnTools () {
      var _this =this;
      var figthing_remote_url = cc.sys.localStorage.getItem('figthing_remote_url'); //读取数据--战斗记录

      if(figthing_remote_url==null){
         httpRequest.playGame('map/诸天地图');
      }else{
        var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
        cc.loader.load({ url: remoteUrl }, function (err, data) {
            // console.log(data) 
            // _this.addWordMap(results) //生成生物
            // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
            //移除节点
            _this.content.removeAllChildren();
            _this.content.destroyAllChildren();
            //先让透明度为0
            _this.content.opacity = 0;
            var fin = cc.fadeIn(2);
            _this.content.runAction(fin);
            // 初始化阵容
            var star =0; //阵容序号
            var star = _this.init_postion(data.data.poition_my,data.data.biolgy_state,-0,1,star) //生成生物--position_my
            var star = _this.init_postion(data.data.poition_enemy,data.data.biolgy_state,0,0,star) //生成生物--position_ememy
            _this.addMapPic(data) //生成地图

              var fighting_list = data.data;

              _this.schedule(function(){
                  //一条或多条执行语句
                  for (let boat=0; boat<fighting_list.fighting_history.length; boat++) {
                      var history =fighting_list.fighting_history[boat].fighting_history;
                      _this.fighting_history(history)//执行战斗顺序
                  }
                },3,1,2); //3秒后执行1次间隔2秒
              // var poition_my =fighting_list.poition_my
              // var poition_enemy =fighting_list.poition_enemy
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
          if(texture!=null){
          _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
          }
        });
    },
    //生成生物
    init_postion(postion,biolgy_state,int_px,is_my,star){
        var _this = this;
        var TOOLS =[];
        var TOOLS = postion;
        var total = postion.length;
        //添加节点
        for (let i=0; i<total; i++) {    
            //死亡移除map_status
            var map = TOOLS[i];
            // console.log(map) 
            if(map.biology.length!=0){
              star++;
              var tool = cc.instantiate(_this.person);
              tool.getComponent('fightingTools').initInfo(map.biology,biolgy_state,is_my);
              tool.x=parseInt(map.x+int_px)
              tool.getChildByName('阵法s').getComponent(cc.Label).string= star-1;
              tool.y=map.y
              tool.biology_int=star//阵法编号
              tool.biology=map.biology.id
              tool.biology_name=map.biology.name
              _this.toolsArray.push(tool);
              // tool.setPosition(map.x,map.y);  
              _this.content.addChild(tool); 
            }
        }
        return star;
    },

    fighting_history (history) {
      var  arr = [];
      var _this = this;
      // console.log(_this_hero_node);
      for (let i=0; i<history.length; i++) {
        if(i==0){
          var  his_log = history[i];
          if(his_log.back.length!=0){

          }
          if(his_log.do.length!=0){
            
          }
          if(his_log.go.length!=0){
            
          }
          if(his_log.need.length!=0){
           
          }
          if(his_log.putong.length!=0){
            for (let n=0; n<his_log.putong.length; n++){
              if(n==0){
              var biology = his_log.putong[n];
              console.log(biology);
              // var _this_hero_node =_this.toolsArray[0];
              // var _targ_hero_node  =_this.toolsArray[3];

              this.toolsArray.forEach(element => {
                if(element.biology==biology.goid){
                  console.log(element)
                  // var _this_hero_node =_this.toolsArray[0];
                }

              })

              _this.buttonMove(_this_hero_node,_targ_hero_node) //移动
              // _this.buttonShake(_targ_hero_node) //闪动
              // _this.buttonShake(_targ_hero_node) //闪动
              // console.log(biology.doid) 
              // console.log(_targ_hero_node.x) 
              // console.log(_targ_hero_node.y) 
              // console.log(_targ_hero_node) 
              // arr.push(cc.rotateTo(0.5 ,5));
              // arr.push(cc.moveTo(2,_targ_hero_node.x,_targ_hero_node.y));
              // // arr.push(cc.spawn(cc.moveTo(2,_targ_hero_node.x,_targ_hero_node.y),cc.callFunc(function(){
              // //   // _this_hero_node.playAnim('/biology_pic/3关闭');
              // //   _targ_hero_node.scale = 1;
              // //   arr.push(cc.scaleBy(1,2));
              // // },this)) );

              // //等待攻击完成
              // arr.push(cc.delayTime(0.5 + 1));
              // //移回原来位置
              // arr.push(cc.moveTo(2,_this_hero_node.x,_this_hero_node.y));
              // // arr.push(cc.spawn(cc.moveTo(2,_this_hero_node.x,_this_hero_node.y),cc.callFunc(function(){
              // //   // _this_hero_node.playAnim('/biology_pic/3关闭');
              // //   _targ_hero_node.scale = 1;
              // //   arr.push(cc.scaleBy(1,2));
              // // },this)) );
              // arr.push(cc.rotateBy(0.5 ,-5));
              // var act = cc.sequence(arr);
              // _this_hero_node.runAction(act)
              // 停止一个动作
              // _this_hero_node.stopAction(act);
              // // 停止所有动作
              // _this_hero_node.stopAllActions();
            }
            }
          }
          // his_log.need.forEach(element => {
          //   console.log(element)
          // })
        }
        //切换成冲刺动画，并移动到目标跟前  
        // arr.push(cc.spawn(cc.moveTo(2,_targ_hero_node.x,_targ_hero_node.y),cc.callFunc(function(){
        //   // _this_hero_node.playAnim('/biology_pic/3关闭');
        //   _targ_hero_node.scale = 1;
        //   arr.push(cc.scaleBy(1,2));
        // },this)) );
    
        //播放攻击动画
        // arr.push(cc.callFunc(function(){
        //   // this.hero.playAnim(animName);
        // },this));
        // var animInfo = AnimConfig.getRoleInfo(this.hero.roleId)[animName];
        // var playTime = animInfo.frames / animInfo.fps;

        // arr.push(cc.callFunc(function(){
        //     // this._isSpelling = false;
        // },this));
      }
      // console.log(arr);




      // console.log(_this_hero_node)
      // for (let i=0; i<fighting.length; i++) {
        // let action =  cc.speed(cc.sequence(cc.moveTo(5,400,200), cc.moveTo(5,this_node.x,this_node.y)),10)
        // let action = cc.moveTo(1, 100, 100)
        // cc.jumpTo(3, 200, 200, 50, 5)
        // 执行动作，所有的动作都需要一个目标通过 runAction 去执行它
        // this_node.runAction(action)
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
    buttonMove(node,m_node) {
      var m_y =10
      var m_y =0
      var m_z=0;
      if(node.x>m_node.x){
        var m_x = m_node.x-node.x
        m_z=+20
      }else if(node.x<m_node.x){
        var m_x = m_node.x-node.x
        m_z=-20
      }
      if(node.y>m_node.y){
        var m_y = m_node.y-node.y
      }else if(node.y<m_node.y){
        var m_y = m_node.y-node.y
      }
      var m_x =m_x/200*(50+m_z)
      var m_y =m_y/200*50

    //节点坐标转到屏幕坐标
    // var w_pos= node.convertToWorldSpace(cc.v2(0,0)); //图片左下角为原点 （480，270）（减去图片的一半）
    // console.log(w_pos);
    // var w_pos=cc.v2(480,320);
    // var node_pos=this.node.convertToNodeSpace(w_pos);
    // console.log(node_pos);
    // var w_pos= node.convertToWorldSpaceAR(cc.v2(0,0));// 以图片锚点为原点
    // console.log(node)
    // var w_pos=cc.v2(node.x,node.y);
    // var node_pos=this.node.convertToNodeSpaceAR(w_pos);
    // console.log(node_pos);
    // console.log(node)
    //   console.log(m_node)
      // var x_end = this.getDistance(node,m_node)
      // var y_end = this.getAngle(node,m_node)
      // var x_end = this.getDistance(node,m_node)
      console.log(m_x)
      console.log(m_y)
      // var y_end = this.getAngle(node,m_node)
      // var actionLeft = cc.moveBy(0.5, cc.v2(x_end,0))
      //   var actionRight = cc.moveBy(0.5, cc.v2(-x_end,0))
      // 让节点在向上移动的同时缩放
      // const actionBig = cc.scaleTo(0.1, 1, 1.4)
      const actionLeft = cc.moveBy(0.5, cc.v2(m_x, m_y),cc.scaleTo(0.5, 0.8, 1.4));
      const actionRight = cc.moveBy(0.5, cc.v2(-m_x,-m_y),cc.scaleTo(0.5, 0.8, 1.4));
      // const actionLeftSecond = cc.moveBy(0.1, cc.v2(-10, 0));
      // const actionRightSecond = cc.moveBy(0.1, cc.v2(5, 0));
      return new Promise(resolve => {
          node.runAction(
              cc.sequence(actionLeft, actionRight,
              // 执行动作完成之后调用的方法
                  cc.callFunc(() => {
                      // cc.log(3333);
                      resolve();
                  }))
          );
      });
  },
  // 距离
  getDistance(start,end){
        // var pos = cc.v2(start.x - end.x, start.y - end.y);
        // var dis = Math.sqrt(pos.x*pos.x + pos.y*pos.y)/6;
        pos1=cc.v2(start.x ,0)
        pos2=cc.v2(end.x ,0)
        var temp=pos1.sub(pos2);
        var dis=Math.abs(temp.mag());
        return dis;
    },
  // 角度
  getAngle(start,end){
    //计算出朝向
    var dx = end.x - start.x;
      var dy = end.y - start.y;
      var dir = cc.v2(dx,dy);

      //根据朝向计算出夹角弧度
      var angle = dir.signAngle(cc.v2(1,0));

    //将弧度转换为欧拉角
      var degree = angle / Math.PI * 180;
      return -degree
  },

    buttonShake(node) {
      const actionLeft = cc.moveBy(0.1, cc.v2(-5, 0));
      const actionRight = cc.moveBy(0.1, cc.v2(10, 0));
      const actionLeftSecond = cc.moveBy(0.1, cc.v2(-10, 0));
      const actionRightSecond = cc.moveBy(0.1, cc.v2(5, 0));
      return new Promise(resolve => {
          node.runAction(
              cc.sequence(actionLeft, actionRight, actionLeftSecond, actionRightSecond,
              // 执行动作完成之后调用的方法
                  cc.callFunc(() => {
                      cc.log(3333);
                      resolve();
                  }))
          );
      });
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
      httpRequest.playGame('map/诸天地图');
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
