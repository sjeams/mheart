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
class UserGoodsNature extends ActiveRecord
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
        return '{{x2_user_goods_nature}}';
    }
 
    public static  function UserGoodsNatureList($goodsid){  
        $data = UserGoodsNature::find()->select('*')->where(" goodsid=$goodsid")->asarray()->All();
        return $data;
    }


}
