<?php
/*
 * @Author: sjeam
 * @Date: 2022-06-13 16:34:53
 * @Description: 
 */
// 用户生物
namespace app\modules\admin\models;
use yii\db\ActiveRecord;
use yii;

class UserBiology extends ActiveRecord
{
    public static function tableName(){
        return '{{%user_biology}}';
    }
    
    // /**
    //  * 查询种族列表
    //  */
    // public static function getValueList(){
    //   $data = UserBiology::find()->select('id,name as text')->asarray()->All();
    //   return $data;
    // }
    /**
     * 查询用户生物列表
     */
     public static function getBiologyList($page=1,$pageSize=20,$where=""){
        $data['data'] = UserBiology::find()->select("*,name as key")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
        $data ['total'] = UserBiology::find()->select("id")->where(" $where")->asarray()->count();
      return $data;
    }


    public static function unpdateAll($id){
        $userbiology = UserBiology::find()->where("id=$id")->asarray()->One();
        $userbiology = User::biolobyChange($userbiology);
        unset($userbiology['id']);
        UserBiology::updateAll($userbiology,['id'=>$id]);
        return UserBiology::find()->where("id=$id")->asarray()->One();
    }

    //随机获取生物
    // public  function getBiologyRand(){
    //     $type = $this->user_info['word_type'];
    //     // 用户 随机获取一个生物（默认管理员--权限为已通世界）
    //     $biology = UserWords :: BiologyRand($type)[0]; //默认管理员-数量1 --返回数组
    //     $this->getBiologyRandAttribute($biology);
    //     return  $biology;
    // }
    public  function getBiologyRandAttribute($biology=[]){
        if($biology){
            $biology = UserWords :: BiologySave($biology);
            $userbiology = User::biolobyChange($biology);//获取战斗属性
            $userbiology['userBiologyid']=$userbiology['id'];
            $biologyid = $userbiology['userBiologyid'];
            $findone = UserBiologyAttribute::find()->where("userBiologyid=$biologyid")->One();
            if(!$findone){
                unset($userbiology['id']);
                Yii::$app->db->createCommand()->insert('x2_user_biology_attribute',$userbiology)->execute(); //添加到用户
            }else{
                UserBiologyAttribute::updateAll($userbiology,"biologyid=$biologyid");
            }
        } 
    }
}
