<?php

/**
 * 全局首页---树形接口
 * Created by PhpStorm.
 * User: sjeam
 */
namespace app\modules\admin\controllers;

use yii;
use app\libs\ApiControl;
use app\libs\Method;
use app\modules\admin\models\AdminInit;
use app\modules\admin\models\Biology;
use app\modules\admin\models\BiologySkill;
use app\modules\admin\models\BiologyState;
use app\modules\admin\models\Words;
use app\modules\admin\models\BiologyBiology;
use app\modules\admin\models\BiologyCharacter;
use app\modules\admin\models\BiologyNature;
use app\modules\admin\models\BiologyCreate;
use app\modules\admin\models\User;
use app\modules\admin\models\UserBiology;
use app\modules\admin\models\GoodsUse;


class ApiController extends ApiControl {

    public $enableCsrfValidation = false;

    public function actionInit(){
      // // 清除缓存
      // $clearInfo=array('clearInfo'=>array(
      //     "clearUrl"=>"/admin/api/clear",  //定义清除接口
      // ));
      // //首页
      // $homeInfo=array('homeInfo'=>array(
      //   "title"=>"首页", 
      //   "icon"=>"fa fa-home", 
      //   "href"=>"/layuimini/page/welcome-1.html?mpi=m-p-i-0", 
      // ));
      // //logo
      // $logoInfo=array('logoInfo'=>array(
      //   "title"=>"LayuiMini", 
      //   "image"=>"/layuimini/images/logo.png", 
      //   "href"=>"/layuimini/page/welcome-1.html?mpi=m-p-i-0", 
      // ));
      //列表
      $menuInfo= AdminInit::getAdminIint();  //后台界面菜单
      // var_dump($menuInfo['menuInfo']['currency']['child'][0]['child']);die;
      // print_r(json_encode($menuInfo['menuInfo']['currency']['child'][0]['child']));die;
      $data= array_merge($clearInfo,$homeInfo,$logoInfo,$menuInfo);
      return json_encode($data);
    }
    //清理缓存
    public function actionClear(){
      $data=array('code'=>1,'msg'=>'服务端清理缓存成功');
      return json_encode($data);
    }
    //菜单列表-首页
    public function actionAdmin(){
      //树状列表
      $data= AdminInit::getAdminMenus();  //后台界面菜单
      $count =count($data);
      return json_encode($data,true);
    }
    //菜单快速修改
    public function actionMeanuUpdate(){
      // header('content-type:application/json ;charset=utf-8;');
      $data=Yii::$app->request->post('data');
      $data= json_decode($data,JSON_UNESCAPED_UNICODE);
      AdminInit::updateMeanAll($data);
      return json_encode(true);
    } 
    //菜单弹窗新增--和修改
    public function actionMeanuAdd(){
    $data = Yii::$app->request->post('data');
    $data= json_decode($data)[0];
    if(!empty($data->id)){ //修改
      $adminInt =  AdminInit::find()->where("id=$data->id")->one();
    }else{ //新增
      $adminInt = new AdminInit();
      unset($data->id);
      !empty($data->pid)? $data->pid :$data->pid=0; //默认为最顶级
    }
      foreach($data as $key=>$v){
        $adminInt->$key =$v;
      }
      $adminInt->createTime=time();
      $res= $adminInt->save();
      return json_encode($res);
    }
    //菜单删除
    public function actionMeanuDelete(){
      $id = Yii::$app->request->post('id');
      $adminInt =  AdminInit::find()->where("pid=$id")->asarray()->one();
      // var_dump($adminInt);die;
      $res =0;
      if(empty($adminInt)){
        $findOne =  AdminInit::find()->where("id=$id")->one();
     
        $res =$findOne->delete();
      }
      // var_dump($res);die;
      return $res;
    }
    //菜单弹出树 -- 和首页列表树
    public function actionMeanuTree(){
      $meanuInfo= AdminInit::getAdminMenusTree();  //后台界面菜单
      // var_dump( $meanuInfo);die;
      return json_encode($meanuInfo);
    }
    //菜单弹出树
    public function actionMeanuFindone(){
      $id =  Yii::$app->request->post('id');
      $meanuInfo=  AdminInit::find()->where("id=$id")->asarray()->One();
      return json_encode($meanuInfo);
    }




    // // 生物管理---数据操作接口
    // // 增-改(批量修改)
    // public function actionBiologyAdd()
    // {
    //   $data = Yii::$app->request->post('data');  
    //   $data = json_decode($data);
    //   // var_dump($data);die;
    //   foreach($data as $v){
    //     if($v->_state=='modified'){ //改
    //       $model = Biology::find()->where("id=$v->id")->One();
    //       $model->name=$v->name;
    //       $model->biology=$v->biology;
    //       $model->state=$v->state;
    //       $model->power=$v->power;
    //       $model->agile=$v->agile;
    //       $model->intelligence=$v->intelligence;
    //       $model->wuXing=$v->wuXing;
    //       $model->skill=$v->skill;
    //       $model->wordId=$v->wordId;
    //       $model->descript=$v->descript;
    //       $model->sex=$v->sex;
    //       $model->yiXing=$v->yiXing;
    //       $model->save();
    //       // $result = Biology::updateAll($v,['id'=>$v->id]);
    //     }else if($v->_state=='added') { // 增
    //       unset($v->key);
    //       unset($v->_id);
    //       unset($v->_uid);
    //       unset($v->_state);
    //       Yii::$app->db->createCommand()->insert('x2_biology',$v)->execute();
    //       // $model = new Biology();
    //     } 
    //   }
    //   echo true;
    // }
    // // 删
    // public function actionBiologyDelete()
    // {
    //   $data = json_decode(Yii::$app->request->post('data'));
    //   foreach($data as $v){
    //     // var_dump($v);die;
    //     if(isset($v->id)){
    //       //删除主键
    //       Biology::deleteAll(['id'=>$v->id]);
    //     }
    //   }
    //   echo true;
    // }
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


    // 生物技能
    public function actionApiSkill()
    {
      // $pageIndex=Yii::$app->request->post('pageIndex',1);
      // $pageSize=Yii::$app->request->post('pageSize',20);
      $sortField=Yii::$app->request->post('sortField');
      $sortOrder=Yii::$app->request->post('sortOrder');
      $key=Yii::$app->request->post('key');
      $where="1=1 ";
      if(!empty($key)){  $where.=" and name like '%$key%' or words like'%$key%'"; }
      if($sortField){ // 排序
        $where.="order by $sortField $sortOrder";
      }
      $data= BiologySkill::getSkillList($where);
      return json_encode($data);
    }



   //  生物境界弹窗
   public function actionBiologyStateall()
   {  
      $data= BiologyState:: getValueList();
      return json_encode($data);
   }
    //  世界详情列表
    public function actionWordslist()
    {  
        $data= Words:: getValueList();
        return json_encode($data);
    }
    //  世界详情弹窗
    public function actionWordsall()
    {  
        $pageIndex=Yii::$app->request->post('pageIndex',1);
        $pageSize=Yii::$app->request->post('pageSize',20);
        $sortField=Yii::$app->request->post('sortField');
        $sortOrder=Yii::$app->request->post('sortOrder');
        $key=Yii::$app->request->post('key');
        $where="1=1 ";
        if(!empty($key)){  $where.=" and name like '%$key%' or typeName like'%$key%'"; }
        if($sortField){ // 排序
          $where.="order by $sortField $sortOrder";
        }else{$where.="";}
        $data= Words:: getValueListtype($pageIndex,$pageSize,$where);
        return json_encode($data);
    }
      //  种族详情弹窗
    public function actionBiologyall()
    {  
        $data= BiologyBiology:: getValueList(); 
        return json_encode($data);
    }
     //  性格详情弹窗
     public function actionBiologyCharacterall()
     {  
        $data= BiologyCharacter:: getValueList(); 
        return json_encode($data);
     }

    // 生物管理---生物生成属性
    public function actionBiologyExtend()
    {
      $data= BiologyNature:: getValueList(); 
      return json_encode($data);
    }

    
    

    // 取消操作 境界
    public function actionStateFalse(){
      $createid = intval(Yii::$app->request->post('createid'));
      $create = BiologyCreate::find()->where(['id'=>$createid])->one(); //获取name等于test的模型
      $usercreate = UserBiology::find()->where(['createid'=>$createid])->one(); //获取name等于test的模型
      $create->state =$usercreate->state;
      $create->save();   //保存

    }

  // 境界提升--获得属性点 --修改基础属性
    public function actionStateChange(){
      $createid = intval(Yii::$app->request->post('createid'));
      $state = intval(Yii::$app->request->post('state'));
      $power = intval(Yii::$app->request->post('power'));
      $agile = intval(Yii::$app->request->post('agile'));
      $intelligence = intval(Yii::$app->request->post('intelligence'));
      //修改创造的生物境界
      $res = BiologyState:: updateState($createid,$state,$power,$agile,$intelligence);

      // //修改创造的生物境界
      // $create = BiologyCreate::find()->where(['id'=>$createid])->one(); //获取name等于test的模型
      // $createstate =$create->state; //获取境界
      // $create->state = $state; 
      // $create->save();   //保存
      // // var_dump($createstate);
      // // var_dump($state);die;
      // $newsum = BiologyState::getStateValue($state);   //新境界属性--累加
      // $oldsum = BiologyState::getStateValue($createstate); //当前境界属性
      // $statenum = $newsum-$oldsum;  // 当前相差属性，可能为负数
      // // var_dump($statenum);die;
      // $res['power'] = $statenum +$power;
      // $res['agile'] = $statenum +$agile;
      // $res['intelligence'] = $statenum +$intelligence;
  

      // var_dump($res);die;
      return json_encode($res);
    }









    // 经验修改与升级--获得属性点 --修改基础属性
    public function actionExperience(){
       $param =Yii::$app->request->post();
       $createid = Yii::$app->request->post('createid');
       $create = BiologyCreate::find()->where("id=$createid")->One();
       $res = BiologyCreate::getExperience($param,$create);
      // $createid = Yii::$app->request->post('createid');
      // $power = Yii::$app->request->post('power');
      // $agile = Yii::$app->request->post('agile');
      // $intelligence = Yii::$app->request->post('intelligence');
      // $exp = Yii::$app->request->post('experience');
      // $grade = Yii::$app->request->post('grade');
      // $maxNature = Yii::$app->request->post('maxNature');
      // $wuXing = Yii::$app->request->post('wuXing');
      // $reiki = Yii::$app->request->post('reiki');
      // // $grade=1;
      // // $exp=160;
      // // ，每级叠加经验150
      // // var_dump($exp);die;
      // $sum=0;
      // for($i=1;$i<=200;$i++) {  // 最多200级
      //     $sum+= $i*150; 
      //     if($sum>=$exp){
      //       $res['newGrade'] =$i;   // 当前等级
      //       $res['newExp'] = $i*150; // 当前晋级总共需要经验
      //       $res['nowExp']= $sum-$exp; // 晋级需要经验
      //       $res['lessExp']=$res['newExp']- $res['nowExp']; //晋级当前经验
      //       $res['percent']= round($res['lessExp']/$res['newExp']*100,2); //经验百分比
      //       // $res['maxNature'] = ($i - $grade)*$wuXing+$maxNature; // 获得自由属性点
      //       $res['maxNature'] = ($i - $grade)*10+$maxNature; // 获得自由属性点
      //       if($res['lessExp']==$res['newExp']&&$i<200){  // 刚好满级
      //         $i=$i+1; //等级+1
      //         $res['newGrade'] =$i;   // 当前等级
      //         $res['newExp'] = $i*150; // 当前晋级总共需要经验
      //         $res['nowExp'] = $i*150; //晋级当前经验
      //         $res['lessExp']=$res['newExp']- $res['nowExp']; //晋级当前经验
      //         $res['percent'] =0;   //经验百分比
      //         // $res['maxNature'] = ($i - $grade)*$wuXing+$maxNature; // 获得自由属性点
      //         $res['maxNature'] = ($i - $grade)*10+$maxNature; // 获得自由属性点
      //       }
      //       // 白值属性计算
      //       $create = BiologyCreate::find()->where("id=$createid")->One();
      //       // var_dump($create);die;
      //       $res['power'] = ($i - $grade)*$create->power +$power;
      //       $res['agile'] =($i - $grade)*$create->agile +$agile;
      //       $res['intelligence'] =($i - $grade)*$create->intelligence +$intelligence;
      //       $res['reiki'] =  intval( ($create->reiki*($i - $grade) + ($i - $grade)*( $create->power + $create->agile + $create->intelligence))*0.1)+$reiki;//灵气
      //       break;
      //     }
      // }

      // echo "等级 : ".$res['newGrade'];
      // echo "<br>";
      // echo "exp : ".$res['nowExp']."/".$res['newExp'];
      // echo $res;
      // var_dump($res);die;
      return json_encode($res);

    }

    // 属性刷新--固定
    // admin/api/biology-change
    public function actionBiolobyChange(){
      $biology = Yii::$app->request->post('biology');
      $biology = User::biolobyChange($biology);
      return json_encode($biology);
    }



    // 随机生物 -- 白值属性
    // admin/api/biology-rand
    public function actionBiologyRand(){
      $userid  = Yii::$app->session->get('userid');
      if(empty($userid)){ $userid =1 ;}
      $wordId = Yii::$app->request->post('wordId');
      $totalrand = Method ::totalRand();
      $biology['userid']= $userid; 
      $biology['name']= '未知生物';  //名称
      $biology['biology']= 1;  //种族
      $biology['state']= 1;  //境界
      $biology['sex']= 1;  //性别
      $biology['yiXing']= 0;
      $biology['grade']= 1;
      $biology['wordId']= $wordId;
      $biology['reiki']= rand(5,30);
      $biology['lucky']= rand(5,30);  // 幸运每个境界 概率-2   12个境界 最低为1
      $biology['wuXing']= rand(5,20);  //悟性
      $biology['power']= $totalrand['max'][0];
      $biology['agile']= $totalrand['max'][1];
      $biology['intelligence']= $totalrand['max'][2];
      $biology['minPower']= $totalrand['min'][0];
      $biology['minAgile']= $totalrand['min'][1];
      $biology['minIntelligence']= $totalrand['min'][2];
      //查询所属 世界的技能
      $rand =rand(0,5);
      if($rand==0){
        $skill = '';
      }else{
        $skill =BiologySkill::find()->select("id")->asArray()->where("wordId = $wordId")->orderBy('RAND()')->offset(0)->limit($rand-1)->all();
        $skill = implode(',',array_column($skill, 'id'));
      }
      $newnum= !empty($skill) ? count(explode(',',$skill)) : 0; // 技能个数
      $biology['skill'] = $skill;
      $biology['score'] =  $newnum*10 + $biology['power']+  $biology['agile']+ $biology['intelligence'] ;  //属性最大值为80/10 ,评分满值为340
      // $biology['state'] = rand(1,3);  //境界 --暂不开放 --后期为用户境界-1
      // 固定 属性刷新
      $biology = User::biolobyChange($biology);
      Yii::$app->db->createCommand()->insert('x2_biology',$biology)->execute();
      $createid=Yii::$app->db->getLastInsertID(); // 获取创造id
      // var_dump($createid);die;
      $biology = Biology :: find()->where("id =$createid")->asarray()->One();
      // var_dump( $biology);die;
      return json_encode($biology);
    }


    // 刷新生物固定属性
    public function actionBrushBiology(){

      $biology = Yii::$app->request->post();

      $skill  = $biology['skill'];
      $newnum = !empty($skill) ? count(explode(',',$skill)) : 0; // 技能个数
      // 基本评分 参考 生成生物 不随属性改变
      // $biology['score'] =  $newnum*10 + $biology['power']+  $biology['agile']+ $biology['intelligence'] ;  //属性最大值为80/10 ,评分满值为340
      $biology = User::biolobyChange($biology);
      // $biology['scoreGrade'] = User :: getValueList($score);// 根据评分修改品质--不定义品质
      return json_encode($biology);
    }
 




    //  物品的所有类型
    public function actionGoodsUse()
    {  
        // 查询 type = 1武器 2 丹药 3道具  4生物
        $data= GoodsUse:: getValueList(); 
        return json_encode($data);
    }


}