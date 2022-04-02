<?php
// 后台基本框架
namespace app\modules\admin\models;

use yii\db\ActiveRecord;
class AdminInit extends ActiveRecord
{
    public static function tableName(){
        return '{{%admin_init}}';
    }

    /**
     * 获取所有模块
     * @sjeam
     */
    public static function getAdminIint(){
        $adminIint = AdminInit::find()->asarray()->All();
        $data=  AdminInit::getChildren($adminIint);
        return $data;
    }
    /**
     * 无限递归分类
     * @sjeam
     */
     public static function getChildren($list,$pid=0){
        $arr=array();
        foreach ($list as $key =>$value){
            if($value['pid']==$pid){
                $value['child']=AdminInit::getChildren($list,$value['id']);
                if($value['pid']==0){
                     $arr[$value['name']]=$value['child'];
                }elseif($value['pid']==1){
                     $arr[$value['name']]=$value;
                }else{
                    if(empty($value['child'])){
                        unset($value['child']);
                    }
                     $arr[]=$value;
                }
            }
        }
        return $arr;
 
     }

    // public static function getChildrenList($list,$pid=0){
    //    $arr=array();
    //    foreach ($list as $key =>$value){
    //        if($value['pid']==$pid){
    //            $value['child']=AdminInit::getChildrenList($list,$value['id']);
    //            $arr[]=$value;
    //        }
    //    }
    //    return $arr;
    // }

    /**
     * 获取所有模块
     * @sjeam
     */
     public static function getAdminMenus(){
        $adminIint = AdminInit::find()->select("id,pid,name,title,url,update,remark,createTime,id,pid")->asarray()->All();
        $data=  AdminInit::getTree($adminIint);
        return $data;
    }
    //生成树方法
    public static function getTree($data,$pid=0,$level=0){
        static $res=array();
        static $key=0;
        foreach($data as $k=>$v){
            if($v['pid']==$pid){
                $key++;
                $v['level']=$level;  //$level 用于识别当前分类的级别
                // if($v['pid']==0){  $v['parentId']='-1';}else{ $v['parentId']=1; }
                $isMenu  = AdminInit::find()->where("pid = {$v['id']}")->asarray()->One();
                if($isMenu){  $v['Summary']=1; }else{ $v['Summary']=0; }
                // $v['Milestone']= 0;
                $v['edit']= 0;  // 修改状态 定义未 0  未修改
                // $v['record']= 0;
                // $v['menuIcon']=$v['icon'];
                // $v['authorityId']= $v['id'];
                // $v['UID']=$key;
                $res[]=$v;
                AdminInit::getTree($data,$v['id'],$level+1);//将查询出的$v['id']，作为参数进行递归
                //level 加一
            }else{
                $v['isMenu']=0;
            }
        }
        return $res;
    }


    //修改菜单
    public static function updateMeanAll($data){
        foreach($data as$key=>$v){ //修改所有
        //   if($v['edit']==1){
            //   $agrs['name']=$v['name'];
              $agrs['title']=$v['title'];
              $agrs['url']=$v['url'];
              $agrs['remark']=$v['remark'];
              $agrs['pid']=$v['pid'];
              $agrs['createTime']=time();
              $updateId=$v['id'];
            //   $findOne=  AdminInit::find()->where("id=$updateId")->one();
                // if($v['id']){
                    AdminInit::updateAll($agrs,"id=$updateId"); //修改
                // }else{
                //     $agrs['update']='<input type="button" value="编辑节点" onclick="onEditNode()"/> <input type="button" value="删除节点" onclick="onRemoveNode()"/>';
                //     Yii::$app->db->createCommand()->insert('x2_admin_init',$agrs)->execute();
                // }
                if(isset($v['children'])){
                    AdminInit:: updateMeanAll($v['children']);
                }
        //   }
        }
      }

    /**
     * 获取弹出树
     * @sjeam
     */
    public static function getAdminMenusTree(){
        $data = AdminInit::find()->select("id,title as text,pid,url")->asarray()->All();
        // $data=  AdminInit::getTree($adminIint);
        return $data;
    }

}
