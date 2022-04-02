<?php
/**
 * 全局首页--大首页
 * Created by PhpStorm.
 * User: sjeam
 */
namespace app\modules\admin\controllers;

use yii;
use app\libs\ApiControl;
use app\libs\Method;
class IndexController extends ApiControl {

    public $enableCsrfValidation = false;
    public function actionIndex()
    {
        // $session  = Yii::$app->session;
        // $userId = $session->get("adminId");
        // if(!$userId){
        //     $this->redirect("/user/login/index");
        // }
       return $this->render("index");
    }






}