<?php
namespace app\modules\user\models;
use yii\db\ActiveRecord;
class Content extends ActiveRecord {
    public static function tableName(){
        return '{{%content}}';
    }
    /**
     * toefl调用内容
     * @param $select 包含where条件，查询字段，分页，排序
     * @return array
     * @Obelisk
     */
    public static function getClass($select){
        $where = "1=1";
        $where .= isset($select['where'])?" AND ".$select['where']:'';
        $seField = "";
        $fields = isset($select['fields'])?$select['fields']:'';
        //原价
        if(strstr($fields,'originalPrice')){
            $seField .= ",(SELECT ce.value FROM {{%content_extend}} ce WHERE ce.contentId=c.id AND ce.code='61f13913003193ea19e7e1271bca2752') as originalPrice";
        }
        //vip总监
        if(strstr($fields,'vip')){
            $seField .= ",(SELECT ce.value FROM {{%content_extend}} ce WHERE ce.contentId=c.id AND ce.code='63948cf4e1234694cfa02048a77ad754') as vip";
        }
        //总监老师
        if(strstr($fields,'majordomo')){
            $seField .= ",(SELECT ce.value FROM {{%content_extend}} ce WHERE ce.contentId=c.id AND ce.code='ab6df6ee04cfccc7f6ff9aadf0f46a8d') as majordomo";
        }
        //A级培训师
        if(strstr($fields,'A')){
            $seField .= ",(SELECT CONCAT_WS(' ',ce.value,ed.value) From {{%content_extend}} ce left JOIN {{%extend_data}} ed ON ed.extendId=ce.id WHERE ce.contentId=c.id AND ce.code='3aa42936f977b9ef0b1717c646c5f91c') as A";
        }
        //描述
        if(strstr($fields,'description')){
            $seField .= ",(SELECT  CONCAT_WS(' ',ce.value,ed.value) From {{%content_extend}} ce left JOIN {{%extend_data}} ed ON ed.extendId=ce.id WHERE ce.contentId=c.id AND ce.code='32cc8e6f27caf3fdf26e8cfd4e7b4433') as description";
        }
        //培训师
        if(strstr($fields,'trainer')){
            $seField .= ",(SELECT ce.value FROM {{%content_extend}} ce WHERE ce.contentId=c.id AND ce.code='784b0cdb89d960e484f35f8872b7b7ea') as trainer";
        }
        //课程时长
        if(strstr($fields,'duration')){
            $seField .= ",(SELECT ce.value FROM {{%content_extend}} ce WHERE ce.contentId=c.id AND ce.code='c8cc4bd99d4fcfcdfd5673bd635b5bcd') as duration";
        }
        //连接地址
        if(strstr($fields,'url')){
            $seField .= ",(SELECT ce.value FROM {{%content_extend}} ce WHERE ce.contentId=c.id AND ce.code='43f8278a38a3539a7cfcdff67e5af92c') as url";
        }
        //开课日期
        if(strstr($fields,'commencement')){
            $seField .= ",(SELECT ce.value FROM {{%content_extend}} ce WHERE ce.contentId=c.id AND ce.code='90f1d6d0fea6f171e8b82d9cbefee283') as commencement";
        }
        //性价比
        if(strstr($fields,'performance')){
            $seField .= ",(SELECT CONCAT_WS(' ',ce.value,ed.value) From {{%content_extend}} ce left JOIN {{%extend_data}} ed ON ed.extendId=ce.id WHERE ce.contentId=c.id AND ce.code='32cc8e6f27caf3fdf26e8cfd4e7b44f9') as performance";
        }
        //主讲课程
        if(strstr($fields,'speak')){
            $seField .= ",(SELECT CONCAT_WS(' ',ce.value,ed.value) From {{%content_extend}} ce left JOIN {{%extend_data}} ed ON ed.extendId=ce.id WHERE ce.contentId=c.id AND ce.code='dc4793dfb52237db70b240038d086d98') as speak";
        }
        //价格
        if(strstr($fields,'price')){
            $seField .= ",(SELECT CONCAT_WS(' ',ce.value,ed.value) From {{%content_extend}} ce left JOIN {{%extend_data}} ed ON ed.extendId=ce.id WHERE ce.contentId=c.id AND ce.code='0ac9d45187ea22acbadedef8f8ab0e54') as price";
        }
        if(isset($select['category'])){
            if(isset($select['type'])){
                $where .= " AND c.id in(select DISTINCT cc.contentId from {{%category_content}} cc where cc.catId in(".$select['category'].") ) ";
            }else{
                $count = count(explode(",",$select['category']));
                $where .= " AND c.id in(select cc.contentId from {{%category_content}} cc where cc.catId in(".$select['category'].") group by cc.contentId having count(1)=$count ) ";
            }
        }
        $page = isset($select['page'])?$select['page']:1;
        $order = isset($select['order'])?$select['order']:'c.sort ASC,c.id DESC';
        $pageSize = isset($select['pageSize'])?$select['pageSize']:10;
        $limit = (($page-1)*$pageSize).",$pageSize";
        $content = \Yii::$app->db->createCommand("select c.*,ca.name as catName$seField from {{%content}} c LEFT JOIN {{%category}} ca ON c.catId=ca.id where $where ORDER BY $order LIMIT ".$limit)->queryAll();
        if(isset($select['pageStr'])){
            $count = count(\Yii::$app->db->createCommand("select c.*,ca.name as catName$seField from {{%content}} c LEFT JOIN {{%category}} ca ON c.catId=ca.id where $where")->queryAll());
            $pageModel = new Pager($count,$page,$pageSize);
            $pageStr = $pageModel->GetPagerContent();
            $content['pageStr'] = $pageStr;
        }
        return $content;
    }
    /**
     * 获取购物车列表
     * @Obelisk
     */
    public function getGoods($id){
        $sql = "select c.id as contentId,c.image,ca.name as catName,ca.id as catId,c.name as contentName,(SELECT CONCAT_WS(' ',ce.value,ed.value) From {{%content_extend}} ce left JOIN {{%extend_data}} ed ON ed.extendId=ce.id WHERE ce.contentId=c.id AND ce.code='0ac9d45187ea22acbadedef8f8ab0e54') as price from  {{%content}} c LEFT JOIN {{%category}} ca ON c.catId=ca.id WHERE c.id=$id";
        $goods = \Yii::$app->db->createCommand($sql)->queryAll();
        $sql = "select GROUP_CONCAT(c.name) as tag from {{%content_tag}} ct LEFT JOIN {{%content}} c ON c.id=ct.tagContentId WHERE ct.contentId=$id GROUP BY  ct.contentId";
        $data = \Yii::$app->db->createCommand($sql)->queryOne();
        $goods[0]['tag'] = $data['tag'];
        return $goods;
    }
    /**
     * 获取课程的标签内容
     * cy
     */
    public static function getContentTag($data){
        foreach($data as $k => $v){
            $code = 2;//1-直播 2-录播 3-面授
            $tagName = '录播课程';
            $contentId = $v['id'];
            $sql = "select ca.name from {{%content_tag}} ct LEFT JOIN {{%content}} ca ON ct.tagContentId=ca.id WHERE ct.contentId=$contentId AND ct.showd=1 and ct.tagCatId = 553";
            $tag = \Yii::$app->db->createCommand($sql)->queryOne();
            if($tag){
                $tagName = $tag['name'];
                if(preg_match('/直播/',$tagName)){
                    $code  = 1;
                }
                if(preg_match('/录播/',$tagName)){
                    $code = 2;
                }
                if(preg_match('/面授/',$tagName)){
                    $code = 3;
                }
            }
            $data[$k]['name'] = $v['name']."（".$tagName."）";
            $data[$k]['code'] = $code;
            //获取促销价
            $model = new Content();
            $content =  $model->getClass(['fields' => 'price','where' =>"c.id=$contentId",'pageSize' => 1]);
            $price = isset($content[0]['price'])?$content[0]['price']:0;
            $data[$k]['price'] = $price;
        }
        return $data;
    }
}