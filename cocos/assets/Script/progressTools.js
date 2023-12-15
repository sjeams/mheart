var HttpHelper = require("http"); 
cc.Class({
    extends: cc.Component,
    properties: {
        speed: 1,
        progressBar:cc.ProgressBar,
        audio: {
            default: null,
            type: cc.AudioClip
        },
        play: function () {
            this.audioSource.play();
        },
        
        pause: function () {
            this.audioSource.pause();
        },
        sys_label:cc.Label,
 
    },
    onLoad () {
        this.resource = null;
        this.progressBar.progress =0;
        this.sys_label.string = "0%";
    },
    
})