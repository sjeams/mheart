<?php
namespace app\libs;
use yii;
class Computer
{
    /**
     * 评分计算方法
     *   美国、加拿大评分权重
     */
    public function fun1($gpa,$gmat,$toefl,$school)
    {
        $score_gpa = "0";
        $score_gmat = "0";
        $score_gre = "0";
        $score_toefl = "0";
        $score_ielts = "0";
        $score_xl = "0";
        $score_rank = "0";
        $score_work = "0";
        $score_suffer = "0";
        $score_xue = "0";
        $score_yi = "0";
        $score_j = "0";
        $score_major = 10;
        //        判断GPA得分
        if (!empty($gpa)) {
            if($gpa > 4){
                $gpa = $gpa/100*4;
            }
            if ($gpa < 2.6) {
                $score_gpa = 5;
            }
            elseif ($gpa < 2.7) {
                $score_gpa = 6;
            }
            elseif ($gpa < 2.8) {
                $score_gpa = 7;
            }
            elseif ($gpa < 2.9 ) {
                $score_gpa = 8;
            }
            elseif ($gpa < 3.0 ) {
                $score_gpa = 9;
            }
            elseif ( $gpa < 3.1) {
                $score_gpa = 10;
            }
            elseif ($gpa < 3.2 ) {
                $score_gpa = 11;
            }
            elseif ($gpa < 3.3) {
                $score_gpa = 12;
            }
            elseif ($gpa <3.4) {
                $score_gpa = 13;
            }
            elseif ($gpa < 3.5 ) {
                $score_gpa = 14;
            }
            if (3.5 == $gpa) {
                $score_gpa = 15;
            }
            if ($gpa > 3.5) {
                $score_gpa = 16;
            }
        }else{
            $score_gpa = 5;
        }
        //        判断GMAT得分
        if (!empty($gmat)) {
            if($gmat <= 340){
                if ($gmat < 295) {
                    $score_gmat = 6;
                }
                elseif ($gmat <300) {
                    $score_gmat = 7;
                }
                elseif ($gmat <305) {
                    $score_gmat = 8;
                }
                elseif ($gmat < 310) {
                    $score_gmat = 9;
                }
                elseif ($gmat < 315) {
                    $score_gmat = 10;
                }
                elseif ($gmat < 320) {
                    $score_gmat = 11;
                }
                elseif ($gmat < 325) {
                    $score_gmat = 12;
                }
                elseif ($gmat < 330) {
                    $score_gmat = 13;
                }
                elseif ($gmat < 335) {
                    $score_gmat = 14;
                }
                else {
                    $score_gmat = 15;
                }
            }else{
                if ($gmat < 610) {
                    $score_gmat = 5;
                }
                elseif ($gmat < 620) {
                    $score_gmat = 6;
                }
                elseif ($gmat < 630) {
                    $score_gmat = 7;
                }
                elseif ($gmat < 640) {
                    $score_gmat = 8;
                }
                elseif ($gmat < 650) {
                    $score_gmat = 9;
                }
                elseif ($gmat < 660) {
                    $score_gmat = 10;
                }
                elseif ($gmat < 670) {
                    $score_gmat = 11;
                }
                elseif ($gmat < 680) {
                    $score_gmat = 12;
                }
                elseif ($gmat < 690) {
                    $score_gmat = 13;
                }
                elseif ($gmat < 700) {
                    $score_gmat = 14;
                }
                if ($gmat == 700) {
                    $score_gmat = 15;
                }
                if ($gmat > 700) {
                    $score_gmat = 16;
                }
            }
        }else{
            $score_gmat = 5;
        }
        //        判断TOEFL得分
        if (!empty($toefl)) {
            if($toefl > 10){
                if ($toefl < 84) {
                    $score_toefl = 6;
                }
                elseif ($toefl < 88) {
                    $score_toefl = 7;
                }
                elseif ($toefl < 92) {
                    $score_toefl = 8;
                }
                elseif ($toefl < 96) {
                    $score_toefl = 9;
                }
                elseif ($toefl < 100) {
                    $score_toefl = 10;
                }
                elseif ($toefl < 104) {
                    $score_toefl = 11;
                }
                elseif ($toefl < 108) {
                    $score_toefl = 12;
                }
                elseif ($toefl < 112) {
                    $score_toefl = 13;
                }
                elseif ($toefl < 116) {
                    $score_toefl = 14;
                }
                elseif ($toefl < 120) {
                    $score_toefl = 15;
                }
                else{
                    $score_toefl = 16;
                }
            }else{
                if ($toefl < 5.5) {
                    $score_toefl = 8;
                }
                elseif ($toefl < 6) {
                    $score_toefl = 9;
                }
                elseif ($toefl < 6.5) {
                    $score_toefl = 10;
                }
                elseif ($toefl < 7) {
                    $score_toefl = 11;
                }
                elseif ($toefl < 7.5) {
                    $score_toefl = 12;
                }
                elseif ($toefl < 8) {
                    $score_toefl = 13;
                }
                elseif ($toefl < 8.5) {
                    $score_toefl = 14;
                }
                elseif ($toefl < 9) {
                    $score_toefl = 15;
                }else{
                    $score_toefl = 16;
                }
            }

        }
        //        判断学校性质得出分数
        if (!empty($school)) {
            if ($school == 1) {
                $score_rank = 5;
            }
            if ($school == 2) {
                $score_rank = 4;
            }
            if ($school == 3) {
                $score_rank = 3;
            }
            if ($school == 4) {
                $score_rank = 2;
            }
            if ($school == 5) {
                $score_rank = 1;
            }
        }

        $score = $score_gpa+$score_gmat + $score_toefl+ $score_rank +$score_major;
        return $score;
    }

    /**
     * 评分计算方法
     *   英/澳/港/新评分权重
     */
    public function fun2($gpa,$gmat,$toefl,$school){
        $score_gpa = "0";
        $score_gmat = "0";
        $score_gre = "0";
        $score_toefl = "0";
        $score_ielts = "0";
        $score_xl = "0";
        $score_rank = "0";
        $score_work = "0";
        $score_suffer = "0";
        $score_xue = "0";
        $score_yi = "0";
        $score_j = "0";
        $score_major = 10;
        //        判断GPA得分
        if (!empty($gpa)) {
            if($gpa <= 4){
                $gpa = $gpa/3.7*100;
            }
            if ($gpa < 62) {
                $score_gpa = 5;
            }
            elseif ($gpa < 64) {
                $score_gpa = 6;
            }
            elseif ($gpa < 66) {
                $score_gpa = 7;
            }
            elseif ($gpa < 68) {
                $score_gpa = 8;
            }
            elseif ($gpa < 70) {
                $score_gpa = 9;
            }
            elseif ($gpa < 72) {
                $score_gpa = 10;
            }
            elseif ($gpa < 74) {
                $score_gpa = 11;
            }
            elseif ($gpa < 76) {
                $score_gpa = 12;
            }
            elseif ($gpa < 78) {
                $score_gpa = 13;
            }
            elseif ($gpa < 80) {
                $score_gpa = 14;
            }
            elseif ($gpa < 82) {
                $score_gpa = 15;
            }
            elseif ($gpa < 84) {
                $score_gpa = 16;
            }
            elseif ($gpa < 86) {
                $score_gpa = 17;
            }
            elseif ($gpa < 88) {
                $score_gpa = 18;
            }
            elseif ($gpa < 90) {
                $score_gpa = 19;
            }
            elseif ($gpa < 93) {
                $score_gpa = 20;
            }else{
                $score_gpa = 22;
            }

        }
        //        判断GMAT得分
        if (!empty($gmat)) {
            if($gmat <= 340){
                if ($gmat < 295) {
                    $score_gmat = 4;
                }
                elseif ($gmat <300) {
                    $score_gmat = 5;
                }
                elseif ($gmat <305) {
                    $score_gmat = 6;
                }
                elseif ($gmat < 310) {
                    $score_gmat = 7;
                }
                elseif ($gmat < 315) {
                    $score_gmat = 8;
                }
                elseif ($gmat < 320) {
                    $score_gmat = 9;
                }
                elseif ($gmat == 320) {
                    $score_gmat = 10;
                }
                elseif ($gmat > 320) {
                    $score_gmat = 11;
                }
            }else{
                if ($gmat < 620) {
                    $score_gmat = 5;
                }
                elseif ($gmat < 640) {
                    $score_gmat = 6;
                }
                elseif ($gmat < 660) {
                    $score_gmat = 7;
                }
                elseif ($gmat < 680) {
                    $score_gmat = 8;
                }
                elseif ($gmat < 700) {
                    $score_gmat = 9;
                }
                elseif ($gmat < 710) {
                    $score_gmat = 10;
                }
                else{
                    $score_gmat = 15;
                }

            }
        }else{
            $score_gmat = 5;
        }
        //        判断TOEFL得分
        if (!empty($toefl)) {
            if($toefl > 10){
                if ($toefl < 84) {
                    $score_toefl = 6;
                }
                elseif ($toefl < 88) {
                    $score_toefl = 7;
                }
                elseif ($toefl < 92) {
                    $score_toefl = 8;
                }
                elseif ($toefl < 96) {
                    $score_toefl = 9;
                }
                elseif ($toefl < 100) {
                    $score_toefl = 10;
                }
                elseif ($toefl < 104) {
                    $score_toefl = 11;
                }
                elseif ($toefl < 108) {
                    $score_toefl = 12;
                }
                elseif ($toefl < 112) {
                    $score_toefl = 13;
                }
                elseif ($toefl < 116) {
                    $score_toefl = 14;
                }
                elseif ($toefl < 120) {
                    $score_toefl = 15;
                }
                else{
                    $score_toefl = 16;
                }
            }else{
                if ($toefl < 5.5) {
                    $score_toefl = 11;
                }
                elseif ($toefl < 6) {
                    $score_toefl = 13;
                }
                elseif ($toefl < 6.5) {
                    $score_toefl = 15;
                }
                elseif ($toefl < 7) {
                    $score_toefl = 17;
                }
                elseif ($toefl < 7.5) {
                    $score_toefl = 19;
                }
                elseif ($toefl < 8) {
                    $score_toefl = 20;
                }else{
                    $score_toefl = 22;
                }
            }

        }
        //        判断学校性质得出分数
        if (!empty($school)) {
            if ($school == 1) {
                $score_rank = 10;
            }
            if ($school == 2) {
                $score_rank = 8;
            }
            if ($school == 3) {
                $score_rank = 6;
            }
            if ($school == 4) {
                $score_rank = 4;
            }
            if ($school == 5) {
                $score_rank = 2;
            }
        }

        $score = $score_gpa+$score_gmat + $score_toefl+$score_rank + $score_major;
        return $score;
    }
    /**
     * 获取总分数
     * @param $schoolRank
     * @param $country
     * @Obelisk
     */
    public function getTotalScore($schoolRank,$country){
        if($country == 1){
            if($schoolRank<=10){
                $total = 100;
            }elseif($schoolRank<=20){
                $total = 94;
            }elseif($schoolRank<=30){
                $total = 89;
            }elseif($schoolRank<=40){
                $total = 79;
            }elseif($schoolRank<=50){
                $total = 74;
            }elseif($schoolRank<=60){
                $total = 69;
            }elseif($schoolRank<=80){
                $total = 64;
            }elseif($schoolRank<=100){
                $total = 59;
            }
            elseif($schoolRank<=120){
                $total = 54;
            }
            elseif($schoolRank<=150){
                $total = 49;
            }else{
                $total = 40;
            }
        }
        if($country == 2){
            if($schoolRank<=5){
                $total = 100;
            }elseif($schoolRank<=12){
                $total = 85;
            }elseif($schoolRank<=20){
                $total = 74;
            }elseif($schoolRank<=30){
                $total = 59;
            }elseif($schoolRank<=50){
                $total = 49;
            }else{
                $total = 45;
            }
        }
        if($country == 3){
            if($schoolRank<=3){
                $total = 100;
            }else{
                $total = 82;
            }
        }
        if($country == 4){
            if($schoolRank<=3){
                $total = 100;
            }else{
                $total = 82;
            }
        }
        if($country == 5){
            if($schoolRank<=2){
                $total = 100;
            }else{
                $total = 82;
            }
        }
        if($country == 6){
            if($schoolRank<=3){
                $total = 100;
            }else{
                $total = 77;
            }
        }
        return $total;
    }

    /**
     * wap
     * 评分计算方法
     *   美国、加拿大评分权重
     */
    public function fun3($gpa,$gmat,$toefl,$school)
    {
        $score_gpa = "0";
        $score_gmat = "0";
        $score_gre = "0";
        $score_toefl = "0";
        $score_ielts = "0";
        $score_xl = "0";
        $score_rank = "0";
        $score_work = "0";
        $score_suffer = "0";
        $score_xue = "0";
        $score_yi = "0";
        $score_j = "0";
        $score_major = 10;
        //        判断GPA得分
        if (!empty($gpa)) {
            if($gpa > 4){
                $gpa = $gpa/100*4;
            }
            if ($gpa < 2.6) {
                $score_gpa = 5;
            }
            elseif ($gpa < 2.7) {
                $score_gpa = 6;
            }
            elseif ($gpa < 2.8) {
                $score_gpa = 7;
            }
            elseif ($gpa < 2.9 ) {
                $score_gpa = 8;
            }
            elseif ($gpa < 3.0 ) {
                $score_gpa = 9;
            }
            elseif ( $gpa < 3.1) {
                $score_gpa = 10;
            }
            elseif ($gpa < 3.2 ) {
                $score_gpa = 11;
            }
            elseif ($gpa < 3.3) {
                $score_gpa = 12;
            }
            elseif ($gpa <3.4) {
                $score_gpa = 13;
            }
            elseif ($gpa < 3.5 ) {
                $score_gpa = 14;
            }
            if (3.5 == $gpa) {
                $score_gpa = 15;
            }
            if ($gpa > 3.5) {
                $score_gpa = 16;
            }
        }else{
            $score_gpa = 5;
        }
        //        判断GMAT得分
        if (!empty($gmat)) {
            if($gmat <= 340){
                if ($gmat < 295) {
                    $score_gmat = 6;
                }
                elseif ($gmat <300) {
                    $score_gmat = 7;
                }
                elseif ($gmat <305) {
                    $score_gmat = 8;
                }
                elseif ($gmat < 310) {
                    $score_gmat = 9;
                }
                elseif ($gmat < 315) {
                    $score_gmat = 10;
                }
                elseif ($gmat < 320) {
                    $score_gmat = 11;
                }
                elseif ($gmat < 325) {
                    $score_gmat = 12;
                }
                elseif ($gmat < 330) {
                    $score_gmat = 13;
                }
                elseif ($gmat < 335) {
                    $score_gmat = 14;
                }
                else {
                    $score_gmat = 15;
                }
            }else{
                if ($gmat < 610) {
                    $score_gmat = 5;
                }
                elseif ($gmat < 620) {
                    $score_gmat = 6;
                }
                elseif ($gmat < 630) {
                    $score_gmat = 7;
                }
                elseif ($gmat < 640) {
                    $score_gmat = 8;
                }
                elseif ($gmat < 650) {
                    $score_gmat = 9;
                }
                elseif ($gmat < 660) {
                    $score_gmat = 10;
                }
                elseif ($gmat < 670) {
                    $score_gmat = 11;
                }
                elseif ($gmat < 680) {
                    $score_gmat = 12;
                }
                elseif ($gmat < 690) {
                    $score_gmat = 13;
                }
                elseif ($gmat < 700) {
                    $score_gmat = 14;
                }
                if ($gmat == 700) {
                    $score_gmat = 15;
                }
                if ($gmat > 700) {
                    $score_gmat = 16;
                }
            }
        }else{
            $score_gmat = 5;
        }
        //        判断TOEFL得分
        if (!empty($toefl)) {
            if($toefl > 10){
                if ($toefl < 84) {
                    $score_toefl = 6;
                }
                elseif ($toefl < 88) {
                    $score_toefl = 7;
                }
                elseif ($toefl < 92) {
                    $score_toefl = 8;
                }
                elseif ($toefl < 96) {
                    $score_toefl = 9;
                }
                elseif ($toefl < 100) {
                    $score_toefl = 10;
                }
                elseif ($toefl < 104) {
                    $score_toefl = 11;
                }
                elseif ($toefl < 108) {
                    $score_toefl = 12;
                }
                elseif ($toefl < 112) {
                    $score_toefl = 13;
                }
                elseif ($toefl < 116) {
                    $score_toefl = 14;
                }
                elseif ($toefl < 120) {
                    $score_toefl = 15;
                }
                else{
                    $score_toefl = 16;
                }
            }else{
                if ($toefl < 5.5) {
                    $score_toefl = 8;
                }
                elseif ($toefl < 6) {
                    $score_toefl = 9;
                }
                elseif ($toefl < 6.5) {
                    $score_toefl = 10;
                }
                elseif ($toefl < 7) {
                    $score_toefl = 11;
                }
                elseif ($toefl < 7.5) {
                    $score_toefl = 12;
                }
                elseif ($toefl < 8) {
                    $score_toefl = 13;
                }
                elseif ($toefl < 8.5) {
                    $score_toefl = 14;
                }
                elseif ($toefl < 9) {
                    $score_toefl = 15;
                }else{
                    $score_toefl = 16;
                }
            }

        }
        //        判断学校性质得出分数
        if (!empty($school)) {
            if ($school == 1) {
                $score_rank = 5;
            }
            if ($school == 2) {
                $score_rank = 4;
            }
            if ($school == 3) {
                $score_rank = 3;
            }
            if ($school == 4) {
                $score_rank = 2;
            }
            if ($school == 5) {
                $score_rank = 1;
            }
        }

        $score = $score_gpa+$score_gmat + $score_toefl+ $score_rank +$score_major;
        if($score>=60){
            $score=60;
        }
        $score = $score/60*100;
        return $score;
    }

    /**
     * wap
     * 评分计算方法
     *   英/澳/港/新评分权重
     */
    public function fun4($gpa,$gmat,$toefl,$school){
        $score_gpa = "0";
        $score_gmat = "0";
        $score_gre = "0";
        $score_toefl = "0";
        $score_ielts = "0";
        $score_xl = "0";
        $score_rank = "0";
        $score_work = "0";
        $score_suffer = "0";
        $score_xue = "0";
        $score_yi = "0";
        $score_j = "0";
        $score_major = 10;
        //        判断GPA得分
        if (!empty($gpa)) {
            if($gpa <= 4){
                $gpa = $gpa/3.7*100;
            }
            if ($gpa < 62) {
                $score_gpa = 5;
            }
            elseif ($gpa < 64) {
                $score_gpa = 6;
            }
            elseif ($gpa < 66) {
                $score_gpa = 7;
            }
            elseif ($gpa < 68) {
                $score_gpa = 8;
            }
            elseif ($gpa < 70) {
                $score_gpa = 9;
            }
            elseif ($gpa < 72) {
                $score_gpa = 10;
            }
            elseif ($gpa < 74) {
                $score_gpa = 11;
            }
            elseif ($gpa < 76) {
                $score_gpa = 12;
            }
            elseif ($gpa < 78) {
                $score_gpa = 13;
            }
            elseif ($gpa < 80) {
                $score_gpa = 14;
            }
            elseif ($gpa < 82) {
                $score_gpa = 15;
            }
            elseif ($gpa < 84) {
                $score_gpa = 16;
            }
            elseif ($gpa < 86) {
                $score_gpa = 17;
            }
            elseif ($gpa < 88) {
                $score_gpa = 18;
            }
            elseif ($gpa < 90) {
                $score_gpa = 19;
            }
            elseif ($gpa < 93) {
                $score_gpa = 20;
            }else{
                $score_gpa = 22;
            }

        }
        //        判断GMAT得分
        if (!empty($gmat)) {
            if($gmat <= 340){
                if ($gmat < 295) {
                    $score_gmat = 4;
                }
                elseif ($gmat <300) {
                    $score_gmat = 5;
                }
                elseif ($gmat <305) {
                    $score_gmat = 6;
                }
                elseif ($gmat < 310) {
                    $score_gmat = 7;
                }
                elseif ($gmat < 315) {
                    $score_gmat = 8;
                }
                elseif ($gmat < 320) {
                    $score_gmat = 9;
                }
                elseif ($gmat == 320) {
                    $score_gmat = 10;
                }
                elseif ($gmat > 320) {
                    $score_gmat = 11;
                }
            }else{
                if ($gmat < 620) {
                    $score_gmat = 5;
                }
                elseif ($gmat < 640) {
                    $score_gmat = 6;
                }
                elseif ($gmat < 660) {
                    $score_gmat = 7;
                }
                elseif ($gmat < 680) {
                    $score_gmat = 8;
                }
                elseif ($gmat < 700) {
                    $score_gmat = 9;
                }
                elseif ($gmat < 710) {
                    $score_gmat = 10;
                }
                else{
                    $score_gmat = 15;
                }

            }
        }else{
            $score_gmat = 5;
        }
        //        判断TOEFL得分
        if (!empty($toefl)) {
            if($toefl > 10){
                if ($toefl < 84) {
                    $score_toefl = 6;
                }
                elseif ($toefl < 88) {
                    $score_toefl = 7;
                }
                elseif ($toefl < 92) {
                    $score_toefl = 8;
                }
                elseif ($toefl < 96) {
                    $score_toefl = 9;
                }
                elseif ($toefl < 100) {
                    $score_toefl = 10;
                }
                elseif ($toefl < 104) {
                    $score_toefl = 11;
                }
                elseif ($toefl < 108) {
                    $score_toefl = 12;
                }
                elseif ($toefl < 112) {
                    $score_toefl = 13;
                }
                elseif ($toefl < 116) {
                    $score_toefl = 14;
                }
                elseif ($toefl < 120) {
                    $score_toefl = 15;
                }
                else{
                    $score_toefl = 16;
                }
            }else{
                if ($toefl < 5.5) {
                    $score_toefl = 11;
                }
                elseif ($toefl < 6) {
                    $score_toefl = 13;
                }
                elseif ($toefl < 6.5) {
                    $score_toefl = 15;
                }
                elseif ($toefl < 7) {
                    $score_toefl = 17;
                }
                elseif ($toefl < 7.5) {
                    $score_toefl = 19;
                }
                elseif ($toefl < 8) {
                    $score_toefl = 20;
                }else{
                    $score_toefl = 22;
                }
            }

        }
        //        判断学校性质得出分数
        if (!empty($school)) {
            if ($school == 1) {
                $score_rank = 10;
            }
            if ($school == 2) {
                $score_rank = 8;
            }
            if ($school == 3) {
                $score_rank = 6;
            }
            if ($school == 4) {
                $score_rank = 4;
            }
            if ($school == 5) {
                $score_rank = 2;
            }
        }

        $score = $score_gpa+$score_gmat + $score_toefl+$score_rank + $score_major;
        if($score>=70){
            $score=70;
        }
        $score = $score/70*100;
//        var_dump($score_suffer) ;
//        var_dump($score_xue);
//        var_dump($score_yi);
//        var_dump($score_j);
        return $score;
    }
}
