<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
// 生物属性
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use app\modules\app\models\Words;
use yii;
class UserBiologyAttribute extends ActiveRecord
{
    public $user_info; 
    public $userid; 
    public $biologyid; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
        $this->wordId =  $this->user_info['wordId'];
    }
    public static function tableName(){
        return '{{x2_user_biology_attribute}}';
    }
    //统计总数==上限不能超过20个
    public  function getUserBiologyAttributeCount(){
        $count = UserBiologyAttribute::find()->where("userid=$this->userid")->count();
        return $count;
    }

    /**
     * 属性详情
     */
    public  function getUserBiologyAttribute($userBiologyid,$biology_userid=0){
        if($biology_userid){
            //玩家生物
            $data = UserBiologyAttribute::find()->select('*')->where("userBiologyid=$userBiologyid")->asarray()->One();  
        }else{
            //系统生物
            $biology = UserWords::find()->select("biology")->where("userid=$this->userid and wordId =$this->wordId")->one();
            if($biology){
                $biology =$biology['biology'];//世界生物数组--取出生物池id序号

            }
            var_dump($biology);die;
        }
        return $data;
    }
    
    public  function  myAttributesList(){  
        $data = UserBiologyAttribute::find()->select('*')->where("userid=$this->userid")->asarray()->All();  
        return $data;
    }
   

}
