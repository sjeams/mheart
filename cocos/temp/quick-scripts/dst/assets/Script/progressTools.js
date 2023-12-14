
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/progressTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '236d34ndr5Le5KyhPYJE5sU', 'progressTools');
// Script/progressTools.js

"use strict";

var HttpHelper = require("http");

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    progressBar: cc.ProgressBar,
    // progressBar:{
    //     default:null,
    //     type:cc.ProgressBar,
    //     text:cc.Sprite,
    // },
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
    sys_label: cc.Label // sys_label: {
    //     default: null,
    //     type: cc.Label,
    // },
    // //默认头像
    // headpic:{
    //     type:cc.SpriteFrame,
    //     default:null,
    // },
    //头像
    // background:{
    //     default:null,
    //     type:cc.Sprite,
    // },

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // console.log(this.node);
    // console.log('正在对比资源');
    // // 远程 url 不带图片后缀名，此时必须指定远程图片文件的类型
    // remoteUrl = "http://unknown.org/emoji?id=124982374";
    // cc.loader.load({url: remoteUrl, type: 'png'}, function () {
    //     // Use texture to create sprite frame
    // });
    // // 用绝对路径加载设备存储内的资源，比如相册
    // var absolutePath = "/dara/data/some/path/to/image.png"
    // cc.loader.load(absolutePath, function () {
    //     // Use texture to create sprite frame
    // });
    // console.log('正在加载场景资源，请耐心等待...');
    // 加载资源包
    this._urls = [// {url:'https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/jianzhicangmang.mp3', type:'mp3'},
    // {url:'https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/loading.jpg', type:'jpg'},
    // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/123.jpg', type:'jpg'},
    // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/ccc.png', type:'png'},
    // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/jq22honey.zip', type:'zip'},
    // {url:'https://www./app/api/file-content?url=http://127.0.0.1/monster.zip', type:'zip'},
    // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1（这里填你的服务器ip)/image2.png', type:'png'},
    [1], [2]]; // console.log( this.progressBar); 
    // console.log( this.sprite); 

    this.resource = null;
    this.progressBar.progress = 0;
    this.sys_label.string = "0%"; // this.ProgressBar.progress += math_random / 100; 

    this._clearAll();

    cc.loader.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));
  },
  start: function start() {},
  _clearAll: function _clearAll() {
    for (var i = 0; i < this._urls.length; ++i) {
      var url = this._urls[i];
      cc.loader.release(url);
    }
  },
  _progressCallback: function _progressCallback(completeCount, totalCount, res) {
    //加载进度回调
    // console.log('资源 ' + completeCount + '加载完成！资源加载中...');
    // console.log('加载场景资源');
    this.progress = completeCount / totalCount;
    this.resource = res;
    this.completeCount = completeCount;
    this.totalCount = totalCount; // 代码里面获取cc.Label组件, 修改文本内容
    //在代码里面获取cc.Label组件

    var sys_label = this.node.getChildByName("sys_label").getComponent(cc.Label);
    sys_label.string = parseInt(this.progress * 100) + '%'; // if( this.resource.type=='json'){
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

    if (this.resource.type == 'mp3') {
      console.log(res); // mp3
      // this.audio.clip = res;
      // this.audio.play();
      // 从服务器加载mp3来进行播放

      this.current = cc.audioEngine.play(res.url, false, 1);
    }
  },
  _completeCallback: function _completeCallback(err, texture) {
    //加载完成回调
    this.loadnextScene(); // 下一场景 
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwcm9ncmVzc1Rvb2xzLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInByb2dyZXNzQmFyIiwiUHJvZ3Jlc3NCYXIiLCJhdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJwbGF5IiwiYXVkaW9Tb3VyY2UiLCJwYXVzZSIsInN5c19sYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiX3VybHMiLCJyZXNvdXJjZSIsInByb2dyZXNzIiwic3RyaW5nIiwiX2NsZWFyQWxsIiwibG9hZGVyIiwibG9hZCIsIl9wcm9ncmVzc0NhbGxiYWNrIiwiYmluZCIsIl9jb21wbGV0ZUNhbGxiYWNrIiwic3RhcnQiLCJpIiwibGVuZ3RoIiwidXJsIiwicmVsZWFzZSIsImNvbXBsZXRlQ291bnQiLCJ0b3RhbENvdW50IiwicmVzIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImF1ZGlvRW5naW5lIiwiZXJyIiwidGV4dHVyZSIsImxvYWRuZXh0U2NlbmUiLCJ1cGRhdGUiLCJkdCIsImFjdGl2ZSIsImJtcF9mb250IiwiZW5hYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFLENBREM7QUFFUkMsSUFBQUEsV0FBVyxFQUFDTCxFQUFFLENBQUNNLFdBRlA7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEMsTUFBQUEsSUFBSSxF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ZXNDb250ZW50IjpbInZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBwcm9ncmVzc0JhcjpjYy5Qcm9ncmVzc0JhcixcclxuICAgICAgICAvLyBwcm9ncmVzc0Jhcjp7XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5Qcm9ncmVzc0JhcixcclxuICAgICAgICAvLyAgICAgdGV4dDpjYy5TcHJpdGUsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBhdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnBhdXNlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzeXNfbGFiZWw6Y2MuTGFiZWwsXHJcbiAgICAgICAgLy8gc3lzX2xhYmVsOiB7XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLy/pu5jorqTlpLTlg49cclxuICAgICAgICAvLyBoZWFkcGljOntcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy/lpLTlg49cclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOntcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLlNwcml0ZSxcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmraPlnKjlr7nmr5TotYTmupAnKTtcclxuICAgICAgICAgICAgLy8gLy8g6L+c56iLIHVybCDkuI3luKblm77niYflkI7nvIDlkI3vvIzmraTml7blv4XpobvmjIflrprov5znqIvlm77niYfmlofku7bnmoTnsbvlnotcclxuICAgICAgICAgICAgLy8gcmVtb3RlVXJsID0gXCJodHRwOi8vdW5rbm93bi5vcmcvZW1vamk/aWQ9MTI0OTgyMzc0XCI7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKHt1cmw6IHJlbW90ZVVybCwgdHlwZTogJ3BuZyd9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBVc2UgdGV4dHVyZSB0byBjcmVhdGUgc3ByaXRlIGZyYW1lXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gLy8g55So57ud5a+56Lev5b6E5Yqg6L296K6+5aSH5a2Y5YKo5YaF55qE6LWE5rqQ77yM5q+U5aaC55u45YaMXHJcbiAgICAgICAgICAgIC8vIHZhciBhYnNvbHV0ZVBhdGggPSBcIi9kYXJhL2RhdGEvc29tZS9wYXRoL3RvL2ltYWdlLnBuZ1wiXHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKGFic29sdXRlUGF0aCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gVXNlIHRleHR1cmUgdG8gY3JlYXRlIHNwcml0ZSBmcmFtZVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+ato+WcqOWKoOi9veWcuuaZr+i1hOa6kO+8jOivt+iAkOW/g+etieW+hS4uLicpO1xyXG4gICAgICAgIC8vIOWKoOi9vei1hOa6kOWMhVxyXG4gICAgICAgIHRoaXMuX3VybHMgPSBbXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9sb2FkaW5nL2ppYW56aGljYW5nbWFuZy5tcDMnLCB0eXBlOidtcDMnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwczovL3d3dy5haGVhcnQuY24vYXBwL2xvYWRpbmcvbG9hZGluZy5qcGcnLCB0eXBlOidqcGcnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vMTI3LjAuMC4xLzEyMy5qcGcnLCB0eXBlOidqcGcnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vMTI3LjAuMC4xL2NjYy5wbmcnLCB0eXBlOidwbmcnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vMTI3LjAuMC4xL2pxMjJob25leS56aXAnLCB0eXBlOid6aXAnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cHM6Ly93d3cuL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vMTI3LjAuMC4xL21vbnN0ZXIuemlwJywgdHlwZTonemlwJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMe+8iOi/memHjOWhq+S9oOeahOacjeWKoeWZqGlwKS9pbWFnZTIucG5nJywgdHlwZToncG5nJ30sXHJcbiAgICAgICAgICAgIFsxXSxbMl1cclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLnByb2dyZXNzQmFyKTsgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMuc3ByaXRlKTsgXHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9MDtcclxuICAgICAgICB0aGlzLnN5c19sYWJlbC5zdHJpbmcgPSBcIjAlXCI7XHJcbiAgICAgICAgLy8gdGhpcy5Qcm9ncmVzc0Jhci5wcm9ncmVzcyArPSBtYXRoX3JhbmRvbSAvIDEwMDsgXHJcbiAgICAgICAgdGhpcy5fY2xlYXJBbGwoKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZCh0aGlzLl91cmxzLCB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrLmJpbmQodGhpcyksIHRoaXMuX2NvbXBsZXRlQ2FsbGJhY2suYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuIFxyXG4gICAgX2NsZWFyQWxsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fdXJscy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5fdXJsc1tpXTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UodXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gXHJcbiAgICBfcHJvZ3Jlc3NDYWxsYmFjazogZnVuY3Rpb24oY29tcGxldGVDb3VudCwgdG90YWxDb3VudCwgcmVzKSB7XHJcbiAgICAgICAgLy/liqDovb3ov5vluqblm57osINcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6LWE5rqQICcgKyBjb21wbGV0ZUNvdW50ICsgJ+WKoOi9veWujOaIkO+8gei1hOa6kOWKoOi9veS4rS4uLicpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfliqDovb3lnLrmma/otYTmupAnKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzID0gY29tcGxldGVDb3VudCAvIHRvdGFsQ291bnQ7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlcztcclxuICAgICAgICB0aGlzLmNvbXBsZXRlQ291bnQgPSBjb21wbGV0ZUNvdW50O1xyXG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcblxyXG4gICAgICAgIC8vIOS7o+eggemHjOmdouiOt+WPlmNjLkxhYmVs57uE5Lu2LCDkv67mlLnmlofmnKzlhoXlrrlcclxuICAgICAgICAvL+WcqOS7o+eggemHjOmdouiOt+WPlmNjLkxhYmVs57uE5Lu2XHJcbiAgICAgICAgdmFyIHN5c19sYWJlbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN5c19sYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHN5c19sYWJlbC5zdHJpbmcgPSBwYXJzZUludCh0aGlzLnByb2dyZXNzICogMTAwKSArICclJztcclxuXHJcbiAgICAgICAgLy8gaWYoIHRoaXMucmVzb3VyY2UudHlwZT09J2pzb24nKXtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5yZXNvdXJjZSk7ICAvLyBqc29uXHJcbiAgICAgICAgLy8gICAgIC8vIOS7juacjeWKoeWZqOWKoOi9vW1wM+adpei/m+ihjOaSreaUvlxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmF1ZGlvLmNsaXAgPSByZXQ7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuYXVkaW8ucGxheSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiggdGhpcy5yZXNvdXJjZS50eXBlPT0ncG5nJ3x8dGhpcy5yZXNvdXJjZS50eXBlPT0nanBnJyl7XHJcbiAgICAgICAgLy8gICAgICBjb25zb2xlLmxvZyhyZXMpOyAgLy8ganNvblxyXG4gICAgICAgIC8vICAgICAvL3Jlc+aYr2NjLlRleHR1cmUyROi/meagt+WvueixoSBcclxuICAgICAgICAvLyAgICAgLy8gICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUocmVzKVxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmhlYWRwaWMuc3ByaXRlRnJhbWUuc2V0VGV4dHVyZShyZXMpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLm5vZGUuc3ByaXRlRnJhbWUuc2V0VGV4dHVyZShyZXMpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZS5zZXRDb250ZW50U2l6ZShyZXMuZ2V0Q29udGVudFNpemUoKSk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYoIHRoaXMucmVzb3VyY2UudHlwZT09J21wMycpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpOyAgLy8gbXAzXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW8uY2xpcCA9IHJlcztcclxuICAgICAgICAgICAgLy8gdGhpcy5hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgIC8vIOS7juacjeWKoeWZqOWKoOi9vW1wM+adpei/m+ihjOaSreaUvlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHJlcy51cmwsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbiBcclxuICAgIF9jb21wbGV0ZUNhbGxiYWNrOiBmdW5jdGlvbihlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAvL+WKoOi9veWujOaIkOWbnuiwg1xyXG4gICAgICAgIHRoaXMubG9hZG5leHRTY2VuZSgpOyAgLy8g5LiL5LiA5Zy65pmvIFxyXG4gICAgfSxcclxuIFxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnJlc291cmNlKXtcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHByb2dyZXNzID0gdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcztcclxuICAgICAgICBpZihwcm9ncmVzcyA+PSAxKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WKoOi9veWujOaIkCcpXHJcbiAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIubm9kZS5hY3RpdmUgPSBmYWxzZTsgLy/ov5vluqbmnaHpmpDol49cclxuICAgICAgICAgICAgdGhpcy5ibXBfZm9udC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIGlmKHByb2dyZXNzIDwgdGhpcy5wcm9ncmVzcyl7XHJcbiAgICAgICAgICAgIHByb2dyZXNzICs9IGR0O1xyXG4gICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICBcclxuICAgIH0sXHJcblxyXG4gICAgbG9hZG5leHRTY2VuZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8g55m75b2V6aKE5Yqg6L29XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdpbmRleCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgY2MubG9nKCfnmbvlvZXpooTliqDovb0nKTtcclxuICAgICAgICAvLyAgICAgLy8gLy8g6K+35rGC55m75b2V5o6l5Y+jXHJcbiAgICAgICAgLy8gICAgIC8vIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgJ2xvZ2lubmFtZSc6ICd5aW5jYW4xOTkzJyxcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgJ3NlcnZlcmlkJzogMSxcclxuICAgICAgICAvLyAgICAgLy8gfTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB2YXIgcGFyYW1zID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFyYW1zXCIpXHJcbiAgICAgICAgLy8gaWYocGFyYW1zKXtcclxuICAgICAgICAvLyAgICAgY2MubG9nKCflv6vpgJ/nmbvlvZUnKTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKHBhcmFtcyk7XHJcbiAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaW5kZXgnKTtcclxuICAgICAgICAvLyAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJhbXMnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTsgXHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZygn6LSm5Y+35rOo5YaML+eZu+W9lScpO1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2luZGV4Jyk7XHJcbiAgICAgICAgLy8gICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFyYW1zJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSxcclxuXHJcbi8vIOOAgOOAgCBjaGFuZ2VCajogZnVuY3Rpb24oKXtcclxuLy8g44CA44CA44CA44CAdmFyIHVybCA9ICdnbG9iYWxVSS92aWRlby9nVmlkZW9QbGF5Q2xpY2snO1xyXG4vLyDjgIDjgIDjgIDjgIB2YXIgX3RoaXMgPSB0aGlzOyBjYy5sb2FkZXIubG9hZFJlcyh1cmwsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwcml0ZUZyYW1lKVxyXG4vLyDjgIDjgIDjgIDjgIB7IOOAgFxyXG4vLyDjgIDjgIDjgIDjgIDjgIDjgIBfdGhpcy5pc1BsYXkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuLy8g44CA44CA44CA44CAIH0pO1xyXG4gICAgXHJcbi8vIOOAgOOAgOOAgFxyXG4vLyDjgIDjgIDjgIDjgIAvL+WKoOi9vee9kee7nOWbvueJh1xyXG4vLyAgICAgICAgIHZhciB1cmwgPSBcInd3dy5tb25zdGVyLmNvbS93ZWIvYXBwL2xvYWRpbmcuanBnXCI7XHJcbi8vICAgICAgICAgY2MubG9hZGVyLmxvYWQoe3VybDogdXJsLCB0eXBlOiAncG5nJ30sIGZ1bmN0aW9uKGVycixpbWcpe1xyXG4vLyAgICAgICAgICAgICB2YXIgbXlsb2dvICA9IG5ldyBjYy5TcHJpdGVGcmFtZShpbWcpOyBcclxuLy8gICAgICAgICAgICAgc2VsZi5sb2dvLnNwcml0ZUZyYW1lID0gbXlsb2dvO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyDjgIDjgIDjgIB9LFxyXG59KTsiXX0=