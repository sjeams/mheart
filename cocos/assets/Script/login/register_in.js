
var HttpHelper = require("http");
// var fs = require('fs'); // 引入fs模块
// var globaluserinfo = require("GlobaluserInfo");
let httpRequest =  new HttpHelper();  
cc.Class({
    extends: cc.Component,
 
    properties: {
        alert_register_in: cc.Label,
        name_register_in_login: cc.EditBox,
        password_register_in_login: cc.EditBox,
        repassword_register_in_login: cc.EditBox,
        toggle_register_in: cc.Toggle
    },
 
    onLoad: function () {      
        
        // this.tokenlogin(); // 快捷登录

        // 操作文本--读取用户信息
   
        // // 账号密码登录
        // this.login();
        //储存缓存
        // cc.sys.localStorage.setItem('token', value);
        // cc.sys.localStorage.getItem(key);
        // cc.sys.localStorage.removeItem(key);

        // 保存最高分到本地
        // const KEY_BEST_SCORE = "bestScore";
        // let bestScore = cc.sys.localStorage.getItem(KEY_BEST_SCORE);
        // if (bestScore === "null" || this.score > bestScore) {
        //     bestScore = this.score;
        // }
        // cc.sys.localStorage.setItem(KEY_BEST_SCORE, bestScore);
        
    },
 
    register: function(){
       
        var loginname = this.name_register_in_login.getComponent(cc.EditBox).string;
        var password = this.password_register_in_login.getComponent(cc.EditBox).string;
        var repassword = this.repassword_register_in_login.getComponent(cc.EditBox).string;
        // 是否勾选
        var toggle = this.toggle_register_in.getComponent(cc.Toggle).isChecked;
        var  _this =this;
        //手机格式验证
        let phoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
        if(loginname==false){
            _this.alert_register_in.string ='请输入手机号码!';
            return false;
        }else if(phoneReg==false){
            _this.alert_register_in.string ='手机号码格式错误!';
            return false;
        }else if(password.length<6){
            _this.alert_register_in.string ='密码不能少于6位数!';
            return false;
        }else if(password!=repassword){
            _this.alert_register_in.string ='两次输入密码不一致!';
            return false;
        }else if(toggle==false){
            _this.alert_register_in.string ='请阅读并同意相关协议!';
           return false;
        }else{
            var params = {
                'loginname': loginname,
                'password': password,
                // 'loginname': 'yincan1993',
                // 'password': 123456,
            };
        
            httpRequest.httpPost('/app/api-server/register-in', params ,function (data) {
                cc.log(data); 
                if(data.code==1){
                    // _this.register_alert.color =  new cc.color('#BDFF00');
                    _this.alert_register_in.string ='';
                    // cc.sys.localStorage.setItem('token', data.data.token);
                    cc.sys.localStorage.setItem('loginname', loginname);
                    cc.sys.localStorage.setItem('password', password);
                    _this.node.active =false;
                }else{
                    _this.alert_register_in.string ='手机号已存在，请重试!';
                }
                //操作文本--修改用户信息
            });
       }




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
                // cc.director.loadScene('map');
        //     }else{
        //         console.log("login  filed!!!")
        //     }
        // });
        
    },
 
    start () {
 
    },
 
    // update (dt) {},

    show_dlg () {
        //显示出现账号密码
        // var loginname =cc.sys.localStorage.getItem('loginname');
        // var password =cc.sys.localStorage.getItem('password');
        // if(loginname){
        //     this.register_login_name.getComponent(cc.EditBox).string=loginname;
        // }
        // if(loginname){
        //     this.register_login_password.getComponent(cc.EditBox).string=password;
        // }
        this.node.active =true;

    },
    hidden_dlg () {
        this.node.active =false;
    }
});
