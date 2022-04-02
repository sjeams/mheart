<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/29
 * Time: 13:48
 */
namespace app\modules\app\controllers;

use app\libs\Method;
// use app\libs\Pager;
use app\libs\ApiControl;


use app\modules\app\models\UserServer;
use app\modules\app\models\User;
use app\modules\app\models\UserLogin;

use Yii;
use UploadFile;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type,x-requested-with,Authorization, x-ui-request,lang');
header('Access-Control-Allow-Credentials: true;');

header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');


class ApiServerController extends ApiControl{
    
     function init(){
        // Yii::$app->session->set('uid',30186);
        // Yii::$app->session->set('userId',40888);
        // parent::init();
        //  include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
        // $userlogin = Yii::$app->session->get('userlogin');
    }
    public $enableCsrfValidation = false;


    /**
     * token --快捷登录
     * app/api-server/login
     * http://localhost/monster/web/app/api-server/token-login
     */
     public function actionTokenLogin(){

        // $data = json_decode(file_get_contents("php://input"),true); // 接受表单类的  json  数组 序列化
        $data = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
        if(!empty($data)){
            $login =  UserLogin ::find()->select('id')->where( "token = '{$data['token']}'  "  )->One();
            if(!empty($login)){ // 验证登录--返回token
                die(json_encode(['code' => 1,'data'=>['token' =>$token],'message' => '登录成功']));
            } 
        }
        die(json_encode(['code' => 0,'data'=>['token' =>null],'message' => '未登录']));   
    }


    /**
     * 登录--验证  --账号密码
     * app/api-server/login
     * http://localhost/monster/web/app/api-server/login
     */
     public function actionLogin(){

        // $data = json_decode(file_get_contents("php://input"),true); // 接受表单类的  json  数组 序列化
        $data = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
        if(!empty($data)){
            $login =  UserLogin ::find()->select('id')->where( "loginname = '{$data['loginname']}'  and  password = '{$data['password']}' "  )->One();
            if(!empty($login)){ // 验证登录--返回token
                // 29e1513810699c26b4ef39ebd79d4257
                $token = md5($login['id'].'lhzm'.time());
                $login->token = $token;
                $login->save();
                die(json_encode(['code' => 1,'data'=>['token' =>$token],'message' => '登录成功']));
            } 
        }
        die(json_encode(['code' => 0,'data'=>['token' =>null],'message' => '未登录']));   
    }



    /**
     * 服务器选择-登录
     * app/api-server/user-login
     * http://localhost/monster/web/app/api-server/user-login
     */
     public function actionUserLogin(){
        // $data = json_decode(file_get_contents("php://input"),true); // 接受表单类的  json  数组 序列化
        $data = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
        if(!empty($data)){
            $login =  UserLogin ::find()->select('id')->where( "loginname = '{$data['loginname']}'  and  password = '{$data['password']}' "  )->asArray()->One();
            if(!empty($login)){ // 验证登录
                $userinfo =  User::find()->where( "loginid = {$login['id']}  and  server = {$data['serverid']} ")->asArray()->One();
                $server =  UserServer::find()->select("id,name")->where( "id = {$data['serverid']} ")->asArray()->One();
                $server['loginid'] =$login['id']; // 定义loginid
                if(!empty($userinfo)){
                    // var_dump($userinfo);die;
                    die(json_encode(['code' => 1,'data'=>['userinfo' =>$userinfo,'server'=>$server],'message' => '登录成功'])); 
                    // 登录状态储存操作
                }else{
                    die(json_encode(['code' => 2,'data'=>['userinfo' =>null,'server'=>$server],'message' => '未创建角色'])); 
                    // 登录状态储存操作
                }

            } 
        }
        die(json_encode(['code' => 0,'data'=>['userinfo' =>null],'message' => '未登录']));   
    }
    /**
     * 创建角色
     * app/api-server/user-login
     * http://localhost/monster/web/app/api-server/user-role
     */
     public function actionUserRole(){
        $data = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
        if(!empty($data)){
            $userinfo =  new User();
            $userinfo->loginid =$data['loginid'];
            $userinfo->server =$data['server'];
            $userinfo->name =$data['name'];
            $userinfo->servername =$data['servername'];
            $userinfo->save();
            $id = $userinfo->attributes['userid'];
            $userinfo =  User::find()->where( "userid =$id")->asArray()->One();
            die(json_encode(['code' => 1,'data'=>['userinfo' =>$userinfo],'message' => 'succes']));   
        }
        die(json_encode(['code' => 0,'data'=>['userinfo' =>null],'message' => '未登录']));   
     }

    /**
     * 服务器选择
     * app/api-server/user-register
     */
     public function actionUserRegister(){
 
        $server = UserServer::find()->asarray()->All();
        // var_dump($server);die;
        //  echo  json_encode($server);
       die(json_encode(['code' => 1,'data'=>['server' => $server],'message' => 'succes']));
    }



    /**
     * 服务器选择
     * app/api-server/user-server
     */
     public function actionUserServer(){
        $server = UserServer::find()->asarray()->All();
        // var_dump($server);die;
        //  echo  json_encode($server);
       die(json_encode(['code' => 1,'data'=>['server' => $server],'message' => 'succes']));
    }
    

}