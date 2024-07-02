"use strict";
cc._RF.push(module, '236d34ndr5Le5KyhPYJE5sU', 'progressTools');
// Script/commonApi/progressTools.js

"use strict";

// require("../common"); 
cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    progressBar: cc.ProgressBar,
    // audio: {
    //     default: null,
    //     type: cc.AudioClip
    // },
    // play: function () {
    //     this.audioSource.play();
    // },
    // pause: function () {
    //     this.audioSource.pause();
    // },
    sys_label: cc.Label
  },
  onLoad: function onLoad() {
    this.resource = null;
    this.progressBar.progress = 0;
    this.sys_label.string = "0%";
  }
});

cc._RF.pop();