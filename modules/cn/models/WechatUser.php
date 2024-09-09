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

    public static function getUserlogin($token,$userId=0){
        if($token){
            $userlogin = WechatUser::find()->select('id,name,graden,is_cache,is_bofang,video_model,token')->where("token='$token'")->asArray()->one();
            //设置cookie
           $name =  explode('.',$_SERVER['SERVER_NAME']);
           $cookie_name = $name[1].'.'.$name[2];
            // setcookie('sslToken',$token,time()+86400*3,'/','aheart.cn');
            setcookie('sslToken',$token,time()+86400*3,'/', $cookie_name);
        }else{
            $userlogin = WechatUser::find()->select('id,name,graden,is_cache,is_bofang,video_model,token')->where("id='$userId'")->asArray()->one(); 
        }     
        // var_dump($userlogin);die;  
        // var_dump($token);die;
        // 验证token是否有效--另一设备登录挤下
        if($userlogin){
            Yii::$app->session->set('token',$userlogin['token']);
            Yii::$app->session->set('userId',$userlogin['id']);
            Yii::$app->session->set('userlogin',$userlogin);
        }else{
            //退出和销毁
            setcookie('sslToken');
            session_destroy();
        }
    }

    public static function loginMethod($token,$userId){
        //更新token
        $time = date('Y-m-d H:i:s',strtotime('+1 day')); //1天后失效
        WechatUser::updateAll(['token' => $token,'createTime'=> $time ],"id=$userId");
        //设置缓存
        WechatUser::getUserlogin($token);
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
        $userlogin= Yii::$app->session->get('userlogin');
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
            WechatUser::getUserlogin(false,$userId);
       
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
            WechatUser::getUserlogin(false,$userId);
 
        }
        return $get_bofang;
    }
    //修改自动播放状态
    public static function  changeVideoModel($user){
        $video_model=0;
        if($user){
            $userId =$user['id'];
            if($user['video_model']==1){
                $video_model=0;
            }else{
                $video_model=1;
            }
            WechatUser::updateAll(['video_model' => $video_model],"id = $userId");
            //更新缓存
            WechatUser::getUserlogin(false,$userId);
 
        }
        return $video_model;
    }


   
}
