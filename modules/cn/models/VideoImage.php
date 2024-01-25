<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
use app\libs\QueryList;

use function PHPSTORM_META\map;

class VideoImage extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%video_image}}';
            // $file_base =new VideoImage();
            // $file_base->addBaseImage('http://img.lytuchuang9.com/upload/vod/20230201-1/1ecd299d59e3148a611e30a0a5154a81.jpg');
            // die;
    }
    
    public  function getImageByUrl($image) {
        $res = VideoImage::find()->select('base_id')->where("image_url='$image'")->One();

        return $res ;
    }
    public  function addBaseImage($image_url,$category_belong=0) {
        //不存在图片写入
        if(!$this->getImageByUrl($image_url)){
            //网络图片转换成basse64
            $base =$this->getBaseImage($image_url);
            $args['base_image']=$base;
            $args['image_url']=$image_url;
            $args['category_belong']=$category_belong;
            $this->insertBaseImage($args);
        }
    }

    public  function insertBaseImage($args) {
        Yii::$app->signdb->createCommand()->insert('x2_video_image',$args)->execute();
    }

    public  function getBaseImage($image) {
        // $image ='http://img.lytuchuang52.com/upload/vod/20240119-1/945055c32f86febbf9692b23ec71e7bd.jpg';
        // 读取原始图片文件
        // $image = 'path/to/your/image.jpg'; // 替换成你自己的图片路径
        list($width, $height) = getimagesize($image);
        $sourceImage = imagecreatefromjpeg($image);
        // 创建新的画布，设置宽高比例
        // $newWidth = round(1024 / ($width / $height)); // 根据需要调整压缩后的尺寸大小
        // $newHeight = round(768 / ($height / $width));
        //只判断宽度--大于512 进行压缩--约等于400kb = 400000bytes
        if($width>512){
            $newWidth =512;
            // $newWidth = round($width*($width / $height)); // 根据需要调整压缩后的尺寸大小
            $newHeight = round($height*($newWidth/$width));
        }else{
            $newWidth =$width;
            $newHeight =$height;
        }
        $targetImage = imagecreatetruecolor($newWidth, $newHeight);
        // 在目标画布上复制源图像，按比例缩放
        imagecopyresampled($targetImage, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
        // 保存到内存中
        ob_start();
        imagepng($targetImage);
        $data = ob_get_contents();
        ob_end_clean();
        // Base64编码
        $base64Data = base64_encode($data);
        $imag_url ="data:image/png;base64,".$base64Data;
        return $imag_url;
        // $size = $this->getBaseSize($imag_url);
        // var_dump( $size);die;
        // echo  '<img src="'.$imag_url.'" alt="">';
        // // echo  $imag_url;die;
        // print_r($imag_url);die;
    }
    //获取base64 图片大小
    public function getBaseSize($imag_url){
        // 将base64字符串解码为图片文件
        $file = file_put_contents('image.jpg', base64_decode($imag_url));
        // 获取图片文件大小
        $size = filesize('image.jpg');
        // 删除临时图片文件
        unlink('image.jpg');
        // 输出图片大小
        // echo "Image size: " . $size . " bytes";
        return $size;
    }
    
}

?>
