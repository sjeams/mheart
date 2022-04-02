<?php
/**
 * footer底部组件
 * obelisk
 */
    namespace app\commands\front;
    use yii\base\Widget;
    use app\modules\cn\models\Content;
    use app\modules\cn\models\UserAnswer;
    use app\modules\user\models\UserSpeed;
    use yii;
	class UserWidget extends Widget  {
        public $wordNum;
        public $correctNum;
        public $questionTotal;
        /**
         * 定义函数
         * */
        public function init()
        {
            $uid = Yii::$app->session->get('uid');
            $this->questionTotal = UserAnswer::find()->asArray()->where("uid={$uid}")->count();   //做题总数
            $this->correctNum = UserAnswer::find()->asArray()->where("uid={$uid} and correct=1")->count();  //正确总数
            $wordNum = 0;
            $sign = UserSpeed::find()->asArray()->where("userId={$uid}")->all();
            foreach($sign as $v){
                if($v['answer']=='complete'){
                    $wordNum = $wordNum + 10;
                } else {
                    $wordNum = $wordNum + $v['answer'];
                }
            }
            $this->wordNum =$wordNum;
        }

        /**
         * 运行覆盖程序
         * */
        public function run(){
            return $this->render('user',['wordNum' => $this->wordNum,'correctNum' => $this->correctNum,'questionTotal'=>$this->questionTotal]);
        }
	}
?>