<?php
/**
 * 物品管理
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
use app\modules\admin\models\UserWords;
use app\modules\admin\models\UserBiology;
use app\modules\admin\models\GoodsUse;
use app\modules\admin\models\GoodsStore;
use app\libs\Method;


class GoodsController extends ApiControl {

    public $enableCsrfValidation = false;

    public $layout = 'not';

    //生物创造页面
    public function actionIndex()
    {
       return $this->render("goods");
      // return  $this->renderPartial("AdminMeanu");
    }

    //生物创造页面
    public function actionGoodsStore()
    {
        return $this->render("goodsStore");
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
      $data= GoodsUse::getBiologyList($pageIndex,$pageSize,$where);
      return json_encode($data);
    }

    // 生物管理---数据操作接口
    // 增-改(批量修改)
    public function actionAdd()
    {
      $model = new GoodsUse();
      $model->save();
    }



    // 生物管理---数据操作接口
    // 增-改(批量修改)
    public function actionBiologyAdd()
    {
      $data = Yii::$app->request->post('data');  
      $data = json_decode($data);
        foreach($data as $v){
          if($v->_state=='modified'){ //改
            $model = GoodsUse::find()->where("id=$v->id")->One();
            $model->name=$v->name;
            $model->describe=$v->describe;
            $model->value=$v->value;
            $model->type=$v->type;
            $model->fenjie=$v->fenjie;
            $model->save();
          }else if($v->_state=='added') { // 增
            unset($v->key);
            unset($v->_id);
            unset($v->_uid);
            unset($v->_state);
            $v['name']='新增';
            Yii::$app->db->createCommand()->insert('x2_goods_use',$v)->execute();
            $createid=Yii::$app->db->getLastInsertID(); // 获取创造id
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
          $biology =  GoodsUse::find()->where(['id'=>$v->id])->One();
          //删除主键
          GoodsUse::deleteAll(['id'=>$biology->id]);
        }
      }
      echo true;
    }
    //改(单个修改)
    public function actionBiologyUpdateone()
    {
      $id = Yii::$app->request->get('id');  
      $data = GoodsUse::find()->where("id=$id")->asarray()->One();
      return json_encode($data);
    }


    // 弹窗修改(单个修改)
    public function actionBiologyUpdate()
    {
      $data = Yii::$app->request->post('data');  
      $data = json_decode($data);
      foreach($data as $v){
        $result = GoodsUse::updateAll((array)$v,['id'=>$v->id]);
      }
      echo true;
    }


}