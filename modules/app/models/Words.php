<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
//用户生物列表
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use app\modules\app\models\UserWords;
use app\modules\admin\models\BiologyState;
use yii;


class Words extends ActiveRecord
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
        return '{{x2_words}}';
    }

    //获取用户世界探索等级
    public static function getUserWordGrade($state=1){
        $state=intval($state);
        // switch($grade){
        //     case ($grade<=2) : 
        //     $type =1;
        //     break;
        //     case ($grade>2 && $grade<=5) : 
        //     $type =2;
        //     break;
        //     case ($grade>5 && $grade<=10) : 
        //     $type =3;
        //     break;
        //     case ($grade>10 && $grade<=15) : 
        //     $type =4;
        //     break;
        //     case ($grade>15 && $grade<=20) : 
        //     $type =5;
        //     break;
        //     default:
        //     $type =5;  
        // }
        $data = BiologyState::find()->where("id =$state")->asArray()->One();
        return $data;
    }
    //随机境界
    public static function getUserWordStateRand($difficult,$star){
        // $star=$difficult+$star;
        $state = BiologyState::find()->select('id')->where("difficult = $difficult")->orderBy(new Yii\db\Expression('rand()'))->asArray()->One()['id'];
        $state = $state<=$star?$star+$difficult:$state;// 4-5星时，最低境界为星级+难度 4，先天
        $state =  rand($star,$state); 
        return$state;
    }


    // 查询世界列表--随机3个世界--当前世界以外的3个世界  1-5星难度
    public  function getWordRand($num=3){
        $type = $this->user_info['word_type'];
        $where =" type <= $type";
        if($this->wordId){
            $where .="  and id !=$this->wordId "; 
        }
        //STAR 星星，随机难度等级
        $data = Words::find()->select("*,FLOOR((RAND()*5)+1) star")->where("$where")->orderBy(new Yii\db\Expression('rand()'))->limit($num)->asarray()->All();        
        return $data;
    }
}
