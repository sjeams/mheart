<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
use app\libs\QueryList;

use function PHPSTORM_META\map;

class Video extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%video}}';
    }


	
	
	// 采集列表
    public static function getQueryUrl($page,$belong)
    {

		$list=array(
			// 新东方
			// array($belong,0,'国产主播','/vod/type/id/40/page/'.$page.'.html','https://www.zhishub-wwwjipotv.cc:2083'),
			array($belong,0,'国产主播','/index.php/vod/type/id/20/page/'.$page.'.html','http://aibozy.com/'),
			// 小站
			// array(2,2,'小站备考心经','https://gre.zhan.com/beikao/'),
		);
		//键值处理
		foreach($list as$key=> $v){
			$data[$key]['belong']= $v[0]; // 1【鸡婆TV】 本站永久域名www.jipotv.com
			$data[$key]['type']=	$v[1];  // 类型  --0 主播   1 电影  2 影视剧
			$data[$key]['title']=$v[2];
			$data[$key]['url']=	$v[3];
			$data[$key]['http']=$v[4];
		}
        return $data;
    }


	// 采集数据
    public static function getQueryList($page,$belong)
    {
		$res =Video::getQueryUrl($page,$belong);
		// var_dump($res);die;
		foreach($res as$key=> $v){
			switch($v['belong']){
				case 1 :     	
					$content1= array('#tpl-img-content li>a','href','');
					$content2= array('#tpl-img-content li>a','title','');
					$content3= array('#tpl-img-content li a>img','src','');
					// $model	='#tpl-img-content';
				break;
				case 2 :   		// 小站
					$content1= array('.content .nr li span>a','href','');
					$content2= array('.content .nr li span>a','text','');
					$content3= array('.content .nr li span a>img','src','');
		
				break;
			}
			// 抓取列表  --结果
			$httpurl =$v['http'].$v['url'];
			$data = QueryList::Query($httpurl,array(
				'url' =>  $content1,
				'title' => $content2,
				'imageurl' => $content3,
			))->data;  

			// if($v['belong']==3){
			// 	var_dump($v);
				// var_dump($data );die;
			// }	
			// var_dump($data);die;
			//采集数据处理
			foreach($data as $ky=>$val){
				// $sql = array(false,'xdf_Video',array("oldTitle = '{$val['title']}'"),false);
				// $indata = $this->db->fetch($this->sql->makeSelect($sql));
				$indata=	Video::find()->where("title='{$val['title']}'")->asarray()->One();
				// var_dump($indata);die;
				if(!$indata){
					Video::getQueryDetails($v['belong'],$val,$v['type'],$v['http']);
				}
			}
		}
		return true;
	}

	// 抓取详情 --存入本地
    public static function getQueryDetails($belong,$val,$type,$http)
    {


		

		switch($belong){
			case 1 :     	// 新东方
				$content1= array('.play-body ','text');
				// $content2= array('h1','text');
				// $model	='.xqy_core_main';
				$link =$http.$val['url'];
				// var_dump($link);
			
				$data1 = QueryList::Query($link,array(
					'content' => $content1
				))->data;
			
				if(!empty($data1[0]['content'] )){
					preg_match_all('/var vid = "(.*?)"/is',$data1[0]['content'],$array);
					// var_dump($array);die;
					$args['url']=$array[1][0];
					$args['title']= addslashes($val['title']);
					$args['imageurl']=$val['imageurl'];
					$args['type']= $type;
					$args['belong']= $belong;
					$args['link']= $link;
					// var_dump($args);die;
					// return $array[1][0];
					Yii::$app->signdb->createCommand()->insert('x2_video', $args)->execute();
				} 
	

			break;
			case 2 :     	// 新东方

				$val['title']= Method::getMytrim($val['title']);
				$content1= array('li input','value');
				$content2= array('.lazy ','src');

				// $content2= array('h1','text');
				// $model	='.xqy_core_main';
				$link =$http.$val['url'];
				// var_dump($link);
			
				$data1 = QueryList::Query($link,array(
					'content' => $content1,
					'imageurl' => $content2
				))->data;

				// var_dump($data1);
				if(!empty($data1[0]['content'] )){
					// preg_match_all('/正片\$(.*?)/is',$data1[0]['content'],$array);
					$array[1][0] = str_replace('正片$','',$data1[0]['content']);
					// var_dump($array);die;
					$args['url']=$array[1][0];
					$args['title']= addslashes($val['title']);
					$args['imageurl']=$data1[0]['imageurl'];
					$args['type']= $type;
					$args['belong']= $belong;
					$args['link']= $link;
					// var_dump($args);die;
					// return $array[1][0];
					Yii::$app->signdb->createCommand()->insert('x2_video', $args)->execute();
				} 
	

			break;
		}
 
	}
	
	public static function getxdfDetails($id){
		return Video::find()->where("id=$id")->asarray()->One();
	}


}

?>
