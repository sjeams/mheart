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

    public static function getBelong($belong,$type){
        if($belong==0){
            $list = Category::find()->where("category_id=1")->asArray()->all();
            // $str ="<input type='hidden' value='0' name='goType' id='goType'/>";
            // die(Method::jsonGenerate(1,$str,'返回数据成功'));
        }else{
            $list = Category::find()->where("belong=$belong")->asArray()->all();
        }

        // var_dump( $list);die;
            if($list){
                if(!$type){
                    $typeArray= array_column($list,'type');
                    $type=$typeArray[0];
                }
                // if(!$list_type){
                //     $str ='<select name="goType" id="goType listType" >';
                //     // $type = Yii::$app->request->post('type',8);
                //     foreach($list as $v){
                //         $name =$v['name'];
                //         $value =$v['type'];
                //         if( $v['type']==$type){
                //             $str .= "<option value='$value'  selected > $name </option>";
                //         }else{
                //             $str .= "<option value='$value'  > $name </option>";
                //         }
                //     }
                //     $str .=' </select>';
                // }else{
                    // if(!in_array($type,$typeArray)&&!empty($typeArray)){
                    // } 
                    $str ="<input type='hidden' value='$type' name='goType' id='goType'/>";
                    $str .='<p class="center" id="listType" >'; 
                    foreach($list as $v){
                        $name =$v['name'];
                        $value =$v['type'];
                        if($v['type']==$type){
                            $str .=  "<a class='btn btn-sm  active btn-primary' value='$value' id='type$value' onclick='typeChange($value)' href='javascript:;'>$name</a>";
                        }else{
                            $str .=  "<a class='btn btn-sm' value='$value' id='type$value' onclick='typeChange($value)' href='javascript:;'>$name</a>";
                        }
                    }
                    $str .='  </p>';
                    // if($belong==1){
                    //     var_dump($str);die;
                    // }
                // }
            }
        return $str;
    }
	//  public static function Category(){
    //     $list =array(
    //         array( 'id'=>0,'name'=>'淘片','issearch'=>'1' ),
    //         // array( 'id'=>1,'name'=>'jipo' ),
    //         array( 'id'=>1,'name'=>'花魁' ,'issearch'=>'0'),
    //         array( 'id'=>2,'name'=>'丝袜' ,'issearch'=>'1'),
    //         array( 'id'=>3,'name'=>'色窝' ,'issearch'=>'1'),
    //         array( 'id'=>4,'name'=>'探探' ,'issearch'=>'0'),
    //         array( 'id'=>5,'name'=>'丝袜主播' ,'issearch'=>'0'),
    //     );
    //  return  $list;
    // }
    // public static function CategoryVideo(){
    //     $list =array(
    //         array( 'id'=>0,'name'=>'淘片片' ,'issearch'=>'1'),
    //         // array( 'id'=>1,'name'=>'jipo' ),
    //         // array( 'id'=>1,'name'=>'香蕉资源' ),
    //         // array( 'id'=>2,'name'=>'aibozy' ),
    //         // array( 'id'=>3,'name'=>'yinwozy9' ),
    //         // array( 'id'=>4,'name'=>'tantanzy11' ),
    //     );
    //  return  $list;
    // }

}

?>
