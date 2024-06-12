<?php
// 世界
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use yii;
class User extends ActiveRecord
{
    public $user_info; 
    public $userId; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userId =  $this->user_info['userid'];
    }
    public static function tableName(){
        return '{{%user}}';
    }
 
    public static   function getUserEnergy(){
        (new User())->userBiologyList();
        $data =  (new User())->getEnergy();
        return $data;
    }
    // 用户能量-体力
    public  function getEnergy(){  
        return $this->user_info;
    } 

    //恢复能量--+20/h --自动任务/小时
    public  function userBiologyList(){  
        User::updateAll(['energy'=>new Yii\db\Expression("energy+20")],'energy < 120');
    }

    public  function userUpdate($newData){  
        $userId =$this->userId;
        User::updateAll($newData,"userid=$userId");
    }

 

}
