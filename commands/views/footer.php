<style>
	.video_footer{
        z-index: 100;
        /* margin: auto  0px ; */
		/* border: 1px solid black; */
        height:40px;
        width: 100%;
        position: fixed;
        margin:0px  auto;
        left:0; 
        right:0; 
        /* top:0;  */
        bottom:0;
        display: inline-block;
	}
    .video_footer td{
        background-color: white;
        /* border: 1px solid #0044cc; */
        text-align: center ;
        width: 50%;
    }
    .video_footer td a{
        color: white;
        width: 100%;
        margin: auto;
        display: inline-block;
    }
</style>
</div>
<div class="video_footer center"> 
    <table class="table table-bordered  tablestyle">
        <tr class="append_top">
            <!-- <div class="center top"><a href="#top" class="btn" title="回到顶端">回到顶部</a></div> -->
            <?php  if( explode('?',$_SERVER["REQUEST_URI"])[0]=='/cn/video/collect-video'){ ?>
                <td class="btn-primary" ><a href="#top" class=" " title="回到顶端">Top</a></td>
            <?php }else{ ?>  
                <td class="btn-primary" ><a href="#top" class=" " title="回到顶端">Top</a></td>
                <td class="btn-primary" onclick="videoHidden(0)">video</td>
            <?php }  ?>  
        </tr>
    </table>
</div>
 
