<html>
    <head>
        <title>在线视频</title>
        <meta http-equiv="Access-Control-Allow-Origin" content="*">
        <link rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
        <script type="text/javascript" src="/ckplayer/hls.js/hls.min.js"></script>
        <script type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>
    </head>
<style>
    .video_center {
        margin: 0px;
    }
    table{
        margin-bottom:0px!important;
    }
</style>
    <body>
        <!-- //只有视频页面才有这个 去的 0c0格式的key -->
        
        <input type="hidden" id="goBelong"  value="0">
        <input type="hidden" id="isCollect"  value="1">
        <table class="table table-bordered  tablestyle" >
                <tr>
                    <td>
                            <!-- <p> <img class="pimage" src="<?php  echo $m3u8['imageurl']?>"   alt="img" ></p> -->
                            <div id="dplay_video<?php echo $kss ?>" class="video<?php echo $kss ?> collect-video-style" style="background-image:url(<?php echo $m3u8['imageurl']?>);"> <span id="defult_video"  onclick="videoList(<?php echo $kss ?>,'<?php echo $kss.'c'.$do_num ?>')"  class="video_box "></span></div> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="check" style="overflow-y:auto;">
                        <?php if($data){ foreach( $data as$y=> $vdieo){?>
                        <div id="form<?php echo $kss.'c'.$y?>" style="display:none">
                            <input type="hidden" name="url" value="<?php echo $vdieo['url']?>" >
                            <input type="hidden" name="imageurl" value="<?php echo $m3u8['imageurl']?>" >
                            <input type="hidden" name="title" value="<?php echo $vdieo['title']?>" >
                        </div>
                        <!-- <a href="<?php $vdieo['url'] = str_replace('在线播放$','',$vdieo['url']);  echo $vdieo['url']   ?>" target="blank"> <?php echo $vdieo['title']?>  </a> -->
                        <!-- <a href="javascript:;"  onclick="video('<?php echo $kss.'c'.$y?>')"  > <?php echo $vdieo['title']?>  </a> -->
                        <a id="click_video<?php echo $kss.'c'.$y ?>" onclick="videoList(<?php echo $kss?>,'<?php echo $kss.'c'.$y ?>')" class="btn   collect click_video"> <?php echo $vdieo['title']?> </a>

                        <?php } }?>
                        </span>
                    </td>
                </tr>
            <?php     ?>
        </table>
    </body>
</html>

<script>
    $(function(){
        $("#defult_video").trigger("click");
        // 默认播放第一个视频
        // videoList(1,'0c0',1);
        // 列表模式播放
        $('.model_name').text('列表×');
        $('.model_name').removeClass('btn-success');
        $('.model_name').addClass('btn-defult');
        $('#is_model_type').val(0)
        //隐藏窗口播放栏
        $('.video_old').css('display','none');
    })
</script>