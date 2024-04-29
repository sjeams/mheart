<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
// 生物属性
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use app\modules\app\models\Words;

use app\modules\admin\models\BiologyCreate;


use app\modules\admin\models\User;
use app\modules\admin\models\BiologyState;

use app\modules\admin\models\BiologyBiology;
use app\modules\admin\models\BiologySkill;
use app\modules\app\models\UserWords;

use app\modules\app\models\UserGoods;

use app\modules\app\models\UserBiologyNatureDo;



use yii;
class UserBiologyAttribute extends ActiveRecord
{
    public $user_info; 
    public $userId; 
    public $biologyid; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userId =  $this->user_info['userid'];
        $this->wordid =  $this->user_info['wordid'];
    }
    public static function tableName(){
        return '{{x2_user_biology_attribute}}';
    }
    //统计总数==上限不能超过20个
    public  function getUserBiologyAttributeCount(){
        $count = UserBiologyAttribute::find()->where("userid=$this->userId")->count();
        return $count;
    }



    //上阵序号 排列  0-9
    public  function  myAttributesListPositionNum(){  
        $info = UserBiologyNatureDo::find()->where("userid=$this->userId")->asarray()->One();
        $data = (new \yii\db\Query())
        ->select("a.userBiologyid")
        ->from("x2_user_biology_attribute AS a")
        ->innerJoin("x2_user_biology AS b","a.userBiologyid = b.id")
        ->where("a.userid=$this->userId")
        ->All();
        $data =array_column($data,'userBiologyid');

        $new_data =[];
        for($i=1;$i<=9;$i++){
            $dofind ='do'.$i;
            if(intval($info["$dofind"])>0){
                //获取生物序号
                $new_data[] =   array_search($info["$dofind"],$data);
            }else{
                $new_data[] =null; 
            }
        }
        return $new_data;
    }



    public  function  myAttributesList(){  
        // $UserWords =new UserWords();
        // $UserGoods = new UserGoods();
        $BiologyState= $this->BiologyState();
        $BiologyBiology= $this->BiologyBiology();
        // $data = UserBiologyAttribute::find()->select('*')->where("userid=$this->userId")->asarray()->All();  
        $data = (new \yii\db\Query())
        ->select("a.*,b.power max_power,b.agile max_agile,b.intelligence max_intelligence")
        ->from("x2_user_biology_attribute AS a")
        ->innerJoin("x2_user_biology AS b","a.userBiologyid = b.id")
        ->where("a.userid=$this->userId")
        ->All();

        foreach($data as $k=>$info){
            $data[$k] = $this-> biologyInfo($info,$BiologyState,$BiologyBiology);      
        }
        return $data;
    }

    public   function BiologyState(){
        //境界
        $BiologyState = BiologyState::getValueList();
        $BiologyState =   array_column($BiologyState,null,'id');
        return $BiologyState;
    }
    public   function BiologyBiology(){
        //种族
        $BiologyBiology = BiologyBiology::getValueList();
        $BiologyBiology =   array_column($BiologyBiology,null,'id');  
        return $BiologyBiology;
    }


   public   function getBiologyDetail($biology_id){
        $info = (new \yii\db\Query())
        ->select("a.*,b.power max_power,b.agile max_agile,b.intelligence max_intelligence")
        ->from("x2_user_biology_attribute AS a")
        ->innerJoin("x2_user_biology AS b","a.userBiologyid = b.id")
        ->where("a.userid=$this->userId and a.id =$biology_id")
        ->One();
        $BiologyState= $this->BiologyState();
        $BiologyBiology= $this->BiologyBiology();
        return  $this-> biologyInfo($info,$BiologyState,$BiologyBiology);   
   }

    //查看详情
    public    function biologyInfo($info,$BiologyState,$BiologyBiology){
        
        //计算需要晋级的经验
        $res = BiologyCreate::getExperience($info,[]);
        $info['need_expe'] ='exp:'.$res['lessExp'].'/'.$res['nowExp'];
        $info['state_name']= $BiologyState[$info['state']]['text'];//境界名称  
        $info['zhong_zhu']= $BiologyBiology[$info['biology']]['text'];//种族 
        $info['position_skill']=  BiologySkill::getSkill($info['skill'],$info['id']);
        // //装备1
        // if($info['gooduse1']){
        //     $data['gooduse1']=  $UserGoods->getUserGoods($info['gooduse1']);
        // }
        // //装备2
        // if($info['gooduse2']){
        //     $data['gooduse2']=  $UserGoods->getUserGoods($info['gooduse2']);
        // }
        // //元神
        // if($info['yuanShen']){
        //     $data['yuanShen']=  $UserGoods->getUserGoods($info['yuanShen']);
        // }
        //颜色品质
        $info['max_power_color']=     UserBiologyAttribute::natureColor($info['max_power']);
        $info['max_agile_color']=     UserBiologyAttribute::natureColor($info['max_agile']);
        $info['max_intelligence_color']=     UserBiologyAttribute::natureColor($info['max_intelligence']);
        return $info;
    }


    public static  function natureColor($nature){
        $int = intval($nature/12);
        return  UserBiologyAttribute:: getNatureColor($int);
    }
    //颜色品质 -- 白 绿  蓝  黄  紫  红 朱   粉 蓝绿 橙 
    public static  function getNatureColor($int){
        $color = ['#F0F0F0','#68FF3E','#FFFF00','#0070FF','#CF29FE','#FF4444','#FF0000','#EB6DFF','#00FFA8','#FB9C00'];
        return $color[$int];
    }
    public static  function getNatureGrade($int){
        $color = ['C','B','A','S','SS','SSS','人','鬼','仙','神'];
        return $color[$int];
    }


    /**
     * 属性详情
     */
    public  function getUserBiologyAttribute($userBiologyid,$biology_userid=0,$map_int=0){
        $UserWords =new UserWords();
        $moreExtend=[];//属性池
        if($biology_userid){
            //玩家生物
            $data = UserBiologyAttribute::find()->select('*')->where("userBiologyid=$userBiologyid")->asarray()->One();
        }else{
            // var_dump($userBiologyid);
            // var_dump($biology_userid);
            //系统生物
            $merge_biology_list = $UserWords->getMapValueListSystem($map_int,'biology_list');
            //重新定义索引id
            $data = array_column($merge_biology_list,null,'id')[$userBiologyid];
        }
  
        // $UserWords=new UserWords();
        // //重新定义某些字段的基础属性，中文人族 ，境界
        // foreach($data as$key=> $userbiology){
        //     var_dump($userbiology);die;
        //     $userbiology['state_name']= BiologyState::getValueFind($userbiology['state']);//境界名称  
        //     $userbiology['zhong_zhu']= $UserWords->biologyExtedAdd($userbiology['biology']);//种族 
        //     $data[$key]=$userbiology;
        // }
        $data['state_name']= BiologyState::getValueFind($data['state']);//境界名称  
        $data['zhong_zhu']= $UserWords->biologyExtedAdd($data['biology']);//种族 
        //初始化属性 
        // 固定增加的属性
        $data = $this->getUserBiologyAttributeAddExtends($data);
        // 装备栏 1 2 
        
        $moreExtend = (new UserGoods)->getUserGoodsExtend($data,$data['gooduse1'],$moreExtend);
        $moreExtend = (new UserGoods)->getUserGoodsExtend($data,$data['gooduse2'],$moreExtend);
        //元神
        $moreExtend = (new UserGoods)->getUserGoodsExtend($data,$data['yuanShen'],$moreExtend);
        //缘分--后面再行设计（暂时不用）
        // var_dump( $moreExtend);die;
        //法宝属性
        //阵法属性
        //技能属性--回合增幅，不放在初始化
        $data = $this->getUserBiologyAttributeAddExtends($data,$moreExtend,0);//计算属性，并且叠加
        return $data;
    }

    //属性增幅--可单独传递值 --
    public  function  getUserBiologyAttributeAddExtends($data,$moreExtend=[],$defult=1){
        //白值--固定值根据白值变化
        $moreExtend['power']=isset($moreExtend['power'])?intval($moreExtend['power']):0;
        $moreExtend['agile']=isset($moreExtend['agile'])?intval($moreExtend['agile']):0;
        $moreExtend['intelligence']=isset($moreExtend['intelligence'])?intval($moreExtend['intelligence']):0;
        $moreExtend['lucky']=isset($moreExtend['lucky'])?intval($moreExtend['lucky']):0;
        $moreExtend['grade']=isset($moreExtend['grade'])?intval($moreExtend['grade']):0;
        $moreExtend['score']=isset($moreExtend['score'])?intval($moreExtend['score']):0;
        $moreExtend['reiki']=isset($moreExtend['reiki'])?intval($moreExtend['reiki']):0;
        $moreExtend['state']=isset($moreExtend['state'])?intval($moreExtend['state']):0;
        //固定值
        $moreExtend['shengMing']=isset($moreExtend['shengMing'])?intval($moreExtend['shengMing']):0;
        $moreExtend['moFa']=isset($moreExtend['moFa'])?intval($moreExtend['moFa']):0;
        $moreExtend['gongJi']=isset($moreExtend['gongJi'])?intval($moreExtend['gongJi']):0;
        $moreExtend['huJia']=isset($moreExtend['huJia'])?intval($moreExtend['huJia']):0;
        $moreExtend['faGong']=isset($moreExtend['faGong'])?intval($moreExtend['faGong']):0;
        $moreExtend['fakang']=isset($moreExtend['fakang'])?intval($moreExtend['fakang']):0;
        $moreExtend['jianShang']=isset($moreExtend['jianShang'])?intval($moreExtend['jianShang']):0;
        $moreExtend['shanbi']=isset($moreExtend['shanbi'])?intval($moreExtend['shanbi']):0;
        $moreExtend['xiXue']=isset($moreExtend['xiXue'])?intval($moreExtend['xiXue']):0;
        $moreExtend['huDun']=isset($moreExtend['huDun'])?intval($moreExtend['huDun']):0;
        $moreExtend['suDu']=isset($moreExtend['suDu'])?intval($moreExtend['suDu']):0;
        $moreExtend['special']=isset($moreExtend['special'])?intval($moreExtend['special']):0;
        $moreExtend['jingBi']=isset($moreExtend['jingBi'])?intval($moreExtend['jingBi']):0;
        $moreExtend['jingYan']=isset($moreExtend['jingYan'])?intval($moreExtend['jingYan']):0;;
        $moreExtend['shouyuan']=isset($moreExtend['shouyuan'])?intval($moreExtend['shouyuan']):0;
 
        //初始化
        if($defult){
            //附加属性--吞噬丹药和转生固定增加
            $moreExtend['power']+=intval($data['zPower']);
            $moreExtend['agile']+=intval($data['zAgile']);
            $moreExtend['intelligence']+intval($data['zIntelligence']);
            //境界属性增幅
            $value = intval(Words::getUserWordGrade($data['state'])['value']);
            $moreExtend['power']+=$value;
            $moreExtend['agile']+=$value;
            $moreExtend['intelligence']+=$value;
        }else{
            //境界叠加--技能临时提升境界
            if($data['state']!=$moreExtend['state']){
                //境界属性增幅
                $value = intval(Words::getUserWordGrade($moreExtend['state'])['value']);
                if($data['state']>$moreExtend['state']){
                    $moreExtend['power']-=$value;
                    $moreExtend['agile']-=$value;
                    $moreExtend['intelligence']-=$value;
                }else{
                    $moreExtend['power']+=$value;
                    $moreExtend['agile']+=$value;
                    $moreExtend['intelligence']+=$value;
                }
            }
        }
        // var_dump($data);
        $data = User::biolobyChangeMore($data,$moreExtend);//属性累计计算
        return $data;

    }


    //生物容器属性
    public  function  getBiologyInExtends(){

        // User::biolobyChangeMore();

    }
    






}
