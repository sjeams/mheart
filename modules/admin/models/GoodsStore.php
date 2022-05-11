<?php
// 世界
namespace app\modules\admin\models;
use yii\db\ActiveRecord;

class GoodsStore extends ActiveRecord
{
    public static function tableName(){
        return '{{%goods_store}}';
    }

    // /**
    //  * 查询境界列表
    //  */
    // public static function getValueList(){
    //   $data = GoodsUse::find()->select('*,id as key,name as text')->asarray()->All();
    //   return $data;
    // }

    // /**
    //  * 查询境界列表
    //  */
    //  public static function getValueListtype($page=1,$pageSize=20,$where=""){
    //     $data['data'] = GoodsUse::find()->select("*")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
    //     $data ['total'] = GoodsUse::find()->select("id")->asarray()->count();
    //     return $data;
    //   }

      /**
     * 获取所有模块
     * @sjeam
     */
     public static function getBiologyList($page=1,$pageSize=20,$where=""){
      
      $data['data'] = GoodsStore::find()->select("*,name as key")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
      $data ['total'] = GoodsStore::find()->select("id")->where(" $where")->asarray()->count();
      // $data=  AdminInit::getChildren($adminIint);
      return $data;
  }
}
