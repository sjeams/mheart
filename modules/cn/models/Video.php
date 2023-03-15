<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
// use app\libs\QueryList;
use QL\QueryList;
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
    public static function getQueryUrl($page,$belong,$type=0,$search)
    {
		// 类型  0国产--1主播/  2少女  3熟女 4日韩  5其它  6AI/明星  7三级 8精品  9无码  10 收藏
			// 新东方
			if($belong==1){
				// $type = $type?$type:40;
				if($type){
					$list=array(
						// array($belong,40,'国产主播',"/vod/type/id/$type/page/$page.html",'https://www.zhishub-wwwjipotv.cc:2083'),
						array($belong,12,'国产主播',"/vod-type-id-$type-pg-$page.html",'https://huakuizy0.com'),
					);
				}else{ 
					// https://yinwovideo.com/index.php/vod/search/page/1/wd/婚礼.html
					$list=array(
						array($belong,12,'国产主播',"/?m=vod-index-pg-$page.html",'https://huakuizy0.com'),
					);
			
				}
			}else if($belong==2){
				// $type = $type?$type:24;
				if($type){
					$list=array(
						array($belong,20,'国产主播',"/index.php/vod/type/id/$type/page/$page.html",'https://laoyazy54.com'),
					);
				}else{
					// http://tantanzy11.com/index.php/vod/search/page/1/wd/邱淑贞.html
					$list=array(
						array($belong,20,'国产主播',"/index.php/vod/search/page/$page/wd/$search.html",'https://laoyazy54.com'),
					);
				}
			}else if($belong==3){
				// $type = $type?$type:24;
				if($type){
					$list=array(
						array($belong,22,'国产主播',"/index.php/vod/type/id/$type/page/$page.html",'https://sewozy16.com/'),
					);
				}else{
					// http://tantanzy11.com/index.php/vod/search/page/1/wd/邱淑贞.html
					$list=array(
						array($belong,22,'国产主播',"/index.php/vod/search/page/$page/wd/$search.html",'https://sewozy16.com/'),
					);
				}
			}else if($belong==4){
				// $type = $type?$type:1;
				if($type){
					$list=array(
						array($belong,1,'国产主播',"/index.php/vod/type/id/$type/page/$page.html",'https://tantanzy11.com'),
					);
				}else{
					// http://tantanzy11.com/index.php/vod/search/page/1/wd/邱淑贞.html
					$list=array(
						array($belong,1,'国产主播',"/index.php/vod/search/page/$page/wd/$search.html",'https://tantanzy11.com'),
					);
				}

			}else if($belong==5){
				// $type = $type?$type:1;
				// https://siwazyw.cc/index.php/vod/type/id/20/page/2.html
				if($type){
					$list=array(
						array($belong,1,'国产主播',"/index.php/vod/type/id/$type/page/$page.html",'https://siwazyw.cc'),
					);
				}else{
					// http://tantanzy11.com/index.php/vod/search/page/1/wd/邱淑贞.html
					$list=array(
						array($belong,1,'国产主播',"/index.php/vod/search/page/$page/wd/$search.html",'https://siwazyw.cc'),
					);
				}

			}else{
				return false;
			}	
			// 小站
			// array(2,2,'小站备考心经','https://gre.zhan.com/beikao/'),
	
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
    public static function getQueryList($page,$belong,$isquery=0,$type=0,$search='')
    {
		$res =Video::getQueryUrl($page,$belong,$type,$search);
		// var_dump($res);die;
		if($res){ 
			$Rlist =[];
			foreach($res as$key=> $v){
				switch($v['belong']){
					case 1 :     	
						// $content1= array('#tpl-img-content li>a','href','');
						// $content2= array('#tpl-img-content li>a','title','');
						// $content3= array('#tpl-img-content li a>img','src','');
						// $model	='#tpl-img-content';

						// $content1= array('.stui-vodlist .title>a','href','');
						// $content2= array('.stui-vodlist .title>a','title','');
						// $content3= array('.stui-vodlist img','src','');
						$content1= array('','href','');
						$content2= array(' ul li','html','');
						$content3= array(' ul li>img','src','');
						$rang='.content .row';
					break;
					case 2 :   		// 小站
						// $content1= array('','href','');
						// $content2= array(' ul li','html','img');
						// $content3= array(' ul li>img','src','');
						// $rang='.content .row';
						$content1= array('.videoName','href','');
						$content2= array('.videoName','text','');
						$content3= array('.videoName>img','src','');
						$rang='.videoContent li ';

					break;
					case 3 :   		// 小站
						$content1= array('.videoName','href','');
						$content2= array('.videoName','text','');
						$content3= array('.videoName>img','src','');
						$rang='.videoContent li ';
					break;

					case 4 :   		// 小站
						$content1= array(' .name','href','');
						$content2= array(' .name','html','');
						$content3= array('.name>img','src','');
						$rang='.content .nr li span ';
					break;
					case 5 :   		// 小站
						$content1= array(' a','href','');
						$content2= array(' a','title','');
						$content3= array(' a .img>img','data-src','');
						$rang='.block-post .item ';
					break;
				}
				// var_dump($v['http'].$v['url'] );die;
				// 抓取列表  --结果
				$httpurl =$v['http'].$v['url'];
				// var_dump($httpurl);die;
				$rules=array(
					'url' =>  $content1,
					'title' => $content2,
					'imageurl' => $content3,
				);
 
				$ql = QueryList::rules($rules);
				$data =$ql->get($httpurl)->range($rang)->queryData();
				$ql->destruct();
				// var_dump($data);die;
				// if($v['belong']==3){
				// 	var_dump($v);
				// }	
				if($isquery){
					foreach($data as $ky=>$val){
						$data[$ky]['http'] =$v['http'];
						$data[$ky]['belong'] =$v['belong'];
						$data[$ky]['type'] =$v['type'];
					}
					return $data;die;
				}else{
					//采集数据处理
					foreach($data as $ky=>$val){
						$Rlist[] = Video::getQueryDetails($v['belong'],$val,$v['type'],$v['http'],$isquery);
					}
				}

			}

		}

		return $Rlist;
	}

	// 抓取详情 --存入本地
    public static function getQueryDetails($belong,$val,$type,$http,$isquery=0)
    {
		switch($belong){
			case 1 :     	// 新东方
				// $content1= array('.copy_text .hidden-xs ','text');
				// $content2= array('.img-responsive ','src');
				// $model	='.xqy_core_main';
				$content1= array('#playId1','value');
				$content2= array('.theme .detail img','src','-img');
				$content3= array('.theme .detail img','title');
				$link =$http.$val['url'];
				// var_dump($link);			
				$rules=array(
					'content' => $content1,
					'imageurl' => $content2,
					'title' => $content3
				);
				// var_dump($link);die;
				$ql = QueryList::rules($rules);
				$data1 =$ql->get($link)->queryData();
				$ql->destruct();
				// var_dump($data1);die;
				if(!empty($data1['content'] )){
					// preg_match_all('/var vid = "(.*?)"/is',$data1['content'],$array);
					// var_dump($array);die;
					// $data1['content'] = iconv("gb2312","UTF-8",$data1['content']);
					// $videourl = str_replace('正片$','',$data1['content']);
					// $videourl = str_replace('$','',$data1['content']);
					// $videourl = str_replace('高清$','',$data1['content']);
					$videourl = str_replace('正片$','',$data1['content']);
					$videourl = str_replace('高清$','',$data1['content']);

					$args['url']=$videourl;
					$args['title']= addslashes($data1['title']);
					// $args['imageurl']=$val['imageurl'];
					$args['imageurl']=$data1['imageurl'];
					if((string)strpos($args['imageurl'],'http')==''){
						$args['imageurl']=$http.$args['imageurl'];
					} 
					$args['type']= $type;
					$args['belong']= $belong;
					$args['link']= $link;
					// var_dump($args);die;
					// return $videourl;
					if(!$isquery){
						Yii::$app->signdb->createCommand()->insert('x2_video', $args)->execute();
					}
					return $args;
				
				} 
	

			break;
			case 2 :     	// 新东方
				
				// // $val['title']= Method::getMytrim($val['title']);
				// $content1= array('#playId1','value');
				// $content2= array('.theme .detail img','src','-img');
				// $content3= array('.theme .detail img','title');
				// // $content2= array('h1','text');
				// // $model	='.xqy_core_main';
				// $link =$http.$val['url'];
	 
				// $rules=array(
				// 	'content' => $content1,
				// 	'imageurl' => $content2,
				// 	'title' => $content3
				// );
				// $ql = QueryList::rules($rules);
				// $data1 =$ql->get($link)->queryData();
				// $ql->destruct();
				// // var_dump($val['title']);die;
				// if(!empty($data1['content'] )){
		 
				// 	// preg_match_all('/正片\$(.*?)/is',$data1['content'],$array);
				// 	$videourl = str_replace('正片$','',$data1['content']);
				// 	$videourl = str_replace('高清$','',$data1['content']);
				// 	// var_dump($array);die;
				// 	$args['url']=$videourl;
				// 	$args['title']= addslashes($data1['title']);
				// 	$args['imageurl']=$data1['imageurl'];
 
				// 	if((string)strpos($args['imageurl'],'http')==''){
				// 		$args['imageurl']=$http.$args['imageurl'];
				// 	} 
				// 	$args['type']= $type;
				// 	$args['belong']= $belong;
				// 	$args['link']= $link;
				// 	// var_dump($args);die;
				// 	// return $videourl;
				// 	// var_dump($args);die;
				// 	if(!$isquery){
				// 		Yii::$app->signdb->createCommand()->insert('x2_video', $args)->execute();
				// 	}
				// 	return $args;
				// } 
				$args = Video::getQueryDetailsMethod3($belong,$val,$type,$http,$isquery);
				if($args){
					return 	$args;
				}

			break;

			case 3 :      
				$args = Video::getQueryDetailsMethod3($belong,$val,$type,$http,$isquery);
				if($args){
					return 	$args;
				}
			break;
			case 4 :     	// 新东方
				
				$val['title']= Method::getMytrim($val['title']);
				$content1= array('li input','value');
				$content2= array('.lazy ','src');
	 
				// $content2= array('h1','text');
				// $model	='.xqy_core_main';
				$link =$http.$val['url'];
				// var_dump($link);
				$rules=array(
					'content' => $content1,
					'imageurl' => $content2
				);
				$ql = QueryList::rules($rules);
				$data1 =$ql->get($link)->queryData();
				$ql->destruct();

				// var_dump($data1);die;
				if(!empty($data1['content'] )){
					// $data1['content'] = iconv("gb2312","UTF-8",$data1['content']);
					// preg_match_all('/正片\$(.*?)/is',$data1['content'],$array);
					$videourl = str_replace('在线播放$','',$data1['content']);
					// $videourl = str_replace('正片$','',$data1['content']);
					// $videourl = str_replace('高清$','',$data1['content']);
					// var_dump($array);die;
					$args['url']=$videourl;
					$args['title']= addslashes($val['title']);
					$args['imageurl']=$data1['imageurl'];
 
					if((string)strpos($args['imageurl'],'http')==''){
						$args['imageurl']=$http.$args['imageurl'];
					} 
					$args['type']= $type;
					$args['belong']= $belong;
					$args['link']= $link;
					// var_dump($args);die;
					// return $videourl;
					// var_dump($args);die;
					if(!$isquery){
						Yii::$app->signdb->createCommand()->insert('x2_video', $args)->execute();
					}
					return $args;
				} 

			break;
			case 5 :     	// 新东方
				
				$val['title']= Method::getMytrim($val['title']);
				$content1= array('#input','value');
				// $content2= array('.lazy ','src');
	 
				// $content2= array('h1','text');
				// $model	='.xqy_core_main';
				$link =$http.$val['url'];
				// var_dump($link);
				$rules=array(
					'content' => $content1,
					// 'imageurl' => $content2
				);
				$ql = QueryList::rules($rules);
				$data1 =$ql->get($link)->queryData();
				$ql->destruct();

			
				if(!empty($data1['content'] )){
					// $data1['content'] = iconv("gb2312","UTF-8",$data1['content']);
					// preg_match_all('/正片\$(.*?)/is',$data1['content'],$array);
					$videourl = str_replace('在线播放$','',$data1['content']);
					$videourl = str_replace('HD$','',$data1['content']);
					// $videourl = str_replace('正片$','',$data1['content']);
					// $videourl = str_replace('高清$','',$data1['content']);
					// var_dump($array);die;
					$args['url']=$videourl;
					$args['title']= addslashes($val['title']);
					$args['imageurl']=$val['imageurl'];
 
					if((string)strpos($args['imageurl'],'http')==''){
						$args['imageurl']=$http.$args['imageurl'];
					} 
					$args['type']= $type;
					$args['belong']= $belong;
					$args['link']= $link;
					// var_dump($args);die;
					// return $videourl;
					// var_dump($args);die;
					if(!$isquery){
						Yii::$app->signdb->createCommand()->insert('x2_video', $args)->execute();
					}
					return $args;
				} 

			break;
			default:
			return false;
		}
		
	}
	



	public static function getQueryDetailsMethod3($belong,$val,$type,$http,$isquery=0){

			
		$val['title']= Method::getMytrim($val['title']);
		$content1= array('.copy_text font','text');
		$content2= array('.left>img ','src');

		// $content2= array('h1','text');
		// $model	='.xqy_core_main';
		$link =$http.$val['url'];
	
		$rules=array(
			'content' => $content1,
			'imageurl' => $content2
		);
		$ql = QueryList::rules($rules);
		$data1 =$ql->get($link)->queryData();
		$ql->destruct();
		// var_dump($data1);die;
		if(!empty($data1['content'] )){
 
			// preg_match_all('/正片\$(.*?)/is',$data1['content'],$array);
			$videourl = str_replace('正片$','',$data1['content']);
			$videourl = str_replace('高清$','',$data1['content']);
			
			// var_dump($array);die;
			$args['url']=$videourl;
			$args['title']= addslashes($val['title']);
			$args['imageurl']=$data1['imageurl'];

			if((string)strpos($args['imageurl'],'http')==''){
				$args['imageurl']=$http.$args['imageurl'];
			} 
			$args['type']= $type;
			$args['belong']= $belong;
			$args['link']= $link;
			// var_dump($args);die;
			// return $videourl;
			// var_dump($args);die;
			if(!$isquery){
				Yii::$app->signdb->createCommand()->insert('x2_video', $args)->execute();
			}
			return $args;
		}else{
			return null;
		} 
 
	}





	public static function getxdfDetails($id){
		return Video::find()->where("id=$id")->asarray()->One();
	}


	public static function isCollect($list,$user_id=0){
		$find_collect=[];
		$find_my_collect=[];
		if($list){
			// var_dump(array_column($list,'title'));die;
			$list_collect =  "'".implode("','",array_column($list,'title'))."'" ;
			// $list_collect = addslashes($list_collect);
			$find_collect =Video::find()->select('title')->where("title in ($list_collect)")->asarray()->all();
			$find_collect = array_column($find_collect,'title');
			
			$video_id = implode(",",array_column($list,'id'));
			$my_collect = VideoListCollect::find()->select('video_id')->where("video_id in($video_id) and user_id =$user_id ")->asarray()->all();
			$find_my_collect = array_column($my_collect,'video_id');
			//是否收藏
			foreach($list as$key=> $v){
				//收藏
				$find_title =$v['title'];
				if(in_array( $find_title, $find_collect) ){
					$list[$key]['collect']=1;
				}else{
					$list[$key]['collect']=0;
				}    
				//我的收藏
				$find_title =$v['id'];
				if(in_array( $find_title, $find_my_collect) ){
					$list[$key]['my_collect']=1;
				}else{
					$list[$key]['my_collect']=0;
				}   
			}
		}
		return $list;
	}

 

	public static function deleteCollect($id){
        //管理员权限1可删除
        $graden = WechatUser::getGraden();
        if($graden){
			Video::deleteAll("id ='$id' ");
			return 1;
        }
		return 0;
	}

}

?>
