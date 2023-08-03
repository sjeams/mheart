<?php
/*
 * @Author: sjeam
 * @Date: 2023-07-31 16:37:10
 * @Description: 
 */
/**
 * 用于app User 验证登录
 */
	namespace app\libs;
    use yii;
    use yii\web\Controller;
    use app\modules\app\models\User;
    use app\modules\app\models\UserLogin;
    // use app\modules\basic\models\Params;
	class ApiUserControl extends Controller {
        public $title;
        public $keywords;
        public $description;
		public function init() {
            $token = isset($_SERVER['HTTP_TOKEN']) && !empty($_SERVER['HTTP_TOKEN'])?$_SERVER['HTTP_TOKEN']:false;
            // // // $update = isset($_SERVER['HTTP_UPDATE']) && !empty($_SERVER['HTTP_UPDATE'])?$_SERVER['HTTP_UPDATE']:false;
            if(!$token){  // 登录状态
                $data = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
                $token=$data['token'];
            }
            $token ='d98b30d1da628d4a325b100c6';
            $user_info = UserLogin::getUserlogin($token);
            if(!$user_info){
                die(json_encode(['code' => 0,null,'message' => '未登录']));   
            }else{
                $this->config($user_info);
            }
		}
        //处理用户常用信息
        public function config($user_info){
            Yii::$app->session->set('user_info',$user_info);
        }
	}
?>