"use strict";
cc._RF.push(module, 'f03637Rq8NIL4xawPe0R84Z', 'ProgressBarScript');
// Script/login/ProgressBarScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    progressBarView: {
      type: cc.ProgressBar,
      "default": null
    }
  },
  //当我们将脚本添加到节点 `node`上面的时候
  onLoad: function onLoad() {
    this._ping = true;
    this.progressBarView.progress = 0;
  },
  update: function update(dt) {
    this._updateProgressBar(this.progressBarView, dt);
  },
  _updateProgressBar: function _updateProgressBar(progressBar, dt) {
    var progress = progressBar.progress;

    if (progress < 1.0 && this._ping) {
      progress += dt * this.speed;
    } else {
      progress -= dt * this.speed;
      this._ping = progress <= 0;
    }

    progressBar.progress = progress;
  } // update (dt) {},

});

cc._RF.pop();