 
require("../common"); 
cc.Class({
    extends: cc.Component,
    properties: {
    },
   async onLoad () {
        await httpRequestBagApi.http_base_jiaose()
        await this.biology_detail_list()
        this.checkClickButton(http_globalData.user_jiaose_check)
        this.createUserName()
    },
    biology_jiaose(){
        var _this =this;
        httpRequestAlert.hidePopup(cc.find('Canvas/大厅/角色'))
        cc.find('Canvas/大厅/角色').removeAllChildren();
        cc.loader.loadRes('/model召唤/角色', function(errorMessage,jiaose_icon){    
            let TipBoxPrefab_jiaose =  cc.instantiate(jiaose_icon);
            TipBoxPrefab_jiaose.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = http_globalData.user_jiaose_check.texture
            TipBoxPrefab_jiaose.getChildByName('名称s').getComponent(cc.Label).string= http_globalData.user_jiaose_check.texture_name;
            cc.find('Canvas/大厅/角色').addChild(TipBoxPrefab_jiaose);
            httpRequestAlert.showPopup(cc.find('Canvas/大厅/角色'))
        })
    },
    biology_jiaose_alert(){
        var _this =this;
        httpRequestAlert.hidePopup(cc.find('Canvas/大厅/角色详情'))
        cc.find('Canvas/大厅/角色详情').removeAllChildren();
        cc.loader.loadRes('/model召唤/角色详情', function(errorMessage,jiaose_icon){    
            let TipBoxPrefab_jiaose =  cc.instantiate(jiaose_icon);
            cc.loader.loadRes(http_globalData.user_jiaose_check.info.icon, cc.SpriteFrame, function (err, texture) { 
                if (err) {
                    // cc.error(err.message || err);
                    return;
                }
                TipBoxPrefab_jiaose.getChildByName('种族').getComponent(cc.Sprite).spriteFrame = texture; 
            });
            TipBoxPrefab_jiaose.getChildByName('种族s').getComponent(cc.Label).string= http_globalData.user_jiaose_check.info.name+'族'
            
            TipBoxPrefab_jiaose.getChildByName('属性s').getComponent(cc.Label).string= '属性：'+http_globalData.user_jiaose_check.info.type
            TipBoxPrefab_jiaose.getChildByName('特点s').getComponent(cc.Label).string= '特点：'+http_globalData.user_jiaose_check.info.describe
            cc.find('Canvas/大厅/角色详情').addChild(TipBoxPrefab_jiaose);
            httpRequestAlert.showPopup(cc.find('Canvas/大厅/角色详情'))
        })
    },
    start () {

    },


    //技能图片渲染
    async biology_detail_list(){
        return new Promise(resolve => {   
        var info_list = http_globalData.user_jiaose
        if(info_list){


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
                        if(prop==0){
                            http_globalData.user_jiaose_check =TipBoxPrefab_icon;
                        }

                        let info = TOOLS[prop];
                        TipBoxPrefab_icon.info =info
                        //放在资源下面
                        let image = info.jiaose.picture;
                        if(info.jiaose){
                            _this.actionBlink_show(TipBoxPrefab_icon,1)
                            cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) { 
                                if (err) {
                                    // cc.error(err.message || err);
                                    return;
                                }
                                TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = texture; 
                                TipBoxPrefab_icon.texture =texture;
                                TipBoxPrefab_icon.texture_name =info.jiaose.name
                            });
            
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
             resolve();  
                    }
                
              
                }) 
        
        }
    });
        // return TipBoxPrefab_model;
        // TipBoxPrefab_model.children[0].emit('click', _this.onConfirBtn,this);
        // onConfirBtn(TipBoxPrefab_model.children[0],info_list[0].jiaose.picture)
    },
    //按钮点击回调
    onConfirBtn(TipBoxPrefab_icon){
        var _this =this;
        TipBoxPrefab_icon.on('click', function () {
            _this.checkClickButton(TipBoxPrefab_icon)
            //session设置战斗请求id
            // cc.sys.localStorage.setItem('figthing_map_int', JSON.stringify(map_int)); 
            // httpRequest.playGame("sence_zhandou",1,1)
        })
    },
    checkClickButton(TipBoxPrefab_icon){
        if(http_globalData.user_jiaose_check){
            http_globalData.user_jiaose_check.getChildByName('遮罩').active=true;
            // this.actionBlink_show(http_globalData.user_jiaose_check,0)
        }
        TipBoxPrefab_icon.getChildByName('遮罩').active=false;
        http_globalData.user_jiaose_check = TipBoxPrefab_icon;
        this.biology_jiaose()
        this.biology_jiaose_alert()
        // this.actionBlink_show(TipBoxPrefab_icon,1)
    },
      //重复闪烁
    actionBlink_show(TipBoxPrefab_icon,runing){
        // var _this=this;
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
    createUserName(){
       var new_name = httpRequestAlert.getNicheng();
       cc.find('Canvas/大厅/角色名字').getComponent(cc.EditBox).string= new_name
       cc.find('Canvas/大厅/提示s').getComponent(cc.Label).string=''; 
    },
    // update (dt) {},
    //创建角色 ，登录 ，跳转大厅
    createUser(){
     
        var server = JSON.parse(cc.sys.localStorage.getItem('server'));
        server.role =cc.find('Canvas/大厅/角色名字').getComponent(cc.EditBox).string
        server.jiaose_id =http_globalData.user_jiaose_check.info.jiaose.id
        httpRequest.httpPostLogin('/app/api-server/user-role', {server} ,function (data) {
            if(data.code==1){
                httpRequest.playGame("sence_dating");  
            }else{
                cc.find('Canvas/大厅/提示s').getComponent(cc.Label).string= data.message
            }
        })
    // cc.log(http_globalData.user_jiaose_check.info.jiaose.id);
    // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo)); 
    // httpRequest.playGame("sence_dating");
    // cc.find('Canvas/大厅/提示s').getComponent(cc.Label).string= new_name
    },
    back_login(){
        //移除节点
        // // httpRequest.playGame("sence_login")
        // cc.director.loadScene(httpRequest.urlConfig("sence_login"));
        // 假设我们要销毁的节点名为 "DestroyNode"
        cc.director.loadScene(httpRequest.urlConfig("sence_login"), function () {
            // 在新场景加载完成后执行
            // var destroyNode = cc.find("Canvas");
            // if (destroyNode) {
            //     destroyNode.destroy();
            // }
        });

    },
});

