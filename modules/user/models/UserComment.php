<?php
namespace app\modules\user\models;
use yii\db\ActiveRecord;
class UserComment extends ActiveRecord {
    public static function tableName(){
        return '{{%user_comment}}';
    }

    public function getUserComment($where,$pageSize = 10,$page =1){
        $limit = "limit ".($page-1)*$pageSize.",$pageSize";
        $sql = "SELECT uc.*,u.nickname from {{%user_comment}} uc LEFT JOIN {{%user}} u ON uc.uid=u.uid where ".$where." GROUP BY uc.id order by uc.createTime DESC";
        $count = count(\Yii::$app->db->createCommand($sql)->queryAll());
        $sql .= " $limit";
        $data = \Yii::$app->db->createCommand($sql)->queryAll();

        return ['data' => $data,'count' => $count];
    }
}
