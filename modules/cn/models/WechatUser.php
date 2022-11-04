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

    public static function headerLocation(){
        $user = Yii::$app->session->get('userlogin');
        if($user){
            // 判断http还是https
            $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
            $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/video/list';
            header('Location: '.$href);die;
        }

    }
}
