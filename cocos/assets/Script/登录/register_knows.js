require("../common"); 
cc.Class({
    extends: cc.Component,
 
    properties: {

        register_knows_webview:cc.WebView
    },
 
    onLoad: function () {
 
    },

    start () {
 
    },
 
    // update (dt) {},

    show_dlg () {
        this.node.active =true;
    },
    hidden_dlg () {
        this.node.active =false;
    },

    xieyi_show_dlg () {
        // 假设你的 webview 组件的名称是 'webview'
        var webview = cc.find("Canvas/隐私协议/register_knows_webview").getComponent(cc.WebView);   
        webview.url="https://www.aheart.cn/app/api-server/xieyi"
        this.node.active =true;
    },
    xieyi_hidden_dlg () {
        this.node.active =false;
    },
    yinsi_show_dlg () {
        // 假设你的 webview 组件的名称是 'webview'
        var webview = cc.find("Canvas/隐私协议/register_knows_webview").getComponent(cc.WebView);       
        // 设置你想要加载的 URL
        webview.url = 'https://www.aheart.cn/app/api-server/yinsi';
        this.node.active =true;
    },
    yinsi_hidden_dlg () {
        this.node.active =false;
    }

});
