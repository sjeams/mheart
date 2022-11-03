<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;
use yii;
class WechatUser extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%wechat_user}}';
    }
    public static function loginMethod($token,$userId){
        //更新token
        WechatUser::updateAll(['token' => $token],"id=$userId");
        //设置缓存
        $userlogin = WechatUser::find()->select('id,name,graden,phone')->where("id=$userId")->asArray()->one();
        // var_dump($token);die;
        Yii::$app->session->set('token',$token);
        Yii::$app->session->set('userlogin',$userlogin);
    }
}
