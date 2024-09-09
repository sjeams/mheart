<?php
/**
 * 全局首页
 * Created by PhpStorm.
 * User: sjeam
 */
namespace app\modules\admin\controllers;

use yii;
use app\libs\ApiControl;
class AdminController extends ApiControl {

    public $enableCsrfValidation = false;

    public $layout = 'not';

    public function actionIndex()
    {
       return $this->render("index");
    }

    public function actionAdminMeanu()
    {
       return $this->render("AdminMeanu");
    }

   //  修改页面
    public function actionAdminUpdate()
    {
       return $this->render("AdminUpdate");
    }
   //  添加页面
    public function actionMeanuAdd()
    {
       return $this->render("meanuAdd");
    }

   

}