require("./commonApi/http"); //引入基础http请求--初始化实例
require("./commonApi/bag_api"); //引入背包
require("./commonApi/figthingExtend"); //引入战斗动作
require("./commonApi/alert"); //引入弹窗样式
require("./commonApi/model"); //引入模型
require("./commonApi/asset"); //引入资源图片
//全局变量--随着数据改变
window.http_globalData = {
    user_info:[],//用户信息
    jiaose:[],//角色基本信息
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
    model_biology_fightingEnd:[], //战斗结果，每次都是变化的

};
//全局资源--唯一不变
window.http_globalAsset = {
    // image 
    http_base_asset_biology:[],
    http_base_asset_skill:[],
    http_base_asset_xiaoguo:[],
    http_base_asset_zhuangbei:[],
    // model
    model_biology_fightingBiology:[],
    model_biology_fightingDetail:[],
    model_biology_SkillIcon:[],
    model_biology_SkillTips:[],


}