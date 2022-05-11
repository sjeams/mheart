<?php
/**
 * footer底部组件
 * obelisk
 */
    namespace app\commands\front;
    use yii\base\Widget;
    use app\modules\cn\models\Content;
    use yii;
	class RightWidget extends Widget  {
        public $baiKe;
        public $browse;
        /**
         * 定义函数
         * */
        public function init()
        {
            $this->baiKe = Content::getClass(['category' =>"544",'pageSize' => 9]);
            $this->browse = Content::getClass(['where' => 'c.pid=0','fields' => 'alternatives','category' =>"537",'order'=>'viewCount desc','pageSize' => 5]);
        }

        /**
         * 运行覆盖程序
         * */
        public function run(){
            return $this->render('right',['baiKe' => $this->baiKe,'browse' => $this->browse]);
        }
	}
?>