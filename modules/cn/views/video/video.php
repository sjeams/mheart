<html>
    <head>
        <title>在线视频</title>
        <link rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
        <script type="text/javascript" src="/ckplayer/hls.js/hls.min.js"></script>
        <script type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>
    </head>
    <style>
        .center{
            margin: 0px auto;
            width:80%;
        }
        .name{
            margin-top: 20px;

        }
        .bord{
            display: inline-block;
            text-align: center;
            width:80px;
            height:20px;
            border: 1px solid wheat;
        }
 
        .on{
            
            background-color: #fbb450a3;
            border-radius: 2px;
        }
    </style>
    <body>
        
        <div class="center">
            <!-- 视频 -->
            <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1，user-scalable=0">
           <div class="video" style="height:50%;"></div>
            <script type="text/javascript">
                //定义一个变量：videoObject，用来做为视频初始化配置
                var videoObject = {
                    container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
                    plug:'hls.js',//设置使用hls插件
                    autoplay:true,
                    video: '<?php echo $m3u8['url'] ?>'//视频地址
                };
                new ckplayer(videoObject);//初始化播放器
            </script>
            <!-- 视频end -->
            
            <div>
             <p class="name"> <?php echo $m3u8['name'] ?> </p>
                <?php foreach($data as $v){ ?>
                     
                        <a class=" <?php echo $m3u8['num']==$v['num']?'on':'' ?> " href="/cn/video/video?id=<?php echo $v['id'] ?>">   <span class="bord">  第<?php echo  $v['num'] ?>集 </span></a>
                       
                    <?php   }   ?>
            
            </div>
         
        </div>
    </body>
</html>