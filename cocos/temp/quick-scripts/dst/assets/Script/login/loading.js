
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

    this._urls = [// {url:'https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/jianzhicangmang.mp3', type:'mp3'},
      // {url:'https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/loading.jpg', type:'jpg'},
      // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/123.jpg', type:'jpg'},
      // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/ccc.png', type:'png'},
      // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/jq22honey.zip', type:'zip'},
      // {url:'https://www./app/api/file-content?url=http://127.0.0.1/monster.zip', type:'zip'},
      // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1（这里填你的服务器ip)/image2.png', type:'png'}, 
    ]; // console.log( this.progressBar); 
    // console.log( this.sprite); 

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
    this.progressBar.progress = completeCount / totalCount;
    this.progressBar.completeCount = completeCount;
    this.progressBar.totalCount = totalCount;
    this.resource = res; // 代码里面获取cc.Label组件, 修改文本内容
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
    cc.director.preloadScene('login/登录', function () {
      cc.log('登录预加载'); // // 请求登录接口
      // var params = {
      //         'loginname': 'yincan1993',
      //         'password': 123456,
      //         'serverid': 1,
      // };
    });
    var token = cc.sys.localStorage.getItem("token");

    if (token) {
      cc.log('快速登录');
      cc.log(token);
      cc.director.loadScene('login/登录'); // cc.sys.localStorage.setItem('params', JSON.stringify(params)); 
    } else {
      cc.log('账号注册/登录');
      cc.director.loadScene('login/登录'); // cc.sys.localStorage.setItem('params', JSON.stringify(params));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJzZWxmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInByb2dyZXNzQmFyIiwidHlwZSIsIlByb2dyZXNzQmFyIiwidGV4dCIsIlNwcml0ZSIsImF1ZGlvIiwiQXVkaW9DbGlwIiwicGxheSIsImF1ZGlvU291cmNlIiwicGF1c2UiLCJibXBfZm9udCIsIkxhYmVsIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJfdXJscyIsInJlc291cmNlIiwicHJvZ3Jlc3MiLCJzdHJpbmciLCJfY2xlYXJBbGwiLCJsb2FkZXIiLCJsb2FkIiwiX3Byb2dyZXNzQ2FsbGJhY2siLCJiaW5kIiwiX2NvbXBsZXRlQ2FsbGJhY2siLCJzdGFydCIsImkiLCJsZW5ndGgiLCJ1cmwiLCJyZWxlYXNlIiwiY29tcGxldGVDb3VudCIsInRvdGFsQ291bnQiLCJyZXMiLCJzeXNfbGFiZWwiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInBhcnNlSW50IiwiY3VycmVudCIsImF1ZGlvRW5naW5lIiwiZXJyIiwidGV4dHVyZSIsImxvYWRuZXh0U2NlbmUiLCJ1cGRhdGUiLCJkdCIsImFjdGl2ZSIsImVuYWJsZWQiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsInRva2VuIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLFNBQVI7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRSxDQURDO0FBRVJDLElBQUFBLFdBQVcsRUFBQztBQUNSLGlCQUFRLElBREE7QUFFUkMsTUFBQUEsSUFBSSxFQUFDTixFQUFF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dGhpcztcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgcHJvZ3Jlc3NCYXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIHRleHQ6Y2MuU3ByaXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGxheSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wYXVzZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm1wX2ZvbnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAvL+m7mOiupOWktOWDj1xyXG4gICAgICAgIC8vIGhlYWRwaWM6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvL+WktOWDj1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6e1xyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2MuU3ByaXRlLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuIFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5q2j5Zyo5a+55q+U6LWE5rqQJyk7XHJcbiAgICAgICAgICAgIC8vIC8vIOi/nOeoiyB1cmwg5LiN5bim5Zu+54mH5ZCO57yA5ZCN77yM5q2k5pe25b+F6aG75oyH5a6a6L+c56iL5Zu+54mH5paH5Lu255qE57G75Z6LXHJcbiAgICAgICAgICAgIC8vIHJlbW90ZVVybCA9IFwiaHR0cDovL3Vua25vd24ub3JnL2Vtb2ppP2lkPTEyNDk4MjM3NFwiO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZCh7dXJsOiByZW1vdGVVcmwsIHR5cGU6ICdwbmcnfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gVXNlIHRleHR1cmUgdG8gY3JlYXRlIHNwcml0ZSBmcmFtZVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIC8vIOeUqOe7neWvuei3r+W+hOWKoOi9veiuvuWkh+WtmOWCqOWGheeahOi1hOa6kO+8jOavlOWmguebuOWGjFxyXG4gICAgICAgICAgICAvLyB2YXIgYWJzb2x1dGVQYXRoID0gXCIvZGFyYS9kYXRhL3NvbWUvcGF0aC90by9pbWFnZS5wbmdcIlxyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZChhYnNvbHV0ZVBhdGgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIFVzZSB0ZXh0dXJlIHRvIGNyZWF0ZSBzcHJpdGUgZnJhbWVcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjliqDovb3lnLrmma/otYTmupDvvIzor7fogJDlv4PnrYnlvoUuLi4nKTtcclxuICAgICAgICAvLyDliqDovb3otYTmupDljIVcclxuICAgICAgICB0aGlzLl91cmxzID0gW1xyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvbG9hZGluZy9qaWFuemhpY2FuZ21hbmcubXAzJywgdHlwZTonbXAzJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnJywgdHlwZTonanBnJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS8xMjMuanBnJywgdHlwZTonanBnJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS9jY2MucG5nJywgdHlwZToncG5nJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS9qcTIyaG9uZXkuemlwJywgdHlwZTonemlwJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3Li9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS9tb25zdGVyLnppcCcsIHR5cGU6J3ppcCd9LFxyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly8xMjcuMC4wLjHvvIjov5nph4zloavkvaDnmoTmnI3liqHlmahpcCkvaW1hZ2UyLnBuZycsIHR5cGU6J3BuZyd9LCBcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLnByb2dyZXNzQmFyKTsgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMuc3ByaXRlKTsgXHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9MDtcclxuXHJcbiAgICAgICAgdGhpcy5ibXBfZm9udC5zdHJpbmcgPSBcIjAlXCI7XHJcbiAgICAgICAgLy8gdGhpcy5Qcm9ncmVzc0Jhci5wcm9ncmVzcyArPSBtYXRoX3JhbmRvbSAvIDEwMDsgXHJcbiAgICAgICAgdGhpcy5fY2xlYXJBbGwoKTtcclxuICAgICAgIFxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKHRoaXMuX3VybHMsIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2suYmluZCh0aGlzKSwgdGhpcy5fY29tcGxldGVDYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gXHJcbiAgICBfY2xlYXJBbGw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl91cmxzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLl91cmxzW2ldO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZSh1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiBcclxuICAgIF9wcm9ncmVzc0NhbGxiYWNrOiBmdW5jdGlvbihjb21wbGV0ZUNvdW50LCB0b3RhbENvdW50LCByZXMpIHtcclxuICAgICAgICAvL+WKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfotYTmupAgJyArIGNvbXBsZXRlQ291bnQgKyAn5Yqg6L295a6M5oiQ77yB6LWE5rqQ5Yqg6L295LitLi4uJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+WKoOi9veWcuuaZr+i1hOa6kCcpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudDtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNvbXBsZXRlQ291bnQgPSBjb21wbGV0ZUNvdW50O1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlcztcclxuICAgICAgICAvLyDku6PnoIHph4zpnaLojrflj5ZjYy5MYWJlbOe7hOS7tiwg5L+u5pS55paH5pys5YaF5a65XHJcbiAgICAgICAgLy/lnKjku6PnoIHph4zpnaLojrflj5ZjYy5MYWJlbOe7hOS7tlxyXG4gICAgICAgIHZhciBzeXNfbGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzeXNfbGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBzeXNfbGFiZWwuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5wcm9ncmVzcyAqIDEwMCkgKyAnJSc7XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLnJlc291cmNlLnR5cGU9PSdqc29uJyl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmVzb3VyY2UpOyAgLy8ganNvblxyXG4gICAgICAgICAgICAvLyDku47mnI3liqHlmajliqDovb1tcDPmnaXov5vooYzmkq3mlL5cclxuICAgICAgICAgICAgLy8gdGhpcy5hdWRpby5jbGlwID0gcmV0O1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIHRoaXMucmVzb3VyY2UudHlwZT09J3BuZyd8fHRoaXMucmVzb3VyY2UudHlwZT09J2pwZycpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTsgIC8vIGpzb25cclxuICAgICAgICAgICAgLy9yZXPmmK9jYy5UZXh0dXJlMkTov5nmoLflr7nosaEgXHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHJlcylcclxuICAgICAgICAgICAgLy8gdGhpcy5oZWFkcGljLnNwcml0ZUZyYW1lLnNldFRleHR1cmUocmVzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNwcml0ZUZyYW1lLnNldFRleHR1cmUocmVzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUuc2V0Q29udGVudFNpemUocmVzLmdldENvbnRlbnRTaXplKCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCB0aGlzLnJlc291cmNlLnR5cGU9PSdtcDMnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTsgIC8vIG1wM1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF1ZGlvLmNsaXAgPSByZXM7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAvLyDku47mnI3liqHlmajliqDovb1tcDPmnaXov5vooYzmkq3mlL5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gY2MuYXVkaW9FbmdpbmUucGxheShyZXMudXJsLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG4gXHJcbiAgICBfY29tcGxldGVDYWxsYmFjazogZnVuY3Rpb24oZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgLy/liqDovb3lrozmiJDlm57osINcclxuICAgICAgICB0aGlzLmxvYWRuZXh0U2NlbmUoKTsgIC8vIOS4i+S4gOWcuuaZryBcclxuICAgIH0sXHJcbiBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZighdGhpcy5yZXNvdXJjZSl7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgaWYocHJvZ3Jlc3MgPj0gMSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliqDovb3lrozmiJAnKVxyXG4gICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7IC8v6L+b5bqm5p2h6ZqQ6JePXHJcbiAgICAgICAgICAgIHRoaXMuYm1wX2ZvbnQubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBpZihwcm9ncmVzcyA8IHRoaXMucHJvZ3Jlc3Mpe1xyXG4gICAgICAgICAgICBwcm9ncmVzcyArPSBkdDtcclxuICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgXHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRuZXh0U2NlbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIOeZu+W9lemihOWKoOi9vVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnbG9naW4v55m75b2VJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2coJ+eZu+W9lemihOWKoOi9vScpO1xyXG4gICAgICAgICAgICAvLyAvLyDor7fmsYLnmbvlvZXmjqXlj6NcclxuICAgICAgICAgICAgLy8gdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgICAgICAgICAgLy8gICAgICAgICAnc2VydmVyaWQnOiAxLFxyXG4gICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciB0b2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpXHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICBjYy5sb2coJ+W/q+mAn+eZu+W9lScpO1xyXG4gICAgICAgICAgICBjYy5sb2codG9rZW4pO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2xvZ2luL+eZu+W9lScpO1xyXG4gICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmFtcycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpOyBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MubG9nKCfotKblj7fms6jlhowv55m75b2VJyk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4v55m75b2VJyk7XHJcbiAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFyYW1zJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgfSxcclxuXHJcbi8vIOOAgOOAgCBjaGFuZ2VCajogZnVuY3Rpb24oKXtcclxuLy8g44CA44CA44CA44CAdmFyIHVybCA9ICdnbG9iYWxVSS92aWRlby9nVmlkZW9QbGF5Q2xpY2snO1xyXG4vLyDjgIDjgIDjgIDjgIB2YXIgX3RoaXMgPSB0aGlzOyBjYy5sb2FkZXIubG9hZFJlcyh1cmwsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwcml0ZUZyYW1lKVxyXG4vLyDjgIDjgIDjgIDjgIB7IOOAgFxyXG4vLyDjgIDjgIDjgIDjgIDjgIDjgIBfdGhpcy5pc1BsYXkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuLy8g44CA44CA44CA44CAIH0pO1xyXG4gICAgXHJcbi8vIOOAgOOAgOOAgFxyXG4vLyDjgIDjgIDjgIDjgIAvL+WKoOi9vee9kee7nOWbvueJh1xyXG4vLyAgICAgICAgIHZhciB1cmwgPSBcInd3dy5tb25zdGVyLmNvbS93ZWIvYXBwL2xvYWRpbmcuanBnXCI7XHJcbi8vICAgICAgICAgY2MubG9hZGVyLmxvYWQoe3VybDogdXJsLCB0eXBlOiAncG5nJ30sIGZ1bmN0aW9uKGVycixpbWcpe1xyXG4vLyAgICAgICAgICAgICB2YXIgbXlsb2dvICA9IG5ldyBjYy5TcHJpdGVGcmFtZShpbWcpOyBcclxuLy8gICAgICAgICAgICAgc2VsZi5sb2dvLnNwcml0ZUZyYW1lID0gbXlsb2dvO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyDjgIDjgIDjgIB9LFxyXG59KTtcclxuXHJcblxyXG4iXX0=