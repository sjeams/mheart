<?php
/*
 * @Author: sjeam
 * @Date: 2022-06-13 16:34:53
 * @Description:  app 接口---模型窗口
 */
namespace app\modules\app\controllers;

use app\libs\Method;
use app\libs\Pager;
use app\libs\ApiUserControl;
use Yii;
use UploadFile;


use app\modules\app\models\User;
use app\modules\app\models\UserBiology;
use app\modules\app\models\UserBiologyAttribute;
use app\modules\app\models\UserBiologyNatureDo;
use app\modules\app\models\UserBiologySkill;
use app\modules\app\models\UserLogin;
use app\modules\app\models\Words;
use app\modules\app\models\UserWords;
use app\modules\app\models\UserServer;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type,x-requested-with,Authorization, x-ui-request,lang');
header('Access-Control-Allow-Credentials: true;');

header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');

class AppApiwordController extends ApiUserControl{
    public $param; 
    public $user_info; 
    public $userid; 
    public $UserBiology; 
    public $UserBiologyAttribute; 
    public $UserBiologyNatureDo; 
    public $UserBiologySkill; 
    public $UserLogin; 
    public $Words; 
    public $UserWords; 
    public $UserServer; 
    public $user_in_word;//正在进行的世界
    function init(){
        parent::init();
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
        //  include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
        $this->UserBiology=new UserBiology();
        $this->UserBiologyAttribute=new UserBiologyAttribute();
        $this->UserBiologyNatureDo=new UserBiologyNatureDo();
        $this->UserBiologySkill=new UserBiologySkill();
        $this->UserLogin=new UserLogin();
        $this->Words=new Words();
        $this->UserWords=new UserWords();
        $this->UserServer=new UserServer();
        $this->user_in_word =  $this->UserWords->getUserWord();//返回正在经行的世界
        $this->param = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
        // $this->param['wordid']=1;
    }
    public $enableCsrfValidation = false;
    /**
     * 世界大厅
     * app/app-api/biology-list
     * http://cs.aheart.com/app/app-apiword/index
     */
    public function actionIndex(){
        $data =  $this->user_in_word;//返回正在经行的世界
        // var_dump($data['user_in_word_map']);die;
        die(Method::jsonApp(1,$data,'succes'));
    }

    /**
     * 刷新世界
     * app/app-api/biology-list
     * http://cs.aheart.com/app/app-apiword/rand-word
     */
    public function actionRandWord(){
        $data = $this->Words->getWordRand(3);//返回随机三个世界
        die(Method::jsonApp(1,$data,'succes'));
    }

    
    /**
     * 进入世界
     * app/app-api/biology-list
     * http://cs.aheart.com/app/app-apiword/in-word
     */
    public function actionInWord(){
        $this->UserWords->inUserWord($this->param['wordid'],$this->param['star']);//进入世界
        die(Method::jsonApp(1,null,'succes'));
    }

    /**
     * 退出世界
     * app/app-api/biology-list
     * http://cs.aheart.com/app/app-apiword/out-word
     */
    public function actionOutWord(){
        $this->UserWords->outUserWord();//退出世界
        die(Method::jsonApp(1,null,'succes'));
    }

    /**
     * 刷新地图--    世界时间：聊斋1年      时间流速： 1年/刷新    选择：3/次(只能做3次选择)
     * app/app-api/biology-list
     * http://cs.aheart.com/app/app-apiword/map-word
     */
    public function actionMapWord(){
        $UserWords=new UserWords();
        $UserWords->getUserSence();//地图生成随机场景(生物*物品)3-10个
        $do_biology = $UserWords->getMapValueListSystem();
        die(Method::jsonApp(1,$do_biology,'succes'));
    }

    

}