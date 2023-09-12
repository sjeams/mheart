<?php
// 技能
namespace app\modules\admin\models;
use app\libs\Method;
use yii\db\ActiveRecord;
class BiologySkillPosition extends ActiveRecord
{
    public static function tableName(){
        return '{{%biology_skill_position}}';
    }
    // 此方法用于返回攻击位置 -----自己位置 攻击位置  攻击类型   位置列表   是否是自己
    public static function getPositionExtend($position_in,$position,$position_type,$att_position,$attack){
        
        //生物位置是必有得，没有的时候，直接胜利
        // $use=[]; //治疗  增加攻击 属性 伤害
        $int=[];//返回位置
        if(empty($att_position)){
            return $int;
        }
        //获取生命大于0的数据
        switch($position){
            case 0: //普通攻击--第一顺位攻击
        
                if($attack==POSITION_MY){ 
                    $int[]=$position_in;//自己生物位置
                }else{
                    $int[]=$att_position[0];//敌方生物位置
                }
            break;
            case 1: //随机5个单位
                if($position_type){
                    $list=[]; //默认按第一顺位来
                    $int= BiologySkillPosition::getPositionInt($att_position,$list,5);//敌方生物位置
                    if(count($int)<count($att_position)){ //数量不够时，按第一顺位攻击
                        // 获取剩余补充5个
                        $num =count($att_position)-count($int);
                        // array_merge()
                        // 取差集
                    }

                }else{
                    $int= BiologySkillPosition::getPositionRand($att_position,5);//敌方生物位置
                }
            break;
            case 2: //第一排123单位
                $list= [1,2,3];
                $list= BiologySkillPosition::getPositionIntList($att_position,$list,0);//敌方生物位置
                $int = BiologySkillPosition::getPositionInt($att_position,$list);//敌方生物位置
            break;
            case 3: //中间一排456单位
                $list= [4,5,6];
                $list= BiologySkillPosition::getPositionIntList($att_position,$list,0);//敌方生物位置
                $int = BiologySkillPosition::getPositionInt($att_position,$list);//敌方生物位置
            break;
            case 4: //最后一排789单位
                $list= [7,8,9];
                $list= BiologySkillPosition::getPositionIntList($att_position,$list,0);//敌方生物位置
                $int = BiologySkillPosition::getPositionInt($att_position,$list);//敌方生物位置
            break;
            case 5: //攻击单位及后面单位
                $list=[]; //默认按第一顺位来
                $list =BiologySkillPosition::getPositionIntList($att_position,$list,1);
                $int = BiologySkillPosition::getPositionInt($att_position,$list);//敌方生物位置
            break;
            case 6: //随机1个单位
   
                if($position_type){
                    $list=[]; //默认按第一顺位来
                    $int= BiologySkillPosition::getPositionInt($att_position,$list,1);//敌方生物位置
                }else{
                    $int= BiologySkillPosition::getPositionRand($att_position,1);//敌方生物位置
                }
            break;
            case 7: //随机2个单位
                if($position_type){
                    $list=[]; //默认按第一顺位来
                    $int= BiologySkillPosition::getPositionInt($att_position,$list,2);//敌方生物位置
                }else{
                    $int= BiologySkillPosition::getPositionRand($att_position,2);//敌方生物位置
                }
            break;
            case 8: //随机3个单位

                if($position_type){
                    $list=[]; //默认按第一顺位来
                    $int= BiologySkillPosition::getPositionInt($att_position,$list,3);//敌方生物位置
                }else{
                    $int= BiologySkillPosition::getPositionRand($att_position,3);//敌方生物位置
                }
            break;
            case 9: //随机4个单位
                if($position_type){
                    $list=[]; //默认按第一顺位来
                    $int= BiologySkillPosition::getPositionInt($att_position,$list,4);//敌方生物位置
                }else{
                    $int= BiologySkillPosition::getPositionRand($att_position,4);//敌方生物位置
                }
            break;
            case 9: //所有单位
                $list=[]; //默认按第一顺位来
                $int= BiologySkillPosition::getPositionInt($att_position,$list,9);//敌方生物位置
            break;
        }
        return $int;
    }
    //列攻击 和 横攻击--正常顺序
    public static function getPositionIntList($att_position,$n_list,$lie=0){
        // 计算当前攻击位置及后面
        $list=[];
        // $int=[];
        if($lie==1){
            $arra_list=array(
                [1,4,7],
                [2,5,8],
                [3,6,9],
            );
        }else{
            $arra_list=array(
                [1,2,3],
                [4,5,6],
                [7,8,9],
            );
        }
        $first = $att_position[0];
        //是否在优先的列，不在就进入循环
        if(in_array($first,$n_list)){
            $list = $n_list;
        }else{
            foreach($arra_list as $v_list){
                if(in_array($first,$v_list)){
                    $list = $v_list;
                    continue;  
                }
            } 
        }
        return $list;
    }


    //顺序定位
    public static function getPositionInt($att_position,$list,$total=0){
        $int=[];
        //total是否固定个数，0  没有， 1固定个数
        foreach($att_position as $v ){
            if(in_array($v, $list)){
                $int[]= $v; 
            }
        }
        if($total){
            $num = $total-count($int); //计算够不够个数
            if($num>0){
                $key=0;
                foreach($att_position as $v ){
                    $key++;
                    if(!in_array($v, $int)){
                        $int[]= $v; 
                    }
                    if($key=$num){
                        continue;  
                    }
                }
            }
        }
        return $int;
    }
    //随机定位
    public static function getPositionRand($att_position,$num){
        $int=[];
        $rand_list=[];
        $rand_num = count($att_position)<=$num?count($att_position):$num;
        $rand = array_rand($att_position,$rand_num);
        //只触发一个技能或者空时，特殊处理 。
        if(!is_array($rand)){
            $rand>0?$rand_list[0]=$rand:'';
        }else{
            $rand_list =$rand;
        }
        //取出对应的位置
        foreach($rand_list as $v){
            $int[] =$att_position[$v];
        }
        return $int;
    }


    // 根据类型--对生物排序
    public static function getPositionType($position_type,$merge_biology_new,$position_type_list){
            //等于0的时候默认普通第一顺位
            if($position_type){
                $type = $position_type_list[$position_type]['type'];
                $sort = $position_type_list[$position_type]['sort'];
                $sort_num =  $sort=='SORT_DESC'?SORT_DESC:SORT_ASC;
                // array_multisort(array_column($merge_biology_new,'shengMing'),SORT_DESC,$merge_biology_new);
                array_multisort(array_column($merge_biology_new,$type),$sort_num,$merge_biology_new);
            }
        return $merge_biology_new;
    }
 
}
