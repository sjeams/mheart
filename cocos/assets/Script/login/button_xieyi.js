cc.Class({
    extends: cc.Component,

    properties: {
        // scorllview:cc.ScorllView
    },

    // LIFE-CYCLE CALLBACKS:
    // cc.loader.releaseRes("test assets/anim");
    onLoad () {
 
    },
 
    start () {

    },
    // gonggao_sz(){
    //         var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    //         tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_sz');
    // },
    // gonggao_sx(){
 
    //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_sx');
    // },
    // gonggao_gx(){
 
    //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_gx');
    // },
    // gonggao_lx(){
 
    //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_lx');
    // },
    show_dlg () {
        this.node.active =true;
    },
    hidden_dlg () {
        this.node.active =false;
    }
    // update (dt) {},
});
