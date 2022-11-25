<form     >
    <table class="table table-bordered  tablestyle"  >
    <thead>
        <?php if($login>0){?>
        <tr>
            <td >
                <div class="input_div center" style="display: block;">
                    <input name="title" class="search_input" id="appendedInputButton"   type="text" value="<?php echo $data['title']?>"/>
                    <button class="btn btn-primary search_button" onclick="collect_search()" type="sbumit">搜索</button>
                </div>
                <p class="center">
                    <a class="btn <?php echo $data['belong']==0?'active btn-primary':' btn-default'?>" href="/cn/video/collect-video?page=1&belong=0&title=<?php echo $data['title']?>" >全部</a>
                    <?php foreach($list as $v){ ?>
                        <a class="btn  <?php echo $data['belong']==$v['belong']?'active btn-primary':' btn-default'?>" href="/cn/video/collect-video?page=1&belong=<?php echo $v['belong']?>&title=<?php echo $data['title']?>" ><?php echo $v['name']?></a>
                        <?php }?>

                </p>

            </td>
                <!-- <button class="btn btn-primary" type="submit">搜索</button> -->
        </tr>
        <?php }?>
        </thead>
        <tbody id="content_append">
        <?php
        foreach($content as $kss => $v) {
            if($kss == 10){
                break;
            }
            ?>
            <div id="form<?php echo $kss?>">
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
                    <!-- <a href="https://help.siwazywcdn2.com:5278/m3u8.php?url=<?php $v['url'] = str_replace('在线播放$','',$v['url']);  echo $v['url']   ?>" target="blank"> -->
                    <p class="center"> 
                        <!-- <img  class="pimage" src="<?php   echo $v['imageurl']?>" alt="Img"> -->
                        <div class="video<?php echo $v['id']?>" style="width:100%; height:240px;position:relative"></div>
                        <script>
                            var videoObject = {
                                container: '.video<?php echo $v['id']?>', //“#”代表容器的ID，“.”或“”代表容器的class
                                plug:'hls.js',//设置使用hls插件
                                autoplay:false,
                                // logo:'<?php echo $v['imageurl']?>',
                                poster:'<?php echo $v['imageurl']?>',//封面图片
                                video: '<?php echo $v['url']?>',//视频地址
                                title:'黑神化 悟空-国产3A大作',//视频标题
                                rightBar:true,
                                screenshot:true,
                                smallWindows:true,
                                playbackrateOpen:true,
                                webFull:true,
                                theatre:true,
                                //小窗风格
                                // controls:true,
                                // language:'en',
                                // rotate:90,//旋转90度
                            };
                            new ckplayer(videoObject);//初始化播放器
                        </script>
                    </p>

                    <div id="form<?php echo $kss?>" style="display:none">
                        <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                    </div>
                    <p class="center"  onclick="video(<?php echo $kss?>)"><span ><b>Page<?php echo $data['page'] ?>、</b></span>  <?php echo $v['title']?></p>
                    <!-- </a> -->
                    <p class="center">
                        <span onclick="video(<?php echo $kss?>)" class="btn  collect"> 预览 </span>
                        <span onclick="Update_my(<?php echo $kss?>)" class="btn collect my_collect_<?php echo $kss?> btn-danger"> 移除</span>
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
<!-- <div class="pagination pagination-left center">
    <?php use yii\widgets\LinkPager;
    echo LinkPager::widget([
        'pagination' => $pageStr,
    ])?>
</div> -->
<input type="hidden" value="<?php echo $data['page'] ?>" id="goPage">
<input type="hidden" id="goPageCount" value="<?php echo $data['count'] ?>">
<script>
    function collect_search(goPage){
       var title =  $('#appendedInputButton').val();
       var url="/cn/video/collect-video?page="+goPage+"&belong=<?php echo $data['belong'] ?>&title="+title+"&html=1";
       var html = getprintHtml(url);
        if(html!=''){
            $("#goPage").val(goPage);
            $('#content_append').append(html);
        }
    }
    function  gou(){
        var goPage =$("#goPage").val();
        collect_search(goPage);
        // window.location.href="/cn/video/collect-video?page="+goPage+"&belong=<?php echo $data['belong'] ?>&title=<?php echo $data['title'] ?>";
    }
     // 我的收藏
     function  Update_my(id){ 
        // $(".collect_id"+id).addClass('btn-success');
        var video_id =$("#form"+id+"  input[name=video_id]").val();
        var title =$("#form"+id+"  input[name=title]").val();
        $.ajax({
            url: '/cn/video/myupdate', // 跳转到 action 
            type: 'post',
            data:{video_id:video_id,title:title},
            dataType: 'json',
            success: function (data) {
                if(data.code==1){
                    $(".my_collect_"+id).removeClass('btn-defult');
                    $(".my_collect_"+id).addClass('btn-success');
                    window.location.reload();
                }else{
                    $(".my_collect_"+id).removeClass('btn-success');
                    $(".my_collect_"+id).addClass('btn-defult');
                    window.location.reload();
                }
            },
        });
    } 

    $(window).scroll(function() {
        //监听事件内容
        // console.log(getScrollHeight()) 
        // console.log(getWindowHeight() + getDocumentTop()) 
        var goPageCount = $("#goPageCount").val()
        
        if (getScrollHeight() <= getWindowHeight() + getDocumentTop()+10) {
            //当滚动条到底时,这里是触发内容
            //异步请求数据,局部刷新dom
            // console.log($("#goPage").val())
            var goPage = Number($("#goPage").val()) + Number(1)   
            if(goPage<=goPageCount){
                collect_search(goPage);
            }
            // console.log(goPage)
        }
    });
// $(function(){   
//     var winHeight = $(document).scrollTop();
//     $(window).scroll(function() {
//         var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
//         console.log(scrollY+'cc');
//         console.log(winHeight+'pp');
        
//         if (scrollY > 200){ //如果滚动距离大于550px则隐藏，否则删除隐藏类
//             $('.top-title').addClass('hiddened');
//         } 
//         else {
//             $('.top-title').removeClass('hiddened');
//         }
 
//         if (scrollY > winHeight){ //如果没滚动到顶部，删除显示类，否则添加显示类
//             $('.top-title').removeClass('showed');
//         } 
//         else {
//             $('.top-title').addClass('showed');
//         }               
 
//      });
// });
</script>



 



