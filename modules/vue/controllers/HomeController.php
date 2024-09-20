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
use app\libs\VideoApiControl;

use app\modules\cn\models\Category;
use app\modules\cn\models\CategoryName;
use app\modules\cn\models\VideoList;
use app\modules\cn\models\VideoListDetail;
use app\modules\cn\models\VideoListCollect;

 
class HomeController extends VideoApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'vue_layouts';
    // public  $passwordav='111av'; //av
    // public  $passwordsp=111; //视频
    public  $graden=0; //av
    public  $user;
    public  $http_type;
    function init (){
        parent::init();
        // var_dump(111);die;
        set_time_limit(0);
        $this->user = Yii::$app->session->get('userlogin');
        $this->graden= intval($this->user['graden']); // 0未登录
        // 判断http还是https
        $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
        $this->http_type=  $http_type;
        if(!$this->user){
            $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/login/login';
            header('Location: '.$href);die;
        }
    }
    /**
     * 基本信息
     * by  sjeam
     * http://cs.aheart.com/cn/video/reload
     */
    public function actionIndex()
    {
        if(!$this->user){
            return $this->render('login');die;
        }
        return $this->render('index');
    }
    /**
     * 第三方列表
     * by  sjeam
     */
    public function actionGetList()
    {
        if(!$this->user){
            die(Method::jsonGenerate(0,[],'未登录！'));
        }
        // 登录状态
        $graden = $this->graden;
        $page = Yii::$app->request->post('page',1);
        $page_list = Yii::$app->request->post('page_list',1);
        $type = Yii::$app->request->post('type',0);
        $search = Yii::$app->request->post('search','');
        // 搜索类型默认为0
        $belong = Yii::$app->request->post('belong',1);
        // 未登录 禁止链接访问
        if($graden==0){
            $belong=0;
            //默认关键词
            $key_words = VideoList::getKeyWords($belong);
            if($search=='undefined'||$search==null||empty($search)||$search=="")$search=$key_words;
        }
        $type = Category::getType($belong,$type);  //获取默认type
        //获取列表
        $sessionStr =VideoList::Md5sessionKey($belong,$page,$page_list,$type,$search);
        $category_id = Category::getCategoryId($belong,$type);
        $res = VideoList::getVideoList($sessionStr,$belong,$type,$page,$search,$page_list,$graden,$this->user['id'],1,$category_id);  //get_cache 浏览时，必定开启缓存
        if($res['content']){
            die(Method::jsonGenerate(1,$res,'successs'));   
        }else{
            die(Method::jsonGenerate(0,$res,'faild'));   
        }

    }
 
}
