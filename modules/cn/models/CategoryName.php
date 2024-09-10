<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
use app\libs\QueryList;

use function PHPSTORM_META\map;

class CategoryName extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%category_name}}';
    }
    //带权限的查看
    public static function CategoryGraden(){
        $list =   CategoryName::find()->where("belong!=0 and is_show =1 ")->asArray()->all();
        return  $list;
    }
	 public static function Category(){
        $list = CategoryName::find()->where("is_show =1 ")->asArray()->all();
        // $list =array(
        //     array( 'id'=>0,'name'=>'淘片','issearch'=>'1' ),
        //     // array( 'id'=>1,'name'=>'jipo' ),
        //     array( 'id'=>1,'name'=>'花魁' ,'issearch'=>'0'),
        //     array( 'id'=>2,'name'=>'丝袜' ,'issearch'=>'1'),
        //     array( 'id'=>3,'name'=>'色窝' ,'issearch'=>'1'),
        //     array( 'id'=>4,'name'=>'探探' ,'issearch'=>'0'),
        //     array( 'id'=>5,'name'=>'丝袜主播' ,'issearch'=>'0'),
        // );
     return  $list;
    }
    public static function CategoryVideo(){
        $list = CategoryName::find()->where("belong=0 and is_show =1")->asArray()->all();
        // $list =array(
        //     array( 'id'=>0,'name'=>'淘片片' ,'issearch'=>'1'),
        //     // array( 'id'=>1,'name'=>'jipo' ),
        //     // array( 'id'=>1,'name'=>'香蕉资源' ),
        //     // array( 'id'=>2,'name'=>'aibozy' ),
        //     // array( 'id'=>3,'name'=>'yinwozy9' ),
        //     // array( 'id'=>4,'name'=>'tantanzy11' ),
        // );
     return  $list;
    }
        //采集默认页码
    public static function delfutPage($belong){
        $res = CategoryName::find()->select('count')->where("belong =$belong " )->one();
        return $res->count;
    }

}

?>
