
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwcm9ncmVzc1Rvb2xzLmpzIl0sIm5hbWVzIjpbIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInByb2dyZXNzQmFyIiwiUHJvZ3Jlc3NCYXIiLCJhdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJwbGF5IiwiYXVkaW9Tb3VyY2UiLCJwYXVzZSIsInN5c19sYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwicmVzb3VyY2UiLCJwcm9ncmVzcyIsInN0cmluZyIsIl9jbGVhckFsbCIsInN0YXJ0IiwiaSIsIl91cmxzIiwibGVuZ3RoIiwidXJsIiwibG9hZGVyIiwicmVsZWFzZSIsIl9wcm9ncmVzc0NhbGxiYWNrIiwiY29tcGxldGVDb3VudCIsInRvdGFsQ291bnQiLCJyZXMiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJwYXJzZUludCIsImN1cnJlbnQiLCJhdWRpb0VuZ2luZSIsInVwZGF0ZSIsImR0IiwiY29uc29sZSIsImxvZyIsImFjdGl2ZSIsImJtcF9mb250IiwiZW5hYmxlZCIsIl9jb21wbGV0ZUNhbGxiYWNrIiwiZXJyIiwidGV4dHVyZSIsImxvYWRuZXh0U2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRSxDQURDO0FBRVJDLElBQUFBLFdBQVcsRUFBQ0wsRUFBRSxDQUFDTSxXQUZQO0FBR1JDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEMsTUFBQUEsSUFBSSxFQUFFUixFQUFFLENBQUNTO0FBRk4sS0FIQztBQU9SQyxJQUFBQSxJ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QUFRLElBQUlxQixFQUFaO0FBQ0g7O0FBQ0QsU0FBS2pDLFdBQUwsQ0FBaUJZLFFBQWpCLEdBQTRCQSxRQUE1QjtBQUNILEdBNUZJO0FBNkZMMkIsRUFBQUEsaUJBQWlCLEVBQUUsMkJBQVNDLEdBQVQsRUFBY0MsT0FBZCxFQUF1QjtBQUN0QztBQUNBLFNBQUtDLGFBQUwsR0FGc0MsQ0FFZjtBQUMxQixHQWhHSTtBQWlHTEEsRUFBQUEsYUFBYSxFQUFFLHlCQUFXLENBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBdkhJLENBeUhUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdklTLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7IFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBwcm9ncmVzc0JhcjpjYy5Qcm9ncmVzc0JhcixcclxuICAgICAgICBhdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnBhdXNlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzeXNfbGFiZWw6Y2MuTGFiZWwsXHJcbiBcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIOWKoOi9vei1hOa6kOWMhVxyXG4gICAgICAgIC8vIHRoaXMuX3VybHMgPSBbXHJcbiAgICAgICAgICAgIC8vIHt1cmw6Jyd9XHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcF9yZXNvdXJjZXMvbG9hZGluZy9qaWFuemhpY2FuZ21hbmcubXAzJywgdHlwZTonbXAzJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9sb2FkaW5nL2xvYWRpbmcuanBnJywgdHlwZTonanBnJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS8xMjMuanBnJywgdHlwZTonanBnJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS9jY2MucG5nJywgdHlwZToncG5nJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS9qcTIyaG9uZXkuemlwJywgdHlwZTonemlwJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3Li9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS9tb25zdGVyLnppcCcsIHR5cGU6J3ppcCd9LFxyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly8xMjcuMC4wLjHvvIjov5nph4zloavkvaDnmoTmnI3liqHlmahpcCkvaW1hZ2UyLnBuZycsIHR5cGU6J3BuZyd9LFxyXG4gICAgICAgIC8vIF07XHJcbiAgICAgICAgLy8gdGhpcy5fdXJscyA9W107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMucHJvZ3Jlc3NCYXIpOyBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggdGhpcy5zcHJpdGUpOyBcclxuICAgICAgICB0aGlzLnJlc291cmNlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0wO1xyXG4gICAgICAgIHRoaXMuc3lzX2xhYmVsLnN0cmluZyA9IFwiMCVcIjtcclxuICAgICAgICAvLyB0aGlzLlByb2dyZXNzQmFyLnByb2dyZXNzICs9IG1hdGhfcmFuZG9tIC8gMTAwOyBcclxuICAgICAgICB0aGlzLl9jbGVhckFsbCgpO1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKHRoaXMuX3VybHMsIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2suYmluZCh0aGlzKSwgdGhpcy5fY29tcGxldGVDYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcbiBcclxuXHJcbiAgICBcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgX2NsZWFyQWxsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl91cmxzLmxlbmd0aClcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDw9IHRoaXMuX3VybHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuX3VybHNbaV07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIF9wcm9ncmVzc0NhbGxiYWNrOiBmdW5jdGlvbihjb21wbGV0ZUNvdW50LCB0b3RhbENvdW50LCByZXMpIHtcclxuICAgICAgICAvL+WKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfotYTmupAgJyArIGNvbXBsZXRlQ291bnQgKyAn5Yqg6L295a6M5oiQ77yB6LWE5rqQ5Yqg6L295LitLi4uJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+WKoOi9veWcuuaZr+i1hOa6kCcpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudDtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNvbXBsZXRlQ291bnQgPSBjb21wbGV0ZUNvdW50O1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlcztcclxuICAgICAgICAvLyDku6PnoIHph4zpnaLojrflj5ZjYy5MYWJlbOe7hOS7tiwg5L+u5pS55paH5pys5YaF5a65XHJcbiAgICAgICAgLy/lnKjku6PnoIHph4zpnaLojrflj5ZjYy5MYWJlbOe7hOS7tlxyXG4gICAgICAgIHZhciBzeXNfbGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzeXNfbGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBzeXNfbGFiZWwuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5wcm9ncmVzcyAqIDEwMCkgKyAnJSc7XHJcbiAgICAgICAgaWYoIHRoaXMucmVzb3VyY2UudHlwZT09J21wMycpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpOyAgLy8gbXAzXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW8uY2xpcCA9IHJlcztcclxuICAgICAgICAgICAgLy8gdGhpcy5hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgIC8vIOS7juacjeWKoeWZqOWKoOi9vW1wM+adpei/m+ihjOaSreaUvlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHJlcy51cmwsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnJlc291cmNlKXtcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHByb2dyZXNzID0gdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcztcclxuICAgICAgICBpZihwcm9ncmVzcyA+PSAxKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WKoOi9veWujOaIkCcpXHJcbiAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIubm9kZS5hY3RpdmUgPSBmYWxzZTsgLy/ov5vluqbmnaHpmpDol49cclxuICAgICAgICAgICAgdGhpcy5ibXBfZm9udC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwcm9ncmVzcyA8IHRoaXMucHJvZ3Jlc3Mpe1xyXG4gICAgICAgICAgICBwcm9ncmVzcyArPSBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgfSxcclxuICAgIF9jb21wbGV0ZUNhbGxiYWNrOiBmdW5jdGlvbihlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAvL+WKoOi9veWujOaIkOWbnuiwg1xyXG4gICAgICAgIHRoaXMubG9hZG5leHRTY2VuZSgpOyAgLy8g5LiL5LiA5Zy65pmvIFxyXG4gICAgfSxcclxuICAgIGxvYWRuZXh0U2NlbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIOeZu+W9lemihOWKoOi9vVxyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnaW5kZXgnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZygn55m75b2V6aKE5Yqg6L29Jyk7XHJcbiAgICAgICAgLy8gICAgIC8vIC8vIOivt+axgueZu+W9leaOpeWPo1xyXG4gICAgICAgIC8vICAgICAvLyB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgJ3Bhc3N3b3JkJzogMTIzNDU2LFxyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICdzZXJ2ZXJpZCc6IDEsXHJcbiAgICAgICAgLy8gICAgIC8vIH07XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gdmFyIHBhcmFtcyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhcmFtc1wiKVxyXG4gICAgICAgIC8vIGlmKHBhcmFtcyl7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZygn5b+r6YCf55m75b2VJyk7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhwYXJhbXMpO1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2luZGV4Jyk7XHJcbiAgICAgICAgLy8gICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFyYW1zJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7IFxyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coJ+i0puWPt+azqOWGjC/nmbvlvZUnKTtcclxuICAgICAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdpbmRleCcpO1xyXG4gICAgICAgIC8vICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmFtcycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcblxyXG4vLyDjgIDjgIAgY2hhbmdlQmo6IGZ1bmN0aW9uKCl7XHJcbi8vIOOAgOOAgOOAgOOAgHZhciB1cmwgPSAnZ2xvYmFsVUkvdmlkZW8vZ1ZpZGVvUGxheUNsaWNrJztcclxuLy8g44CA44CA44CA44CAdmFyIF90aGlzID0gdGhpczsgY2MubG9hZGVyLmxvYWRSZXModXJsLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcHJpdGVGcmFtZSlcclxuLy8g44CA44CA44CA44CAeyDjgIBcclxuLy8g44CA44CA44CA44CA44CA44CAX3RoaXMuaXNQbGF5LnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbi8vIOOAgOOAgOOAgOOAgCB9KTtcclxuICAgIFxyXG4vLyDjgIDjgIDjgIBcclxuLy8g44CA44CA44CA44CALy/liqDovb3nvZHnu5zlm77niYdcclxuLy8gICAgICAgICB2YXIgdXJsID0gXCJ3d3cubW9uc3Rlci5jb20vd2ViL2FwcC9sb2FkaW5nLmpwZ1wiO1xyXG4vLyAgICAgICAgIGNjLmxvYWRlci5sb2FkKHt1cmw6IHVybCwgdHlwZTogJ3BuZyd9LCBmdW5jdGlvbihlcnIsaW1nKXtcclxuLy8gICAgICAgICAgICAgdmFyIG15bG9nbyAgPSBuZXcgY2MuU3ByaXRlRnJhbWUoaW1nKTsgXHJcbi8vICAgICAgICAgICAgIHNlbGYubG9nby5zcHJpdGVGcmFtZSA9IG15bG9nbztcclxuLy8gICAgICAgICB9KTtcclxuLy8g44CA44CA44CAfSxcclxufSk7Il19