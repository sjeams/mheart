<form action="/cn/video/index" method="get"  >
    <table class="table table-bordered  tablestyle"  >
    <thead>
        <?php if($login>0){?>
        <tr>
            <td >
                <div class="input_div center" style="display: block;">
                    <input name="title" class="search_input" id="appendedInputButton"   type="text" value="<?php echo $data['title']?>"/>
                    <button class="btn btn-primary search_button" type="sbumit">搜索</button>
                </div>
                <p class="center">
                    <a class="btn <?php echo $data['type']=='all'?'active btn-primary':' btn-default'?>" href="/cn/video/index?page=1&title=<?php echo $data['title']?>" >全部</a>
                    <?php foreach($list as $v){ ?>
                        <a class="btn  <?php echo $data['type']==$v['type']?'active btn-primary':' btn-default'?>" href="/cn/video/index?page=1&type=<?php echo $v['type']?>&title=<?php echo $data['title']?>" ><?php echo $v['name']?></a>
                        <?php }?>

                </p>

            </td>
                <!-- <button class="btn btn-primary" type="submit">搜索</button> -->
        </tr>
        <?php }?>
        </thead>
        <tbody>
        <?php
        foreach($content as $kss => $v) {            ?>
            <tr>
                <td>
                    <div id="form<?php echo $v['id']?>">
                        <input type="hidden" name="video_id" value="<?php echo $v['id']?>" >
                        <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                        <input type="hidden" name="title" value="<?php echo $v['title']?>" >
                        <input type="hidden" name="imageurl" value="<?php echo $v['imageurl']?>" >
                        <input type="hidden" name="type" value="<?php echo $v['type']?>" >
                        <input type="hidden" name="belong" value="<?php echo $v['belong']?>" >
                        <input type="hidden" name="link" value="<?php echo $v['link']?>" >
                    </div>
                    <!-- //跳转 -->
                    <!-- <a href="https://help.siwazywcdn2.com:5278/m3u8.php?url=<?php $v['url'] = str_replace('在线播放$','',$v['url']);  echo $v['url']   ?>" target="blank"> -->
                    <!-- <p class="center"> <img  class="pimage" src="<?php   echo $v['imageurl']?>" alt="Img"></p> -->
                    <div  class="video<?php echo $v['id']?> collect-video-style" style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $v['id']?>)"  class="video_box "></span></div> 

                    <div id="form<?php echo $kss?>" style="display:none">
                        <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                    </div>
                    <p class="center"  onclick="video(<?php echo $kss?>)"><span ><b><?php echo $kss+1 ?>、</b></span>  <?php echo $v['title']?></p>
                    <!-- </a> -->
                    <p class="center">
                        <span onclick="videoup(<?php echo $v['id']?>)" class="btn videoup<?php echo $v['id']?> collect"> <?php echo $v['up']==0?'收藏':'取消'?>  </span>
                        <!-- <span onclick="video(<?php echo $kss?>)" class="btn  collect"> 预览 </span> -->
                        <span onclick="videoList(<?php echo $v['id']?>)" class="btn btn-primary collect"> 重播 </span>
                        <span onclick="Delete(<?php echo $v['id']?>)" class="btn collect"> 删除 </span>
                    </p>
                </td>
            </tr>
            <?php
        }
        ?>
        </tbody>
    </table>
</form>
<input type="hidden" id="videotype" value="<?php echo $data['type'] ?>">
<div class="pagination pagination-left center">
    <?php use yii\widgets\LinkPager;
    echo LinkPager::widget([
        'pagination' => $pageStr,
    ])?>

</div>
<?php if($login>1){?>
<p class=" input-append center">
    <input type="text" value="<?php echo $data['page'] ?>" id="goPage">
    <input class="btn" type="button"  onclick="gou()" value="GO">
</p>
<?php }?>
 
<script>
 
    function  gou(){
        var goPage =$("#goPage").val();
        window.location.href="/cn/video/index?page="+goPage+"&type=<?php echo $data['type'] ?>&title=<?php echo $data['title'] ?>";
    }
    function  videoup(id){
        var videotype =$("#videotype").val();

        $.ajax({
            url: '/cn/video/up', // 跳转到 action 
            data:{
                id: id,
            },
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if(data==1){
                    $('.videoup'+id).html('取消');  
      
                }else{
                    $('.videoup'+id).html('收藏');   
                    if(videotype==10 ){
                        window.location.reload();
                    }
                }
            },
            error: function () {
            }
        });
    }

    
    function  Delete(id){
        $.ajax({
            url: '/cn/video/delete', // 跳转到 action 
            data:{
                id: id,
            },
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if(data.code==1){
                    window.location.reload(); 
                }
            },
        });
    }
 
</script>



 



