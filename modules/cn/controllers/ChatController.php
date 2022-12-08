<?php
namespace app\modules\cn\controllers;
use app\libs\Method;
use yii;
use app\libs\VideoApiControl;
use app\modules\cn\models\Video;
use app\modules\cn\models\WeChatFriend;
use app\modules\cn\models\VideoList;
use app\modules\cn\models\WechatUser;
use app\modules\cn\models\Query;
use yii\data\Pagination;

class ChatController extends VideoApiControl
{
     public $enableCsrfValidation = false;
    public $layout = 'cn';
    // public  $passwordav='111av'; //av
    // public  $passwordsp=111; //视频
    public  $login=0; //av
    public  $user;
    public  $userId;
    function init (){
        parent::init();
        // var_dump(111);die;
        set_time_limit(0);
        $this->user = Yii::$app->session->get('userlogin');
        $this->userId = Yii::$app->session->get('userId');
        $this->login= intval($this->user['graden']); // 0未登录
        if(!$this->user){
            // 判断http还是https
            $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
            $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/login/login';
            header('Location: '.$href);die;
        }
        // $status= Yii::$app->session->get('login');
        // if($status==$this->passwordav){
        //     $this->login=1;
        // }else if($status==$this->passwordsp){
        //     $this->login=2;
        // }else{
        //     $this->login=0;
        // }
    }
      /**
     * 我的收藏-快速浏览页面
     * by  sjeam
     */
    public function actionList()
    {
        $uid = $this->userId;
        // 登录状态
        // WeChatFriend::find()->where('uid ='.$this->user['id'])->asArray()->all();
        $userList = Yii::$app->signdb->createCommand("select f.*,u.photo,u.name from {{%wechat_friend}} f LEFT JOIN {{%wechat_user}} u ON f.friend_id = u.id where f.uid=$uid")->queryAll();
        return $this->render('list',['userList'=>$userList ]);
    }

      /**
     * 我的收藏-快速浏览页面
     * by  sjeam
     */
    public function actionChat()
    {
        $uid = Yii::$app->request->get('uid',0);
        $user =  WechatUser::find()->where("id = $this->userId ")->asArray()->One();
        $friend =  WechatUser::find()->where("id = $uid")->asArray()->One();
        $room =WeChatFriend::find()->where("uid =$this->userId and friend_id = $uid")->asArray()->One();
        return $this->render('chat',['user'=>$user,'friend'=>$friend,'room'=>$room['room_id'], ]);
    }
    // 生成好友编号-房间号
    // md5(time().rand(1,10000)).rand(1,10000);
}
