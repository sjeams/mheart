require("./commonApi/http"); //引入基础http请求
require("./commonApi/bag_api"); //引入背包
require("./commonApi/figthingExtend"); //引入战斗动作
//全局变量
window.http_globalData = {
    user_info:[],//用户信息
    fighting:[],
    biology:[],
    bag:[],
    gooduse:[],
    zhenfa:[],
    //临时操作存储id
    biology_id:0,//生物id
    zhenfa_id:0,//阵法id
    move_biology_id:0,//生物id
    move_zhenfa_id:0,//阵法id

};