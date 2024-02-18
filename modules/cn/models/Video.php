<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
// use app\libs\QueryList;
use QL\QueryList;

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
		$list=[];
		// 类型  0国产--1主播/  2少女  3熟女 4日韩  5其它  6AI/明星  7三级 8精品  9无码  10 收藏
			// 新东方
			if($belong==1){
				$type = $type?$type:12;
				if($search){
					// https://yinwovideo.com/index.php/vod/search/page/1/wd/婚礼.html
					$list=array(
						// array($belong,$type,'花魁',"/?m=vod-index-pg-$page.html",'https://huakuizy0.com'),
						array($belong,$type,'花魁',"/index.php/vod/search/page/$page/wd/$search.html",'https://aosikazy1.com'),
					);
				}else{ 
					$list=array(
						// array($belong,40,'国产主播',"/vod/type/id/$type/page/$page.html",'https://www.zhishub-wwwjipotv.cc:2083'),
						// array($belong,$type,'花魁',"/vod-type-id-$type-pg-$page.html",'https://huakuizy0.com'),
						array($belong,$type,'花魁',"/index.php/vod/type/id/$type/page/$page.html",'https://aosikazy1.com'),
					);
				}
			}else if($belong==2){
				$type = $type?$type:20;
				if($search){
					// http://tantanzy11.com/index.php/vod/search/page/1/wd/邱淑贞.html
					$list=array(
						// https://laoyazy54.com
						// https://aosikazy1.com/index.php/vod/type/id/20.html https://lyzyz66.com/
						// array($belong,$type,'丝袜',"/index.php/vod/search/page/$page/wd/$search.html",'https://aosikazy1.com'),
						array($belong,$type,'丝袜',"/index.php/vod/search/page/$page/wd/$search.html",'https://lyzyz66.com'),
					);
				}else{
					$list=array(
						array($belong,$type,'丝袜',"/index.php/vod/type/id/$type/page/$page.html",'https://lyzyz66.com'),
						// array($belong,$type,'丝袜',"/index.php/vod/type/id/$type/page/$page.html",'https://aosikazy1.com'),
					);
				}
			}else if($belong==3){
				$type = $type?$type:22;
				if($search){
					// http://tantanzy11.com/index.php/vod/search/page/1/wd/邱淑贞.html
					// https://sewozy16.com
					$list=array(
						array($belong,$type,'SW',"/index.php/vod/search/page/$page/wd/$search.html",'https://www.sewoav.cc'),
					);
				}else{
					$list=array(
						array($belong,$type,'SW',"/index.php/vod/type/id/$type/page/$page.html",'https://www.sewoav.cc'),
					);
				}
			}else if($belong==4){
				$type = $type?$type:1;
				if($search){
					// http://tantanzy11.com/index.php/vod/search/page/1/wd/邱淑贞.html
					$list=array(
						array($belong,$type,'探探',"/index.php/vod/search/page/$page/wd/$search.html",'https://tantanzy88.com'),
						// array($belong,$type,'探探',"/type/2.html",'https://436727.166477.com'),
					);
				}else{
					$list=array(
						array($belong,$type,'探探',"/index.php/vod/type/id/$type/page/$page.html",'https://tantanzy88.com'),
						// array($belong,$type,'探探',"/type/$type-$page.html",'https://436727.166477.com'),
					);
				}

			}else if($belong==5){
				// siwazyw.cc  siwazyw.tv
				$type = $type?$type:1;
				// https://siwazyw.cc/index.php/vod/type/id/20/page/2.html
				if($search){
					// http://tantanzy11.com/index.php/vod/search/page/1/wd/邱淑贞.html
					$list=array(
						array($belong,$$type,'国产主播',"/index.php/vod/search/page/$page/wd/$search.html",'https://siwazyw.tv'),
					);
				}else{
					$list=array(
						array($belong,$type,'国产主播',"/index.php/vod/type/id/$type/page/$page.html",'https://siwazyw.tv'),
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
						$content1= array('.uzimg','href','');
						$content2= array('.uzimg','title','');
						$content3= array('.uzimg>.lazy','data-original','');
						$rang='.myvod ul>li ';
					break;

					case 4 :   		// 小站
						$content1= array(' .name','href','');
						$content2= array(' .name','html','');
						$content3= array('.name>img','src','');
						$rang='.content .nr li   ';
						// $content1= array('  ','href','');
						// $content2= array('  .txt>p','html','');
						// $content3= array('  .pic>img','data-original','');
						// $rang='  .vods .vod';
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
				// // $content1= array('.copy_text .hidden-xs ','text');
				// // $content2= array('.img-responsive ','src');
				// // $model	='.xqy_core_main';
				// $content1= array('#playId1','value');
				// $content2= array('.theme .detail img','src','-img');
				// $content3= array('.theme .detail img','title');
				// $link =$http.$val['url'];
				// // var_dump($link);			
				// $rules=array(
				// 	'content' => $content1,
				// 	'imageurl' => $content2,
				// 	'title' => $content3
				// );
				// // var_dump($link);die;
				// $ql = QueryList::rules($rules);
				// $data1 =$ql->get($link)->queryData();
				// $ql->destruct();
				// var_dump($data1);die;
				// if(!empty($data1['content'] )){
				// 	$args = video::videoDetailsMethod($data1,$type,$belong,$link,$isquery,$http);
				// 	return $args;
				// } 
				$args = Video::getQueryDetailsMethod5($belong,$val,$type,$http,$isquery);
				if($args){
					return 	$args;
				}
			break;
			case 2 :     	// 新东方
 
				$args = Video::getQueryDetailsMethod3($belong,$val,$type,$http,$isquery);
				if($args){
					return 	$args;
				}

			break;

			case 3 :      
				$args = Video::getQueryDetailsMethod4($belong,$val,$type,$http,$isquery);
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
				// var_dump($link);die;
				$rules=array(
					'content' => $content1,
					'imageurl' => $content2
				);
				$ql = QueryList::rules($rules);
				$data1 =$ql->get($link)->queryData();
				$ql->destruct();
				// preg_match('/\d+/', $val['url'], $result);
				// $keyid=$result[0];
				// $val['title']='ppw_'.$keyid;
				// $data1=array(
				// 	'content' => "https://cdn73.com:10073/$keyid/index.m3u8",
				// 	'imageurl' => $val['imageurl']
				// );
				if(!empty($data1['content'] )){
					$data1['title']=$val['title'];
					$args = video::videoDetailsMethod($data1,$type,$belong,$link,$isquery,$http);
					return $args;
				} 
			break;
			case 5 :  
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
					$data1['title']=$val['title'];
					$data1['imageurl']=$val['imageurl'];
					$args = video::videoDetailsMethod($data1,$type,$belong,$link,$isquery,$http);
					return $args;
				}  
			break;
			default:
			return false;
		}
	}
	
	public static function getQueryDetailsMethod2($belong,$val,$type,$http,$isquery=0){
		// $val['title']= Method::getMytrim($val['title']);
		$content1= array('#playId1','value');
		$content2= array('.theme .detail img','src','-img');
		$content3= array('.theme .detail img','title');
		$link =$http.$val['url'];
		$rules=array(
			'content' => $content1,
			'imageurl' => $content2,
			'title' => $content3
		);
		$ql = QueryList::rules($rules);
		$data1 =$ql->get($link)->queryData();
		$ql->destruct();
		if(!empty($data1['content'] )){
			$args = video::videoDetailsMethod($data1,$type,$belong,$link,$isquery,$http);
			return $args;
		}else{
			return null;
		} 
	}
	public static function getQueryDetailsMethod3($belong,$val,$type,$http,$isquery=0){
		$val['title']= Method::getMytrim($val['title']);
		$content1= array('.copy_text font','text');
		$content2= array('.left>img ','src');
		$content3= array('.left a>img ','src');
		$link =$http.$val['url'];
		$rules=array(
			'content' => $content1,
			'imageurl' => $content2,
			'imageurl2' => $content3
		);
		$ql = QueryList::rules($rules);
		$data1 =$ql->get($link)->queryData();
		$ql->destruct();
		if(!empty($data1['content'] )){
			$data1['imageurl']=$data1['imageurl']?$data1['imageurl']:$data1['imageurl2'];
			$data1['title']=$val['title'];
			$args = video::videoDetailsMethod($data1,$type,$belong,$link,$isquery,$http);
			return $args;
		}else{
			return null;
		} 
	}

	public static function getQueryDetailsMethod5($belong,$val,$type,$http,$isquery=0){
		$val['title']= Method::getMytrim($val['title']);
		$content1= array('#playId1','value');
		$content2= array('.theme .detail>img ','src');
		$content3= array('.theme .detail>img','title');
		$link =$http.$val['url'];
		$rules=array(
			'content' => $content1,
			'imageurl' => $content2,
			'title' => $content3
		);
		$ql = QueryList::rules($rules);
		$data1 =$ql->get($link)->queryData();
		$ql->destruct();
		if(!empty($data1['content'] )){
			$data1['imageurl']=$data1['imageurl']?$data1['imageurl']:$data1['imageurl2'];
			// $data1['title']=$val['title'];
			$args = video::videoDetailsMethod($data1,$type,$belong,$link,$isquery,$http);
			return $args;
		}else{
			return null;
		} 
	}
	public static function getQueryDetailsMethod4($belong,$val,$type,$http,$isquery=0){
		// $val['title']= Method::getMytrim($val['title']);
		$content1= array('.vwbg','html');
		$content2= array('.theme .detail img','src','-img');
		$content3= array('.theme .detail img','title');
		$link =$http.$val['url'];
		$rules=array(
			'content' => $content1,
			'imageurl' => $content2,
			'title' => $content3
		);
		$ql = QueryList::rules($rules);
		$data1 =$ql->get($link)->queryData();
		$ql->destruct();
		//获取jq中的url 地址
		preg_match("/<script(.*?)>var player_aaaa=(.*?)<\/script>/",$data1['content'],$rel);
		// preg_match("/aaaa=({.*?})/", $rel[2],$res);
		$new_json = json_decode($rel[2],true);
		$data1['content'] = $new_json['url'];
		// exec('echo \''.$res[1].'\' | jq -r .', $output);
		// $json_str =trim($res[1]);
		// https://www.sewoav.cc/index.php/vod/play/id/182149/sid/1/nid/1.html
		if(!empty($data1['content'] )){
			$data1['imageurl']=$data1['imageurl']?$data1['imageurl']:$val['imageurl'];
			$data1['title']=$val['title'];
			$args = video::videoDetailsMethod($data1,$type,$belong,$link,$isquery,$http);
			return $args;
		}else{
			return null;
		} 
	}
	//处理视频公用方法
	public static function videoDetailsMethod($data1,$type,$belong,$link,$isquery,$http){
		// $data1['content'] = iconv("gb2312","UTF-8",$data1['content']);
		$data1['content'] = str_replace('在线播放$','',$data1['content']);
		$data1['content'] = str_replace('HD$','',$data1['content']);
		$data1['content']  = str_replace('正片$','',$data1['content']);
		$data1['content']  = str_replace('高清$','',$data1['content']);
		$data1['content'] = str_replace('第1集$','',$data1['content']);

		$videourl = str_replace('$','',$data1['content']);
		$args['url']= trim($videourl);
		$args['title']= addslashes(trim($data1['title']));
		$args['imageurl']=$data1['imageurl'];
		if((string)strpos($args['imageurl'],'http')==''){
			$args['imageurl']=$http.$args['imageurl'];
		}
		// siwa第三方图片路径错误--图片处理
		// UPDATE x2_video SET imageurl =  REPLACE(imageurl, 'https://img.siwapay.com:5278/','https://img.siwazywimg2.com:5278/')
		$args['imageurl'] = str_replace( 'https://img.siwapay.com:5278/','https://img.siwazywimg2.com:5278/',$args['imageurl']);
		$args['imageurl'] = str_replace( 'https://img.siwazywimg:5278/','https://img.siwazywimg2.com:5278/',$args['imageurl']);
		$args['type']= $type;
		$args['belong']= $belong;
		$args['link']= $link;
		// var_dump($args);die;
		// isquery 0 需要写入， 1 不需要写入
		$args = Video::geturlDetails($args);//验证视频是否入库--查看库是否已经存在m3u8视频
		if(!$isquery&&$args!=null){
			Yii::$app->signdb->createCommand()->insert('x2_video', $args)->execute();
		}
		return $args;
	}

	public static function getxdfDetails($id){
		return Video::find()->where("id=$id")->asarray()->One();
	}
	//查看是否已经存在视频url--已存在不再写入--m3u8唯一，不在重复写入
	public static function geturlDetails($args){
		$res =[];
		$where = " 1=1";
		if($args['url']){
			$url = $args['url'];
			$belong =$args['belong'];
			$type =$args['type'];
			$link =$args['link'];
			$where.=" and url='$url' and belong = '$belong'   and type = '$type' ";
			$res =VideoListDetail::find()->where($where)->asarray()->One();
		}
		if($res){
			//返回查到视频--修改旧的视频地址
			$old_url_id = $res['id'];
			VideoListDetail::updateAll(['link' =>$link],"id =$old_url_id");
			return $res;
		}else{
			//视频不存在，写入
			Yii::$app->signdb->createCommand()->insert('x2_video_list_detail', $args)->execute();
			$args['id']=Yii::$app->signdb->getLastInsertID();
			return $args;
		}
	}
	public static function isCollect($list,$user_id=0){
		$find_collect=[];
		$find_my_collect=[];
		$my_collect = [];
		if($list){
			// var_dump(array_column($list,'title'));die;
			$list_collect =  "'".implode("','",array_column($list,'title'))."'" ;
			// $list_collect = addslashes($list_collect);
			$find_collect =Video::find()->select('title')->where("title in ($list_collect)")->asarray()->all();
			$find_collect = array_column($find_collect,'title');
			$video_id = implode(",",array_column($list,'id'));
			if($video_id){
				$my_collect = VideoListCollect::find()->select('video_id')->where("video_id in($video_id) and user_id =$user_id ")->asarray()->all();
			} 
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
				if(isset($v['id'])){
					$find_title =$v['id'];
					if(in_array( $find_title, $find_my_collect) ){
						$list[$key]['my_collect']=1;
					}else{
						$list[$key]['my_collect']=0;
					}   
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
	//批量添加
	public static function batchInsertVideo($name,$userkey,$uservale){
		// $userkey=['login','password','nicename','email','create_time'];//测试数据键
		// $uservale=array(
		// 	 '0'=>array('admin2','2b571c42c2d79deb9872aeb0befc0124','admin','1111@qq.com','2017-07-21 15:47:07'),
		// 	 '1'=>array('admin1','2b571c42c2d79deb9872aeb0befc0124','admin','2222@qq.com','2017-07-21 15:47:07'),
		// 	 '2'=>array('admin55','2b571c42c2d79deb9872aeb0befc0124','admin','3333@qq.com','2017-07-21 15:47:07'),
		// 	 '3'=>array('admin66','2b571c42c2d79deb9872aeb0befc0124','admin','4444@qq.com','2017-07-21 15:47:07'),
		//  );//测试数据值
		$res=[];
		$total= \Yii::$app->signdb->createCommand()->batchInsert($name, $userkey, $uservale)->execute();//执行批量添加
		$firstId= Yii::$app->signdb->getLastInsertID();
		if($total){
			$lastId= $firstId+$total;
			$res =Yii::$app->signdb->createCommand("select * from $name where id>=$firstId and id<=$lastId ")->queryAll();
		}
		return $res;
	}
	//批量添加
	public static function batchUpdateVideo($name,$uservale){
		$sql = Video::batchUpdate($name,"id","type", $uservale);
		// $res= \Yii::$app->signdb->createCommand()->batchUpdate($name,"id","type",$uservale)->execute();//执行批量添加
		$res = Yii::$app->signdb->createCommand($sql)->execute();
		return $res;
	}
	public static function batchUpdate($table, $key, $val, $data){
        $ids = implode(",", array_column($data, $key));
        $condition = " ";
        foreach ($data as $v){
            $condition .= "WHEN {$v[$key]} THEN {$v[$val]} ";
        }
        $sql = "UPDATE `{$table}` SET  {$val} = CASE {$key} {$condition} END WHERE {$key} in ({$ids})";
        return $sql;
    }
 
}

?>
