<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
use app\libs\QueryList;

use function PHPSTORM_META\map;

class Category extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%category}}';
    }


	 public static function Category(){
        $list =array(
            array( 'id'=>0,'name'=>'淘片片' ),
            // array( 'id'=>1,'name'=>'jipo' ),
            array( 'id'=>1,'name'=>'花魁资源' ),
            array( 'id'=>2,'name'=>'丝袜' ),
            array( 'id'=>3,'name'=>'色窝' ),
            array( 'id'=>4,'name'=>'tantanzy11' ),
        );
     return  $list;
    }
    public static function CategoryVideo(){
        $list =array(
            array( 'id'=>0,'name'=>'淘片片' ),
            // array( 'id'=>1,'name'=>'jipo' ),
            // array( 'id'=>1,'name'=>'香蕉资源' ),
            // array( 'id'=>2,'name'=>'aibozy' ),
            // array( 'id'=>3,'name'=>'yinwozy9' ),
            // array( 'id'=>4,'name'=>'tantanzy11' ),
        );
     return  $list;
    }

}

?>
