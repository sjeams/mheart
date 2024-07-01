// require("../common"); 
cc.Class({
    extends: cc.Component,
    properties: {
    },
    //技能图片渲染
    biology_detail_list(TipBoxPrefab_model,info_list){
        var _this =this;
        var TOOLS =[];
        var TOOLS = info_list;
        // let image = '/技能图标/'+skill.image;
        //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
        cc.loader.loadRes('/model战斗/sprite_世界', function(errorMessage,loadedResource_icon){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !(loadedResource_icon instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            for (var prop in info_list) {
                //声明节点对象
                let TipBoxPrefab_icon =  cc.instantiate(loadedResource_icon);
                let info = TOOLS[prop];
                //放在资源下面
                let image = info.picture;
                cc.log(image)
                cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) { 
                    if (err) {
                        // cc.error(err.message || err);
                        return;
                    }
                    TipBoxPrefab_icon.getChildByName('世界').getComponent(cc.Sprite).spriteFrame = texture; 
                });
                var color = ['#ffffff','green','#BDFF00','#FFD100','#FF0000','#ffe000',];
                var type_color = color[info['type']];
                // console.log(info)
                var star ='';    
                for(var i=0;i<=info['star'];i++){
                    star +='⭐';
                }
                TipBoxPrefab_icon.getChildByName('名称').getComponent(cc.Label).string=info.name;
                TipBoxPrefab_icon.getChildByName('名称').color = new cc.color(type_color);
                TipBoxPrefab_icon.getChildByName('世界等级').getComponent(cc.Label).string= info.type_name;
                TipBoxPrefab_icon.getChildByName('世界等级').color = new cc.color(type_color);
                TipBoxPrefab_icon.getChildByName('星级').getComponent(cc.Label).string= star;
                //创建一个新button 并将其挂载到创建的精灵下
                _this.onConfirBtn(TipBoxPrefab_icon,info);
                //写入icon
                TipBoxPrefab_model.addChild(TipBoxPrefab_icon);
       
            }
        })
        return TipBoxPrefab_model
    },
    // initInfo (info) {
    //     // 初始化该道具相关信息
    //     // 图片
    //     // var _self = this;
    //     // var remoteUrl = httpRequest.httpUrl(info['picture']);
    //     // cc.loader.load({ url: remoteUrl }, function (err, texture) {  
    //     //     // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
    //     //     if (err) {
    //     //         // cc.error(err.message || err);
    //     //         return;
    //     //     }
    //     //     if(texture){
    //     //         _self.node.getChildByName('世界').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    //     //     }
    //     // });
    // },
 
    //按钮点击回调
    onConfirBtn:function(TipBoxPrefab_icon,info){
        var _this =this;
        TipBoxPrefab_icon.on('click', function () {
            httpRequest.httpPost('/app/app-apiword/in-word', {
                'wordid': info.id,
                'star': info.star,
            }, function (data) {
                //跳转到世界
                httpRequest.playGame("sence_ditu")
            })
        })
    },
 
 
});
