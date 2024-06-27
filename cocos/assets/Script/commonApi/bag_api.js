// 背包的api请求接口
const httpBagApi = cc.Class({
    extends: cc.Component,
    //没有处理逻辑，可以共用--关闭窗口
    openBag_hidden(){
        // cc.find('Canvas/弹窗').active =false;
        cc.find('Canvas/弹窗').removeAllChildren();
    },
    //实例化用户信息
    async http_music(){
        //修改请求--等待响应后回调
        return new Promise(resolve => {
        //获取全局播放器
        this.AudioPlayer = cc.find("Audio").getComponent("AudioManager");
        //停止再开启背景音乐
        // this.AudioPlayer.stopBgMusic();
        this.AudioPlayer.playBgMusic();
        resolve();
        // httpRequest.httpPost('/app/app-api/get-user',{},function (data) {
        //     //此处可能要判断登录失效 跳转、后期处理
        //     http_globalData.user_info = data.data
        //     resolve();
        // })
        });
    },  
    //加载材质
    async  http_material_yaohuang() {
        return new Promise(resolve => {    
            var label ='/materials/builtin_摇晃';
            cc.loader.loadRes(label, cc.Material, function(err, res) {
                httpRequestBagApi.material_yaohuang = cc.Material.getInstantiatedMaterial(res)

                // // 计算每帧的纹理偏移量
                // this.uvOffset = 1 / this.totalFrames;
                // // 开始播放动画
                // this.schedule(this.updateAnimation, 1 / this.framesPerSecond);

                resolve();
            })
        });
    },
    materialTime(materialPrefab){
        if(materialPrefab){
            // 定义一个回调函数
            // httpRequestBagApi.
            // 使用 this.schedule 方法来调用这个回调函数，它每帧都会被执行
            // this.schedule(this.update,0);
            // 定义一个回调函数
            var time =0;
            this.updateEveryFrame = function (dt) {
                // dt 是时间间隔，每帧 dt 的值大概是 0.016 秒（即 1/60 秒）
                // 这里可以放置每帧都需要执行的逻辑
                time += dt;
                materialPrefab.setProperty("u_time",time) 
            };
            // 使用 this.schedule 方法来调用这个回调函数，它每帧都会被执行
            this.schedule(this.updateEveryFrame, 0);
        }
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
            // http_globalData.biology_id = 0;
            // http_globalData.zhenfa_id=0;
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


});
window.httpRequestBagApi = new httpBagApi();