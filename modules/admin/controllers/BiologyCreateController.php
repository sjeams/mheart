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
use app\modules\admin\models\UserWords;
use app\modules\admin\models\UserBiology;
use app\modules\admin\models\User;
use app\modules\admin\models\UserBiologyAttribute;
use app\libs\Method;


class BiologyCreateController extends ApiControl {

    public $enableCsrfValidation = false;

    public $layout = 'not';

    //生物创造页面
    public function actionIndex()
    {
       return $this->render("biologyCreate");
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
      $data= BiologyCreate::getBiologyList($pageIndex,$pageSize,$where);
      return json_encode($data);
    }



    // 生物管理---数据操作接口
    // 增-改(批量修改)
    public function actionBiologyAdd()
    {
      $data = Yii::$app->request->post('data');  
      $data = json_decode($data);
      foreach($data as $v){
        if($v->_state=='modified'){ //改
          
          //修改用户生物境界
          $usermodel = UserBiology::find()->where("createid=$v->id")->One();
          $res = BiologyState:: updateState($usermodel->createid,$v->state,$usermodel->power,$usermodel->agile,$usermodel->intelligence);
          $usermodel->state=$v->state;
          $usermodel->power=$res['power'];
          $usermodel->agile=$res['agile'];
          $usermodel->intelligence=$res['intelligence'];
          $usermodel->save();

          $model = BiologyCreate::find()->where("id=$v->id")->One();
          $model->name=$v->name;
          $model->biology=$v->biology;
          $model->state=$v->state;
          $model->power=$v->power;
          $model->agile=$v->agile;
          $model->intelligence=$v->intelligence;
          $model->wuXing=$v->wuXing;
          $model->skill=$v->skill;
          $model->wordid=$v->wordid;
          $model->descript=$v->descript;
          $model->sex=$v->sex;
          $model->yiXing=$v->yiXing;
          $model->type=$v->type;
          $model->save();
          // $result = Biology::updateAll($v,['id'=>$v->id]);
        }else if($v->_state=='added') { // 增
          unset($v->key);
          unset($v->_id);
          unset($v->_uid);
          unset($v->_state);
          Yii::$app->db->createCommand()->insert('x2_biology_create',$v)->execute();
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
          $biology =  BiologyCreate::find()->where(['id'=>$v->id])->One();
          //删除主键
          BiologyCreate::deleteAll(['id'=>$biology->id]);
          //删除主键
          UserBiology::deleteAll(['createid'=>$biology->id]);
          //删除主键
          UserBiologyAttribute::deleteAll(['createid'=>$biology->id]);
        }
      }
      echo true;
    }
    //改(单个修改)
    public function actionBiologyUpdateone()
    {
      $id = Yii::$app->request->get('id');  
      $data = BiologyCreate::find()->where("id=$id")->asarray()->One();
      return json_encode($data);
    }


    // 弹窗修改(单个修改)
    public function actionBiologyUpdate()
    {
      $data = Yii::$app->request->post('data');  
      $data = json_decode($data);
      foreach($data as $v){
        $result = BiologyCreate::updateAll((array)$v,['id'=>$v->id]);
      }
      echo true;
    }


    // 随机生物--征服世界id --默认为1
    // admin/biology-create/biology-rand
    public function actionBiologyRand()
    {
      $userid =Yii::$app->request->post('userid',1);
      $type = Yii::$app->request->post('type',1); // 创造类型    1普通 2特殊 3NPC 4不可用
      // 用户 随机获取一个生物（默认管理员--权限为已通世界）
      $biology = UserWords :: BiologyRand($type)[0]; //默认管理员-数量1 --返回数组
      if(!empty($biology)){
        //随机生物属性处理
        // $biology = UserWords ::BiologyExtendRand($biology);
        // $scoreGrade = User :: getValueList($biology['score']);// 根据评分修改品质
        // $biology['scoreGrade']  =$scoreGrade;
        // Yii::$app->db->createCommand()->insert('x2_biology_create',$biology)->execute();//创造生物
        // $biology['createid']=Yii::$app->db->getLastInsertID(); // 获取创造id

        // //  修改境界--属性
        // // $biologystate = BiologyState::randState($userid); // 取出随机的境界
        // $biologystate=1;  //创造生物默认境界为1 凡人 不做任何属性计算

        // $res = BiologyState:: updateState($biology['createid'],$biologystate,$biology['power'],$biology['agile'],$biology['intelligence']);
        // $biology['power']= $res['power'];
        // $biology['agile']= $res['agile'];
        // $biology['intelligence']= $res['intelligence'];
        // $biology['state']= $biologystate;
        // $biology['scoreGrade']  =$scoreGrade;
        // // 固定 属性刷新
        // $biology = User::biolobyChange($biology);
        // Yii::$app->db->createCommand()->insert('x2_user_biology',$biology)->execute(); //添加到用户
        $UserBiology =new UserBiology();
        $UserBiology->getBiologyRandAttribute($biology);
        // $biology['power']= $res['power'];
        // $biology['agile']= $res['agile'];
        // $biology['intelligencestate']= $res['intelligence'];
        // // // 固定 属性刷新
        // $biology = User::biolobyChange($biology);
        // $biology['scoreGrade']  =$scoreGrade;
        
                //  $result = UserBiology::updateAll($res,['id'=>$userbiologyid]);
        // var_dump($biology);die;
  



      }

      // var_dump($biology);die;
      // return json_encode($biology);
      // $biology =  User :: BiologyTrainRand($biology);
      // var_dump($biology);die;
    }

   // 刷新属性
    // admin/biology-create/biology-brush
    public function actionBiologyBrush()
    {
      // $data = BiologyCreate::find()->where("id=$id")->asarray()->One();
      // $biology =  User :: BiologyTrainRand($biology);
      // var_dump($biology);die;

    }



}