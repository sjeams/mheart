<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
use app\libs\QueryList;
use phpDocumentor\Reflection\Types\Static_;

use function PHPSTORM_META\map;

class VideoList extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%video_list}}';
    }

    //查询分页页码，判断是否有下一页
    public Static function getIsNext($belong,$type,$count){
        $type = intval($type);
        $belong = intval($belong);
        $where =" belong =$belong and type = $type  " ;
        $res =  VideoList::find()->select('count')->where(" $where ")->orderBy('count desc')->asArray()->one();   
        if($count== $res['count']){
             return true;
        }else{
            return false;
        }
    }   
}

?>
