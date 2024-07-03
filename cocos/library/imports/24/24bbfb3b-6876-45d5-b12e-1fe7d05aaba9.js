"use strict";
cc._RF.push(module, '24bbfs7aHZF1bEuH+fQWqup', 'asset');
// Script/commonApi/asset.js

"use strict";

// 加载资源图片
var httpAsset = cc.Class({
  "extends": cc.Component,
  //引入的基础类--图片资源
  //加载资源
  _progressRuning: function _progressRuning(completeCount, totalCount, assets, describe) {
    //加载进度回调
    var progressBar = cc.find('/progressBar', http_globalData.model_onload_loading_new).getComponent(cc.ProgressBar); //加载进度回调 

    progressBar.progress = completeCount / totalCount; // console.log(progressBar.progress)

    progressBar.completeCount = completeCount;
    progressBar.totalCount = totalCount;
    var sys_label = cc.find('/progressBar/sys_label', http_globalData.model_onload_loading_new).getComponent(cc.Label);
    var sys_des = cc.find('/progressBar/sys_des', http_globalData.model_onload_loading_new).getComponent(cc.Label); //加载生物

    if (http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].type == '图标生物') {
      var asset = assets.content; // 检查资源是否为图片类型

      if (asset instanceof cc.SpriteFrame) {
        var newname = asset.name;
        http_globalAsset.http_base_asset_biology[newname] = asset;
        sys_des.string = describe + '/图标生物/' + newname;
      }
    } //加载生物


    if (http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].type == '图标装备') {
      var asset = assets.content; // 检查资源是否为图片类型

      if (asset instanceof cc.SpriteFrame) {
        var newname = asset.name;
        http_globalAsset.http_base_asset_zhuangbei[newname] = asset;
        sys_des.string = describe + '/图标装备/' + newname;
      }
    } //加载生物


    if (http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].type == '图标技能') {
      var asset = assets.content; // 检查资源是否为图片类型

      if (asset instanceof cc.SpriteFrame) {
        var newname = asset.name;
        http_globalAsset.http_base_asset_skill[newname] = asset;
        sys_des.string = describe + '/图标技能/' + newname;
      }
    } //加载生物


    if (http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].type == '图标技能效果') {
      var asset = assets.content; // 检查资源是否为图片类型

      if (asset instanceof cc.SpriteFrame) {
        var newname = asset.name;
        http_globalAsset.http_base_asset_xiaoguo[newname] = asset;
        sys_des.string = describe + '/图标技能效果/' + newname;
      }
    } //加载生物


    if (http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].type == '图标世界') {
      var asset = assets.content; // 检查资源是否为图片类型

      if (asset instanceof cc.SpriteFrame) {
        var newname = asset.name;
        http_globalAsset.http_base_asset_word[newname] = asset;
        sys_des.string = describe + '/图标世界/' + newname;
      }
    }

    sys_label.string = parseInt(progressBar.progress * 100) + '%'; // if( this.resource.type=='json'){
    //     // console.log(this.resource);  // json
    //     // 从服务器加载mp3来进行播放
    //     // this.audio.clip = ret;
    //     // this.audio.play();
    // }
    // if( this.resource.type=='png'||this.resource.type=='jpg'){
    //      console.log(res);  // json
    //     //res是cc.Texture2D这样对象 
    //     //   this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(res)
    //     // this.headpic.spriteFrame.setTexture(res);
    //     // this.node.spriteFrame.setTexture(res);
    //     // this.sprite.spriteFrame.setContentSize(res.getContentSize());
    //     // this.node.getComponent(cc.Sprite).spriteFrame = res;
    // }
    // if( this.resource.type=='mp3'){
    //     console.log(res);  // mp3
    //     // this.audio.clip = res;
    //     // this.audio.play();
    //     // 从服务器加载mp3来进行播放
    //     this.current = cc.audioEngine.play(res.url, false, 1);
    // }
  },
  // 回调
  _progressCallback: function _progressCallback(completeCount, totalCount, item) {
    var describe = '[' + parseInt(http_globalAsset.http_base_asset_num + 1) + '/' + http_globalAsset.loading_asset.length + ']' + http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].describe;

    this._progressRuning(completeCount, totalCount, item, describe);
  },
  // 回调
  _completeCallback: function _completeCallback(err, texture) {
    //加载完成回调
    if (http_globalAsset.http_base_asset_num < http_globalAsset.loading_asset.length - 1) {
      if (http_globalAsset.http_base_asset_num > http_globalAsset.loading_asset.length) {
        return;
      }

      http_globalAsset.http_base_asset_num = http_globalAsset.http_base_asset_num + 1;
      this.loading_asset(); //下一个资源
    } else {
      this.loadnextScene(); //下一场景 
    }
  },
  //加载资源
  loading_asset: function loading_asset() {
    //默认从1开始
    var url = cc.loader.loadResDir(http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].url, this._progressCallback.bind(this), this._completeCallback.bind(this));
    cc.loader.release(url);
  },
  //加载场景
  loadnextScene: function loadnextScene() {
    //加载场景-- 场景为空， 关闭进度条
    if (http_globalAsset.http_base_redict_sence == '') {
      cc.find('Canvas/进度条').parent.removeChild(cc.find('Canvas/进度条'));
    } else {
      //预加载场景并获得加载进度
      cc.director.preloadScene(http_globalAsset.http_base_redict_sence, function (completeCount, totalCount, item) {
        httpRequestAsset._progressRuning(completeCount, totalCount, item, '加载场景..');
      }, function () {
        cc.director.loadScene(http_globalAsset.http_base_redict_sence, function () {// spawnTools();  
        });
      });
    }
  }
});
window.httpRequestAsset = new httpAsset();

cc._RF.pop();