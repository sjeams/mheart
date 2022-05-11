<?php
namespace app\modules\app\models;
use app\modules\question\models\QuestionKnow;
use app\modules\question\models\Questions;
use yii\db\ActiveRecord;
use app\libs\Method;
use yii\web\ViewAction;

class UserAnswer extends ActiveRecord {
    public $cateData;

    public static function tableName(){
        return '{{%user_answer}}';
    }

    //获取用户单项正确率
    public function getUserSectionCorrectRate($uid,$catId){
        $correct = \Yii::$app->db->createCommand("select COUNT(ua.id) as corretNum from {{%user_answer}} as ua LEFT JOIN {{%questions}} as q on ua.questionId=q.id where ua.uid={$uid} and q.catId={$catId} and ua.correct=1")->queryOne();
        $total = \Yii::$app->db->createCommand("select COUNT(ua.id) as totalNum from {{%user_answer}} as ua LEFT JOIN {{%questions}} as q on ua.questionId=q.id where ua.uid={$uid} and q.catId={$catId}")->queryOne();
        if($correct['corretNum']==0){
            $odds = 0;
        } else{
            $odds = round(intval($correct['corretNum'])/intval($total['totalNum'])*100);
        }
        return $odds;
    }
    //获取用户单项做题平均时间
    public function getUserSectionAverageTime($uid,$catId){
        $ageTime = \Yii::$app->db->createCommand("select AVG(ua.useTime) as age from {{%user_answer}} as ua LEFT JOIN {{%questions}} as q on ua.questionId=q.id where ua.uid={$uid} and q.catId={$catId}")->queryOne();
        return round($ageTime['age']);
    }

    public function getUserSectionKnow($uid,$catId){
        $knows = QuestionKnow::find()->asArray()->where("catId={$catId}")->all();
        $data = array();
        foreach($knows as $k=>$v){
            $correct = \Yii::$app->db->createCommand("select COUNT(ua.id) as corretNum from {{%user_answer}} as ua LEFT JOIN {{%questions}} as q on ua.questionId=q.id where ua.uid={$uid} and q.knowId={$v['id']} and ua.correct=1")->queryOne();
            $total = \Yii::$app->db->createCommand("select COUNT(ua.id) as totalNum from {{%user_answer}} as ua LEFT JOIN {{%questions}} as q on ua.questionId=q.id where ua.uid={$uid} and q.knowId={$v['id']}")->queryOne();
            if($correct['corretNum']==0){
                $odds = 0;
            } else{
                $odds = round(intval($correct['corretNum'])/intval($total['totalNum'])*100);
            }
            $data[$k]['knowName'] = $v['name'];
            $data[$k]['correctReta'] = $odds;
        }
        return $data;
    }

    public function getDoQuestionUserTotalNum($questionId){
        $cache = \Yii::$app->cache->get('getDoQuestionUserTotalNum'.$questionId);   //获取缓存
        if($cache){
            $res = $cache;
        } else{
            $res = UserAnswer::find()->where("questionId={$questionId}")->groupBy("uid")->count();
            \Yii::$app->cache->set('getDoQuestionUserTotalNum'.$questionId, $res, 3600*24);//缓存一天
        }
        return $res;
    }
    //获取单题平均时间
    public function getAverageTime($questionId){
        $cache = \Yii::$app->cache->get('getAverageTime'.$questionId);   //获取缓存
        if($cache){
            $res = $cache;
        } else{
            $sum = \Yii::$app->db->createCommand("select sum(useTime) as age from {{%user_answer}} where questionId={$questionId}")->queryOne();
            $num = UserAnswer::find()->select("id")->where("questionId={$questionId}")->count();
            if($num==0){
                $res = 0;
            } else{
                $res = round(intval($sum['age'])/intval($num));
            }
            \Yii::$app->cache->set('getAverageTime'.$questionId, $res, 3600*24);//缓存一天
        }
        return $res;
    }
    //获取单个正确率
    public function getCorrectRate($questionId){
        $cache = \Yii::$app->cache->get('getCorrectRate'.$questionId);   //获取缓存
        if($cache){
            $res = $cache;
        } else{
            $tNum = UserAnswer::find()->select("id")->where("questionId={$questionId}")->count(); //总数
            $yesNum = UserAnswer::find()->select("id")->where("questionId={$questionId} and correct=1")->count(); //正确总数
            if($tNum==0){
                $res = 0;
            } else{
                $res = round(intval($yesNum)/intval($tNum)*100);
            }
            \Yii::$app->cache->set('getCorrectRate'.$questionId, $res, 3600*24);//缓存一天
        }
        return $res;
    }
    //获取指定用户题库正确率
    public function getUserCorrectRate($questionId,$uid){
        $tNum = UserAnswer::find()->select("id")->where("questionId={$questionId} and uid={$uid}")->count(); //总数
        $yesNum = UserAnswer::find()->select("id")->where("uid={$uid} and questionId={$questionId} and correct=1")->count(); //正确总数
        if($tNum==0){
            $res = 0;
        } else{
            $res = round(intval($yesNum)/intval($tNum));
        }
        return $res;
    }
    //获取指定用户题库情况
    public function getUserCompleteState($questionId,$uid){
        if($uid){
            $data = QuestionsStatistics::find()->asArray()->where("libraryId={$questionId} and uid={$uid}")->one();
            $qmodel         = new \app\modules\question\models\QuestionLibrary();
            $quesNum        = $qmodel->getLibraryQuestionNum($questionId);    //题库题目数量
            $sql = "select count(id) as total,sum(useTime) as useTime,count(if(correct=1,true,false)) as correct from x2_user_answer where  answerType =1 and libId = $questionId and uid = $uid";
            $userDo = \Yii::$app->db->createCommand($sql)->queryOne();
            if($userDo && $userDo['total'] != $data['doNum'] && $data){//统计最新数据
                $correctRate = floor(100*($userDo['correct']/$quesNum));
                $state = $userDo['total'] == $quesNum?1:($userDo['total']>0?0:'');
                $model = QuestionsStatistics::findOne($data['id']);
                $model->doNum = $userDo['total']?$userDo['total']:0;
                $model->totalNum = $quesNum;
                $model->totalTime = $userDo['useTime']?$userDo['useTime']:0;
                $model->correctRate = $correctRate;
                $model->state = $state;
                $model->save();
                QuestionsStatistics::deleteAll("libraryId = $questionId and uid = $uid and id != {$data['id']}");
                $data = QuestionsStatistics::find()->asArray()->where("libraryId={$questionId} and uid={$uid}")->one();
            }
        } else{
            $data = '';
        }
        return $data;
    }

    //获取题库正确率
    public function getLibraryCorrectRate($libId){
        $cache = \Yii::$app->cache->get('getLibraryCorrectRate'.$libId);   //获取缓存
        if($cache){
            $res = $cache;
        } else{
            $tNum = UserAnswer::find()->select("id")->where("libId={$libId}")->count(); //总数
            $yesNum = UserAnswer::find()->select("id")->where("libId={$libId} and correct=1")->count(); //正确总数
            if($tNum==0){
                $res = 0;
            } else{
                $res = ceil(intval($yesNum)/intval($tNum)*100);
                \Yii::$app->cache->set('getLibraryCorrectRate'.$libId, $res, 3600*24);//缓存一天
            }
        }
        return $res;
    }
    //获取做题总正确率
    public function getQuestionsCorrectRate($uid){
        $questionTotal = UserAnswer::find()->select("id")->asArray()->where("uid={$uid}")->count();
        $correctNum = UserAnswer::find()->select("id")->asArray()->where("uid={$uid} and correct=1")->count();
        if($questionTotal==0){
            $res = 0;
        } else{
            $res = round(intval($correctNum)/intval($questionTotal));
        }
        return $res;
    }
    //获取题库平均时间
    public function getLibraryAverageTime($libId,$uid=''){
        if($uid){
            $sum = \Yii::$app->db->createCommand("select sum(useTime) as sum from {{%user_answer}} where libId={$libId} and uid=$uid")->queryOne();
            $res = intval($sum['sum']);
        } else{
            $cache = \Yii::$app->cache->get('getLibraryAverageTime'.$libId);   //获取缓存
            if($cache){
                $res = $cache;
            } else {
                $sum = \Yii::$app->db->createCommand("select sum(useTime) as sum from {{%user_answer}} where libId={$libId}")->queryOne();
                $num = UserAnswer::find()->select("id")->where("libId={$libId}")->count();
                if($num==0){
                    $res = 0;
                } else{
                    $res = round(intval($sum['sum'])/intval($num));
                    \Yii::$app->cache->set('getLibraryAverageTime'.$libId, $res, 3600*24);//缓存一天
                }
            }
        }
        return $res;
    }
    //获取用户题库答题详情
    public function getUserAnswerData($libId,$uid){
        $data = \Yii::$app->db->createCommand("select * from {{%user_answer}} where libId={$libId} and uid=$uid and answerType=1")->queryAll();
        foreach($data as $k=>$v){
            $data[$k]['doneNum'] = UserAnswer::find()->select("id")->asArray()->where("questionId={$v['questionId']}")->groupBy('uid')->count();
            $data[$k]['correctRate'] = $this->getCorrectRate($v['questionId']);
            $data[$k]['averageTime'] = Method::secToTime($this->getAverageTime($v['questionId']));
            $data[$k]['question'] = Question::find()->asArray()->where("id={$v['questionId']}")->one();
            $userColl = UserCollection::find()->asArray()->where("questionId={$v['questionId']} and uid={$uid}")->one();
            if($userColl){
                $data[$k]['collection'] = 1;
            } else {
                $data[$k]['collection'] = 2;
            }
        }
        return $data;
    }

    //获取复习排名
    public function getReviewRank($limit_s = '0',$limit_num = '10'){
        $cache = \Yii::$app->cache->get('getReviewRank');   //获取缓存
        if($cache){
            $data = $cache;
        } else {
            $sql = "select * from (SELECT count(1) as num,ua.uid FROM `x2_user_answer` as ua WHERE ua.uid!='' GROUP BY ua.uid ) as an LEFT JOIN {{%user}} as u on an.uid=u.uid where  u.uid!='' order by an.num desc";
            $sql .= " LIMIT " . $limit_s . ' , ' . $limit_num;
            $data = \Yii::$app->db->createCommand($sql)->queryAll();
            foreach($data as $k=>$v){
                $data[$k]['questionTotal'] = UserAnswer::find()->select("id")->asArray()->where("uid={$v['uid']}")->count();   //做题总数
                $data[$k]['correctNum'] = UserAnswer::find()->select("id")->asArray()->where("uid={$v['uid']} and correct=1")->count();  //正确总数
            }
            \Yii::$app->cache->set('getReviewRank', $data, 3600*24);//缓存一天
        }
        return $data;
    }

    //获取最新题目讨论
    public function getNewComment($num){
        $cache = \Yii::$app->cache->get('getNewComment');   //获取缓存
        if($cache && !empty($cache[0]['stem'])){ //改变数据结构后对缓存的兼容 $cache[0]['stem']
            $newComment = $cache;
        } else {
            $sql = "select uc.questionId,u.userName,u.nickname,q.stem,q.catId,q.sourceId from {{%user_comment}} uc LEFT JOIN {{%user}} u ON uc.uid=u.uid LEFT JOIN {{%questions}} q ON uc.questionId=q.id where uc.questionId!='' and uc.type=1 and pid=0 and q.inputUser is not null GROUP BY uc.questionId ORDER BY uc.id desc limit 0,{$num}";
            $newComment = \Yii::$app->db->createCommand($sql)->queryAll();
            foreach($newComment as $k=>$v){
                $qmodel = new Questions();
                $newComment[$k]['section'] = $qmodel->getSection($v['catId']);
                $newComment[$k]['source'] = $qmodel->getSource($v['sourceId']);
            }
            \Yii::$app->cache->set('getNewComment', $newComment, 3600*24);//缓存一天
        }
        return $newComment;
    }

    //获取用户题库做题数
    public function getUserAnswerCount($wheres){
        $sql = "select ua.id  from {{%user_answer}} as ua LEFT JOIN {{%questions}} as q on ua.questionId=q.id where $wheres GROUP BY ua.questionId" ;
        $num = \Yii::$app->db->createCommand($sql)->queryAll();
        return count($num);
    }

    /**
     * @param $wheres
     * @return int
     * @throws \yii\db\Exception
     * Design: By Ferre
     * 用户做题正确率
     */
    public function getUserAnswerCountRight($wheres)
    {
        $sql = "select ua.id  from {{%user_answer}} as ua LEFT JOIN {{%questions}} as q on ua.questionId=q.id where $wheres and ua.correct=1 GROUP BY ua.questionId" ;
        $num = \Yii::$app->db->createCommand($sql)->queryAll();
        return count($num);
    }

    /**GRE做题
     * 检查题目答题是否正确  1为正确 0为错误
     * by yanni
     */
    public function checkCorrect($questionId,$answer){
        $ques = Questions::find()->asArray()->where("id = $questionId")->one();
        $quesType = $ques['typeId'];
        //1-单空题 2-双空题 3-三空题 4-6选2 5-5选1题型 6-不定项题型 7-点选句子题型 8-单选题 9-不定项题 10-填空提
        if($quesType == 2 || $quesType == 3 || $quesType == 7 || $quesType ==10){
            $answers = explode(',',$answer);
            foreach($answers as $k => $v ){
                $answers[$k] = trim($v);
            }
            $answer = implode(',',$answers);
        }
        if( $quesType ==10) {
            $answer = trim($answer);
        }
        if( $quesType == 7 ) {
            $answer = trim($answer);
        }
        if($quesType != 7 && $quesType != 2 && $quesType != 3 && $quesType != 10) {     //答案为‘ABC’类型
            $answer = addslashes($answer);
            if($answer==$ques['answer']){
                $correct = 1;
            }else{
                $correct = 2;
            }
        }elseif($quesType == 2 ||$quesType == 3){    //答案为字符串类型（双空、三空题型）
            $correctAnswer = trim(strip_tags($ques['answer']));
            if(strpos($correctAnswer,'，') !== false){
                $correctAnswer = str_replace("，",",",$correctAnswer);
            }
            if($answer == $correctAnswer){
                $correct = 1;
            }else{
                $correct = 2;
            }
        }elseif($quesType == 10){//填空题 去掉单位比较
            $mockExam = new MockExam();
            $correct_answer = $mockExam->strToNum($ques['answer']);
            $user_answer = $mockExam->strToNum($answer);
            if($correct_answer == $user_answer){
                $correct = 1;
            }else{
                $correct = 2;
            }
        }else{//句子点选题型比较  纯字符比较
            $correctAnswer = strip_tags($ques['answer']);
            $answer1 = preg_replace('/(^\s*)|(\s*$)|[\ +\r\n]|[\.\,\，\。]/','',$correctAnswer);
            $answer2 = preg_replace('/(^\s*)|(\s*$)|[\ +\r\n]|[\.\,\，\。]/','',$answer);
            if($answer1 == $answer2){
                $correct = 1;
            }else{
                $correct = 2;
            }
        }
        return $correct;
    }
    /**
     * GRE报告
     * 复习策略
     * by yanni
     */
    public function getStrategy($section,$correct){
        $str = "";
        if($section==1){
            if($correct>80){   //填空复习建议

                $str = "填空部分的正确率可以达到80%以上，说明你距离V160+更近一步了。在接下来的日子里，只需要保持常规训练，以10-20道左右为佳，维持自己现有的题感就可以了。如果还想继续冲刺，则需要多花一点时间在错题分析上面。资料的话：自己的错题库+近期真题。";

            } elseif($correct>65 && $correct<=80) {

                $str = "65%-80%，填空部分想做好，单词是基础性的，但是不是决定性的。关键在于逻辑和做题的技巧。根据关键词汇来判断语言上的基本逻辑关系，寻找句子中的重复关系，判断语气或感情色彩，推理判断时注意避免发散思维。所以需要多做总结，不要题海战术，先不要看答案，把整个句子的走向看一遍，觉得它本身是正还是反，然后有没有转折、因果这些逻辑。先看句子间大逻辑，再看单个小句子的小逻辑就能解决了。";

            } elseif($correct>50 && $correct<=65) {

                $str = "50%-65%，建议重新过一遍词汇，填空部分想做好，单词是基础性的，但是不是决定性的，关键在于逻辑和做题的技巧。根据关键词汇来判断语言上的基本逻辑关系，寻找句子中的重复关系，判断语气或感情色彩，推理判断时注意避免发散思维。所以需要多做总结，不要题海战术，先不要看答案，把整个句子的走向看一遍，觉得它本身是正还是反，然后有没有转折、因果这些逻辑。先看句子间大逻辑，再看单个小句子的小逻辑就能解决了。";

            } else{

                $str = " 50%以下，重新学习吧。填空高频率词汇背诵3-5遍，再学习填空做题技巧和方法，按照方法练习。";

            }
        }
        if($section==2){                   //阅读复习建议
            if($correct>70){

                $str = "RC的正确率达到70%，并不是说就万事大吉了，一定多去关注自己错题有没有集合在同一篇文章下，对于这种文章，要多注意总结分析结构。每天的练习量需要以文章类型或者题型为主。如果是文章类型的问题，那么要多注意分析文章结构；如果是题型问题，则需要多总结相关的题型技巧。资料的话：自己的错题库+近期真题。";

            } elseif($correct>50 && $correct<=70) {

                $str = "50%-70%，GRE阅读正确率相对来说是比较容易提升的，分析题型和篇章结构，先分析是什么导致正确率上不去的罪魁祸首。其次，熟悉文章的篇章结构。是否能准备把握文章段落主干关系，观察自己的定位是不是每次都可以定准确。每一篇文章可以稍微多花一点时间用来分析。建议一篇一篇去做，同类型的文章放在一起做。";

            }  else{

                $str = "50%以下，需要背诵单词，长难句训练。精度阅读内容，掌握篇章结构。一篇阅读建议读2-3遍之后，再做题。资料的话，长难句可以看《杨鹏阅读难句》，方法及题型可以参照雷哥知识库。";

            }
        }
        if($section==3){              //数学复习建议
            if($correct>95){

                $str = "95%+的正确率已经说明你的数学没有太大的问题，只有继续保持就可以了~多注意易错点就好。资料的话：自己的错题库+近期真题。";

            } elseif($correct>85 && $correct<=95) {

                $str = "85%-95%，首先查看自己对于所有题型的考试方式是否已全部知晓，这个正确率有很大可能性都是因为不了解考法，尤其是自己细想有没有找不出错题原因的题目。如果是，纠正思路。其次，查看是不是有术语或者数学表达方式不熟，要对其多加防范，总结句式例题。必要时，加强长难句训练。最后，易错点逐个攻破，加深印象。";

            } elseif($correct>65 && $correct<=85) {

                $str = "60%-85%，一定是有某些知识点没有特别清楚。建议学习后，再练习习题，而不要一味的做题。知识点可以参考雷哥知识库。";

            } else{
                $str = "  60%以下，背诵数学词汇，看数学知识点，逐个攻破。之后，再去做题。先看OG math review，掌握考试大纲及基本词汇后，再做OG数学部分。如果还有知识点有问题，可以看雷哥知识库或《陈向东数学高分突破》或上网搜索，稍微熟悉一点后，再做真题。";
            }
        }
        return $str;
    }

    /**
     * 错误的题
     * yanni
     */
    public function getErrorQuestion($c_question_str,$do_question_str,$uid){
        $c_question_str = explode(',',$c_question_str);
        if($do_question_str=='false'){
            $rand_question = array_rand($c_question_str);  //随机取一道题
        }else {
            $do_question_str = explode(',', $do_question_str);
            foreach ($do_question_str as $v) {   //排除小库里的已做题目
                $key = array_search($v,$c_question_str);
                if(isset($key)){
                    unset($c_question_str[$key]);
                }
            }
            if(empty($c_question_str)){
                $question = '';
                return $question;
            }
            $rand_question = array_rand($c_question_str);
        }
        $where = " id={$c_question_str[$rand_question]}";
//        if($sectiontype !=0){
//            $where .= " and q.sectiontype = {$sectiontype}";
//        }
        $question = Question::find()->asArray()->where($where)->one();
        $model = new Question();
        $questionData = $model->questionText($question,$uid,'');          //题目详情html数据处理
        $userCollection = UserCollection::find()->asArray()->where("uid={$uid} and questionId={$question['id']}")->one();
        if($userCollection){
            $questionData['collection'] = 1;   //已收藏
        } else{
            $questionData['collection'] = 2;   //未收藏
        }
        return $questionData;
    }

}
