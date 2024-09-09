<?php 
//请求路径
$http_geturl = explode('/', explode('?',$_SERVER["REQUEST_URI"])[0])[2];
$userlogin = Yii::$app->session->get('userlogin');
?>
<?php  if( $http_geturl=='login'||( $http_geturl=='video'&&$userlogin['id']==1)){ ?>
<style>
    .beian{    
        /* position: fixed; */
        /* display: flex;
        margin:  auto;
        left:0; 
        right:0; 
        bottom: 0; */
    }
</style>

<div class="center beian">
    <p> Copyright © 2022-现在 心缘测试</p>
    <p> <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" rel="external nofollow">
        蜀ICP备2022010153号-1
    </a></p>
</div>
<?php } ?>