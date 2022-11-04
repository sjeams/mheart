<?php
namespace app\modules\cn\controllers;
use app\libs\Method;
use yii;
use app\libs\ApiControl;
use app\modules\cn\models\Video;
use app\modules\cn\models\Jian;
use app\modules\cn\models\VideoList;
use app\modules\cn\models\WechatUser;
use app\modules\cn\models\Query;
use yii\data\Pagination;

class LoginController extends ApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'login';
    public  $user;
    function init (){
        parent::init();
        // var_dump(111);die;
        set_time_limit(0);
        // 登录后自动刷新
        $out = Yii::$app->request->post('out');
        $token = Yii::$app->session->get('token');
        // var_dump($password);die;
        if(!$out){
            WechatUser::headerLocation();
        }
    }
    /**
    * 注册
    * by  sjeam
    * post接口： /cn/login/login-register
    * 参    数：
    */
    public function actionLoginRegister(){
        $this->layout=false;
        $phone = Yii::$app->request->post('phone');
        // $name = Yii::$app->request->post('name');
        $password = Yii::$app->request->post('password');
      
        $preg='/^1[3456789]\d{9}$/';
        if(!preg_match($preg,$phone)){
            die(Method::jsonGenerate(0,[],'手机号格式有误'));
        }
        $res = WechatUser::find()->where("phone =$phone")->one();
        if($res){
            die(Method::jsonGenerate(0,[],'手机号码已存在'));
        }
        // $res = WechatUser::find()->where("name =$name")->one(); 
        // if($res){
        //     die(Method::jsonGenerate(0,[],'用户名已经存在'));
        // }
        //写入账号并且登录
        $data=array(
            'phone'=>$phone,
            // 'name'=>$name,
            'password'=>$password
        );
        $res = Yii::$app->signdb->createCommand()->insert('x2_wechat_user', $data)->execute();
        $userId=Yii::$app->signdb->getLastInsertID();
        if($userId){
            $token =md5($password.time());
            //更新token
            WechatUser::loginMethod($token,$userId);
        }
        die(Method::jsonGenerate(1,[],'succes'));
    }
    //登录
    public function actionLoginIn()
    {
        $this->layout=false;
        $name = Yii::$app->request->post('name');
        $password = Yii::$app->request->post('password');
        if(!$name){
            //管理员
            $name='sjeam';
        }
        $res = WechatUser::find()->where("password ='$password'  and (name ='$name' or phone ='$name') ")->one(); 
        if($res){
            $token =md5($password.time());
            //更新token
            WechatUser::loginMethod($token,$res['id']);
            die(Method::jsonGenerate(1,[],'succes'));
        }else{
            die(Method::jsonGenerate(0,[],'账号密码错误'));
        }
    }
    //退出
    public function actionLoginOut()
    {
        $token = Yii::$app->session->get('token');
        WechatUser::updateAll(['token' => ''],"token='$token'");
        // Yii::$app->session->destroy();
        session_destroy();
        die(Method::jsonGenerate(1,[],'succes'));
    }

    public function actionLogin()
    {
        return $this->render('login');die;
    }
    public function actionRegister()
    {
        return $this->render('register');die;
    }


}
