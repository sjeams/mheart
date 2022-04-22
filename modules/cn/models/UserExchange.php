<?php
namespace app\modules\cn\models;
use app\modules\app\models\Content;
use yii\db\ActiveRecord;
use yii;
class UserExchange extends ActiveRecord {
    public $cateData;
    public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%user_information}}';
    }

    public static  function findCourse($contentid,$uid){
        $course = UserExchange::find()->asArray()->where("contentid = {$contentid} and uid =$uid")->one();
        if($course){  return true;}else{ return false; }
    }
    // //购买刷题活动 by sjeam
    // public static function courseBuy($contentid,$price,$phone,$uid){  //$all==1  查询所有
    //     $user =User:: find()->select('userName,nickname')->where("uid=$uid")->asarray()->One();
    //     $myorder =new UserExchange();
    //     $myorder ->order_id='GRE'.time();
    //     $myorder ->buy_time=time();
    //     $myorder ->num=1;
    //     $myorder ->uid=$uid;
    //     $myorder ->username= !empty( $user['nickname'])?$user['nickname'] : $user['userName'];
    //     $myorder ->phone=$phone;
    //     $myorder ->isLook=0;
    //     $myorder ->leidou=$price;
    //     $myorder ->contentid=$contentid;
    //     $myorder ->remarks='购买刷题活动';
    //     $myorder ->belong=1;
    //     return $myorder ->save();
    // }


    /**
    * app 公开课获取订单---条数
    * by sjeam
    */
    public static function getOpenOrderNum($res, $uid = ''){

        foreach($res as$ky=> $value){
            $contentid = $value['id'];
            // $totalNum = Method::post("https://order.viplgw.cn/pay/order/brush-order-num",['contentid' => $contentid]);
            $totalNum = UserExchange::find()->asArray()->where("contentid = $contentid")->count();
            // 报名数等于  后台填写订单数 + 实际订单数
            $res[$ky]['totalNum']= intval($totalNum)+intval($res[$ky]['orderNum']);
            // 查看是否报名
            if (empty($uid)){
                $uid = Yii::$app->session->get('uid');
            }
            if($uid){
                // $res[$ky]['isSign']=json_decode( Method::post("https://order.viplgw.cn/pay/order/brush-is-sign",['contentid' => $contentid,'uid' => $uid]));
                // $data = json_decode($data,true);
                $isSign = UserExchange::find()->asArray()->where("contentid = $contentid and uid=$uid")->One();
                if(!empty($isSign)){
                    $res[$ky]['isSign']= 1;
                }else{
                    $res[$ky]['isSign']= 0;
                }
                // $isvip = User:: getIsVip(); //状态  0 未购买 1 vip  2 已过期
                // if($isvip==1){$res[$ky]['isSign'] = 1; } //vip 状态为购买  //vip 状态为购买 --不下订单
            }else{
                $res[$ky]['isSign']= 0;
            }
        }
        return $res;
    }
}
