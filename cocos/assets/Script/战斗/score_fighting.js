require("../common"); 
cc.Class({
    extends: cc.Component,
    properties: {
      // 根据TOOLS生成相应的道具
      toolsArray:[],
      fightingArray:[],   
      // content: cc.Node,
      // person: cc.Prefab,
      home: cc.Node,
      // back: cc.Node,
      back_time: cc.Node, //跳过回合
      // //列表
      // test_scrollView: {
      //   default: null,
      //   type: cc.ScrollView
      // },
      // //翻页容器
      // test_pageView: {
      //   default: null,
      //   type: cc.PageView
      // },

    },
    init(){
      cc.director.getScene();//获取当前场景
    },
    // LIFE-CYCLE CALLBACKS:
    async onLoad () {
      //全局定义容器节点
      cc.sys.BoxPrefab= cc.find('Canvas/大厅/content');
      cc.sys.fightingArray=[]
      cc.sys.toolsArray=[]
      // this.spawnTools()
      await httpRequestBagApi.http_user_info()
      await this.spawnTools() //加载数据
      await this.playTask()
    },
    //task
    async playTask(){
      await this.goPlay() //实例化对象
      await this.fightingEnd() //先加载战斗结果
      await httpRequestFightingExtend.alertBoat('准备回合') //准备回合
      await this.fighting_boat() //开启回合战斗
	  },



 
    start () {
    },
    update (dt) {
      // console.log(3333)
    },
    spawnTools () {
      return new Promise(resolve => {
      //开启倍数
      cc.find('Canvas/倍数/倍数s').getComponent(cc.Label).string = http_globalData.user_info.beishu;
      var _this =this;
      var figthing_remote_url = cc.sys.localStorage.getItem('figthing_remote_url'); //读取数据--战斗记录

      if(figthing_remote_url==null){
          httpRequest.playGame("sence_ditu")
          resolve(); 
      }else{
        var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
        cc.loader.load({ url: remoteUrl }, function (err, data) {
          //定义常量
          http_globalData.fighting = data;
          //开启战斗
          resolve(); 
          //  await   _this.goPlay( )
        });    
      }
      })
    },

    //开启战斗--加载生物
    async goPlay( ){
      // return new Promise(resolve => {
        //播放器先清除所有定时器
        this.unscheduleAllCallbacks();//停止某组件的所有计时器
        let data = http_globalData.fighting
        // cc.log(data)
        var biolgy_state = data.data.biolgy_state;
        var poition_my = data.data.poition_my;
        var poition_enemy = data.data.poition_enemy;
        //生物挂载
        var BoxPrefab = cc.sys.BoxPrefab
        await BoxPrefab.getComponent('fightingTools').biology_detail_list(BoxPrefab,poition_my,biolgy_state,1,0) //挂载生物--position_my
        await BoxPrefab.getComponent('fightingTools').biology_detail_list(BoxPrefab,poition_enemy,biolgy_state,0,poition_my.length) //挂载生物--position_ememy

        // await this.biology_detail_list(BoxPrefab,poition_my,biolgy_state,1,0) //挂载生物--position_my
        // await this.biology_detail_list(BoxPrefab,poition_enemy,biolgy_state,0,poition_my.length) //挂载生物--position_ememy
      // _this.addMapPic(data) //生成地图
      // console.log( _this.toolsArray)
      // console.log( cc.sys.fightingArray )
        // resolve();})
    },
    // 战斗回合
    async fighting_boat(){
      var _this =this;
      // return new Promise(resolve => {
      var fighting_list =  http_globalData.fighting.data;    
      var boat_length = fighting_list.fighting_history.length
      var history_count =  fighting_list.history_count
      var fighting_history= fighting_list.fighting_history;
      if(boat_length!=0){
        var boat=0;
        var boat_count=-1;
        //一条或多条执行语句
        // _this.schedule(function(){
        //循环历史行动条数
        for (var bpage=0; bpage<boat_length; bpage++){
        // _this.schedule(function(){
            boat_count++
            if(history_count[boat].total<boat_count){
              boat++;
            }
            await httpRequestFightingExtend.alertBoat('第'+ parseInt(boat+1)+'回合')
            //判断下动作是否已经下一回合
            // if(cc.find('Canvas/大厅/time').getComponent(cc.Label).string!='第'+ parseInt(boat+1)+'回合' ){
            //   await this.alertBoat('第'+ parseInt(boat+1)+'回合')
            //   // cc.find('Canvas/大厅/time').getComponent(cc.Label).string = '第'+ parseInt(boat+1)+'回合'                    
            //   // return new Promise(resolve => {  cc.find('Canvas/大厅/time').runAction(   cc.sequence(cc.scaleTo(0.2, 2, 2),cc.scaleTo(0.2, 1,1),cc.callFunc(function(){   resolve()},this)));//建一个缩放到1.5倍大小的动作，持续时间2秒
            //   //  }) 
            // }
            // cc.log(fighting_history[boat_count])
            //如果是空回合 ，等待跳过
            if(fighting_history[boat_count]){
              await   _this.fighting_history(fighting_history[boat_count])//执行战斗顺序 
            }
          // 绑定点击事件
          _this.back_time.on('click', _this.onButtonClicked,this);    
        // },1,boat_length,1.5);////2秒后执行1次间隔5秒
          }
      }
      return new Promise(resolve => {         _this.alertResult(); resolve() })
      // resolve();})
    },
 
    //暂停并且跳过回合
    onButtonClicked: function(event) {
      // 跳过回合
      // var _this =this
      // _this.unscheduleAllCallbacks();//停止某组件的所有计时器
      //   cc.log('跳过')
    },

    alertResult(){
      var _this =this;
      cc.find('Canvas/结算').active =true;// 结束弹窗结果
      // _this.unschedule();
      _this.unscheduleAllCallbacks();//停止某组件的所有计时器
    },

    async fighting_history(his_log) {
      // return new Promise(resolve => {
        var _this = this;
        //预备回合
        if(his_log.h_yubei.length!=0){
          await  _this.readySkill(his_log.h_yubei)
          // cc.log('预备回合')
        }
        //回合结束
        // if(his_log.h_end.length!=0){
        //   cc.log('回合结束')
        // }
        // cc.log(his_log)

        //反击
        // if(his_log.h_back.length!=0){
        //   _this.playFight(_this_hero_node,_targ_hero_node,biology,his_log.h_back)
        // }
        //消耗魔法 --技能名称和消耗放一起了
        if(his_log.h_need.length!=0){
          await     _this.needSkill(his_log.h_need)
        }
        // //go和do 二选一 ，need 必有   
        // // 发起技能名称被动
        if(his_log.h_go.length!=0){
          await   _this.playSkill(his_log.h_go)
        }
        // 执行技能
        if(his_log.h_do.length!=0){
          await  _this.playSkill(his_log.h_do)
        }
        //普通攻击
        if(his_log.h_putong.length!=0){
          await    _this.playFight(his_log.h_putong)
        }
      // resolve();})
    },
      //战斗结束
   async fightingEnd() {
        // var _this =this;
        var fighting_list =  http_globalData.fighting.data; 
        // var _task =task||0;
        //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
        return new Promise(resolve => { 
        cc.loader.loadRes('/model弹窗/biology_结算', function(errorMessage,loadedResource){
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
              cc.find('Canvas/结算/弹框').addChild(TipBoxPrefab,this);
              //请求战斗记录
              // if(_task==1){
              //     console.log(11111)
              //     _this.fightint(sence);
              // }else{
              //     _this.progress(sence);
              // }
              resolve()
          });
        }) 
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
 
    //技能准备动作
    async  readySkill(his_log_extend){
      // return new Promise(resolve => {
        if(his_log_extend.length!=0){
          var _this =this
          for (var npage=0; npage<his_log_extend.length; npage++){
            var biology = his_log_extend[npage];
            var _this_hero_node =cc.sys.fightingArray[biology.goid]
            var _targ_hero_node =cc.sys.fightingArray[biology.doid]
            await httpRequestFightingExtend.buttonReady(_this_hero_node,biology)//自己变大--加载技能动作
            // await httpRequestFightingExtend.playAction(_this_hero_node,biology,1)
            }
        } 
      // resolve();})
    },
    //技能消耗动作
    async needSkill(his_log_extend){
      if(his_log_extend.length!=0){
        var _this =this
        for (var npage=0; npage<his_log_extend.length; npage++){
          var biology = his_log_extend[npage];
          
          var _this_hero_node =cc.sys.fightingArray[biology.goid]
          var _targ_hero_node =cc.sys.fightingArray[biology.doid]
          // _this.buttonShake(0.5,_targ_hero_node,biology)//技能攻击
          // _this.schedule(function(){
            await httpRequestFightingExtend.buttonReady(_this_hero_node,biology)//自己变大--加载技能动作
            await httpRequestFightingExtend.playAction(_targ_hero_node,biology,1) //不需要其它动作，瞬发伤害动作
          // },1)
        }
      }
 
    },
    //技能攻击动作
    async playSkill(his_log_extend){
     
      if(his_log_extend.length!=0){
        var _this =this
        for (var npage=0; npage<his_log_extend.length; npage++){
          var biology = his_log_extend[npage];
          
          var _this_hero_node =cc.sys.fightingArray[biology.goid]
          var _targ_hero_node =cc.sys.fightingArray[biology.doid]
          //2个攻击类型只能二选一 
          // _this.buttonShake(0.1,_targ_hero_node,biology)//技能攻击，动作后伤害
          await httpRequestFightingExtend.playAction(_targ_hero_node,biology,1) //不需要其它动作，瞬发伤害动作
  
        }
      }
 
    },
    //普通攻击动作
    async  playFight(his_log_extend){
      // cc.log(444)
      // return new Promise(resolve => {
      if(his_log_extend.length!=0){
        var _this =this
        for (var npage=0; npage<his_log_extend.length; npage++){
          var biology = his_log_extend[npage];
          // cc.log(cc.sys.fightingArray)
          var _this_hero_node =cc.sys.fightingArray[biology.goid]
          var _targ_hero_node =cc.sys.fightingArray[biology.doid]
          if(biology.goid==biology.doid){
              // _this.buttonShake(0,_targ_hero_node,biology)//自己闪动
            await httpRequestFightingExtend.buttonReady(_this_hero_node,biology)//自己变大--加载技能动作
            await httpRequestFightingExtend.playAction(_this_hero_node,biology,0)
          }else{
            await httpRequestFightingExtend.buttonMove(_this_hero_node,_targ_hero_node,biology) //移动
            await httpRequestFightingExtend.playAction(_targ_hero_node,biology,0)
          }
        }
      }
    // resolve();})
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
          // this.toolsArray.forEach(element => {
          //     element.removeFromParent();
          // });
          cc.sys.toolsArray.forEach(element => {
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
      httpRequest.httpPost('/app/app-apiword/map-word',{}, function (data) {
        //写入地图数据
        _this.addWordMap(data)
        })
    },
    back_map(){
      //移除节点
      var _this = this;
      _this.removeBoxprefab()
      httpRequest.playGame("sence_ditu")
    },
    //重播
    back_reload(){
      //移除节点
      var _this = this;
      _this.removeBoxprefab()
      _this.playTask( )
      cc.find('Canvas/结算').active =false;// 结束弹窗结果
    },
    back_home(){
      //移除节点
      var _this = this;
      _this.removeBoxprefab()
      httpRequest.playGame("sence_dating")
    },
    addTouchEvent(node_1) {
        node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    },
    //移除容器
    removeBoxprefab(){
      cc.sys.BoxPrefab.removeAllChildren();
      cc.sys.BoxPrefab.destroyAllChildren();
    },


    // onDestroy() {
    //     // 停止定时器
    //     this.unschedule(this.fighting_history);
    // }

 
});
