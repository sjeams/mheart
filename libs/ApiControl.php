<?php
/**
 * 后台接口基础类
 * by Obelisk
 */
	namespace app\libs;
    use yii;
    use yii\web\Controller;
    use app\modules\admin\models\User;
    use app\modules\admin\models\UserLogin;
    // use app\modules\basic\models\Params;
	class ApiControl extends Controller {
        public $title;
        public $keywords;
        public $description;
		public function init() {

            // $token = isset($_SERVER['HTTP_TOKEN']) && !empty($_SERVER['HTTP_TOKEN'])?$_SERVER['HTTP_TOKEN']:false;
            // // $update = isset($_SERVER['HTTP_UPDATE']) && !empty($_SERVER['HTTP_UPDATE'])?$_SERVER['HTTP_UPDATE']:false;
            // if($token){  // 登录状态
            //     $userlogin = UserLogin::find()->where("token=$token")->asArray()->one();
            //     if(!empty($user)){
            //     //     $user = User::find()->where("userid=$userId")->asArray()->one();
            //     Yii::$app->session->set('userlogin',$userlogin);
            //     }else{
            //         session_destroy();
            //     }
            // }else{
            //     session_destroy();
            // }
            // $this->config();
		}

        // public function config(){
        //     define('baseUrl',Yii::$app->params['baseUrl']);
        //     define('tablePrefix',Yii::$app->db->tablePrefix);
        //     $data = Params::find()->all();
        //     foreach($data as $v){
        //         define($v->key,$v->value);
        //     }
        // }
	}
?>