<?php
/**
 * 生物管理
 * Created by PhpStorm.
 * User: sjeam
 */
namespace app\modules\admin\controllers;

use yii;
use app\libs\ApiControl;
use app\modules\admin\models\Biology;
use app\modules\admin\models\BiologySkill;
use app\modules\admin\models\BiologyState;
use app\modules\admin\models\Words;
use app\modules\admin\models\BiologyBiology;
use app\modules\admin\models\BiologyCharacter;
use app\modules\admin\models\BiologyNature;
use app\modules\admin\models\BiologyCreate;
use app\libs\Method;




class BiologyController extends ApiControl {

    public $enableCsrfValidation = false;

    public $layout = 'not';

  //   //列表页
  //   public function actionAdminMeanu()
  //   {
  //      return $this->render("AdminMeanu");
  //   }

  //  //  修改页面
  //   public function actionAdminUpdate()
  //   {
  //      return $this->render("AdminUpdate");
  //   }
  //  //  添加页面
  //   public function actionMeanuAdd()
  //   {
  //      return $this->render("meanuAdd");
  //   }
   
    // 生物模板页面
    public function actionIndex()
    {
       return $this->render("biologyIndex");
      // return  $this->renderPartial("AdminMeanu");
    }


    //  生物详情弹窗
   public function actionEmployeeWindow()
   {  
      return $this->render("EmployeeWindow");
   }
    // 数据加载--->
    // 生物列表
    public function actionApiIndex()
    {
      $pageIndex=Yii::$app->request->post('pageIndex',1);
      $pageSize=Yii::$app->request->post('pageSize',20);
      $sortField=Yii::$app->request->post('sortField');
      $sortOrder=Yii::$app->request->post('sortOrder');
      $key=Yii::$app->request->post('key');
      $type=Yii::$app->request->post('type');
      $where="1=1 ";
      if(!empty($type)){  $where.=" and type =$type "; }
      if(!empty($key)){  $where.=" and name like '%$key%' "; }
      if($sortField){ // 排序
        $where.="order by $sortField $sortOrder";
      }else{$where.="order by id desc";}
      $data= Biology::getBiologyList($pageIndex,$pageSize,$where);
      return json_encode($data);
    }
    //生物创造页面
    public function actionCreate()
    {
       return $this->render("biologyCreate");
      // return  $this->renderPartial("AdminMeanu");
    }
    // 数据加载--->
    // 生物创造
    public function actionApiCreate()
    {
      $pageIndex=Yii::$app->request->post('pageIndex',1);
      $pageSize=Yii::$app->request->post('pageSize',20);
      $sortField=Yii::$app->request->post('sortField');
      $sortOrder=Yii::$app->request->post('sortOrder');
      $key=Yii::$app->request->post('key');
      $type=Yii::$app->request->post('type');
      $where="1=1 ";
      if(!empty($type)){  $where.=" and type =$type "; }
      if(!empty($key)){  $where.=" and name like '%$key%' "; }
      if($sortField){ // 排序
        $where.="order by $sortField $sortOrder";
      }else{$where.="";}
      $data= BiologyCreate::getBiologyList($pageIndex,$pageSize,$where);
      return json_encode($data);
    }



    // 生物管理---数据操作接口
    // 增-改(批量修改)
    public function actionBiologyAdd()
    {
      $data = Yii::$app->request->post('data');  
      $data = json_decode($data);
      // var_dump($data);die;
      foreach($data as $v){
        if($v->_state=='modified'){ //改
          $model = Biology::find()->where("id=$v->id")->One();
          $model->name=$v->name;
          $model->biology=$v->biology;
          $model->state=$v->state;
          $model->power=$v->power;
          $model->agile=$v->agile;
          $model->intelligence=$v->intelligence;
          $model->wuXing=$v->wuXing;
          $model->skill=$v->skill;
          $model->wordId=$v->wordId;
          $model->descript=$v->descript;
          $model->sex=$v->sex;
          $model->yiXing=$v->yiXing;
          $model->save();
          // $result = Biology::updateAll($v,['id'=>$v->id]);
        }else if($v->_state=='added') { // 增
          unset($v->key);
          unset($v->_id);
          unset($v->_uid);
          unset($v->_state);
          Yii::$app->db->createCommand()->insert('x2_biology',$v)->execute();
          // $model = new Biology();
        } 
      }
      echo true;
    }
    // 删
    public function actionBiologyDelete()
    {
      $data = json_decode(Yii::$app->request->post('data'));
      foreach($data as $v){
        // var_dump($v);die;
        if(isset($v->id)){
          //删除主键
          Biology::deleteAll(['id'=>$v->id]);
        }
      }
      echo true;
    }
    //改(单个修改)
    public function actionBiologyUpdateone()
    {
      $id = Yii::$app->request->get('id');  
      $data = Biology::find()->where("id=$id")->asarray()->One();
      return json_encode($data);
    }


    // 弹窗修改(单个修改)
    public function actionBiologyUpdate()
    {
      $data = Yii::$app->request->post('data');  
      $data = json_decode($data);
      foreach($data as $v){
        $result = Biology::updateAll((array)$v,['id'=>$v->id]);
      }
      echo true;
    }








}