<?php
// 境界
namespace app\modules\admin\models;
use yii\db\ActiveRecord;

class UserHandbook extends ActiveRecord
{
    public static function tableName(){
        return '{{%user_handbook}}';
    }

    /**
     * 查询境界列表
     */
    public static function findHandbook($biologyid,$userid){
      $data = UserHandbook::find()->select('id')->asarray()->where("biologyid = $biologyid and userid = $userid ")->One();
      return $data;
    }

}
