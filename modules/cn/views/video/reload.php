<?php echo '正在采集第'.$page.'页，请稍等...</br>'?>
<button id="btn"></button>s后自动跳转
<script>
$(function(){
    
    // 120 秒后跳转
    btn.innerHTML =120 ;
    var time = setInterval(function() {
        btn.innerHTML = parseFloat(btn.innerHTML) - 1 
        if (btn.innerHTML == 0) {
            // clearInterval(time);
            // alert(111);
            window.location.href='/cn/video/reload?page=<?php echo $page?>&belong=<?php echo $belong?>';
        }
    }, 1000);
    // 请求成功跳转
    $.ajax({
        url : '/cn/video/updateurl',
        type : 'post',
        data: { page:<?php echo $page?>,belong: <?php echo $belong?> },
        success : function (data) {
            window.location.href='/cn/video/reload?page=<?php echo $page?>&belong=<?php echo $belong?>';
        }
    });
})

</script>
