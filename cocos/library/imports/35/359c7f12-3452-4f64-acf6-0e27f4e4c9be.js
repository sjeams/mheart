"use strict";
cc._RF.push(module, '359c78SNFJPZKz2Dif05Mm+', 'home_music');
// Script/music/home_music.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // properties: {
  //     bgMusic:{
  //         url:cc.AudioClip,
  //         default: null
  //     },
  // },
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
  },
  playBgMusic: function playBgMusic() {
    var _urls = '/app_resources/loading/武侠.mp3';
    this.bgMusic = httpRequest.httpUrl(_urls);
    this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 0.5);
  },
  stopBgMusic: function stopBgMusic() {
    if (this.bgMusicChannel !== undefined) {
      cc.audioEngine.stop(this.bgMusicChannel);
      this.bgMusicChannel = undefined;
    }
  }
});

cc._RF.pop();