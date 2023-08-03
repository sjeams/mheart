<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
// 生物阵法
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use app\libs\Method;
use yii;
class UserBiologyNatureDo extends ActiveRecord
{
    public $user_info; 
    public $userid; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
    }
    public static function tableName(){
        return '{{x2_user_biology_nature_do}}';
    }

    // 查询布阵生物-userid
    public  function getValueList($userid=false){
        $userid=$userid?:$this->userid;
        $data = UserBiologyNatureDo::find()->where("userid = $userid")->asarray()->One();
        return $data;
    }
    
    // 写入阵法-生物id  阵法编号  is_add 1 添加 0 移除
    public  function addPosition($biologyid=0,$doid=1,$is_add=1){
        //统计位置数量
        $count=$this->addPositionCount();
        $do ='do'.$doid;
        if($biologyid) {
            // 写入位置
            if($is_add){
                if($count<5){
                    UserBiologyNatureDo::updateAll(["$do"=>$biologyid]," userid = $this->userid");
                }else{
                    return false; //位置已经满5个，需要移除
                }          
            }else{
                UserBiologyNatureDo::updateAll(["$do"=>'']," userid = $this->userid");
            }
        }
        return true;
    }
    //统计位置数量
    public  function addPositionCount(){
        $data = UserBiologyNatureDo::find()->where("userid = $this->userid")->asArray()->one();
        $num=0;
        for($i=0;$i<=9;$i++){
            $dofind ='do'.$i;
            if( intval($data["$dofind"])>0){
                    $num++;
            }
        }
        return $num;
    }


// ----------------------------------------
    //战斗系统
    public function getFightSystem($my_biology,$do_biology){
        //战斗属性调用
        $my_biology = $this->getFightAttribute($my_biology);
        $do_biology = $this->getFightAttribute($do_biology);
        //战斗属性排序--阵营分配
        $my_biology_sort = $this->getFightSort($my_biology,1);
        $do_biology_sort = $this->getFightSort($do_biology,0);
        //合并，区分左边还是右边。循环按速度-顺序攻击--全灭胜利。时间到，挑战方失败。 对战剩余数量多胜利
        $merge_biology = array_merge($my_biology_sort,$do_biology_sort);
        //根据速度排序
        array_multisort(array_column($merge_biology,'suDu'),SORT_DESC,$merge_biology);
        $fight_result = $this-> getFightDoing($merge_biology);//开启循环战斗
 
        
    }

    //获取战斗属性
    public function getFightAttribute($data){
        $UserBiologyAttribute =new UserBiologyAttribute();
        for($i=0;$i<=9;$i++){
            $dofind ='do'.$i;
            if(intval($data["$dofind"])>0){
                //基础属性
                $data["$dofind"]= $UserBiologyAttribute->getUserBiologyAttribute($data["$dofind"]);
                // 装备属性--基础装备--法宝

                //阵法属性

                //增幅属性

            }
        }
        return $data;
    }
    //战斗顺序
    public function getFightSort($data,$position_my){
        // suDu
        $r_data=[];
        for($i=0;$i<=9;$i++){
            $dofind ='do'.$i;
            if($data["$dofind"]){
                //基础属性
                $data["$dofind"]['position']=$i;
                $data["$dofind"]['position_my']=$position_my;
                $r_data[]= $data["$dofind"];
            }
        }
        return $r_data;
    }
    //战斗回合
    public function getFightDoing($data){
        //循环时间 还是 循环数组--根据枚举180秒定时器战斗
        foreach($data as $v){
            
        }
    }
    // 战斗触发

    //战斗buff--持续回合计算

    //回合结算

    //战斗结果

    //结算奖励


}
