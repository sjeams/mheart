<?php
namespace app\modules\user\models;
use app\modules\cn\models\UserAnswer;
use yii\db\ActiveRecord;
class UserEvaluationRecord extends ActiveRecord {
    public static function tableName(){
        return '{{%user_evaluation_record}}';
    }
}
