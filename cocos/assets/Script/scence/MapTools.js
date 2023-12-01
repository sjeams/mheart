/*
 * @Author: sjeam
 * @Date: 2022-06-14 16:01:41
 * @Description: 
 */
var HttpHelper = require("http"); 
var httpRequest = new HttpHelper();
var params =[];
cc.Class({
    extends: cc.Component,

    properties: {
  
        server_type: cc.Node,
        server_name: cc.Node,
        sprite_server_login: cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    initInfo (info) {
        // 初始化该道具相关信息
        // 图片
        var _self = this;
 
        if(info['picture']){

            var remoteUrl = httpRequest.httpUrl(info['picture']);
            // cc.loader.loadRes(httpRequest.httpUrl(info['picture']), cc.SpriteFrame, function (err, spriteFrame) {   
            //     console.log(_self)
            //     _self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
            // });
            cc.loader.load({ url: remoteUrl }, function (err, texture) {  
                //     console.log(_self)
                    // _self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
                _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
            });
        }
        // this.server_type.getComponent(cc.Label).string=info['type'];
        // if(info['num']<100){
        //     this.server_type.getComponent(cc.Label).string='空闲';
        //     this.node.getChildByName('server_type').color = new cc.color('green');
        // }else if(info['num']<500&&info['num']>=100){
        //     this.server_type.getComponent(cc.Label).string='流畅';
        //     this.node.getChildByName('server_type').color = new cc.color('#BDFF00');
        // }else if(info['num']<1000&&info['num']>=500){
        //     this.server_type.getComponent(cc.Label).string='拥挤';
        //     this.node.getChildByName('server_type').color = new cc.color('#FFD100');
        // }else{
        //     this.server_type.getComponent(cc.Label).string='爆满';
        //     this.node.getChildByName('server_type').color = new cc.color('#FF0000'); 
        // }    
        this.server_type.getComponent(cc.Label).string=info['type'];
        this.server_type.getComponent(cc.Label).string=info['type'];
        this.node.getChildByName('server_type').color = new cc.color(info['color']);

        this.server_name.getComponent(cc.Label).string= info['id']+'区  -  '+info['name'];
        //创建一个新button 并将其挂载到创建的精灵下
        this.bindClickEvent( this.sprite_server_login.getComponent(cc.Button), info);
    },
    // 绑定按钮事件
    bindClickEvent: function (button, index) {
        // console.log(index)
        var clickEventHandler = new cc.Component.EventHandler();
        //这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.target = this.node; 
        //这个是代码文件名
        clickEventHandler.component = "MapTools";  // js脚本文件-绑定
        clickEventHandler.handler = "onConfirBtn";// js方法名称--绑定
        clickEventHandler.customEventData = index; // 回调内容
        button.clickEvents.push(clickEventHandler);
    },
 

    //按钮点击回调
    onConfirBtn:function(e,info){
        console.log(info)
        var HttpHelper = require("http"); 
        var httpRequest = new HttpHelper();
        httpRequest.httpPost('/app/api-server/user-server', {
            'id': info['id'],
            'token': null
        }, function (data) {
                        console.log(data);
            var server_choes_label  =cc.find("Canvas/server/server_choes/server_choes_label");
            server_choes_label.getComponent(cc.Label).string=info['name'];
            var server_choes_type  =cc.find("Canvas/server/server_choes/server_choes_type");
            server_choes_type.getComponent(cc.Label).string=info['type'];
            server_choes_type.color = new cc.color(info['color']); 
        })

        var mask =cc.find("Canvas/mask");
      

        mask.active=false
      
        // var mask =  this.node.getChildByName('mask')
    
        // console.log(this.node.getSiblingIndex())
        // console.log( this.node.parent.getComponent(cc.Button));
     
        // this.node.getChildByName("sprite_server_login").on('click',function(event){
        //     console.log("点击到按钮");
        //     callback();
        // },this);
        // this.node.active =false; // 直接去掉模型节点
    },
 
});
