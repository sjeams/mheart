<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
//用户生物列表
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use app\libs\Method;

use app\modules\admin\models\User;
use app\modules\admin\models\BiologyState;
use app\modules\app\models\getBiologyRand;
use app\modules\admin\models\BiologyCreate;
use app\modules\app\models\UserBiologyNatureDo;
use yii;

class UserWords extends ActiveRecord
{
    public $user_info; 
    public $userId;
    public $wordId; 
    public $user_in_word;//正在进行的世界
    public $user_in_word_map;//正在进行的世界

    public $int_biology;//生成生物
    public $int_grade;//生成生物等级
    public $int_yiXing;//生成生物是否特殊--boos
    public $int_yiXing_biology;//异形生物id
    public $int_biology_id;//生物id 为阵法编号1-9
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userId =  $this->user_info['userid'];
        $this->wordId =  $this->user_info['wordid'];
        $this->int_biology =[];
        $this->int_grade =0;
        $this->int_yiXing =1;
        $this->int_yiXing_biology =0;
        $this->int_biology_id=0;
        //没有id不用查询
        if($this->wordId){
            $this->getUserWordIn();
        }
    }
    public static function tableName(){
        return '{{x2_user_words}}';
    }

    //重置世界信息
    public  function getUserWordIn(){
        $sql ="SELECT u.*,ul.star,ul.num,ul.map,ul.complete,ul.map_pic from {{%user_words}} ul INNER JOIN {{%words}} u on ul.wordid=u.id  where ul.userid=$this->userId and ul.complete=0";
        $this->user_in_word = Yii::$app->db->createCommand($sql)->queryOne();
        if($this->user_in_word){
            $this->user_in_word_map =  json_decode($this->user_in_word['map'],true);//生物地图
            // var_dump($this->user_in_word);die;
            $this->wordId=$this->user_in_word['id'];//重新获取当前世界id
            $this->user_in_word['user_in_word_map']=$this->user_in_word_map;
        }
    }

    // 查询世界
    public  function getUserWord(){
        return $this->user_in_word;
    }
    // 进入世界
    public  function inUserWord($wordid,$star=1){
        $star =intval($star)<1?1:$star;//最少1星
        UserWords::updateAll(['complete' => 1],"userid =$this->userId and complete!=1");
        $word = UserWords::find()->where("userid=$this->userId and wordid =$wordid")->one();
        $map_id =rand(1,2);
        if($word){
            $word->complete =0;
            $word->star =$star;//世界等级--每级对应一个等级上限--提升后的等级不等于世界等级， 世界等级是可以提升的。
            $word->map_pic =  "/app_resources/word/地图".$map_id.".jpg";//随机地图
            $word->save();
        }else{
           $word = new UserWords();
           $word->wordid = $wordid;
           $word->userid = intval($this->userId);
           $word->complete =0;//
           $word->star =$star;//世界等级--每级对应一个等级上限--提升后的等级不等于世界等级， 世界等级是可以提升的。
           $word->map_pic =  "/app_resources/word/地图".$map_id.".jpg";//随机地图
           $word->save();
        }
        $this->getUserWordIn();//重新进入世界--重置状态
        $this->getUserSence();//生成场景
        User::updateAll(['wordid' =>$wordid],"userid =$this->userId");//记录当前世界
    }
    //退出世界
    public  function outUserWord(){
        UserWords::updateAll(['complete' => 1],"userid =$this->userId and complete!=1");
        User::updateAll(['wordid' => 0],"userid =$this->userId");
    }


    //获取世界场景
    public  function getUserSence(){
        //生成地图坐标，随机事件个数3-10个事件，只能选择3次。   
        $map_int = $this->getWordsMapInt();
        $map = $this->getWordsMapIntBiology($map_int);//生成地图生物
        // 存入地图
        $this->updateValueListSystem($map);
    }
    //世界地图--九宫格--坐标计算
    public  function getWordsMap(){
        // 1334*970--划分成24块6*4  200*200正方体--内部像素可以划分为120*80
        // 1200/6=200  600/4 =175
        $map=[];
        $height = (intval(750-600)/2);
        $left = intval((1334-1200)/2);
        for($num=0;$num<24;$num++){
            $x = intval($num%6);//x计算1-6
            $y = intval($num/6);//y计算1-4
            $map[$num]['x']=$left+200*$x;
            $map[$num]['y']=$height+150*$y;
        }
        return $map;
    }
    //战斗地图--九宫格--坐标计算 24个格子
    public  function getFightingMap($num_int=0){
        //3x8  24个格子
        // 1334*970--划分成24块6*4  200*200正方体--内部像素可以划分为120*80
        // x=1200/ 6*200  y= 600/ 3*200
        // $last_num =$num_int+9;
        $map=[];
        $left = intval((1334-(6*180))/2);
        $height = (intval(750-(3*180))/2);
        // for($num=$num_int;$num<$last_num;$num++){
        //     $key++;
        //     $x = intval($num%8);//x计算1-6
        //     $y = intval($num/3);//y计算1-4
        //     $map[$key]['x']=$left+150*$x;
        //     $map[$key]['y']=$height+150*$y;
        // }
        $key=0;
        if($num_int<=0){
            // x= 3 x=2 x=1  
            // y=3 y=2 y=1
           $x_list = array(3,2,1);
           $y_list = array(3,2,1);
        }else{
            // x= 6 x=7 x=8  
            // y=3 y=2 y=1
            $x_list =array(4,5,6);
            $y_list = array(3,2,1);
        }
        foreach($x_list as $x){
            foreach($y_list as $y){
                $key++;
                $map[$key]['x']=$left+180*($x-1);//0开始
                $map[$key]['y']=$height+180*($y-1);//0开始
            }
        }
        
        // var_dump($map);die;
        return $map;
    }
    //获取坐标 $doid 0  坐标列表， 有值 ，返回生物id 的坐标
    public  function getFightingPosition($myint=POSITION_MY,$biology,$doid=0){
        if($myint==POSITION_MY){
            //自己位置
            $postition=$this->getFightingMap(0);
        }else{
            //敌方位置
            $postition=$this->getFightingMap(15);
        }
        //生物入阵
        foreach($postition as $k=>$v){
            $new_biology = $biology[$k];
            if(!empty($biology[$k])){
                unset($new_biology['biology_start_extend']);
                $postition[$k]['id']=$new_biology['id'];
            }else{
                 $postition[$k]['id']=0;
            }
            $postition[$k]['biology']=$new_biology;
        }
        //三个函数都可以重置函数0---坐标列表
        $postition= array_merge($postition); // 前端只能0开始
        // array_column($postition,null);
        // array_merge($b)
        // array_splice($b,0,$count,true)
        //生物id 坐标计算--获取生物坐标
        if($doid){
            // var_dump( $postition);
            $position_int = array_column($postition,'id');
            $postition =$postition[array_search($doid,$position_int)];
            unset($postition['biology']);
        }
        return $postition;
    }

    //获取生物属性
    public  function getBiolgyState(){
       $data =  BiologyState::find()->select('name')->asArray()->all();
       return array_column($data,'name');
    }
    // POSITION_ENEMY


    //获取随机3-10个坐标
    public  function getWordsMapInt(){
        //随机事件个数3-10个事件，只能选择3次。
        $rand =rand(MAP_RAND_MIN,MAP_RAND_MAX);
        //划分九宫格
        $map = $this->getWordsMap();
        $arr = [];
        $map_int =Method::arrayRandArray($map,$rand);//随机3个定位
        foreach($map_int as $v){
            $arr[]=$map[$v];
        }
        return  $arr;
    }
    //生成生物
    public  function getWordsMapIntBiology($map_int){
        foreach($map_int as$key=>$v){
            // 生物个数
            $map_int[$key]['map_int']=$key;
            $map_int[$key]['map_status']=1;//1正常，0死亡
            $difficult= intval($this->user_in_word['difficult']);//1-5世界等级--低武，高武
            $star= intval($this->user_in_word['star']);//1-5难度--世界难度--普通，仙人
            $total=rand($difficult,($star+$difficult));//阵容个数--最多9个
            $total= $total>9?9:$total;//生物数量
            $map_int[$key]['total']=$total;//生物数量
            $yiXing=rand(1,BIOLOGY_STATE_GRADE_SYSTEM_NUM);//1倍 2倍 境界*10难度等级
            if($yiXing>1){
                $this->int_yiXing_biology=rand(1,$total);//随机异形生物id
            }else{
                $this->int_yiXing_biology=0;
            }
            $map_int[$key]['yiXing']= $yiXing;//变异生物，特殊--变异生物等级翻倍--奖励翻倍
            $this->int_grade = rand($star,$yiXing*BIOLOGY_STATE_GRADE_SYSTEM*$difficult+$star);//阵容最高等级
            $map_int[$key]['grade']= $this->int_grade+intval($this->user_info['grade']);//最大等级，生物额外等级--提升的难度等级--用户等级+额外等级=生物等级--每个星级提升10级
            //随机阵容
            $UserBiologyNatureDo =new UserBiologyNatureDo();
            $nature_do = $UserBiologyNatureDo->getValueListRand($total);//可以指定敌人个数
            $map_int[$key]['nature_do']=$nature_do;//阵容
    
            //随机生物--查看阵容里面是否有id
            $biology_list=[];
        
            for($i=1;$i<=9;$i++){
                $dofind ='do'.$i;
                if(intval($nature_do["$dofind"])>0){
                    //生成生物
                    $this->int_biology_id =$nature_do["$dofind"];
                    $biology_list[] = $this->getBiologyRandSystem();//固定id为阵法id 1-9
                    // $biology_list[$i] = $this->getBiologyRandSystem();//固定id为阵法id 1-9
                }
            }
            $map_int[$key]['biology_list']=$biology_list;//阵容
        }
        return $map_int;
    }


    // 根据征服世界随机生物id
    public static function BiologyRandSystem($wordid,$num=1){  //默认管理员，数量为1
        // $wordid= UserWords::find()->select('wordid')->where("userid =$userid and complete = 1")->asarray()->All();
        // $wordid=  implode(',',array_column($wordid, 'wordid'));
        //  var_dump($wordid);die;     
        $biologyid = (new \yii\db\Query())
        ->select("a.name,a.*")
        ->from("x2_biology AS a")
        ->leftJoin("x2_words AS b","a.wordid = b.id")
        ->where(['or' , ['a.wordid' =>'1'] ,['a.wordid' => $wordid]] )    // 先满足后面的条件
        // ->where(['a.id' =>'18'] ) 
        ->andWhere(['a.zhujiao' =>0])//不能是主角
        ->limit($num)
        ->orderBy("rand()")
        ->All();
        return $biologyid;
    }
    //指定世界的生物
    public  function getBiologyRandSystem(){
        // $type = $this->user_info['word_type'];
        //系统随机获取一个生物 
        $this->int_biology = UserWords :: BiologyRandSystem($this->wordId)[0]; //默认管理员-数量1 --返回数组 
        $this->int_biology['userBiologyid']=$this->int_biology['id'];//生物来源id
        $this->int_biology['id']= $this->int_biology_id;//生物id改为阵法id
        $this->int_biology = $this->getBiologyRandGradeSystem();
        $userbiology = User::biolobyChange($this->int_biology);//获取战斗属性
        $userbiology['state']= $this->getBiologyRandStateSystem();//随机境界  
        $userbiology['state_name']= BiologyState::getValueFind($userbiology['state']);//境界名称  
        // var_dump($userbiology);die;
        return  $userbiology;
    }
    //定义等级，境界
    public  function getBiologyRandGradeSystem( ){
        // $createid = Yii::$app->request->post('createid');
        // $create = BiologyCreate::find()->where("id=$createid")->One();
        $star=intval($this->user_in_word['star']);
        $biology=$this->int_biology;
        if($this->int_yiXing_biology== $this->int_biology_id){
            //特殊生物 boss
            $biology['yiXing']=1;
            $grade=$this->int_grade;
        }else{
            //普通生物
            $biology['yiXing']=0;
            $grade=rand($star,$this->int_grade);
        }
        // 白值属性计算
        $res = BiologyCreate::getExperience($biology,$biology,$grade);//属性没有变化或者强化，就用原属性 1+99  =100级
        $biology['grade']=$res['newGrade'];
        $biology['maxNature']=$res['maxNature'];
        $biology['experience']=$res['experience'];
        $biology['power']=$res['power'];
        $biology['agile']=$res['agile'];
        $biology['intelligence']=$res['intelligence'];
        $biology['reiki']=$res['reiki'];
        return $biology;
    }
    public  function getBiologyRandStateSystem(){
       $difficult = intval($this->user_in_word['difficult']);
       $star =  intval($this->user_in_word['star']);
    //    $total = $difficult+$star;
    //    $total = $total>20?20:$total;
    //    $state =rand($difficult,$total);
       $state=  Words::getUserWordStateRand($difficult,$star);
       return $state;
    }

    //返回地图编号  nature_do    biology_list  
    public  function getMapValueListSystem($id=null,$name=null){
        //不存在地图，返回空
        if(!isset($this->user_in_word_map[$id])){
            return [];
        }
       if(isset($id)&&isset($name)){
            return $this->user_in_word_map[$id][$name];
       }else if(isset($id)&!isset($name)){
            return $this->user_in_word_map[$id];
       }else{
            return $this->user_in_word_map;
       }
    }
    public  function updateValueListSystem($map){
        $map=json_encode($map,true);
        $word = UserWords::find()->where("userid=$this->userId and wordid =$this->wordId")->one(); 
        $word->complete =0;//改变世界状态
        $word->map =$map;//世界等级--每级对应一个等级上限--提升后的等级不等于世界等级， 世界等级是可以提升的。
        $word->save();
        $this->getUserWordIn();//重新进入世界--重置状态
    }
    //修改地图状态
    public  function updateMapSystemDie($map_int,$map_status=0){
        $map = $this->user_in_word['user_in_word_map']; 
        if(isset($map[$map_int])){
            $map[$map_int]['map_status']=$map_status;//修改为已击杀
        }
        $this->updateValueListSystem($map);
    }

 
}
