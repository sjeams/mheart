require("../common"); 
cc.Class({
    extends: cc.Component,

    properties: {

    },
    // LIFE-CYCLE CALLBACKS:
    //技能图片渲染
    biology_buzhen_list(TipBoxPrefab_model,TipBoxPrefab){
        // var biology = http_globalData.zhenfa
        //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
        // var _this =this;
        // cc.loader.loadRes('/model布阵/图标阵法', function(errorMessage,loadedResource_icon){
            for (var prop in http_globalData.zhenfa) {
                // var key = http_globalData.zhenfa[prop];
                var biology_id = http_globalData.zhenfa[prop]
                //开始实例化预制资源
                var   TipBoxPrefab_icon =  cc.instantiate(http_globalData.model_home_zhenfa_biology)
                //写入详情
                this.biology_buzhen_detail(TipBoxPrefab_model,TipBoxPrefab,TipBoxPrefab_icon,biology_id)
                //拖拽逻辑
                TipBoxPrefab_model.getComponent('bag_zhenfa头像Tools').bind_button_detail(TipBoxPrefab_model,TipBoxPrefab,TipBoxPrefab_icon,true)
                // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
                // 此处进行事件绑定
                // 事件处理逻辑
                // _this.bindClickRemove(TipBoxPrefab_model,TipBoxPrefab,TipBoxPrefab_icon);
                TipBoxPrefab.getChildByName('阵法详情').addChild(TipBoxPrefab_icon);
            }
        // })
    },
     //布阵详情
     biology_buzhen_detail(TipBoxPrefab_model,TipBoxPrefab,TipBoxPrefab_icon,biology_id){

        if(TipBoxPrefab_icon){
            if(http_globalData.biology[biology_id]){
                TipBoxPrefab_icon.getChildByName('生物').active=true
                //查找头部的生物信息
                // var texture =  cc.find("content/列表/content/gridLayout",TipBoxPrefab).children[biology_id].getChildByName('P技能').getComponent(cc.Sprite).spriteFrame 
                //加载头像
                // cc.loader.loadRes(http_globalData.biology[biology_id].picture, cc.SpriteFrame, function (err, texture) { 
                    TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame =   http_globalAsset.http_base_asset_biology[http_globalData.biology[biology_id].picture]
                // });
                //技能等级
                TipBoxPrefab_icon.getChildByName('名称s').getComponent(cc.Label).string=http_globalData.biology[biology_id].name
                TipBoxPrefab_icon.getChildByName('生物').color = new cc.color('#FFFFFF');
            }else{
                TipBoxPrefab_icon.getChildByName('生物').active=false
                TipBoxPrefab_icon.getChildByName('名称s').getComponent(cc.Label).string=''
                TipBoxPrefab_icon.getChildByName('生物').color = new cc.color('#FFFFFF');
            }
        }
    },
});
