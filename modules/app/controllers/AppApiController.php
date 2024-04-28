<?php
/*
 * @Author: sjeam
 * @Date: 2022-06-13 16:34:53
 * @Description:  app 接口---模型窗口
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
use app\modules\app\models\UserServer;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type,x-requested-with,Authorization, x-ui-request,lang');
header('Access-Control-Allow-Credentials: true;');

header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');

class AppApiController extends ApiUserControl{
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
     * 大厅
     * app/app-api/biology-list
     * http://localhost/monster/web/app/app-api/index
     */
    public function actionIndex(){
        // 第一次进来时，弹窗，随机获取一个生物
        $data=array(
            'user_info' => $this->user_info,//用户信息
            'work'  =>false,//任务
        );
        die(Method::jsonApp(1,$data,'succes'));
    }


    /**
     * 获取用户信息--体力随时更新的
     * app/app-api/get-user
     * http://localhost/monster/web/app/app-api/get-user
     */
    public function actionGetUser(){
        $data=User::getUserEnergy();
        die(Method::jsonApp(1,$data,'succes'));
    }
    













        
    // ------------------------所有前端请求更新的api


    /**
     * 获取用户信息--体力随时更新的
     * app/app-api/get-user
     * http://cs.mheart.cn/app/app-api/biology-goods-update
     */
    public function actionBiologyGoodsUpdate(){
        // $data=User::getUserEnergy();
        // var_dump($this->param);die;
        if($this->param['is_bag']){
            $userbiology = array($this->param['goods_key']=>$this->param['goodsid']);
        }else{
            $userbiology = array($this->param['goods_key']=>null);  
        }
        UserBiologyAttribute::updateAll($userbiology,"id=".$this->param['biology_id']);
        $data = (new UserBiologyAttribute())->getBiologyDetail($this->param['biology_id']);
        die(Method::jsonApp(1,$data,'succes'));
    }






    // /**
    //  * 生物列表
    //  * app/app-api/biology-list
    //  * http://localhost/monster/web/app/app-api/biology-list
    //  */
    // public function actionBiologyList(){
    //     $data=array(
    //         'count' => UserBiology::getUserBiologyCount(),//生物统计
    //         'list'  => UserBiology::getUserBiologyList(),//生物列表
    //     );
    //     die(Method::jsonApp(1,$data,'succes'));
    // }

    // /**
    //  * 获取生物布阵
    //  * app/app-api/biology-position
    //  * http://localhost/monster/web/app/app-api/biology-position
    //  */
    // public function actionBiologyPosition(){
    //     $UserBiologyNatureDo=new UserBiologyNatureDo();
    //     $data=$UserBiologyNatureDo->getValueList();
    //     die(Method::jsonApp(1,$data,'succes'));
    // }







    // /**
    //  * 生物属性
    //  * app/app-api/biology-attribute
    //  * http://localhost/monster/web/app/app-api/biology-attribute
    //  */
    // public function actionBiologyAttribute(){
    //     $userBiologyid = $this->param['userBiologyid'];
    //     $biology_userid = intval($this->param['biology_userid']);//0系统生物，其它为玩家
    //     $map_int =$this->param['map_int']?:0;//生物地图序号_阵容编号--系统战斗，获取地图编号时才回用到
    //     $UserBiologyAttribute =new UserBiologyAttribute();
    //     $UserBiologySkill =new UserBiologySkill();
    //     $data=array(
    //         'biology' => $UserBiologyAttribute->getUserBiologyAttribute($userBiologyid,$biology_userid,$map_int),//生物属性
    //         'skill'  => $UserBiologySkill->getUserBiologySkill($userBiologyid),//生物列表
    //     );
    //     die(Method::jsonApp(1,$data,'succes'));
    // }

    /**
     * 生物技能--属性
     * app/app-api/biology-skill
     * http://localhost/monster/web/app/app-api/biology-skill
     */
    public function actionBiologySkill(){
        die(Method::jsonApp(1,$data,'succes'));
    }


 
    /**
     * 生物背包--装备
     * app/app-api/biology-packet
     * http://localhost/monster/web/app/app-api/biology-packet
     */
    public function actionBiologyPacket(){
        die(Method::jsonApp(1,$data,'succes'));
    }
    
    /**
     * 用户背包--使用
     * app/app-api/user-packet
     * http://localhost/monster/web/app/app-api/user-packet
     */
    public function actionUserPacket(){
        die(Method::jsonApp(1,$data,'succes'));
    }

 
    /**
     * 生物融合
     * app/app-api/biology-compound
     * http://localhost/monster/web/app/app-api/biology-compound
     */
    public function actionBiologyCompound(){
        die(Method::jsonApp(1,$data,'succes'));
    }
 
    /**
     * 装备合成
     * app/app-api/equip-compound
     * http://localhost/monster/web/app/app-api/equip-compound
     */
    public function actionEquipCompound(){
        die(Method::jsonApp(1,$data,'succes'));o;
    }
    

}