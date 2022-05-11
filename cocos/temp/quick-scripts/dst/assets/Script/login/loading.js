
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77e07WCeNBJrJqHjwTfqjkf', 'loading');
// Script/login/loading.js

"use strict";

var self = void 0;
cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    progressBar: {
      "default": null,
      type: cc.ProgressBar,
      text: cc.Sprite
    },
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
    bmp_font: {
      "default": null,
      type: cc.Label
    } // //默认头像
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
    console.log(this.node);
    console.log('正在对比资源'); // // 远程 url 不带图片后缀名，此时必须指定远程图片文件的类型
    // remoteUrl = "http://unknown.org/emoji?id=124982374";
    // cc.loader.load({url: remoteUrl, type: 'png'}, function () {
    //     // Use texture to create sprite frame
    // });
    // // 用绝对路径加载设备存储内的资源，比如相册
    // var absolutePath = "/dara/data/some/path/to/image.png"
    // cc.loader.load(absolutePath, function () {
    //     // Use texture to create sprite frame
    // });

    console.log('正在加载场景资源，请耐心等待...'); // 加载资源包

    this._urls = [{
      url: 'http://www.monster.com/app/api/file-content?url=http://www.monster.com/app/loading/剑指苍茫.mp3',
      type: 'mp3'
    } // {url:'http://www.monster.com/app/api/file-content?url=http://www.monster.com/app/loading/loading.jpg', type:'jpg'},
    // {url:'http://www.monster.com/app/api/file-content?url=http://127.0.0.1/123.jpg', type:'jpg'},
    // {url:'http://www.monster.com/app/api/file-content?url=http://127.0.0.1/ccc.png', type:'png'},
    // {url:'http://www.monster.com/app/api/file-content?url=http://127.0.0.1/jq22honey.zip', type:'zip'},
    // {url:'http://www.monster.com/app/api/file-content?url=http://127.0.0.1/monster.zip', type:'zip'},
    // {url:'http://www.monster.com/app/api/file-content?url=http://127.0.0.1（这里填你的服务器ip)/image2.png', type:'png'}, 
    ];
    console.log(this.progressBar); // console.log( this.sprite); 

    this.resource = null;
    this.progressBar.progress = 0;
    this.bmp_font.string = "0%"; // this.ProgressBar.progress += math_random / 100; 

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
    sys_label.string = parseInt(this.progress * 100) + '%';

    if (this.resource.type == 'json') {// console.log(this.resource);  // json
      // 从服务器加载mp3来进行播放
      // this.audio.clip = ret;
      // this.audio.play();
    }

    if (this.resource.type == 'png' || this.resource.type == 'jpg') {
      console.log(res); // json
      //res是cc.Texture2D这样对象 
      //   this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(res)
      // this.headpic.spriteFrame.setTexture(res);
      // this.node.spriteFrame.setTexture(res);
      // this.sprite.spriteFrame.setContentSize(res.getContentSize());
      // this.node.getComponent(cc.Sprite).spriteFrame = res;
    }

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
  loadnextScene: function loadnextScene() {
    // 登录预加载
    cc.director.preloadScene('index', function () {
      cc.log('登录预加载'); // // 请求登录接口
      // var params = {
      //         'loginname': 'yincan1993',
      //         'password': 123456,
      //         'serverid': 1,
      // };
    });
    var params = cc.sys.localStorage.getItem("params");

    if (params) {
      cc.log('快速登录');
      cc.log(params);
      cc.director.loadScene('index'); // cc.sys.localStorage.setItem('params', JSON.stringify(params)); 
    } else {
      cc.log('账号注册/登录');
      cc.director.loadScene('index'); // cc.sys.localStorage.setItem('params', JSON.stringify(params));
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJzZWxmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInByb2dyZXNzQmFyIiwidHlwZSIsIlByb2dyZXNzQmFyIiwidGV4dCIsIlNwcml0ZSIsImF1ZGlvIiwiQXVkaW9DbGlwIiwicGxheSIsImF1ZGlvU291cmNlIiwicGF1c2UiLCJibXBfZm9udCIsIkxhYmVsIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJfdXJscyIsInVybCIsInJlc291cmNlIiwicHJvZ3Jlc3MiLCJzdHJpbmciLCJfY2xlYXJBbGwiLCJsb2FkZXIiLCJsb2FkIiwiX3Byb2dyZXNzQ2FsbGJhY2siLCJiaW5kIiwiX2NvbXBsZXRlQ2FsbGJhY2siLCJzdGFydCIsImkiLCJsZW5ndGgiLCJyZWxlYXNlIiwiY29tcGxldGVDb3VudCIsInRvdGFsQ291bnQiLCJyZXMiLCJzeXNfbGFiZWwiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInBhcnNlSW50IiwiY3VycmVudCIsImF1ZGlvRW5naW5lIiwiZXJyIiwidGV4dHVyZSIsImxvYWRuZXh0U2NlbmUiLCJ1cGRhdGUiLCJkdCIsImFjdGl2ZSIsImVuYWJsZWQiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsInBhcmFtcyIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsSUFBSSxTQUFSO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUUsQ0FEQztBQUVSQyxJQUFBQSxXQUFXLEVBQUM7QUFDUixpQkFBUSxJQURBO0FBRVJDLE1BQUFBLElBQUksRUFBQ04sRUFB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QUF2TVMsQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNlbGYgPSB0aGlzO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBwcm9ncmVzc0Jhcjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Qcm9ncmVzc0JhcixcclxuICAgICAgICAgICAgdGV4dDpjYy5TcHJpdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnBhdXNlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBibXBfZm9udDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIC8v6buY6K6k5aS05YOPXHJcbiAgICAgICAgLy8gaGVhZHBpYzp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8v5aS05YOPXHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDp7XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5TcHJpdGUsXHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjlr7nmr5TotYTmupAnKTtcclxuICAgICAgICAgICAgLy8gLy8g6L+c56iLIHVybCDkuI3luKblm77niYflkI7nvIDlkI3vvIzmraTml7blv4XpobvmjIflrprov5znqIvlm77niYfmlofku7bnmoTnsbvlnotcclxuICAgICAgICAgICAgLy8gcmVtb3RlVXJsID0gXCJodHRwOi8vdW5rbm93bi5vcmcvZW1vamk/aWQ9MTI0OTgyMzc0XCI7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKHt1cmw6IHJlbW90ZVVybCwgdHlwZTogJ3BuZyd9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBVc2UgdGV4dHVyZSB0byBjcmVhdGUgc3ByaXRlIGZyYW1lXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gLy8g55So57ud5a+56Lev5b6E5Yqg6L296K6+5aSH5a2Y5YKo5YaF55qE6LWE5rqQ77yM5q+U5aaC55u45YaMXHJcbiAgICAgICAgICAgIC8vIHZhciBhYnNvbHV0ZVBhdGggPSBcIi9kYXJhL2RhdGEvc29tZS9wYXRoL3RvL2ltYWdlLnBuZ1wiXHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKGFic29sdXRlUGF0aCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gVXNlIHRleHR1cmUgdG8gY3JlYXRlIHNwcml0ZSBmcmFtZVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ato+WcqOWKoOi9veWcuuaZr+i1hOa6kO+8jOivt+iAkOW/g+etieW+hS4uLicpO1xyXG4gICAgICAgIC8vIOWKoOi9vei1hOa6kOWMhVxyXG4gICAgICAgIHRoaXMuX3VybHMgPSBbXHJcbiAgICAgICAgICAgIHt1cmw6J2h0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2xvYWRpbmcv5YmR5oyH6IuN6IyrLm1wMycsIHR5cGU6J21wMyd9LFxyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwOi8vd3d3Lm1vbnN0ZXIuY29tL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vd3d3Lm1vbnN0ZXIuY29tL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnJywgdHlwZTonanBnJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly8xMjcuMC4wLjEvMTIzLmpwZycsIHR5cGU6J2pwZyd9LFxyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwOi8vd3d3Lm1vbnN0ZXIuY29tL2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vMTI3LjAuMC4xL2NjYy5wbmcnLCB0eXBlOidwbmcnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cDovL3d3dy5tb25zdGVyLmNvbS9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS9qcTIyaG9uZXkuemlwJywgdHlwZTonemlwJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly8xMjcuMC4wLjEvbW9uc3Rlci56aXAnLCB0eXBlOid6aXAnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cDovL3d3dy5tb25zdGVyLmNvbS9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMe+8iOi/memHjOWhq+S9oOeahOacjeWKoeWZqGlwKS9pbWFnZTIucG5nJywgdHlwZToncG5nJ30sIFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLnByb2dyZXNzQmFyKTsgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMuc3ByaXRlKTsgXHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9MDtcclxuXHJcbiAgICAgICAgdGhpcy5ibXBfZm9udC5zdHJpbmcgPSBcIjAlXCI7XHJcblxyXG5cclxuICBcclxuICAgICAgICAvLyB0aGlzLlByb2dyZXNzQmFyLnByb2dyZXNzICs9IG1hdGhfcmFuZG9tIC8gMTAwOyBcclxuICAgICAgICB0aGlzLl9jbGVhckFsbCgpO1xyXG4gICAgICAgXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy5fdXJscywgdGhpcy5fcHJvZ3Jlc3NDYWxsYmFjay5iaW5kKHRoaXMpLCB0aGlzLl9jb21wbGV0ZUNhbGxiYWNrLmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcbiBcclxuICAgIF9jbGVhckFsbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3VybHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuX3VybHNbaV07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuIFxyXG4gICAgX3Byb2dyZXNzQ2FsbGJhY2s6IGZ1bmN0aW9uKGNvbXBsZXRlQ291bnQsIHRvdGFsQ291bnQsIHJlcykge1xyXG4gICAgICAgIC8v5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+i1hOa6kCAnICsgY29tcGxldGVDb3VudCArICfliqDovb3lrozmiJDvvIHotYTmupDliqDovb3kuK0uLi4nKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5Yqg6L295Zy65pmv6LWE5rqQJyk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IGNvbXBsZXRlQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByZXM7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZUNvdW50ID0gY29tcGxldGVDb3VudDtcclxuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xyXG5cclxuICAgICAgICAvLyDku6PnoIHph4zpnaLojrflj5ZjYy5MYWJlbOe7hOS7tiwg5L+u5pS55paH5pys5YaF5a65XHJcbiAgICAgICAgLy/lnKjku6PnoIHph4zpnaLojrflj5ZjYy5MYWJlbOe7hOS7tlxyXG4gICAgICAgIHZhciBzeXNfbGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzeXNfbGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBzeXNfbGFiZWwuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5wcm9ncmVzcyAqIDEwMCkgKyAnJSc7XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLnJlc291cmNlLnR5cGU9PSdqc29uJyl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmVzb3VyY2UpOyAgLy8ganNvblxyXG4gICAgICAgICAgICAvLyDku47mnI3liqHlmajliqDovb1tcDPmnaXov5vooYzmkq3mlL5cclxuICAgICAgICAgICAgLy8gdGhpcy5hdWRpby5jbGlwID0gcmV0O1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIHRoaXMucmVzb3VyY2UudHlwZT09J3BuZyd8fHRoaXMucmVzb3VyY2UudHlwZT09J2pwZycpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTsgIC8vIGpzb25cclxuICAgICAgICAgICAgLy9yZXPmmK9jYy5UZXh0dXJlMkTov5nmoLflr7nosaEgXHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHJlcylcclxuICAgICAgICAgICAgLy8gdGhpcy5oZWFkcGljLnNwcml0ZUZyYW1lLnNldFRleHR1cmUocmVzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNwcml0ZUZyYW1lLnNldFRleHR1cmUocmVzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUuc2V0Q29udGVudFNpemUocmVzLmdldENvbnRlbnRTaXplKCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCB0aGlzLnJlc291cmNlLnR5cGU9PSdtcDMnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTsgIC8vIG1wM1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF1ZGlvLmNsaXAgPSByZXM7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAvLyDku47mnI3liqHlmajliqDovb1tcDPmnaXov5vooYzmkq3mlL5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gY2MuYXVkaW9FbmdpbmUucGxheShyZXMudXJsLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG4gXHJcbiAgICBfY29tcGxldGVDYWxsYmFjazogZnVuY3Rpb24oZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgLy/liqDovb3lrozmiJDlm57osINcclxuICAgICAgICB0aGlzLmxvYWRuZXh0U2NlbmUoKTsgIC8vIOS4i+S4gOWcuuaZryBcclxuICAgIH0sXHJcbiBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZighdGhpcy5yZXNvdXJjZSl7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgaWYocHJvZ3Jlc3MgPj0gMSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliqDovb3lrozmiJAnKVxyXG4gICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7IC8v6L+b5bqm5p2h6ZqQ6JePXHJcbiAgICAgICAgICAgIHRoaXMuYm1wX2ZvbnQubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBpZihwcm9ncmVzcyA8IHRoaXMucHJvZ3Jlc3Mpe1xyXG4gICAgICAgICAgICBwcm9ncmVzcyArPSBkdDtcclxuICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgXHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRuZXh0U2NlbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIOeZu+W9lemihOWKoOi9vVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnaW5kZXgnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZygn55m75b2V6aKE5Yqg6L29Jyk7XHJcbiAgICAgICAgICAgIC8vIC8vIOivt+axgueZu+W9leaOpeWPo1xyXG4gICAgICAgICAgICAvLyB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgJ3Bhc3N3b3JkJzogMTIzNDU2LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICdzZXJ2ZXJpZCc6IDEsXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhcmFtc1wiKVxyXG4gICAgICAgIGlmKHBhcmFtcyl7XHJcbiAgICAgICAgICAgIGNjLmxvZygn5b+r6YCf55m75b2VJyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhwYXJhbXMpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2luZGV4Jyk7XHJcbiAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFyYW1zJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7IFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5sb2coJ+i0puWPt+azqOWGjC/nmbvlvZUnKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdpbmRleCcpO1xyXG4gICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmFtcycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIH0sXHJcblxyXG4vLyDjgIDjgIAgY2hhbmdlQmo6IGZ1bmN0aW9uKCl7XHJcbi8vIOOAgOOAgOOAgOOAgHZhciB1cmwgPSAnZ2xvYmFsVUkvdmlkZW8vZ1ZpZGVvUGxheUNsaWNrJztcclxuLy8g44CA44CA44CA44CAdmFyIF90aGlzID0gdGhpczsgY2MubG9hZGVyLmxvYWRSZXModXJsLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcHJpdGVGcmFtZSlcclxuLy8g44CA44CA44CA44CAeyDjgIBcclxuLy8g44CA44CA44CA44CA44CA44CAX3RoaXMuaXNQbGF5LnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbi8vIOOAgOOAgOOAgOOAgCB9KTtcclxuICAgIFxyXG4vLyDjgIDjgIDjgIBcclxuLy8g44CA44CA44CA44CALy/liqDovb3nvZHnu5zlm77niYdcclxuLy8gICAgICAgICB2YXIgdXJsID0gXCJ3d3cubW9uc3Rlci5jb20vd2ViL2FwcC9sb2FkaW5nLmpwZ1wiO1xyXG4vLyAgICAgICAgIGNjLmxvYWRlci5sb2FkKHt1cmw6IHVybCwgdHlwZTogJ3BuZyd9LCBmdW5jdGlvbihlcnIsaW1nKXtcclxuLy8gICAgICAgICAgICAgdmFyIG15bG9nbyAgPSBuZXcgY2MuU3ByaXRlRnJhbWUoaW1nKTsgXHJcbi8vICAgICAgICAgICAgIHNlbGYubG9nby5zcHJpdGVGcmFtZSA9IG15bG9nbztcclxuLy8gICAgICAgICB9KTtcclxuLy8g44CA44CA44CAfSxcclxufSk7XHJcblxyXG5cclxuIl19