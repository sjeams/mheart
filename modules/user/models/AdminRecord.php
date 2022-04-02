<?php
namespace app\modules\user\models;
use yii\db\ActiveRecord;
class AdminRecord extends ActiveRecord {
    public static function tableName(){
        return '{{%admin_record}}';
    }

    public function getAllRecord($where,$pageSize = 10,$page =1){
        $limit = "limit ".($page-1)*$pageSize.",$pageSize";
        $data = \Yii::$app->db->createCommand("SELECT * from {{%admin_record}} where ".$where." order by createTime DESC ".$limit)->queryAll();
        $count = count(\Yii::$app->db->createCommand("SELECT id from {{%admin_record}} where ".$where." order by createTime DESC ")->queryAll());
        return ['data' => $data,'count' => $count];
    }
}
