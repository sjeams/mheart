<?php
/*
 * @Author: sjeam
 * @Date: 2022-06-13 16:34:53
 * @Description:  app 接口--操作属性
 */
namespace app\modules\app\controllers;

use app\libs\Method;
use app\libs\Pager;
use app\libs\ApiUserControl;
use Yii;
use UploadFile;


use app\modules\app\models\User;
use app\modules\app\models\UserBiology;
use app\modules\app\models\UserBiologyAttribute;
use app\modules\app\models\UserBiologyNatureDo;
use app\modules\app\models\UserBiologySkill;
use app\modules\app\models\UserLogin;
use app\modules\app\models\Words;
use app\modules\app\models\UserWords;
use app\modules\app\models\UserServer;
use app\modules\app\models\UserGoods;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type,x-requested-with,Authorization, x-ui-request,lang');
header('Access-Control-Allow-Credentials: true;');

header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');

class AppApinewController extends ApiUserControl{
    public $param; 
    public $user_info; 
    public $userid; 
    public $UserBiology; 
    public $UserBiologyAttribute; 
    public $UserBiologyNatureDo; 
    public $UserBiologySkill; 
    public $UserLogin; 
    public $Words; 
    public $UserServer;
    function init(){
        parent::init();
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
 
        //  include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
        $this->UserBiology=new UserBiology();
        $this->UserBiologyAttribute=new UserBiologyAttribute();
        $this->UserBiologyNatureDo=new UserBiologyNatureDo();
        $this->UserBiologySkill=new UserBiologySkill();
        $this->UserLogin=new UserLogin();
        $this->Words=new Words();
        $this->UserServer=new UserServer();
        $this->param = json_decode(Yii::$app->request->post('data'),true);//游客标识码 // key =123&name =cc 拼接 
    }
    public $enableCsrfValidation = false;


    /**
     * 随机获取一个生物--抽卡
     * http://cs.aheart.com/app/app-apinew/user-biology
     */
    public function actionUserBiology(){
        $UserBiologyNatureDo=new UserBiologyAttribute();
        $count = $UserBiologyNatureDo->getUserBiologyAttributeCount();
        if($count>=BIOLOGY_COUNT){
            die(Method::jsonApp(0,null,'生物背包已满！'));
        }else{
            $UserBiology= new UserBiology(); 
            $data = $UserBiology->getBiologyRand();
            die(Method::jsonApp(1,$data,'succes'));
        }
    }

    /**
     * 写入阵法--布阵
     * http://cs.aheart.com/app/app-apinew/add-position
     */
    public function actionAddPosition(){
        $param =$this->param;
        $UserBiologyNatureDo=new UserBiologyNatureDo();
        $data=$UserBiologyNatureDo->addPosition($param['biologyid'],$param['doid'],$param['is_add']);
        if($data){
            die(Method::jsonApp(1,null,'succes'));
        }else{
            die(Method::jsonApp(0,null,'最多只能放置5个'));
        }
    }

    /**
     * 请求战斗--战斗
     * http://cs.aheart.com/app/app-apinew/fight
     */
    public function actionFight(){
        $param =$this->param;
        $map_int =$param['map_int']?:3;//生物地图序号_阵容编号--系统战斗，获取地图编号时才回用到
        $UserBiologyNatureDo=new UserBiologyNatureDo();
        $UserWords =new UserWords();
        //获取自己战斗阵容
        $my_biology = $UserBiologyNatureDo->getValueList();
        //获取对象战斗阵容
        if($param['userid']){ //玩家
            $do_biology = $UserBiologyNatureDo->getValueList($param['userid']);
        }else{//系统怪，随时刷新不做存留
            $do_biology = $UserWords->getMapValueListSystem($map_int,'nature_do');
        }
        if(empty($do_biology)){
            die(Method::jsonApp(0,null,'地图'.$map_int.'不存在！'));  
        }
        // $map =$UserWords->getFightingMap();
        // var_dump($do_biology);die;
        //战斗系统--返回战斗结果
        $data =  $UserBiologyNatureDo->getFightSystem($my_biology,$do_biology,$map_int);
        //如果胜利--系统战斗
        if($data['poition_winner']&&!$param['userid']){
            // 修改地图状态
            $UserWords->updateMapSystemDie($map_int);//死亡移除
        }
        // var_dump($data);die;
        // var_dump($data['fighting_history'][1]['fighting_history'][1]['putong'][0]);die;
        // var_dump($data['fighting_history'][1]['fighting_history'][1]);die; 
        // var_dump($data);die;
        // var_dump($data['fighting_msg']);die;
        // var_dump($data['fighting_history'][1]['fighting_history'][4]);//战斗记录
        // var_dump($data['fighting_goods_my']);//物品奖励结果
        // var_dump($data['poition_winner']);
        // foreach($data['fighting_msg'] as $v){
        //     echo $v.'<br>';
        // }
        // die;
        // var_dump($data['fighting_history'][1]['fighting_history'] [4]);die;
        // var_dump($data['fighting_history'][1]['fighting_history'][1]['putong'][0]['my_biology_extend']);die;
        //战斗序号
        $sn_id = Method::fightingJson($data,$this->userid);//唯一记录，不然占内存
        // $user_in_word =  $UserWords->getUserWord();//返回正在经行的世界
        die(Method::jsonApp(1,['sid'=>$sn_id],'succes'));  
        // die(Method::jsonApp(1,$data,'succes')); 
    }

    /**
     * 生物列表
     * http://cs.aheart.com/app/app-apinew/biology-list
     */
    public function actionBiologyList(){
        $UserBiologyNatureDo=new UserBiologyAttribute();
        $data=$UserBiologyNatureDo->myAttributesList();
        die(Method::jsonApp(1,$data,'succes')); 
    }

    

    /**
     * 背包类型
     * http://cs.aheart.com/app/app-apinew/gooduse-type
     * biologyid  gooduse
     */
    public function actionGooduseType(){
        $UserGoods= new UserGoods();
        $data=$UserGoods->getGooduseType();
        die(Method::jsonApp(1,$data,'succes'));
    }


   /**
     * 添加装备栏--武器--元神
     * http://cs.aheart.com/app/app-apinew/add-backpaker
     * biologyid  gooduse
     */
    public function actionAddBackpaker(){
        $param['biologyid']=170;
        $UserGoods= new UserGoods();
        $data=$UserGoods->addBiologyBackpaker($this->param);
        die(Method::jsonApp(1,$data,'succes'));    
    }
    /**
     * 生物背包--武器--元神
     * http://cs.aheart.com/app/app-apinew/biology-backpaker
     * biologyid  gooduse
     */
    public function actionBiologyBackpaker(){
        //可用物品--12技能书   1武器
        // $good_use = $param['good_use']?$param['good_use']:1;
        $param['biologyid']=170;
        $UserGoods= new UserGoods();
        $data=$UserGoods->getBiologyBackpaker($this->param);
        die(Method::jsonApp(1,$data,'succes'));   
    }




    /**
     * 用户背包
     * http://cs.aheart.com/app/app-apinew/user-backpaker
     * gooduse
     */
    public function actionUserBackpaker(){
        $param['gooduse']=5;
        //可用物品--12技能书   1武器
        $UserGoods=new UserGoods();
        $data=$UserGoods->getUserBackpaker($this->param);
        die(Method::jsonApp(1,$data,'succes'));   
    }
    

    








    


}