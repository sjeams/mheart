<?php
    foreach($content as $kss => $v) {
        if($kss == 10){
            break;
        }
        ?>
        <tr>

            <td>
                <!-- //跳转 -->
                <a href="https://help.siwazywcdn2.com:5278/m3u8.php?url=<?php $v['url'] = str_replace('在线播放$','',$v['url']);  echo $v['url']   ?>" target="blank">
                <p class="center"> <img  class="pimage" src="<?php   echo $v['imageurl']?>" alt="Img"></p>

                <div id="form<?php echo $kss?>" style="display:none">
                    <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                </div>
                <p class="center"  onclick="video(<?php echo $kss?>)"><span ><b><?php echo $kss+1 ?>、</b></span>  <?php echo $v['title']?></p>
                </a>
                <p class="center">
                    <span onclick="videoup(<?php echo $v['id']?>)" class="btn videoup<?php echo $v['id']?> collect"> <?php echo $v['up']==0?'收藏':'取消'?>  </span>
                    <span onclick="video(<?php echo $kss?>)" class="btn  collect"> 预览 </span>
                    <span onclick="Delete(<?php echo $v['id']?>)" class="btn collect"> 删除 </span>
                </p>
            </td>
        </tr>
        <?php
    }
    ?>