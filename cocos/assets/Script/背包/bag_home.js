// require("../common"); 
cc.Class({
    extends: cc.Component,

    properties: {
 
    },
    async onLoad () {
        await httpRequestModel.model_home_openBiology() //加载生物
        await httpRequestModel.model_home_biology_detail() //加载生物详情
        await httpRequestModel.model_home_biology_detail_heard() //加载生物头像
        await httpRequestModel.model_home_biology_detail_heard_icon() //加载生物头像图标

        await httpRequestModel.model_home_zhenfa() //加载阵法
        await httpRequestModel.model_home_zhenfa_bag() //加载阵法背包
        await httpRequestModel.model_home_zhenfa_icon() //加载阵法图标
        await httpRequestModel.model_home_zhenfa_biology() //加载阵法生物图标
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
                var TipBoxPrefab_model =  http_globalData.model_home_zhenfa //阵法
                var TipBoxPrefab =  http_globalData.model_home_zhenfa_bag //阵法背包
                //生物列表挂载
                TipBoxPrefab_model.getComponent('bag_zhenfa头像Tools').biology_detail_list(TipBoxPrefab_model,TipBoxPrefab)
                TipBoxPrefab.getChildByName('上阵数s').getComponent(cc.Label).string =  http_globalData.zhenfa_info.num
                //写入icon
                TipBoxPrefab_model.getChildByName('背包生物').addChild(TipBoxPrefab);
                //写入模型
                BoxPrefab.addChild(TipBoxPrefab_model,1);
  
        }else{
        //如果没有生物需要弹窗另一个提示
        }
    },

});
