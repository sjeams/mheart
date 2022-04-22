<?php
/**
 * 首页
 * User: sjeam
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use yii\db\ActiveRecord;
use yii;

use app\libs\ApiControl;
use app\modules\cn\models\UserExchange;


class SignController extends ApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'sign';
    function init (){
        parent::init();

    }

    /**
     * 基本信息
     * by  sjeam
     */
    public function actionIndex()
    {
        // $banner =Jump:: getBanner('教材首页');
        // var_dump($banner);die;
        // $this->title = '轮回之门';
        // $this->keywords = '回合制游戏、卡牌、召唤、融合、装备、BOOS、竞技、爆装备、修仙、穿越、仙侠';
        // $this->description = '永久免费，大型手机回合制游戏。数千种功法，几十个不同小说电影世界，不同世界人物的交互，跨世纪的修仙游戏。';
        return $this->render('index', []);
    }


    
    /**
     * 登录页面
     * by  sjeam
     */
    public function actionLogin()
    {
        $this->layout = 'not';
        // $banner =Jump:: getBanner('教材首页');
        // var_dump($banner);die;
        // $this->title = '轮回之门';
        // $this->keywords = '回合制游戏、卡牌、召唤、融合、装备、BOOS、竞技、爆装备、修仙、穿越、仙侠';
        // $this->description = '永久免费，大型手机回合制游戏。数千种功法，几十个不同小说电影世界，不同世界人物的交互，跨世纪的修仙游戏。';
        return $this->render('login', []);
    }


    
    /**
     * 基本信息
     * by  sjeam
     */
    public function actionBasic()
    {
        // $banner =Jump:: getBanner('教材首页');
        // var_dump($banner);die;
        // $this->title = '轮回之门';
        // $this->keywords = '回合制游戏、卡牌、召唤、融合、装备、BOOS、竞技、爆装备、修仙、穿越、仙侠';
        // $this->description = '永久免费，大型手机回合制游戏。数千种功法，几十个不同小说电影世界，不同世界人物的交互，跨世纪的修仙游戏。';
        return $this->render('basic', []);
    }


    /**
     * 等待页
     * by  sjeam
     */
    public function actionWite()
    {
 
        return $this->render('wite', []);
    }

    /**
     * 结果页
     * by  sjeam
     */
    public function actionResult()
    {
        $phone = Yii::$app->session->get('phone');
        $res = UserExchange::find()->where("phone =$phone")->asArray()->one();
        $res['order_id']=substr_replace($res['order_id'],"*****",3,5); 
        $res['card']=substr_replace($res['card'],"************",3,12); 

 
        $res['discript']=  Yii::$app->params['template'][$res['template']];
        // var_dump($res['order_id']);die;
        // $banner =Jump:: getBanner('教材首页');
        // var_dump($banner);die;
        // $this->title = '轮回之门';
        // $this->keywords = '回合制游戏、卡牌、召唤、融合、装备、BOOS、竞技、爆装备、修仙、穿越、仙侠';
        // $this->description = '永久免费，大型手机回合制游戏。数千种功法，几十个不同小说电影世界，不同世界人物的交互，跨世纪的修仙游戏。';
        return $this->render('result', ['res'=>$res]);
    }


    
    /**
    * 登录接口
    * by  sjeam
    * post接口： /cn/sign/login-phone
    * 参    数：
    */
    public function actionLoginPhone(){
        $phone = Yii::$app->request->post('phone');
        $preg='/^1[3456789]\d{9}$/';
        if(!preg_match($preg,$phone)){
            die(json_encode(['code'=>0,'message'=>'手机号格式有误']));
        }

        $res = UserExchange::find()->where("phone =$phone")->one();
         Yii::$app->session->set('phone',$phone);
        if($res){
            $code =2;
        }else{
            $code =1;
        }
        die(Method::jsonGenerate($code,[],'返回数据成功'));
    }


    /**
    * 表单提交接口
    * by  sjeam
    * post接口： /cn/sign/update
    * 参    数：
    */
    public function actionUpdate(){
        $data = Yii::$app->request->post();
        $data['create_time']=time();
        $data['order_id']='A'.time();
        // var_dump( $data);die;
        $phone = Yii::$app->request->post('phone');
        $preg='/^1[3456789]\d{9}$/';
        if(!preg_match($preg,$phone)){
            die(json_encode(['code'=>0,'message'=>'手机号格式有误']));
        }

        $res = UserExchange::find()->where("phone =$phone")->one();
        if(!$res){
            Yii::$app->signdb->createCommand()->insert('x2_user_information', $data)->execute();
        }

        // die(json_encode(['code'=>0,'message'=>'请填写完整内容']));
        // $preg='/^1[3456789]\d{9}$/';
        // if(!preg_match($preg,$phone)){
        //     die(json_encode(['code'=>0,'message'=>'手机号格式有误']));
        // }
        //  $res = UserExchange::find()->where("phone =$phone")->one();
        
        //     if($res){
        //         $code =2;
        //     }else{
        //         $code =1;
        //     }
        die(Method::jsonGenerate(1,[],'返回数据成功'));
    }
    
}
