<?php
/**
 * 托福接口基础类
 * by Obelisk
 */
	namespace app\libs;
    use yii;
    use yii\web\Controller;
    use app\modules\basic\models\Params;
	class ToeflApiControl extends Controller {
		public function init() {
            $uid = Yii::$app->session->get('uid');
            $token = isset($_COOKIE['sslToken'])?$_COOKIE['sslToken']:false;
            $tokenOut = isset($_COOKIE['sslTokenOut'])?$_COOKIE['sslTokenOut']:false;
            if($tokenOut){
                if($uid){
                    session_destroy();
                }
            }else{
                if(!$uid){
                    if($token){
                        $date = Method::curl_post(Yii::$app->params['loginUrl'].'/cn/ssl-api/web-check',['token' => $token]);
                        $data = json_decode($date,true);
                        if($data['code'] == 1){
                            Method::confim_user($data['info']);
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