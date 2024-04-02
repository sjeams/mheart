<?php
// 种族
namespace app\modules\admin\models;
use yii\db\ActiveRecord;

class BiologyBiology extends ActiveRecord
{
    public static function tableName(){
        return '{{%biology_biology}}';
    }

    /**
     * 查询种族列表
     */
    public static function getValueList(){
      $data = BiologyBiology::find()->select('id,name as text')->asarray()->All();
      return $data;
    }

    //初始化基本信息--初始化一些需要处理的字段
    public static  function biologyExtedAdd($data){
        foreach($data as$key=> $v){
          $zhongzhu = $v['biology'];
          $zhongzhu = BiologyBiology::find()->where("id =$zhongzhu")->asArray()->one();
          $data[$key]['zhongzhu']= $zhongzhu['name']; 
        }
        return $data;
    }
}
