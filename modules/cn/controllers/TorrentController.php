<?php
/**
 * 首页
 * User: sjeam
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use app\libs\Torrent;
use yii\db\ActiveRecord;
use yii;

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

class TorrentController extends VideoApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'cn';
    // public  $passwordav='111av'; //av
    // public  $passwordsp=111; //视频
    public  $login=0; //av
    public  $user;
    function init (){
        parent::init();
        // var_dump(111);die;
        set_time_limit(0);
        $this->user = Yii::$app->session->get('userlogin');
        $this->login= intval($this->user['graden']); // 0未登录
        if(!$this->user){
            // 判断http还是https
            $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
            $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/login/login';
            header('Location: '.$href);die;
        }
        // $status= Yii::$app->session->get('login');
        // if($status==$this->passwordav){
        //     $this->login=1;
        // }else if($status==$this->passwordsp){
        //     $this->login=2;
        // }else{
        //     $this->login=0;
        // }
    }
    public function actionIndex()
    {
        return $this->render('index');
    }   
    /**
     * 基本信息
     * by  sjeam
     * http://cs.mheart.xyz/cn/torrent/analysis
     */
    public function actionAnalysis()
    {
        // $id = Yii::$app->request->post('id');
        // $code = Video::deleteCollect($id);
        //  $res = Method::GetVideos($url);
         // 测试
        //  $data = file_get_contents('magnet:?xt=urn:btih:0A896722C6B55C6007CDB9B339BDF7E0ACA4F760');
        //  header('Content-type: application/octet-stream; charset=utf8');
        //  Header("Accept-Ranges: bytes");
        //  header('Content-Disposition: attachment; filename='.'BT种子.torrent');
        //  echo $data;die;
         
    //      $s = file_get_contents("magnet:?xt=urn:btih:0A896722C6B55C6007CDB9B339BDF7E0ACA4F760");
    // $bc = new xBEncoder();
    // $bc->init();
    // $bc->decode($s, strlen($s));
    // var_dump($bc->y);die;
                $url ="http://www.torrent.org.cn/api.php?url=magnet:?xt=urn:btih:0A896722C6B55C6007CDB9B339BDF7E0ACA4F760";
                $url ="magnet:?xt=urn:btih:0A896722C6B55C6007CDB9B339BDF7E0ACA4F760";
                $res = Method::curl_post_fix("https://api.magnet-vip.com/api2/magnetinfo",['url'=>$url ]);
                $res = json_decode($res,true);
                //  var_dump( $res );die;
                        //   $res = Method::GetUrl($url);
                $hash = $res['info']['infoHash'];
                    //    var_dump( $res );die;
                    $url ="https://api.magnet-vip.com/api2/download/". $hash;
                        // var_dump( $res );die;

                        //   $url ="http://bt.box.n0808.com/66/C4/0A896722C6B55C6007CDB9B339BDF7E0ACA4F760.torrent";
        //  $str = file_get_contents ( $url);


            $Lightbenc=new Torrent();

            //  $btfile = $Lightbenc->bdecode_getinfo('r1.torrent');
            $btfile = $Lightbenc->bdecode_getinfo( $url);
            var_dump($btfile['info']['files']);die;
            //获取种子文件信息
            echo '<strong>种子文件名</strong>：'.$btfile['info']['name'].'<br />';
            
            echo '<strong>种子文件数</strong>：'.$btfile['info']['filecount'].'<br />';
            
            echo '<strong>种子大小</strong>：'.$btfile['info']['size'].'<br />';
            
            echo '<strong>磁力链接</strong>：'.'magnet:?xt=urn:btih:'.$btfile['info_hash'].'<br />';
            
            echo '<strong>下载种子</strong>：'.'http://bt.box.n0808.com/'.substr($btfile['info_hash'],0,2).'/'.substr($btfile['info_hash'],38).'/'
                .$btfile['info_hash'].'.torrent'.'<br />';
            
            echo '<strong>备用下载</strong>：'.'http://torcache.net/torrent/'.$btfile['info_hash'].'.torrent'.'<br />';
            
            echo '<strong>备用下载</strong>：'.'http://btcache.sobt.org/'.$btfile['info_hash'].'.torrent'.'<br />';
            
            echo '<strong>备用下载</strong>：'.'https://zoink.it/torrent/'.$btfile['info_hash'].'.torrent'.'<br />';
            
            echo '<br /><strong>文件信息</strong>：<br />';
            
            foreach ($btfile['info']['files'] as $f) {
                echo '—文件总大小：' . $f['length'] . ' byte<br />';
                echo '—文件列表：<br />';
            
                foreach ($f['path'] as $path) {
                    echo '——' . $path . '<br />';
                }
                echo '<br />';
            }
 
    } 

}
