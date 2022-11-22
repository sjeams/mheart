<?php if($content){
foreach($content as $kss => $v) {  ?>
    <?php if($v['belong']==0){   ?>
        <tr>
            <td>
                <p> <img class="pimage" src="<?php  echo $v['imageurl']?>"   alt="img" ></p>
                <p class="center"> <?php echo $v['title']?></p>
    </td>
        </tr>
        <tr>
            <td>
            <span class="check" style="overflow-y:auto;">
            <?php if($v['video']){ foreach( $v['video'] as$y=> $vdieo){?>
                <div id="form<?php echo $kss.'c'.$y?>" style="display:none">
                    <input type="hidden" name="url" value="<?php echo $vdieo['url']?>" >
                </div>

                <!-- <a href="<?php $vdieo['url'] = str_replace('在线播放$','',$vdieo['url']);  echo $vdieo['url']   ?>" target="blank"> <?php echo $vdieo['title']?>  </a> -->
                <a href="javascript:;"  onclick="video('<?php echo $kss.'c'.$y?>')"  > <?php echo $vdieo['title']?>  </a>

                <?php } }?>
                </span>
            </td>
    
        </tr>

    <?php   }else{ ?>
    <div id="form<?php echo $kss?>">
        <input type="hidden" name="url" value="<?php echo $v['url']?>" >
        <input type="hidden" name="title" value="<?php echo $v['title']?>" >
        <input type="hidden" name="imageurl" value="<?php echo $v['imageurl']?>" >
        <input type="hidden" name="type" value="<?php echo $v['type']?>" >
        <input type="hidden" name="belong" value="<?php echo $v['belong']?>" >
        <input type="hidden" name="link" value="<?php echo $v['link']?>" >
    </div>
    <tr>
        <td  >
            <!-- // 第三方URL -->
            <!-- https://m3u8.huakuibf3.com/m3u8/?url= -->
            <!-- https://help.siwazywcdn2.com:5278/m3u8.php?url= -->
            <a href="https://help.siwazywcdn2.com:5278/m3u8.php?url=<?php $v['url'] = str_replace('在线播放$','',$v['url']);  echo $v['url']   ?>" target="blank">
            <p class="center"><img class="pimage" src="<?php echo $v['imageurl']?>"   alt="" ></p>
            <p class="center"><span ><b><?php echo $kss+1 ?>、</b></span>  <?php echo $v['title']?></p>
            </a>
            <p class="center"> 
                <span onclick="video(<?php echo $kss?>)" class="btn collect"> 预览</span>
                <span onclick="Update(<?php echo $kss?>)" class="btn collect collect_id<?php echo $kss?> <?php echo $v['collect']==1?'btn-success':''  ?>"> 收藏</span>
            </p>
        </td>
    
    </tr>
    <?php
} } }
?>
<tr>
    <td class="center">
        <span  class="btn btn-primary" onclick="prevPage()">上一页</span>
        <span  class="btn btn-primary" onclick="clearSession()"> 刷新 </span>
        <span  class="btn btn-primary" onclick="nextPage()">下一页</span>    
    </td>
</tr>