<?php
/*
 * @Author: sjeam
 * @Date: 2022-11-04 10:35:02
 * @Description: 
 */
/**
 * 底部菜单组件
 */
    namespace app\commands;
    use yii\base\Widget;
    use yii;
    use app\models\Block;
	class BeiAnWidget extends Widget  {
    
        public $userlogin;
 
        /**
         * 运行覆盖程序
         * */
        public function run(){
            // return $this->render('left',['data' => $this->data,'controller' => $this->controller,'module' => $this->module,'blockArr' => $this->blockArr]);
            return $this->render('beian',[]);
        }
	}
?>
