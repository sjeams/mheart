<?php
/*
 * @Author: sjeam
 * @Date: 2022-06-13 16:34:53
 * @Description: 
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

class ApiUserController extends ApiControl{
    
    public $enableCsrfValidation = false;
    public $layout = 'cn';
    function init (){
        parent::init();

    }

    /**
     * 协议
     * http://www.mheart.com/app/api-user/xieyi
     */
     public function actionXieyi(){
        // https://ak.hypergryph.com/protocol/children_privacy
        return $this->render('xieyi', []);
    }

    /**
     * 隐私
     *  app/api-user/yinsi
     */
    public function actionYinsi(){
        // https://ak.hypergryph.com/protocol/privacy
        return $this->render('yinsi',[]);
    }


    
    
    

}