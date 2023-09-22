<?php

//基础
define('BIOLOGY_COUNT',20, true);  //默认生物上限不能超过20个
define('FIGHT_BOUT',20, true);  //战斗回合

//物品爆率
define('GOODS_BAOLV',10000, true);  //物品爆率--越高，越低
define('GOODS_LUCKLY_BAOLV',100, true);  //物品幸运爆率--越高，越低

// 人物定位
define('POSITION_NO',0, true);  //被动--中立
define('POSITION_MY',1, true);  //主动触发--己方
define('POSITION_ENEMY',2, true);  //主动攻击--敌方
//战斗对象
define('MERGE_BIOLOGY','merge_biology', true);  //生物数组
define('FIGHTING_HISTORY','fighting_history', true);  //战斗记录

// 攻击类型 //技能类型(0初始化,1回合化--初始化,2被击前触发,3被击后触发,4攻击前触发,5主动,6攻击后触发）
define('ATTACK0',0, true);  //0初始化
define('ATTACK1',1, true);  //1回合化
define('ATTACK2',2, true);  //2被击前触发
define('ATTACK3',3, true);  //3被击后触发
define('ATTACK4',4, true);  //4攻击前触发
define('ATTACK5',5, true);  //5主动
define('ATTACK6',6, true);  //6攻击后触发）

//伤害类型 0普通攻击  1技能攻击  2发起消耗 
define('HURT_PUTONG',0, true);  //0普通攻击
define('HURT_SKILL',1, true);  //1技能攻击
define('HURT_NEED',2, true);  //2发起消耗

//技能   0被动反击   1 主动攻击 和主动触发
define('SKILL_DOING',0, true);   
define('SKILL_GOING',1, true);   
 