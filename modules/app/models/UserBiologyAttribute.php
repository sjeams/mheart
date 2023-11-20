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
    public $userid; 
    public $biologyid; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
        $this->wordId =  $this->user_info['wordId'];
    }
    public static function tableName(){
        return '{{x2_user_biology_attribute}}';
    }
    //统计总数==上限不能超过20个
    public  function getUserBiologyAttributeCount(){
        $count = UserBiologyAttribute::find()->where("userid=$this->userid")->count();
        return $count;
    }

    public  function  myAttributesList(){  
        $data = UserBiologyAttribute::find()->select('*')->where("userid=$this->userid")->asarray()->All();  
        return $data;
    }
   
    /**
     * 属性详情
     */
    public  function getUserBiologyAttribute($userBiologyid,$biology_userid=0,$map_num){
        if($biology_userid){
            //玩家生物
            $data = UserBiologyAttribute::find()->select('*')->where("userBiologyid=$userBiologyid")->asarray()->One();  
        }else{
            // var_dump($userBiologyid);
            // var_dump($biology_userid);
            //系统生物
            $UserWords =new UserWords();
            $data = $UserWords->getValueListSystem($map_num,'biology_list')[$userBiologyid];
        }
        // var_dump( $data);die;
        $data = $this->getUserBiologyAttributeAddExtends($data);
        return $data;
    }
    
    //属性增幅--可单独传递值 --
    public  function  getUserBiologyAttributeAddExtends($data,$moreExtend=[],$defult=1){
        //白值--固定值根据白值变化
        $moreExtend['power']=$moreExtend['power']?:0;
        $moreExtend['agile']=$moreExtend['agile']?:0;
        $moreExtend['intelligence']=$moreExtend['intelligence']?:0;
        $moreExtend['lucky']=$moreExtend['lucky']?:0;
        $moreExtend['grade']=$moreExtend['grade']?:0;
        $moreExtend['score']=$moreExtend['score']?:0;
        $moreExtend['reiki']=$moreExtend['reiki']?:0;
        $moreExtend['state']=$moreExtend['state']?:0;
        //固定值
        $moreExtend['shengMing']=$moreExtend['shengMing']?:0;
        $moreExtend['moFa']=$moreExtend['moFa']?:0;
        $moreExtend['gongJi']=$moreExtend['gongJi']?:0;
        $moreExtend['huJia']=$moreExtend['huJia']?:0;
        $moreExtend['faGong']=$moreExtend['faGong']?:0;
        $moreExtend['fakang']=$moreExtend['fakang']?:0;
        $moreExtend['jianShang']=$moreExtend['jianShang']?:0;
        $moreExtend['shanbi']=$moreExtend['shanbi']?:0;
        $moreExtend['xiXue']=$moreExtend['xiXue']?:0;
        $moreExtend['huDun']=$moreExtend['huDun']?:0;
        $moreExtend['suDu']=$moreExtend['suDu']?:0;
        $moreExtend['special']=$moreExtend['special']?:0;
        $moreExtend['jingBi']=$moreExtend['jingBi']?:0;
        $moreExtend['jingYan']=$moreExtend['jingYan']?:0;;
        $moreExtend['shouyuan']=$moreExtend['shouyuan']?:0;
        // var_dump($data);die;
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
        // 装备属性

        //法宝属性
        
        //阵法属性
    
        //回合增幅属性
        // var_dump($data);
        $data = User::biolobyChangeMore($data,$moreExtend);//属性累计计算
        return $data;

    }











}
