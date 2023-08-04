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
use app\modules\admin\models\BiologySkill;
use app\modules\admin\models\BiologySkillPosition;
use app\modules\admin\models\BiologySkillPositionType;
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
        $merge_biology = $this->fightingExtend($my_biology,$do_biology);
        //开启循环战斗--初始回合
        $fight_history = $this->fighting($merge_biology);//返回战斗记录
        var_dump($fight_history);die;
       //结算奖励 
    }
    

    public function fightingExtend($my_biology,$do_biology){
        //战斗属性调用
        $my_biology = $this->getFightAttribute($my_biology);
        $do_biology = $this->getFightAttribute($do_biology);
        //战斗属性排序--阵营分配
        $my_biology_sort = $this->getFightSort($my_biology,POSITION_MY); //1己方
        $do_biology_sort = $this->getFightSort($do_biology,POSITION_ENEMY);//2敌方
        // var_dump($do_biology_sort);die;
        //合并，区分左边还是右边。循环按速度-顺序攻击--全灭胜利。时间到，挑战方失败。 对战剩余数量多胜利
        $merge_biology = array_merge($my_biology_sort,$do_biology_sort);
        //根据速度排序
        array_multisort(array_column($merge_biology,'suDu'),SORT_DESC,$merge_biology);
        return $merge_biology;
    }

    public function fighting($merge_biology,$fight_history=[],$bout=0){
        $bout++;
        // var_dump($bout);
        // --主动和被动都是根据概率触发  --主动技能只保留一个
        $merge_biology = $this->getFightDoing($merge_biology,$bout);//触发技能--循环技能--自方和敌方技能触发--
        $merge_biology = $this->getFighHurt($merge_biology,$bout);//战斗伤害--循环技能--每次战斗 都要循环winner--胜利后跳出 返回战斗记录结果
        $poition_winner = $this->victory($merge_biology,$bout);//再次检查胜利者
        // 回合战斗结果写入记录
        $fight_history[$bout]= array(
            'bout'=> $bout,
            'poition_winner'=> $poition_winner,
            'merge_biology'=> $merge_biology,
         );
         // 胜利跳出循环  0无 1自己 2敌方
        if($poition_winner==POSITION_NO){
            $fight_history = $this->fighting($merge_biology,$fight_history,$bout);
        } 
        return  $fight_history;
    }


    //胜利者
    public function victory($fight_skill,$bout){
        $list = array(POSITION_MY,POSITION_ENEMY);
        //大于180回合直接失败
        if($bout==FIGHT_BOUT){
            return POSITION_ENEMY;
        }else{
            // 0无胜利者  1己方 2 敌方
            foreach($list as $i){
                $position = Method::arrayfilter($fight_skill,'position_my',$i);
                // 过滤生命=0的数据
                $poition_winner = array_keys(array_filter(array_column($position,'shengMing')));
                if(empty($poition_winner)){ 
                    //如果都阵亡，对方胜利
                    $winner = $i==POSITION_MY?POSITION_ENEMY:POSITION_MY;
                    return  $winner;
                }
            }
            return POSITION_NO;
        }
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
                //基础属性-我的位置
                $data["$dofind"]['position']=$i;
                $data["$dofind"]['position_my'] = $position_my;
                $skill=$data["$dofind"]['skill'];
                if($skill){
                    //查询所有技能
                    $skill_list = BiologySkill::find()->where("id in ($skill)")->asArray()->All();
                    //获取技能属性
                    foreach($skill_list as $key=>$v){
                        $position = $v['position'];
                        $positionType = $v['positionType'];
                        $skill_list[$key]['position_msg'] = $position? BiologySkillPosition::find()->where("id = $position")->asArray()->One():[];
                        $skill_list[$key]['positionType_msg'] =$positionType? BiologySkillPositionType::find()->where("id = $positionType")->asArray()->One():[];
                    }
                    //key  改为技能id
                    $skill_list = array_column($skill_list,null,'id');
                    $data["$dofind"]['position_skill'] =  $skill_list;
                }
                $r_data[]= $data["$dofind"];
            }
        }

        return $r_data;
    }
    //战斗回合--开始回合  $bout 回合默认为1 第一回合开启回合技能
    public function getFightDoing($data,$bout=1){
        //循环时间 还是 循环数组--根据枚举180秒定时器战斗
        foreach($data as$key=> $v){
            //触发技能--返回被动和主动技能--根据发动顺序排序--攻击定位0 默认攻击
            $position_skill = $v['position_skill'];//技能列表--不变的
            $skill_list =  $this->getFightSkill($v['position_skill']); //是否触发技能--技能id数组
            $position_skill = array_intersect_key($position_skill,array_flip($skill_list));//返回触发的技能
            $position_skill = Method::getSkillSort($position_skill,$bout);//执行顺序，并保只留一个主动技能--返回攻击类型，普通攻击还是主动技能   默认1 开启第一回合技能触发
            $data[$key]['fight_skill'] = $position_skill['skill'];//回合的战斗技能
            // $data[$key]['fight_position'] = $position_skill['position'];//回合的战斗技能-攻击位置
            // $data[$key]['fight_attack'] = $position_skill['attack'];//技能对象 0无 自己 1 敌方2
        }

        return $data;
    }

    //技能触发--返回触发的技能id
    public function getFightSkill($data){
        //有技能进
        $skill_id = [];
        $gailv=[];
        if($data){
            //循环技能
            foreach($data as $v){
              $probability = intval($v['probability']);
              $gailv[0]=$probability>=100?0:100-$probability;//失败几率
              $gailv[1]=$probability>=100?100:$probability; //触发几率
              $result =Method::getRandGrade($gailv);//1触发 0无效
              if($result){
                $skill_id[]= $v['id'];
              }
            }
        } 
        return $skill_id;
 
    }  

    // 战斗伤害顺序
    public function getFighHurt($merge_biology,$bout){
        //循环生物进行战斗
        $position_my = Method::arrayfilter($merge_biology,'position_my',POSITION_MY);//获取敌方阵容
        $position_enemy = Method::arrayfilter($merge_biology,'position_my',POSITION_ENEMY);//获取敌方阵容
        $position_my  = array_column($position_my,'position'); //获取自己位置
        $position_enemy  = array_column($position_enemy,'position_enemy'); //获取敌人位置
        // // 过滤生命=0的数据
        // $poition_winner = array_keys(array_filter(array_column($position,'shengMing')));
        foreach($merge_biology as $attack_biology){
            // 攻击位置计算
            $this->attackPosition($attack_biology,$position_my,$position_enemy); //主动攻击
            // $this->attackPosition($attack_biology,0,$position_my); //被动攻击
            //伤害顺序列表
            // if($position_skill['position']){

            // }else{
                
            // }
           $winner = $this->victory($merge_biology,$bout);//战斗后--检查胜利者
            if($winner){
               //跳出循环
           }
        }  
        // var_dump($position_skill);die;
        return $merge_biology;
    }
    //攻击位置计算
    public function attackPosition($attack_biology,$position_my,$position_enemy){
        $position_my = $attack_biology['position_my'];//当前生物1自己  2敌方  
        $fight_skill = $attack_biology['fight_skill'];//生物技能
        foreach($fight_skill as $skill){
            $attack = $skill['attack'];//攻击对象 攻击对象0被攻击触发 自己使用1 敌方使用2
            $position = $skill['position'];    //战斗标记 攻击位置 --默认为 0 是普通攻击 ，有值为技能position_id--攻击位置
            $position_type = $skill['positionType'];//攻击对象类型
            if($attack){ // 0 直接跳过
                // $this->attackSkill($skill,$position_my);//技能触发的对象   自己使用1 敌方使用2 
                if($position_my == POSITION_MY){ //自己单位
                    // $this->attackSkillHut($position,$position_type);
                }else if($position_my == POSITION_ENEMY){//敌方单位
                    // $this->attackSkillHut($position,$position_type);
                }else{
                    //中立跳过
                }
            }
        }
        var_dump($position_my);die;
    }

    //被击位置计算
    public function attackPositionBack($attack_biology,$position_my,$position_enemy){

    }

    // //技能触发，造成伤害
    // public function attackSkill($position_my,$skill){


    // }

    // //技能攻击伤害计算
    // public  function attackSkillHut($position,$position_type){

    // }

    //战斗buff--持续回合计算

    //回合结算

    //战斗结果

    //结算奖励


}
