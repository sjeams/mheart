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
use app\modules\app\models\UserBiologyNatureDo;
use Codeception\PHPUnit\Constraint\Page;
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
     * 登录--验证  --账号密码
     * app/api-server/login
     * http://localhost/monster/web/app/api-server/register-in
     */
    public function actionRegisterIn(){
        $data = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
        $login =  UserLogin ::find()->select('id')->where( "loginname = '{$data['loginname']}'  "  )->One();
        if($login){
            die(json_encode(['code' => 0,'data'=>['token' =>null],'message' => '账号已存在']));   
        }else{
            $userinfo =  new UserLogin();
            $userinfo->loginname =$data['loginname'];
            $userinfo->password =$data['password'];
            $token = md5($login['id'].'lhzm'.time());
            $userinfo->token = $token;
            $userinfo->save();

            $login =  UserLogin ::find()->select('id,loginname')->where( "token = '{$token}'  ")->asarray()->One();
            die(json_encode(['code' => 1,'data'=>['token' =>$token,'userinfo'=>$login],'message' => '注册成功']));   
        }
    }

    /**
     * token --快捷登录
     * app/api-server/login
     * http://localhost/monster/web/app/api-server/token-login
     */
    public function actionTokenLogin(){

        // $data = json_decode(file_get_contents("php://input"),true); // 接受表单类的  json  数组 序列化
        $data = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
        if(!empty($data)){
            $login =  UserLogin ::find()->select('id,loginname')->where( "token = '{$data['token']}'  ")->asarray()->One();
            if(!empty($login)){ // 验证登录--返回token
                die(json_encode(['code' => 1,'data'=>['token' =>$data['token'],'userinfo'=>$login],'message' => '登录成功']));
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
                $login =  UserLogin ::find()->select('id,loginname')->where( "token = '{$token}'  ")->asarray()->One();
                die(json_encode(['code' => 1,'data'=>['token' =>$token,'userinfo'=>$login],'message' => '登录成功']));   
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
        // var_dump($data);die;
        if(!empty($data['token'])){
            $token=$data['token'];
            $login =  UserLogin ::find()->select('id,server')->where( "token = '$token' "  )->asArray()->One();
            if(!empty($login)){ // 验证登录
                $userinfo =  User::find()->where( "loginid = {$login['id']}  and  server = {$login['server']} ")->asArray()->One();
                $server =  UserServer::find()->select("id,name")->where( "id = {$login['server']} ")->asArray()->One();
                $server['loginid'] =$login['id']; // 定义loginid
                if(!empty($userinfo)){
                    // var_dump($userinfo);die;
                    UserLogin::updateAll(['userid' => $userinfo['userid']],"token='$token'");
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
     * 服务器选择-退出登录
     * app/api-server/user-login
     * http://localhost/monster/web/app/api-server/user-login-out
     */
    public function actionUserLoginOut($token){
        UserLogin::updateAll(['token' =>''],"token='$token'");
        die(json_encode(['code' => 1,null,'message' => 'success']));  
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
        //添加阵法
        $UserBiologyNatureDo =  new UserBiologyNatureDo();
        $UserBiologyNatureDo->userid=$userinfo['userid'];
        $UserBiologyNatureDo ->save();
        die(json_encode(['code' => 1,'data'=>['userinfo' =>$userinfo],'message' => 'succes']));   
    }
    die(json_encode(['code' => 0,'data'=>['userinfo' =>null],'message' => '未登录']));   
    }



    /**
     * 服务器选择
     * app/api-server/user-register
     */
    public function actionUserRegister(){
        $data = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
        // $page=$data['page']?$data['page']:1;
        // $pageSize=$data['pageSize']?$data['pageSize']:6;
        // $server = UserServer::find()->offset(($page-1)*$pageSize)->limit($pageSize)->asarray()->All();
        $server = UserServer::find()->orderBy("id desc")->asarray()->All();
        // var_dump($server);die;
        //  echo  json_encode($server);
       die(json_encode(['code' => 1,'data'=>['server' => $server],'message' => 'succes']));
    }


    /**
     * 
     * 服务器选择
     * app/api-server/user-server
     */
    public function actionUserServer(){
        $data = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
        $id=$data['id'];
        $token = $data['token']?$data['token']:null;
        if($token){
            UserLogin::updateAll(['server' => $id],"token=$token");
        }
        // Content::updateAll(['viewCount' => $data[0]['viewCount']+1],"id={$contentId}");
        UserServer::getServerColor($id);
        $server = UserServer::find()->where("id = $id")->asarray()->one();

        die(json_encode(['code' => 0,'data'=>['server' => $server],'message' => 'succes']));
    }
        /**
     * 
     * 服务器选择
     * app/api-server/user-tips
     */
    public function actionUserTips(){
    $data =array(
        'gonggao_sz'=>'请大家在游戏中发言时，不要带有国家领导人或者侮辱性的词汇。如果官方发现，一律严处。',
        'gonggao_sx'=>'
        人--   最适合修行的形态，领悟极高，每级次战斗有概率突破或者提升境界。幸运+10	幸运，体质，属性较高，适合新人。
        妖--   狡猾而狡诈，大部分技能是辅助控制buff技能，非常适合于后排。触发+6%	控制，概率，buff加成，适合资深玩家。
        鬼--   拥有无尽的魂力，最纯粹的力量，强大的魂力使他们不易死亡。法力值+100	套路，脆弱，搭配较高，适合资深玩家。
        仙--   拥有极高的法术伤害，是大多数高输出的克星。特攻+12%     法术，控制，输出较高，适合普通玩家。
        魔--   偏重物理防守，输出一般，属于肉盾类型，适合用于前排。生命+20%	血厚，坚硬，生存力强，适合新人。
        灵--   天地万物皆有灵，有较高的灵气成长值。有回血，反伤，减伤等技能。	灵气+20%	辅助，肉盾，全能选手，适合普通玩家。
        异--   超脱三界，不在五行的未知生物。拥有极高的抗性，免疫的物理和法术伤害。抗性+8%	 双抗，减伤，防御较高，适合普通玩家。
        兽--   血腥狂暴，拥有极高的爆发。偏物理类型，适合前排或者输出。暴击+5%	     物理，暴力，爆发较高，适合新人。',
        'gonggao_gx'=>'当前版本为最新版本，版本号1.0.1',
        'gonggao_lx'=>'邮箱:359824901@qq.com',


    );

        die(json_encode(['code' => 0,'data'=>$data,'message' => 'succes']));
  
    }

}