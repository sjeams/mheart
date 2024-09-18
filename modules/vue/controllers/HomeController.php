<?php
/*
 * @Author: sjeam
 * @Date: 2023-04-07 10:41:17
 * @Description: 
 */
/**
 * 首页
 * User: sjeam
 */
namespace app\modules\vue\controllers;
use app\libs\Method;
use yii;
use app\libs\ApiControl;
 
 
class HomeController extends ApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'vue_layouts';
    // public  $passwordav='111av'; //av
    // public  $passwordsp=111; //视频
    public  $graden=0; //av
    public  $user;
    public  $http_type;
    function init (){
        // parent::init();
        set_time_limit(0);
    }
    /**
     * 基本信息
     * by  sjeam
     * http://cs.aheart.com/cn/video/reload
     */
    public function actionIndex()
    {
        $total =11;
        $belong =4;
        $page = Yii::$app->request->get('page');
        if(!$page){
            $page=$total;
        }else{
            $page = $page-1;
        }
        if($page<=0){
            echo 'ok,采集完成!!';die;
        }
        return $this->render('index',[ 'page'=>$page,'belong'=>$belong]);
    }

 
}
