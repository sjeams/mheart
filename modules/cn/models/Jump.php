<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;
class Jump extends ActiveRecord {
    public $cateData;

    public static function tableName(){
            return '{{%jump}}';
    }


    // 获取banner 所有
    public static function getBanner( $name,$type=1,$form=1,$isLook=1){
      $banner =  Jump::find()->where("name= '$name'  and type =$type and form=$form and isLook =$isLook")->asArray()->all();
        return $banner;
    }
}
