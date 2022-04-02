<?php
/**
 * 记录管理
 * Created by PhpStorm.
 * User: Administrator
 * Date: 15-6-17
 * Time: 下午2:37
 */
namespace app\modules\user\controllers;


use app\modules\user\models\User;
use yii;
use app\libs\AppControl;
use app\libs\Method;
use app\modules\user\models\AdminRecord;

class RecordController extends AppControl {
    public $enableCsrfValidation = false;
    //用户列表
    public function actionIndex()
    {
        $page = Yii::$app->request->get('page',1);
        $beginTime = strtotime(Yii::$app->request->get('beginTime',''));
        $endTime = strtotime(Yii::$app->request->get('endTime',''));
        $user  = Yii::$app->request->get('user','');
        $where="belong=6";
        if($beginTime){
            $where .= " AND createTime>=$beginTime";
        }
        if($endTime){
            $where .= " AND createTime<=$endTime";
        }
        if($user){
            $where .= " AND user = $user";
        }
        $data = Method::post("https://order.viplgw.cn/pay/api/order-record",['where' => $where,'pageSize' => 10,'page' => $page]);
        Method::setRecordSession($where);   //订单日志-下载session设置
        $data = json_decode($data,true);
        $count = $data['count'];
        $data = $data['data'];
        foreach ($data as $k=>$v){
            $tmp_user = User::findOne($v['user']);
            if ($tmp_user){
                $data[$k]['user'] = $tmp_user->userName;
            }
        }
        $page = Method::getPagedRows(['count'=>$count,'pageSize'=>10, 'rows'=>'models']);
        return $this->render('index',['page' => $page,'data' => $data,'block' => $this->block]);
    }

}
