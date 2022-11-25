<?php
    foreach($content as $kss => $v) {
        if($kss == 10){
            break;
        }
        ?>
        <div id="form<?php echo $v['id']?>">
            <input type="hidden" name="video_id" value="<?php echo $v['id']?>" >
            <input type="hidden" name="url" value="<?php echo $v['url']?>" >
            <input type="hidden" name="title" value="<?php echo $v['title']?>" >
            <input type="hidden" name="imageurl" value="<?php echo $v['imageurl']?>" >
            <input type="hidden" name="type" value="<?php echo $v['type']?>" >
            <input type="hidden" name="belong" value="<?php echo $v['belong']?>" >
            <input type="hidden" name="link" value="<?php echo $v['link']?>" >
        </div>
        <tr>
            
            <td>
                <!-- //跳转 -->
                <a href="https://help.siwazywcdn2.com:5278/m3u8.php?url=<?php $v['url'] = str_replace('在线播放$','',$v['url']);  echo $v['url']   ?>" target="blank">
                <p class="center"> 
                    <!-- <img  class="pimage" src="<?php   echo $v['imageurl']?>" alt="Img"> -->
                    <div class="video<?php echo $v['id']?>" style="width:100%; height:200px;position:relative"></div>
                    <script>
                        var videoObject = {
                            container: '.video<?php echo $v['id']?>', //“#”代表容器的ID，“.”或“”代表容器的class
                            plug:'hls.js',//设置使用hls插件
                            autoplay:false,
                            poster:'<?php echo $v['imageurl']?>',//封面图片
                            video: '<?php echo $v['url']?>',//视频地址
                            // rotate:90,//旋转90度
                        };
                        new ckplayer(videoObject);//初始化播放器
                    </script>
                </p>

                <div id="form<?php echo $v['id']?>" style="display:none">
                    <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                </div>
                <p class="center"  onclick="video(<?php echo $v['id']?>)"><span ><b>Page<?php echo $data['page'] ?>、</b></span>  <?php echo $v['title']?></p>
                </a>
                <p class="center">
                    <span onclick="video(<?php echo $v['id']?>)" class="btn  collect"> 预览 </span>
                    <span onclick="Update_my(<?php echo $v['id']?>)" class="btn collect my_collect_<?php echo $v['id']?> btn-danger"> 移除</span>
                </p>
            </td>
        </tr>
        <?php
    }
?>