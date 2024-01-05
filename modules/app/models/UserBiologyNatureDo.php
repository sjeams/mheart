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
use app\modules\admin\models\User;
use app\modules\app\models\UserWords;
use app\modules\app\models\UserBiologyAttribute;


use yii;
class UserBiologyNatureDo extends ActiveRecord
{
    public $user_info;//用户信息
    public $userId; //用户id
    public $my_biology_extend; //生物位置 1--己方生物
    public $do_biology_extend; //生物位置 2--敌方生物
    public $merge_biology_extend;//所有生物速度顺序--战斗列表
    public $merge_biology_first;//初始化备用属性列表--初始列表
    public $fighting_history;//初始化备用属性列表--战斗记录
    public $bout;//回合数，初始化为0--战斗回合
    public $skill_extend;//技能类型
    public $fighting_goods_enemy;//战斗奖励
    public $fighting_goods_my;//战斗奖励
    public $fighting_msg;//战斗提示
    public $poition_winner;//战斗结果
    public $attack_bout;//战斗回合--行动顺序--用于存储战斗结果顺序
    public $map_int;//系统战斗，获取map阵容编号时才会用到
    public $biology_int_extnd;//战斗回合容器，属性
    public $biology_id;//当前生物id
    function init(){
        $skill_extend = BiologySkillExtend::find()->asArray()->All();
        $this->skill_extend =  array_column($skill_extend,null,'extend');
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userId =  $this->user_info['userid'];
        $this->my_biology_extend = [];
        $this->do_biology_extend = [];
        $this->merge_biology_extend = [];
        $this->bout=0;//初始回合
        $this->merge_biology_first = [];
        $this->fighting_goods_enemy=[];//战斗奖励
        $this->fighting_goods_my=[];//战斗奖励
        $this->fighting_msg=[];//战斗提示
        $this->poition_winner=0;//战斗结果
        $this->attack_bout=0;
        $this->map_int=0;//map阵容编号
        $this->biology_int_extnd=[];
        $this->biology_int_extnd['keeptime']=[];
        $this->biology_int_extnd['dobout']=[];

        $this->biology_id=0;
    }
    public static function tableName(){
        return '{{x2_user_biology_nature_do}}';
    }


    //生物容器属性--回合增加或者减少
    public  function  getBiologyIntExtends($attack_biology_do,$data){
        // 每次只会进入一个属性
        // $data['keeptime']=0;//持续回合
        // $data['dobout']=0;//执行回合数
        // $data['type']=0;//1增加 0 减少
        // $data['data']=[]; //a['shengMing']=0;
        // $data['keeptime']=2;
        $list =[];
        //是否写入轮询
        if(!empty($data)){
            // $data['keeptime']=isset($data['keeptime'])?intval($data['keeptime']):0;
            // $data['dobout']=isset($data['dobout'])?intval($data['dobout']):0;
           if(!isset($this->biology_int_extnd['keeptime'][$this->biology_id][key($data['data'])][$data['keeptime']])){
                $this->biology_int_extnd['keeptime'][$this->biology_id][key($data['data'])][$data['keeptime']]=0;
            }
            if(!isset($this->biology_int_extnd['dobout'][$this->biology_id][key($data['data'])][$data['dobout']])){
                $this->biology_int_extnd['dobout'][$this->biology_id][key($data['data'])][$data['dobout']]=0;
            }
            //初始回合
            if($data['keeptime']>$this->bout){ //多回合写入轮询
                $this->biology_int_extnd['keeptime'][$this->biology_id][key($data['data'])][$data['keeptime']]+= $data['data'][key($data['data'])];//持续回合
            }
            if($data['dobout']>$this->bout){ //多回合写入轮询
                $this->biology_int_extnd['dobout'][$this->biology_id][key($data['data'])][$data['dobout']]+= $data['data'][key($data['data'])];//持续回合
            }
            //没有值，跳过
            if(!isset($list[key($data['data'])])){
                $list[key($data['data'])]=0;
            } 
            $list[key($data['data'])]+=$data['data'][key($data['data'])];
        }
        // var_dump($list);
        $attack_biology_do = (new UserBiologyAttribute())->getUserBiologyAttributeAddExtends($attack_biology_do,$list,0);
        // $attack_biology_do[$extend] =  (intval($attack_biology_do[$extend])+$hurt_go); //造成伤害，基础伤害+公式
        // var_dump($attack_biology_do['shengMing']);
        // $this->getFirstBiologyIntExtends($attack_biology_do);//进入轮询--初始化轮询
        return $attack_biology_do;
    }
    
    //生物容器属性--回合开始轮询
    public  function  getFirstBiologyIntExtends($attack_biology_do){
        //轮询生物容器
        $list =[];
        if($this->biology_int_extnd){
            //回合结束移除属性
            foreach($this->biology_int_extnd['keeptime'][$this->biology_id] as $key=> $v){
                foreach($v as $int_bout =>$int_value){
                    //当前回合大于终止回合，终止触发
                    if($this->bout>$int_bout){
                        $list[$key]-=$int_value;//计算到属性--减去之前增加的属性值
                        unset($this->biology_int_extnd['keeptime'][$this->biology_id][$key][$int_bout]);//失效就删除--当前回合
                    }
                }
            }
            //回合叠加属性
            foreach($this->biology_int_extnd['dobout'][$this->biology_id] as $key=> $v){
                foreach($v as $int_bout =>$int_value){
                     //当前回合大于终止回合，终止触发
                     if($this->bout>$int_bout){
                        $list[$key]+=$int_value;//计算到属性
                    }else{
                        unset($this->biology_int_extnd['dobout'][$this->biology_id][$key][$int_bout]);//失效就删除--当前回合
                    }
                }
            }
        }
        $attack_biology_do = (new UserBiologyAttribute())->getUserBiologyAttributeAddExtends($attack_biology_do,$list);
    }



    // 查询布阵生物-userid
    public  function getValueList($userid=false){
        $userid=$userid?:$this->userId;
        $data = UserBiologyNatureDo::find()->where("userid = $userid")->asarray()->One();
        return $data;
    }
    
    //随机敌人
    public  function getValueListRand($num=1){
        $data = UserBiologyNatureDo::find()->where("userid =0")->asarray()->One();
        $array =array(1,2,3,4,5,6,7,8,9);
        for($i=0;$i<$num;$i++){
            // if( intval($data["$dofind"])>0){
                    // $i++;
            // }
            $new = array_rand($array);
            $dofind ='do'.($new+1);
            $data["$dofind"] = $array[$new];
            unset($array[$new]);
        }
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
                    UserBiologyNatureDo::updateAll(["$do"=>$biologyid]," userid = $this->userId");
                }else{
                    return false; //位置已经满5个，需要移除
                }          
            }else{
                UserBiologyNatureDo::updateAll(["$do"=>'']," userid = $this->userId");
            }
        }
        return true;
    }
    //统计位置数量
    public  function addPositionCount(){
        $data = UserBiologyNatureDo::find()->where("userid = $this->userId")->asArray()->one();
        $num=0;
        for($i=1;$i<=9;$i++){
            $dofind ='do'.$i;
            if( intval($data["$dofind"])>0){
                    $num++;
            }
        }
        return $num;
    }


// ----------------------------------------
    //初始化定位 //----战斗开始前必须先跑这个--容器
    public function getBiologyInit($merge_biology_list){
        $biology = Method::setBiologyPosition($merge_biology_list,$this->bout); 
        // $this->my_biology_extend = Method::getBiologyPosition(POSITION_MY);
        // $this->do_biology_extend = Method::getBiologyPosition(POSITION_ENEMY);
        // $this->merge_biology_extend = Method::getBiologyPosition(MERGE_BIOLOGY);
        $this->my_biology_extend = $biology['my_biology_extend'];
        $this->do_biology_extend = $biology['do_biology_extend'];
        $this->merge_biology_extend = $biology['merge_biology_extend'];

    }
    //初始化只跑一次
    public function setBiologyInitFirst(){
        $this->bout=0;//初始回合
        $this->merge_biology_first = $this->merge_biology_extend;//保存初始化属性
        $this->fighting_goods_my['jingBi']=[];
        $this->fighting_goods_my['jingYan']=[];
        $this->fighting_goods_my['goods']=[];
        $this->fighting_goods_enemy['jingBi']=[];
        $this->fighting_goods_enemy['jingYan']=[];
        $this->fighting_goods_enemy['goods']=[];
        $this->fighting_msg=[];//战斗消息
    }
   
    public function fightingExtend($my_biology,$do_biology){
  
        //战斗属性调用
        $my_biology = $this->getFightAttribute($my_biology);//唯一调用己方生物
        $do_biology = $this->getFightAttribute($do_biology);//唯一调用地方生物
      
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
    public function getFightSystem($my_biology,$do_biology,$map_int=0){
        $this->map_int=$map_int;
        //战斗属性调用
        $merge_biology_list =$this->fightingExtend($my_biology,$do_biology);
        //设置容器--战斗初始化
        $this->getBiologyInit($merge_biology_list);  //----战斗开始前必须先跑这个
        $this->setBiologyInitFirst();//第一次初始化属性备用。
        //初始化阵容
        $UserWords= new UserWords();
        $poition_my =$UserWords->getFightingPosition(POSITION_MY,$this->my_biology_extend['position']);//返回坐标己方,初始英雄
        $poition_enemy =$UserWords->getFightingPosition(POSITION_ENEMY,$this->do_biology_extend['position']);//返回坐标敌方
        $biolgy_state =$UserWords->getBiolgyState(POSITION_ENEMY,$this->do_biology_extend['position']);//返回坐标敌方
        //开启循环战斗--初始回合
        $this->fighting();//返回战斗记录
        //返回战利品和战斗记录
        return [
            'fighting_goods_my'=>$this->fighting_goods_my,
            'fighting_goods_enemy'=>$this->fighting_goods_enemy,
            // 'fighting_msg'=>$this->fighting_msg,//文字提示记录
            'fighting_history'=>array_merge($this->fighting_history),//重置索引0
            'poition_winner'=>$this->poition_winner,
            'poition_my'=>$poition_my,
            'poition_enemy'=>$poition_enemy,
            'biolgy_state'=>$biolgy_state,
            'map_pic'=>"/app_resources/fighting/sence/".rand(1,6).".jpg",//随机地图
        ];
    }
    //重置容器
    public function getBiologyRelode(){
        $this->getBiologyInit($this->merge_biology_extend); //----每次战斗过后-重置一次容器
    }
    ///开启循环战斗--初始回合
    public function fighting(){
        $this->bout +=1;
        //  $this->bout++;
        // --主动和被动都是根据概率触发  --主动技能只保留一个
        $this->getFightDoing();//触发技能--循环技能--自方和敌方技能触发--
        $this->getFighHurt();//战斗伤害--循环技能--每次战斗 都要循环winner--胜利后跳出 返回战斗记录结果
        $poition_winner = $this->victory();//再次检查胜利者
        // 回合战斗结果写入记录
        // $this->fighting_history[$this->bout]['merge_biology_extend']=$this->merge_biology_extend;//回合结算状态
         // 胜利跳出循环  0无 1自己 2敌方
        if($poition_winner==POSITION_NO){
            $this->fighting();
        }else{
            $this->poition_winner=$poition_winner;//胜利者
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

        $biology_userid = $data['userid'];//阵容属于哪个单位，0系统 ，其它为玩家
        $UserBiologyAttribute =new UserBiologyAttribute();
        for($i=1;$i<=9;$i++){
            $dofind ='do'.$i;
            if(intval($data["$dofind"])>0){
                //基础属性
                $data["$dofind"]= $UserBiologyAttribute->getUserBiologyAttribute($data["$dofind"],$biology_userid,$this->map_int);
            }
        }
        return $data;
    }









    //战斗顺序
    public function getFightSort($data,$position_my){
        // suDu
        $r_data=[];
        for($i=1;$i<=9;$i++){
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
                }else{
                    $data["$dofind"]['position_skill'] = [];
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
            $position_skill = $this->getSkillValueList($position_skill,SKILL_GOING);//is_do 0被动   1 主动 和主动触发
            //当前回合主动触发的技能
            $this->merge_biology_extend[$key]['fight_skill'] = $position_skill['skill'];//回合的战斗技能
            $this->merge_biology_extend[$key]['is_skill'] = $position_skill['is_skill'];//回合的战斗技能是否触发主动技能
            // $data[$key]['fight_position'] = $position_skill['position'];//回合的战斗技能-攻击位置
            // $data[$key]['fight_attack'] = $position_skill['attack'];//技能对象 0无 自己 1 敌方2
        }
    }

    //获取触发技能--is_do 0被动   1 主动 和主动触发
    public function getSkillValueList($position_skill,$is_do){
        $position_skill=$position_skill?$position_skill:[];
        $skill_list =  $this->getFightSkill($position_skill); //是否触发技能--技能id数组
        $position_skill = array_intersect_key($position_skill,array_flip($skill_list));//返回触发的技能

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

    //获取生命>0的生物
    public function getShengMing($position_my=POSITION_MY){
        // //循环生物进行战斗
        // $position_my_list = Method::arrayfilter($this->merge_biology_extend,'position_my',POSITION_MY);//获取敌方阵容
        // $position_enemy_list = Method::arrayfilter($this->merge_biology_extend,'position_my',POSITION_ENEMY);//获取敌方阵容
        // // 获取生命>0的数据
        // $position_my_list = Method::arrayfilter($position_my_list,'shengMing',0,1);//获取敌方阵容
        // $position_enemy_list = Method::arrayfilter($position_enemy_list,'shengMing',0,1);//获取敌方阵容
        // 过滤生命=0的数据
        // $poition_winner = array_keys(array_filter(array_column($position,'shengMing')));
        //获取所有生物
        $position_list = Method::arrayfilter($this->merge_biology_extend,'position_my',$position_my);
        //获取生命>0的数据
        $position_list = Method::arrayfilter($position_list,'shengMing',0,1);//获取敌方阵容 
        return $position_list;
    }


    // 战斗伤害顺序
    public function getFighHurt(){
        $this->attack_bout=-1; //重新定义，每次加1 从0开始
        foreach($this->merge_biology_extend as $attack_biology){
            $attack_biology = $this->merge_biology_extend[$attack_biology['id']];//容器是变动的，这里要重新赋值
            //阵亡跳过回合
            if($attack_biology['shengMing']>0){
                $this->attack_bout+=1;//前端需要索引排序
                //发起顺序--根据情况选取普通攻击 putong   还是 技能攻击 do
                $this->fighting_history[$this->bout]['fighting_history'][$this->attack_bout]['h_need']=[];//技能--消耗（耗蓝）
                $this->fighting_history[$this->bout]['fighting_history'][$this->attack_bout]['h_go']=[];//技能--增幅（被动
                $this->fighting_history[$this->bout]['fighting_history'][$this->attack_bout]['h_do']=[];//技能--主动（攻击）
                $this->fighting_history[$this->bout]['fighting_history'][$this->attack_bout]['h_putong']=[];//普通攻击
                $this->fighting_history[$this->bout]['fighting_history'][$this->attack_bout]['h_back']=[];//技能 被动（反击）
                // 攻击位置计算
                $this->attackPosition($attack_biology); //主动攻击
            }
           $winner = $this->victory($this->bout);//战斗后--检查胜利者
            if($winner){
                if($winner==POSITION_MY){
                    $this->fighting_msg[]='胜利！';
                }else{
                    $this->fighting_msg[]='失败！'; 
                }
               //跳出循环
               break;
           }

        }  
        // var_dump($position_skill);die;

    }

    //发起消耗
    public function attackNeedValue($attack_biology,$skill){
        $position_my = $attack_biology['position_my'];//当前生物1自己  2敌方  
        $attack = intval($skill['attack']);//攻击对象 攻击对象0被攻击触发 自己使用1 敌方使用2
        // 发起消耗属性--魔法等--回血,回蓝等多种状态
        $goid =$attack_biology['id'];
        $need =$skill['need'];
        $attack_biology[$need] = $attack_biology[$need]+$skill['needValue'];
        $attack_biology['shengMing']= $attack_biology['shengMing']>=0?$attack_biology['shengMing']:0;//生命最低为0
        $attack_biology['moFa']=$attack_biology['moFa']>=0?$attack_biology['moFa']:0;//魔法最低为0
        //发起伤害
        $hurt_go_list = array(
            'position_my'=>$position_my,//发起单位 1己方 2敌方 
            'type'=>HURT_NEED,// 0普通攻击 1技能 
            'pid'=>$attack_biology['id'],//发起攻击位置
            'attack'=>$attack,//攻击类型
            'goid'=>$goid,//发起攻击位置
            'doid'=>$goid,//攻击单位id
            'is_do'=>SKILL_GOING,//0反击 1主动攻击
            'attack_biology_go'=>$attack_biology,//发起攻击单位
            'attack_biology_do'=>$attack_biology,//被攻击单位
            'skill'=>$skill,//发起攻击技能
            'hurt_go'=>$skill['needValue'],//发起伤害
            'extend'=>$need,//伤害类型
            'keeptime'=>$this->bout,//发起伤害持续回合
            'dobout'=>$this->bout,//执行回合数
        );
        $this->merge_biology_extend[$goid]=$attack_biology; //自己伤害结算--攻击走hurt ，消耗单独结算
        $this->getTips($hurt_go_list);
        return $attack_biology;
    }

    //攻击位置计算
    public function attackPosition($attack_biology){

        $position_in = $attack_biology['position'];//当前生物位置 
        $position_my = $attack_biology['position_my'];//当前生物1自己  2敌方  
        $fight_skill = $attack_biology['fight_skill'];//生物技能
        $is_skill = $attack_biology['is_skill'];//1主动技能  普通攻击0
        //类型列表
        $int=[];//攻击位置
        $position_type_list = BiologySkillPositionType::positionTypeList();
        $position_type=0;//定位类型
        $skill_attack=0;//主动攻击  0 普通  1技能--有技能就跳过普通攻击

        //没有技能直接主动攻击
        if($fight_skill ){
            foreach($fight_skill as $skill){
                $attack = intval($skill['attack']);//攻击对象 攻击对象0被攻击触发 自己使用1 敌方使用2
                $position = intval($skill['position']);    //战斗标记 攻击位置 --默认为 0 是普通攻击 ，有值为技能position_id--攻击位置
                $position_type = intval($skill['positionType']);//攻击对象类型 --优先攻击排序
                $belong = intval($skill['belong']);//主动--技能
                //发起技能，魔法够不够
                $isneed_value = $this->isNeedValue($attack_biology,$skill);
                if($isneed_value){
                    if($belong==ATTACK5){ //无主动技能--则进行普通攻击
                        $skill_attack=1;
                    }
                    //发起技能消耗--返回消耗后的状态，因为拿的是循环值--这里可以改为容器，根据id来
                    $attack_biology = $this->attackNeedValue($attack_biology,$skill);
                }else{
                    continue;
                }
                //获取阵容--每次技能过后需要重新获取生物状态
                $position_my_list_new   = $this-> getShengMing(POSITION_MY);
                $position_enemy_list_new= $this-> getShengMing(POSITION_ENEMY);
                //排序
                if($position_type){
                    $position_my_list_new= BiologySkillPosition:: getPositionType($position_type,$position_my_list_new,$position_type_list);
                    $position_enemy_list_new= BiologySkillPosition:: getPositionType($position_type,$position_enemy_list_new,$position_type_list);
                }
                $position_my_list_new  = array_column($position_my_list_new,'position'); //获取自己位置
                $position_enemy_list_new  = array_column($position_enemy_list_new,'position'); //获取敌人位置
                if($attack){ // 0 直接跳过--被攻击--被动跳过
                    //技能使用对象
                    $attaatt_positionck = $attack==POSITION_MY?$position_my_list_new:( $attack==POSITION_ENEMY?$position_enemy_list_new:[]);
                    if(in_array($position_my,array(POSITION_MY,POSITION_ENEMY))){  
                        $int= BiologySkillPosition::getPositionExtend($position_in,$position,$position_type,$attaatt_positionck,$attack);
                        // var_dump($skill);
                        // var_dump($int);
                        //循环攻击位置
                        foreach($int as $pid){
                            // is_do 0被动   1 主动 和主动触发
                            $this->attackSkill($position_my,$attack_biology,$pid,$skill,SKILL_GOING);
    
                        }
                        
                    } 
                    // var_dump($skill);//技能
                    // var_dump($int);die;//攻击位置
                }
            }
        }
        // var_dump($this->merge_biology_extend[170]);die;
        //没有主动技能--普通攻击
        if(!$skill_attack){
            //获取阵容--每次技能过后需要重新获取生物状态
            $position_my_list_new   = $this-> getShengMing(POSITION_MY);
            $position_enemy_list_new= $this-> getShengMing(POSITION_ENEMY);
            //攻击敌方单位
            // $attaatt_positionck = $position_my==POSITION_MY?$this->do_biology_extend['position']:( $position_my==POSITION_ENEMY?$this->my_biology_extend['position']:[]);
            // $attaatt_positionck  = array_column($attaatt_positionck,'position'); //获取自己位置
            $attaatt_positionck = $position_my==POSITION_MY?$position_enemy_list_new:( $position_my==POSITION_ENEMY?$position_my_list_new:[]);
            $attaatt_positionck  = array_column($attaatt_positionck,'position'); //获取自己位置
            $pid= BiologySkillPosition::getPositionExtend($position_in,0,false,$attaatt_positionck,POSITION_ENEMY);  
            if($pid){
                $this->attackPositionBlack($position_my,$attack_biology,$pid[0]);
                
            }
        }
        
        // var_dump($this->bout);
        // var_dump($this->fighting_history[$this->bout]['fighting_history'][170]);die;
        // var_dump($fight_skill);die;
    }

    //普通攻击
    public function attackPositionBlack($position_my,$attack_biology_go,$pid){
        $goid= $attack_biology_go['id'];//生物id 
        $gongJi= intval($attack_biology_go['gongJi']);
        $faGong=  intval($attack_biology_go['faGong']);
        $reiki=  intval($attack_biology_go['reiki']);
        if($gongJi>$faGong){
            $hurtType='gongJi';   
            $hurt_go = -($gongJi+$reiki*2);
        }else{
            $hurtType='faGong';  
            $hurt_go = -($faGong+$reiki*2);
        }
        //敌方生物存在，才能普通攻击
        $attack_biology_do = $this->attackBiologyDo($position_my,POSITION_ENEMY,$pid); //获取要攻击的敌方单位
        if($attack_biology_do){
            $doid= $attack_biology_do['id'];//生物id
            //发起伤害
            $hurt_go_list = array(
                'position_my'=>$position_my,//发起单位 1己方 2敌方 
                'type'=>HURT_PUTONG,// 0普通攻击 1技能 
                'pid'=>$pid,//发起攻击位置
                'attack'=>2,//攻击类型 0被动 1自己 2敌人
                'goid'=>$goid,//发起攻击位置
                'doid'=>$doid,//攻击单位id
                'is_do'=>SKILL_GOING,//0反击 1主动攻击
                'attack_biology_go'=>$attack_biology_go,//发起攻击单位
                'attack_biology_do'=>$attack_biology_do,//被攻击单位
                'skill'=>[],//发起攻击技能
                'hurt_go'=>$hurt_go,//发起伤害
                'extend'=>'shengMing',//伤害类型
                'keeptime'=>$this->bout,//发起伤害持续回合
                'dobout'=>$this->bout,//执行回合数
            );
            //发起技能消耗--返回消耗后的状态，因为拿的是循环值--这里可以改为容器，根据id来
            // $attack_biology = $this->attackNeedValue($attack_biology,$skill);

            // 发起提示
            $this->goHurt($hurtType,$hurt_go_list);//敌人
        }
    }

    //获取要攻击的敌方单位
    public function attackBiologyDo($position_my,$attack,$pid){
        //attack_biology发动攻击生物
        //attack_biology_do被攻击生物
        if($position_my == POSITION_MY && $attack==POSITION_MY){ //己方1->己方 1
            $attack_biology_do =  $this->my_biology_extend['position'][$pid];
        }else if($position_my == POSITION_MY && $attack==POSITION_ENEMY){//己方1->敌方2
            $attack_biology_do =  $this->do_biology_extend['position'][$pid];
        }else if($position_my == POSITION_ENEMY && $attack==POSITION_ENEMY){//敌方2->敌方1
            $attack_biology_do =  $this->my_biology_extend['position'][$pid];
        }else if($position_my == POSITION_ENEMY && $attack==POSITION_MY){//敌方2->己方2
            $attack_biology_do =  $this->do_biology_extend['position'][$pid];     
        }else{
            $attack_biology_do =[];
        }
        return $attack_biology_do;
    }
    //技能触发，造成伤害 is_do 0被动   1 主动 和主动触发
    public function attackSkill($position_my,$attack_biology_go,$pid,$skill_go,$is_do=0){
        $attack = intval($skill_go['attack']); //技能攻击对象
        $goid= $attack_biology_go['id'];//生物id
 
        $attack_biology_do = $this->attackBiologyDo($position_my,$attack,$pid); //获取要攻击的敌方单位
        if($attack_biology_do){
            $doid= $attack_biology_do['id'];//生物id
            // var_dump($skill_go);
            // var_dump($attack_biology_do);die; 

            // 发起伤害
            $this->attackSkillHurtValue($position_my,$doid,$pid,$attack_biology_go,$skill_go,$attack_biology_do,$is_do);
            // var_dump($attack_biology_go);die;
            // if($attack_biology_go)
            // 攻击的是敌方单位--触发被动
            // var_dump($attack_biology_do['position_my']);
            // if($position_my!=$attack_biology_do['position_my']){
            // var_dump($this->fighting_history[$this->bout]);die;
            //被动   //$goid 注意，攻击顺序不能变，这个是生物的速度攻击顺序
            // $this->fighting_history[$this->bout]['fighting_history'][$goid][]=$hurt_go;  
        }
    }

    //技能触发，造成伤害--容器--有增有减，可以清除--限定持续回合等  doid,//被攻击位置  attack_biology_do,//被攻击单位
    public  function attackSkillHurt($hurt_go){

        $attack_biology_go =$hurt_go['attack_biology_go'];//发起攻击
        $pid =$attack_biology_go['position'];//发起攻击位置
        $attack_biology_do=$hurt_go['attack_biology_do'];//被攻击---此处为被攻击者发起攻击
        $position_my = $attack_biology_do['position_my'];
        //当前回合被动触发的技能
        $position_skill = $this->getSkillValueList($attack_biology_do['position_skill'],0)['skill'];
        if($position_skill){ // 判断是否有被动技能，有才进入
            foreach($position_skill as $v_skill){
                //反击
                $this->attackSkill($position_my,$attack_biology_do,$pid,$v_skill,SKILL_DOING);//被动循环
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
    
        $status = $skill_go['status'];//伤害计算类型--如果不存在就是 特殊类型---公式伤害类型
        $formula = $skill_go['formula'];//公式
        $isadd = intval($skill_go['isadd']);//公式0减少1增加
        $value = intval($skill_go['value']);//伤害计算类型--每级增加30%
        $hurt = $skill_go['hurt'];//伤害固定值   zhaoHuan时-(生物id)
        $attack = intval($skill_go['attack']); //攻击类型 0被动 1触发 2主动
        $hurtType = $skill_go['hurtType']; //伤害类型 1物理 2法术
        if(isset($attack_biology_do[$status])){ 
            //属性存在的，普通的
            //计算伤害
            $hurt_go = Method::percentHurt($attack_biology_do[$status],$hurt,$value,$formula,$isadd);
        }else{
            //属性不存在，特殊的
            // 召唤--根据固定的生物id召唤
            // var_dump($status);die;
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
        }
        // if($extend=='baojilv'){
        //     var_dump($is_do);
        //     var_dump($hurt_go);die;
        // }
       $goid = $attack_biology_go['id'];
        //发起伤害
        $hurt_go_list = array(
            'position_my'=>$position_my,//发起单位 1己方 2敌方 
            'type'=>HURT_SKILL,// 0普通攻击 1技能 2消耗
            'pid'=>$pid,//发起攻击位置
            'attack'=>$attack,//攻击类型
            'goid'=>$goid,//发起攻击位置
            'doid'=>$doid,//攻击单位id
            'is_do'=>$is_do,//0反击 1主动攻击
            'attack_biology_go'=>$attack_biology_go,//发起攻击单位
            'attack_biology_do'=>$attack_biology_do,//被攻击单位
            'skill'=>$skill_go,//发起攻击技能
            'hurt_go'=>$hurt_go,//发起伤害
            'extend'=>$extend,//伤害类型
            'keeptime'=>$this->bout+$keeptime,//发起伤害持续回合
            'dobout'=>$this->bout+$dobout,//执行回合数
        );

        $this->goHurt($hurtType,$hurt_go_list);

        // return $hurt_go;
    }
    

    public function goHurt($hurtType,$hurt_go_list){
        $hurt_go= $hurt_go_list['hurt_go'];//发起伤害
        $hurt_do=0;//用于抵消的伤害
        // $hurt_type=$hurt_go_list['hurtType'];// 伤害类型 1物理 2法术 
        $attack_biology_go= $hurt_go_list['attack_biology_go'];
        $attack_biology_do= $hurt_go_list['attack_biology_do'];
        $attack= $hurt_go_list['attack'];
        $is_do= $hurt_go_list['is_do'];
        $extend= $hurt_go_list['extend'];
        $doid= $hurt_go_list['doid'];
        $goid= $hurt_go_list['goid'];
        $skill= $hurt_go_list['skill'];
        $keeptime= $hurt_go_list['keeptime'];
        $dobout= $hurt_go_list['dobout'];

        //获取闪避
        $gailv[0] =100*100;//失败几率
        $gailv[1] =100*$attack_biology_do['shanbi'];//成功几率
        $shanbi =Method::getRandGrade($gailv);//1触发 0无效
        //获取暴击伤害默认为150%,baojilv  0
        $baoji=0;
        //获取暴击率

        //是否主动技能--计算抵消伤害--（对敌伤害抵消计算）
        if($attack==POSITION_ENEMY){
            //计算抵消伤害
            if($hurtType=='gongJi'){ //gongJi
                $huJia = $attack_biology_do['huJia'];  
                $hurt_do = $huJia*0.8; 
            }else if($hurtType=='faGong'){
                $fakang = $attack_biology_do['fakang'];   
                $hurt_do = $fakang*0.8;
            }else if($hurtType=='reiki'){
                //直接抵消对应灵气伤害
                $reiki = $attack_biology_do['reiki'];
                $hurt_do=$reiki;
            }else{
                $hurt_do = 0; //默认为空，用于增减属性
            }
            //可以完全抵消伤害
            $hurt_go = $hurt_go+$hurt_do;
            $hurt_go = $hurt_go>=0?0:$hurt_go;//伤害最少为0
     
        }
        $not_out=1;//0跳过 1不跳过
        // if($is_do){ //0反击 1主动
            //主动---闪避直接跳过
            if($shanbi==0&&$attack==POSITION_ENEMY){ //攻击敌方单位，反弹伤害
                $not_out=1;
                $shanbi=0;
                //接收伤害
                // $attack_biology_do[$extend] =  (intval($attack_biology_do[$extend])+$hurt_go); //造成伤害，基础伤害+公式
                $this->attackSkillHurt($hurt_go_list);
                //反弹伤害   //$goid 注意，攻击顺序不能变，这个是生物的速度攻击顺序
            }else if($attack==POSITION_MY){
                $not_out=1;
                $shanbi=0;
                // 伤害结算
                // $attack_biology_do[$extend] =  (intval($attack_biology_do[$extend])+$hurt_go); //造成伤害，基础伤害+公式
            }else{
                // 攻击敌方--闪避时 --跳过 
                $not_out=0;
                $shanbi=1;
            }
        // }else{
            // 伤害结算
            // $attack_biology_do[$extend] =  (intval($attack_biology_do[$extend])+$hurt_go); //造成伤害，基础伤害+公式
        // }
 
        //属性处理
        if($not_out){
            $this->biology_id=$attack_biology_do['id'];
            $hurt_extend=[];
            $hurt_extend['keeptime']= intval($keeptime);//技能伤害持续回合
            $hurt_extend['dobout']= intval($dobout);//执行回合数
            $hurt_extend['data']=[$extend=>$hurt_go];//执行伤害
            // var_dump($hurt_extend);
            $attack_biology_do = $this->getBiologyIntExtends($attack_biology_do,$hurt_extend);
        }
        $attack_biology_do['shengMing']= $attack_biology_do['shengMing']>=0?$attack_biology_do['shengMing']:0;//生命最低为0
        $attack_biology_do['moFa']=$attack_biology_do['moFa']>=0?$attack_biology_do['moFa']:0;//魔法最低为0

        $attack_biology_do['shengMing']= $attack_biology_do['shengMing']>=$attack_biology_do['biology_start_extend']['shengMing']?$attack_biology_do['biology_start_extend']['shengMing']:$attack_biology_do['shengMing'];//生命最大为上限生命
        $attack_biology_do['moFa']=$attack_biology_do['moFa']>=$attack_biology_do['biology_start_extend']['moFa']?$attack_biology_do['biology_start_extend']['moFa']:$attack_biology_do['moFa'];//魔法最大为上限魔法

        // var_dump($attack_biology_do['shengMing']);
        //写入伤害提示
        $hurt_go_list['not_out'] = $not_out;//是否跳过行动
        $hurt_go_list['baoji'] = $baoji;//是否暴击
        $hurt_go_list['shanbi'] = $shanbi;//是否闪避
        $hurt_go_list['hurt_go'] = $hurt_go;//伤害--结果

        $hurt_go_list['attack_biology_do']=$attack_biology_do;//伤害结果赋值
        $this->merge_biology_extend[$doid]=$attack_biology_do; //敌人伤害结算
        $hurt_go_list =$this->getTips($hurt_go_list);
        // // 重新赋值--攻击对象（自己、友方、敌人）--叠加buff
        // $this->getBiologyRelode();//重置容器--攻击
    }
    //消耗属性，魔法，能否发起
    public function isNeedValue($attack_biology_go,$skill){
        $state =false;
        if($skill){
            // 判断是否满足技能发起条件
            $need =$skill['need'];
            $attack_biology_go[$need] = $attack_biology_go[$need]+$skill['needValue']; 
            if($attack_biology_go[$need]>=0){
                $state= true; 
            }else{
                $state= false; 
            }
        }
        return $state; 
    }
    //战斗buff--持续回合计算--写入回合--buff和生物id
    public function  keepBout($buff,$doid){


    }
    //回合结算-- status开始1结束0
    public function  goBout($doid,$status){
        

    }

    //生物回合状态结算--每个生物行动一次算一个回合 
    public function  goFightBout($hurt_go_list,$attack_biology_do){
        $extend = $hurt_go_list['extend'];//伤害类型
        //增加某些自定义字段
        $hurt_go_list['extend_name'] = $this->skill_extend[$extend]['name'];
        //写入提示
        if($hurt_go_list['descript_go']){
            $this->fighting_msg[]=$hurt_go_list['descript_go'];
        }
        if($hurt_go_list['descript_do']){
            $this->fighting_msg[]=$hurt_go_list['descript_do'];
        }
        //击杀触发--获取奖励--do
        if($attack_biology_do['shengMing']<=0&&$extend=='shengMing'){
            $goods_data =$this->getFightGoods($attack_biology_do);
            $hurt_go_list['descript_goods'] = $goods_data;
            $this->fighting_msg[]=$goods_data['descript_die'];
        }else{
            //空保留字段，不写入消息
            $hurt_go_list['descript_goods'] = [];
        } 
        //每次写入记录重置容器
        $this->getBiologyRelode();//重置容器--消耗
        //记录战后的生物状态
        $hurt_go_list['my_biology_extend']=$this->my_biology_extend;
        $hurt_go_list['do_biology_extend']=$this->do_biology_extend;
        $hurt_go_list['merge_biology_extend']=$this->merge_biology_extend;
        //字段太多，暂时先隐藏返回字段，保留id---json数据过大，去掉部分战斗中的字段
        unset($hurt_go_list['attack_biology_go']);
        // unset($hurt_go_list['attack_biology_do']);
        unset($hurt_go_list['merge_biology_extend']);
        //双方阵容改变数据
        unset($hurt_go_list['my_biology_extend']);
        unset($hurt_go_list['do_biology_extend']);
        //只返回改变的单位--并且删除多余数据
        unset($hurt_go_list['attack_biology_do']['descript']);//描述
        unset($hurt_go_list['attack_biology_do']['biology_start_extend']);//开始属性
        unset($hurt_go_list['attack_biology_do']['skill']);//技能
        unset($hurt_go_list['attack_biology_do']['position_skill']);//技能
        unset($hurt_go_list['attack_biology_do']['fight_skill']);//技能
        //去掉多余技能字段
        if($hurt_go_list['skill']){
            $hurt_go_list['skill']=array(
                'name'=>$hurt_go_list['skill']['name'],
                'image'=>$hurt_go_list['skill']['image'],
                'belong'=>$hurt_go_list['skill']['belong'],
                'xiaoguo'=>$hurt_go_list['skill']['xiaoguo'],
                'position_msg'=>$hurt_go_list['skill']['position_msg'],
                'positionType_msg'=>$hurt_go_list['skill']['positionType_msg'],
            );
        }
        unset($hurt_go_list['attack_biology_do']); //去掉伤害结果生物
        if(isset($attack_biology_do[$hurt_go_list['extend']])){
            $hurt_go_list['hurt_go_value'] =$attack_biology_do[$hurt_go_list['extend']]; //只保留伤害结果数值
        }else{
            $hurt_go_list['hurt_go_value'] = 0; //特殊字段不做伤害处理,如召唤。三围
        }
        // var_dump($attack_biology_do);
        // var_dump($hurt_go_list);
        return $hurt_go_list;
    }


    //战斗结果 $is_go 0发起攻击  1发起消耗
    public function getTips($hurt_go_list){   
        $UserWords= new UserWords();
        if($hurt_go_list['position_my']==POSITION_MY){
            $position_int =$UserWords->getFightingPosition(POSITION_MY,$this->my_biology_extend['position'],$hurt_go_list['doid']);//返回坐标己方,初始英雄
        }else if($hurt_go_list['position_my']==POSITION_ENEMY){
            $position_int =$UserWords->getFightingPosition(POSITION_ENEMY,$this->do_biology_extend['position'],$hurt_go_list['doid']);//返回坐标敌方
        }
        $hurt_go_list['int_x'] =$position_int['x'];//攻击的坐标x
        $hurt_go_list['int_y'] =$position_int['y'];//攻击的坐标y
        $hurt_go_list['descript_go']='';//消耗
        $hurt_go_list['descript_do']='';//伤害
        $doid = $hurt_go_list['doid'];//伤害类型
        $attack_biology_go= $hurt_go_list['attack_biology_go'];
        $attack_biology_do= $hurt_go_list['attack_biology_do'];
        $skill= $hurt_go_list['skill'];
        $shanbi= isset($hurt_go_list['shanbi'])?intval($hurt_go_list['shanbi']):0;
        $type=$hurt_go_list['type'];//攻击类型 0普通攻击  1技能攻击  2发起消耗 
        $hurt_go=intval($hurt_go_list['hurt_go']);//取整显示
        $is_do= $hurt_go_list['is_do'];
        // var_dump($shanbi);
        //不是普通攻击，技能攻击时
        if($type==HURT_PUTONG){
            $attack=$hurt_go_list['attack'];//攻击对象 
        }else{
            $attack=$skill['attack'];//攻击对象
            $belong = intval($skill['belong']);//主动--技能
        }
        $hurt_go_list['hurt_msg']= $hurt_go>=0?'+'.$hurt_go:$hurt_go;

        // $hurt_go_list['sm_msg_go']=  $attack_biology_go['shengMing'].'/'.$attack_biology_go['biology_start_extend']['shengMing'];
        // $hurt_go_list['sm_msg_do']=  $attack_biology_do['shengMing'].'/'.$attack_biology_do['biology_start_extend']['shengMing'];
        // $hurt_go_list['mofa_msg_go']=  $attack_biology_go['moFa'].'/'.$attack_biology_go['biology_start_extend']['moFa'];
        // $hurt_go_list['mofa_msg_do']=   $attack_biology_do['moFa'].'/'.$attack_biology_do['biology_start_extend']['moFa'];
        $sm_go = $attack_biology_go['name'].'生命('.$attack_biology_go['shengMing'].'/'.$attack_biology_go['biology_start_extend']['shengMing'].')    ';
        $sm_do = $attack_biology_do['name'].'生命('. $attack_biology_do['shengMing'].'/'.$attack_biology_do['biology_start_extend']['shengMing'].')    ';
        $sm_do .= '魔法('. $attack_biology_do['moFa'].'/'.$attack_biology_do['biology_start_extend']['moFa'].')    ';
        $sm_go .= '魔法('.$attack_biology_go['moFa'].'/'.$attack_biology_go['biology_start_extend']['moFa'].')    ';
        // 0普通攻击  1技能攻击  2发起消耗 
        if($type==HURT_PUTONG){
            $hurt_go_list['descript_go'] =$sm_go.'普通攻击';
            if($shanbi){
                $hurt_go_list['descript_do'] =$sm_do.'闪避';
            }else{
                $hurt_go_list['descript_do'] =$sm_do.$this->skill_extend['shengMing']['name'].$hurt_go_list['hurt_msg'];
            }
            $hurt_go_list =$this->goFightBout($hurt_go_list,$attack_biology_do);   //生物回合状态结算
            $this->fighting_history[$this->bout]['fighting_history'][$this->attack_bout]['h_putong'][]= $hurt_go_list; //普通攻击
        }else if($type==HURT_SKILL){  
            if($shanbi==1&&$attack==POSITION_ENEMY){
                $hurt_go_list['descript_do'] =$sm_do.'闪避';
            }else{
                $hurt_go_list['descript_do'] =$sm_do.$this->skill_extend[$skill['extend']]['name'].$hurt_go_list['hurt_msg'];
            }
            $hurt_go_list =$this->goFightBout($hurt_go_list,$attack_biology_do);   //生物回合状态结算
            //  0被动反击   1 主动攻击 和主动触发
            if($is_do==SKILL_GOING){
                if($belong==ATTACK5){
                    $this->fighting_history[$this->bout]['fighting_history'][$this->attack_bout]['h_do'][]= $hurt_go_list; //技能--主动（攻击）
                }else{
                    $this->fighting_history[$this->bout]['fighting_history'][$this->attack_bout]['h_go'][]= $hurt_go_list; //技能--增幅（被动）
                }
            }else{
                $this->fighting_history[$this->bout]['fighting_history'][$this->attack_bout]['h_back'][]= $hurt_go_list; //技能（反击）
            }
        }else if($type==HURT_NEED){  
            $need =$skill['needValue']!=0? $this->skill_extend[$skill['need']]['name'].$skill['needValue']:'';
            $hurt_go_list['descript_go'] =$sm_go.'触发技能【'.$skill['name'].$skill['belong'].'】';
            $hurt_go_list['descript_go_msg'] = '【'.$skill['name'].'】';
            if($need){    //无消耗为空
                $hurt_go_list['descript_do'] =$sm_do.$need;  
            }
            $hurt_go_list =$this->goFightBout($hurt_go_list,$attack_biology_do);   //生物回合状态结算
            $this->fighting_history[$this->bout]['fighting_history'][$this->attack_bout]['h_need'][]= $hurt_go_list; //技能--消耗（发起消耗）
        }
        return $hurt_go_list;
    }
    
    //击杀触发--结算奖励
    public function  getFightGoods($attack_biology_do){
        $data=[];
        $jingBi = $attack_biology_do['jingBi'];
        $jingYan= $attack_biology_do['jingYan'];
        $goods  = (new UserGoods)->userGoodsRand($attack_biology_do['lucky']); //随机奖励物品
        //敌方阵亡，己方获取奖励
        if($attack_biology_do['position_my']==POSITION_ENEMY){
            $this->fighting_goods_my['jingBi'] = intval($this->fighting_goods_my['jingBi'])+$jingBi;
            $this->fighting_goods_my['jingYan'] = intval($this->fighting_goods_my['jingYan'])+$jingYan;
            $this->fighting_goods_my['goods']= array_merge($this->fighting_goods_my['goods'],$goods);
        }else{
            $this->fighting_goods_enemy['jingBi'][]= intval($this->fighting_goods_my['jingBi'])+$jingBi;
            $this->fighting_goods_enemy['jingYan'][]= intval($this->fighting_goods_my['jingYan'])+$jingYan;
            $this->fighting_goods_enemy['goods']= array_merge($this->fighting_goods_my['goods'],$goods);
        }
        //是否掉落物品
        if($goods){
            $goods_msg = "死亡掉落金币：$jingBi ,经验：$jingYan ,物品：《".implode( "》《",array_column($goods,'name'))."》";
        }else{
            $goods_msg = "死亡掉落金币：$jingBi ,经验：$jingYan ";
        }
        //生物描述
        $sm_do = $attack_biology_do['name'].'生命('. $attack_biology_do['shengMing'].'/'.$attack_biology_do['biology_start_extend']['shengMing'].')    ';
        $sm_do .= '魔法('. $attack_biology_do['moFa'].'/'.$attack_biology_do['biology_start_extend']['moFa'].')    ';
        $descript_die = $sm_do.'击杀！'.$goods_msg;
        //返回数组
        $data = array(
        'jingBi'=>$jingBi,
        'jingYan'=>$jingYan,
        'goods'=>$goods,
        'goods_msg'=>$goods_msg,
        'descript_die'=>$descript_die,
        );
        return  $data;
    }






    

}
