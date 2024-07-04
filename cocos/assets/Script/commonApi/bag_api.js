// 背包的api请求接口
const httpBagApi = cc.Class({
    extends: cc.Component,
    //没有处理逻辑，可以共用--关闭窗口
    //实例化用户信息
    async http_music(){
        if(!http_globalAsset.model_onload_loading){
            await httpRequestModel.model_onload_loading();//加载进度条
        }
        if(!http_globalAsset.AudioPlayer){
            await httpRequestBagApi.http_home_music();//加载音乐
        }
        if(!http_globalAsset.alert_tips){
            await httpRequestAlert.alert_tips();//加载弹窗模板
        }
        // if(!http_globalAsset.material_yaohuang){
        //     await httpRequestAsset.http_material_yaohuang();//加载材质
        // }
        // 没有资源，需要重新加载资源
        if(http_globalAsset.http_base_asset_num==0){
            // httpRequest.playGame("",0,1) //加载资源的进度条
            await httpRequestBagApi.http_home_asset()
        }
    }, 
    //加载音乐
    async  http_home_asset() {
        //修改请求--等待响应后回调
        return new Promise(resolve => {
            //获取全局播放器
            if(http_globalAsset.http_base_asset_num==0){
                httpRequest.playGame("",0,1) //加载资源的进度条
            }
            resolve();
        });
    },


    //加载音乐
    async  http_home_music() {
        //修改请求--等待响应后回调
        return new Promise(resolve => {
            //获取全局播放器
            if(cc.find("Audio")){
                http_globalAsset.AudioPlayer = cc.find("Audio").getComponent("home_music");
                //停止再开启背景音乐
                // this.AudioPlayer.stopBgMusic();
                http_globalAsset.AudioPlayer.playBgMusic();
            }
            resolve();
            // httpRequest.httpPost('/app/app-api/get-user',{},function (data) {
            //     //此处可能要判断登录失效 跳转、后期处理
            //     http_globalData.user_info = data.data
            //     resolve();
            // })
        });
    },
    //实例化角色信息
    async http_base_jiaose(){
        //修改请求--等待响应后回调
        return new Promise(resolve => {
            httpRequest.httpPostLogin('/app/api-server/jiaose',{}, function (data) {
                //此处可能要判断登录失效 跳转、后期处理
                http_globalData.user_jiaose = data.data.jiaose
                http_globalData.user_nicheng = data.data.nicheng
                resolve();
            })
        });
    }, 

    //实例化用户信息
   async http_user_info(){
        //修改请求--等待响应后回调
        return new Promise(resolve => {
        httpRequest.httpPost('/app/app-api/get-user',{},function (data) {
            //此处可能要判断登录失效 跳转、后期处理
            http_globalData.user_info = data.data
            resolve();
        })
        });
    },   
    //实例化背包信息
    http_bag_info(){
        //获取生物列表
        return new Promise(resolve => {
        httpRequest.httpPost('/app/app-apinew/biology-list',{}, function (data) {
            //定义常量
            http_globalData.biology = data.data.biology;
            //当前弹出的预制节点--物品详情--装备-卸载
            http_globalData.TipBoxPrefab_biology_detail = null;
            //开启战斗
            http_globalData.bag = data.data.bag;  
            http_globalData.gooduse = data.data.gooduse;  //物品类型
            http_globalData.zhenfa = data.data.zhenfa.data;
            http_globalData.zhenfa_info = data.data.zhenfa.info;
            // 临时字段
            http_globalData.biology_id = 0; //默认选择的生物id
            http_globalData.zhenfa_id = null;//默认选择的阵法id
            resolve();
        })
        });
    },
    //http请求--快速请求接口
    http_update_goods(biology_id,goods_key,goodsid,is_bag){
        //修改请求
        return new Promise(resolve => {
        httpRequest.httpPost('/app/app-api/biology-goods-update',{biology_id:biology_id,goods_key:goods_key,goodsid:goodsid,is_bag:is_bag},function (data) { resolve(data);})
        });
    },  
    //http请求--快速请求接口
    http_update_zhenfa(){
        // var zhenfa =  http_globalData.zhenfa
        return new Promise(resolve => {
        var update_data=[]
        for (var prop in http_globalData.zhenfa) {
            var biology_id = http_globalData.zhenfa[prop];
            if(http_globalData.biology[biology_id]){
                update_data[prop] = http_globalData.biology[biology_id].userBiologyid //获取序号中的生物id
            }else{
                update_data[prop]= biology_id;
            }
        }
        //修改请求
        httpRequest.httpPost('/app/app-api/biology-zhenfa-update',{zhenfa:update_data},function (data) {
            resolve(data);
            cc.find('Canvas/弹窗').removeAllChildren();
            })
        });
    },
 
    //修改倍数
    http_user_beishu_update(){
        //修改请求
       var  beishu = http_globalData.user_info.beishu
        return new Promise(resolve => {
        httpRequest.httpPost('/app/app-api/user-beishu-update',{beishu:beishu},function (data) { resolve(data);})
        });
    },  

    //获取生物
    http_user_add_biology(biology_type){
        //修改请求
        return new Promise(resolve => {
        httpRequest.httpPost('/app/app-apinew/user-biology',{biology_type:biology_type},function (data) { resolve(data);
        })
        });
    },  
    //获取生物
    http_user_word_index(){
        //修改请求
        return new Promise(resolve => {
        httpRequest.httpPost('/app/app-apiword/index',{}, function (data) { 
            http_globalData.http_user_word_index = data.data
        resolve(data);})
        });
    },  
    http_user_word_new(){
        //修改请求
        return new Promise(resolve => {
            httpRequest.httpPost('/app/app-apiword/map-word',{}, function (data) {
                httpRequestModel.removeBoxprefab()
            resolve(data);})
        });
    },      

});
window.httpRequestBagApi = new httpBagApi();