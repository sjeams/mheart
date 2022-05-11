<?php
// 境界
namespace app\modules\admin\models;
use yii\db\ActiveRecord;
use app\modules\admin\models\BiologyCreate;
use app\modules\admin\models\UserBiology;
use app\libs\Method;
class BiologyState extends ActiveRecord
{
    public static function tableName(){
        return '{{%biology_state}}';
    }

    /**
     * 查询境界列表
     */
    public static function getValueList(){
      $data = BiologyState::find()->select('id,name as text')->asarray()->All();
      return $data;
    }

    /**
     * 境界属性差计算
     */
     public static function getStateValue($state){
        $biologyState = BiologyState::find()->select('value')->asarray()->all();
        $sum=0;
        foreach($biologyState as $key=> $v){ // 计算当前应加属性
            $sum+= intval($v['value']); 
            if($key== $state-1){
              break;
            }
        }
        return $sum;
    }
    /**
     *  修改创造的生物境界
     */
     public static function updateState($createid,$state,$power,$agile,$intelligence){
     
      $create = BiologyCreate::find()->where(['id'=>$createid])->one(); //获取name等于test的模型
      $createstate =$create->state; //获取境界
      $create->state = $state; 
      $create->save();   //保存
      // var_dump($createstate);
      // var_dump($state);die;
      $newsum = BiologyState::getStateValue($state);   //新境界属性--累加
      $oldsum = BiologyState::getStateValue($createstate); //当前境界属性
      $statenum = $newsum-$oldsum;  // 当前相差属性，可能为负数
      // var_dump($statenum);die;
      $res['power'] = $statenum +$power;
      $res['agile'] = $statenum +$agile;
      $res['intelligence'] = $statenum +$intelligence;
      return $res;
     }

    //  随机境界
     public static function randState($userid){
        
        $user = User::find()->where("userid=$userid")->One();
        $state =$user->state;
        for($i=1;$i<=$state;$i++){
          // var_dump($i);
            // $proArr[$i]=intval(($state+1)*10-($i*10));
            $proArr[$i]=intval(($state-$i)*ceil(($state-$i)/1)*10*ceil(($state-$i)/2))  ;
        }
        // var_dump($proArr);
        // $proArr=array('传说'=>1,'SSS'=>10,'SS'=>50,'S'=>100,'A'=>200,'B'=>500,'C'=>1000);//定义物品等级
        $state = Method::getRandGrade($proArr);
        // var_dump($state);die;
        return $state;
    }



}
