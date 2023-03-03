cc.Class({
    extends: cc.Component,

    properties: {
        scorllview:cc.ScorllView
    },

    // LIFE-CYCLE CALLBACKS:
    // cc.loader.releaseRes("test assets/anim");
    onLoad () {
        cc.sys.localStorage.removeItem('server_tips');
        var HttpHelper = require("http"); 
        var httpRequest = new HttpHelper();
        httpRequest.httpPost('https://www.aheart.cn/app/api-server/user-tips', [], function (data) {
            var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
            tips.getComponent(cc.Label).string=data.data['gonggao_sz'];
            // 转数组
            // cc.log(JSON.parse( data.data ));
            // 转json
            // cc.log(JSON.stringify( data.data ));
            for(let value in data.data){
                cc.sys.localStorage.setItem(value,data.data[value]);
            }
            // cc.sys.localStorage.getItem('server_tips');
        })
    },
 
    start () {

    },
    gonggao_sz(){
            var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
            tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_sz');
    },
    gonggao_sx(){
 
        var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
        tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_sx');
    },
    gonggao_gx(){
 
        var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
        tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_gx');
    },
    gonggao_lx(){
 
        var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
        tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_lx');
    },
    show_dlg () {
        this.node.active =true;
    },
    hidden_dlg () {
        this.node.active =false;
    }
    // update (dt) {},
});
