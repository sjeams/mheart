"use strict";
cc._RF.push(module, '24bbfs7aHZF1bEuH+fQWqup', 'asset');
// Script/commonApi/asset.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 加载资源图片
var httpAsset = cc.Class({
  "extends": cc.Component,
  // 开启适配
  // startUpdateCanvasSize(){
  //     // this.updateCanvasSize();
  //     // cc.view.setResizeCallback(() => {
  //     //     this.updateCanvasSize();
  //     // })
  // }
  // 自由切换横竖屏，动态设置设计分辨率和适配模式。
  // updateCanvasSize() {
  //     let size = cc.view.getFrameSize();
  //     if (size.width > size.height) {
  //         this.canvas.fitWidth = false;
  //         this.canvas.fitHeight = true;
  //         this.canvas.designResolution = cc.size(1920, 1080);
  //         this.showLandscape();
  //     } else {
  //         this.canvas.fitWidth = true;
  //         this.canvas.fitHeight = false;
  //         this.canvas.designResolution = cc.size(1080, 1920);
  //         this.showPortait();
  //     }
  // },
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
  },
  //加载材质
  http_material_yaohuang: function http_material_yaohuang() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                // var _this =this;
                var label = '/materials/builtin_摇晃';
                cc.loader.loadRes(label, cc.Material, function (err, res) {
                  http_globalAsset.material_yaohuang = cc.Material.getInstantiatedMaterial(res); // _this. materialTime(materialPrefab)
                  // // 计算每帧的纹理偏移量
                  // this.uvOffset = 1 / this.totalFrames;
                  // // 开始播放动画
                  // this.schedule(this.updateAnimation, 1 / this.framesPerSecond);

                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  materialTime: function materialTime(materialPrefab) {
    if (materialPrefab) {
      materialPrefab.getComponent(cc.Sprite).setMaterial(0, http_globalAsset.material_yaohuang); // 定义一个回调函数
      // httpRequestBagApi.
      // 使用 this.schedule 方法来调用这个回调函数，它每帧都会被执行
      // this.schedule(this.update,0);
      // 定义一个回调函数

      var time = 0;

      this.updateEveryFrame = function (dt) {
        // dt 是时间间隔，每帧 dt 的值大概是 0.016 秒（即 1/60 秒）
        // 这里可以放置每帧都需要执行的逻辑
        time += dt;
        materialPrefab.getMaterial(0).setProperty("u_time", time);
      }; // 使用 this.schedule 方法来调用这个回调函数，它每帧都会被执行


      this.schedule(this.updateEveryFrame, 0);
    }
  }
});
window.httpRequestAsset = new httpAsset();

cc._RF.pop();