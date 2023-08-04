<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
// 生物技能
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use yii;
class UserBiologySkill extends ActiveRecord
{
    public $user_info; 
    public $userid; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
    }
    public static function tableName(){
        return '{{x2_user_biology_skill}}';
    }


    /**
     * 属性详情
     */
    public     function getUserBiologySkill($userBiologyid){
        $data = UserBiologySkill::find()->select('*')->where("userBiologyid=$userBiologyid")->asarray()->One();  
        return $data;
    }
    
    public  function  mySkill($userBiologyid){  

        
    }
 
}
