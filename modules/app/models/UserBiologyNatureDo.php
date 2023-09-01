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
use app\modules\admin\models\BiologyBiology;
use app\modules\admin\models\BiologySkill;
use app\modules\admin\models\BiologySkillPosition;
use app\modules\admin\models\BiologySkillPositionType;
use app\modules\admin\models\BiologySkillExtend;

use yii;
class UserBiologyNatureDo extends ActiveRecord
{
    public $user_info;//用户信息
    public $userid; //用户id
    public $my_biology_extend; //生物位置 1--己方生物
    public $do_biology_extend; //生物位置 2--敌方生物
    public $merge_biology_extend;//所有生物速度顺序--战斗列表
    public $merge_biology_first;//初始化备用属性列表--初始列表
    public $fighting_history;//初始化备用属性列表--战斗记录
    public $bout;//回合数，初始化为0--战斗回合
    public $skill_extend;//技能类型
    function init(){
        $skill_extend = BiologySkillExtend::find()->asArray()->All();
        $this->skill_extend =  array_column($skill_extend,null,'extend');
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

    //初始化定位 //----战斗开始前必须先跑这个
    public function getBiologyInit($merge_biology_list){
        Method::setBiologyPosition($merge_biology_list); 
        $this->my_biology_extend = Method::getBiologyPosition(POSITION_MY);
        $this->do_biology_extend = Method::getBiologyPosition(POSITION_ENEMY);
        $this->merge_biology_extend = Method::getBiologyPosition(MERGE_BIOLOGY);
        
    }
    public function setBiologyInitFirst(){
        $this->bout=0;//初始回合
        $this->merge_biology_first = $this->merge_biology_extend;//保存初始化属性
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
        $merge_biology_list = array_merge($my_biology_sort,$do_biology_sort);
        //根据速度排序
        array_multisort(array_column($merge_biology_list,'suDu'),SORT_DESC,$merge_biology_list);
        return $merge_biology_list;
    }

    //战斗系统--主进程
    public function getFightSystem($my_biology,$do_biology){
        //战斗属性调用
        $merge_biology_list =$this->fightingExtend($my_biology,$do_biology);
        //设置容器--战斗初始化
        $this->getBiologyInit($merge_biology_list);  //----战斗开始前必须先跑这个
        $this->setBiologyInitFirst();//第一次初始化属性备用。
        //开启循环战斗--初始回合
        $this->fighting();//返回战斗记录
 
        // var_dump($fight_history);die;
       //结算奖励 
    }


    ///开启循环战斗--初始回合
    public function fighting(){
        $this->bout = $this->bout++;
        // var_dump($bout);

        // --主动和被动都是根据概率触发  --主动技能只保留一个
        $this->getFightDoing();//触发技能--循环技能--自方和敌方技能触发--
        $this->getFighHurt();//战斗伤害--循环技能--每次战斗 都要循环winner--胜利后跳出 返回战斗记录结果
        $poition_winner = $this->victory();//再次检查胜利者
        // 回合战斗结果写入记录
        $this->fighting_history[$this->bout]['poition_winner']=$poition_winner;//胜利者
        $this->fighting_history[$this->bout]['merge_biology_extend']=$this->merge_biology_extend;//回合结算状态
         // 胜利跳出循环  0无 1自己 2敌方
        if($poition_winner==POSITION_NO){
            $this->fighting();
        }
    }

    //胜利者
    public function victory(){
        $list = array(POSITION_MY,POSITION_ENEMY);
        //大于180回合直接失败
        if($this->bout==FIGHT_BOUT){
            return POSITION_ENEMY;
        }else{
            // 0无胜利者  1己方 2 敌方
            foreach($list as $i){
                $position = Method::arrayfilter($this->merge_biology_extend,'position_my',$i);
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
                        $skill_list[$key]['skill_extend'] = $this->skill_extend[$v['extend']];
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
    public function getFightDoing(){
        //循环时间 还是 循环数组--根据枚举180秒定时器战斗
        foreach($this->merge_biology_extend as$key=> $v){
            //触发技能--返回被动和主动技能--根据发动顺序排序--攻击定位0 默认攻击
            $position_skill = $v['position_skill'];//技能列表--不变的
            $position_skill = $this->getSkillValueList($position_skill,1);//is_do 0被动   1 主动 和主动触发
            //当前回合主动触发的技能
            $this->merge_biology_extend[$key]['fight_skill'] = $position_skill['skill'];//回合的战斗技能
            // $data[$key]['fight_position'] = $position_skill['position'];//回合的战斗技能-攻击位置
            // $data[$key]['fight_attack'] = $position_skill['attack'];//技能对象 0无 自己 1 敌方2
        }
    }

    //获取触发技能--is_do 0被动   1 主动 和主动触发
    public function getSkillValueList($position_skill,$is_do=0){
        $position_skill=$position_skill?$position_skill:[];
        $skill_list =  $this->getFightSkill($position_skill); //是否触发技能--技能id数组
        $position_skill = array_intersect_key($position_skill,array_flip($skill_list));//返回触发的技能
        // var_dump($position_skill);
        $position_skill = Method::getSkillSort($position_skill,$this->bout,$is_do);//执行顺序，并保只留一个主动技能--返回攻击类型，普通攻击还是主动技能   默认1 开启第一回合技能触发 
        return $position_skill;
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
    public function getFighHurt(){
        //循环生物进行战斗

        $position_my_list = Method::arrayfilter($this->merge_biology_extend,'position_my',POSITION_MY);//获取敌方阵容
        $position_enemy_list = Method::arrayfilter($this->merge_biology_extend,'position_my',POSITION_ENEMY);//获取敌方阵容
        // // 过滤生命=0的数据
        // $poition_winner = array_keys(array_filter(array_column($position,'shengMing')));
        foreach($this->merge_biology_extend as $attack_biology){
            // 攻击位置计算
            $this->attackPosition($attack_biology,$position_my_list,$position_enemy_list); //主动攻击
            // $this->attackPosition($attack_biology,0,$position_my); //被动攻击
            //伤害顺序列表
            // if($position_skill['position']){

            // }else{
                
            // }
           $winner = $this->victory($this->bout);//战斗后--检查胜利者
            if($winner){
               //跳出循环
           }
        }  
     
        $this->getBiologyInit($this->merge_biology_extend); //----每回合-重置一次容器
        // var_dump($position_skill);die;
    }
    //攻击位置计算
    public function attackPosition($attack_biology,$position_my_list,$position_enemy_list){
        $position_in = $attack_biology['position'];//当前生物位置 
        $position_my = $attack_biology['position_my'];//当前生物1自己  2敌方  
        $fight_skill = $attack_biology['fight_skill'];//生物技能

        //类型列表
        $int=[];//攻击位置
        $position_type_list = BiologySkillPositionType::positionTypeList();
        $position_type=0;
        foreach($fight_skill as $skill){
     
            $attack = intval($skill['attack']);//攻击对象 攻击对象0被攻击触发 自己使用1 敌方使用2
            $position = intval($skill['position']);    //战斗标记 攻击位置 --默认为 0 是普通攻击 ，有值为技能position_id--攻击位置
            $position_type = intval($skill['positionType']);//攻击对象类型 --优先攻击排序
            $position_my_list_new= $position_my_list;
            $position_enemy_listt_new= $position_enemy_list;
            //排序
            if($position_type){
                $position_my_list_new= BiologySkillPosition:: getPositionType($position_type,$position_my_list,$position_type_list);
                $position_enemy_listt_new= BiologySkillPosition:: getPositionType($position_type,$position_enemy_list,$position_type_list);
            }
            $position_my_list_new  = array_column($position_my_list_new,'position'); //获取自己位置
            $position_enemy_listt_new  = array_column($position_enemy_listt_new,'position'); //获取敌人位置
            if($attack){ // 0 直接跳过--被攻击--被动跳过
                //技能使用对象
                $attaatt_positionck = $attack==POSITION_MY?$position_my_list_new:( $attack==POSITION_ENEMY?$position_enemy_listt_new:[]);
                // $this->attackSkill($skill,$position_my);//技能触发的对象   自己使用1 敌方使用2  // 0中立跳过
                if(in_array($position_my,array(POSITION_MY,POSITION_ENEMY))){  
                    $int= BiologySkillPosition::getPositionExtend($position_in,$position,$position_type,$attaatt_positionck,$position_my,$skill);
                    // var_dump($skill);
                    // var_dump($int);
                    //循环攻击位置
                    foreach($int as $pid){
                        // is_do 0被动   1 主动 和主动触发
                        $this->attackSkill($position_my,$attack_biology,$pid,$skill,1);
                    }
                } 
           
                // var_dump($skill);//技能
                // var_dump($int);die;//攻击位置
            }
        }
        var_dump($this->fighting_history[$this->bout]['fighting_history']);die;
        // var_dump($fight_skill);die;
    }

    //被击位置计算--被击触发
    public function attackPositionBack($attack_biology,$position_my_list,$position_enemy_list){

        // foreach($fight_skill as $skill){
            
        // }
    }
    //技能触发，造成伤害 is_do 0被动   1 主动 和主动触发
    public function attackSkill($position_my,$attack_biology_go,$pid,$skill_go,$is_do=0){
        $attack = intval($skill_go['attack']); //技能攻击对象
        $goid= $attack_biology_go['id'];//生物id
        //attack_biology发动攻击生物
        //attack_biology_do被攻击生物
        if($position_my == POSITION_MY && $attack==POSITION_MY){ //己方1->己方 1
            $attack_biology_do =  $this->my_biology_extend['position'][$pid];
        }else if($position_my == POSITION_MY && $attack==POSITION_ENEMY){//己方1->敌方2
            $attack_biology_do =  $this->do_biology_extend['position'][$pid];
        }else if($position_my == POSITION_ENEMY && $attack==POSITION_ENEMY){//敌方2->敌方2
            $attack_biology_do =  $this->my_biology_extend['position'][$pid];
        }else if($position_my == POSITION_ENEMY && $attack==POSITION_MY){//敌方2->己方1
            $attack_biology_do =  $this->do_biology_extend['position'][$pid];     
        }else{
            $attack_biology_do =[];
        }
 
        if($attack_biology_do){
            $doid= $attack_biology_go['position'];//生物id
            // var_dump($skill_go);
            // var_dump($attack_biology_do);die; 
            // 发起伤害
            $hurt_go=$this->attackSkillHurtValue($position_my,$doid,$pid,$attack_biology_go,$skill_go,$attack_biology_do,$is_do);
            // var_dump($attack_biology_go);die;
            // if($attack_biology_go)
            // 攻击的是敌方单位--触发被动
            // var_dump($attack_biology_do['position_my']);
            // if($position_my!=$attack_biology_do['position_my']){
            // var_dump($this->fighting_history[$this->bout]);die;
            //被动   //$goid 注意，攻击顺序不能变，这个是生物的速度攻击顺序
            $this->fighting_history[$this->bout]['fighting_history'][$goid][]=$hurt_go;  
        }
    }

    //技能触发，造成伤害--容器--有增有减，可以清除--限定持续回合等  doid,//被攻击位置  attack_biology_do,//被攻击单位
    public  function attackSkillHurt($hurt_go){

        $attack_biology_go =$hurt_go['attack_biology_go'];//发起攻击
        $pid =$attack_biology_go['position'];//发起攻击位置
        $attack_biology_do=$hurt_go['attack_biology_do'];//被攻击---此处为被攻击者发起攻击
        $hurt_go =$hurt_go['hurt'];
        $position_my = $attack_biology_do['position_my'];
        //当前回合被动触发的技能
        $position_skill = $this->getSkillValueList($attack_biology_do['position_skill'])['skill'];
        if($position_skill){
            foreach($position_skill as $v_skill){
                //反击
                $this->attackSkill($position_my,$attack_biology_do,$pid,$v_skill);//被动循环
            }
        }
    }

    //发起伤害
    public  function attackSkillHurtValue($position_my,$doid,$pid,$attack_biology_go,$skill_go,$attack_biology_do,$is_do){
 
        $status = $skill_go['status'];//1物理 2 法术 3 特殊（ 无视闪避等技能 只能特殊技能抵挡）
        $keeptime = $skill_go['keeptime'];//技能伤害持续回合
        $dobout = $skill_go['bout'];//执行回合数
        $belong = $skill_go['belong'];//技能类型(0初始化,1回合化--初始化,2被击前触发,3被击后触发,4攻击前触发,5主动,6攻击后触发）
        $extend = $skill_go['extend'];//造成伤害类型
    
        $status = $skill_go['status'];//伤害计算类型--如果不存在就是 特殊类型
        $formula = $skill_go['formula'];//公式
        $isadd = intval($skill_go['isadd']);//公式0减少1增加
        $value = intval($skill_go['value']);//伤害计算类型--每级增加30%
        $hurt = $skill_go['hurt'];//伤害固定值   zhaoHuan时-(生物id)
        $attack = intval($skill_go['attack']); //攻击类型 0被动 1触发 2主动
        if(isset($attack_biology_do[$status])){ 
            //属性存在的，普通的
            //计算伤害
            $hurt = Method::percentHurt($attack_biology_do[$status],$hurt,$value,$formula,$isadd);
            $hurt_go = (intval($attack_biology_do[$extend])+$hurt); //造成伤害，基础伤害+公式
            // 附加属性
            $attack_biology_do[$extend] = $hurt_go;
        }else{
            //属性不存在，特殊的
            // 召唤--根据固定的生物id召唤
            var_dump($status);die;
            switch($status){
                case 'shanbi':

                case 'fenTan':
                    var_dump(333);die; 
                case 'zhaoHuan':
                    $s_value=  intval($attack_biology_do[$status]);
                    // $status  力量
                    var_dump(111);die;
                break;
            }
            // 无敌
            // 清晰
            // 控制类型buff
            //伤害分摊fenTan
            // var_dump(111);die;
        }

        //是否主动技能
        if($is_do){
            $gailv[0] =100*100;//失败几率
            $gailv[1] =100*$attack_biology_do['shanbi'];//成功几率
            $sahnbi =Method::getRandGrade($gailv);//1触发 0无效
            //主动---闪避直接跳过
            if($sahnbi==0&&$attack==POSITION_ENEMY){ //攻击敌方单位，反弹伤害
                //接收伤害
                $hurt_go =  $this->attackSkillHurt($hurt_go);
                //反弹伤害   //$goid 注意，攻击顺序不能变，这个是生物的速度攻击顺序
            }
        }
        //发起伤害
        $hurt_go = array(
            'pid'=>$pid,//发起攻击位置
            'doid'=>$doid,//攻击单位id
            'attack_biology'=>$attack_biology_go,//发起攻击单位
            'attack_biology_do'=>$attack_biology_do,//被攻击单位
            'skill'=>$skill_go,//发起攻击技能
            'hurt'=>$hurt_go,//发起伤害
            'keeptime'=>$this->bout+$keeptime,//发起伤害持续回合
        );
        //重新赋值--攻击对象（自己、友方、敌人）--叠加buff
        $this->merge_biology_extend[$doid]=$attack_biology_do;
        return $hurt_go;
    }
    

  
    


    //战斗buff--持续回合计算

    //回合结算

    //战斗结果

    //结算奖励


}
