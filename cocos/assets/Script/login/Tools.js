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

        // this.server_type.getComponent(cc.Label).string=info['type'];
        if(info['num']<100){
            this.server_type.getComponent(cc.Label).string='空闲';
            this.node.getChildByName('server_type').color = new cc.color('green');
        }else if(info['num']<500&&info['num']>=100){
            this.server_type.getComponent(cc.Label).string='流畅';
            this.node.getChildByName('server_type').color = new cc.color('#BDFF00');
        }else if(info['num']<1000&&info['num']>=500){
            this.server_type.getComponent(cc.Label).string='拥挤';
            this.node.getChildByName('server_type').color = new cc.color('#FFD100');
        }else{
            this.server_type.getComponent(cc.Label).string='爆满';
            this.node.getChildByName('server_type').color = new cc.color('#FF0000'); 
        }    

        this.server_name.getComponent(cc.Label).string= info['id']+'区  -  '+info['name'];
        
    },
});
