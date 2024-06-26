// require("../common"); 
cc.Class({
    extends: cc.Component,

    properties: {
    },
    //生成生物
    async biology_detail_list(TipBoxPrefab_model,info_list,biolgy_state,is_my,star){
         return new Promise(resolve => {
        var _this =this;
        var TOOLS =[];
        var TOOLS = info_list;
        // let image = '/技能图标/'+skill.image;
        //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
        // cc.loader.loadRes('/model战斗/biology_生物详情', function(errorMessage,loadedResource_icon){
            //检查资源加载
            // if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            // if( !(loadedResource_icon instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
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
                    _this.onConfirBtn(TipBoxPrefab_icon,info);
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
        // })

        })
        return TipBoxPrefab_model
    },
    //按钮点击回调
    onConfirBtn:function(TipBoxPrefab_icon,info){
        var _this =this;
        TipBoxPrefab_icon.on('click', function () {
            //技能图标挂载
            var alertBoxPrefab = cc.find('Canvas/弹窗')
            //图片直接传过去，不用再加载一次
            var biology_image =TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame;
            alertBoxPrefab.getComponent('biology_detailTools').biology_detail_alert(alertBoxPrefab,info,biology_image)
        })
    },
   
});
