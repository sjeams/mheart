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
	class HeaderWidget extends Widget  {
    
        public $userlogin;
        /**
         * 定义函数
         * */
        public function init()
        {
            // $userId = Yii::$app->session->get('adminId');
            // $model = new Block();
            // $navId = $model->find()->where(['value' => $this->module,'pid' => 1])->one();
            // $this->data = $model->find()->where(['pid' => $navId->id ,'status' => 1])->orderBy('id')->all();
            // $userBlock = Yii::$app->db->createCommand("select ub.blockId from {{%user_block}} ub LEFT JOIN {{%block}} b ON ub.blockId = b.id WHERE ub.userId = $userId AND b.pid=$navId->id")->queryAll();
            // foreach($userBlock as $v){
            //     $this->blockArr[] = $v['blockId'];
            // }
            $this->userlogin = Yii::$app->session->get('userlogin');
            // var_dump($userlogin);die;
        }

        /**
         * 运行覆盖程序
         * */
        public function run(){
            // return $this->render('left',['data' => $this->data,'controller' => $this->controller,'module' => $this->module,'blockArr' => $this->blockArr]);
            return $this->render('header',['userlogin'=>$this->userlogin]);
        }
	}
?>
