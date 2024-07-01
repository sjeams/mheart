// 加载资源图片
const httpAsset = cc.Class({
    extends: cc.Component,
    //引入的基础类--图片资源
    async http_base_asset(){
        if(http_globalAsset.http_base_asset_biology.length==[]){
            await httpRequestAsset.http_base_asset_biology() //图标生物
        }
        if(http_globalAsset.http_base_asset_skill.length==[]){
            await httpRequestAsset.http_base_asset_skill() //图标技能
        }
        if(http_globalAsset.http_base_asset_xiaoguo.length==[]){
            await httpRequestAsset.http_base_asset_xiaoguo() //图标技能效果
        }
        if(http_globalAsset.http_base_asset_zhuangbei.length==[]){
            await httpRequestAsset.http_base_asset_zhuangbei() //图标装备
        }
        return '加载资源图片'
    },
     //实例化角色图片
     async http_base_asset_biology(){
        //修改请求--等待响应后回调
        return new Promise(resolve => {
            http_globalAsset.http_base_asset_biology =[];
          // 加载资源目录
          cc.loader.loadResDir("图标生物",(err, assets) => {
              if (err) { cc.error(err);return;}
              // 遍历加载的资源
              for (var i = 1; i <= assets.length; i++) {
                  var asset = assets[i];
                  // 检查资源是否为图片类型
                  if(asset instanceof cc.SpriteFrame){
                    var newname =asset.name;
                    http_globalAsset.http_base_asset_biology[newname] = asset 
                  }
              }
              resolve();
          });
   
        });
    }, 
    //技能
    async http_base_asset_skill(){
        //修改请求--等待响应后回调
        return new Promise(resolve => {
          http_globalAsset.http_base_asset_skill =[];
          // 加载资源目录
          cc.loader.loadResDir("图标技能",(err, assets) => {
              if (err) { cc.error(err);return;}
              // 遍历加载的资源
              for (var i = 1; i <= assets.length; i++) {
                  var asset = assets[i];
                  // 检查资源是否为图片类型
                  if(asset instanceof cc.SpriteFrame){
                    var newname =asset.name;
                    http_globalAsset.http_base_asset_skill[newname] = asset 
                  }
              }
              resolve();
          });
   
        });
    }, 

    async http_base_asset_xiaoguo(){
        //修改请求--等待响应后回调
        return new Promise(resolve => {
          http_globalAsset.http_base_asset_xiaoguo =[];
          // 加载资源目录
          cc.loader.loadResDir("图标技能效果",(err, assets) => {
              if (err) { cc.error(err);return;}
              // 遍历加载的资源
              for (var i = 1; i <= assets.length; i++) {
                  var asset = assets[i];
                  // 检查资源是否为图片类型
                  if(asset instanceof cc.SpriteFrame){
                    var newname =asset.name;
                    http_globalAsset.http_base_asset_xiaoguo[newname] = asset 
                  }
              }
              resolve();
          });
   
        });
    }, 

    async http_base_asset_zhuangbei(){
        //修改请求--等待响应后回调
        return new Promise(resolve => {
          http_globalAsset.http_base_asset_zhuangbei =[];
          // 加载资源目录
          cc.loader.loadResDir("图标装备",(err, assets) => {
              if (err) { cc.error(err);return;}
              // 遍历加载的资源
              for (var i = 1; i <= assets.length; i++) {
                  var asset = assets[i];
                  // 检查资源是否为图片类型
                  if(asset instanceof cc.SpriteFrame){
                    var newname =asset.name;
                    http_globalAsset.http_base_asset_zhuangbei[newname] = asset 
                  }
              }
              resolve();
          });
   
        });
    }, 

 
});
window.httpRequestAsset = new httpAsset();