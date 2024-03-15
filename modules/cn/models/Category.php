<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
class Category extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%category}}';
    }

    //获取下拉列表
    public static function getBelong($belong,$type){
        $data = Category:: getBelongList($belong,$type);
        $list = $data['list'];
        $type = $data['type'];
        $str ="<input type='hidden' value='0' name='goType' id='goType'/>";
        if($list){
            // $typeArray= array_column($list,'type');
            // if(!$type||!in_array($type,$typeArray)){
            //     $type=$typeArray[0];
            // }
                $str ="<input type='hidden' value='$type' name='goType' id='goType'/>";
                $str .='<p class="center" id="listType" >'; 
                foreach($list as $v){
                    $name =$v['name'];
                    $value =$v['type'];
                    if($v['type']==$type){
                        $str .=  "<a class='btn btn-sm  active btn-primary' value='$value' id='type$value' onclick='typeChange($value)' href='javascript:;'>$name</a>";
                    }else{
                        //图片
                        if($v['category_id']==2){
                            $str .=  "<a class='btn btn-sm btn-warning' value='$value' id='type$value' onclick='typeChange($value)' href='javascript:;'>$name</a>";
                        }else{
                            $str .=  "<a class='btn btn-sm ' value='$value' id='type$value' onclick='typeChange($value)' href='javascript:;'>$name</a>";
                        }
                    }
                }
                $str .='  </p>';
        }
        return $str;
    }
    //获取默认type
    public static function getType($belong,$type){
        $type = Category:: getBelongList($belong,$type)['type'];
        return $type;
    }

    public static function getBelongList($belong,$type){
        if($belong==0){
            $list = Category::find()->where("category_id=1")->asArray()->all();
        }else{
            $list = Category::find()->where("belong=$belong")->asArray()->all();
        }
        //获取默认设置 type
        $type = Category::getTypeByStatus($list,$belong,$type);
        return ['list'=>$list,'type'=>$type];
    }

    public static function getTypeByStatus($list,$belong,$type){
        if($list&&$type==0){
            $info = Category::find()->select('type')->where("belong=$belong and status =1")->asArray()->One();
            if($info){
                $type =$info['type'];
            }else{
                $typeArray= array_column($list,'type');
                if(!$type||!in_array($type,$typeArray)){
                    $type=$typeArray[0];
                }
            }
        }
        return $type;
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
