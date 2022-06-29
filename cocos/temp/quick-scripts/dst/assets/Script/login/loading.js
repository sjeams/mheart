
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

    this._urls = [// {url:'https://www.mheart.xyz/app/api/file-content?url=https://www.mheart.xyz/app/loading/jianzhicangmang.mp3', type:'mp3'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=https://www.mheart.xyz/app/loading/loading.jpg', type:'jpg'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=http://127.0.0.1/123.jpg', type:'jpg'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=http://127.0.0.1/ccc.png', type:'png'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=http://127.0.0.1/jq22honey.zip', type:'zip'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=http://127.0.0.1/monster.zip', type:'zip'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=http://127.0.0.1（这里填你的服务器ip)/image2.png', type:'png'}, 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJzZWxmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInByb2dyZXNzQmFyIiwidHlwZSIsIlByb2dyZXNzQmFyIiwidGV4dCIsIlNwcml0ZSIsImF1ZGlvIiwiQXVkaW9DbGlwIiwicGxheSIsImF1ZGlvU291cmNlIiwicGF1c2UiLCJibXBfZm9udCIsIkxhYmVsIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJfdXJscyIsInJlc291cmNlIiwicHJvZ3Jlc3MiLCJzdHJpbmciLCJfY2xlYXJBbGwiLCJsb2FkZXIiLCJsb2FkIiwiX3Byb2dyZXNzQ2FsbGJhY2siLCJiaW5kIiwiX2NvbXBsZXRlQ2FsbGJhY2siLCJzdGFydCIsImkiLCJsZW5ndGgiLCJ1cmwiLCJyZWxlYXNlIiwiY29tcGxldGVDb3VudCIsInRvdGFsQ291bnQiLCJyZXMiLCJzeXNfbGFiZWwiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInBhcnNlSW50IiwiY3VycmVudCIsImF1ZGlvRW5naW5lIiwiZXJyIiwidGV4dHVyZSIsImxvYWRuZXh0U2NlbmUiLCJ1cGRhdGUiLCJkdCIsImFjdGl2ZSIsImVuYWJsZWQiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsInBhcmFtcyIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsSUFBSSxTQUFSO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUUsQ0FEQztBQUVSQyxJQUFBQSxXQUFXLEVBQUM7QUFDUixpQkFBUSxJQURBO0FBRVJDLE1BQUFBLElBQUksRUFBQ04sRUFB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cztcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgcHJvZ3Jlc3NCYXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIHRleHQ6Y2MuU3ByaXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGxheSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wYXVzZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm1wX2ZvbnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAvL+m7mOiupOWktOWDj1xyXG4gICAgICAgIC8vIGhlYWRwaWM6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvL+WktOWDj1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6e1xyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2MuU3ByaXRlLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuIFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5q2j5Zyo5a+55q+U6LWE5rqQJyk7XHJcbiAgICAgICAgICAgIC8vIC8vIOi/nOeoiyB1cmwg5LiN5bim5Zu+54mH5ZCO57yA5ZCN77yM5q2k5pe25b+F6aG75oyH5a6a6L+c56iL5Zu+54mH5paH5Lu255qE57G75Z6LXHJcbiAgICAgICAgICAgIC8vIHJlbW90ZVVybCA9IFwiaHR0cDovL3Vua25vd24ub3JnL2Vtb2ppP2lkPTEyNDk4MjM3NFwiO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZCh7dXJsOiByZW1vdGVVcmwsIHR5cGU6ICdwbmcnfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gVXNlIHRleHR1cmUgdG8gY3JlYXRlIHNwcml0ZSBmcmFtZVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIC8vIOeUqOe7neWvuei3r+W+hOWKoOi9veiuvuWkh+WtmOWCqOWGheeahOi1hOa6kO+8jOavlOWmguebuOWGjFxyXG4gICAgICAgICAgICAvLyB2YXIgYWJzb2x1dGVQYXRoID0gXCIvZGFyYS9kYXRhL3NvbWUvcGF0aC90by9pbWFnZS5wbmdcIlxyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZChhYnNvbHV0ZVBhdGgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIFVzZSB0ZXh0dXJlIHRvIGNyZWF0ZSBzcHJpdGUgZnJhbWVcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjliqDovb3lnLrmma/otYTmupDvvIzor7fogJDlv4PnrYnlvoUuLi4nKTtcclxuICAgICAgICAvLyDliqDovb3otYTmupDljIVcclxuICAgICAgICB0aGlzLl91cmxzID0gW1xyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9sb2FkaW5nL2ppYW56aGljYW5nbWFuZy5tcDMnLCB0eXBlOidtcDMnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvbG9hZGluZy9sb2FkaW5nLmpwZycsIHR5cGU6J2pwZyd9LFxyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vMTI3LjAuMC4xLzEyMy5qcGcnLCB0eXBlOidqcGcnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS9jY2MucG5nJywgdHlwZToncG5nJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly8xMjcuMC4wLjEvanEyMmhvbmV5LnppcCcsIHR5cGU6J3ppcCd9LFxyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vMTI3LjAuMC4xL21vbnN0ZXIuemlwJywgdHlwZTonemlwJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly8xMjcuMC4wLjHvvIjov5nph4zloavkvaDnmoTmnI3liqHlmahpcCkvaW1hZ2UyLnBuZycsIHR5cGU6J3BuZyd9LCBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLnByb2dyZXNzQmFyKTsgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMuc3ByaXRlKTsgXHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9MDtcclxuXHJcbiAgICAgICAgdGhpcy5ibXBfZm9udC5zdHJpbmcgPSBcIjAlXCI7XHJcbiAgICAgICAgLy8gdGhpcy5Qcm9ncmVzc0Jhci5wcm9ncmVzcyArPSBtYXRoX3JhbmRvbSAvIDEwMDsgXHJcbiAgICAgICAgdGhpcy5fY2xlYXJBbGwoKTtcclxuICAgICAgIFxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKHRoaXMuX3VybHMsIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2suYmluZCh0aGlzKSwgdGhpcy5fY29tcGxldGVDYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gXHJcbiAgICBfY2xlYXJBbGw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl91cmxzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLl91cmxzW2ldO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZSh1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiBcclxuICAgIF9wcm9ncmVzc0NhbGxiYWNrOiBmdW5jdGlvbihjb21wbGV0ZUNvdW50LCB0b3RhbENvdW50LCByZXMpIHtcclxuICAgICAgICAvL+WKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfotYTmupAgJyArIGNvbXBsZXRlQ291bnQgKyAn5Yqg6L295a6M5oiQ77yB6LWE5rqQ5Yqg6L295LitLi4uJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+WKoOi9veWcuuaZr+i1hOa6kCcpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudDtcclxuICAgICAgICB0aGlzLnJlc291cmNlID0gcmVzO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVDb3VudCA9IGNvbXBsZXRlQ291bnQ7XHJcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcclxuXHJcbiAgICAgICAgLy8g5Luj56CB6YeM6Z2i6I635Y+WY2MuTGFiZWznu4Tku7YsIOS/ruaUueaWh+acrOWGheWuuVxyXG4gICAgICAgIC8v5Zyo5Luj56CB6YeM6Z2i6I635Y+WY2MuTGFiZWznu4Tku7ZcclxuICAgICAgICB2YXIgc3lzX2xhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3lzX2xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgc3lzX2xhYmVsLnN0cmluZyA9IHBhcnNlSW50KHRoaXMucHJvZ3Jlc3MgKiAxMDApICsgJyUnO1xyXG5cclxuICAgICAgICBpZiggdGhpcy5yZXNvdXJjZS50eXBlPT0nanNvbicpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlc291cmNlKTsgIC8vIGpzb25cclxuICAgICAgICAgICAgLy8g5LuO5pyN5Yqh5Zmo5Yqg6L29bXAz5p2l6L+b6KGM5pKt5pS+XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW8uY2xpcCA9IHJldDtcclxuICAgICAgICAgICAgLy8gdGhpcy5hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCB0aGlzLnJlc291cmNlLnR5cGU9PSdwbmcnfHx0aGlzLnJlc291cmNlLnR5cGU9PSdqcGcnKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7ICAvLyBqc29uXHJcbiAgICAgICAgICAgIC8vcmVz5pivY2MuVGV4dHVyZTJE6L+Z5qC35a+56LGhIFxyXG4gICAgICAgICAgICAvLyAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShyZXMpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaGVhZHBpYy5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHJlcyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHJlcyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lLnNldENvbnRlbnRTaXplKHJlcy5nZXRDb250ZW50U2l6ZSgpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggdGhpcy5yZXNvdXJjZS50eXBlPT0nbXAzJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7ICAvLyBtcDNcclxuICAgICAgICAgICAgLy8gdGhpcy5hdWRpby5jbGlwID0gcmVzO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgLy8g5LuO5pyN5Yqh5Zmo5Yqg6L29bXAz5p2l6L+b6KGM5pKt5pS+XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkocmVzLnVybCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuIFxyXG4gICAgX2NvbXBsZXRlQ2FsbGJhY2s6IGZ1bmN0aW9uKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgIC8v5Yqg6L295a6M5oiQ5Zue6LCDXHJcbiAgICAgICAgdGhpcy5sb2FkbmV4dFNjZW5lKCk7ICAvLyDkuIvkuIDlnLrmma8gXHJcbiAgICB9LFxyXG4gXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMucmVzb3VyY2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzO1xyXG4gICAgICAgIGlmKHByb2dyZXNzID49IDEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Yqg6L295a6M5oiQJylcclxuICAgICAgICAgICAgLy/liqDovb3lrozmiJBcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAvL+i/m+W6puadoemakOiXj1xyXG4gICAgICAgICAgICB0aGlzLmJtcF9mb250Lm5vZGUuYWN0aXZlID0gZmFsc2U7ICAvLyDov5vluqbpmpDol49cclxuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgaWYocHJvZ3Jlc3MgPCB0aGlzLnByb2dyZXNzKXtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gZHQ7XHJcbiAgICAgICAgfVxyXG4gICBcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkbmV4dFNjZW5lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDnmbvlvZXpooTliqDovb1cclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ2luZGV4JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2coJ+eZu+W9lemihOWKoOi9vScpO1xyXG4gICAgICAgICAgICAvLyAvLyDor7fmsYLnmbvlvZXmjqXlj6NcclxuICAgICAgICAgICAgLy8gdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgICAgICAgICAgLy8gICAgICAgICAnc2VydmVyaWQnOiAxLFxyXG4gICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXJhbXNcIilcclxuICAgICAgICBpZihwYXJhbXMpe1xyXG4gICAgICAgICAgICBjYy5sb2coJ+W/q+mAn+eZu+W9lScpO1xyXG4gICAgICAgICAgICBjYy5sb2cocGFyYW1zKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdpbmRleCcpO1xyXG4gICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmFtcycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpOyBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MubG9nKCfotKblj7fms6jlhowv55m75b2VJyk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaW5kZXgnKTtcclxuICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJhbXMnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICB9LFxyXG5cclxuLy8g44CA44CAIGNoYW5nZUJqOiBmdW5jdGlvbigpe1xyXG4vLyDjgIDjgIDjgIDjgIB2YXIgdXJsID0gJ2dsb2JhbFVJL3ZpZGVvL2dWaWRlb1BsYXlDbGljayc7XHJcbi8vIOOAgOOAgOOAgOOAgHZhciBfdGhpcyA9IHRoaXM7IGNjLmxvYWRlci5sb2FkUmVzKHVybCxjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3ByaXRlRnJhbWUpXHJcbi8vIOOAgOOAgOOAgOOAgHsg44CAXHJcbi8vIOOAgOOAgOOAgOOAgOOAgOOAgF90aGlzLmlzUGxheS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4vLyDjgIDjgIDjgIDjgIAgfSk7XHJcbiAgICBcclxuLy8g44CA44CA44CAXHJcbi8vIOOAgOOAgOOAgOOAgC8v5Yqg6L29572R57uc5Zu+54mHXHJcbi8vICAgICAgICAgdmFyIHVybCA9IFwid3d3Lm1vbnN0ZXIuY29tL3dlYi9hcHAvbG9hZGluZy5qcGdcIjtcclxuLy8gICAgICAgICBjYy5sb2FkZXIubG9hZCh7dXJsOiB1cmwsIHR5cGU6ICdwbmcnfSwgZnVuY3Rpb24oZXJyLGltZyl7XHJcbi8vICAgICAgICAgICAgIHZhciBteWxvZ28gID0gbmV3IGNjLlNwcml0ZUZyYW1lKGltZyk7IFxyXG4vLyAgICAgICAgICAgICBzZWxmLmxvZ28uc3ByaXRlRnJhbWUgPSBteWxvZ287XHJcbi8vICAgICAgICAgfSk7XHJcbi8vIOOAgOOAgOOAgH0sXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==