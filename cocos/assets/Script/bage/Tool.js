cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    initInfo (info) {
        // 初始化该道具相关信息

        // 图片
        var self = this;
        cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
            self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });

        // 介绍
        this.node.intro = info['intro'];
    },
});
