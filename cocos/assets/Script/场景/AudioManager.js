cc.Class({
    extends: cc.Component,

    // properties: {
    //     bgMusic:{
    //         url:cc.AudioClip,
    //         default: null
    //     },
    // },

    onLoad() {
        cc.game.addPersistRootNode(this.node);
    },

    
    playBgMusic() {

        var _urls ='/app_resources/loading/武侠.mp3';
        this.bgMusic = httpRequest.httpUrl(_urls);
       this.bgMusicChannel = cc.audioEngine.play(this.bgMusic,true,0.5)
    },

    stopBgMusic: function () {        
        if (this.bgMusicChannel !== undefined) {
            cc.audioEngine.stop(this.bgMusicChannel);            
            this.bgMusicChannel = undefined;
        }
    },

});