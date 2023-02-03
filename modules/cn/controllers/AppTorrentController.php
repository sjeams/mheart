<?php
/**
 * app
 * User: sjeam
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use app\libs\Torrent;
use yii\db\ActiveRecord;
use yii;
use yii\web\Controller;
use app\libs\VideoApiControl;
use app\modules\cn\models\Video;
use app\modules\cn\models\Jian;

use app\modules\cn\models\VideoList;
use app\modules\cn\models\VideoListDetail;
use app\modules\cn\models\VideoListCollect;

use app\modules\cn\models\Category;
use app\modules\cn\models\CategoryName;
use app\modules\cn\models\Query;
use yii\data\Pagination;
use app\modules\cn\models\WechatUser;
use base;
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type,x-requested-with,Authorization, x-ui-request,lang');
header('Access-Control-Allow-Credentials: true;');

header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');
class AppTorrentController extends Controller
{
    public $enableCsrfValidation = false;
    public $layout = 'cn';
 
    public  $user;
    function init (){
        // parent::init();
        // set_time_limit(0);
        // $this->user = Yii::$app->session->get('userlogin');
        // if(!$this->user){
        //     // 判断http还是https
        //     $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
        //     $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/login/login';
        //     header('Location: '.$href);die;
        // }
    }
    // http://cs.mheart.xyz/cn/app-torrent/index
    public function actionIndex()
    {
        $dataList =   CategoryName::find()->where("belong!=0")->asArray()->all();
        $res = VideoList::find()->where(" search like'%龙珠%' ")->asarray()->one();
        $newsData =   json_decode($res['value'],true);
        // $count =$res['count'];
        die(Method::jsonGenerate(1,['newsData'=>$res,'dataList'=>$dataList],'返回数据成功'));
    }   
 
        //解析实例
    public function actionAnalysis()
    {
 
       
    } 

}
