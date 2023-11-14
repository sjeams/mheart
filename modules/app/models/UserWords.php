<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
//用户生物列表
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use app\modules\app\models\User;
use app\modules\app\models\getBiologyRand;
use yii;


class UserWords extends ActiveRecord
{
    public $user_info; 
    public $userid;
    public $wordId; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
        $this->wordId =  $this->user_info['wordId'];
    }
    public static function tableName(){
        return '{{x2_user_words}}';
    }

    // 查询世界
    public  function getUserWord(){
        $res=[];
        if($this->wordId){
            $sql ="SELECT u.* from {{%user_words}} ul INNER JOIN {{%words}} u on ul.wordId=u.id  where ul.userid=$this->userid and ul.state=0";
            $res = Yii::$app->db->createCommand($sql)->queryOne();
        }
        return $res;
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
        User::updateAll(['wordId' =>$wordId],"userid =$this->userid");
    }
    //退出世界
    public  function outUserWord(){
        UserLogin::updateAll(['state' => 1],"userid =$this->userid and state=0");
        User::updateAll(['wordId' => 0],"userid =$this->userid");
    }


    //获取世界场景
    public  function getUserSence(){

        //随机类型
        $UserBiology= new UserBiology(); 
        $data = $UserBiology->getBiologyRand();
        
        //计算定位
        //随机个数3-10个事件，只能选择3次。


    }

}
