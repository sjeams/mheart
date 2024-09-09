require("../common"); 
cc.Class({
    extends: cc.Component,
 
    properties: {
        // user_status:cc.Node,
        // user_phone:cc.Label,
        // register_login_name: cc.EditBox,
        // register_login_password: cc.EditBox
    },
 
    async onLoad() {      
   
        this.tokenlogin(); // 快捷登录
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
    tokenlogin(){
        // 获取本地json  信息
        // cc.loader.load( cc.url.raw("resources/login.json"),function(err,res){  
        // cc.loader.loadRes('login.json',function(err,res){   //默认resources
        //     let json = res.json;
        //     var params = {
        //         'token': json.token,
        //     };
        //     cc.log(json.token); 
        //     var res = httpRequest.httpPostLogin('/app/api-server/token-login', params ,function (data) {
        //         cc.loader.release('resources/login.json'); //释放json 资源
        //         // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
        //         //     jsb.fileUtils.writeStringToFile(data,token)
        //         // }
        //         // cc.log(data); 
        //         // 未登录弹出登录
        //         if(data.code==0){
        //             // this.loginbox.node.active = false;  // 进度隐藏
        //         }
             
        //     });
        // })
        var token = cc.sys.localStorage.getItem('token');
        //定位弹出窗口
        var user_status  =cc.find("Canvas/server/user_status");
        user_status.active=true;
        var user_phone  =cc.find("Canvas/server/user_status/user_phone");
        if(token){
                httpRequest.httpPostLogin('/app/api-server/token-login', {'token':token} ,function (data) {
                    // cc.loader.release('resources/login.json'); //释放json 资源
                    // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
                    //     jsb.fileUtils.writeStringToFile(data,token)
                    // }
                    // cc.log(data); 
                // 登录成功
                if(data.code==1){
                    // 其中slice(start, end)：用于提取字符串的片段
                    // str.slice(1) 指下标为1之后的所有元素
                    var loginname =  data.data.userinfo.loginname;
                    var phone = loginname.slice(0,3) + "****" + loginname.slice(7,10);
                    user_phone.getComponent(cc.Label).string=phone;
                }else{
                    user_phone.getComponent(cc.Label).string=data.message;
                }
            });
        }else{
            user_phone.getComponent(cc.Label).string="未登录";
        }
    },
 
    // login: function(){
    
    //    var loginname = this.register_login_name.getComponent(cc.EditBox).string;
    //    var password = this.register_login_password.getComponent(cc.EditBox).string;
    //     var params = {
    //         'loginname': loginname,
    //         'password': password,
    //         // 'loginname': 'yincan1993',
    //         // 'password': 123456,
    //     };
    //     var _this= this;
    //     httpRequest.httpPostLogin('/app/api-server/login', params ,function (data) {
    //         cc.log(data); 
    //         if(data.code==1){
    //             // _this.register_alert.color =  new cc.color('#BDFF00');
    //             _this.register_alert.string ='';
    //             cc.sys.localStorage.setItem('token', data.data.token);
    //             cc.sys.localStorage.setItem('loginname', loginname);
    //             cc.sys.localStorage.setItem('password', password);
    //             _this.node.active =false;
    //         }else{
    //             _this.register_alert.string ='账号密码错误!';
    //         }
    //         //操作文本--修改用户信息
    //     });

    // },
    //开始游戏按钮--不作为登录，只是开始
    goGame() {  
        httpRequest.httpPostLogin('/app/api-server/user-login', {} ,function (data) {
            // cc.log(data); 
            if(data.code==0){ // 登录失败，或本地数据失效
                var user_status  =cc.find("Canvas/登录弹窗");
                user_status.active=true;
                // 弹窗
            }else{
                // 设置服务器
                cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));
                if(data.code==1){// 登录成功，进入游戏
                    // cc.log(data.data.userinfo); 
                    cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo)); 
                    httpRequest.playGame("sence_dating");
                    // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
                    // cc.sys.localStorage.getItem(key); //读取数据
                }else if(data.code==2){ // 登录成功，未定义角色
                    // 进入定义角色界面     
                    // var server = JSON.parse(cc.sys.localStorage.getItem('server'));
                    // cc.log(cc.sys.localStorage.getItem('token')); 
                    // 创建角色
                    cc.director.loadScene('login/角色');
                    // httpRequest.playGame("sence_jiaose");
                }
            }
        });
        
    },
    start () {
    },
    show_dlg () {
        this.node.active =true;
    },
    hidden_dlg () {
        this.node.active =false;
    }
});
