var HttpHelper = require("../http"); 
var httpRequest = new HttpHelper();
cc.Class({
    
    extends: cc.Component,

    properties: {
 
    },
    onLoad () {
        // 常驻节点
        // cc.game.addPersistRootNode( myNode)
        // cc.game.removePersistRootNode( myNode)
    },

    start () {

    },
    ProgressBar(){

    },
    // update (dt) {},
    // loadnextScene: function() {
    //     // 登录预加载
    //     cc.director.preloadScene('login', function () {
    //         cc.log('登录预加载');
    //     });
    //     cc.director.loadScene('login');
    // },

    //登录
    诸天万界: function() {
      var params = {
        'page': 1,
        'pageSize': 12,
        };
        httpRequest.httpPost('/app/app-apiword/index', params, function (data) {
        //  console.log(data);
          // console.log(_this.content)
          if(data.data){
              //跳转到世界
            // cc.director.preloadScene("loading", function () {
                // cc.director.loadScene('map/诸天地图');
                httpRequest.playGame('home/诸天万界');
            // });
          }else{
            //  httpRequest.playGame('home/诸天万界');
            httpRequest.playGame('home/诸天万界');
          }
      })
    },
    //登录
    大厅: function() {
         httpRequest.playGame('home/大厅');
    },
 
    创造生物: function() {
         httpRequest.playGame('home/创造生物');
    },

    //注册
    神魔炼狱: function() {
         httpRequest.playGame('home/神魔炼狱');
    },

    //大厅
    秘境探索: function() {
         httpRequest.playGame('home/秘境探索');
    },

    //奖励
    万古仙门: function() {
         httpRequest.playGame('home/万古仙门');
    },
   
    //充值
    天地熔炉: function() {
         httpRequest.playGame('home/天地熔炉');
    },

    //支付
    镇妖塔: function() {
         httpRequest.playGame('home/镇妖塔');
    },


});
