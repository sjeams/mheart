<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;
use yii\data\Pagination;
use Yii;

class VideoListText extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%video_list_text}}';
    }

 
}
?>
