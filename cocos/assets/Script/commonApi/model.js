// 背包的api请求接口
const httpModel = cc.Class({
    extends: cc.Component,
    //引入的基础类--战斗模型
    async http_base_model(){
        if(!http_globalAsset.model_biology_fightingBiology==[]){
            await httpRequestModel.model_biology_fightingBiology() //加载模型
        }
        if(!http_globalAsset.model_biology_fightingDetail==[]){
            await httpRequestModel.model_biology_fightingDetail();//加载战斗生物详情
        }
        if(!http_globalAsset.model_biology_SkillIcon==[]){
            await httpRequestModel.model_biology_SkillIcon();//加载战斗技能图标
        }
        if(!http_globalAsset.model_biology_SkillTips==[]){
            await httpRequestModel.model_biology_SkillTips();//加载战斗技能提示
        }
        if(!http_globalAsset.model_biology_fightingEnd==[]){
            await httpRequestModel.model_biology_fightingEnd();//加载战斗技能提示
        }
        await httpRequestModel.model_biology_fightingEnd();//加载战斗结果--不是唯一的，每次都会变
    },
    //加载进度条
    async model_onload_loading() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model弹窗/进度条', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_onload_loading =TipBoxPrefab
                resolve();
            })   
        });
    },
    //移除容器
    removeBoxprefab(){
        http_globalData.BoxPrefab_content.removeAllChildren();
        http_globalData.BoxPrefab_content.destroyAllChildren();
    },
    openAlert_remove(){
        // cc.find('Canvas/弹窗').active =false;
        cc.find('Canvas/弹窗').removeAllChildren();// 结束弹窗结果
    },
    openAlert_hidden(){
        // cc.find('Canvas/弹窗').active =false;
        cc.find('Canvas/结算').active =false;// 结束弹窗结果
    },
 
    //阵法 关闭 提交结果，需要单独处理了
    async openzhenfa_hidden(){
        // cc.log(http_globalData.zhenfa)   
        await  httpRequestBagApi.http_update_zhenfa()
        // cc.find('Canvas/弹窗').removeAllChildren();
    },

    //返回按钮
    async model_back_button(sence) {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model按钮/返回', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                TipBoxPrefab.on('click', function () {
                    httpRequest.playGame('sence_dating')
                }, this);
                cc.find('Canvas/按钮').addChild(TipBoxPrefab,this);
                resolve();
            })   
        });
    },
 
    //战斗--加载模板战斗生物详情
    async model_fighting_map() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model战斗/sprite_地图', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openAlert_remove()
                // }, this);
                http_globalAsset.model_fighting_map =TipBoxPrefab
                resolve();
            })   
        });
    },
   
    //战斗--加载模板战斗生物详情
    async model_fighting_word() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model战斗/sprite_世界', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openAlert_remove()
                // }, this);
                http_globalAsset.model_fighting_word =TipBoxPrefab
                resolve();
            })   
        });
    },
   
    //战斗--加载模板战斗生物详情
    async model_biology_jiaose() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model召唤/角色选择', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openAlert_remove()
                // }, this);
                http_globalAsset.model_biology_jiaose =TipBoxPrefab
                resolve();
            })   
        });
    },

    //战斗--加载模板战斗生物详情
   async model_biology_fightingBiology() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model战斗/biology_生物详情', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openAlert_remove()
                // }, this);
                http_globalAsset.model_biology_fightingBiology =TipBoxPrefab
                resolve();
            })   
        });
    },

    //战斗--加载模板战斗生物技能
    async model_biology_fightingDetail() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model弹窗/biology_生物_战斗详情', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);

                http_globalAsset.model_biology_fightingDetail =TipBoxPrefab
                resolve();
            })   
        });
    },
    //战斗--加载模板战斗生物技能--查看生物详情_弹窗

     //按钮点击回调
     model_biology_fightingBiology_button:function(TipBoxPrefab_icon,info){
        // var _this =this;
        TipBoxPrefab_icon.on('click', function () {
            //技能图标挂载
            var BoxPrefab = cc.find('Canvas/弹窗')
            //图片直接传过去，不用再加载一次
           //  var biology_image =TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame;
            // 销毁所有弹窗
            BoxPrefab.removeAllChildren();
            var TipBoxPrefab = cc.instantiate(http_globalAsset.model_biology_fightingDetail);
            //点击事件
            TipBoxPrefab.getChildByName('遮罩').on('click', function () {
                TipBoxPrefab.getChildByName('技能描述').removeAllChildren();
                httpRequestModel.openAlert_remove()
            }, this);
            TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                TipBoxPrefab.getChildByName('技能描述').removeAllChildren();
            }, this);
            //载入生物详情
            TipBoxPrefab.getChildByName('血s').getComponent(cc.Label).string= info.shengMing
            TipBoxPrefab.getChildByName('蓝s').getComponent(cc.Label).string= info.moFa
            TipBoxPrefab.getChildByName('生物名称s').getComponent(cc.Label).string=info.name
            TipBoxPrefab.getChildByName('种族名称s').getComponent(cc.Label).string=info.zhong_zhu+'族'
            TipBoxPrefab.getChildByName('生物等级s').getComponent(cc.Label).string='等级'+info.grade
            TipBoxPrefab.getChildByName('触发概率s').getComponent(cc.Label).string='触发率'+info.chuFa+'%'
            //生物命名必须叫生物
            TipBoxPrefab.getChildByName('生物').getComponent(cc.Sprite).spriteFrame=  http_globalAsset.http_base_asset_biology[info.picture]

            TipBoxPrefab.getChildByName('力量s').getComponent(cc.Label).string='力量:'+info.power
            TipBoxPrefab.getChildByName('敏捷s').getComponent(cc.Label).string='敏捷:'+info.agile
            TipBoxPrefab.getChildByName('智力s').getComponent(cc.Label).string='智力:'+info.intelligence
            TipBoxPrefab.getChildByName('攻击s').getComponent(cc.Label).string='攻击:'+info.gongJi
            TipBoxPrefab.getChildByName('护甲s').getComponent(cc.Label).string='护甲:'+info.huJia
            TipBoxPrefab.getChildByName('速度s').getComponent(cc.Label).string='速度:'+info.suDu
            TipBoxPrefab.getChildByName('特攻s').getComponent(cc.Label).string='特攻:'+info.faGong
            TipBoxPrefab.getChildByName('灵气s').getComponent(cc.Label).string='灵气:'+info.reiki
            TipBoxPrefab.getChildByName('悟性s').getComponent(cc.Label).string='悟性:'+info.wuXing
            TipBoxPrefab.getChildByName('暴击s').getComponent(cc.Label).string='暴击:'+info.baojilv+'%'
            TipBoxPrefab.getChildByName('吸血s').getComponent(cc.Label).string='吸血:'+info.xiXue+'%'
            TipBoxPrefab.getChildByName('暴伤s').getComponent(cc.Label).string='暴伤:'+info.baoji+'%'
            TipBoxPrefab.getChildByName('闪避s').getComponent(cc.Label).string='闪避:'+info.shanbi+'%'
            TipBoxPrefab.getChildByName('命中s').getComponent(cc.Label).string='闪避'+'0%'
            TipBoxPrefab.getChildByName('增伤s').getComponent(cc.Label).string='增伤:'+info.jianShang+'%'
            TipBoxPrefab.getChildByName('减伤s').getComponent(cc.Label).string='减伤:'+info.zhenShang+'%'
            //技能图标挂载
            var tool = cc.instantiate(TipBoxPrefab);
            tool.getComponent('skill_iconTools').biology_detail_skill(TipBoxPrefab,info.position_skill)
            BoxPrefab.addChild(TipBoxPrefab,1);
        })
    },
    //战斗--加载模板战斗生物技能
    async model_biology_SkillIcon() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model弹窗/biology_生物_技能图标', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
 
                http_globalAsset.model_biology_SkillIcon =TipBoxPrefab
                resolve();
            })   
        });
    },
    //战斗--加载模板战斗生物技能
    async model_biology_SkillTips() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model弹窗/biology_生物_战斗技能提示', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_biology_SkillTips =TipBoxPrefab
                resolve();
            })   
        });
    },
 

   //战斗-战斗结束
    async model_biology_fightingEnd() {
        return new Promise(resolve => {    
        cc.loader.loadRes('/model弹窗/biology_结算', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    httpRequestModel.openAlert_hidden()
                }, this);
                TipBoxPrefab.getChildByName('canser').on('click', function () {
                    httpRequestModel.openAlert_hidden()
                }, this);
                TipBoxPrefab.getChildByName('返回地图').on('click', function () {
                    httpRequestModel.removeBoxprefab()
                    httpRequest.playGame("sence_ditu")
                }, this);
                TipBoxPrefab.getChildByName('重播').on('click', function () {
                    httpRequestModel.removeBoxprefab()
                    cc.find('Canvas/大厅').getComponent('home_fighting').playTask( )
                    httpRequestModel.openAlert_hidden()
                }, this);
                http_globalData.model_biology_fightingEnd = TipBoxPrefab
                resolve();
            })   
        });
    },


    //生成战斗结束
    async fightingEnd() {
        // var _this =this;
        return new Promise(resolve => { 
            var fighting_list =  http_globalData.fighting.data; 
    
            //开始实例化预制资源
            let  TipBoxPrefab =  http_globalData.model_biology_fightingEnd
            if(fighting_list.poition_winner==1){
            TipBoxPrefab.getChildByName('结果s').getComponent(cc.Label).string='胜利！';
            }else{
            TipBoxPrefab.getChildByName('结果s').getComponent(cc.Label).string='失败！';
            }
            //将预制资源添加到父节点
            cc.find('Canvas/结算/弹框').addChild(TipBoxPrefab,this);
        
            resolve()
        }) 
    },

    //生物背包
    async model_home_openBiology() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model背包/A生物背包', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    httpRequestModel.openAlert_remove()
                }, this);
                http_globalData.model_home_openBiology =TipBoxPrefab
                resolve();
            })   
        });
    },
    //生物详情
    async model_home_biology_detail() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model背包/生物详情', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openAlert_remove()
                // }, this);
                http_globalAsset.model_home_biology_detail =TipBoxPrefab
                resolve();
            })   
        });
    },
    //生物头像
    async model_home_biology_detail_heard() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model背包/生物头像', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openAlert_remove()
                // }, this);
                http_globalAsset.model_home_biology_detail_heard =TipBoxPrefab
                resolve();
            })   
        });
    },
    //生物图标
    async model_home_biology_detail_heard_icon() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model背包/图标生物', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openAlert_remove()
                // }, this);
                http_globalAsset.model_home_biology_detail_heard_icon =TipBoxPrefab
                resolve();
            })   
        });
    },
 

    //阵法
    async model_home_zhenfa() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model布阵/A生物布阵', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    httpRequestModel.openzhenfa_hidden()
                }, this);
                http_globalData.model_home_zhenfa =TipBoxPrefab
                resolve();
            })   
        });
    },
    //阵法
    async model_home_zhenfa_bag() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model布阵/背包生物', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalData.model_home_zhenfa_bag =TipBoxPrefab
                resolve();
            })   
        });
    },
    //阵法
    async model_home_zhenfa_icon() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model布阵/图标生物', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalData.model_home_zhenfa_icon =TipBoxPrefab
                resolve();
            })   
        });
    },
    //阵法
    async model_home_zhenfa_biology() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model布阵/图标阵法', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalData.model_home_zhenfa_biology =TipBoxPrefab
                resolve();
            })   
        });
    },
 


    // 创造
    async model_zhaohuan_chuangzao() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model召唤/A创造', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_zhaohuan_chuangzao =TipBoxPrefab
                resolve();
            })   
        });
    },
    //装备背包
    async model_zhuangbei_bag() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model背包/背包装备', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_zhuangbei_bag =TipBoxPrefab
                resolve();
            })   
        });
    },
    async model_zhuangbei_bag_icon() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model背包/图标背包装备', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_zhuangbei_bag_icon =TipBoxPrefab
                resolve();
            })   
        });
    },
    async model_zhuangbei_bag_skill() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model背包/生物技能', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_zhuangbei_bag_skill =TipBoxPrefab
                resolve();
            })   
        });
    },
    async model_zhuangbei_bag_skill_icon() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model弹窗/biology_生物_技能图标', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_zhuangbei_bag_skill_icon =TipBoxPrefab
                resolve();
            })   
        });
    },

    async model_zhuangbei_bag_skill_tips() {
        return new Promise(resolve => {    
            cc.loader.loadRes('/model弹窗/biology_生物_战斗技能提示', function(errorMessage,loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                var TipBoxPrefab = cc.instantiate(loadedResource);
                // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                //     httpRequestModel.openzhenfa_hidden()
                // }, this);
                http_globalAsset.model_zhuangbei_bag_skill_tips =TipBoxPrefab
                resolve();
            })   
        });
    },
 

});
window.httpRequestModel = new httpModel();