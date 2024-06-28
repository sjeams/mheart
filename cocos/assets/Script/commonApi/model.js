// 背包的api请求接口
const httpModel = cc.Class({
    extends: cc.Component,
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
    //加载模板战斗生物详情
   async model_biology_fighting() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model战斗/biology_生物详情', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                // var TipBoxPrefab_tips = cc.instantiate(loadedResource);
                http_globalData.model_biology_fighting =loadedResource
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
    //战斗结束
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
                http_globalData.model_biology_fightingEnd =TipBoxPrefab
                resolve();
            })   
        });
    },

    //加载模板战斗生物详情
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

    //加载模板战斗生物详情
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
    //加载模板战斗生物详情
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

});
window.httpRequestModel = new httpModel();