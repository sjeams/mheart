<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-04 15:44:22
 * @Description: 
 */
// 技能
namespace app\modules\admin\models;

use yii\db\ActiveRecord;
class BiologySkillPositionType extends ActiveRecord
{
    public static function tableName(){
        return '{{%biology_skill_position_type}}';
    }

    public static function positionTypeList(){
       return BiologySkillPositionType::find()->asArray()->All();
    }

}
