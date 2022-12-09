<?php
/**
 * 用于vdieo登录
 */
	namespace app\libs;
    use yii;
    use yii\web\Controller;
    use app\modules\cn\models\WechatUser;
    // use app\modules\admin\models\UserLogin;
    // use app\modules\basic\models\Params;
	class VideoApiControl extends Controller {
        public $title;
        public $keywords;
        public $description;
		public function init() {
            parent::init();
            // $token = isset($_SERVER['HTTP_TOKEN']) && !empty($_SERVER['HTTP_TOKEN'])?$_SERVER['HTTP_TOKEN']:false;
            // // $update = isset($_SERVER['HTTP_UPDATE']) && !empty($_SERVER['HTTP_UPDATE'])?$_SERVER['HTTP_UPDATE']:false;
            $token= Yii::$app->session->get('token');
            if(!$token){
                $token = isset($_COOKIE['sslToken'])?$_COOKIE['sslToken']:false;
            }
            // var_dump( $token);die;
            if($token){  // 登录状态
                //token过期userlogin存在保持登录状态，否则销毁
                $userlogin= Yii::$app->session->get('userlogin');
                $userId= Yii::$app->session->get('userId');
                if(!$userlogin||!$userId){
                    //修改参数时，注意其它地方也要修改
                     WechatUser::getUserlogin($token);
                }
            }else{
                setcookie('sslToken');
                session_destroy();
            }
            // $this->config();
		}
        public function config(){
            // define('baseUrl',Yii::$app->params['baseUrl']);
            // define('tablePrefix',Yii::$app->db->tablePrefix);
            // $data = Params::find()->all();
            // foreach($data as $v){
            //     define($v->key,$v->value);
            // }
        }
	}
?>