<?php
/*
 * @Author: sjeam
 * @Date: 2022-06-13 16:34:53
 * @Description: 
 */
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/29
 * Time: 13:48
 */
namespace app\modules\app\controllers;

use app\libs\Method;
use app\libs\Pager;
use app\libs\ApiControl;


// use app\modules\cn\models\Login;

use Yii;
use UploadFile;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type,x-requested-with,Authorization, x-ui-request,lang');
header('Access-Control-Allow-Credentials: true;');

header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');

class ApiController extends ApiControl{
    
     function init(){
        // Yii::$app->session->set('uid',30186);
        // Yii::$app->session->set('userId',40888);
        parent::init();
        //  include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
    }
    public $enableCsrfValidation = false;

    /**
     * 资源调用中心--图片转发
     * app/api/file-content
     */
     public function actionFileContent(){
        $request = Yii::$app->request->get('url');
        $arrContextOptions=array(
            "ssl"=>array(
                "verify_peer"=>false,
                "verify_peer_name"=>false,
            ),
        );
        //路径错误监听，预设事件
        set_error_handler(function($errno, $errstr) {
            // var_dump($errstr);
            $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
            $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/video/list';
            $request = $href.'/app_resources/defult.png';
            $arrContextOptions=array(
                "ssl"=>array(
                    "verify_peer"=>false,
                    "verify_peer_name"=>false,
                ),
            );
            echo file_get_contents($request,false,stream_context_create($arrContextOptions));
        });
        // $response = file_get_contents('https://invalid-certificate.com');
        // if(file_get_contents($request,false,stream_context_create($arrContextOptions)) === false)
        // {
        //     // echo '读取失败';
        //     // 判断http还是https
        //     $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
        //     $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/video/list';
        //     $request = $href.'/app_resources/defult.png';
        //     // echo file_get_contents($request);
        // }
        echo file_get_contents($request,false,stream_context_create($arrContextOptions));
    }

    public function actionFilejSON(){
        $request = Yii::$app->request->get('url');
        $arrContextOptions=array(
            "ssl"=>array(
                "verify_peer"=>false,
                "verify_peer_name"=>false,
            ),
        );
        //路径错误监听，预设事件
        set_error_handler(function($errno, $errstr) {
            // var_dump($errstr);
            $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
            $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/video/list';
            $request = $href.'/app_resources/defult.png';
            $arrContextOptions=array(
                "ssl"=>array(
                    "verify_peer"=>false,
                    "verify_peer_name"=>false,
                ),
            );
            $data= file_get_contents($request,false,stream_context_create($arrContextOptions));
            echo  json_decode($data);
        });
        // $response = file_get_contents('https://invalid-certificate.com');
        // if(file_get_contents($request,false,stream_context_create($arrContextOptions)) === false)
        // {
        //     // echo '读取失败';
        //     // 判断http还是https
        //     $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
        //     $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/video/list';
        //     $request = $href.'/app_resources/defult.png';
        //     // echo file_get_contents($request);
        // }
        $data= file_get_contents($request,false,stream_context_create($arrContextOptions));
       
        echo  json_decode($data);
    }
}