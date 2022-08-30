<?php
/*
 * @Author: sjeam
 * @Date: 2022-06-13 16:34:53
 * @Description:  微信聊天室接口
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

class WechatApiController extends ApiControl{
    public  $appid;    
    public  $secret; 
    function init(){
        // Yii::$app->session->set('uid',30186);
        // Yii::$app->session->set('userId',40888);
        parent::init();
        //  include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
        $this->appid ='wxf54aab84c2d7e384';
        $this->secret='8c5925f3332a36ca67037d5806b10aa5';

    }
    public $enableCsrfValidation = false;

    /**
     * openId
     * wechat-app/app/wechat-code
     */
     public function actionWechatCode(){
     
        $code = Yii::$app->request->get('code');
        $encryptedData = Yii::$app->request->get('encryptedData');
        $iv = Yii::$app->request->get('iv');
        $appid = $this->appid; //小程序appid
		$secret = $this->secret; //小程序密钥
		$url = "https://api.weixin.qq.com/sns/jscode2session?appid=" . $appid . "&secret=" . $secret . "&js_code=" . $code . "&grant_type=authorization_code";
		$res = Method::wechatHttpRequest($url);
		$res = json_decode($res, true); //这里返回了openid  session_key
        // value($res);die;
        $res = Method::wechatDecryptData($encryptedData, $iv,$res->sessionKey);
        die(json_encode(['code' => 1,'data'=>$res,'message' => '登录成功']));   
    }
    /**
     * 用户信息返回
     * wechat-app/app/wechat-info
     */
    public function actionWechatInfo(){
        

        //  $sessionKey = Yii::$app->request->get('sessionKey');
        // $res = Method::wechatDecryptData($encryptedData, $iv,$sessionKey);
        // die(json_encode(['code' => 1,'data'=>$res,'message' => 'succes']));   
    }
}