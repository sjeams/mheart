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
use app\libs\Method;

 
use app\modules\app\models\GoodsUse;
use app\modules\app\models\Goods;

use yii;
class UserGoods extends ActiveRecord
{
    public $user_info; 
    public $userid; 
    public $goods_type; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
        $this->goods_type = GoodsUse::getGoodsType();
    }
    public static function tableName(){
        return '{{x2_user_goods}}';
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
        $data = UserGoods::find()->select('*')->where("userid=$this->userid")->asarray();
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
        // $good_id=[];
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
        ->select("a.name,a.*")
        ->from("x2_goods AS a")
        ->where(['a.id' =>$good_id] ) 
        ->orderBy("rand()")
        ->All();
        // $userid= $this->userid;
        // $type =  $this->user_info['word_type'];
        // $wordId= UserWords::find()->select('wordId')->where("userid =$userid and complete = 1")->asarray()->All();  

        // $goods = (new \yii\db\Query())
        // ->select("a.name,a.*")
        // ->from("x2_goods AS a")
        // ->leftJoin("x2_words AS b","a.wordId = b.id")
        // ->where(['or' , ['wordId' =>'1'] ,['wordId' => $wordId]] )    // 先满足后面的条件
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
    
}
