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
        $userlogin = WechatUser::find()->select('id,name,graden')->where("id=$userId")->asArray()->one();
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
    // 获取权限
    public static function getGraden(){
        $token = Yii::$app->session->get('token');
        $userlogin = WechatUser::find()->select('id,name,graden')->where("token=$token")->asArray()->one();
        if($userlogin){
            //管理员可操作
            if($userlogin['id']==2){
                return true;
            }else{
                return false; 
            }
        }else{
            return false;
        }
    }
}
