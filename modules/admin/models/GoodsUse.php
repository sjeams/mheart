<?php
// 物品
namespace app\modules\admin\models;
use yii\db\ActiveRecord;

class GoodsUse extends ActiveRecord
{
    public static function tableName(){
        return '{{%goods_use}}';
    }

    /**
     * 查询物品列表
     */
    public static function getValueList($type='')
    {
      if(empty($type)){
        $data = GoodsUse::find()->select('*,id as key,name as text')->asarray()->All();
      }else{
        $data = GoodsUse::find()->select('*,id as key,name as text')->where("type=$type")->asarray()->All();
      }
      return $data;
    }

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
      
      $data['data'] = GoodsUse::find()->select("*,name as key")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
      $data ['total'] = GoodsUse::find()->select("id")->where(" $where")->asarray()->count();
      // $data=  AdminInit::getChildren($adminIint);
      return $data;
  }
}
