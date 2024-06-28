require("../common"); 
cc.Class({
    extends: cc.Component,

    properties: {
        BoxPrefab:cc.find('Canvas/弹窗')
    },
    async onLoad () {
        await httpRequestModel.model_home_openBiology() //加载生物
        await httpRequestModel.model_home_zhenfa() //加载阵法
        await httpRequestModel.model_home_zhenfa_bag() //加载阵法背包
        http_globalData.BoxPrefab_alert = cc.find('Canvas/弹窗')
    },
    start () {

    },
    //刷新背包--每次操作后需要刷新背包
    brushBag(){
        //获取生物列表--实例化背包信息
        httpRequestBagApi.http_bag_info()
    },

    //打开背包
    openBiology() {
        if(http_globalData.biology&&http_globalData.zhenfa&&http_globalData.bag){
            // //技能图标挂载
            var BoxPrefab = http_globalData.BoxPrefab_alert
            var TipBoxPrefab =  http_globalData.model_home_openBiology
            TipBoxPrefab.getComponent('biology_iconTools').biology_detail_alert(TipBoxPrefab)
            // //生物详情挂载--默认加载第一个
            TipBoxPrefab.getComponent('biology_infoTools').biology_detail_alert(TipBoxPrefab)
            BoxPrefab.addChild(TipBoxPrefab,1);
        }else{
        //如果没有生物需要弹窗另一个提示
        }
    },

    //打开阵法
    openZhenfa() {
 
        if(http_globalData.biology&&http_globalData.zhenfa&&http_globalData.bag){
                var BoxPrefab = http_globalData.BoxPrefab_alert
                var TipBoxPrefab_model =  http_globalData.model_home_zhenfa
                var TipBoxPrefab =  http_globalData.model_home_zhenfa_bag
                // cc.loader.loadRes('/model布阵/背包生物', function(errorMessage,loadedResource_icon){
                    //开始实例化预制资源
                    // let   TipBoxPrefab =  cc.instantiate(loadedResource_icon);
                //生物列表挂载
                TipBoxPrefab_model.getComponent('bag_zhenfa头像Tools').biology_detail_list(TipBoxPrefab_model,TipBoxPrefab)
                TipBoxPrefab.getChildByName('上阵数s').getComponent(cc.Label).string =  http_globalData.zhenfa_info.num
                //写入icon
                TipBoxPrefab_model.getChildByName('背包生物').addChild(TipBoxPrefab);
                // })
                BoxPrefab.addChild(TipBoxPrefab_model,1);
  
        }else{
        //如果没有生物需要弹窗另一个提示
        }
    },

    // //打开背包
    // openBag() {
    //     if(http_globalData.biology&&http_globalData.zhenfa&&http_globalData.bag){
    //         //技能图标挂载
    //         var BoxPrefab = cc.find('Canvas/弹窗')
    //         // 销毁所有弹窗
    //         BoxPrefab.removeAllChildren();
    //         cc.loader.loadRes('/model背包/A生物背包', function(errorMessage,loadedResource){
    //             //检查资源加载
    //             if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
    //             if( !(loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
    //             //开始实例化预制资源
    //             var TipBoxPrefab = cc.instantiate(loadedResource);
    //             TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
    //                 httpRequestModel.openBag_hidden()
    //             }, this);
    //             TipBoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,TipBoxPrefab)
    //         })
    //     }else{
    //     //如果没有生物需要弹窗另一个提示
    //     }
    // },

    // //打开阵法
    // openZhenfa() {
 
    //     if(http_globalData.biology&&http_globalData.zhenfa&&http_globalData.bag){
    //         //技能图标挂载
    //         var BoxPrefab = cc.find('Canvas/弹窗')
    //         // 销毁所有弹窗
    //         BoxPrefab.removeAllChildren();
    //         cc.loader.loadRes('/model布阵/A生物布阵', function(errorMessage,loadedResource){
    //             //检查资源加载
    //             if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
    //             if( !(loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
    //             //开始实例化预制资源
    //             var TipBoxPrefab = cc.instantiate(loadedResource);
    //             TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
    //                 httpRequestModel.openzhenfa_hidden()
    //             }, this);
    //             TipBoxPrefab.getComponent('bag_zhenfaTools').biology_detail_alert(BoxPrefab,TipBoxPrefab)
    //         })

    //     }else{
    //     //如果没有生物需要弹窗另一个提示
    //     }
    // },
    //没有处理逻辑，可以共用--关闭窗口
    // openBag_hidden(){
    //     // cc.find('Canvas/弹窗').active =false;
    //     cc.find('Canvas/弹窗').removeAllChildren();
    // },

    // update (dt) {},
});
