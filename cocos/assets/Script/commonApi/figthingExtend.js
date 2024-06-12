 const httpFightingExtend = cc.Class({
  //倍速
  sudu(num){
    //设置倍数
    //速度越快，值越小
    if(http_globalData.user_info.beishu>1){
      return  (1/http_globalData.user_info.beishu)*num
    }else{
      return  num
    }
  },
  async alertBoat(boat){
    var _this =this;
    if(cc.find('Canvas/大厅/time').getComponent(cc.Label).string!=boat){
      cc.find('Canvas/大厅/time').getComponent(cc.Label).string = boat 
      return new Promise(resolve => { cc.find('Canvas/大厅/time').runAction(  cc.sequence(cc.scaleTo(0.2, 2, 2),cc.scaleTo(0.2, 1,1),cc.delayTime(_this.sudu(1)),cc.callFunc(function(){  resolve() },this)));//建一个缩放到1.5倍大小的动作，持续时间2秒
      }) 
    }
  },
  //提示动作
  playTips(node,biology,is_skill){
    var _this =this;
    //技能名称
    if(biology.descript_go_msg!=''){
      // cc.log(biology.descript_go_msg)
        node.getChildByName('技能s').getComponent(cc.Label).string=biology.descript_go_msg
        node.getChildByName('技能背景').active=true
        node.getChildByName('技能背景').opacity=255
        node.getChildByName('技能s').active=true
        node.getChildByName('技能s').opacity=255
        node.getChildByName('技能背景').runAction( cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.3, 1.3),cc.delayTime(_this.sudu(1)),cc.fadeOut(0.1),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.moveBy(_this.sudu(0.1),cc.v2(0,0)),cc.callFunc(function(){  node.getChildByName('技能背景').active=false;  },this)));
        node.getChildByName('技能s').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.3, 1.3),cc.delayTime(_this.sudu(1)),cc.fadeOut(0.1),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.moveBy(_this.sudu(0.1),cc.v2(0,0)),cc.callFunc(function(){  node.getChildByName('技能s').active=false;    
 
      },this)));
    }
  },

  //攻击动作
  async playAction(node,biology,is_skill){ 
    //准备动作
    var _this =this;
    // _this.playReady(node,biology)
    _this.playMove(node,biology,is_skill)
  
    // return new Promise(resolve => {resolve(); });  
  },
  // 准备动作--悟性-治疗-中毒-冰冻-眩晕 持续伤害--回合前结算等
  playReady(node,biology){
    var _this =this;
    if(biology.extend=='wuXingTotal'){
        node.getChildByName('悟性s').getComponent(cc.Label).string= biology.hurt_go_value%100;  //除100 取余
        node.getChildByName('悟性s').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.5, 1.5),cc.delayTime(_this.sudu(1)),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.callFunc(function(){   },this)));
      
        node.getChildByName('悟性动作').active=true
        node.getChildByName('悟性动作').opacity=255
  
        node.getChildByName('悟性动作').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(0.3, 1.1, 1.1),cc.fadeOut(0.2),cc.scaleTo(_this.sudu(0.5), 1, 1),cc.callFunc(function(){  node.getChildByName('悟性动作').active=false  
        },this)));
        
        //向下取整
        var wuxing_floor = Math.floor(biology.hurt_go_value/100)
        if(wuxing_floor>0){
          var xingxing =node.getChildByName('悟性星星s').getComponent(cc.Label).string;
          if(xingxing!=wuxing_floor){
            node.getChildByName('悟性星星').active=true
            node.getChildByName('悟性星星s').active=true
            node.getChildByName('悟性星星s').getComponent(cc.Label).string= wuxing_floor;
            node.getChildByName('悟性星星s').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.5, 1.5),cc.delayTime(_this.sudu(1)),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.callFunc(function(){   },this))); 
            node.getChildByName('悟性星星').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.5, 1.5),cc.delayTime(_this.sudu(1)),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.callFunc(function(){   },this))); 
          }
        }
    }

  },
  //行动--技能攻击 和 普通攻击
  playMove(node,biology,is_skill){
    
      var _this =this;
      //攻击动作
      //技能--攻击动画
      if(is_skill!=0){
        // cc.log(biology)
        node.getChildByName('技能效果').active=true
        node.getChildByName('技能效果').opacity=255
        // cc.loader.loadRes('图标技能效果/'+biology.skill.xiaoguo, cc.SpriteFrame, function (err, texture) { 
        //   node.getChildByName('技能效果').getComponent(cc.Sprite).spriteFrame = texture; 
        // });
        if(!biology.skill.xiaoguo){
          biology.skill.xiaoguo ='血爆'; //默认效果
        }
      
        node.getChildByName('技能效果').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(cc.loader.getRes('图标技能效果/'+biology.skill.xiaoguo));
        node.getChildByName('技能效果').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.1, 1.1),cc.fadeOut(0.2),cc.scaleTo(_this.sudu(0.5), 1, 1),cc.callFunc(function(){  node.getChildByName('技能效果').active=false  },this)));
      }

      if(biology.extend=='moFa'){
        // cc.log(biology.hurt_msg)
        // cc.log(biology)
        // node.getChildByName('扣血s').color = new cc.color('#3568D5');
        // node.getChildByName('魔法s').getComponent(cc.Label).string= biology.hurt_go_value+'/'+node.moFa
        node.getChildByName('魔法s').getComponent(cc.Label).string= biology.hurt_go_value
        var progressBar = node.getChildByName('魔法').getComponent(cc.ProgressBar)
        progressBar.progress = biology.hurt_go_value / node.moFa
        progressBar.completeCount = biology.hurt_go_value;
        progressBar.totalCount = node.moFa;
        //  耗蓝为0跳过0跳过
        if(biology.hurt_msg<0){
          //扣蓝渐隐
          node.getChildByName('扣蓝s').getComponent(cc.Label).string= biology.hurt_msg
          node.getChildByName('扣蓝s').active=true
          node.getChildByName('扣蓝s').opacity=255
          node.getChildByName('扣蓝s').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.3, 1.3),cc.moveBy(_this.sudu(1),cc.v2(0,40)),cc.fadeOut(0.1),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.moveBy(_this.sudu(0.1),cc.v2(0,-40)),cc.callFunc(function(){  node.getChildByName('扣蓝s').active=false },this)));
        }else   if(biology.hurt_msg>0){
          //扣蓝渐隐
          node.getChildByName('加蓝s').getComponent(cc.Label).string= biology.hurt_msg
          node.getChildByName('加蓝s').active=true
          node.getChildByName('加蓝s').opacity=255
          node.getChildByName('加蓝s').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.3, 1.3),cc.moveBy(_this.sudu(1),cc.v2(0,40)),cc.fadeOut(0.1),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.moveBy(_this.sudu(0.1),cc.v2(0,-40)),cc.callFunc(function(){  node.getChildByName('加蓝s').active=false },this)));

        }

      }

      if(biology.extend=='shengMing'){
        //血条动作
        // node.getChildByName('生命s').getComponent(cc.Label).string= biology.hurt_go_value +'/'+ node.shengMing 
        node.getChildByName('生命s').getComponent(cc.Label).string= biology.hurt_go_value
        var progressBar = node.getChildByName('生命').getComponent(cc.ProgressBar)
        progressBar.progress = biology.hurt_go_value / node.shengMing
        progressBar.completeCount = biology.hurt_go_value;
        progressBar.totalCount = node.shengMing;
        if(biology.hurt_go>=0){
          //加血渐隐
          // node.getChildByName('加血s').color = new cc.color('FF0000');
          node.getChildByName('加血s').getComponent(cc.Label).string= biology.hurt_msg
          node.getChildByName('加血s').active=true
          node.getChildByName('加血s').opacity=255
          node.getChildByName('加血s').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.3, 1.3),cc.moveBy(_this.sudu(1),cc.v2(0,40)),cc.fadeOut(0.1),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.moveBy(_this.sudu(0.1),cc.v2(0,-40)),cc.callFunc(function(){  node.getChildByName('加血s').active=false },this)));
          
        }else{
        
          //扣血渐隐
          if(biology.is_baoji==1){
            //暴击样式
            node.getChildByName('暴击s').active=true
            node.getChildByName('暴击s').opacity=255
            node.getChildByName('暴击s').getComponent(cc.Label).string= '暴击'+biology.hurt_msg
            // node.getChildByName('扣血s').color = new cc.color('#FF5700');
            node.getChildByName('暴击s').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.5,1.5),cc.moveBy(_this.sudu(1),cc.v2(0,40)),cc.fadeOut(0.1),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.moveBy(_this.sudu(0.1),cc.v2(0,-40)),cc.callFunc(function(){  node.getChildByName('暴击s').active=false },this)));
          }else{
            //普通样式
            node.getChildByName('扣血s').active=true
            node.getChildByName('扣血s').opacity=255
            node.getChildByName('扣血s').getComponent(cc.Label).string= biology.hurt_msg
            // node.getChildByName('扣血s').color = new cc.color('#FBD800');
            node.getChildByName('扣血s').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.3, 1.3),cc.moveBy(_this.sudu(1),cc.v2(0,40)),cc.fadeOut(0.1),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.moveBy(_this.sudu(0.1),cc.v2(0,-40)),cc.callFunc(function(){  node.getChildByName('扣血s').active=false },this)));
          }
          //受伤动画
          node.getChildByName('受伤').active=true
          node.getChildByName('受伤').opacity=255
          node.getChildByName('受伤').runAction(cc.fadeOut(1),cc.callFunc(function(){  node.getChildByName('受伤').active=false },this));
        }
        //死亡
        if(biology.hurt_go_value==0){
          node.getChildByName('悟性').active=false
          node.getChildByName('生命').active=false
          node.getChildByName('魔法').active=false
          node.getChildByName('悟性s').active=false
          node.getChildByName('生命s').active=false
          node.getChildByName('魔法s').active=false
          node.getChildByName('魔法s').active=false
          node.getChildByName('魔法s').active=false
          node.getChildByName('生物').active=false
          node.getChildByName('悟性星星').active=false
          node.getChildByName('悟性星星s').active=false
          // 死亡
          node.getChildByName('死亡').active=true
          // cc.loader.loadRes('biology_pic/1墓碑', function (err, texture) {  
          //   node.getChildByName('受伤').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
          // })
          if(node.is_my==0){
            //图片翻转
              node.getChildByName('生物').setScale(-1, 1);
          }
          // cc.log(biology)
          // node.getChildByName('受伤').runAction(cc.fadeIn(1),cc.callFunc(function(){  node.getChildByName('受伤').active=false },this)));
          //金币
          // node.getChildByName('金币s').getComponent(cc.Label).string= '+$'+node.jing_bi
          // node.getChildByName('金币s').active=true
          // node.getChildByName('金币s').opacity=255
          // // node.getChildByName('金币s').runAction(cc.moveBy(3,cc.v2(0,60)));
          // node.getChildByName('金币s').runAction(cc.fadeOut(3),cc.callFunc(function(){  node.getChildByName('金币s').active=false },this)));
          // // node.getChildByName('金币s').runAction(cc.moveBy(_this.sudu(0.1),cc.v2(0,-40)));
        }
      }

      if(biology.extend=='闪避'){
        node.getChildByName('技能s').getComponent(cc.Label).string='闪避';
        node.getChildByName('技能s').active=true
        node.getChildByName('技能s').opacity=255
        node.getChildByName('技能s').runAction(cc.sequence(cc.fadeIn(_this.sudu(0.1)),cc.scaleTo(_this.sudu(0.5), 1.3, 1.3),cc.delayTime(_this.sudu(1)),cc.fadeOut(0.1),cc.scaleTo(_this.sudu(0.1), 1, 1),cc.moveBy(_this.sudu(0.1),cc.v2(0,0)),cc.callFunc(function(){  node.getChildByName('技能s').active=false },this)));
      }
      return new Promise(resolve => {     resolve() })

    },





      //准备动作--变大
      async buttonReady(node,biology) {
        var _this =this;
          // var _this =this
          // var waite_time=waite_time||0
          // cc.blink(_this.sudu(3), 10) //3秒闪烁 10次
          const actionhiddenBig = cc.spawn(cc.blink(_this.sudu(_this.sudu(0.4)),1),cc.scaleTo(_this.sudu(0.5), 1.3, 1.3),cc.callFunc(function(){
            // //等待攻击完成
            _this.playTips(node,biology)
            _this.playReady(node,biology)
          },this));//变大还原//变大
          // const actionWaite =cc.delayTime(waite_time);//等待攻击时间
          //闪烁
          // const actionhiddenOn = cc.fadeTo(0.1,0);
          // const actionhiddenoff = cc.fadeTo(0.1,255); 
          const actionhiddenSmoll =  cc.scaleTo(_this.sudu(0.5),1,1)//变大还原
          // cc.spwan( 同时完成
          return new Promise(resolve => {
          node.runAction(
                  cc.sequence(actionhiddenBig,actionhiddenSmoll,
                  // 执行动作完成之后调用的方法
                  cc.callFunc(() => {
                      //先走提示再动作
                      // _this.schedule(function(){
                              //等待攻击完成
                            // return new Promise(resolve => {  resolve() })
                      // },1)
                      resolve();
                  }) )
              );
          });

      },
      //移动
      async buttonMove(node,m_node,biology) {
          var _this =this;
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
          const actionLeft = cc.spawn(cc.moveBy(0.1,cc.v2(m_x,m_y)),cc.scaleTo(_this.sudu(0.3), 1.3, 1.3),cc.callFunc(function(){
                  //等待攻击完成  
                  if(biology.is_shanbi){
                    //闪避，后移
                      _this.buttonMoveOut(m_node,biology)
                  }else{
                    //受伤，闪烁
                    _this.buttonShake(m_node,biology)
                  }
          },this)) 
          // const actionWaite = cc.delayTime(_this.sudu(0.1)) 
          //返回位置
          const actionRight =cc.spawn(cc.moveBy(0.1,cc.v2(-m_x,-m_y)),cc.scaleTo(_this.sudu(0.3), 1, 1),cc.callFunc(function(){
              // //等待攻击完成
          },this))
          // 让节点在向上移动的同时缩放
           // arr.push(cc.scaleTo(_this.sudu(0.5), 1,1))
     
        return new Promise(resolve => {  
          node.runAction(
              cc.sequence(actionLeft,actionRight,cc.callFunc(() => {     resolve() }))        
          );
        })
    },
  
  
    //闪避     // cc.spwan( 同时完成  cc.sequence( 按顺序执行
    buttonMoveOut(node,biology) {
        var _this =this;
        if(biology.position_my==1){
          //己方 后移
          const actionLeft = cc.moveBy(0.1, cc.v2(30, 5));
          const actionRightSecond = cc.moveBy(0.1, cc.v2(-30, -5));
  
             node.runAction(
                  cc.sequence(actionLeft,actionRightSecond,
                  // 执行动作完成之后调用的方法
                      cc.callFunc(() => {
   
                          // _this.schedule(function(){
                          // httpRequestFightingExtend.playAction(node,biology)
                          // },1)
                          // resolve();
                    }) )
              );
  
        }else{
          //敌方方 前移
          const actionLeft = cc.moveBy(0.1, cc.v2(-30, 5));
          const actionRightSecond = cc.moveBy(0.1, cc.v2(30, -5));
   
             node.runAction(
                  cc.sequence(actionLeft,actionRightSecond,
                  // 执行动作完成之后调用的方法
                      cc.callFunc(() => {
   
                          // _this.schedule(function(){
                          // httpRequestFightingExtend.playAction(node,biology)
                          // },1)
                          // resolve();
                    }) )
              );
        
        }
     
    },
    //受击
    buttonShake(node,biology) {
      var _this =this;
      // var _this =this;
      // var waite_time=waite_time||0
      // const actionWaite =cc.delayTime(waite_time);//等待攻击时间
      // const actionhiddenOn = cc.fadeTo(0.1,0);
      // const actionLeft = cc.moveBy(0.1, cc.v2(-10, 0));
      // const actionRight = cc.moveBy(0.1, cc.v2(10, 0));
      // const actionLeftSecond = cc.moveBy(0.1, cc.v2(-10, 0));
      // const actionRightSecond = cc.moveBy(0.1, cc.v2(10, 0));
      
      // const actionhiddenOn = cc.fadeTo(0.1,0);
      // const actionhiddenoff = cc.fadeTo(0.1,255);
      // cc.spwan( 同时完成
      // return new Promise(resolve => {
          node.runAction(
              cc.sequence(cc.blink(_this.sudu(1),2),
              // actionhiddenOn,actionhiddenoff,
              // cc.sequence(actionhiddenOn,actionLeft,actionhiddenoff,actionhiddenoff,
              // cc.sequence(actionLeft, actionRight, actionLeftSecond, actionRightSecond,actionhiddenOn,actionhiddenoff,
              // 执行动作完成之后调用的方法
                  cc.callFunc(() => {
  
                      // _this.schedule(function(){
                      // httpRequestFightingExtend.playAction(node,biology)
                      // },1)
                      // resolve();
                  }) )
          );
      // });
    },
});
 
httpRequestFightingExtend =  new httpFightingExtend();