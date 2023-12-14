"use strict";
cc._RF.push(module, '236d34ndr5Le5KyhPYJE5sU', 'progressTools');
// Script/progressTools.js

"use strict";

var HttpHelper = require("http");

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    progressBar: cc.ProgressBar,
    audio: {
      "default": null,
      type: cc.AudioClip
    },
    play: function play() {
      this.audioSource.play();
    },
    pause: function pause() {
      this.audioSource.pause();
    },
    sys_label: cc.Label
  },
  onLoad: function onLoad() {
    // 加载资源包
    // this._urls = [
    // {url:''}
    // {url:'https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app_resources/loading/jianzhicangmang.mp3', type:'mp3'},
    // {url:'https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/loading.jpg', type:'jpg'},
    // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/123.jpg', type:'jpg'},
    // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/ccc.png', type:'png'},
    // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/jq22honey.zip', type:'zip'},
    // {url:'https://www./app/api/file-content?url=http://127.0.0.1/monster.zip', type:'zip'},
    // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1（这里填你的服务器ip)/image2.png', type:'png'},
    // ];
    // this._urls =[];
    // console.log( this.progressBar); 
    // console.log( this.sprite); 
    this.resource = null;
    this.progressBar.progress = 0;
    this.sys_label.string = "0%"; // this.ProgressBar.progress += math_random / 100; 

    this._clearAll(); // cc.loader.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));

  },
  start: function start() {},
  _clearAll: function _clearAll() {
    // console.log(this._urls.length)
    for (var i = 0; i <= this._urls.length; ++i) {
      var url = this._urls[i];
      cc.loader.release(url);
    }
  },
  _progressCallback: function _progressCallback(completeCount, totalCount, res) {
    //加载进度回调
    // console.log('资源 ' + completeCount + '加载完成！资源加载中...');
    // console.log('加载场景资源');
    this.progressBar.progress = completeCount / totalCount;
    this.progressBar.completeCount = completeCount;
    this.progressBar.totalCount = totalCount;
    this.resource = res; // 代码里面获取cc.Label组件, 修改文本内容
    //在代码里面获取cc.Label组件

    var sys_label = this.node.getChildByName("sys_label").getComponent(cc.Label);
    sys_label.string = parseInt(this.progress * 100) + '%';

    if (this.resource.type == 'mp3') {
      // console.log(res);  // mp3
      // this.audio.clip = res;
      // this.audio.play();
      // 从服务器加载mp3来进行播放
      this.current = cc.audioEngine.play(res.url, false, 1);
    }
  },
  update: function update(dt) {
    if (!this.resource) {
      return;
    }

    var progress = this.progressBar.progress;

    if (progress >= 1) {
      console.log('加载完成'); //加载完成

      this.progressBar.node.active = false; //进度条隐藏

      this.bmp_font.node.active = false; // 进度隐藏

      this.enabled = false;
      return;
    }

    if (progress < this.progress) {
      progress += dt;
    }

    this.progressBar.progress = progress;
  },
  _completeCallback: function _completeCallback(err, texture) {
    //加载完成回调
    this.loadnextScene(); // 下一场景 
  },
  loadnextScene: function loadnextScene() {// 登录预加载
    // cc.director.preloadScene('index', function () {
    //     cc.log('登录预加载');
    //     // // 请求登录接口
    //     // var params = {
    //     //         'loginname': 'yincan1993',
    //     //         'password': 123456,
    //     //         'serverid': 1,
    //     // };
    // });
    // var params = cc.sys.localStorage.getItem("params")
    // if(params){
    //     cc.log('快速登录');
    //     cc.log(params);
    //     cc.director.loadScene('index');
    //     // cc.sys.localStorage.setItem('params', JSON.stringify(params)); 
    // }else{
    //     cc.log('账号注册/登录');
    //     cc.director.loadScene('index');
    //     // cc.sys.localStorage.setItem('params', JSON.stringify(params));
    // }
  } // 　　 changeBj: function(){
  // 　　　　var url = 'globalUI/video/gVideoPlayClick';
  // 　　　　var _this = this; cc.loader.loadRes(url,cc.SpriteFrame,function(err,spriteFrame)
  // 　　　　{ 　
  // 　　　　　　_this.isPlay.spriteFrame = spriteFrame;
  // 　　　　 });
  // 　　　
  // 　　　　//加载网络图片
  //         var url = "www.monster.com/web/app/loading.jpg";
  //         cc.loader.load({url: url, type: 'png'}, function(err,img){
  //             var mylogo  = new cc.SpriteFrame(img); 
  //             self.logo.spriteFrame = mylogo;
  //         });
  // 　　　},

});

cc._RF.pop();