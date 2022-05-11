<?php
// 用户生物
namespace app\modules\admin\models;
use yii\db\ActiveRecord;

class UserBiology extends ActiveRecord
{
    public static function tableName(){
        return '{{%user_biology}}';
    }
    
    // /**
    //  * 查询种族列表
    //  */
    // public static function getValueList(){
    //   $data = UserBiology::find()->select('id,name as text')->asarray()->All();
    //   return $data;
    // }
    /**
     * 查询用户生物列表
     */
     public static function getBiologyList($page=1,$pageSize=20,$where=""){
        $data['data'] = UserBiology::find()->select("*,name as key")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
        $data ['total'] = UserBiology::find()->select("id")->where(" $where")->asarray()->count();
      return $data;
    }


    public static function unpdateAll($id){
        $userbiology = UserBiology::find()->where("id=$id")->asarray()->One();
        $userbiology = User::biolobyChange($userbiology);
        unset($userbiology['id']);
        UserBiology::updateAll($userbiology,['id'=>$id]);
        return UserBiology::find()->where("id=$id")->asarray()->One();
    }

}
