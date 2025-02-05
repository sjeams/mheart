<!-- 测试页面 -->
<style>
    .collect-video-style-pic{
	    height: -webkit-fill-available;
        /* height: inherit; */
        position: absolute;
        max-width:100%!important;
        background-size:contain!important;
    }
</style>
<!-- <link rel="stylesheet" href="https://cdn.bootcss.com/dplayer/1.25.0/DPlayer.min.css" /> -->
<!-- <script src="https://cdn.bootcss.com/blueimp-md5/2.12.0/js/md5.min.js"></script> -->
<!-- <script src="https://cdn.bootcss.com/flv.js/1.5.0/flv.min.js"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script> -->
<!-- 以上js都需要在dplayer之前加载 -->
<!-- <script src="https://cdn.bootcss.com/dplayer/1.25.0/DPlayer.min.js"></script> -->
<link rel="stylesheet" href="/dplayer/dist/DPlayer.min.css" />
<script type="text/javascript" src="/dplayer/dist/flv.min.js"></script>
<!-- <script type="text/javascript" src="/dplayer/dist/md5.min.js"></script> -->
<script type="text/javascript" src="/dplayer/dist/hls.min.js"></script>
<script type="text/javascript" src="/dplayer/dist/DPlayer.min.js"></script>
<div id="dplayer" class="collect-video-style-pic"></div>
<script type="text/javascript">
    // var url = 'https://sd7.taopianplay1.com:43333/c56b1bc09da3/HD/2024-01-20/30/b5bcbd095592/cfc2c49d3918/playlist.m3u8';

    var url ='<?php echo $url ?>';
    var vid = $.md5(url);
    const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        autoplay: true, // 自动播放
        theme: '#FADFA3', // 主题
        loop: true, // 循环播放
        lang: 'zh-cn', // 语言
        // screenshot: true, // 截图
        hotkey: true, // 热键
        preload: 'auto', // 预加载
        // logo: '/assets/octocat.png', // 左上角logo
        volume: 0.5, // 音量
        mutex: true, // 多个视频互斥
        // 常规方式
        video: {
            url: url,
            type: 'auto',
            pic: '<?php echo $image ?>', // 封面
            thumbnails: '<?php echo $image ?>', // 缩略图
        },
        // m3u8
        //video: {
        //    url: '/assets/demo.m3u8',
        //    type: 'hls'
        //},
        // flv
        //video: {
        //    url: '/assets/demo.flv',
        //    type: 'flv'
        //},
        // pluginOptions: {
        //     hls: {
        //         // hls config
        //         autoStartLoad: true,
        //         startPosition: -1

        //     },
        //     flv: {
        //         enableWorker: false,
        //         enableStashBuffer: true,
        //         stashInitialSize: undefined,

        //         isLive: false,

        //         lazyLoad: true,
        //         lazyLoadMaxDuration: 3 * 60,
        //         lazyLoadRecoverDuration: 30,
        //         deferLoadAfterSourceOpen: true,

        //         // autoCleanupSourceBuffer: default as false, leave unspecified
        //         autoCleanupMaxBackwardDuration: 3 * 60,
        //         autoCleanupMinBackwardDuration: 2 * 60,

        //         statisticsInfoReportInterval: 600,

        //         fixAudioTimestampGap: true,

        //         accurateSeek: false,
        //         seekType: 'range',  // [range, param, custom]
        //         seekParamStart: 'bstart',
        //         seekParamEnd: 'bend',
        //         rangeLoadZeroStart: false,
        //         customSeekHandler: undefined,
        //         reuseRedirectedURL: false,
        //         // referrerPolicy: leave as unspecified

        //         headers: undefined,
        //         customLoader: undefined
        //     }
        // },
        
        // 切换视频质量
        //video: {
        //    quality: [
        //        {
        //            name: 'HD',
        //            url: 'demo.m3u8',
        //            type: 'hls',
        //        },
        //        {
        //            name: 'SD',
        //            url: 'demo.mp4',
        //            type: 'normal',
        //        },
        //    ],
        //    defaultQuality: 0,
        //    pic: 'demo.png',
        //    thumbnails: 'thumbnails.jpg',
        //},
        // 视频字幕
        // subtitle: {
        //     type: 'webvtt',
        //     url: 'webvtt.vtt',
        //     fontSize: '25px',
        //     bottom: '10%',
        //     color: '#b7daff'
        // },
        // 弹幕
        // danmaku: {
        //     id: vid,
        //     api: 'http://192.168.1.172:1207/',
        //     addition: ['http://192.168.1.172:1207/v3/bilibili?aid=80266688&cid=137358410']
        // },
        // 视频右键菜单
        contextmenu: [
            {
                text: 'falltakeman',
                link: 'https://cnblogs.com/falltakeman',
            },
            {
                text: 'dplayer',
                click: (player) => {
                    console.log(player);
                },
            },
        ],
        // 高能预告
        // highlight: [
        //     {
        //         text: '敌军还有10秒到达战场',
        //         time: 10,
        //     },
        //     {
        //         text: '2mins 空降',
        //         time: 120,
        //     },
        // ],
    });

</script>