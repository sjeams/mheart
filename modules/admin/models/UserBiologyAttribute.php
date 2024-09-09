<?php
// 用户生物
namespace app\modules\admin\models;
use yii\db\ActiveRecord;

class UserBiologyAttribute extends ActiveRecord
{
    public static function tableName(){
        return '{{%user_biology_attribute}}';
    }
 

}
