// 背包的api请求接口
const httpAlert = cc.Class({
    extends: cc.Component,
    openBag_hidden(){
        // cc.find('Canvas/弹窗').active =false;
        cc.find('Canvas/弹窗').removeAllChildren();
    },
    getNicheng() {
        var arr = http_globalData.user_nicheng
        var r_num = Math.round(Math.random()*(3-1)+1); //随机1-3

        var stag_name ='';
        for(var i=0;i<=r_num ;i++){
            var round = Math.round(Math.random()*(arr.length-1));  //随机 0-arr.length 的变量  
            stag_name = stag_name+arr[round];
        }
        return stag_name;
    },
    //操作加载弹窗模板
   async alert_getTips() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model弹窗/弹窗提示', function(errorMessage,loadedResource){
                // var TipBoxPrefab_tips = cc.instantiate(loadedResource);
                http_globalData.alert_tips =loadedResource
                resolve();
            })   
        });
    },
    //操作加载弹窗模板
    async alert_biologyDetail() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model召唤/A召唤详情', function(errorMessage,loadedResource){
                // var TipBoxPrefab_tips = cc.instantiate(loadedResource);
                http_globalData.alert_biologyDetail =loadedResource
                resolve();
            })   
        });
    },

    //操作加载弹窗模板
    async alert_shangdian() {
        return new Promise(resolve => {    
            var _this =this
        cc.loader.loadRes('/model商店/A商店', function(errorMessage,loadedResource){
                // var TipBoxPrefab_tips = cc.instantiate(loadedResource);
                var TipBoxPrefab = cc.instantiate(loadedResource);
                TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    _this.openBag_hidden()
                }, this);
                http_globalData.alert_shangdian =TipBoxPrefab
                resolve();
            })   
        });
    },
 
    //操作提示
    alert_goTips(tips){
        var TipBoxPrefab_tips = cc.instantiate(http_globalData.alert_tips)
        TipBoxPrefab_tips.getChildByName('提示s').getComponent(cc.Label).string=tips
        TipBoxPrefab_tips.runAction(cc.sequence( cc.fadeIn(0.1),cc.delayTime(0.3),cc.fadeOut(0.2)),cc.callFunc(function(){ 
            //移除挂载
            TipBoxPrefab_tips.destroy();
        },this)); 
        cc.find('Canvas').addChild(TipBoxPrefab_tips); 
    },
     // 隐藏弹窗
     hidePopup(popupNode) {
        // 播放隐藏动画
        popupNode.active = false;
         popupNode.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function() {
            // 动画播放完成后将节点设置为不可见
   
        }, this)));
    },
    // 显示弹窗
    showPopup(popupNode) {
        // 设置节点为可见并播放显示动画
        // 播放动画，"showAnimation" 是弹窗显示的动画名称
           // 设置节点为可见并播放显示动画
           popupNode.active = true;
           // 播放动画，"showAnimation" 是弹窗显示的动画名称
           popupNode.runAction(cc.sequence(cc.fadeOut(0.01),cc.fadeIn(0.5), cc.callFunc(function() {
               // 动画播放完成的回调
           }, this)));
    },


    //创建生物弹窗
    async alert_biologyTips(TipBoxPrefab){
        return new Promise(resolve => {    
            httpRequestAlert.actionBlink_show(TipBoxPrefab.getChildByName('右旋转'),0,1,360,360,1.6)
            httpRequestAlert.actionBlink_show(TipBoxPrefab.getChildByName('生物创造'),0,1,360,360,1.6)
        // var TipBoxPrefab_tips = cc.instantiate(http_globalData.alert_tips)
        // TipBoxPrefab_tips.getChildByName('提示s').getComponent(cc.Label).string=tips
            this.schedule(function(){
                var TipBoxPrefab_tips = cc.instantiate(http_globalData.alert_biologyDetail)
                // TipBoxPrefab_tips.getChildByName('提示s').getComponent(cc.Label).string=tips
                // TipBoxPrefab_tips.runAction(cc.sequence( cc.fadeIn(0.1),cc.delayTime(0.3),cc.fadeOut(0.2)),cc.callFunc(function(){ 
                //     //移除挂载
                //     TipBoxPrefab_tips.destroy();
                // },this)); 
                cc.find('Canvas/弹窗').addChild(TipBoxPrefab_tips); 
                resolve();
            },1,0)
        });
 
    },
 


    //重复闪烁旋转   time 时常/角度
    actionBlink_show(TipBoxPrefab_icon,runing,time,ratation,ratation_back,big){
        // TipBoxPrefab_icon.getChildByName('旋转')
    // var _this=this;
    // 创建旋转动作，这里以每秒绕X轴旋转360度为例
    // const rotateAction = cc.rotateBy(5,360)
    // const rotateAction = cc.blink(1,1)
    // const actionhiddenOn = cc.fadeTo(0.1,0);
    // const actionhiddenoff = cc.fadeTo(0.1,255); 
    if(runing){
        const actionhiddenBig = cc.spawn(cc.rotateBy(time,ratation),cc.scaleTo(time,big,big),cc.delayTime(1))
        const actionhiddenSmoll   = cc.spawn(cc.rotateBy(time,ratation_back),cc.scaleTo(time,1,1),cc.delayTime(1))
        const  repeatAction  = cc.repeatForever(cc.sequence(actionhiddenBig,actionhiddenSmoll),cc.callFunc(function(){   },this))
        TipBoxPrefab_icon.runAction(repeatAction);
    }else{
        const actionhiddenBig = cc.spawn(cc.rotateBy(time,ratation),cc.scaleTo(time,big,big),cc.delayTime(1))
        const actionhiddenSmoll   = cc.spawn(cc.rotateBy(time,ratation_back),cc.scaleTo(time,1,1),cc.delayTime(1))
        TipBoxPrefab_icon.runAction(cc.sequence(actionhiddenBig,actionhiddenSmoll) ,cc.callFunc(function(){   },this));
        // const actionhiddenSmoll   = cc.spawn(cc.rotateBy(0.01,0),cc.scaleTo(0.01,1,1),cc.delayTime(0.01))
        // const  repeatAction  = cc.repeatForever(cc.sequence(actionhiddenSmoll),cc.callFunc(function(){   },this))
        // TipBoxPrefab_icon.runAction(repeatAction);
        // TipBoxPrefab_icon.stopAllActions();
    }
},
});
window.httpRequestAlert = new httpAlert();