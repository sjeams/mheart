<?php
// 创造生物--原始属性
namespace app\modules\admin\models;
use yii\db\ActiveRecord;

class BiologyCreate extends ActiveRecord
{
    public static function tableName(){
        return '{{%biology_create}}';
    }

    /**
     * 查询境界列表
     */
    public static function getBiologyList($page=1,$pageSize=20,$where=""){
        $data['data'] = BiologyCreate::find()->select("*,name as key")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
        $data ['total'] = BiologyCreate::find()->select("id")->where(" $where")->asarray()->count();
      return $data;
    }
}
