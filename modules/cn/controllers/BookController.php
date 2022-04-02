<?php
/**
 * 首页
 * Created by PhpStorm.
 * User: obelisk
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use yii\db\ActiveRecord;
use yii;

use app\libs\ApiControl;
use app\modules\cn\models\Jump;

class BookController extends ApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'not';
    function init (){
        parent::init();

    }

    /**
     * GRE活动页
     * by  yanni
     */
    public function actionIndex()
    {
        $banner =Jump:: getBanner('教材首页');
        // var_dump($banner);die;
        $this->title = '轮回之门';
        $this->keywords = '回合制游戏、卡牌、召唤、融合、装备、BOOS、竞技、爆装备、修仙、穿越、仙侠';
        $this->description = '永久免费，大型手机回合制游戏。数千种功法，几十个不同小说电影世界，不同世界人物的交互，跨世纪的修仙游戏。';
        return $this->render('index', ['banner'=>$banner]);
    }





}
