<?php
/**
 * footer底部组件
 * obelisk
 */
    namespace app\commands\front;
    use yii\base\Widget;
    use app\modules\cn\models\Content;
    use yii;
	class NewsRightWidget extends Widget  {
        public $hot;
        public $guide;
        public $special;
        /**
         * 定义函数
         * */
        public function init()
        {
            $this->hot = Content::getClass(['category' =>"143",'pageSize' => 8]);
            $this->guide = Content::getClass(['category' =>"141",'pageSize' => 9]);
            $this->special = Content::getClass(['category' =>"142",'pageSize' => 8]);
        }

        /**
         * 运行覆盖程序
         * */
        public function run(){
            return $this->render('newsRight',['hot' => $this->hot,'guide' => $this->guide,'special' => $this->special]);
        }
	}
?>