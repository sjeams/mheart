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
        $userlogin = WechatUser::find()->select('id,name,graden,is_cache,is_bofang')->where("id=$userId")->asArray()->one();
        // var_dump($token);die;
        Yii::$app->session->set('token',$token);
        Yii::$app->session->set('userlogin',$userlogin);
        //设置cookie
        setcookie('sslToken',$token,time()+86400,'/','mheart.xyz');
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
        $userlogin = WechatUser::find()->select('id,name,graden,is_cache,is_bofang')->where("token='$token'")->asArray()->one();
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

    //修改缓存状态
    public static function changeCache($user){
        $get_cache=0;
        if($user){
            $userId =$user['id'];
            if($user['is_cache']==1){
                $get_cache=0;
            }else{
                $get_cache=1;
            }
            WechatUser::updateAll(['is_cache' => $get_cache],"id = $userId");
            //更新缓存
            $userlogin = WechatUser::find()->select('id,name,graden,is_cache,is_bofang')->where("id=$userId")->asArray()->one();
            Yii::$app->session->set('userlogin',$userlogin);
        }
        return $get_cache;
    }
    //修改自动播放状态
    public static function  changeBofang($user){
        $get_bofang=0;
        if($user){
            $userId =$user['id'];
            if($user['is_bofang']==1){
                $get_bofang=0;
            }else{
                $get_bofang=1;
            }
            WechatUser::updateAll(['is_bofang' => $get_bofang],"id = $userId");
            //更新缓存
            $userlogin = WechatUser::find()->select('id,name,graden,is_cache,is_bofang')->where("id=$userId")->asArray()->one();
            Yii::$app->session->set('userlogin',$userlogin);
        }
        return $get_bofang;
    }
    


   
}
