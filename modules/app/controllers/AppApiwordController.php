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
        $this->param = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
        $this->param['wordId']=1;
    }
    public $enableCsrfValidation = false;
    /**
     * 世界
     * app/app-api/biology-list
     * http://cs.aheart.com/app/app-apiword/index
     */
    public function actionIndex(){
        $data['wordId'] = $this->UserWords->getUserWord();//返回正在经行的世界
        $data['words'] = $this->Words->getWordRand(3);//返回随机三个世界
        die(Method::jsonApp(1,$data,'succes'));
    }
    /**
     * 进入世界
     * app/app-api/biology-list
     * http://cs.aheart.com/app/app-apiword/in-word
     */
    public function actionInWord(){
        $this->UserWords->inUserWord($this->param['wordId'],$this->param['star']);//进入世界
        die(Method::jsonApp(1,null,'succes'));
    }
    /**
     * 世界地图
     * app/app-api/biology-list
     * http://cs.aheart.com/app/app-apiword/word
     */
    public function actionWord(){
        $data['wordId'] = $this->UserWords->getUserWord();//返回正在经行的世界
        $data['biology'] =$this->UserWords->getUserWord();//地图生成随机生物
        die(Method::jsonApp(1,$data,'succes'));
    }
}