<?php
// 世界
namespace app\modules\app\models;
use yii\db\ActiveRecord;

class UserServer extends ActiveRecord
{
    public static function tableName(){
        return '{{%user_server}}';
    }

    // /**
    //  * 查询境界列表
    //  */
    // public static function getValueList(){
    //   $data = Words::find()->select('*,id as key,name as text')->asarray()->All();
    //   return $data;
    // }

    // /**
    //  * 查询境界列表
    //  */
    //  public static function getValueListtype($page=1,$pageSize=20,$where=""){
    //     $data['data'] = Words::find()->select("*,typeName as words,")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
    //     $data ['total'] = Words::find()->select("id")->asarray()->count();
    //     return $data;
    //   }
}
