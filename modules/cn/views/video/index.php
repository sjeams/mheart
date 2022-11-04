 <!-- 视频 -->
<div class="  ">
    <input type="hidden" name="" id="hiddenvalue" value="0">
    <!-- <button style="position:fixed;z-index:101;width:30%;;margin:  20px 16%; float:right" onclick="videoHidden()">video</button> -->
    <div style="height:300px;position:relative"  class="videohidden">
        <div class="video" style="position:fixed;z-index:100;width:100%;height:38%; margin: auto -20px; "> </div>
    </div>
</div>
<script type="text/javascript">
//定义一个变量：videoObject，用来做为视频初始化配置
var videoObject = {
    container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
    plug:'hls.js',//设置使用hls插件
    autoplay:true,
    video: ''//视频地址
};
new ckplayer(videoObject);//初始化播放器
// 视频预览
function  video(id){
    var url =$("#form"+id+"  input[name=url]").val();
    // console.log(url);
    // var url ='https://wolongzywcdn2.com:65/20220417/nJ0C6TnT/index.m3u8';
    var videoObject = {
            container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
            plug:'hls.js',//设置使用hls插件
            autoplay:true,
            video: url,//视频地址
            // rotate:90,//旋转90度
        };
        new ckplayer(videoObject);//初始化播放器

}
</script>
<div class="container">
    <!-- <ul class="breadcrumb">
        <li><a class="btn btn-default" href="/cn/video/list">采集</a>  </li>
        <li class="active btn btn-primary">内容</li>
    </ul> -->
    <form action="/cn/video/index" method="get"  >
        <table class="table table-bordered  tablestyle"  >
        <thead>
            <?php if($login>1){?>
            <tr>
                <td >
                    <div class="input-append center" style="display: block;">
                        <input name="title" class="span2" id="appendedInputButton"   type="text" value="<?php echo $data['title']?>"/>
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
                            <span onclick="video(<?php echo $kss?>)" class="btn  "> 预览 </span>
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
</div>

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
            // dataType: 'json',
            success: function (data) {
                console.log(data)
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
            // dataType: 'json',
            success: function (data) {
                window.location.reload();
          
            },
        });
    }
 
</script>



 



