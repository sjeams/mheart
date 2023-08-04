<?php
// 技能
namespace app\modules\admin\models;

use yii\db\ActiveRecord;
class BiologySkillPosition extends ActiveRecord
{
    public static function tableName(){
        return '{{%biology_skill_position}}';
    }


    public static function getPositionExtend($position,$position_type){

        switch($position){
            case 1:
                
        }

    }
 
}
