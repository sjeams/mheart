
<style>
  #fudong{
    margin: 150px 100px;
    /* margin: 50%  20%; */
    /* position:absolute; */
  /* top: 0; */
 
  }
  #fudong span{
        width: 200px;
      display: inline-block;
      text-align: center;
  }
  .xinyong{
    /* line-height: 80px; */
    font-size: 20px;
    color: red;
  }
  #last{
    line-height: 80px;
    font-size: 60px;
  }

</style>
<div>


</div>

 
<link rel="stylesheet" href="/sign/loading/loading.css">
<script type="text/javascript" src="/sign/loading/loading.js"></script>

<div id="fudong">
<span class="xinyong">
    您的信用评为<?php echo $res['num'] ?>
</span>
<span id="last">30</span>

<span>请稍等，数据正在审核中...</span>

</div>  
<!-- <button type="button" class="layui-btn layui-btn-fluid colrstyle"  onclick="submit()">二次审核</button> -->
<script language="javascript">  

　　window.onload = function(){
    function jump(count) {      
          window.setTimeout(function(){      
              count--;      
              if(count > 0) {      
                //   $('#last').attr('innerHTML', count);    
                  $('#last').text(count);       
                  jump(count);      
              } else {      
                  location.href='/cn/sign/result';   
              }      
          }, 1000);      
      }      
      jump(30);   
　　}

</script>  