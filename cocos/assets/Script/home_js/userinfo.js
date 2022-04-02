
var HttpHelper = require("http");
// var fs = require('fs'); // 引入fs模块
// var globaluserinfo = require("GlobaluserInfo");
let httpRequest =  new HttpHelper();  
cc.Class({
    extends: cc.Component,
 
    properties: {
        editbox: cc.EditBox
    },
 
    onLoad: function () {

        // 操作文本--读取用户信息
        this.tokenlogin(); // 快捷登录

        // // 账号密码登录
        // this.login();
        //储存缓存
        // cc.sys.localStorage.setItem('token', value);
        // cc.sys.localStorage.getItem(key);
        // cc.sys.localStorage.removeItem(key);
    },
     
    tokenlogin: function(){
        // 获取本地json  信息
        // cc.loader.load( cc.url.raw("resources/login.json"),function(err,res){  
        cc.loader.loadRes('login.json',function(err,res){   //默认resources
            let json = res.json;
            var params = {
                'token': json.token,
            };
            cc.log(json.token); 
            var res = httpRequest.httpPost('http://www.monster.com/app/api-server/token-login', params ,function (data) {
                cc.loader.release('resources/login.json'); //释放json 资源
                // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
                //     jsb.fileUtils.writeStringToFile(data,token)
                // }
                // cc.log(data); 
                // 未登录弹出登录
                if(data.code==0){
                    // this.loginbox.node.active = false;  // 进度隐藏
                }
             
            });
        })

    },

    login: function(){
        var params = {
            'loginname': 'yincan1993',
            'password': 123456,
        };
        httpRequest.httpPost('http://www.monster.com/app/api-server/login', params ,function (data) {
            // cc.log(data); 
            //操作文本--修改用户信息
        });

    },

    btnClick1: function (event, customEventData) {


        
        // // 请求登录接口
        // var params = {
        //         'loginname': 'yincan1993',
        //         'password': 123456,
        //         'serverid': 1,
        // };
        // cc.sys.localStorage.setItem('params', JSON.stringify(params));
        var params = JSON.parse(cc.sys.localStorage.getItem("params"));
        // cc.log(value); 
        // let httpRequest =  new HttpHelper();  
        httpRequest.httpPost('http://www.monster.com/app/api-server/user-login', params ,function (data) {
            cc.log(data); 
            if(data.code==0){ // 登录失败，或本地数据失效
                // 弹窗
            }else{
                // 设置服务器
                cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));
                if(data.code==1){// 登录成功，进入游戏
                    // cc.log(data.data.userinfo); 
                    cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo)); 
                    cc.director.loadScene('home/dating');
                    // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
                    // cc.sys.localStorage.getItem(key); //读取数据
                }
                if(data.code==2){ // 登录成功，未定义角色
                    // 进入定义角色界面     
                    var server = JSON.parse(cc.sys.localStorage.getItem('server'));
                    // cc.log(server); 
                    // 创建角色
                    cc.director.loadScene('register');
                }
            }

        });
        
        //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
        // var node = event.target;
        // var button = node.getComponent(cc.Button);
        //这里的 customEventData 参数就等于你之前设置的 "click1 user data"
        // cc.log("node=", node.name, " event=", event.type, " data=", customEventData);
    },

    callback: function (event) {
        // cc.log(data)
        // var userCount =  cc.find("Canvas/ground/editbox_count").getComponent(cc.EditBox).string;
        // var userPassward =  cc.find("Canvas/ground/editbox_passward").getComponent(cc.EditBox).string;
        // console.log("用户账号："+userCount+ "用户密码："+ userPassward);
        // HttpHelp.login(userCount,userPassward,function(isSuccess,Data){
        //     var info = Data;
        //     if(true == isSuccess){
        //         console.log("login  success!!!");
        //         console.log(info);
        //         globaluserinfo.username = info.username;
        //         globaluserinfo.gamepoint = info.gamepoint;
        //         globaluserinfo.skey = info.skey;
        //         globaluserinfo.userid = info.userid;
 
        //         globaluserinfo.money = info.money;
        //         globaluserinfo.userid = info.userid;
        //         globaluserinfo.password = info.password;
        //         globaluserinfo.salt = info.salt;
 
        //         //登录成功后加载地图资源
                cc.director.loadScene('map');
        //     }else{
        //         console.log("login  filed!!!")
        //     }
        // });
        
    },
 
    start () {
 
    },
 
    // update (dt) {},
});
