// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    //技能图片渲染
    biology_detail_skill(TipBoxPrefab,position_skill){
        var _this =this;
        var TOOLS =[];
        var TOOLS = position_skill;
        var TipBoxPrefab_icon=[];

            //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
            cc.loader.loadRes('/model弹窗/biology_生物_技能图标', function(errorMessage,loadedResource_icon){
              
                for (var prop in position_skill) {
                    let skill = TOOLS[prop];
                    let image = '/技能图标/'+skill.image;
              
                //检查资源加载
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                if( !(loadedResource_icon instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
                //开始实例化预制资源
                let   TipBoxPrefab_icon =  cc.instantiate(loadedResource_icon);
                //载入技能图片
                if(image!=''){
                    cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) { 
                        if (err) {
                            // cc.error(err.message || err);
                            return;
                        }
                        TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = texture; 
                    });
                }else{
                    TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = false; 
                }
                //技能等级
                TipBoxPrefab_icon.getChildByName('技能s').getComponent(cc.Label).string=skill.type

                // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
                // 此处进行事件绑定
                TipBoxPrefab_icon.on('click', function () {
                    // 事件处理逻辑
                    _this.bindClickEventIcon(TipBoxPrefab_icon.getComponent(cc.Button), skill,TipBoxPrefab,TipBoxPrefab_icon);
                }, this);

                //写入icon
                TipBoxPrefab.getChildByName('技能列表').addChild(TipBoxPrefab_icon);
            }
        })
        return TipBoxPrefab
    },
    // 绑定按钮事件
    bindClickEventIcon: function (button, skill,TipBoxPrefab,TipBoxPrefab_icon) {
        // cc.log(skill)
        //加载预制资源 PrefabUrl为 预制资源在 资源中的路径

        // 销毁所有弹窗--节点
        TipBoxPrefab.getChildByName('技能描述').removeAllChildren();

        let move_type= ['初始化','回合化','被击前触发','被击后触发','攻击前触发','主动','攻击后']
        cc.loader.loadRes('/model弹窗/biology_生物_战斗技能提示', function(errorMessage,loadedResource){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !(loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            let tips_Prefab = cc.instantiate(loadedResource);
            tips_Prefab.getChildByName('D技能图标').getComponent(cc.Sprite).spriteFrame = TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame
            tips_Prefab.getChildByName('D技能名称s').getComponent(cc.Label).string=skill.name+'-['+skill.type+']'
            tips_Prefab.getChildByName('D技能消耗s').getComponent(cc.Label).string='消耗：'+Math.abs(skill.needValue)
            var attack=skill.attack==0?'被动':'主动'
            tips_Prefab.getChildByName('D技能类型s').getComponent(cc.Label).string='触发: '+attack
            var star ='';    
            for(var i=0;i<=skill['type'];i++){
                star +='☆';
            }
            tips_Prefab.getChildByName('D技能星级s').getComponent(cc.Label).string='稀有程度：'+star
            var hurtType=skill.hurtType==1?'物理':'法术'
            tips_Prefab.getChildByName('D技能攻击s').getComponent(cc.Label).string='攻击类型: '+hurtType
            tips_Prefab.getChildByName('D技能触发s').getComponent(cc.Label).string='触发几率：'+skill.probability+'%'
            tips_Prefab.getChildByName('D发动时机s').getComponent(cc.Label).string='攻击类型: '+move_type[skill.belong]
            tips_Prefab.getChildByName('D技能来源s').getComponent(cc.Label).string='技能来源：'+skill.words 
            tips_Prefab.getChildByName('D技能描述s').getComponent(cc.Label).string='技能说明：'+skill.describe

            //载入生物详情
            TipBoxPrefab.getChildByName('技能描述').addChild(tips_Prefab);

        });


    },

    // update (dt) {},
});
