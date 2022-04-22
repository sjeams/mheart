

<div>
您的信用评分低于80分

</div>

<span id="last">30</span>请稍等，数据正在审核中...</div>  
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