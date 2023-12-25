<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
//用户生物列表
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use app\modules\admin\models\UserWords;
use app\modules\admin\models\User;



use app\modules\app\models\UserBiologyAttribute;

use yii;
class UserBiology extends ActiveRecord
{
    public $user_info; 
    public $userId; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userId =  $this->user_info['userid'];
    }
    public static function tableName(){
        return '{{x2_user_biology}}';
    }
    // 生物数量统计
    public static function getUserBiologyCount(){
        $data = (new UserBiology())->userBiologyList()->count();
        return $data;
    }
    // 生物列表
    public static   function getUserBiologyList(){
        $data =  (new UserBiology())->userBiologyList()->All();
        return $data;
    }
    public  function userBiologyList(){  
        $data = UserBiology::find()->select('*')->where("userid=$this->userId")->asarray();
        return $data;
    }
    //创建生物
    public  function createrUserBiology(){  
        $type = $this->user_info['word_type'];
        // 用户 随机获取一个生物（默认管理员--权限为已通世界）
        $biology = UserWords :: BiologyRand($type)[0]; //默认管理员-数量1 --返回数组
        $data = UserWords :: BiologySave($biology);
        return $data;
    }
 
    
    //随机获取生物
    public  function getBiologyRand(){
        $type = $this->user_info['word_type'];
        // 用户 随机获取一个生物（默认管理员--权限为已通世界）
        $biology = UserWords :: BiologyRand($type)[0]; //默认管理员-数量1 --返回数组
        if($biology){
            $biology = UserWords :: BiologySave($biology);
            $userbiology = User::biolobyChange($biology);//获取战斗属性
            $userbiology['userBiologyid']=$userbiology['id'];
            $biologyid = $userbiology['userBiologyid'];
            $findone = UserBiologyAttribute::find()->where("biologyid=$biologyid")->One();
            if(!$findone){
                unset($userbiology['id']);
                Yii::$app->db->createCommand()->insert('x2_user_biology_attribute',$userbiology)->execute(); //添加到用户
            }else{
                UserBiologyAttribute::updateAll($userbiology,"biologyid=$biologyid");
            }
        } 
        return  $biology;
    }

}

 