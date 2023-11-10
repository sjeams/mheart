<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
//用户生物列表
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use yii;


class UserWords extends ActiveRecord
{
    public $user_info; 
    public $userid; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
    }
    public static function tableName(){
        return '{{x2_user_words}}';
    }

    // 查询世界
    public  function getUserWord(){
        $sql ="SELECT u.* from {{%user_words}} ul INNER JOIN {{%words}} u on ul.wordId=u.id  where ul.userid=$this->userid and ul.state=0";
        $wordId = Yii::$app->db->createCommand($sql)->queryOne();
        return $wordId;
    }
    // 进入世界
    public  function inUserWord($wordId,$star){
        UserLogin::updateAll(['state' => 1],"userid =$this->userid and state=0");
        $word = UserWords::find()->where("userid=$this->userid and wordId =$wordId")->one();
        if($word){
            $word->state =$star;//世界等级--每级对应一个等级上限--提升后的等级不等于世界等级， 世界等级是可以提升的。
            $word->save();
        }else{
           $word = new UserWords();
           $word->wordId =$wordId;
           $word->userid =$this->userid;
           $word->state =$star;//世界等级--每级对应一个等级上限--提升后的等级不等于世界等级， 世界等级是可以提升的。
           $word->save();
        }
    }
}
