// require("../common"); 
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
     //技能图片渲染
     biology_detail_alert(info){
         //尽量先关闭所有弹窗
         http_globalAsset.TipBoxPrefab_model.getChildByName('左边弹窗').removeAllChildren();
         http_globalAsset.TipBoxPrefab_model.getChildByName('中间弹窗').removeAllChildren();
         http_globalAsset.TipBoxPrefab_model.getChildByName('右边弹窗').removeAllChildren();
        //开始实例化预制资源
        let   TipBoxPrefab =  cc.instantiate(http_globalAsset.model_zhuangbei_bag_skill);
        //技能等级
        // TipBoxPrefab.getChildByName('生物数量s').getComponent(cc.Label).string='生物('+info_list.length+'/60)'
        // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
        this.biology_detail_list(TipBoxPrefab,info.position_skill)
        // 此处进行事件绑定
        this.bind_button(TipBoxPrefab,info)
        //写入icon
        http_globalAsset.TipBoxPrefab_model.getChildByName('生物信息').addChild(TipBoxPrefab);
    },
    //绑定点击事件
    bind_button(TipBoxPrefab,info){
        
        //  cc.find("列表/content/gridLayout",TipBoxPrefab)
        TipBoxPrefab.getChildByName('信息').on('click', function () {
            // 事件处理逻辑
            //移除挂载
            http_globalAsset.TipBoxPrefab_model.getChildByName('生物信息').removeAllChildren();
            //重新挂载
            http_globalAsset.TipBoxPrefab_model.getComponent('biology_xinxiTools').biology_detail_alert(info)
        }, this);
        TipBoxPrefab.getChildByName('缘分').on('click', function () {
            // 事件处理逻辑
            //移除挂载
            http_globalAsset.TipBoxPrefab_model.getChildByName('生物信息').removeAllChildren();
            //重新挂载
            http_globalAsset.TipBoxPrefab_model.getComponent('biology_yuanfenTools').biology_detail_alert(info)
        }, this);
    },

    //技能图片渲染
    biology_detail_list(TipBoxPrefab,position_skill){
        var TOOLS =[];
        var TOOLS = position_skill;            
        for (var prop in position_skill) {
            let skill = TOOLS[prop];
            //开始实例化预制资源
            let   TipBoxPrefab_icon =  cc.instantiate( http_globalAsset.model_zhuangbei_bag_skill_icon);
            //载入技能图片
            TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame =  http_globalAsset.http_base_asset_skill[skill.image]
            //技能等级
            TipBoxPrefab_icon.getChildByName('技能s').getComponent(cc.Label).string=skill.type
            // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
            // 此处进行事件绑定
            TipBoxPrefab_icon.on('click', function () {
                // 事件处理逻辑
                this.bindClickEventIcon(skill);
            }, this);
            //写入icon
            TipBoxPrefab.getChildByName('技能列表').addChild(TipBoxPrefab_icon);
        } 
    },
    // 绑定按钮事件
    bindClickEventIcon(skill) {
        // cc.log(skill)
        //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
        // 销毁所有弹窗--节点
        http_globalAsset.TipBoxPrefab_model.getChildByName('中间弹窗').removeAllChildren();
        let move_type= ['初始化','回合化','被击前触发','被击后触发','攻击前触发','主动','攻击后']
        //开始实例化预制资源
        let tips_Prefab = cc.instantiate(http_globalAsset.model_zhuangbei_bag_skill_tips);
        // tips_Prefab.getChildByName('D技能图标').getComponent(cc.Sprite).spriteFrame = TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame
        tips_Prefab.getChildByName('D技能图标').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_skill[skill.image]
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
        http_globalAsset.TipBoxPrefab_model.getChildByName('中间弹窗').addChild(tips_Prefab);

    },
    // update (dt) {},
});
