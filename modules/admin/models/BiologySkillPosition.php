<?php
// 技能
namespace app\modules\admin\models;

use yii\db\ActiveRecord;
class BiologySkillPosition extends ActiveRecord
{
    public static function tableName(){
        return '{{%biology_skill_position}}';
    }

    //攻击位置 自己位置   攻击类型   位置列表   是否是自己
    public static function getPositionExtend($position_in,$position,$position_type,$att_position,$position_my){
        $int=0;//返回位置
        switch($position){
            case 0: //普通攻击
                if($position_my){
                    $int[]=$position_in;
                }else{

                }
            break;
            case 1: //所有5个单位
            break;
            case 2: //第一排123单位
            break;
            case 3: //中间一排456单位
            break;
            case 4: //最后一排789单位
            break;
            case 5: //攻击单位及后面单位
            break;
            case 6: //随机1个单位
            break;
            case 7: //随机2个单位
            break;
            case 8: //随机3个单位
            break;
            case 9: //随机4个单位
            break;
        }
        return $int;
    }
 
}
