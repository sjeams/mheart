<style>
    .use_button_height{
		cursor: pointer;
        /* line-height: 45px; */
        height:60px;
     	float: left;
    }
</style>
<!-- content_header 的结尾div 别删了 --html 自动补全了-->
</div>
<!-- //底部高度占位，防遮挡 -->
<p class="use_button_height" style="visibility: hidden;">  </p>
<?php 
//请求路径
$http_geturl = explode('/', explode('?',$_SERVER["REQUEST_URI"])[0])[2];
$http_index = explode('/', explode('?',$_SERVER["REQUEST_URI"])[0])[3];
// var_dump($http_geturl );die;
?>
<?php  if( $http_geturl=='chat'){ ?>
    <?php  if( $http_index=='chat'){ ?>
        <div class="video_footer center"> 
        <table class="table table-bordered chat_footer " >
            <tr>
                <td class="btn-primary" ><input type="text" id="msg" name="value"  class="message-send-input" /> </td>
                <td class="btn-primary" style="max-width: 100px!important;"  id="sendBtn" onclick="sendBtn()"><input class="message-send-button btn-primary" type="button" value="发送"> </td>
            </tr>
        </table>
        </div>
    <?php } else if( $http_index=='list'){ ?> 
        <table class="table table-bordered chat_footer " >
            <tr>
            <td class="btn-primary  friend_input" >
                <input type="text" id="friend_title" name="value"  class="message-send-input" />     
         
            </td>
                <td class="btn-primary friend_search" style="max-width: 100px!important;" >
                    <span class="btn  " onclick="gou_search()" ><i class="bi bi-search"></i> </span>  
                    <!-- <span class="btn  "><i class="bi bi-plus-circle"></i> </span> -->
                   <a href="/cn/chat/list"><span class="btn  "> <i class="bi bi-person-lines-fill"></i></span></a> 
                </td>
            </tr>

           
        </table>

    <?php } ?> 
<?php }else{  ?> 
        
        <?php  if( $http_index=='video'){ ?>
                
        <?php  }else{ ?>
    <!-- <input type="hidden" value="0" id="top_hidden"> -->
    <div class="video_footer center page_bottom" style="display: none;"> 
        <table class="table table-bordered  tablestyle " >
            <!-- <tr class="append_top">
                <input name="title" class="search_input" id="appendedInputButton"   type="text" value="<?php //cho $data['title']?>"/>
                <button class="btn btn-primary search_button" onclick="nextPage()" type="sbumit">GO</button>
            </tr> -->
            <tr class="append_top">
                <td class="btn-primary"  ><a href="javascript:void(0);" class=" " onclick="scllTop()" title="回到顶端">返回顶部↑</a></td> 
                <!-- <td class="btn-primary go_hidden  hiddened" ><input type="text" value="1"   class="footer_go_input" /><span  class="footer_go">GO(232323)</span></td> -->
                <td class="btn-primary  video_old"  onclick="videoHidden()" style="display: <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['video_model']==1?'table-cell':'none';?>;" > 
                    <span>  video</span>
                </td>
                    <!-- <td class="btn-primary" ><a href="#top" class=" " title="回到顶端">Top</a></td>
                    <td class="btn-primary" onclick="videoHidden(0)">video</td> -->
            </tr>
        </table>
    </div>
    <!-- 禁用监听 -->
    <input type="hidden" value="1" id="getPage">
    <?php } ?> 

<?php } ?> 
<script>
$(function(){
    scllTop()
})
function scllTop(){
    $(window).scrollTop(0)
}
</script>