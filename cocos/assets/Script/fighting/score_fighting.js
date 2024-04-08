// 世界操作  
var HttpHelper = require("../http"); 
var httpRequest = new HttpHelper();
var FightingExtend = require("figthingExtend"); 
var getFightingExtend = new FightingExtend();
// var httpRequest = new HttpHelper();
var params =[];
cc.Class({
    extends: cc.Component,

    properties: {
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
    },
    update (dt) {
      // console.log(3333)
    },
    spawnTools () {
      var _this =this;
      var figthing_remote_url = cc.sys.localStorage.getItem('figthing_remote_url'); //读取数据--战斗记录

      if(figthing_remote_url==null){
          httpRequest.playGame(httpRequest.urlConfig("sence_ditu"));
      }else{
        var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
        cc.loader.load({ url: remoteUrl }, function (err, data) {
            // console.log(data) 
            //移除节点
            // _this.content.removeAllChildren();
            // _this.content.destroyAllChildren();
            //先让透明度为0
            // _this.nodefadeIn(1,0,_this.content)
            // 初始化阵容
            var star =0; //阵容序号
            var star = _this.init_postion(data.data.poition_my,data.data.biolgy_state,-0,1,star) //生成生物--position_my
            var star = _this.init_postion(data.data.poition_enemy,data.data.biolgy_state,0,0,star) //生成生物--position_ememy
            // _this.addMapPic(data) //生成地图
          // console.log( _this.toolsArray)
          // console.log( _this.fightingArray )
            var fighting_list = data.data;    
            var boat_length = fighting_list.fighting_history.length
            var history_count =  fighting_list.history_count
            var fighting_history= fighting_list.fighting_history;
 
            if(boat_length!=0){
              var boat=0;
              var boat_count=-1;
              //一条或多条执行语句
              // _this.schedule(function(){
              //循环历史行动条数
              _this.schedule(function(){
                  boat_count++
                  if(history_count[boat].total<boat_count){
                    boat++;
                  }
                  //因为是从0开始，所以相等就结束 
                  if(boat_count==boat_length){
                    // cc.log(111)
                    // 在第六次执行回调时取消这个计时器
                    _this.fightingEnd(fighting_list)
                    _this.unschedule();
                  }else{
                    //判断下动作是否已经下一回合
                    if(cc.find('Canvas/大厅/time').getComponent(cc.Label).string!='第'+ parseInt(boat+1)+'回合' ){
                      cc.find('Canvas/大厅/time').getComponent(cc.Label).string = '第'+ parseInt(boat+1)+'回合'                    
                      cc.find('Canvas/大厅/time').runAction(cc.sequence(cc.scaleTo(0.3, 2, 2),cc.scaleTo(0.3, 1,1)));//建一个缩放到1.5倍大小的动作，持续时间2秒
                    }
                    // cc.log(fighting_history[boat_count])
                    _this.fighting_history(fighting_history[boat_count])//执行战斗顺序 
                  }
              },1,boat_length,0.3);////10秒后执行1次间隔5秒
            }
        });    
      }
    },
    fighting_history(his_log) {
      // cc.log(his_log)
      var _this = this;
      //反击
      // if(his_log.h_back.length!=0){
      //   _this.playFight(_this_hero_node,_targ_hero_node,biology,his_log.h_back)
      // }
      //消耗魔法 --技能名称和消耗放一起了
      if(his_log.h_need.length!=0){
        _this.readySkill(his_log.h_need)
      }

      //go和do 二选一 ，need 必有   
      // 发起技能名称被动
      if(his_log.h_go.length!=0){
        _this.playSkill(his_log.h_go)
      }
      // 执行技能
      if(his_log.h_do.length!=0){
        _this.playSkill(his_log.h_do)
      }
      //普通攻击
      if(his_log.h_putong.length!=0){
        _this.playFight(his_log.h_putong)
      }
    },
      //战斗结束
    fightingEnd(fighting_list) {
        // var _task =task||0;
        var _this =this;
        //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
        cc.loader.loadRes('/biology_结算', function(errorMessage,loadedResource){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !(loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            var TipBoxPrefab = cc.instantiate(loadedResource);
            // TipBoxPrefab.getComponent('fightingTools').initInfo(fighting_list); //写入奖励物品预制体
            if(fighting_list.poition_winner==1){
              TipBoxPrefab.getChildByName('结果s').getComponent(cc.Label).string='胜利！';
            }else{
              TipBoxPrefab.getChildByName('结果s').getComponent(cc.Label).string='失败！';
            }
            //将预制资源添加到父节点
            // CanvasNode.addChild(TipBoxPrefab);
            cc.find('Canvas').addChild(TipBoxPrefab,1);
            //请求战斗记录
            // if(_task==1){
            //     console.log(11111)
            //     _this.fightint(sence);
            // }else{
            //     _this.progress(sence);
            // }
        });
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
        // const maps = new Map();
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
              tool.is_my=is_my//阵容
              tool.jing_bi=map.biology.jingBi//金币
              tool.biology_int=star//阵法编号
              tool.shengMing=map.biology.shengMing
              tool.moFa=map.biology.moFa
              tool.biology=map.biology.id
              tool.biology_name=map.biology.name
              _this.toolsArray.push(tool);
              _this.fightingArray[map.biology.id]=tool;
              //永久重复移动
              // var randomNumup = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
              // var randomNumdown = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
              // var seq = cc.repeatForever(
              //   cc.sequence(
              //       cc.moveBy(randomNumup, 0,5),
              //       // cc.scaleTo(randomNumup, 1, 1.05),
              //       // cc.scaleTo(randomNumdown, 1.05,1),
              //       cc.moveBy(randomNumdown, 0,-5)
              //   ));
              // tool.runAction(seq);
        
              _this.content.addChild(tool); 
            }
        }
        return star;
    },


    //技能准备动作
    readySkill(his_log_extend){
      // console.log(his_log_extend)
      if(his_log_extend.length!=0){
        var _this =this
        for (var npage=0; npage<his_log_extend.length; npage++){
          var biology = his_log_extend[npage];
          var _this_hero_node =this.fightingArray[biology.goid]
          var _targ_hero_node =this.fightingArray[biology.doid]
          _this.buttonReady(0,_this_hero_node,biology)//自己变大--加载技能动作
          }
      } 
      return new Promise(resolve => {resolve();})
    },
    //技能消耗动作
    needSkill(his_log_extend){
      if(his_log_extend.length!=0){
        var _this =this
        for (var npage=0; npage<his_log_extend.length; npage++){
          var biology = his_log_extend[npage];
          // cc.log(biology)
          var _this_hero_node =this.fightingArray[biology.goid]
          var _targ_hero_node =this.fightingArray[biology.doid]
          // _this.buttonShake(0.5,_targ_hero_node,biology)//技能攻击
          // _this.schedule(function(){
          getFightingExtend.playAction(_targ_hero_node,biology,0) //不需要其它动作，瞬发伤害动作
          // },1)
        }
      }
      return new Promise(resolve => {resolve();})
    },
    //技能攻击动作
    playSkill(his_log_extend){
      if(his_log_extend.length!=0){
        var _this =this
        for (var npage=0; npage<his_log_extend.length; npage++){
          var biology = his_log_extend[npage];
          // cc.log(biology)
          var _this_hero_node =this.fightingArray[biology.goid]
          var _targ_hero_node =this.fightingArray[biology.doid]
          //2个攻击类型只能二选一 
          // _this.buttonShake(0.1,_targ_hero_node,biology)//技能攻击，动作后伤害
            getFightingExtend.playAction(_targ_hero_node,biology,1) //不需要其它动作，瞬发伤害动作
        }
      }
      return new Promise(resolve => {resolve();})
    },
    //普通攻击动作
    playFight(his_log_extend){
      if(his_log_extend.length!=0){
        var _this =this
        for (var npage=0; npage<his_log_extend.length; npage++){
          var biology = his_log_extend[npage];
          // cc.log(this.fightingArray)
          var _this_hero_node =this.fightingArray[biology.goid]
          var _targ_hero_node =this.fightingArray[biology.doid]
          if(biology.goid==biology.doid){
              // _this.buttonShake(0,_targ_hero_node,biology)//自己闪动
            _this.buttonReady(0,_this_hero_node,biology)//自己变大--加载技能动作
          }else{
            _this.buttonMove(0.1,_this_hero_node,_targ_hero_node,biology) //移动
          }
        }
      }
      return new Promise(resolve => {resolve();})
    },
    //准备动作--变大
    buttonReady(waite_time,node,biology) {
        var _this =this
        var waite_time=waite_time||0
        const actionhiddenBig =  cc.scaleTo(0.2, 1.2, 1.2);//变大
        // const actionWaite =cc.delayTime(waite_time);//等待攻击时间
        const actionhiddenOn = cc.fadeTo(0.05,0);
        // const actionLeft = cc.moveBy(0.1, cc.v2(-5, 0));
        // const actionRight = cc.moveBy(0.1, cc.v2(10, 0));
        // const actionLeftSecond = cc.moveBy(0.1, cc.v2(-10, 0));
        // const actionRightSecond = cc.moveBy(0.1, cc.v2(5, 0));
        // actionLeft, actionRight, actionLeftSecond, actionRightSecond,
        const actionhiddenoff = cc.fadeTo(0.05,255);
        const actionhiddenSmoll = cc.scaleTo(0.2,1,1);//变大还原
        // cc.spwan( 同时完成
        return new Promise(resolve => {
            node.runAction(
                cc.sequence(actionhiddenBig,actionhiddenOn,actionhiddenoff,actionhiddenSmoll,
                // 执行动作完成之后调用的方法
                cc.callFunc(() => {
                    // cc.log(node);
                    // cc.log(biology);
                    //先走提示再动作
                    // _this.schedule(function(){
                    getFightingExtend.playTips(node,biology)
                    getFightingExtend.playAction(node,biology)
                    // },1)
                    resolve();
                }) )
            );
        });
    },
    //移动
    buttonMove(waite_time,node,m_node,biology) {
      var arr =[];
      var _this =this;
      var m_x=10
      var m_y=0
      var m_x_move =0
      if (node.is_my==1){
        m_x_move =-120
      }else{
        m_x_move =120
      }    
      if (node.x != m_node.x) m_x = m_node.x - node.x+m_x_move
      if (node.y != m_node.y) m_y = m_node.y - node.y 
      //普通攻击
      const actionLeft = cc.spawn(cc.moveBy(0.3,cc.v2(m_x,m_y)),cc.scaleTo(0.1, 1, 1.2),cc.callFunc(function(){
              // //等待攻击完成
              // _this.buttonShake(waite_time,m_node,biology)
      },this)) 
      // const actionWaite = cc.delayTime(0.01) 
      //返回位置
      const actionRight =cc.spawn(cc.moveBy(0.3,cc.v2(-m_x,-m_y)),cc.scaleTo(0.1, 1, 1),cc.callFunc(function(){
          //等待攻击完成
          _this.buttonShake(waite_time,m_node,biology)
      },this))
      // 让节点在向上移动的同时缩放
      // arr.push(cc.scaleTo(0.1, 1,1))
      return new Promise(resolve => {
          node.runAction(
              cc.sequence(actionLeft,actionRight,cc.callFunc(() => {       
                resolve();
              }))
          );
      });
  },
  //受击
  buttonShake(waite_time,node,biology) {
    var _this =this;
    var waite_time=waite_time||0
    const actionWaite =cc.delayTime(waite_time);//等待攻击时间
    const actionhiddenOn = cc.fadeTo(0.05,0);
    const actionLeft = cc.moveBy(0.1, cc.v2(-5, 0));
    const actionRight = cc.moveBy(0.1, cc.v2(10, 0));
    const actionLeftSecond = cc.moveBy(0.1, cc.v2(-10, 0));
    const actionRightSecond = cc.moveBy(0.1, cc.v2(5, 0));
    const actionhiddenoff = cc.fadeTo(0.05,255);
    // cc.spwan( 同时完成
    return new Promise(resolve => {
        node.runAction(
            cc.sequence(actionWaite,actionLeft, actionRight, actionLeftSecond, actionRightSecond,actionhiddenOn,actionhiddenoff,
            // 执行动作完成之后调用的方法
                cc.callFunc(() => {
                    // cc.log(node);
                    // cc.log(biology);
                    // _this.schedule(function(){
                    getFightingExtend.playAction(node,biology)
                    // },1)
                    resolve();
                }) )
        );
    });
},
    //生物渐隐-淡出-淡入
    // nodefadeIn(time,type,node){
    //   // cc.log(node)
    //   var fin_arr=[];
    //   if(type==0){
    //     //先让透明度为0
    //     node.getChildByName('扣血s').opacity=0
    //     fin_arr.push(cc.fadeIn(time));
    //   }else{
    //     //先让透明度为255
    //     node.getChildByName('扣血s').opacity=255
    //     fin_arr.push(cc.fadeOut(time));
    //   }
    //   fin_arr.push(cc.spawn(cc.delayTime(0.5),cc.callFunc(function(){
    //     node.getChildByName('扣血s').active=false
    //   },this)) )
    //   node.getChildByName('扣血s').runAction(fin_arr);
    // },
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
    hp_update(node){
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
      // //0.5秒后还可以被攻击
      //   this.scheduleOnce(function() {
      //     this.state = 0;
      //   }.bind(this),0.5);
    },
    reloadWord(){
      var _this =this;
      httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
        //写入地图数据
        _this.addWordMap(data)
        })
    },
    back_map(){
      //移除节点
      var _this = this;
      _this.content.removeAllChildren();
      _this.content.destroyAllChildren();
      httpRequest.playGame(httpRequest.urlConfig("sence_ditu"));
    },
    back_reload(){
      //移除节点
      var _this = this;
      _this.content.removeAllChildren();
      _this.content.destroyAllChildren();
      // this.parent.active=false
      httpRequest.playGame(httpRequest.urlConfig("sence_zhandou"));
    },
    back_home(){
      //移除节点
      var _this = this;
      _this.content.removeAllChildren();
      _this.content.destroyAllChildren();
      httpRequest.playGame(httpRequest.urlConfig("sence_dating"));
    },
    addTouchEvent(node_1) {
        node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    },
 
});
