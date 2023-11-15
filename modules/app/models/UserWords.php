<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
//用户生物列表
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use app\modules\app\models\User;
use app\modules\app\models\getBiologyRand;
use app\modules\app\models\UserBiologyNatureDo;
use yii;

class UserWords extends ActiveRecord
{
    public $user_info; 
    public $userid;
    public $wordId; 
    public $user_in_word;//正在进行的世界
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
        $this->wordId =  $this->user_info['wordId'];
        if($this->wordId){
            $sql ="SELECT u.*,ul.star,ul.num,ul.biology,ul.complete from {{%user_words}} ul INNER JOIN {{%words}} u on ul.wordId=u.id  where ul.userid=$this->userid and ul.complete=0";
            $this->user_in_word = Yii::$app->db->createCommand($sql)->queryOne();
        }
    }
    public static function tableName(){
        return '{{x2_user_words}}';
    }

    // 查询世界
    public  function getUserWord(){
        return $this->user_in_word;
    }
    // 进入世界
    public  function inUserWord($wordId,$star=1){
        $star =intval($star);
        UserWords::updateAll(['complete' => 1],"userid =$this->userid and complete!=1");
        $word = UserWords::find()->where("userid=$this->userid and wordId =$wordId")->one();
        if($word){
            $word->complete =0;
            $word->star =$star;//世界等级--每级对应一个等级上限--提升后的等级不等于世界等级， 世界等级是可以提升的。
            $word->save();
        }else{
           $word = new UserWords();
           $word->wordId =$wordId;
           $word->userid =$this->userid;
           $word->complete =0;//
           $word->star =$star;//世界等级--每级对应一个等级上限--提升后的等级不等于世界等级， 世界等级是可以提升的。
           $word->save();
        }
        $this->getUserSence();//生成场景
        User::updateAll(['wordId' =>$wordId],"userid =$this->userid");//记录当前世界
    }
    //退出世界
    public  function outUserWord(){
        UserWords::updateAll(['complete' => 1],"userid =$this->userid and complete!=1");
        User::updateAll(['wordId' => 0],"userid =$this->userid");
    }


    //获取世界场景
    public  function getUserSence(){
        //生成地图坐标，随机事件个数3-10个事件，只能选择3次。   
        $map_int = $this->getWordsMapInt();
        $map = $this->getWordsMapIntBiology($map_int);//生成地图生物
        var_dump($map);die;
    }
    //世界地图--九宫格--坐标计算
    public  function getWordsMap(){
        // 1334*970--划分成24块6*4  200*200正方体--内部像素可以划分为120*80
        // 1200/6=200  800/4 =200
        $map=[];
        $left = (intval(970-800)/2);
        $height = intval((1334-1200)/2);
        for($num=0;$num<24;$num++){
            $x = intval($num%6);//x计算
            $y = intval($num/6);//y计算
            $map[$num]['x']=$left+200*$x;
            $map[$num]['y']=$height+200*$y;
        }
        return $map;
    }
    //获取随机3-10个坐标
    public  function getWordsMapInt(){
        //随机事件个数3-10个事件，只能选择3次。
        $rand =rand(3,10);
        //划分九宫格
        $map = $this->getWordsMap();
        $map_int =array_rand($map,$rand);//随机3个定位
        $arr = [];
        foreach($map_int as $v){
            $arr[]=$map[$v];
        }
        return  $arr;
    }
    //生成生物
    public  function getWordsMapIntBiology($map_int){
        foreach($map_int as$key=>$v){
            // 生物个数
            $difficult= intval($this->user_in_word['difficult']);//1-5世界等级
            $star= intval($this->user_in_word['star']);//1-5难度
            $num= $difficult+$star;
            $num=$num<9?$num:9;
            $total=rand(1,$num);
            
            //随机阵容
            $UserBiologyNatureDo =new UserBiologyNatureDo();
            $nature_do = $UserBiologyNatureDo->getValueListRand($total);//可以指定敌人个数
            $map_int[$key]['nature_do']=$nature_do;//阵容
            
            //随机生物--查看阵容里面是否有id
            $biology_list=[];
            for($i=0;$i<=9;$i++){
                $dofind ='do'.$i;
                if(intval($nature_do["$dofind"])>0){
                    //生成生物
                    $UserBiology= new UserBiology(); 
                    $data = $UserBiology->getBiologyRandSystem();
                    $biology_list[]=$data;
                }
            }
            $map_int[$key]['biology_list']=$biology_list;//阵容
        }
        return $map_int;
    }
}
