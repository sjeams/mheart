cc.Class({
    extends: cc.Component,

    properties: {
        server_type: cc.Node,
        server_name: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    initInfo (info) {
        // 初始化该道具相关信息

        // 图片
        var self = this;
        
        if(info['picUrl']){
            cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
                self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
            });
        }

        this.server_type.getComponent(cc.Label).string=info['type'];
        this.server_name.getComponent(cc.Label).string= info['id']+'区  -  '+info['name'];

    },
});
