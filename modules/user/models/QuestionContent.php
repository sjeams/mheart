<?php
namespace app\modules\user\models;
use yii\db\ActiveRecord;
use app\modules\user\models\User;
class QuestionContent extends ActiveRecord {
    public static function tableName(){
        return '{{%question_content}}';
    }

    public function getProblem($where,$page =1,$pageSize = 10){
        $sql='';
        $limit = "limit ".($page-1)*$pageSize.",$pageSize";
        $sql .= "SELECT q.*,u.userName,u.email,u.phone from {{%question_content}} q LEFT JOIN {{%user}} u ON q.userId=u.uid where ".$where." group by q.id  order by q.addTime DESC ";
        $count = count(\Yii::$app->db->createCommand($sql)->queryAll());
        if($limit != 0){
            $sql .= $limit;
        }
        $data = \Yii::$app->db->createCommand($sql)->queryAll();
        return ['data' => $data,'count' => $count];
    }
}