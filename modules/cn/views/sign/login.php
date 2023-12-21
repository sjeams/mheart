 

 <style>
     .topone{
        margin-top:-100px; 
     }
     .top{
        margin: -160px 24px;
     }
     .phone{
        
         margin: 40px 0px;
         display: inline-block;
     }
     .ponestyle{
         /* line-height: 20px; */
        font-size: 20px;;
        color: #122a88;
    }
    .colrstyle{
        background-color: #122a88;
  
    }
    .tishi{
        display: inline;
    
        font-size: 16px;;
        line-height: 24px;
        color: red;
    }
 </style>
<!-- <span> </span> -->

<img src="/sign/image/jinbi.png" alt="" class="topone">
<img src="/sign/image/5c75943ce8deb.png" alt="" class="top">



<div class="phone">
<!-- <span class="ponestyle">手机号 </span> -->
</div>
<span class="tishi"></span>
<input type="text" name="" id="phone" placeholder="手机号" >  

<button type="button" class="layui-btn layui-btn-fluid colrstyle"  onclick="submit()">查看额度</button>
 
<input type="hidden" name="" id="foolw" value="<?php echo $fllow ?>" placeholder="面签id" >  


 <script>

     function submit(){
        var phone = $('#phone').val();
        var fllow = $('#foolw').val();
        $.ajax({
            url: "/cn/sign/login-phone",
            type: "post",
            data: {
                phone: phone,
            },
            dataType: "json",
            success: function (data) {
                if (data.code == 1) {
                    // 填写页
                    if(fllow){
                        window.location.href = '/cn/sign/basic?fllow='+fllow;
                    }else{
                        window.location.href = '/cn/sign/basic';
                    }

             
         
                }else if (data.code == 2) {
                    //结果页
                    window.location.href = '/cn/sign/result';
                } else {
                    $(".tishi").text(data.message);
                }
            }
        });

    
     }
 

 </script>

 
 
 

