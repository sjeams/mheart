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
	public $user_info; 
    public $userId; 
    public $goods_type; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userId =  $this->user_info['userid'];
    }
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%video}}';
    }

	public static function getCategoryId($belong,$type)
    {
		$category = Category::find()->select('category_id')->where("belong =$belong and type =$type")->One();
		return $category?$category->category_id:0;

	}
	
 
	public static function getQueryUrl($page,$belong,$type=0,$search)
    {

		$category_id = Video::getCategoryId($belong,$type);
		$list=[];
		// 类型  0国产--1主播/  2少女  3熟女 4日韩  5其它  6AI/明星  7三级 8精品  9无码  10 收藏
			// 新东方
			if($belong==1){
				$type = $type?$type:12;
				if($search){
					// https://yinwovideo.com/index.php/vod/search/page/1/wd/婚礼.html
					$list=array($belong,$type,'花魁',"/index.php/vod/search/page/$page/wd/$search.html",'https://aosikazy1.com');
						// array($belong,$type,'花魁',"/?m=vod-index-pg-$page.html",'https://huakuizy0.com'),
						
				 
				}else{ 
					$list=array($belong,$type,'花魁',"/index.php/vod/type/id/$type/page/$page.html",'https://aosikazy1.com');
						// array($belong,40,'国产主播',"/vod/type/id/$type/page/$page.html",'https://www.zhishub-wwwjipotv.cc:2083'),
						// array($belong,$type,'花魁',"/vod-type-id-$type-pg-$page.html",'https://huakuizy0.com'),
					 
				}
			}else if($belong==2){
				$type = $type?$type:20;
				if($search){			 
						// https://laoyazy54.com
						// https://aosikazy1.com/index.php/vod/type/id/20.html https://lyzyz66.com/
						// array($belong,$type,'丝袜',"/index.php/vod/search/page/$page/wd/$search.html",'https://aosikazy1.com'),
						$list=array($belong,$type,'丝袜',"/index.php/vod/search/page/$page/wd/$search.html",'https://lyzyz66.com');
					 
				}else{
				 
						$list=	array($belong,$type,'丝袜',"/index.php/vod/type/id/$type/page/$page.html",'https://lyzyz66.com');
						// array($belong,$type,'丝袜',"/index.php/vod/type/id/$type/page/$page.html",'https://aosikazy1.com'),
				 
				}
			}else if($belong==3){
				$type = $type?$type:22;
				if($search){
					// https://sewozy16.com https://www.sewoav.cc
					$list=	array($belong,$type,'SW',"/index.php/vod/search/page/$page/wd/$search.html",'https://sewoav21.com');
			 
				}else{
					$list=array(
						array($belong,$type,'SW',"/index.php/vod/type/id/$type/page/$page.html",'https://sewoav21.com'),
					);
				}
			}else if($belong==4){
				$type = $type?$type:1;
				//如果是图片
				if($category_id==2){
						$list=array($belong,$type,'探探',"/index.php/art/type/id/$type/page/$page.html",'https://tantanzy88.com');
				}else{
					if($search){
						// http://tantanzy11.com/index.php/vod/search/page/1/wd/邱淑贞.html
						$list=array($belong,$type,'探探',"/index.php/vod/search/page/$page/wd/$search.html",'https://tantanzy88.com');
						// array($belong,$type,'探探',"/type/2.html",'https://436727.166477.com'),
					}else{
						$list=	array($belong,$type,'探探',"/index.php/vod/type/id/$type/page/$page.html",'https://tantanzy88.com');
							// array($belong,$type,'探探',"/type/$type-$page.html",'https://436727.166477.com'),
					}
				}
			}else if($belong==5){
				// siwazyw.cc  siwazyw.tv https://siwazyw.com  https://siwazyw.tv
				$type = $type?$type:1;
				// https://siwazyw.cc/index.php/vod/type/id/20/page/2.html
					if($search){
						$list=array($belong,$type,'国产主播',"/index.php/vod/search/page/$page/wd/$search.html",'https://siwazyw.com');
				 
					}else{
				 
						$list=array($belong,$type,'国产主播',"/index.php/vod/type/id/$type/page/$page.html",'https://siwazyw.com');
					 
					}
			}else if($belong==6){
				// https://436727.166477.com   //6584.xyz
				if($search){
					$list=array($belong,$type,'色色',"/so/$search/$page.html",'https://8jqg.6584.xyz');
				}else{
					$list=array($belong,$type,'色色',"/list/$type/$page.html",'https://8jqg.6584.xyz');
				}
			}else{
				return false;
			}	
		//键值处理
		// foreach($list as$key=> $v){
			$data['belong']=$list[0]; // 1【鸡婆TV】 本站永久域名www.jipotv.com
			$data['type']=$list[1];  // 类型  --0 主播   1 电影  2 影视剧
			$data['title']=$list[2];
			$data['url']=	$list[3];
			$data['http']=$list[4];
			$data['category_id']=$category_id;
		// }
        return $data;
    }

	// 采集数据
    public static function getQueryListModel($page,$belong,$isquery=0,$type=0,$search='')
    {
		$list =Video::getQueryUrl($page,$belong,$type,$search);

		if($list){ 
			$Rlist =[];
			switch($list['belong']){
				case 1 :     	
					$content1= array('','href','');
					$content2= array(' ul li','html','');
					$content3= array(' ul li>img','src','');
					$rang='.content .row';
				break;
				case 2 :   		// 小站
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
				break;
				case 5 :   		// 小站
					$content1= array(' a','html','');
					$content2= array(' a','title','');
					$content3= array(' a .img>img','data-src','');
					$rang='.block-post .item ';
				break;
				case 6 :   		// 小站
					$content1= array('','href','');
					$content2= array(' .txt p','text','');
					$content3= array(' .pic>img','data-src','');
					$rang='.box4 .vdd a';
				break;
			}
			// 抓取列表  --结果
			$httpurl =$list['http'].$list['url'];
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
					$data[$ky]['http'] =$list['http'];
					$data[$ky]['belong'] =$list['belong'];
					$data[$ky]['type'] =$list['type'];
					if($belong==6){
						//取链接中的id					 
						preg_match('/\d+/',$val['url'],$matches);
						$data[$ky]['title'] =$matches[0];
						// var_dump($data[$ky]['title']);die;
					}
				}
				return $data?$data:[];die;
			}else{
				//采集数据处理
				foreach($data as $ky=>$val){
					$Rlist[] = Video::getQueryDetails($list['belong'],$val,$list['type'],$list['http'],$isquery);
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
				$category_id = Video::getCategoryId($belong,$type);
				if($category_id==2){
					$args = Video::getQueryDetailsMethodPic1($belong,$val,$type,$http,$isquery);
				}else{
					$args = Video::getQueryDetailsMethod1($belong,$val,$type,$http,$isquery);
				}
				if($args){
					return 	$args;
				}
			break;
			case 5 :  
				$val['title']= Method::getMytrim($val['title']);
				$content1= array('#input','value');
				$link =$http.$val['url'];
				$rules=array(
					'content' => $content1,
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
			case 6 :  
				$data1['title']= Method::getMytrim($val['title']);
				$link =$http.$val['url'];
				$data1['content'] ="https://cdn59.com:10059/".$val['title']."/hls/index.m3u8";
				if(!empty($data1['content'] )){
					$data1['imageurl']=$val['imageurl'];
					$args = video::videoDetailsMethod($data1,$type,$belong,$link,$isquery,$http);
					return $args;
				}  
			break;
			default:
			return false;
		}
	}
	public static function getQueryDetailsMethod6($data1,$type,$belong,$link,$isquery,$http){
		$args['type']= $type;
		$args['belong']= $belong;
		$args['link']= $link;
		// var_dump($args);die;
		// isquery 0 需要写入， 1 不需要写入
		if(!$isquery&&$args!=null){
			// Yii::$app->signdb->createCommand()->insert('x2_video_list_detail', $args)->execute();
			Video::insertVideo($args);
		}else{
			$args = Video::geturlDetails($args);//验证视频是否入库--查看库是否已经存在m3u8视频
		}
		return $args;
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



	public static function getQueryDetailsMethod1($belong,$val,$type,$http,$isquery=0){
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
		}else{
			return null;
		} 
	}

	public static function getQueryDetailsMethodPic1($belong,$val,$type,$http,$isquery=0){
		// $rang=' div>img';
		$val['title']= Method::getMytrim($val['title']);
		// $content1= array('li input','value');
		$content2= array('.meitu>div','html');
		// $content2= array(' .artplayinfo','div');
		// $model	='.xqy_core_main';
		$link =$http.$val['url'];
		// var_dump($link);die;
		$rules=array(
			'imageurl' => $content2
		);
		$ql = QueryList::rules($rules);
		$data =$ql->get($link)->queryData();
		$ql->destruct();
		// var_dump($data);die;
		$preg_str = '/<img\s+src="([^"]+)"/i';
		preg_match_all($preg_str, $data['imageurl'], $result);
		$image_list =$result[1];;
		if($image_list){
			$args['id']=time(); //id作为时间戳吧
			$args['url']='';
			$args['imageurl'] =$image_list[0];
			$args['image_list'] =$image_list; //图片多加个图片列表
			$args['title']=$val['title'];
			$args['type']= $type;
			$args['belong']= $belong;
			$args['link']= $link;
			return $args;
		}else{
			return null;
		} 
		// var_dump($img_list);die;
		// preg_match('/\d+/', $val['url'], $result);
		// $keyid=$result[0];
		// $val['title']='ppw_'.$keyid;
		// $data1=array(
		// 	'content' => "https://cdn73.com:10073/$keyid/index.m3u8",
		// 	'imageurl' => $val['imageurl']
		// );


		// if(!empty($data1['content'] )){
		// 	$data1['title']=$val['title'];
		// 	$args = video::videoDetailsMethod($data1,$type,$belong,$link,$isquery,$http);
			// return $args;
		// }else{
		// 	return null;
		// } 
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
		// $args['imageurl'] = str_replace( 'https://img.siwapay.com:5278/','https://img.siwazywimg2.com:5278/',$args['imageurl']);
		// $args['imageurl'] = str_replace( 'https://img.siwazywimg:5278/','https://img.siwazywimg2.com:5278/',$args['imageurl']);
		$args['type']= $type;
		$args['belong']= $belong;
		$args['link']= $link;
		// var_dump($args);die;
		// isquery 0 需要写入， 1 不需要写入
		if(!$isquery&&$args!=null){
			// Yii::$app->signdb->createCommand()->insert('x2_video_list_detail', $args)->execute();
			Video::insertVideo($args);
		}else{
			$args = Video::geturlDetails($args);//验证视频是否入库--查看库是否已经存在m3u8视频
		}
		return $args;
	}



	//写入视频
	public static function insertVideo($args){
		if(Yii::$app->params['insertVideo_iscache']){
			$length = count(Yii::$app->params['insertVideo']);
			Yii::$app->params['insertVideo'][$length]=$args;
		}else{
			Yii::$app->signdb->createCommand()->insert('x2_video_list_detail', $args)->execute();
		}
	}
	//批量插入，暂时无法用，请求太慢了
    public static function updateVidoeMethod($link){
        $video_list=[];
        $insertVideo = Yii::$app->params['insertVideo'];
        if(count($insertVideo)>0){
            // var_dump( $insertVideo );die;
            $new_key = array_keys($insertVideo[0]);
            Video::batchInsertVideo('x2_video_list_detail',$new_key,$insertVideo);
            //重置容器
            Yii::$app->params['insertVideo']=[];
        }
        //重新查找插入的链接
        $video_list =VideoListDetail::find()->where("link in ($link)")->asarray()->all();
        return  $video_list;
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
			//返回查到视频--修改旧的视频地址--源地址不同就修改
			if($link!=$res['link']){
				$old_url_id = $res['id'];
				VideoListDetail::updateAll(['link' =>$link],"id =$old_url_id");
			}
			return $res;
		}else{
			//视频不存在，写入
			// Yii::$app->signdb->createCommand()->insert('x2_video_list_detail', $args)->execute();
			Video::insertVideo($args);
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
			//特殊字符转义
			$list_collect = array_column($list,'title');
			foreach($list_collect as $key=>$val){
				$list_collect[$key]=addslashes($val);
			}
			$list_collect =  "'".implode("','",$list_collect)."'" ;
			// $list_collect = addslashes($list_collect);
			$find_collect =Video::find('title')->select('title')->where("title in ($list_collect)")->asarray()->all();
			$find_collect = array_column($find_collect,'title');
			$video_id = implode(",",array_column($list,'id'));
			if($video_id){
				$my_collect = VideoListCollect::find('video_id')->select('video_id')->where("video_id in($video_id) and user_id =$user_id ")->asarray()->all();
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
