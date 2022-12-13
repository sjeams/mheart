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
     * 好友列表
     * by  sjeam
     */
    public function actionList()
    {
        $uid = $this->userId;
        $friend_title = Yii::$app->request->get('friend_title',0);
 
        // 登录状态
        // WeChatFriend::find()->where('uid ='.$this->user['id'])->asArray()->all();
        // $order ="order by ";
        // $userList = Yii::$app->signdb->createCommand("select f.*,u.photo,u.name from {{%wechat_friend}} f LEFT JOIN {{%wechat_user}} u ON f.friend_id = u.id where f.uid=$uid")->queryAll();
        $count = Yii::$app->signdb->createCommand("select count(f.uid) as count from {{%wechat_friend}} f LEFT JOIN {{%wechat_user}} u ON f.friend_id = u.id where f.uid=$uid")->queryOne()['count'];
        $page = Yii::$app->request->get('page',1);
        $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        // $where =" f.uid=$uid";
        $where =" u.id !=$uid";
        if($friend_title){
            $where .=" and (u.name  like '%$friend_title%' or u.phone like '%$friend_title%' )"; 
        }
        $userList= (new \yii\db\Query())
        ->select("f.*,u.photo,u.name")
        ->from("x2_wechat_friend as f")
        ->rightJoin('x2_wechat_user as u', "f.friend_id = u.id and  f.uid=$uid")
        ->where($where)
        // ->offset($pageStr->offset)
        // ->limit($pageStr->limit)
        ->orderBy('f.last_time desc')->all('sign');
        $data['page']=$page; 
        $data['count']=ceil($count/10 ); 
        // var_dump($userList);die;
        $total = Yii::$app->signdb->createCommand("select sum(f.num) as total from {{%wechat_friend}} f LEFT JOIN {{%wechat_user}} u ON f.friend_id = u.id where f.uid=$uid")->queryOne()['total'];

        $html = Yii::$app->request->get('html',0);
        if($html){
            $this->layout = 'kongbai';
            return $this->render('list',['userList'=>$userList,'total'=>$total ]);
        }else{
            return $this->render('list_html',['userList'=>$userList,'total'=>$total ]);      
        }
    }

    /**
     * 聊天页面
     * by  sjeam
     */
    public function actionChat()
    {
        $uid =  $this->userId;
        $fid = Yii::$app->request->get('uid',0);
        $user =  WechatUser::find()->where("id =$uid ")->asArray()->One();
        $friend =  WechatUser::find()->where("id = $fid")->asArray()->One();
        $room =WeChatFriend::find()->where("uid =$uid and friend_id = $fid")->asArray()->One();
        //清空我的消息数量
        WeChatFriend::updateUserNum( $uid,$fid,0);
        $chat_title = $friend['name'];
        return $this->render('chat',['user'=>$user,'chat_title'=>$chat_title,'friend'=>$friend,'room'=>$room['room_id'] ]);
    }


    /**
     * 用户详情
     * by  sjeam
     */
    public function actionDetail()
    {
        $this->layout = 'kongbai'; 
        $uid =  $this->userId;
        $fid = Yii::$app->request->get('uid',0);
        $friend =  WechatUser::find()->where("id = $fid")->asArray()->One();
        // var_dump($friend) ;die;
        $user =  WechatUser::find()->where("id =$uid ")->asArray()->One();
        // $room =WeChatFriend::find()->where("uid =$uid and friend_id = $fid")->asArray()->One();
        // //清空我的消息数量
        // WeChatFriend::updateUserNum( $uid,$fid,0);
        $chat_title = '';
        $html = Yii::$app->request->get('html',0);
        if($html==1){
            // 详情
            return $this->render('detail',['user'=>$user,'chat_title'=>$chat_title,'friend'=>$friend]);
        }else  if($html==2){   
            //朋友圈   
            return $this->render('detail_remark',['user'=>$user,'chat_title'=>$chat_title,'friend'=>$friend]);
        }else  if($html==3){   
            //朋友圈   
            return $this->render('detail_graden',['user'=>$user,'chat_title'=>$chat_title,'friend'=>$friend]);
        }else  if($html==4){   
            $count = Yii::$app->signdb->createCommand("select count(n.id) as count from {{%wechat_user_news}} n LEFT JOIN {{%wechat_user}} u ON n.uid = u.id  where n.uid=$fid")->queryOne()['count'];
            $page = Yii::$app->request->get('page',1);
            $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
            $where =" n.uid=$fid";
            // $where =" u.id !=$uid";
            $data['data']= (new \yii\db\Query())
            ->select("n.*,u.id as userId,u.photo,u.name")
            ->from("x2_wechat_user_news as n")
            ->leftJoin('x2_wechat_user as u', "n.uid = u.id ")
            // ->leftJoin('x2_wechat_friend as f', "f.friend_id = u.id and  f.uid=$uid")
            ->where($where)
            ->offset($pageStr->offset)
            ->limit($pageStr->limit)
            ->orderBy('n.create_time desc')->all('sign');
            $data['page']=$page; 
            $data['count']=ceil($count/10 ); 
            // var_dump($data);die;
            // $total = Yii::$app->signdb->createCommand("select sum(f.num) as total from {{%wechat_friend}} f LEFT JOIN {{%wechat_user}} u ON f.friend_id = u.id where f.uid=$uid")->queryOne()['total'];
            //朋友圈  
            $list = Yii::$app->request->get('list',0); 
            if($list==1){
                if($page>1){
                    define('CHAT_YEAR',date('Y',$data['data'][0]['create_time']));
                }else{
                    define('CHAT_YEAR',date('Y',time()));
                }
                return $this->render('detail_friend_detail',['data'=>$data,'user'=>$user,'chat_title'=>$chat_title,'friend'=>$friend]);
            }else{
           
                return $this->render('detail_friend',['data'=>$data,'user'=>$user,'chat_title'=>$chat_title,'friend'=>$friend]);
            }

        }else{
            $this->layout = 'cn'; 
            return $this->render('detail_html',['user'=>$user,'chat_title'=>$chat_title,'friend'=>$friend]);
        }
    }


    //更新最新消息
    public function actionUpdateFriendMsg()
    {
        // var_dump(Yii::$app->request->post());die;
        $uid = Yii::$app->request->post('uid',0);
        $fid = Yii::$app->request->post('fid',0);
        $content = Yii::$app->request->post('content','');
        $time = Yii::$app->request->post('time',0);
        WeChatFriend:: updateFriendNum( $uid,$fid,$content,$time,1);
        return   true;
    }
    //更新最新消息
    public function actionUpdateMyNum()
    {
        $uid = Yii::$app->request->post('uid',0);
        $fid = Yii::$app->request->post('fid',0);
        WeChatFriend::updateUserNum( $uid,$fid,0);
        return true;
    }

    //监听获取最新消息数量
    public function actionGetNewsNum()
    {
        $uid = Yii::$app->request->post('uid',0);
        $fid = Yii::$app->request->post('fid',0);
        $num  = WeChatFriend::find()->select('num')->where("uid = $fid and friend_id =$uid")->asArray()->one()['num']; 
        return $num;
    }



}
