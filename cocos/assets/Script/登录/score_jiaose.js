 
require("../common"); 
cc.Class({
    extends: cc.Component,
    properties: {
    },
   async onLoad () {
        this.biology_detail_list()
    },
    start () {
   
    },
    //技能图片渲染
    biology_detail_list(){
        var info_list = http_globalData.user_jiaose
        cc.log(info_list)
        var TipBoxPrefab_model = cc.find('Canvas/大厅/content')
        var _this =this;
        var TOOLS =[];
        var TOOLS = info_list;
        // let image = '/技能图标/'+skill.image;
        //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
        cc.loader.loadRes('/model召唤/sprite_生物角色', function(errorMessage,loadedResource_icon){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !(loadedResource_icon instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            for (var prop in info_list) {
                //声明节点对象
                let TipBoxPrefab_icon =  cc.instantiate(loadedResource_icon);
                let info = TOOLS[prop];
                //放在资源下面
                let image = info.jiaose.picture;
                if(info.jiaose){
                    cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) { 
                        if (err) {
                            // cc.error(err.message || err);
                            return;
                        }
                        TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = texture; 
                    });
                    TipBoxPrefab_icon.info =info
                    // var color = ['#ffffff','green','#BDFF00','#FFD100','#FF0000','#ffe000',];
                    // var type_color = color[info['type']];
                    // // console.log(info)
                    // var star ='';    
                    // for(var i=0;i<=info['star'];i++){
                    //     star +='⭐';
                    // }
                    // TipBoxPrefab_icon.getChildByName('名称').getComponent(cc.Label).string=info.name;
                    // TipBoxPrefab_icon.getChildByName('名称').color = new cc.color(type_color);
                    // TipBoxPrefab_icon.getChildByName('世界等级').getComponent(cc.Label).string= info.type_name;
                    // TipBoxPrefab_icon.getChildByName('世界等级').color = new cc.color(type_color);
                    // TipBoxPrefab_icon.getChildByName('星级').getComponent(cc.Label).string= star;
                    //创建一个新button 并将其挂载到创建的精灵下
                    _this.onConfirBtn(TipBoxPrefab_icon);
                    //写入icon
                    TipBoxPrefab_model.addChild(TipBoxPrefab_icon);
                }
            }
            _this.clickButton(cc.find('Canvas/大厅/content').children[0])
     
        })
        // return TipBoxPrefab_model;
        // TipBoxPrefab_model.children[0].emit('click', _this.onConfirBtn,this);
        // onConfirBtn(TipBoxPrefab_model.children[0],info_list[0].jiaose.picture)
    },
    //按钮点击回调
    onConfirBtn(TipBoxPrefab_icon){
        var _this =this;
        _this.actionBlink_show(TipBoxPrefab_icon,1)
        TipBoxPrefab_icon.on('click', function () {
            _this.clickButton(TipBoxPrefab_icon)
    
            //session设置战斗请求id
            // cc.sys.localStorage.setItem('figthing_map_int', JSON.stringify(map_int)); 
            // httpRequest.playGame("sence_zhandou",1,1)
        })
    },
    clickButton(TipBoxPrefab_icon){
        if(http_globalData.user_jiaose_check){
            http_globalData.user_jiaose_check.getChildByName('遮罩').active=true;
            // this.actionBlink_show(http_globalData.user_jiaose_check,0)
        }
        TipBoxPrefab_icon.getChildByName('遮罩').active=false;
        http_globalData.user_jiaose_check = TipBoxPrefab_icon;
        // this.actionBlink_show(TipBoxPrefab_icon,1)
    },
      //重复闪烁
    actionBlink_show(TipBoxPrefab_icon,runing){
        var _this=this;
        // 创建旋转动作，这里以每秒绕X轴旋转360度为例
        // const rotateAction = cc.rotateBy(5,360)
        // const rotateAction = cc.blink(1,1)
        // const actionhiddenOn = cc.fadeTo(0.1,0);
        // const actionhiddenoff = cc.fadeTo(0.1,255); 
        const actionhiddenBig = cc.spawn(cc.rotateBy(5,360),cc.scaleTo(5,1.2,1.2),cc.delayTime(1))
        const actionhiddenSmoll   = cc.spawn(cc.rotateBy(5,360),cc.scaleTo(5,1,1),cc.delayTime(1))
        if(runing){
            const  repeatAction  = cc.repeatForever(cc.sequence(actionhiddenBig,actionhiddenSmoll),cc.callFunc(function(){   },this))
            TipBoxPrefab_icon.getChildByName('旋转').runAction(repeatAction);
        }else{
            TipBoxPrefab_icon.getChildByName('旋转').stopAllActions();
        }
    },
    // update (dt) {},
    //创建角色 ，登录 ，跳转大厅
    createUser(){
    // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo)); 
    // httpRequest.playGame("sence_dating");
    },
    back_login(){
        //移除节点
        // httpRequest.playGame("sence_login")
        cc.director.loadScene(httpRequest.urlConfig("sence_login"));
    },
});

