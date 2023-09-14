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

use app\modules\app\models\UserGoodsAttribute;

use yii;
class UserGoods extends ActiveRecord
{
    public $user_info; 
    public $userid; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
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
     // 根据征服世界随机物品id
     public  function goodsRand($num=1){  //默认管理员，数量为1
        $userid= $this->userid;
        $type =  $this->user_info['word_type'];
        $wordId= UserWords::find()->select('wordId')->where("userid =$userid and complete = 1")->asarray()->All();     
        $goods = (new \yii\db\Query())
        ->select("a.name,a.*")
        ->from("x2_user_goods AS a")
        ->leftJoin("x2_words AS b","a.wordId = b.id")
        ->where(['or' , ['wordId' =>'1'] ,['wordId' => $wordId]] )    // 先满足后面的条件
        // ->where(['a.id' =>'18'] ) 
        ->andWhere(['a.type' =>$type])
        ->limit($num)
        ->orderBy("rand()")
        ->All();
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
