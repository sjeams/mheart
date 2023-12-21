<?php
//模考统计
namespace app\modules\user\models;

use yii\db\ActiveRecord;
use app\modules\cn\models\HistoryRecord;
use app\libs\Pager;
class TestStatistics extends ActiveRecord
{
    public static function tableName(){
        return '{{%tf_test_statistics}}';
    }
}
