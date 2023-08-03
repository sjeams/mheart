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


class Words extends ActiveRecord
{
    public $user_info; 
    public $userid; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
    }
    public static function tableName(){
        return '{{x2_words}}';
    }

    //获取用户世界探索等级
    public static function getUserWordGrade($grade){
        $grade=intval($grade);
        switch($grade){
            case ($grade<=2) : 
            $type =1;
            break;
            case ($grade>2 && $grade<=5) : 
            $type =2;
            break;
            case ($grade>5 && $grade<=10) : 
            $type =3;
            break;
            case ($grade>10 && $grade<=15) : 
            $type =4;
            break;
            case ($grade>15 && $grade<=20) : 
            $type =5;
            break;
            default:
            $type =5;  
        }
        return $type;
    }

    // 查询世界列表--随机3个世界
    public  function getWordRand(){
        $type = $this->user_info['word_type'];
        $data = Words::find()->where("type <= $type")->orderBy(new Yii\db\Expression('rand()'))->limit(3)->asarray()->All();
        return $data;
    }



}
