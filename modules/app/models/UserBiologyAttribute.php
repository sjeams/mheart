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
use app\modules\app\models\UserWords;
use app\modules\admin\models\User;
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

    public  function  myAttributesList(){  
        $data = UserBiologyAttribute::find()->select('*')->where("userid=$this->userId")->asarray()->All();  
        return $data;
    }
   
    /**
     * 属性详情
     */
    public  function getUserBiologyAttribute($userBiologyid,$biology_userid=0,$map_int=0){
        $moreExtend=[];//属性池
        if($biology_userid){
            //玩家生物
            $data = UserBiologyAttribute::find()->select('*')->where("userBiologyid=$userBiologyid")->asarray()->One();
        }else{
            // var_dump($userBiologyid);
            // var_dump($biology_userid);
            //系统生物
            $UserWords =new UserWords();
            $merge_biology_list = $UserWords->getMapValueListSystem($map_int,'biology_list');
            //重新定义索引id
            $data = array_column($merge_biology_list,null,'id')[$userBiologyid];
        }
        //初始化
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
        $moreExtend['power']=isset($moreExtend['power'])?:0;
        $moreExtend['agile']=isset($moreExtend['agile'])?:0;
        $moreExtend['intelligence']=isset($moreExtend['intelligence'])?:0;
        $moreExtend['lucky']=isset($moreExtend['lucky'])?:0;
        $moreExtend['grade']=isset($moreExtend['grade'])?:0;
        $moreExtend['score']=isset($moreExtend['score'])?:0;
        $moreExtend['reiki']=isset($moreExtend['reiki'])?:0;
        $moreExtend['state']=isset($moreExtend['state'])?:0;
        //固定值
        $moreExtend['shengMing']=isset($moreExtend['shengMing'])?:0;
        $moreExtend['moFa']=isset($moreExtend['moFa'])?:0;
        $moreExtend['gongJi']=isset($moreExtend['gongJi'])?:0;
        $moreExtend['huJia']=isset($moreExtend['huJia'])?:0;
        $moreExtend['faGong']=isset($moreExtend['faGong'])?:0;
        $moreExtend['fakang']=isset($moreExtend['fakang'])?:0;
        $moreExtend['jianShang']=isset($moreExtend['jianShang'])?:0;
        $moreExtend['shanbi']=isset($moreExtend['shanbi'])?:0;
        $moreExtend['xiXue']=isset($moreExtend['xiXue'])?:0;
        $moreExtend['huDun']=isset($moreExtend['huDun'])?:0;
        $moreExtend['suDu']=isset($moreExtend['suDu'])?:0;
        $moreExtend['special']=isset($moreExtend['special'])?:0;
        $moreExtend['jingBi']=isset($moreExtend['jingBi'])?:0;
        $moreExtend['jingYan']=isset($moreExtend['jingYan'])?:0;;
        $moreExtend['shouyuan']=isset($moreExtend['shouyuan'])?:0;
 
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
            if($moreExtend['state']){
                //境界属性增幅
                $value = intval(Words::getUserWordGrade($moreExtend['state'])['value']);
                $moreExtend['power']+=$value;
                $moreExtend['agile']+=$value;
                $moreExtend['intelligence']+=$value;
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
