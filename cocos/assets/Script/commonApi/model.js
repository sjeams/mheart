// 背包的api请求接口
const httpModel = cc.Class({
    extends: cc.Component,
    //引入的基础类--战斗模型
    async http_base_model(){
        if(!http_globalAsset.model_biology_fightingBiology==[]){
            await httpRequestModel.model_biology_fightingBiology() //加载模型
        }
        if(!http_globalAsset.model_biology_fightingDetail==[]){
            await httpRequestModel.model_biology_fightingDetail();//加载战斗生物详情
        }
        if(!http_globalAsset.model_biology_SkillIcon==[]){
            await httpRequestModel.model_biology_SkillIcon();//加载战斗技能图标
        }
        if(!http_globalAsset.model_biology_SkillTips==[]){
            await httpRequestModel.model_biology_SkillTips();//加载战斗技能提示
        }
        if(!http_globalAsset.model_biology_fightingEnd==[]){
            await httpRequestModel.model_biology_fightingEnd();//加载战斗技能提示
        }
        await httpRequestModel.model_biology_fightingEnd();//加载战斗结果--不是唯一的，每次都会变
    },

    //加载进度条
    async model_onload_loading() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model弹窗/进度条', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_onload_loading =TipBoxPrefab
                resolve();
            })   
        });
    },
    //移除容器
    removeBoxprefab(){
        http_globalData.BoxPrefab_content.removeAllChildren();
        http_globalData.BoxPrefab_content.destroyAllChildren();
    },
    openAlert_remove(){
        // cc.find('Canvas/弹窗').active =false;
        cc.find('Canvas/弹窗').removeAllChildren();// 结束弹窗结果
    },
    openAlert_hidden(){
        // cc.find('Canvas/弹窗').active =false;
        cc.find('Canvas/结算').active =false;// 结束弹窗结果
    },
    //阵法 关闭 提交结果，需要单独处理了
    async openzhenfa_hidden(){
        // cc.log(http_globalData.zhenfa)   
        await  httpRequestBagApi.http_update_zhenfa()
        // cc.find('Canvas/弹窗').removeAllChildren();
    },
    //战斗--加载模板战斗生物详情
   async model_biology_fightingBiology() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model战斗/biology_生物详情', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_biology_fightingBiology =TipBoxPrefab
                resolve();
            })   
        });
    },

 
    //战斗--加载模板战斗生物技能
    async model_biology_fightingDetail() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model弹窗/biology_生物_战斗详情', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_biology_fightingDetail =TipBoxPrefab
                resolve();
            })   
        });
    },
    
    //战斗--加载模板战斗生物技能
    async model_biology_SkillIcon() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model弹窗/biology_生物_技能图标', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_biology_SkillIcon =TipBoxPrefab
                resolve();
            })   
        });
    },
    //战斗--加载模板战斗生物技能
    async model_biology_SkillTips() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model弹窗/biology_生物_战斗技能提示', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_biology_SkillTips =TipBoxPrefab
                resolve();
            })   
        });
    },

    // //操作提示
    // alert_goTips(tips){
    //     var TipBoxPrefab_tips = cc.instantiate(http_globalData.alert_tips)
    //     TipBoxPrefab_tips.getChildByName('提示s').getComponent(cc.Label).string=tips
    //     TipBoxPrefab_tips.runAction(cc.sequence( cc.fadeIn(0.1),cc.delayTime(0.3),cc.fadeOut(0.2)),cc.callFunc(function(){ 
    //         //移除挂载
    //         TipBoxPrefab_tips.destroy();
    //     },this)); 
    //     cc.find('Canvas').addChild(TipBoxPrefab_tips); 
    // },


   //战斗-战斗结束
    async model_biology_fightingEnd() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model弹窗/biology_结算', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    httpRequestModel.openAlert_hidden()
                }, this);
                TipBoxPrefab.getChildByName('canser').on('click', function () {
                    httpRequestModel.openAlert_hidden()
                }, this);
                TipBoxPrefab.getChildByName('返回地图').on('click', function () {
                    httpRequest.playGame("sence_ditu")
                }, this);
                TipBoxPrefab.getChildByName('重播').on('click', function () {
                    httpRequestModel.removeBoxprefab()
                    cc.find('Canvas/大厅/content').getComponent('score_fighting').playTask( )
                    httpRequestModel.openAlert_hidden()
                }, this);
                http_globalData.model_biology_fightingEnd = TipBoxPrefab
                resolve();
            })   
        });
    },


    //生成战斗结束
    async fightingEnd() {
        // var _this =this;
        return new Promise(resolve => { 
            var fighting_list =  http_globalData.fighting.data; 
    
            //开始实例化预制资源
            let  TipBoxPrefab =  http_globalData.model_biology_fightingEnd
            // cc.log(TipBoxPrefab)
            // TipBoxPrefab.getComponent('fightingTools').initInfo(fighting_list); //写入奖励物品预制体
            if(fighting_list.poition_winner==1){
            TipBoxPrefab.getChildByName('结果s').getComponent(cc.Label).string='胜利！';
            }else{
            TipBoxPrefab.getChildByName('结果s').getComponent(cc.Label).string='失败！';
            }
            //将预制资源添加到父节点
            cc.find('Canvas/结算/弹框').addChild(TipBoxPrefab,this);
        
            resolve()
        }) 
    },

    //背包
    async model_home_openBiology() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model背包/A生物背包', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    httpRequestModel.openAlert_remove()
                }, this);
                http_globalData.model_home_openBiology =TipBoxPrefab
                resolve();
            })   
        });
    },

    //阵法
    async model_home_zhenfa() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model布阵/A生物布阵', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    httpRequestModel.openzhenfa_hidden()
                }, this);
                http_globalData.model_home_zhenfa =TipBoxPrefab
                resolve();
            })   
        });
    },
    //阵法
    async model_home_zhenfa_bag() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model布阵/背包生物', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalData.model_home_zhenfa_bag =TipBoxPrefab
                resolve();
            })   
        });
    },
    //阵法
    async model_home_zhenfa_icon() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model布阵/图标生物', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalData.model_home_zhenfa_icon =TipBoxPrefab
                resolve();
            })   
        });
    },
    //阵法
    async model_home_zhenfa_biology() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model布阵/图标阵法', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalData.model_home_zhenfa_biology =TipBoxPrefab
                resolve();
            })   
        });
    },
 
});
window.httpRequestModel = new httpModel();