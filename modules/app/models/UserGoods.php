<?php
/*
 * @Author: sjeam
 * @Date: 2023-08-01 10:46:37
 * @Description: 
 */
//用户生物列表
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use app\modules\admin\models\UserWords;
use app\modules\admin\models\User;
use app\modules\app\models\UserGoodsNature;
use app\libs\Method;

 
use app\modules\app\models\GoodsUse;
use app\modules\app\models\Goods;

use yii;
class UserGoods extends ActiveRecord
{
    public $user_info; 
    public $userId; 
    public $goods_type; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userId =  $this->user_info['userid'];
        $this->goods_type = GoodsUse::getGoodsType();
    }
    public static function tableName(){
        return '{{x2_user_goods}}';
    }

    //查看物品
    public  function getUserGoods($goodsid=0){
        $goods=[];
        if($goodsid){
            $goods = UserGoods::find()->where("id=$goodsid")->asArray()->One();
            $goods['nature']= UserGoodsNature::UserGoodsNatureList($goods['id']);
        }
        return $goods;
    }
    //查看物品--属性
    public  function getUserGoodsExtend($attack_biology_do,$goodsid=0,$moreExtend=[]){

        $goods = $this->getUserGoods($goodsid);
        if($goods){
            foreach($goods['nature'] as $goods_nature){
                $extend = $goods_nature['extend'];//造成伤害类型
                $status = $goods_nature['status'];//伤害计算类型--如果不存在就是 特殊类型---公式伤害类型
                $formula = $goods_nature['formula'];//公式
                $isadd = intval($goods_nature['isadd']);//公式0减少1增加
                $value = intval($goods_nature['value']);//伤害计算类型--每级增加30%
                $hurt = $goods_nature['hurt'];//伤害固定值   zhaoHuan时-(生物id)
                //计算伤害
                $hurt_go = Method::percentHurt($attack_biology_do[$status],$hurt,$value,$formula,$isadd);
                if(isset($moreExtend[$extend])){
                    $moreExtend[$extend]+=$hurt_go;
                }
            }
        }
        return $moreExtend;
    }

    // 物品数量统计
    public static function getUserGoodsCount(){
        $data = (new UserGoods())->UserGoodsList()->count();
        return $data;
    }
    // 物品列表
    public static   function getUserGoodsList(){
        $data =  (new UserGoods())->UserGoodsList()->All();
        return $data;
    }
    public  function UserGoodsList(){  
        $data = UserGoods::find()->select('*')->where("userid=$this->userId")->asarray();
        return $data;
    }
    // //创建生物
    // public  function createrUserGoods(){  
    //     $type = $this->user_info['word_type'];
    //     // 用户 随机获取一个生物（默认管理员--权限为已通世界）
    //     $biology = UserWords :: BiologyRand($type)[0]; //默认管理员-数量1 --返回数组
    //     $data = UserWords :: BiologySave($biology);
    //     return $data;
    // }

    //获取物品
    public function getGoodsList($gooduse){
        $word_type =$this->user_info['word_type'];
        $goods_type =  Goods::find()->select('id,value')->where("gooduse=$gooduse and wordType>=$word_type")->asArray()->all();
        $goods_type =array_column($goods_type,null,'id');
        foreach($goods_type as$key=> $v){
             $goods_type[$key]=$v['value'];//写入定位
         }
         return $goods_type;
    }

    //返回0时为空
    public  function getGoodsId($num=1,$lucky=0){ 
        $good_id=0;
        //随机一种类型--有可能为空
        $gooduse = Method::getRandGrade($this->goods_type);
        //获取所有物品概率
        if($gooduse){
            $goodlist= $this->getGoodsList($gooduse);
            //随机一件物品的id
            $good_id = Method::getRandGrade($goodlist); 
        }
       return  $good_id;
    }


    // 根据征服世界随机物品id
    public  function userGoodsRand($lucky=0,$num=5){  //默认管理员，数量为1
        $good_id=[];
        //默认一次，根据幸运最多3次触发
        if($lucky){
             //luckly 幸运
            for($i=1;$i<=$num;$i++){
                //触发幸运，额外获得一件物品
                $is_luckly = Method::getRandGrade(['1'=>$lucky,'0'=>GOODS_LUCKLY_BAOLV]);
                if($is_luckly){
                    $good_id[]=$this->getGoodsId();
                }
            }
        }else{
            //没lucky 时，固定随机的次数
            for($i=1;$i<=$num;$i++){
                $good_id[]=$this->getGoodsId();    
            }
        }
        $goods = (new \yii\db\Query())
        ->select("a.id,a.name,a.point,a.describe,a.sellout,a.percenttype")
        ->from("x2_goods AS a")
        ->where(['a.id' =>$good_id] ) 
        ->orderBy("rand()")
        ->All();
        // $userid= $this->userId;
        // $type =  $this->user_info['word_type'];
        // $wordid= UserWords::find()->select('wordid')->where("userid =$userid and complete = 1")->asarray()->All();  

        // $goods = (new \yii\db\Query())
        // ->select("a.name,a.*")
        // ->from("x2_goods AS a")
        // ->leftJoin("x2_words AS b","a.wordid = b.id")
        // ->where(['or' , ['wordid' =>'1'] ,['wordid' => $wordid]] )    // 先满足后面的条件
        // // ->where(['a.id' =>'18'] ) 
        // ->andWhere(['a.type' =>$type])
        // ->limit($num)
        // ->orderBy("rand()")
        // ->All();
        // var_dump($goods);die;
        return $goods;
    }
    //获取物品
    public  function getGoodsRand($goodsid){
        // 用户 随机获取一个生物（默认管理员--权限为已通世界）
        $goods = UserGoods::find()->where("id=$goodsid")->One();
        if($goods){
            $goods['goodsid']=$goodsid;
            unset($goods['uid']);
            Yii::$app->db->createCommand()->insert('x2_user_biology_attribute',$goods)->execute(); //添加到用户
        } 
        return $goods;
    }
    

    // x2_user_goods_nature

    // ------------背包
    // 背包枚举  
    public  function  getGooduseType(){
        //武器  道具  技能 元神 丹药
       $data =Yii::$app->db->createCommand("select a.*,group_concat(b.id) as gooduse from {{%goods_use_type}} a left join {{%goods_use}} b on a.id=b.type  group by a.id")->queryAll();  
       return $data;
    }
    

    //添加生物背包
    public  function  addBiologyBackpaker($param){
        
    }












    //生物背包
    public  function  getBiologyBackpaker($param){
        // 武器  元神
        $where =" userid = $this->userId " ;
        if($param['gooduse']){
            $gooduse=$param['gooduse'];
            $where .=" and gooduse in ( $gooduse) " ; 
        }
        // if($param['biologyid']){
        //     $biologyid=$param['biologyid'];
        //     $where .=" and biologyid = $biologyid " ; 
        // }
        $goods = (new \yii\db\Query())
        ->select("a.name,a.*")
        ->from("x2_user_goods AS a")
        // ->leftJoin("x2_user_biology AS b","a.biology = b.id") 
        ->where($where) 
        ->orderBy("id desc")
        ->All();
        return $goods;
    }
    //用户背包
    public  function  getUserBackpaker($param){
        $where =" userid=$this->userId " ;
        if($param['gooduse']){
            $gooduse=$param['gooduse'];
            $where .=" and gooduse in ( $gooduse) " ; 
        }
        $goods = (new \yii\db\Query())
        ->select("a.name,a.*")
        ->from("x2_user_goods AS a")
        // ->leftJoin("x2_user_packet AS b","a.wordid = b.id") 
        ->where($where) 
        ->orderBy("id desc")
        ->All();
        return $goods;
    }





}
