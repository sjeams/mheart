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


class GoodsStoreController extends ApiControl {

    public $enableCsrfValidation = false;

    public $layout = 'not';

    //生物创造页面
    public function actionIndex()
    {

      // 查询 type = 1武器 2 丹药 3道具  4生物
      $gooduse= GoodsUse:: getValueList(); 
      // var_dump( $gooduse);die;
       return $this->render("goodsStore",['gooduse'=>$gooduse]);
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
      // var_dump(Yii::$app->request->post());die;
      $pageIndex=Yii::$app->request->post('pageIndex',1);
      $pageSize=Yii::$app->request->post('pageSize',20);
      $sortField=Yii::$app->request->post('sortField');
      $sortOrder=Yii::$app->request->post('sortOrder');
      $key=Yii::$app->request->post('key');
      $type=Yii::$app->request->post('type');
      $gooduse=Yii::$app->request->post('gooduse');
      $where="1=1 ";
      if(!empty($type)){  $where.=" and type =$type "; }
      if(!empty($key)){  $where.=" and name like '%$key%' "; }
      if(!empty($gooduse)){  $where.=" and gooduse =$gooduse "; }
      if($sortField){ // 排序
        $where.="order by $sortField $sortOrder";
      }else{$where.="order by id desc";}
      $data= GoodsStore::getBiologyList($pageIndex,$pageSize,$where);
      return json_encode($data);
    }

    // 生物管理---数据操作接口
    // 增-改(批量修改)
    public function actionAdd()
    {
      $model = new GoodsStore();
      $model->save();
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
            $model = GoodsStore::find()->where("id=$v->id")->One();
            $model->name=$v->name;
            $model->descript=$v->descript;
            $model->value=$v->value;
            $model->type=$v->type;
            $model->sellout=$v->sellout;
            $model->price=$v->price;
            $model->selltype=$v->selltype;
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
          $biology =  GoodsStore::find()->where(['id'=>$v->id])->One();
          //删除主键
          GoodsStore::deleteAll(['id'=>$biology->id]);
        }
      }
      echo true;
    }
    //改(单个修改)
    public function actionBiologyUpdateone()
    {
      $id = Yii::$app->request->get('id');  
      $data = GoodsStore::find()->where("id=$id")->asarray()->One();
      // $data =(new \yii\db\Query())->select('qa.*,q.name as wordName')
      // ->from('x2_goods_store AS qa')
      // ->leftJoin('x2_words AS q','qa.wordid=q.Id')
      // ->where("qa.id=$id ")->asarray()->One();

      return json_encode($data);
    }


    // 弹窗修改(单个修改)
    public function actionBiologyUpdate()
    {
      $data = Yii::$app->request->post('data');  
      $data = json_decode($data);
      foreach($data as $v){
        $result = GoodsStore::updateAll((array)$v,['id'=>$v->id]);
      }
      echo true;
    }


}