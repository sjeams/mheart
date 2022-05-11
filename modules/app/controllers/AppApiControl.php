<?php
/**
 * 托福接口基础类
 * by Obelisk
 */
	namespace app\libs;
    use yii;
    use yii\web\Controller;
    use app\modules\basic\models\Params;
	class AppApiControl extends Controller {
		public function init() {
            $uid = Yii::$app->session->get('uid');
//            $uid = 7937;
            $token = isset($_SERVER['HTTP_TOKEN']) && !empty($_SERVER['HTTP_TOKEN'])?$_SERVER['HTTP_TOKEN']:false;
            // $token ='278be6938fe137454339e1bab22b6c9c';
            if($token){
                if($token == 1){
                    if($uid){
                        session_destroy();
                    }
                }else{
                    $session_token =  Yii::$app->session->get('sslToken');
                    if(!$uid || $token != $session_token){
                        if($token){
                            $date = Method::curl_post(Yii::$app->params['loginUrl'].'/cn/ssl-app-api/check',['token' => $token]);
                            $data = json_decode($date,true);
                            if($data['code'] == 1){
                                Method::confim_user($data['info']);
                                Yii::$app->session->set('sslToken',$token);
                            }
                        }
                    }
                }
            }
		}

        /**
         * 定义配置项为全局变量
         * @Obelisk
         */
        public function config(){
            define('baseUrl',Yii::$app->params['baseUrl']);
            define('tablePrefix',Yii::$app->db->tablePrefix);
            $data = Params::find()->all();
            foreach($data as $v){
                define($v->key,$v->value);
            }
        }
	}
?>