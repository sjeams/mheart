// require("../common"); 
cc.Class({
    extends: cc.Component,
    properties: {
      // 根据TOOLS生成相应的道具
      toolsArray:[],
      fightingArray:[],   
      home: cc.Node,
      back_time: cc.Node, //跳过回合
    },
    init(){
      // cc.director.getScene();//获取当前场景
    },
    // LIFE-CYCLE CALLBACKS:
    async onLoad () {
      //全局定义容器节点
      http_globalData.BoxPrefab_content= cc.find('Canvas/大厅/content');
      cc.sys.fightingArray=[]
      cc.sys.toolsArray=[]
      await httpRequestModel.model_back_button('sence_ditu')//返回按钮
      await httpRequestBagApi.http_music()
      await httpRequestBagApi.http_user_info() //加载用户信息
      await httpRequestModel.http_base_model();  // 引入 战斗模型model
      // this.spawnTools()
      await this.spawnTools() //加载数据
      await httpRequestModel.fightingEnd() //加载结果
      await this.playTask() //开启回合战斗
    },
    //task
    async playTask(){
      await this.goPlay() //实例化对象
      await httpRequestFightingExtend.alertBoat('准备回合') //准备回合
      await this.fighting_boat() //开启回合战斗
	  },


    start () {
    },
    update (dt) {
      // console.log(3333)
    },
    async spawnTools () {
      return new Promise(resolve => {
      //开启倍数
      cc.find('Canvas/倍数/倍数s').getComponent(cc.Label).string = http_globalData.user_info.beishu;
      // var _this =this;
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
        var BoxPrefab = http_globalData.BoxPrefab_content
        await this.biology_detail_list(BoxPrefab,poition_my,biolgy_state,1,0) //挂载生物--position_my
        await this.biology_detail_list(BoxPrefab,poition_enemy,biolgy_state,0,poition_my.length) //挂载生物--position_ememy
    },
    //生成生物
    async biology_detail_list(TipBoxPrefab_model,info_list,biolgy_state,is_my,star){
        return new Promise(resolve => {
          var _this =this;
          var TOOLS =[];
          var TOOLS = info_list;
          for (var prop in info_list) {
              //声明节点对象
              let  TipBoxPrefab_icon =  cc.instantiate(http_globalAsset.model_biology_fightingBiology);
              let map = TOOLS[prop];
              let info = map.biology;
              //设置距离
              var map_value = 50
              if(is_my){
                  var map_x =    map.x-map_value
              }else{
                  var map_x =    map.x+map_value
              }
              if(info.length!=0){
                  //放在资源下面
                  //加载图片
                  TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_biology[info.picture]
                  if(is_my==0){
                      //图片翻转
                      TipBoxPrefab_icon.getChildByName('生物').setScale(-1, 1);
                  }
                  TipBoxPrefab_icon.getChildByName('生物').color = new cc.color(info.color); 
                  TipBoxPrefab_icon.getChildByName('生命s').getComponent(cc.Label).string= httpRequest.number_string_wan(info.shengMing,2);
                  TipBoxPrefab_icon.getChildByName('魔法s').getComponent(cc.Label).string= httpRequest.number_string_wan(info.moFa,2);
                  TipBoxPrefab_icon.getChildByName('生物名称s').getComponent(cc.Label).string= info.name
                  TipBoxPrefab_icon.getChildByName('生物等级s').getComponent(cc.Label).string= '等级'+info.grade+'('+biolgy_state[info.state]+')';
                  //创建一个新button 并将其挂载到创建的精灵下
                  httpRequestModel.model_biology_fightingBiology_button(TipBoxPrefab_icon,info);
                  //写入icon
                  TipBoxPrefab_icon.x=parseInt(map_x) //重新定义了间距
                  TipBoxPrefab_icon.getChildByName('阵法s').getComponent(cc.Label).string= parseInt(prop)+1;
                  TipBoxPrefab_icon.y=map.y
                  TipBoxPrefab_icon.is_my=is_my//阵容
                  TipBoxPrefab_icon.jing_bi=map.biology.jingBi//金币
                  TipBoxPrefab_icon.biology_int=  parseInt(prop)+1//阵法编号
                  TipBoxPrefab_icon.shengMing=map.biology.shengMing
                  TipBoxPrefab_icon.moFa=map.biology.moFa
                  TipBoxPrefab_icon.biology=map.biology.id
                  TipBoxPrefab_icon.biology_name=map.biology.name
                  cc.sys.toolsArray.push(TipBoxPrefab_icon);
                  cc.sys.fightingArray[map.biology.id]=TipBoxPrefab_icon;
                  TipBoxPrefab_model.addChild(TipBoxPrefab_icon);
              }
          }
        resolve();
        })
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
            //如果是空回合 ，等待跳过
            if(fighting_history[boat_count]){
              // cc.log(fighting_history[boat_count])
              await   _this.fighting_historyWait(fighting_history[boat_count])//执行战斗等待回合
              await   _this.fighting_historyGo(fighting_history[boat_count])//执行被动
              await   _this.fighting_historyDo(fighting_history[boat_count])//执行技能 
              await   _this.fighting_history(fighting_history[boat_count])//普通   
            }     
        // },1,boat_length,1.5);////2秒后执行1次间隔5秒
          }
      }
      return new Promise(resolve => {    _this.alertResult();  resolve()  })
      // resolve();})
    },
 
    //暂停并且跳过回合
    onButtonClicked: function(event) {
      // return new Promise(resolve => {    _this.alertResult();  resolve()  })
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
    //预备回合
    async fighting_historyWait(his_log){
      var _this = this;
        if(his_log.h_yubei.length!=0){
          await  _this.readySkill(his_log.h_yubei)
          // cc.log('预备回合')
        }
    },
    //发起被动
    async fighting_historyGo(his_log) {
       var _this =this;
        if(his_log.h_go.length!=0){
            //消耗魔法 --技能名称和消耗放一起了
            await   _this.playSkill(his_log.h_go)
            if(his_log.h_need.length!=0){
              await  _this.needSkill(his_log.h_need)
            }

        }
    },
    //发起技能
    async fighting_historyDo (his_log) {
      var _this =this;
          if(his_log.h_do.length!=0){
              //消耗魔法 --技能名称和消耗放一起了
              await   _this.playSkill(his_log.h_do)
              if(his_log.h_need.length!=0){
                await  _this.needSkill(his_log.h_need)
              }
    
          }
      },
    //战斗回合
    async fighting_history(his_log) {
      // return new Promise(resolve => {
        var _this = this;
        //回合结束
        // if(his_log.h_end.length!=0){
        //   cc.log('回合结束')
        // }
        // cc.log(his_log)

        //反击
        // if(his_log.h_back.length!=0){
        //   _this.playFight(_this_hero_node,_targ_hero_node,biology,his_log.h_back)
        // }
        //普通攻击
        if(his_log.h_putong.length!=0){
          await     _this.playFight(his_log.h_putong)
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
 
    //技能准备动作
    async  readySkill(his_log_extend){
      // return new Promise(resolve => {
        if(his_log_extend.length!=0){
          var _this =this
          for (var npage=0; npage<his_log_extend.length; npage++){
            var biology = his_log_extend[npage];
            var _this_hero_node =cc.sys.fightingArray[biology.goid]
            var _targ_hero_node =cc.sys.fightingArray[biology.doid]
            await httpRequestFightingExtend.buttonReady(_this_hero_node,biology,0)//自己变大--加载技能动作
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
            await httpRequestFightingExtend.buttonSkill(_this_hero_node,biology,0)//自己变大--加载技能动作
            // await httpRequestFightingExtend.playAction(_targ_hero_node,biology,1) //不需要其它动作，瞬发伤害动作
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
            await httpRequestFightingExtend.buttonReady(_this_hero_node,biology,0)//自己变大--加载技能动作
            // await httpRequestFightingExtend.playAction(_this_hero_node,biology,0)
          }else{
            await httpRequestFightingExtend.buttonMove(_this_hero_node,_targ_hero_node,biology,0) //移动
            // await httpRequestFightingExtend.playAction(_targ_hero_node,biology,0)
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
    // reloadWord(){
    //   var _this =this;
    //   httpRequest.httpPost('/app/app-apiword/map-word',{}, function (data) {
    //     //写入地图数据
    //     _this.addWordMap(data)
    //     })
    // },
    // back_map(){
    //   //移除节点
    //   // var _this = this;
    //   // httpRequestModel.removeBoxprefab()
    //   httpRequest.playGame("sence_ditu")
    // },
    //重播
    back_reload(){
      //移除节点
      var _this = this;
      httpRequestModel.removeBoxprefab()
      _this.playTask( )
      cc.find('Canvas/结算').active =false;// 结束弹窗结果
    },
    back_home(){
      //移除节点
      // var _this = this;
      httpRequestModel.removeBoxprefab()
      httpRequest.playGame("sence_dating")
    },
    addTouchEvent(node_1) {
        node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    },
 
    // onDestroy() {
    //     // 停止定时器
    //     this.unschedule(this.fighting_history);
    // }
    async button_beishu(){
      // var beisu_arr =[1,2,3,4,8];
      if(http_globalData.user_info.beishu<4){
        http_globalData.user_info.beishu = parseInt(http_globalData.user_info.beishu)+1
      }else{
        http_globalData.user_info.beishu=1
      }
      //修改倍数
      await httpRequestBagApi.http_user_beishu_update()
      // http_globalData.user_info.beishu
      cc.find('Canvas/倍数/倍数s').getComponent(cc.Label).string = http_globalData.user_info.beishu;
    },
    // back_home(){
    //   httpRequest.playGame("sence_dating")
    // },
    //跳过回合
    back_time_show(){ 
      // this.unscheduleAllCallbacks();//停止某组件的所有计时器
      cc.find('Canvas/结算').active =true;
    },
 
});
