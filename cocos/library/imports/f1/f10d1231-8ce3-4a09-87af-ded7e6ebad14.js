"use strict";
cc._RF.push(module, 'f10d1IxjONKCYev3tfm660U', 'popup_dlg');
// Script/login/popup_dlg.js

"use strict";

// popup_dlg.js
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
    mask: {
      type: cc.Node,
      "default": null
    },
    mask_opacity: 128,
    content: {
      type: cc.Node,
      "default": null
    }
  },
  // use this for initialization
  onLoad: function onLoad() {},
  show_dlg: function show_dlg() {
    this.node.active = true; // mask 渐变出来;

    this.mask.opacity = 0;
    var fin = cc.fadeTo(0.3, this.mask_opacity);
    this.mask.runAction(fin); // dlg由小到大

    this.content.scale = 0;
    var s = cc.scaleTo(0.4, 1).easing(cc.easeBackOut());
    this.content.runAction(s);
  },
  hide_dlg: function hide_dlg() {
    // 
    var fout = cc.fadeOut(0.3);
    this.mask.runAction(fout);
    var s = cc.scaleTo(0.3, 0).easing(cc.easeBackIn());
    var end_func = cc.callFunc(function () {
      this.node.active = false;
    }.bind(this));
    var seq = cc.sequence([s, end_func]);
    this.content.runAction(seq);
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

});

cc._RF.pop();