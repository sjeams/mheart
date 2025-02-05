var self = this;
cc.Class({
    extends: cc.Component,
 
    properties: {
        speed: 1,
        progressBar:{
            default:null,
            type:cc.ProgressBar,
            text:cc.Sprite,
        },
        audio: {
            default: null,
            type: cc.AudioClip
        },
        // play: function () {
        //     this.audioSource.play();
        // },
        
        // pause: function () {
        //     this.audioSource.pause();
        // },
        bmp_font: {
            default: null,
            type: cc.Label,
        },
        // //默认头像
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
 
    onLoad () {
        console.log(this.node);
            console.log('正在对比资源');
            // // 远程 url 不带图片后缀名，此时必须指定远程图片文件的类型
            // remoteUrl = "http://unknown.org/emoji?id=124982374";
            // cc.loader.load({url: remoteUrl, type: 'png'}, function () {
            //     // Use texture to create sprite frame
            // });
            
            // // 用绝对路径加载设备存储内的资源，比如相册
            // var absolutePath = "/dara/data/some/path/to/image.png"
            // cc.loader.load(absolutePath, function () {
            //     // Use texture to create sprite frame
            // });
            console.log('正在加载场景资源，请耐心等待...');
        // 加载资源包
        this._urls = [
            // {url:'https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/jianzhicangmang.mp3', type:'mp3'},
            // {url:'https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/loading.jpg', type:'jpg'},
            // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/123.jpg', type:'jpg'},
            // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/ccc.png', type:'png'},
            // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1/jq22honey.zip', type:'zip'},
            // {url:'https://www./app/api/file-content?url=http://127.0.0.1/monster.zip', type:'zip'},
            // {url:'https://www.aheart.cn/app/api/file-content?url=http://127.0.0.1（这里填你的服务器ip)/image2.png', type:'png'}, 
        ];
        // console.log( this.progressBar); 
        // console.log( this.sprite); 
        this.resource = null;
        this.progressBar.progress =0;

        this.bmp_font.string = "0%";
        // this.ProgressBar.progress += math_random / 100; 
        this._clearAll();
       
        cc.loader.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));
    },
 
    start () {

    },
 
    _clearAll: function() {
        for(var i = 0; i < this._urls.length; ++i) {
            var url = this._urls[i];
            cc.loader.release(url);
        }
    },
 
    _progressCallback: function(completeCount, totalCount, res) {
        //加载进度回调
        // console.log('资源 ' + completeCount + '加载完成！资源加载中...');
        // console.log('加载场景资源');
        this.progressBar.progress = completeCount / totalCount;
        this.progressBar.completeCount = completeCount;
        this.progressBar.totalCount = totalCount;
        this.resource = res;
        // 代码里面获取cc.Label组件, 修改文本内容
        //在代码里面获取cc.Label组件
        var sys_label = this.node.getChildByName("sys_label").getComponent(cc.Label);
        sys_label.string = parseInt(this.progress * 100) + '%';

        if( this.resource.type=='json'){
            // console.log(this.resource);  // json
            // 从服务器加载mp3来进行播放
            // this.audio.clip = ret;
            // this.audio.play();
        }
        if( this.resource.type=='png'||this.resource.type=='jpg'){
             console.log(res);  // json
            //res是cc.Texture2D这样对象 
            //   this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(res)
            // this.headpic.spriteFrame.setTexture(res);
            // this.node.spriteFrame.setTexture(res);
            // this.sprite.spriteFrame.setContentSize(res.getContentSize());
            // this.node.getComponent(cc.Sprite).spriteFrame = res;
        }
        if( this.resource.type=='mp3'){
            console.log(res);  // mp3
            // this.audio.clip = res;
            // this.audio.play();
            // 从服务器加载mp3来进行播放
            this.current = cc.audioEngine.play(res.url, false, 1);
        }


    },
 
    _completeCallback: function(err, texture) {
        //加载完成回调
        this.loadnextScene();  // 下一场景 
    },
 
    update (dt) {
        if(!this.resource){
            return ;
        }
        var progress = this.progressBar.progress;
        if(progress >= 1){
            console.log('加载完成')
            //加载完成
            this.progressBar.node.active = false; //进度条隐藏
            this.bmp_font.node.active = false;  // 进度隐藏
            this.enabled = false;
            return ;
        }
 
        if(progress < this.progress){
            progress += dt;
        }
   
        this.progressBar.progress = progress;
   
    },

    loadnextScene: function() {
        // 登录预加载
        cc.director.preloadScene('login/登录', function () {
            cc.log('登录预加载');
            // // 请求登录接口
            // var params = {
            //         'loginname': 'yincan1993',
            //         'password': 123456,
            //         'serverid': 1,
            // };
        });
        var token = cc.sys.localStorage.getItem("token")
        if(token){
            cc.log('快速登录');
            cc.log(token);
            cc.director.loadScene('login/登录');
            // cc.sys.localStorage.setItem('params', JSON.stringify(params)); 
        }else{
            cc.log('账号注册/登录');
            cc.director.loadScene('login/登录');
            // cc.sys.localStorage.setItem('params', JSON.stringify(params));
        }
  
    },

// 　　 changeBj: function(){
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


