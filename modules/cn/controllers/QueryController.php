<?php
/**
 * 采集   
 * User: sjeam
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use yii\db\ActiveRecord;
use yii;
 
use app\libs\ApiControl;
use app\modules\cn\models\Query;
use yii\data\Pagination;
use app\libs\QueryList;
class QueryController extends ApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'null';
    function init (){
        parent::init();

    }

    public function actionIndex()
    {

        Query::getVideo();

        die(Method::jsonGenerate(1,[],'返回数据成功'));
    }

    


}
