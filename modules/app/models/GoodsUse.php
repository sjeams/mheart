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

use yii;
class GoodsUse extends ActiveRecord
{
    public $user_info; 
    public $userId; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userId =  $this->user_info['userid'];
    }
    public static function tableName(){
        return '{{x2_goods_use}}';
    }
    //获取商品类型
    public static function getGoodsType(){
        $goods_type =  GoodsUse::find()->select('id,value')->asArray()->all();
        $goods_type = array_column($goods_type,null,'id');
        foreach($goods_type as$key=> $v){
             $goods_type[$key]=$v['value'];//写入定位
         }
         $goods_type[0]=GOODS_BAOLV;//空的概率为10000
         return $goods_type;
    }

    //背包类型
    public function getGooduseType(){
        $data=GoodsUse::find()->asarray()->All();
        // $UserGoods= new UserGoods();
        // $data=$UserGoods->getGooduseType();
        $data=array_column($data,null,'id');
        return $data;
    }
    
}
