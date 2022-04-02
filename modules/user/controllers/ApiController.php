<?php
/**
 * 后台用户接口
 * Created by PhpStorm.
 * User: Administrator
 * Date: 15-6-17
 * Time: 下午2:37
 */
namespace app\modules\user\controllers;


use app\libs\PHPExcel;
use app\libs\Sms;
use app\modules\basic\models\Block;
use app\modules\user\models\UserBlock;
use yii;
use yii\web\Controller;
use app\libs\ApiControl;
use app\libs\Method;
use app\modules\user\models\Content;
use app\modules\user\models\User;

class ApiController extends ApiControl {

    public $enableCsrfValidation = false;
    public static $trees = [];

    public function actionUserBlockLst()
    {
        $data = Yii::$app->db->createCommand("select u.userName,u.id as uid,b.* FROM {{%user_block}} ub left join {{%user}} u on ub.userId=u.id left join {{%block}} b on ub.blockId=b.id where u.id is not null")->queryAll();
        foreach ($data as $k => $v){
            if (!empty($v['pid'])){
                self::$trees = [];  //置空
                $this->blockTreeLst($v);
                $tmp = array_reverse(self::$trees);
//                $tmp[] = $v['name'];    //最后一个子类
                $data[$k]['name'] = '';
                foreach ($tmp as $_k => $_v){
                    if ($_k + 1 == count($tmp)){
                        $data[$k]['name'] .= $_v;
                    }else{
                        $data[$k]['name'] .= $_v.'-';
                    }
                }
                unset($data[$k]['id']);
                unset($data[$k]['pid']);
                unset($data[$k]['value']);
                unset($data[$k]['status']);
            }
        }
        echo '<table border="1">
  <tr>
    <th>用户id</th>
    <th>姓名</th>
    <th>权限</th>
  </tr>';
        foreach ($data as $k => $v){
            echo '<tr>
    <td>'.$v['uid'].'</td>
    <td>'.$v['userName'].'</td>
    <td>'.$v['name'].'</td>
  </tr>';
        }


        echo '</table>';
//die(json_encode($data));
    }

    public function blockTreeLst($s_stree)
    {
        if ($s_stree['pid']){
            self::$trees[] = $s_stree['name'];
            $s_streesssss = Block::find()->asArray()->where(['id' => $s_stree['pid']])->one();
            self::blockTreeLst($s_streesssss);
        }else{
            self::$trees[] = $s_stree['name'];
            return self::$trees;
        }

    }

    /**
     * @Author: Ferre
     * @create: 2019/9/4 17:15
     * @throws yii\db\Exception
     * 订单日志-下载
     */
    public function actionDownloadRecord()
    {
        set_time_limit(0);
        $session  = new yii\web\Session();
        $where    = $session->get('record_condition');
        $tmp_data = Yii::$app->db->createCommand("select * from db_order.{{%order_record}} where $where order by createTime DESC")->queryAll();
        $excel    = new \PHPExcel();
        //入Excel处理
        foreach ($tmp_data as $k => $v) {
            $user_data = User::findOne($v['user']);
            if ($user_data){
                $data[$k][0] = $user_data->userName;
            }else{
                $data[$k][0] = $v['user'];
            }
            $data[$k][1] = date('Y-m-d H:i:s', $v['createTime']);
            $data[$k][2] = $v['contentName'];
            $data[$k][3] = $v['consignee'];
            if ($v['endTime'] != 0){
                $v['endTime'] = date('Y-m-d', $v['endTime']);
            }else{
                $v['endTime'] = 0;
            }
            $data[$k][4] = $v['endTime'];
            $data[$k][5] = $v['content'];
            $data[$k][6] = $v['remark'];
        }
        //Excel表格式,这里简略写了9列
        $letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        //表头数组
        $tableheader = ['账号', '时间','商品名', '客户名字', '有效期', '操作日志', '备注'];
        //填充表头信息
        for ($i = 0; $i < count($tableheader); $i++) {
            $excel->getActiveSheet()->setCellValue("$letter[$i]1", "$tableheader[$i]");
        }
        for ($i = 2; $i <= count($data) + 1; $i++) {
            $j = 0;
            foreach ($data[$i - 2] as $key => $value) {
                $excel->getActiveSheet()->setCellValue("$letter[$j]$i", "$value");
                $j++;
            }
        }
        $date  = 'GRE-Order-Log-'.date("Y-m-d", time());
        $write = new \PHPExcel_Writer_Excel5($excel);
        //header 处理
        ob_end_clean();
        header("Pragma: public");
        header("Expires: 0");
        header("Cache-Control:must-revalidate, post-check=0, pre-check=0");
        header("Content-Type:application/force-download");
        header("Content-Type:application/vnd.ms-execl");
        header("Content-Type:application/octet-stream");
        header("Content-Type:application/download");;
        header('Content-Disposition:attachment;filename="' . $date . '.xls"');
        header("Content-Transfer-Encoding:binary");
        $write->save('php://output');
    }

    /**
     * 添加订单
     * by  yanni
     */
    public function actionCreateOrder(){
        $goodsId = Yii::$app->request->post('goods');
        $userId = Yii::$app->request->post('userId');
        $totalMoney = Yii::$app->request->post('totalMoney');
        $favorableDetails = Yii::$app->request->post('favorableDetails');
        $payment = Yii::$app->request->post('payment');
        $name = Yii::$app->request->post('name','');
        $phone = Yii::$app->request->post('phone','');
        $grade = Yii::$app->request->post('grade','');
        $startTime = Yii::$app->request->post('startTime');//直播开始时间
        $endTime = Yii::$app->request->post('endTime');//直播结束时间
        $endTime2 = Yii::$app->request->post('endTime2');//录播结束时间
        $endTime3 = Yii::$app->request->post('endTime3');//面授有效期
        $startTime = $startTime?strtotime($startTime):'';
        $endTime = $endTime?strtotime($endTime):'';
        $endTime2 = $endTime2?strtotime($endTime2):'';
        $endTime3 = $endTime3?strtotime($endTime3):'';
        $model= new Content();
        $goods = $model->getGoods($goodsId);
        $goods = $goods[0];
        $goods['num'] = 1;
        if($endTime2){
            $expireTime = $endTime2;
        } elseif($endTime3){
            $expireTime = $endTime3;
        }else{
            $effective = 60*60*24*120;         //有效时间
            $expireTime = time()+$effective;       //到期时间
        }
        if($payment==3){
            $payable = $totalMoney;
        } elseif($payment==1){
            $payable = 0;
        } else{
            $payable = 0;
        }
        $user = User::find()->asArray()->where("uid={$userId}")->one();
        if(empty($user)&&!empty($userId)){ //by sjeam  用于新用户添加
            // 新用户用户中心进行查找
            include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
            $where = "where u.uid =$userId ";
            $order='';
            $limit='';
            $user = uc_user_get_search($where,$order,$limit)[0];
            $user['userName']=$user ['username'];
            // var_dump($user);die;
        }
        if($phone!=false)$user['phone']=$phone;
        $data = Method::post(Yii::$app->params['orderUrl']."/pay/api/create-order",['uid'=>$user['uid'],'user' => Yii::$app->session->get('adminId'),'username'=>$user['userName'],'phone'=>$user['phone'],'totalMoney' => $totalMoney,'favorableDetails'=>$favorableDetails,'payable'=>$payable,'payment'=>$payment,'grade'=>$grade,'expireTime'=>$expireTime,'address'=>$name,'belong'=>6,'goods'=>$goods,'source'=>2,'startTime'=>$startTime,'endTime'=>$endTime,'endTime3'=>$endTime3]);//source 1-用户下单 2-后台添加
        $result = json_decode($data);
        if(isset($result->code) && $result->code ==1){
            //通知相关人员 //15828654649 18080466578
            $sms = new Sms();
            $adminId = Yii::$app->session->get('adminId');
            $admin = User::find()->where("id = $adminId")->asArray()->one()['userName'];
            $time = date('Y-m-d H:i');
            $content = '管理员账号('.$admin.')于'.$time.'在后台创建了新订单，订单Id:'.$result->orderId.'；订单对象：【'.$goods['contentName'].'】，用户名'.$user['userName'].'，姓名'.$name.'，手机号'.$user['phone'].'，价格'.$totalMoney.'元';
            $sms->send(15828654649, $content, $ext = '', $stime = '', $rrid = '');
        }
        die($data);
    }
    /**
     * 订单操作 短信通知
     * cy
     */
    public function actionOrderMessage(){
        $type = Yii::$app->request->post('type',1);//1-修改 2-删除
        $orderNumber = Yii::$app->request->post('orderNumber','');
        $orderId = Yii::$app->request->post('orderId');
        //通知相关人员 //15828654649 18080466578
        $sms = new Sms();
        $adminId = Yii::$app->session->get('adminId');
        $admin = User::find()->where("id = $adminId")->asArray()->one()['userName'];
        $time = date('Y-m-d H:i');
        $access = $type==1?'修改':'删除';
        if($type ==1){
            $detail = '(订单直播录播时间、班次、备注)';
        }else{
            $detail = '';
        }
        $content = '管理员账号('.$admin.')于'.$time.'在后台'.$access.'了订单'.$detail.'，订单Id：'.$orderId;
        $sms->send(15828654649, $content, $ext = '', $stime = '', $rrid = '');
    }
    /**
     *  搜索内容
     * by yanni
     */
    public function actionSelectContent(){
        $wordKey = Yii::$app->request->get('wordKey');
        $data = Content::find()->asArray()->where(" catId=482 and pid!=0 and name like '%{$wordKey}%' ")->all();
        $data = Content::getContentTag($data);
        if(!empty($data)){
            $res = ['code'=>1,'message'=>'获取成功','data'=>$data];
        } else{
            $res = ['code'=>0,'message'=>'没有相似内容'];
        }
        die(json_encode($res));
    }
    /**
     * 搜索用户
     * by yanni
     */
    public function actionSelectUser(){
        $wordKey = Yii::$app->request->get('wordKey');
     
        $data = User::find()->asArray()->where("phone like '%{$wordKey}%' or email like '%{$wordKey}%'")->all();
        if(!empty($data)){
            $res = ['code'=>1,'message'=>'获取成功','data'=>$data];
        } else{
            // 新用户用户中心进行查找
            include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
            $where = "where u.phone like '%{$wordKey}%' or u.email like '%{$wordKey}%'";
            $order='';
            $limit='';
            $data = uc_user_get_search($where,$order,$limit);
            if(!empty($data)){
                $res = ['code'=>1,'message'=>'获取成功','data'=>$data];
            }else{
                $res = ['code'=>1,'message'=>'没有相似用户'];
            }
       
        }
        die(json_encode($res));
    }
}
