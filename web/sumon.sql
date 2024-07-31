/*
Navicat MySQL Data Transfer

Source Server         : 2024
Source Server Version : 50568
Source Host           : 122.51.2.193:3306
Source Database       : sumon

Target Server Type    : MYSQL
Target Server Version : 50568
File Encoding         : 65001

Date: 2024-07-31 14:09:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for x2_admin_init
-- ----------------------------
DROP TABLE IF EXISTS `x2_admin_init`;
CREATE TABLE `x2_admin_init` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL DEFAULT '1' COMMENT '副id',
  `name` varchar(25) DEFAULT NULL COMMENT '分类名称',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `remark` varchar(255) DEFAULT NULL COMMENT '图片',
  `url` varchar(255) DEFAULT '' COMMENT '接口/页面',
  `createTime` varchar(255) DEFAULT NULL,
  `update` varchar(255) NOT NULL DEFAULT ' <input type="button" value="编辑节点" onclick="onEditNode()"/>' COMMENT '修改',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_admin_init
-- ----------------------------
INSERT INTO `x2_admin_init` VALUES ('1', '0', 'menuInfo', '后台管理', '', '', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('2', '1', 'currency', '生物系统', '测试s', '', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('3', '1', 'component', '组件管理', '', '', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('4', '1', 'other', '其它管理', '', '', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('5', '2', '', '生物模板', '', '/admin/biology/index', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('6', '2', '', '生物创造', '', '/admin/biology-create/index', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('40', '0', 'app', 'APP管理', '', '', '1591694465', '<input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/> <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>');
INSERT INTO `x2_admin_init` VALUES ('41', '0', 'user', '用户管理', '', '', '1591694465', '<input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/> <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>');
INSERT INTO `x2_admin_init` VALUES ('8', '2', '', '生物管理', '', '/admin/user-biology/index', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('9', '2', '', '世界管理', '', '/layuimini/page/setting.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('10', '2', '', '技能管理', '反倒是', '/layuimini/page/table.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('48', '1', '', '物品管理', '', '', '1591694465', '<input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/> <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>');
INSERT INTO `x2_admin_init` VALUES ('49', '48', '', '物品分类', '', '/admin/goods/index', '1591694465', '<input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/> <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>');
INSERT INTO `x2_admin_init` VALUES ('50', '2', '', '性格管理 ', '', '', '1591694465', '<input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/> <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>');
INSERT INTO `x2_admin_init` VALUES ('51', '48', 'danyao', '物品详情', '', '/admin/goods-store/index', '1591694465', '<input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/> <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>');
INSERT INTO `x2_admin_init` VALUES ('14', '2', '', '登录模板', '', '', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('15', '14', '', '登录-1', '', '/layuimini/page/login-1.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('16', '14', '', '登录-2', null, '/layuimini/page/login-2.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('17', '2', '', '异常页面', null, '', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('18', '2', '', '404页面', '', '/layuimini/page/404.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('19', '2', '', '其它界面', null, '', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('20', '19', '', '按钮示例', null, '/layuimini/page/button.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('21', '19', '', '弹出层', null, '/layuimini/page/layer.html\"', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('22', '3', '', '组件管理', null, '', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('23', '22', '', '图标列表', null, '/layuimini/page/icon.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('24', '22', '', '图标选择', null, '/layuimini/page/icon-picker.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('25', '22', '', '颜色选择', null, '/layuimini/page/color-select.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('26', '22', '', '下拉选择', null, '/layuimini/page/table-select.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('27', '22', '', '文件上传', '', '/layuimini/page/upload.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('28', '22', '', '富文本编辑器', '', '/layuimini/page/editor.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('29', '4', '', '多级菜单', null, '', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('30', '29', '', '按钮1', null, '/layuimini/page/button.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('31', '29', '', '按钮2', null, '/layuimini/page/button.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('32', '29', '', '按钮3', null, '/layuimini/page/button.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('33', '29', '', '表单4', null, '/layuimini/page/form.html', '1591694465', '            <input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/>\r\n    <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>\r\n');
INSERT INTO `x2_admin_init` VALUES ('45', '0', 'order', '商城', '', '', '1591694465', '<input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/> <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>');
INSERT INTO `x2_admin_init` VALUES ('43', '41', 'cc', 'cc', '', 'cc', '1591694465', '<input type=\"button\" value=\"编辑节点\" onclick=\"onEditNode()\"/> <input type=\"button\" value=\"删除节点\" onclick=\"onRemoveNode()\"/>');

-- ----------------------------
-- Table structure for x2_admin_user
-- ----------------------------
DROP TABLE IF EXISTS `x2_admin_user`;
CREATE TABLE `x2_admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '后台账号',
  `username` varchar(25) DEFAULT NULL,
  `token` varchar(25) DEFAULT NULL,
  `password` varchar(25) DEFAULT NULL,
  `md5pass` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_admin_user
-- ----------------------------

-- ----------------------------
-- Table structure for x2_biology
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology`;
CREATE TABLE `x2_biology` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL COMMENT '生物名称',
  `biology` tinyint(3) DEFAULT '1' COMMENT '种族(人鬼妖神魔异) 0未知',
  `state` int(3) DEFAULT '1' COMMENT '生物境界',
  `grade` int(11) DEFAULT '1' COMMENT '等级',
  `shengMing` int(11) DEFAULT '1' COMMENT '生命',
  `moFa` int(11) DEFAULT '1' COMMENT '魔法',
  `gongJi` int(11) DEFAULT '1' COMMENT '攻击',
  `huJia` int(11) DEFAULT '1' COMMENT '护甲',
  `faGong` int(11) DEFAULT '1' COMMENT '特攻',
  `fakang` int(11) DEFAULT '1' COMMENT '法抗',
  `suDu` int(11) DEFAULT '1' COMMENT '速度',
  `shanbi` int(11) DEFAULT '0' COMMENT '闪避',
  `baoji` int(11) DEFAULT '150' COMMENT '暴击',
  `baojilv` int(11) DEFAULT '0' COMMENT '暴击率',
  `shuaXin` int(11) DEFAULT '1' COMMENT '刷新次数',
  `xunLian` int(11) DEFAULT '3' COMMENT '训练次数',
  `jinJie` int(11) DEFAULT '1' COMMENT '进阶',
  `biologyid` int(11) DEFAULT '0' COMMENT '生物id',
  `reiki` int(11) DEFAULT '1' COMMENT '灵气',
  `special` int(11) DEFAULT '1' COMMENT '评分 战力 (与属性有关*30.0的基础评分) 悟性 和基础属性',
  `score` int(11) DEFAULT '1' COMMENT '评分',
  `wuXing` int(11) DEFAULT '3' COMMENT '悟性-成长率 1-10  自由属性 ',
  `skill` varchar(255) DEFAULT '1' COMMENT '技能编号',
  `yuanShen` int(11) DEFAULT '0' COMMENT '元神',
  `fate` int(11) DEFAULT '0' COMMENT '缘分(武器缘分) 本命法宝（只有一个）武器库随机-命中注定',
  `type` int(3) NOT NULL DEFAULT '4' COMMENT '1普通 2特殊 3NPC 4不可用 5角色',
  `descript` varchar(255) DEFAULT NULL COMMENT '描述',
  `lucky` int(3) DEFAULT '1' COMMENT ' 幸运值-成长值-潜能-技能进阶-境界突破',
  `maxNature` int(11) DEFAULT '0' COMMENT '自由属性点',
  `qianNeng` int(3) DEFAULT '1' COMMENT '潜能--1-10次，战斗中有几率进化-增加1-10 悟性（越低级潜能越大）',
  `character` int(3) DEFAULT '1' COMMENT '性格',
  `picture` varchar(255) DEFAULT NULL COMMENT '生物图片 形象',
  `yiXing` tinyint(1) DEFAULT '0' COMMENT '异性 0 否1是',
  `sex` int(255) DEFAULT '1' COMMENT '性别 1男 2 女',
  `jingBi` int(11) DEFAULT '1' COMMENT '金币',
  `jingYan` int(11) DEFAULT '1' COMMENT '经验',
  `jianShang` int(255) DEFAULT '0' COMMENT '减伤',
  `zhenShang` int(255) DEFAULT '0' COMMENT '增伤（真实伤害）',
  `color` varchar(25) DEFAULT '#FFFFFF' COMMENT '颜色（普通默认为白色）',
  `danDu` int(11) DEFAULT '0' COMMENT '丹毒100  大30每回合对自身造成生命值%的伤害',
  `scoreGrade` varchar(11) DEFAULT 'D' COMMENT '评分等级 D C A B S SS SSS 传说',
  `chuFa` int(3) DEFAULT '0' COMMENT '触发--最多叠加到100',
  `wordid` int(11) DEFAULT NULL COMMENT '世界编号',
  `jiBan` int(3) NOT NULL DEFAULT '1' COMMENT '羁绊',
  `experience` int(11) DEFAULT '0' COMMENT '升级经验 每级 等级*500的经验',
  `power` int(11) DEFAULT '1' COMMENT '力量',
  `agile` int(11) DEFAULT '1' COMMENT '敏捷',
  `intelligence` int(11) DEFAULT '1' COMMENT '智力',
  `minPower` int(11) DEFAULT '10' COMMENT '最小力量',
  `minAgile` int(11) DEFAULT '10',
  `minIntelligence` int(11) DEFAULT '10' COMMENT '最小力量',
  `userid` int(11) DEFAULT '1' COMMENT '模型创建所属人 1 管理员',
  `percent` float(11,0) DEFAULT '0' COMMENT '经验条(单独增加）',
  `xiXue` int(11) DEFAULT '0' COMMENT '吸血',
  `shenFen` tinyint(3) DEFAULT '1' COMMENT '身份 1普通  2精英   3头目  4气运之子    5天地主角',
  `siwang` int(11) DEFAULT '0' COMMENT '死亡    尸焰（死亡） 炽炀（残暴）',
  `jisha` int(11) DEFAULT '0' COMMENT '击杀  罗睺（魔道） 盘古（力道） 九江（重道） 乌冹（轻道） 砀殕（命运）',
  `fuhuo` int(11) DEFAULT '0' COMMENT '复活   后土专属技能--轮回 空冥（空间） 扬眉（时间） 灵木道人（生命）',
  `huDun` int(11) DEFAULT '0' COMMENT '护盾',
  `zhiLiao` int(11) DEFAULT '0' COMMENT '治疗',
  `zhenShi` int(11) DEFAULT '0' COMMENT '真实伤害',
  `wuDi` int(11) DEFAULT '0' COMMENT '无敌',
  `gooduse1` int(11) DEFAULT NULL COMMENT '装备栏1',
  `gooduse2` int(11) DEFAULT NULL COMMENT '装备栏2',
  `zhuanshen` int(11) DEFAULT '0' COMMENT '满60级转身次数  鸿钧专属技能-天道',
  `zhujiao` int(11) DEFAULT '0' COMMENT '主角模型，不可以创建',
  `zPower` int(11) DEFAULT '0' COMMENT '附加力量',
  `zIntelligence` int(11) DEFAULT '0' COMMENT '附加智力',
  `shouyuan` int(11) DEFAULT '60' COMMENT '寿元',
  `shouyuanYear` int(11) DEFAULT '1' COMMENT '年龄',
  `zAgile` int(11) DEFAULT '0' COMMENT '附加敏捷',
  `wuXingTotal` int(11) DEFAULT '0' COMMENT '悟性值',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology
-- ----------------------------
INSERT INTO `x2_biology` VALUES ('2', ' 归海一刀', '1', '1', '1', '1480', '35', '40', '33', '40', '33', '121', '6', '150', '0', '1', '3', '1', '0', '23', '1999', '113', '17', '', '0', '0', '1', '“地字第一号”归海一刀（霍建华饰演），高傲寡言，眉宇间带点忧郁，因少时父亲归海百炼被杀，他矢志要报父仇，刀法天下第一，杀人从不用使第二刀。', '20', '0', '1', '1', '宫本', '0', '1', '229', '117', '131', '80', '#f3f3f3', '0', 'A', '0', '1', '1', '0', '26', '22', '21', '18', '14', '12', '1', '0', '0', '4', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('3', '古三通', '1', '1', '1', '1451', '40', '39', '32', '46', '38', '118', '6', '150', '0', '1', '3', '1', '0', '21', '1937', '145', '11', '6,5,10', '0', '0', '1', '不败顽童', '20', '0', '1', '1', '宫本', '1', '1', '293', '149', '94', '73', '#00ffff', '0', 'S', '0', '1', '1', '0', '31', '24', '38', '8', '3', '19', '1', '0', '0', '3', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('4', '柳生飘絮', '1', '1', '1', '1485', '41', '44', '36', '48', '40', '123', '2', '150', '0', '1', '3', '1', '0', '25', '1908', '152', '15', '7,11,4,10', '0', '0', '1', '柳生雪姬之妹。飘絮表面一如其姊雪姬般柔弱，和天涯结婚生子后更是个典型贤妻良母，可是其实机心甚重，，城府甚深，暗地里是个冷血杀手，且通过下药的手段迫使天涯迎娶了自己。。', '7', '0', '1', '1', '宫本', '0', '2', '307', '156', '51', '38', '#FFFFFF', '0', 'SS', '0', '1', '1', '0', '24', '25', '33', '10', '14', '8', '1', '0', '0', '3', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('5', '柳生雪姬', '1', '1', '1', '1739', '35', '48', '40', '42', '35', '127', '3', '150', '0', '1', '3', '1', '0', '30', '2207', '127', '13', '', '0', '0', '1', '温柔、纯洁、美丽、善良、举止优雅、谈吐大方、机智过人、琴棋书画，样样精通。是柳生门主柳生但马守长女，武功高强，继承柳生家独门绝招雪飘人间。', '10', '0', '1', '1', '宫本', '0', '2', '257', '131', '78', '60', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '38', '32', '21', '14', '10', '2', '1', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('6', '朱无视', '1', '1', '1', '1005', '37', '33', '28', '38', '32', '117', '7', '150', '0', '1', '3', '1', '0', '15', '1427', '103', '13', '7', '0', '0', '1', '外号铁胆神侯，为当今皇上叔父。当年先皇驾崩前，唯恐正德年少，易被奸人操控，或无力主持朝政，不懂分辨忠奸，于是特令皇弟朱无视创立护龙山庄，权力可凌驾所有朝廷机构，并赐予先皇之丹书铁卷、尚方宝剑，可以上斩昏君，下斩谗臣，给了正德一个最高特务机构，制衡东厂。', '21', '0', '1', '1', '宫本', '0', '1', '209', '107', '76', '54', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '12', '23', '32', '4', '9', '17', '1', '0', '0', '3', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('7', '云罗郡主', '1', '1', '1', '1610', '42', '43', '36', '50', '42', '122', '5', '150', '0', '1', '3', '1', '0', '29', '2169', '154', '15', '8,4,2,5', '0', '0', '1', '当今皇上之妹。', '17', '0', '1', '1', '宫本', '0', '2', '311', '158', '131', '88', '#FFFFFF', '0', 'SS', '0', '1', '1', '0', '28', '22', '34', '7', '5', '8', '1', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('8', '上官海棠', '1', '1', '1', '1213', '34', '34', '29', '33', '28', '120', '5', '150', '0', '1', '3', '1', '0', '25', '1677', '130', '13', '2,6,4,10', '0', '0', '1', '“玄字第一号”上官海棠（叶璇饰演），艳如桃李，机智过人，琴棋书画，医卜星相，无不通晓，平日却作男装打扮，主持“天下第一庄”，庄内人才济济，掌握天下机密。', '17', '0', '1', '1', '宫本', '0', '2', '263', '134', '105', '76', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '20', '23', '21', '10', '20', '15', '1', '0', '0', '4', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('9', '曹正淳', '1', '1', '1', '1138', '39', '31', '26', '39', '32', '117', '7', '150', '0', '1', '3', '1', '0', '25', '1632', '110', '7', '11', '0', '0', '1', '东厂总管太监曹正淳。野心勃勃的曹正淳权势滔天，他修炼“童子功“大成、武功盖世\r\n天下第一\r\n天下第一(22张)\r\n ，又自恃掌管东厂，权倾朝野，结党营私，勾结贪官，陷害忠良，无恶不作。', '23', '0', '1', '1', '宫本', '0', '1', '223', '114', '105', '98', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '21', '23', '42', '3', '5', '11', '1', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('10', '正德皇帝', '1', '1', '1', '783', '27', '29', '24', '21', '17', '117', '8', '150', '0', '1', '3', '1', '0', '10', '1117', '100', '6', '8,6', '0', '0', '1', '皇上,云罗郡主的皇兄。', '27', '0', '1', '1', '宫本', '0', '1', '203', '104', '46', '45', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '14', '37', '17', '2', '19', '3', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('11', '万三千', '1', '1', '1', '1174', '35', '25', '21', '33', '27', '113', '2', '150', '0', '1', '3', '1', '0', '26', '1512', '105', '9', '5,11', '0', '0', '1', '天下第一庄庄主，富甲天下。', '7', '0', '1', '1', '宫本', '0', '1', '213', '109', '42', '40', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '25', '13', '29', '13', '3', '16', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('12', '素心', '1', '1', '1', '1412', '34', '40', '33', '36', '30', '124', '2', '150', '0', '1', '3', '1', '0', '28', '1790', '137', '9', '5,7,6', '0', '0', '1', '神侯最爱,成是非之母，古三通的表妹', '6', '0', '1', '1', '宫本', '0', '2', '277', '141', '40', '39', '#FFFFFF', '0', 'S', '0', '1', '1', '0', '32', '33', '24', '11', '13', '10', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('13', '段天涯', '1', '1', '1', '926', '31', '25', '21', '26', '22', '112', '9', '150', '0', '1', '3', '1', '0', '10', '1272', '93', '8', '', '0', '0', '1', '“天字第一号”段天涯（李亚鹏饰演），冷静沉着，自小由铁胆神侯收养，在东瀛跟随“伊贺派”学得忍术及“幻剑”后，加入“护龙山庄”，武功深不可测。', '28', '0', '1', '1', '宫本', '0', '1', '189', '97', '53', '47', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '21', '22', '24', '6', '12', '17', '1', '0', '0', '4', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('14', '强盗', '1', '1', '1', '1130', '28', '37', '30', '28', '23', '119', '4', '150', '0', '1', '3', '1', '0', '7', '1438', '116', '12', '2,11', '0', '0', '1', '', '13', '0', '1', '1', '宫本', '0', '1', '235', '120', '22', '17', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '25', '32', '15', '4', '17', '3', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('15', '眠狂四郎', '1', '1', '1', '1086', '26', '25', '21', '20', '17', '113', '5', '150', '0', '1', '3', '1', '0', '12', '1382', '111', '8', '11,4,7', '0', '0', '1', '东瀛著名剑客眠狂四郎「幻剑」。', '15', '0', '1', '1', '宫本', '0', '1', '225', '115', '36', '33', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '33', '22', '10', '21', '8', '7', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('16', '利秀公主', '1', '1', '1', '1578', '43', '42', '35', '56', '47', '114', '8', '150', '0', '1', '3', '1', '0', '6', '1997', '143', '18', '7,4', '0', '0', '1', '出云国公主。', '27', '0', '1', '1', '宫本', '0', '2', '289', '147', '47', '27', '#FFFFFF', '0', 'S', '0', '1', '1', '0', '30', '18', '39', '6', '5', '19', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('17', '剑圣', '1', '1', '1', '1082', '37', '32', '26', '38', '32', '114', '8', '150', '0', '1', '3', '1', '0', '11', '1490', '106', '13', '', '0', '0', '1', '', '27', '0', '1', '1', '宫本', '0', '1', '215', '110', '71', '50', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '18', '20', '32', '8', '9', '25', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('18', '千面郎君', '1', '1', '1', '1213', '46', '34', '28', '55', '46', '111', '9', '150', '0', '1', '3', '1', '0', '7', '1633', '131', '16', '4,11', '0', '0', '1', '千面郎君，擅长用毒和易容。', '30', '0', '1', '1', '宫本', '0', '1', '265', '135', '56', '35', '#f3f3f3', '0', 'S', '0', '1', '1', '0', '18', '14', '47', '9', '8', '13', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('19', '麒麟子', '1', '1', '1', '1404', '28', '42', '35', '31', '25', '123', '5', '150', '0', '1', '3', '1', '0', '14', '1786', '116', '12', '2', '0', '0', '1', '麒麟门门主。', '16', '0', '1', '1', '宫本', '0', '1', '235', '120', '53', '40', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '34', '35', '13', '8', '16', '7', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('20', '剑惊峰', '1', '1', '1', '1208', '34', '35', '29', '36', '30', '117', '9', '150', '0', '1', '3', '1', '0', '14', '1641', '115', '9', '', '0', '0', '1', '辟邪山庄，曾与归海百炼一战。', '28', '0', '1', '1', '宫本', '0', '1', '233', '119', '78', '65', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '28', '29', '30', '5', '10', '18', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('21', '了空', '1', '1', '1', '1236', '39', '33', '27', '40', '33', '118', '5', '150', '0', '1', '3', '1', '0', '27', '1703', '132', '8', '2,10,11', '0', '0', '1', '少林寺了空大师。', '17', '0', '1', '1', '宫本', '0', '1', '267', '136', '90', '82', '#FFFFFF', '0', 'S', '0', '1', '1', '0', '24', '23', '39', '11', '5', '25', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('22', '归海百炼', '1', '1', '1', '1568', '39', '50', '42', '51', '43', '122', '8', '150', '0', '1', '3', '1', '0', '8', '2021', '154', '18', '6,5,11', '0', '0', '1', '归海一刀之父。', '27', '0', '1', '1', '宫本', '0', '1', '311', '158', '62', '36', '#FFFFFF', '0', 'SS', '0', '1', '1', '0', '28', '29', '31', '9', '13', '22', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('23', '张无忌', '1', '1', '1', '1059', '31', '26', '21', '29', '24', '110', '3', '150', '0', '1', '3', '1', '0', '5', '1322', '149', '6', '4,6,7,8,5', '0', '0', '2', '柳生但马守是武侠电视剧《天下第一》中的角色，是著名剑客柳生十兵卫的父亲，也是武学宗师。', '10', '0', '1', '1', '宫本', '0', '1', '301', '153', '9', '10', '#FFFFFF', '0', 'S', '0', '1', '1', '0', '35', '22', '30', '24', '11', '13', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('24', '成是非', '1', '1', '1', '1261', '34', '33', '27', '34', '28', '118', '5', '150', '0', '1', '3', '1', '0', '23', '1679', '110', '8', '6', '0', '0', '2', '“黄字第一号”成是非（郭晋安饰演），本是市井混混，诙谐滑稽，不学无术却机智玲珑，因缘际会成为“不败顽童”古三通的传人，武功天下第一。他一旦使出绝学“金刚不坏神功”，便会浑身变成金色，变身成为金人，力大无穷，寒暑不畏，水火不惧，刀枪不入，百毒不侵。', '16', '0', '1', '1', '宫本', '0', '1', '223', '114', '73', '66', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '30', '26', '28', '12', '5', '6', '1', '0', '0', '5', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('25', '野猪', '1', '1', '1', '1268', '33', '30', '25', '33', '27', '114', '6', '150', '0', '1', '3', '1', '0', '16', '1660', '114', '12', '8,2', '0', '0', '1', '', '19', '0', '1', '1', '宫本', '0', '1', '231', '118', '71', '53', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '29', '18', '23', '11', '3', '6', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('26', '山贼', '1', '1', '1', '1176', '34', '47', '39', '39', '32', '127', '7', '150', '0', '1', '3', '1', '0', '16', '1646', '127', '13', '4,7', '0', '0', '1', '', '22', '0', '1', '1', '宫本', '0', '2', '257', '131', '85', '60', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '16', '40', '25', '6', '14', '8', '1', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('27', '士兵', '1', '1', '100', '124480', '871', '3541', '2951', '3066', '2555', '1536', '8', '150', '0', '1', '3', '1', '0', '20', '139046', '136', '12', '1,2,3', '0', '0', '1', '', '3', '0', '1', '1', '宫本', '0', '1', '374', '239', '19', '19', '#FFFFFF', '0', 'S', '0', '1', '1', '0', '39', '26', '17', '4', '5', '4', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('28', '将军', '1', '1', '1', '1539', '40', '42', '35', '49', '41', '117', '6', '150', '0', '1', '3', '1', '0', '13', '1993', '124', '19', '', '0', '0', '1', '', '20', '0', '1', '1', '宫本', '0', '1', '251', '128', '79', '45', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '27', '19', '30', '12', '7', '19', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('29', '游侠', '1', '1', '1', '1068', '36', '28', '23', '32', '26', '117', '6', '150', '0', '1', '3', '1', '0', '30', '1546', '126', '6', '4,10,6,2', '0', '0', '1', '', '20', '0', '1', '1', '宫本', '0', '1', '255', '130', '105', '105', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '19', '22', '33', '9', '10', '12', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('30', '二蛋', '1', '1', '1', '1341', '35', '46', '38', '42', '35', '123', '8', '150', '0', '1', '3', '1', '0', '11', '1796', '140', '17', '2,4,11', '0', '0', '1', '', '26', '0', '1', '1', '蛋', '0', '1', '283', '144', '80', '48', '#FFFFFF', '0', 'S', '0', '1', '1', '0', '22', '30', '24', '5', '9', '7', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('31', '鬼海龙', '4', '1', '1', '1079', '26', '33', '27', '23', '19', '117', '6', '150', '0', '1', '3', '1', '0', '5', '1370', '99', '12', '', '0', '0', '1', '', '20', '0', '1', '1', '鬼海龙', '0', '1', '201', '103', '23', '17', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '26', '29', '10', '7', '11', '5', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('32', '花妖', '2', '1', '1', '1225', '30', '28', '23', '28', '24', '112', '8', '150', '0', '1', '3', '1', '0', '9', '1571', '101', '12', '53', '0', '0', '5', '', '26', '0', '1', '1', '花妖', '0', '1', '205', '105', '54', '39', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '32', '17', '18', '2', '5', '3', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('33', '魔法少女', '3', '1', '1', '1181', '33', '30', '25', '31', '26', '115', '9', '150', '0', '1', '3', '1', '0', '16', '1632', '99', '13', '53', '0', '0', '5', '', '28', '0', '1', '1', '魔法少女', '0', '1', '201', '103', '107', '75', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '24', '18', '21', '11', '3', '8', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('34', '鬼娃娃', '4', '1', '1', '1262', '45', '37', '31', '50', '42', '119', '8', '150', '0', '1', '3', '1', '0', '29', '1940', '110', '18', '53', '0', '0', '5', '', '26', '0', '1', '1', '鬼娃娃', '0', '1', '223', '114', '219', '127', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '12', '16', '36', '1', '2', '17', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('35', '独角兽', '1', '1', '1', '1085', '32', '41', '34', '31', '26', '127', '7', '150', '0', '1', '3', '1', '0', '25', '1623', '99', '15', '53', '0', '0', '5', '', '22', '0', '1', '1', '独角兽', '0', '1', '201', '103', '145', '95', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '18', '32', '12', '2', '5', '6', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('36', '蘑菇', '5', '1', '1', '955', '30', '24', '20', '21', '18', '117', '4', '150', '0', '1', '3', '1', '0', '29', '1315', '79', '5', '53', '0', '0', '5', '', '12', '0', '1', '1', '蘑菇', '0', '1', '161', '83', '60', '66', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '19', '23', '21', '2', '7', '1', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('37', '洛克人', '6', '1', '1', '1184', '25', '20', '17', '19', '15', '109', '7', '150', '0', '1', '3', '1', '0', '12', '1496', '88', '8', '53', '0', '0', '5', '', '23', '0', '1', '1', '洛克人', '0', '1', '179', '92', '53', '47', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '42', '12', '8', '16', '3', '2', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('38', '骷髅兵', '4', '1', '1', '344', '12', '72', '46', '75', '47', '9', '1', '150', '0', '1', '3', '1', '0', '20', '758', '56', '12', '53', '0', '0', '1', null, '14', '0', '1', '1', '洛克人', '0', '1', '124', '63', '16', '16', '#FFFFFF', '0', 'D', '0', '1', '1', '0', '19', '12', '15', '4', '1', '2', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology` VALUES ('39', '未知生物', '1', '1', '1', '292', '12', '100', '61', '90', '58', '15', '1', '150', '0', '1', '3', '1', '0', '25', '739', '56', '14', '', '0', '0', '4', null, '15', '0', '1', '1', '洛克人', '0', '1', '124', '63', '17', '17', '#FFFFFF', '0', 'D', '0', '1', '1', '0', '10', '28', '18', '2', '7', '3', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');

-- ----------------------------
-- Table structure for x2_biology_biology
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_biology`;
CREATE TABLE `x2_biology_biology` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  `point` varchar(200) DEFAULT NULL COMMENT '简介标签',
  `value` int(11) DEFAULT NULL,
  `describe` varchar(200) DEFAULT NULL COMMENT '天赋描述',
  `characteristic` varchar(200) DEFAULT NULL COMMENT '特点',
  `icon` varchar(200) DEFAULT NULL,
  `type` char(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_biology
-- ----------------------------
INSERT INTO `x2_biology_biology` VALUES ('3', '人', '天地宠儿，最适合修行的形态，领悟极高，每级次战斗有概率突破或者提升境界。', '10', '幸运+10', '幸运，体质，属性较高，适合新人。', '图标符文/水.png', '水');
INSERT INTO `x2_biology_biology` VALUES ('2', '妖', '狡猾而狡诈，大部分技能是辅助控制buff技能，非常适合于后排。', '6', '触发+6%', '控制，概率，buff加成，适合资深玩家。', '图标符文/木.png', '木');
INSERT INTO `x2_biology_biology` VALUES ('4', '鬼', '拥有无尽的魂力，最纯粹的力量，强大的魂力使他们不易死亡。', '100', '法力值+100', '套路，脆弱，搭配较高，适合资深玩家。', '图标符文/火.png', '火');
INSERT INTO `x2_biology_biology` VALUES ('5', '灵', '天地万物皆有灵，有较高的灵气成长值。有回血，反伤，减伤等技能。', '20', '灵气+20%', '辅助，肉盾，全能选手，适合普通玩家。', '图标符文/土.png', '土');
INSERT INTO `x2_biology_biology` VALUES ('6', '异', '超脱三界，不在五行的未知生物。拥有极高的抗性，免疫的物理和法术伤害。', '20', '生命+20%', '双抗，减伤，防御较高，适合普通玩家。', '图标符文/无.png', '无');
INSERT INTO `x2_biology_biology` VALUES ('1', '兽', '血腥狂暴，拥有极高的爆发。偏物理类型，适合前排或者输出。', '5', '暴击+5%', '物理，暴力，爆发较高，适合新人。', '图标符文/金.png', '金');

-- ----------------------------
-- Table structure for x2_biology_character
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_character`;
CREATE TABLE `x2_biology_character` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL COMMENT '性格',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `type` varchar(25) DEFAULT '触发' COMMENT '类型',
  `value` int(11) DEFAULT '0' COMMENT '固定值',
  `valueName` varchar(50) DEFAULT NULL,
  `extend` varchar(255) DEFAULT NULL COMMENT '公式',
  `value1` int(11) DEFAULT '0',
  `valueName1` varchar(50) DEFAULT NULL,
  `extend1` varchar(255) DEFAULT NULL COMMENT '公式',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_character
-- ----------------------------
INSERT INTO `x2_biology_character` VALUES ('1', '投机', '触发+16% 生命-20%', '触发', '0', 'chuFa', '+0.16*', '0', 'shengMing', '-0.2*');
INSERT INTO `x2_biology_character` VALUES ('2', '创造', '触发+9%攻击-11%', '触发', '0', 'chuFa', '+0.15*', '0', 'gongJi', '-0.11*');
INSERT INTO `x2_biology_character` VALUES ('3', '机智', '触发+12%', '触发', '0', 'chuFa', '+0.12*', '0', null, null);
INSERT INTO `x2_biology_character` VALUES ('4', '奋发', '触发+8% 护甲-8%', '触发', '0', 'chuFa', '+0.08*', '0', 'huJia', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('5', '多变', '触发+8% 法抗+10%', '触发', '0', 'chuFa', '+0.08*', '0', 'faKang', '+0.1*');
INSERT INTO `x2_biology_character` VALUES ('6', '聪慧', '触发+8% 悟性+5', '触发', '0', 'chuFa', '+0.08*', '5', 'wuXing', null);
INSERT INTO `x2_biology_character` VALUES ('7', '好胜', '攻击+12% 护甲-15%', '攻击', '0', 'gongJi', '+0.12*', '0', 'huJia', '-0.15*');
INSERT INTO `x2_biology_character` VALUES ('8', '善战', '攻击+8% 速度+8%', '攻击', '0', 'gongJi', '+0.08*', '0', 'suDu', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('9', '坦率', '攻击+8% 特攻+8%', '攻击', '0', 'gongJi', '+0.08*', '0', 'faGong', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('10', '固执', '攻击+8% 护甲-8%', '攻击', '0', 'gongJi', '+0.08*', '0', 'huJia', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('11', '勇敢', '攻击+8% 特攻-8%', '攻击', '0', 'gongJi', '+0.08*', '0', 'faGong', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('12', '贪婪', '特攻19% 法抗-70%', '特攻', '0', 'faGong', '+0.19*', '0', 'faKang', '-0.7*');
INSERT INTO `x2_biology_character` VALUES ('13', '微娇', '特攻+17% 攻击-17%', '特攻', '0', 'faGong', '+0.17*', '0', 'gongJi', '-0.17*');
INSERT INTO `x2_biology_character` VALUES ('14', '无虑', '特攻+13% 速度-8%', '特攻', '0', 'faGong', '+0.13*', '0', 'suDu', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('15', '狂妄', '特攻8%  攻击-8%', '特攻', '0', 'faGong', '+0.18*', '0', 'gongJi', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('16', '愚笨', '生命+20% 悟性-15%', '生命', '0', 'shengMing', '+0.2*', '0', 'wuXing', '-0.15*');
INSERT INTO `x2_biology_character` VALUES ('17', '圆滑', '生命+12% 攻击-8%', '生命', '0', 'shengMing', '+0.12*', '0', 'gongJi', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('18', '好学', '生命8% 魔法+8%', '生命', '0', 'shengMing', '+0.1*', '0', 'moFa', '-0.1*');
INSERT INTO `x2_biology_character` VALUES ('19', '无畏', '生命+8% 护甲+14%', '生命', '0', 'shengMing', '+0.15*', '0', 'huJia', '+0.14*');
INSERT INTO `x2_biology_character` VALUES ('20', '懦弱', '生命+8% 魔法+10%', '生命', '0', 'shengMing', null, '0', 'moFa', '+0.1*');
INSERT INTO `x2_biology_character` VALUES ('21', '自卑', '生命+8% 魔法-8%', '生命', '0', 'shengMing', null, '0', 'moFa', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('22', '悟道', '悟性+15 法抗-18%', '悟性', '15', 'wuXing', null, '0', 'faKang', '-0.18*');
INSERT INTO `x2_biology_character` VALUES ('23', '努力', '悟性+10 灵气+20%', '悟性', '10', 'wuXing', null, '0', 'reiki', '+0.2*');
INSERT INTO `x2_biology_character` VALUES ('24', '悲观', '悟性+12  速度-8%', '悟性', '10', 'wuXing', null, '0', 'suDu', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('25', '遗憾', '悟性+7 特攻-25%', '悟性', '7', 'wuXing', null, '0', 'faGong', '-0.25*');
INSERT INTO `x2_biology_character` VALUES ('26', '忠诚', '悟性+5 护甲+15%', '悟性', '5', 'wuXing', '', '0', 'fangYu', '-0.1*');
INSERT INTO `x2_biology_character` VALUES ('27', '极端', '暴击+10% 护甲-10%', '暴击', '0', 'faKang', '+0.15*', '0', 'huJia', '-0.1*');
INSERT INTO `x2_biology_character` VALUES ('28', '暴躁', '暴击+8% 护甲-8%', '暴击', '0', 'baojilv', '+0.08*', '0', 'huJia', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('29', '浮躁', '暴击+8% 法抗-8%', '暴击', '0', 'baojilv', '+0.08*', '0', 'faKang', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('30', '积极', '速度16+%', '速度', '0', 'suDu', '+0.16*', '0', null, null);
INSERT INTO `x2_biology_character` VALUES ('31', '冷静', '速度+8% 护甲+8%', '速度', '0', 'suDu', '+0.08*', '0', 'huJia', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('32', '灵活', '速度+6% 闪避+6%', '速度', '0', 'suDu', '+0.06*', '0', 'shanbi', '+0.06*');
INSERT INTO `x2_biology_character` VALUES ('33', '冷漠', '护甲+30%', '护甲', '0', 'huJia', '+0.24*', '0', null, null);
INSERT INTO `x2_biology_character` VALUES ('34', '善变', '护甲+20% 攻击-20%', '护甲', '0', 'huJia', '+0.2*', '0', 'gongJi', '-0.1*');
INSERT INTO `x2_biology_character` VALUES ('35', '软弱', '护甲+20% 悟性-15%', '护甲', '0', 'huJia', '+0.2*', '0', 'wuXing', '-0.15*');
INSERT INTO `x2_biology_character` VALUES ('36', '淘气', '护甲+15% 攻击-8% ', '护甲', '0', 'huJia', '+0.15*', '0', 'gongJi', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('37', '忧郁', '护甲+15% 特供-8%', '护甲', '0', 'huJia', '+0.15*', '0', 'faGong', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('38', '忠诚', '护甲+15% 悟性+5', '护甲', '0', 'huJia', '+0.15*', '0', 'wuXing', '+0.05*');
INSERT INTO `x2_biology_character` VALUES ('39', '自信', '护甲+14% 法抗+14%', '护甲', '0', 'huJia', '+0.14*', '0', 'faKang', '+0.14*');
INSERT INTO `x2_biology_character` VALUES ('40', '坚强', '护甲+25% 法抗-8%', '护甲', '0', 'huJia', '+0.25*', '0', 'faKang', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('41', '悠闲', '护甲+10% 速度-8%', '护甲', '0', 'huJia', '+0.1*', '0', 'suDu', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('42', '虚荣', '护甲-8% 魔法+8%', '护甲', '0', 'huJia', '-0.08*', '0', 'moFa', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('43', '含蓄', '法抗+19% 魔法+8%', '法抗', '0', 'faKang', '+0.19*', '0', 'moFa', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('44', '认真', '法抗+25% 护甲-8%', '法抗', '0', 'faKang', '+0.16*', '0', 'huJia', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('45', '害羞', '法抗+16% 攻击-8%', '法抗', '0', 'faKang', '+0.16*', '0', 'gongJi', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('46', '坚毅', '法抗+20% 护甲+10%', '法抗', '0', 'faKang', '+0.2*', '0', 'huJia', '+0.1*');
INSERT INTO `x2_biology_character` VALUES ('47', '果断', '法抗+10% 护甲+20%', '法抗', '0', 'faKang', '+0.1*', '0', 'huJia', '+0.2*');
INSERT INTO `x2_biology_character` VALUES ('48', '妄想', '魔法+20%', '魔法', '0', 'moFa', '+0.2*', '0', null, null);
INSERT INTO `x2_biology_character` VALUES ('49', '虚伪', '魔法+12% 生命-8%', '魔法', '0', 'moFa', '+0.12*', '0', 'shengMing', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('50', '虚心', '魔法+8% 护甲+8%', '魔法', '0', 'moFa', '+0.08*', '0', 'huJia', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('51', '好学', '魔法+8% 生命+8%', '魔法', '0', 'moFa', '+0.08*', '0', 'shengMing', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('52', '社恐', '魔法+15% 法抗+10%', '魔法', '0', 'moFa', '+0.15*', '0', 'faKang', '+0.1*');
INSERT INTO `x2_biology_character` VALUES ('53', '好学', '魔法+8% 生命+8%', '魔法', '0', 'moFa', '+0.08*', '0', 'shengMing', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('54', '机灵', '闪避+10%', '闪避', '0', 'shanbi', '+0.1*', '0', null, null);
INSERT INTO `x2_biology_character` VALUES ('55', '矫健', '闪避+20% 护甲-20%', '闪避', '0', 'shanbi', '+0.2*', '0', 'huJia', '-0.2*');
INSERT INTO `x2_biology_character` VALUES ('56', '童心', '闪避+20% 法抗-20%', '闪避', '0', 'shanbi', '+0.2*', '0', 'fakang', '-0.2*');
INSERT INTO `x2_biology_character` VALUES ('57', '恶毒', '灵气+40% 攻击-15%', '灵气', '0', 'reiki', '+0.4*', '0', 'gongJi', '-0.15*');
INSERT INTO `x2_biology_character` VALUES ('58', '迟钝', '灵气+26% 速度-8%', '灵气', '0', 'reiki', '+0.26*', '0', 'suDu', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('59', '努力', '灵气+20% 悟性+10', '灵气', '0', 'reiki', '+0.2*', '0', 'wuXing', '+0.1*');
INSERT INTO `x2_biology_character` VALUES ('60', '真诚', '灵气+35% 触发-5%', '灵气', '0', 'reiki', '+0.35*', '0', 'chuFa', '-0.05*');
INSERT INTO `x2_biology_character` VALUES ('61', '细致', '命中+12%', '命中', '0', 'mingZhong', '+0.12*', '0', null, null);
INSERT INTO `x2_biology_character` VALUES ('62', '狠辣', '命中+20% 生命-8%', '命中', '0', 'mingZhong', '+0.2*', '0', 'shengMIng', '-0.08*');
INSERT INTO `x2_biology_character` VALUES ('63', '博学', '魔法+200 灵气+500', '魔法', '200', 'moFa', null, '500', 'reiki', null);
INSERT INTO `x2_biology_character` VALUES ('64', '博爱', '生命+5000 生命+8%', '生命', '5000', 'shengMing', null, '0', 'shengMIng', '+0.08*');
INSERT INTO `x2_biology_character` VALUES ('65', '热血', '暴击+20% 攻击-15%', '暴击', '0', 'baojilv', '+0.2*', '0', 'gongJi', '-0.15*');
INSERT INTO `x2_biology_character` VALUES ('66', '神秘', '触发+20% 魔法-200', '触发', '0', 'chuFa', '+0.2*', '200', 'moFa', null);
INSERT INTO `x2_biology_character` VALUES ('67', '闷骚', '攻击+50% 生命-80%', '攻击', '0', 'gongJi', '+0.5*', '0', 'shengMing', '-0.8*');
INSERT INTO `x2_biology_character` VALUES ('68', '天真', '悟性+20 灵气-50%', '悟性', '20', 'wuXing', '+0.2*', '0', 'reiki', '-0.5*');
INSERT INTO `x2_biology_character` VALUES ('69', '亲和', '特攻+50% 魔法-50%', '触发', '0', 'faGong', '+0.5*', '0', 'moFa', '-0.5*');
INSERT INTO `x2_biology_character` VALUES ('70', '胆小', '护甲+50% 特攻-80%', '护甲', '0', 'huJia', '+0.5*', '0', 'faGong', '-0.8*');
INSERT INTO `x2_biology_character` VALUES ('71', '孤独', '法抗+50% 攻击-80%', '法抗', '0', 'faKang', '+0.5*', '0', 'gongJi', '-0.8*');
INSERT INTO `x2_biology_character` VALUES ('72', '残暴', '暴击+5%  暴击伤害+50%', '暴击', '0', 'baojilv', '+0.05*', '0', 'baoji', '+0.5*');
INSERT INTO `x2_biology_character` VALUES ('73', '空灵', '灵气+1000 灵气+10%', '灵气', '1000', 'reiki', null, '0', 'reiki', '+0.1*');
INSERT INTO `x2_biology_character` VALUES ('74', '无双', '攻击+2000 特攻+2000', '触发', '2000', 'gongJi', null, '2000', 'faGong', null);
INSERT INTO `x2_biology_character` VALUES ('75', '盘古', '护甲+1000 法抗+1000', '触发', '1000', 'huJia', null, '1000', 'faKang', null);

-- ----------------------------
-- Table structure for x2_biology_create
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_create`;
CREATE TABLE `x2_biology_create` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '生物创造表',
  `name` varchar(25) DEFAULT NULL COMMENT '生物名称',
  `biology` tinyint(3) DEFAULT '1' COMMENT '种族(人鬼妖神魔异) 0未知',
  `state` int(3) DEFAULT '1' COMMENT '生物境界',
  `grade` int(11) DEFAULT '1' COMMENT '等级',
  `shengMing` int(11) DEFAULT '1' COMMENT '生命',
  `moFa` int(11) DEFAULT '1' COMMENT '魔法',
  `gongJi` int(11) DEFAULT '1' COMMENT '攻击',
  `huJia` int(11) DEFAULT '1' COMMENT '护甲',
  `faGong` int(11) DEFAULT '1' COMMENT '特攻',
  `fakang` int(11) DEFAULT '1' COMMENT '法抗',
  `suDu` int(11) DEFAULT '1' COMMENT '速度',
  `shanbi` int(11) DEFAULT '0' COMMENT '闪避',
  `baoji` int(11) DEFAULT '0' COMMENT '暴击',
  `baojilv` int(11) DEFAULT '0' COMMENT '暴击率',
  `shuaXin` int(11) DEFAULT '1' COMMENT '刷新次数',
  `xunLian` int(11) DEFAULT '3' COMMENT '训练次数',
  `jinJie` int(11) DEFAULT '1' COMMENT '进阶',
  `biologyid` int(11) DEFAULT '0' COMMENT '生物id',
  `reiki` int(11) DEFAULT '1' COMMENT '灵气',
  `power` int(11) DEFAULT '1' COMMENT '力量',
  `agile` int(11) DEFAULT '1' COMMENT '敏捷',
  `intelligence` int(11) DEFAULT '1' COMMENT '智力',
  `special` int(11) DEFAULT '1' COMMENT '评分 战力 (与属性有关*30.0的基础评分) 悟性 和基础属性',
  `score` int(11) DEFAULT '1' COMMENT '评分',
  `wuXing` int(11) DEFAULT '3' COMMENT '悟性-成长率 1-10  自由属性 ',
  `skill` varchar(255) DEFAULT '1' COMMENT '技能编号',
  `yuanShen` int(11) DEFAULT '0' COMMENT '元神',
  `fate` int(11) DEFAULT '0' COMMENT '缘分(武器缘分) 本命法宝（只有一个）武器库随机-命中注定',
  `type` int(3) NOT NULL DEFAULT '4' COMMENT '1普通 2特殊 3NPC 4不可用',
  `descript` varchar(255) DEFAULT NULL COMMENT '描述',
  `lucky` int(3) DEFAULT '1' COMMENT ' 幸运值-成长值-潜能-技能进阶-境界突破',
  `maxNature` int(11) DEFAULT '0' COMMENT '自由属性点',
  `qianNeng` int(3) DEFAULT '1' COMMENT '潜能--1-10次，战斗中有几率进化-增加1-10 悟性（越低级潜能越大）',
  `character` int(3) DEFAULT '1' COMMENT '性格',
  `picture` varchar(255) DEFAULT NULL COMMENT '生物图片 形象',
  `yiXing` tinyint(1) DEFAULT '0' COMMENT '异性 0 否1是',
  `sex` int(255) DEFAULT '1' COMMENT '性别',
  `jingBi` int(11) DEFAULT '1' COMMENT '金币',
  `jingYan` int(11) DEFAULT '1' COMMENT '经验',
  `jianShang` int(255) DEFAULT '0' COMMENT '减伤',
  `zhenShang` int(255) DEFAULT '0' COMMENT '增伤（真实伤害）',
  `color` varchar(25) DEFAULT '#fff' COMMENT '颜色（普通默认为白色）',
  `danDu` int(11) DEFAULT '0' COMMENT '丹毒100  大30每回合对自身造成生命值%的伤害',
  `scoreGrade` varchar(11) DEFAULT 'D' COMMENT '评分等级 D C A B S SS SSS 传说',
  `chuFa` int(3) DEFAULT '0' COMMENT '触发--最多叠加到100',
  `wordId` int(11) DEFAULT NULL COMMENT '世界编号',
  `jiBan` int(3) NOT NULL DEFAULT '1' COMMENT '羁绊',
  `experience` int(11) DEFAULT '0' COMMENT '升级经验 每级 等级*500的经验',
  `minPower` int(11) DEFAULT '10' COMMENT '最小力量',
  `minAgile` int(11) DEFAULT '10',
  `minIntelligence` int(11) DEFAULT '10' COMMENT '最小力量',
  `userid` int(11) DEFAULT '1' COMMENT '模型创建所属人 1 管理员',
  `percent` float(11,0) DEFAULT '0' COMMENT '经验条(单独增加）',
  `xiXue` int(11) DEFAULT '0',
  `shenFen` tinyint(3) DEFAULT '1' COMMENT '身份 1普通  2精英   3头目  4气运之子    5天地主角',
  `siwang` int(11) DEFAULT '0' COMMENT '死亡    尸焰（死亡） 炽炀（残暴）',
  `jisha` int(11) DEFAULT '0' COMMENT '击杀  罗睺（魔道） 盘古（力道） 九江（重道） 乌冹（轻道） 砀殕（命运）',
  `fuhuo` int(11) DEFAULT '0' COMMENT '复活   后土专属技能--轮回 空冥（空间） 扬眉（时间） 灵木道人（生命）',
  `huDun` int(11) DEFAULT '0' COMMENT '护盾',
  `zhiLiao` int(11) DEFAULT '0' COMMENT '治疗',
  `zhenShi` int(11) DEFAULT '0' COMMENT '真实伤害',
  `wuDi` int(11) DEFAULT '0' COMMENT '无敌',
  `gooduse1` int(11) DEFAULT NULL COMMENT '装备栏1',
  `gooduse2` int(11) DEFAULT NULL COMMENT '装备栏2',
  `zhuanshen` int(11) DEFAULT '0' COMMENT '满60级转身次数  鸿钧专属技能-天道',
  `zhujiao` int(11) DEFAULT '0' COMMENT '主角模型，不可以创建',
  `zPower` int(11) DEFAULT '0' COMMENT '附加力量',
  `zIntelligence` int(11) DEFAULT '0' COMMENT '附加智力',
  `shouyuan` int(11) DEFAULT '60' COMMENT '寿元',
  `shouyuanYear` int(11) DEFAULT '1' COMMENT '年龄',
  `zAgile` int(11) DEFAULT '0' COMMENT '附加敏捷',
  `wuXingTotal` int(11) DEFAULT '0' COMMENT '悟性值',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=222 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_create
-- ----------------------------
INSERT INTO `x2_biology_create` VALUES ('199', '朱无视', '1', '1', '1', '298', '13', '70', '38', '84', '42', '9', '2', '150', '0', '1', '3', '1', '6', '15', '10', '17', '32', '716', '69', '3', '7', '0', '0', '1', '外号铁胆神侯，为当今皇上叔父。当年先皇驾崩前，唯恐正德年少，易被奸人操控，或无力主持朝政，不懂分辨忠奸，于是特令皇弟朱无视创立护龙山庄，权力可凌驾所有朝廷机构，并赐予先皇之丹书铁卷、尚方宝剑，可以上斩昏君，下斩谗臣，给了正德一个最高特务机构，制衡东厂。', '21', '0', '1', '1', '图标生物/山贼.png', '0', '1', '150', '76', '22', '22', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '4', '9', '17', '1', '0', '0', '3', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology_create` VALUES ('200', '万三千', '1', '1', '1', '392', '12', '78', '57', '94', '61', '9', '0', '150', '0', '1', '3', '1', '11', '26', '24', '5', '21', '898', '70', '6', '5,11', '0', '0', '1', '天下第一庄庄主，富甲天下。', '7', '0', '1', '1', '图标生物/宫本.png', '0', '1', '152', '77', '9', '9', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '13', '3', '16', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology_create` VALUES ('201', '眠狂四郎', '1', '1', '1', '480', '11', '63', '32', '56', '30', '8', '1', '150', '0', '1', '3', '1', '15', '12', '33', '16', '9', '775', '58', '1', null, '0', '0', '1', '东瀛著名剑客眠狂四郎「幻剑」。', '15', '0', '1', '1', '图标生物/宫本.png', '0', '1', '128', '65', '16', '16', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '21', '8', '7', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology_create` VALUES ('202', '曹正淳', '1', '1', '1', '364', '13', '88', '58', '107', '62', '11', '2', '150', '0', '1', '3', '1', '9', '25', '17', '14', '33', '881', '74', '1', '11', '0', '0', '1', '东厂总管太监曹正淳。野心勃勃的曹正淳权势滔天，他修炼“童子功“大成、武功盖世\r\n天下第一\r\n天下第一(22张)\r\n ，又自恃掌管东厂，权倾朝野，结党营私，勾结贪官，陷害忠良，无恶不作。', '23', '0', '1', '1', '图标生物/司马懿.png', '0', '1', '160', '81', '25', '25', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '3', '5', '11', '1', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology_create` VALUES ('203', '了空', '1', '1', '1', '374', '14', '92', '62', '112', '67', '12', '1', '150', '0', '1', '3', '1', '21', '27', '18', '13', '34', '900', '75', '4', '10', '0', '0', '1', '少林寺了空大师。', '17', '0', '1', '1', '图标生物/貂蝉.png', '0', '1', '162', '82', '19', '19', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '11', '5', '25', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology_create` VALUES ('216', '洛克人', '6', '1', '1', '518', '11', '51', '29', '48', '28', '5', '2', '150', '0', '1', '3', '1', '37', '12', '40', '6', '3', '852', '59', '5', '53', '0', '0', '5', '', '23', '0', '1', '1', '图标生物/洛克人.png', '0', '1', '130', '66', '24', '24', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '16', '3', '2', '26', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology_create` VALUES ('217', '张无忌', '1', '1', '1', '492', '12', '51', '18', '48', '18', '6', '1', '150', '0', '1', '3', '1', '23', '5', '33', '17', '14', '772', '74', '2', '5', '0', '0', '2', '柳生但马守是武侠电视剧《天下第一》中的角色，是著名剑客柳生十兵卫的父亲，也是武学宗师。', '10', '0', '1', '1', '图标生物/宫本.png', '0', '1', '160', '81', '10', '10', '#FFFFFF', '0', 'S', '0', '1', '1', '0', '24', '11', '13', '26', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology_create` VALUES ('218', '未知生物', '1', '1', '1', '258', '12', '87', '57', '85', '57', '12', '1', '150', '0', '1', '3', '1', '39', '25', '9', '18', '16', '679', '43', '8', null, '0', '0', '4', null, '15', '0', '1', '1', null, '0', '1', '98', '50', '17', '17', '#FFFFFF', '0', 'D', '0', '1', '1', '0', '2', '7', '3', '26', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology_create` VALUES ('219', '蘑菇', '5', '1', '1', '366', '12', '100', '67', '98', '66', '14', '1', '150', '0', '1', '3', '1', '36', '29', '19', '20', '18', '832', '57', '5', null, '0', '0', '5', '', '12', '0', '1', '1', '图标生物/蘑菇.png', '0', '1', '126', '64', '14', '14', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '2', '7', '1', '26', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology_create` VALUES ('220', '曹正淳', '1', '1', '1', '406', '13', '99', '60', '106', '62', '14', '2', '150', '0', '1', '3', '1', '9', '25', '20', '23', '30', '888', '73', '7', null, '0', '0', '1', '东厂总管太监曹正淳。野心勃勃的曹正淳权势滔天，他修炼“童子功“大成、武功盖世\r\n天下第一\r\n天下第一(22张)\r\n ，又自恃掌管东厂，权倾朝野，结党营私，勾结贪官，陷害忠良，无恶不作。', '23', '0', '1', '1', '图标生物/宫本.png', '0', '1', '158', '80', '25', '25', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '3', '5', '11', '26', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');
INSERT INTO `x2_biology_create` VALUES ('221', '魔法少女', '3', '1', '1', '350', '12', '61', '37', '68', '39', '7', '2', '150', '0', '1', '3', '1', '33', '16', '20', '9', '16', '701', '45', '12', null, '0', '0', '5', '', '28', '0', '1', '1', '图标生物/魔法少女.png', '0', '1', '102', '52', '29', '29', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '11', '3', '8', '26', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '60', '1', '0', '0');

-- ----------------------------
-- Table structure for x2_biology_godhood
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_godhood`;
CREATE TABLE `x2_biology_godhood` (
  `id` int(11) NOT NULL COMMENT '缘分（神格）',
  `godName` varchar(25) DEFAULT NULL COMMENT '神格',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_godhood
-- ----------------------------
INSERT INTO `x2_biology_godhood` VALUES ('1', '盘古');

-- ----------------------------
-- Table structure for x2_biology_jiban
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_jiban`;
CREATE TABLE `x2_biology_jiban` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '羁绊',
  `name` varchar(25) DEFAULT NULL,
  `point` varchar(255) DEFAULT NULL,
  `value` int(11) DEFAULT NULL COMMENT '羁绊值',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `biologyid` varchar(255) DEFAULT NULL COMMENT '生物id',
  `jiBan` varchar(255) DEFAULT NULL COMMENT '羁绊id',
  `num` int(11) DEFAULT NULL COMMENT '组合人数',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_jiban
-- ----------------------------
INSERT INTO `x2_biology_jiban` VALUES ('1', '无', null, '0', '', null, '1', '5');
INSERT INTO `x2_biology_jiban` VALUES ('2', '虾兵蟹将', '', '2', '攻击+500', '', '25', '5');
INSERT INTO `x2_biology_jiban` VALUES ('3', '七大圣', '', '2', '特殊召唤召唤2个《西游记》中的七大圣，牛魔王、蛟魔王、鹏魔王、狮驼王、猕猴王、禺狨王、美猴王。', '', '25', '5');
INSERT INTO `x2_biology_jiban` VALUES ('4', '桃源结义', '', '8', '每回合开始治疗全体单位8%的生命值', '', '26', '3');
INSERT INTO `x2_biology_jiban` VALUES ('5', '二十八星宿', '', '3', '技能强化', '', '', '3');
INSERT INTO `x2_biology_jiban` VALUES ('6', '三清', '', '3', '技能强化', '', '', '3');
INSERT INTO `x2_biology_jiban` VALUES ('7', '巫妖之祸', '', '2', '技能强化', '', '', '2');
INSERT INTO `x2_biology_jiban` VALUES ('8', '三皇五帝', '', '3', '技能强化', '', '', '3');
INSERT INTO `x2_biology_jiban` VALUES ('9', '四御五老', '', '3', '技能强化', '', '', '3');
INSERT INTO `x2_biology_jiban` VALUES ('10', '四大天王', '', '4', '技能强化', '', '', '4');
INSERT INTO `x2_biology_jiban` VALUES ('11', '人', null, '10000', '人族精锐，生命+10000', null, null, '5');
INSERT INTO `x2_biology_jiban` VALUES ('12', '妖', null, '3', '妖族精锐，暴击3%', null, null, '5');
INSERT INTO `x2_biology_jiban` VALUES ('13', '鬼', null, '200', '鬼族精锐，智力+200', null, null, '5');
INSERT INTO `x2_biology_jiban` VALUES ('14', '仙', null, '200', '仙族精锐，敏捷+200', null, null, '5');
INSERT INTO `x2_biology_jiban` VALUES ('15', '魔', null, '200', '魔族精锐，力量+200', null, null, '5');
INSERT INTO `x2_biology_jiban` VALUES ('16', '灵', null, '10000', '灵族精锐，法力值+10000', null, null, '5');
INSERT INTO `x2_biology_jiban` VALUES ('17', '异', null, '3', '异族精锐，触发+3%', null, null, '5');
INSERT INTO `x2_biology_jiban` VALUES ('18', '兽', null, '3', '兽族精锐，闪避+3%', null, null, '5');
INSERT INTO `x2_biology_jiban` VALUES ('19', '怜香惜玉', null, '15', '15%几率使敌方单位跳过当前回合', null, null, '5');
INSERT INTO `x2_biology_jiban` VALUES ('20', '气场震慑', null, '5', '每回合开始造成对敌方造成5%的生命伤害', null, null, '3');
INSERT INTO `x2_biology_jiban` VALUES ('21', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for x2_biology_nature
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_nature`;
CREATE TABLE `x2_biology_nature` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '叠加属性表（绑定武器等加成属性）',
  `name` varchar(25) DEFAULT NULL,
  `point` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `wuqiValue` int(11) DEFAULT '0' COMMENT '武器叠加最大属性',
  `danyaoValue` int(11) DEFAULT '0' COMMENT '武器叠加最大属性   值*百分比*等级/境界 1级约0.05 进一取整',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_nature
-- ----------------------------
INSERT INTO `x2_biology_nature` VALUES ('1', '幸运', null, 'lucky', '', '20', '2');
INSERT INTO `x2_biology_nature` VALUES ('2', '境界', null, 'state', '', '2', '2');
INSERT INTO `x2_biology_nature` VALUES ('3', '力量', null, 'power', '', '100', '10');
INSERT INTO `x2_biology_nature` VALUES ('4', '敏捷', null, 'agile', '', '100', '10');
INSERT INTO `x2_biology_nature` VALUES ('5', '智力', null, 'intelligence', '', '100', '10');
INSERT INTO `x2_biology_nature` VALUES ('6', '等级', null, 'grade', '', '10', '2');
INSERT INTO `x2_biology_nature` VALUES ('7', '灵气', null, 'reiki', null, '600', '20');
INSERT INTO `x2_biology_nature` VALUES ('8', '悟性', null, 'wuXing', null, '0', '0');
INSERT INTO `x2_biology_nature` VALUES ('9', '技能', null, 'skill', null, '0', '0');
INSERT INTO `x2_biology_nature` VALUES ('10', '触发', null, 'chuFa', null, '20', '0');
INSERT INTO `x2_biology_nature` VALUES ('11', '生命', null, 'shengMing', null, '100000', '2000');
INSERT INTO `x2_biology_nature` VALUES ('12', '魔法', null, 'moFa', null, '400', '10');
INSERT INTO `x2_biology_nature` VALUES ('13', '攻击', null, 'gongJi', null, '20000', '200');
INSERT INTO `x2_biology_nature` VALUES ('14', '护甲', null, 'huJia', null, '10000', '100');
INSERT INTO `x2_biology_nature` VALUES ('15', '特攻', null, 'faGong', null, '20000', '200');
INSERT INTO `x2_biology_nature` VALUES ('16', '法抗', null, 'fakang', null, '10000', '100');
INSERT INTO `x2_biology_nature` VALUES ('17', '减伤', null, 'jianShang', null, '2000', '0');
INSERT INTO `x2_biology_nature` VALUES ('18', '真伤', null, 'zhenShang', null, '2000', '0');
INSERT INTO `x2_biology_nature` VALUES ('19', '闪避', null, 'shanbi', null, '20', '0');
INSERT INTO `x2_biology_nature` VALUES ('20', '速度', null, 'suDu', null, '2000', '10');
INSERT INTO `x2_biology_nature` VALUES ('21', '暴击', null, 'baoji', null, '100', '10');
INSERT INTO `x2_biology_nature` VALUES ('22', '暴率', null, 'baojilv', null, '30', '0');
INSERT INTO `x2_biology_nature` VALUES ('23', '丹毒', null, 'danDu', null, '0', '0');
INSERT INTO `x2_biology_nature` VALUES ('24', '属性', null, 'extend', '全属性增加+1000', '10000', '10');
INSERT INTO `x2_biology_nature` VALUES ('25', '召唤', null, 'zhaoHuan', '特殊召唤单位', '0', '0');
INSERT INTO `x2_biology_nature` VALUES ('26', '治疗', null, 'zhiLiao', '特殊治疗', '0', '0');
INSERT INTO `x2_biology_nature` VALUES ('27', '增长', null, 'zengZhang', '回合增加属性+100', '0', '0');
INSERT INTO `x2_biology_nature` VALUES ('28', '吸血', null, 'xiXue', '攻击回血', '30', '0');
INSERT INTO `x2_biology_nature` VALUES ('29', '经验', null, 'experience', null, '0', '3000');
INSERT INTO `x2_biology_nature` VALUES ('30', '悟性值', '', 'wuXingTotal', '悟性值', '0', '0');

-- ----------------------------
-- Table structure for x2_biology_skill
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_skill`;
CREATE TABLE `x2_biology_skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT '1' COMMENT '天地玄黄 宇宙洪荒 掉落只有4级，剩下靠缘分悟性',
  `name` varchar(255) DEFAULT NULL COMMENT '技能名称',
  `belong` int(11) DEFAULT '5' COMMENT '技能类型(0初始化,1回合化--初始化,2被击前触发,3被击后触发,4攻击前触发,5主动,6攻击后触发）',
  `extend` varchar(25) DEFAULT 'shengMing' COMMENT '伤害类型',
  `value` int(11) DEFAULT '0' COMMENT '成长增幅百分比,每级提升百分之1的效果.融合功法概率提升或掉落',
  `status` varchar(25) DEFAULT 'gongJi' COMMENT '公式伤害计算(爆率 法术 攻击 法伤  智力 敏捷 力量)',
  `isadd` int(1) DEFAULT '0' COMMENT '伤害公式0减少1增加',
  `formula` varchar(100) DEFAULT NULL COMMENT '公式',
  `hurtType` varchar(25) DEFAULT '1' COMMENT '伤害类型 1物理 2法术',
  `hurt` int(11) DEFAULT '0' COMMENT '伤害 固定伤害值 -数为减少',
  `keeptime` int(11) DEFAULT '0' COMMENT '持续时长(0为永久)1回合2回合(写入回合池）',
  `probability` int(255) DEFAULT '100' COMMENT '触发概率',
  `image` varchar(255) DEFAULT NULL COMMENT '图片',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `words` varchar(50) DEFAULT NULL COMMENT '世界名称',
  `wordid` int(11) DEFAULT NULL COMMENT '世界id',
  `bout` int(11) DEFAULT '1' COMMENT '0每回合触发1第一回合2第二回合',
  `position` int(11) DEFAULT '0' COMMENT '攻击位置0 普通',
  `positionType` int(11) DEFAULT '0' COMMENT '攻击类型 0 /1  1固定list  0随机',
  `attack` int(1) DEFAULT NULL COMMENT '攻击对象0被攻击触发 主动(自己)1 主动（敌方）2',
  `special` int(11) DEFAULT '0' COMMENT '特殊 组合技能--可以组合，也可以单独携带',
  `special2` int(1) DEFAULT '0' COMMENT '特殊 携带技能',
  `xiaoguo` varchar(25) DEFAULT '光晕' COMMENT '效果，文字提示，后期可以改为图片展示',
  `need` varchar(25) DEFAULT 'moFa' COMMENT '消耗-魔法-生命',
  `needValue` int(11) DEFAULT '0' COMMENT '数值',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_skill
-- ----------------------------
INSERT INTO `x2_biology_skill` VALUES ('1', '1', '蝶舞', '2', 'shanbi', '0', 'lucky', '1', '*0.02', 'gongJi', '7', '0', '100', 'Ability_Ambush', '闪避+7%,幸运*0.02闪避', '蝶舞天涯', '6', '1', '0', '0', '1', '0', '0', '悬浮', 'moFa', '-15');
INSERT INTO `x2_biology_skill` VALUES ('2', '1', '九天雷术', '5', 'shengMing', '0', 'faGong', '0', '*0.6', 'faGong', '-100', '0', '100', 'Ability_BackStab', '造成100+法术伤害160%', '蝶舞天涯', '6', '0', '1', '0', '2', '0', '0', '飓风', 'moFa', '-8');
INSERT INTO `x2_biology_skill` VALUES ('3', '1', '灵魂锁链', '2', 'shengMing', '0', 'fenTan', '0', '*0.7', 'gongJi', '0', '0', '100', 'Ability_CheapShot', '受到伤害时，由己方单位平均分摊智力*70%伤害', '蝶舞天涯', '6', '0', '0', '1', '0', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('4', '1', '铜皮铁骨', '2', 'shengMing', '1', 'power', '1', '*1.1', 'gongJi', '800', '0', '100', 'Ability_Creature_Cursed_01', '每回合增加800+生命10%上限', '蝶舞天涯', '6', '0', '0', '0', '1', '0', '0', '光晕', 'moFa', '-2');
INSERT INTO `x2_biology_skill` VALUES ('5', '1', '天涯', '1', 'baojilv', '0', 'gongJi', '0', null, 'gongJi', '8', '0', '80', 'Ability_Creature_Cursed_02', '吕布神圣一击，8%暴击率', '蝶舞天涯', '6', '1', '0', '0', '1', '0', '0', '飓风', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('6', '1', '咫尺天涯', '1', 'baojilv', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '3', 'Ability_Creature_Cursed_03', '3%的几率无视伤害，并且免疫伤害当前回合', '蝶舞天涯', '6', '0', '0', '0', '1', '0', '0', '飓风', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('7', '1', '赤兔', '1', 'zhaoHuan', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '13', 'Ability_Creature_Cursed_04', '召唤赤兔', '蝶舞天涯', '6', '0', '0', '0', '1', '0', '0', '飓风', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('8', '1', '铁布衫', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '15', 'Ability_Creature_Cursed_05', '15%的物理伤害减免', '天龙八部', '6', '0', '0', '0', '2', '0', '0', '召唤', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('9', '1', '唤魔', '1', 'moFa', '0', 'moFa', '1', null, 'moFa', '50', '0', '100', 'Ability_Creature_Disease_01', '每回合开始前恢复50点法力值', '天龙八部', '12', '0', '0', '0', '1', '0', '0', '飓风', 'moFa', '0');
INSERT INTO `x2_biology_skill` VALUES ('10', '1', '大威天龙', '1', 'shengMing', '0', 'gongJi', '0', '*1.1', 'gongJi', '0', '0', '10', 'Ability_Creature_Disease_02', '增加10%的物理伤害', '天龙八部', '12', '0', '8', '0', '2', '0', '0', '飓风', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('11', '1', '碧海潮生', '5', 'shengMing', '0', 'faGong', '0', '*1.1', 'faGong', '-100', '0', '100', 'Ability_Creature_Disease_03', '造成100+特供*110%的法术伤害', '神雕侠侣', '11', '0', '1', '0', '2', '0', '0', '飓风', 'moFa', '-30');
INSERT INTO `x2_biology_skill` VALUES ('12', '1', '乾坤大挪移', '5', 'shengMing', '3', 'gongJi', '0', null, 'gongJi', '15', '0', '100', 'Ability_Creature_Disease_04', '倚天屠龙记中明教教主功法，闪避15%，自带九阳神功，三维+2000', '倚天屠龙记', '9', '0', '0', '0', '2', '21', '0', '飓风', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('14', '1', '自爆元神', '1', 'zhenShi', '1', 'gongJi', '0', null, 'gongJi', '0', '0', '100', 'Ability_Creature_Disease_05', '自杀，对地方所有单位造成自身生命 *功法等级*1的法术伤害。', '蝶舞天涯', '16', '0', '0', '0', '2', '0', '0', '自杀', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('15', '1', '过度长生', '1', 'huDun', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', 'Ability_Creature_Poison_01', '生成等级*1000生命值的护盾，持续2个回合', '蝶舞天涯', '6', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('16', '1', ' 富甲天下', '1', 'shengMing', '0', 'jinBi', '0', null, 'gongJi', '0', '0', '100', 'Ability_Creature_Poison_02', '击杀金币*2倍', '天下第一', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('17', '1', '七十二变', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', 'Ability_Creature_Poison_03', '反弹伤害', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('18', '1', '金光盾', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', 'Ability_Creature_Poison_04', '护盾+1000', '封神榜', '35', '0', '0', '0', '2', '0', '0', '护盾', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('19', '1', '九阴九阳', '1', 'sanWei', '1', 'sanWei', '0', '*3', 'gongJi', '1000', '0', '100', 'Ability_Creature_Poison_05', '1000+三维*3 法术伤害', '封神榜', '35', '0', '0', '1', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('20', '1', '九阴', '1', 'sanWei', '0', 'sanWei', '0', null, 'gongJi', '2000', '0', '100', 'Ability_Creature_Poison_06', '三维属性+2000', '封神榜', '35', '0', '0', '0', '1', '19', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('21', '1', '九阳', '1', 'sanWei', '0', 'sanWei', '0', null, 'gongJi', '2000', '0', '100', 'Ability_CriticalStrike', '三维属性+2000', '封神榜', '35', '0', '0', '0', '1', '19', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('22', '1', '时间法则', '1', 'ShiJian', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '30', 'Ability_Defend', '', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('23', '1', '空间法则', '1', 'KongJian', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '30', 'Ability_Devour', null, '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('24', '1', '天神', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', 'Ability_Druid_AquaticForm', '致死保留1点生命值，无敌一回合', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('25', '1', '哼', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '渡厄真人传郑伦之术。鼻窍中二气，吸人魂魄。响如钟声，窍中两道白光喷将出来，收人魂魄。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('26', '1', '哈', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '青龙关陈奇之术。养成腹内一道黄气，喷出口来，凡是精血成胎的，必定有三魂七魄，见此黄气，则魂魄自散。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('27', '1', '八九玄功', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '七十二变。玉鼎真人传杨戬。袁洪也会七十二变。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('28', '1', '五行遁术', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '阐教擅长土遁。截教擅长水遁。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('29', '1', '三昧真火', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '常见高阶道术。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('30', '1', '呼风唤雨', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '常见低阶道术。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('31', '1', '定身术', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '常见中阶道术。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('32', '1', '飞头术', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '申公豹擅长。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('33', '1', '腾云术', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '速度+1000，常见法术。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('34', '1', '八卦演算', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '卜术。伏羲先天八卦。文王囚里城，创后天八卦。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('35', '1', '风林之术', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '口吐黑烟喷，就化为一网边，现一粒红珠；有碗口大小，中者即伤。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('36', '1', '纵地金光法', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '元始天尊传下。可日行数千里。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('37', '1', '五雷诀', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '似乎只对低级精怪起作用', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('38', '1', '三头六臂', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '九龙岛吕岳之术。心手摇动叁百六十骨节，霎时现出叁头六臂，一只手执形天印，一只手擎住瘟疫钟，一只手持定形瘟，一只手执住指瘟剑。罗宣亦会。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('39', '1', '脑后神手', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '一气仙马元之术', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('40', '1', '黑云犬', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '实名不详。顶上现一块黑云，云中现出一只犬来。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('41', '1', '丈六金身', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '现十八臂，二十四面，持璎珞，丝绦，降魔杵，金铃，金弓伞盖，宝锉，银戟，银旗等宝物。准提道人以之伏孔宣。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('42', '1', '替身法', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '佳梦关胡雷擅长', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('43', '1', '火龙兵', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '背后帖红纸葫芦，脚下画风火符印。火灵圣母之术。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('44', '1', '邱引之术', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '顶上长一道白光，光中分开，面现出碗大一颗红珠，在空中滴溜溜只是转。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('45', '1', '一气化三清', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '老子一气化三清：上清（九云冠，大红白鹤绛绡衣，宝剑）、玉清（如意冠，淡黄八卦衣，天马，灵芝如意）、太清（九霄冠，八宝万寿紫霞衣，龙须扇，三宝玉如意，地师）', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('46', '1', '六魂幡', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '通天教主之术。草人，有六尾，上书人名。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('47', '1', '劈面雷', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '界牌关王豹之术。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('48', '1', '神烟术', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '穿云关马忠之术。口吐黑烟，遮掩四方。效用不明。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('49', '1', '痘疹', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '潼关余德之术。有青黄赤白黑五个手帕，可化五方云。五个小斗，内装毒痘。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('50', '1', '催魂捉魄', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '（实名不详）。姚宾之术。落魂阵内，一土台；设一香案，台上扎一草人，草人身上写姜尚的名字；草人头上点叁盏灯，足下点七盏灯，上叁盏名为催魂灯，下点七盏名为捉魂灯，姚天君披发仗剑，步罡念咒，於台前发符用印，於空中一日拜叁次。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('51', '1', '钉头七箭书', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '陆压邪术。设法坛，扎草人书名，头脚各一盏灯，踏罡步斗，每日三拜，于二十一日，以桑枝弓、桃枝箭射草人双目心口。人遂绝命。', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('52', '1', '指地成钢', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '0', '0', '100', null, '惧留孙。专破地行术', '封神榜', '35', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '-10');
INSERT INTO `x2_biology_skill` VALUES ('53', '1', '现代知识', '1', 'shengMing', '0', 'gongJi', '0', null, 'gongJi', '20', '0', '100', null, '攻击+境界*100，拥有现代的一些知识，提升自身保命手段。', '蓝星', '1', '0', '0', '0', '2', '0', '0', '光晕', 'moFa', '0');

-- ----------------------------
-- Table structure for x2_biology_skill_extend
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_skill_extend`;
CREATE TABLE `x2_biology_skill_extend` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '技能类型表',
  `name` varchar(25) DEFAULT NULL,
  `extend` varchar(25) DEFAULT NULL,
  `descirpt` varchar(255) DEFAULT NULL,
  `type` int(1) DEFAULT '0' COMMENT '是否特殊',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_skill_extend
-- ----------------------------
INSERT INTO `x2_biology_skill_extend` VALUES ('1', '生命', 'shengMing', '增加生命上限，减少生命', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('2', '魔法', 'moFa', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('3', '攻击', 'gongJi', null, '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('4', '护甲', 'huJia', null, '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('5', '法攻', 'faGong', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('6', '法抗', 'fakang', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('7', '速度', 'suDu', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('8', '闪避', 'shanbi', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('9', '暴击伤害', 'baoji', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('10', '暴击几率', 'baojilv', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('11', '境界', 'jinJie', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('12', '灵气', 'reiki', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('13', '力量', 'power', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('14', '敏捷', 'agile', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('15', '智力', 'intelligence', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('16', '悟性', 'wuXing', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('17', '幸运', 'lucky', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('18', '性别', 'sex', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('19', '金币', 'jingBi', '偷窃，攻击偷取金币，战斗胜利累计获取。', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('20', '经验', 'jingYan', '战斗结算获取额外经验', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('21', '减伤', 'jianShang', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('22', '增伤', 'zhenShang', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('23', '触发', 'chuFa', '', '0');
INSERT INTO `x2_biology_skill_extend` VALUES ('24', '复活', 'fuhuo', '可复活次数', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('25', '吸血', 'xiXue', '吸血', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('26', '死亡', 'siwang', '1击杀不可复活 0 尸焰（死亡） 炽炀（残暴）', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('27', '身份', 'shenFen', '概率成为气运之子，普通，精英，头目，主角，命运。增加三维', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('28', '护盾', 'huDun', '生成临时护盾', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('29', '召唤', 'zhaoHuan', null, '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('30', '治疗', 'zhiLiao', '恢复生命', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('31', '真实伤害', 'zhenShi', '造成真实伤害，不可抵消', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('32', '无敌', 'wuDi', '无敌状态，免疫所有伤害', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('33', '清晰', 'yiChu', '移除buff', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('34', '控制单位', 'kongZhi', '持续回合，眩晕，禁锢，恐吓，冰冻，缠绕，跳过回合', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('35', '三围', 'sanWei', '增加三维', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('36', '分摊伤害', 'fenTan', '己方单位分摊伤害', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('37', '时间', 'ShiJian', '额外行动一次，无限叠加', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('38', '空间', 'KongJian', '所有伤害转为真实伤害，无法闪避', '1');
INSERT INTO `x2_biology_skill_extend` VALUES ('39', '悟性', 'wuXingTotal', '悟性总数', '0');

-- ----------------------------
-- Table structure for x2_biology_skill_position
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_skill_position`;
CREATE TABLE `x2_biology_skill_position` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '攻击位置，默认0 按顺序攻击',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `type` int(11) DEFAULT '0' COMMENT '类型只能是0固定类型 1随机类型血量特供',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_skill_position
-- ----------------------------
INSERT INTO `x2_biology_skill_position` VALUES ('1', '随机5个单位', '1');
INSERT INTO `x2_biology_skill_position` VALUES ('2', '第一排123单位', '0');
INSERT INTO `x2_biology_skill_position` VALUES ('3', '中间一排456单位', '0');
INSERT INTO `x2_biology_skill_position` VALUES ('4', '最后一排789单位', '0');
INSERT INTO `x2_biology_skill_position` VALUES ('5', '攻击单位及后面单位', '0');
INSERT INTO `x2_biology_skill_position` VALUES ('6', '随机1个单位', '1');
INSERT INTO `x2_biology_skill_position` VALUES ('7', '随机2个单位', '1');
INSERT INTO `x2_biology_skill_position` VALUES ('8', '随机3个单位', '1');
INSERT INTO `x2_biology_skill_position` VALUES ('9', '随机4个单位', '1');
INSERT INTO `x2_biology_skill_position` VALUES ('10', '所有单位', '1');

-- ----------------------------
-- Table structure for x2_biology_skill_position_type
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_skill_position_type`;
CREATE TABLE `x2_biology_skill_position_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `type` varchar(50) DEFAULT NULL COMMENT '类型',
  `sort` varchar(50) DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_skill_position_type
-- ----------------------------
INSERT INTO `x2_biology_skill_position_type` VALUES ('1', '血量最高', 'shengMing', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('2', '血量最低', 'shengMing', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('3', '攻击最高', 'gongJi', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('4', '攻击最低', 'gongJi', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('5', '特攻最高', 'faGong', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('6', '特攻最低', 'faGong', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('7', '速度最快', 'suDu', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('8', '速度最慢', 'suDu', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('9', '护甲最高', 'huJia', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('10', '护甲最低', 'huJia', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('11', '魔法最高', 'moFa', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('12', '魔法最低', 'moFa', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('13', '境界最高', 'jinJie', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('14', '境界最低', 'jinJie', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('15', '灵气最高', 'reiki', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('16', '灵气最低', 'reiki', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('19', '法抗最高', 'fakang', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('17', '法抗最低', 'fakang', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('18', '力量最高', 'power', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('20', '力量最低', 'power', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('21', '敏捷最高', 'reiki', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('22', '敏捷最低', 'reiki', 'SORT_ASC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('23', '智力最高', 'intelligence', 'SORT_DESC');
INSERT INTO `x2_biology_skill_position_type` VALUES ('24', '智力最低', 'intelligence', 'SORT_ASC');

-- ----------------------------
-- Table structure for x2_biology_skill_use
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_skill_use`;
CREATE TABLE `x2_biology_skill_use` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(11) DEFAULT NULL COMMENT '物品类型',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `value` int(11) DEFAULT NULL COMMENT '难度数值越大获得几率越小',
  `type` varchar(25) DEFAULT '1' COMMENT '技能类型 1进场 2 行动前3攻击4被攻击5频死 6回合结束 7攻击追加',
  `typeid` int(11) DEFAULT NULL,
  `chufa` varchar(25) DEFAULT '被动' COMMENT '分解类型  被动 主动',
  `chufaid` int(11) DEFAULT '1' COMMENT '1 主动 2 被动',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=165 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_skill_use
-- ----------------------------
INSERT INTO `x2_biology_skill_use` VALUES ('1', '属性叠加自身', '持续回合，增加自身', '1', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('2', '触发叠加自身', '持续回合，增加自身', '2', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('3', '生命叠加自身', '持续回合，增加自身', '3', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('4', '魔法叠加自身', '持续回合，增加自身', '4', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('5', '攻击叠加自身', '持续回合，增加自身', '5', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('6', '护甲叠加自身', '持续回合，增加自身', '6', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('7', '特攻叠加自身', '持续回合，增加自身', '7', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('8', '法抗叠加自身', '持续回合，增加自身', '8', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('9', '减伤叠加自身', '持续回合，增加自身', '9', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('10', '真伤叠加自身', '持续回合，增加自身', '10', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('11', '闪避叠加自身', '持续回合，增加自身', '11', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('12', '速度叠加自身', '持续回合，增加自身', '12', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('13', '暴击叠加自身', '持续回合，增加自身', '13', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('14', '属性叠加敌方', '持续回合，减少敌方', '14', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('15', '触发叠加敌方', '持续回合，减少敌方', '15', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('16', '生命叠加敌方', '持续回合，减少敌方', '16', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('17', '魔法叠加敌方', '持续回合，减少敌方', '17', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('18', '攻击叠加敌方', '持续回合，减少敌方', '18', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('19', '护甲叠加敌方', '持续回合，减少敌方', '19', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('20', '特攻叠加敌方', '持续回合，减少敌方', '20', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('21', '法抗叠加敌方', '持续回合，减少敌方', '21', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('22', '减伤叠加敌方', '持续回合，减少敌方', '22', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('23', '真伤叠加敌方', '持续回合，减少敌方', '23', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('24', '闪避叠加敌方', '持续回合，减少敌方', '24', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('25', '速度叠加敌方', '持续回合，减少敌方', '25', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('26', '暴击叠加敌方', '持续回合，减少敌方', '26', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('27', '特殊召唤', '特殊召唤单位，死亡不可复活,分身，坐骑，缘分', '27', '进场', '1', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('28', '属性叠加自身', '持续回合，增加自身', '1', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('29', '触发叠加自身', '持续回合，增加自身', '2', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('30', '生命叠加自身', '持续回合，增加自身', '3', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('31', '魔法叠加自身', '持续回合，增加自身', '4', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('32', '攻击叠加自身', '持续回合，增加自身', '5', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('33', '护甲叠加自身', '持续回合，增加自身', '6', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('34', '特攻叠加自身', '持续回合，增加自身', '7', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('35', '法抗叠加自身', '持续回合，增加自身', '8', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('36', '减伤叠加自身', '持续回合，增加自身', '9', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('37', '真伤叠加自身', '持续回合，增加自身', '10', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('38', '闪避叠加自身', '持续回合，增加自身', '11', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('39', '速度叠加自身', '持续回合，增加自身', '12', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('40', '暴击叠加自身', '持续回合，增加自身', '13', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('41', '清晰术', '移除效果', '28', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('42', '治疗生命', '恢复生命', '29', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('43', '治疗魔法', '恢复魔法', '30', '行动前', '2', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('44', '属性叠加自身', '持续回合，增加自身', '1', '攻击', '3', '主动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('45', '触发叠加自身', '持续回合，增加自身', '2', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('46', '生命叠加自身', '持续回合，增加自身', '3', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('47', '魔法叠加自身', '持续回合，增加自身', '4', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('48', '攻击叠加自身', '持续回合，增加自身', '5', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('49', '护甲叠加自身', '持续回合，增加自身', '6', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('50', '特攻叠加自身', '持续回合，增加自身', '7', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('51', '法抗叠加自身', '持续回合，增加自身', '8', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('52', '减伤叠加自身', '持续回合，增加自身', '9', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('53', '真伤叠加自身', '持续回合，增加自身', '10', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('54', '闪避叠加自身', '持续回合，增加自身', '11', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('55', '速度叠加自身', '持续回合，增加自身', '12', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('56', '暴击叠加自身', '持续回合，增加自身', '13', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('57', '属性叠加敌方', '持续回合，减少敌方', '14', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('58', '触发叠加敌方', '持续回合，减少敌方', '15', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('59', '生命叠加敌方', '持续回合，减少敌方', '16', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('60', '魔法叠加敌方', '持续回合，减少敌方', '17', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('61', '攻击叠加敌方', '持续回合，减少敌方', '18', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('62', '护甲叠加敌方', '持续回合，减少敌方', '19', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('63', '特攻叠加敌方', '持续回合，减少敌方', '20', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('64', '法抗叠加敌方', '持续回合，减少敌方', '21', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('65', '减伤叠加敌方', '持续回合，减少敌方', '22', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('66', '真伤叠加敌方', '持续回合，减少敌方', '23', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('67', '闪避叠加敌方', '持续回合，减少敌方', '24', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('68', '速度叠加敌方', '持续回合，减少敌方', '25', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('69', '暴击叠加敌方', '持续回合，减少敌方', '26', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('70', '清晰术', '移除效果', '28', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('71', '治疗生命', '治疗单位', '29', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('72', '治疗魔法', '治疗单位', '30', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('73', '控制', '持续回合，眩晕，禁锢，恐吓，冰冻，缠绕，跳过回合', '31', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('74', '复活友方', '复活友方', '32', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('75', '召唤单位', '召唤单位', '33', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('76', '中毒单位', '持续回合,持续伤害', '34', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('77', '法术伤害', '造成伤害', '35', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('78', '物理伤害', '造成伤害', '36', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('79', '真实伤害', '真实伤害，无视防御', '37', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('80', '无敌', '无视伤害， 金身自身不可行动', '40', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('81', '神圣', '无视闪避类，追魂，钉头七书等', '41', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('82', '复制', '复制，分身等', '42', '攻击', '3', '主动', '2');
INSERT INTO `x2_biology_skill_use` VALUES ('83', '属性叠加自身', '持续回合，增加自身', '1', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('84', '触发叠加自身', '持续回合，增加自身', '2', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('85', '生命叠加自身', '持续回合，增加自身', '3', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('86', '魔法叠加自身', '持续回合，增加自身', '4', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('87', '攻击叠加自身', '持续回合，增加自身', '5', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('88', '护甲叠加自身', '持续回合，增加自身', '6', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('89', '特攻叠加自身', '持续回合，增加自身', '7', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('90', '法抗叠加自身', '持续回合，增加自身', '8', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('91', '减伤叠加自身', '持续回合，增加自身', '9', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('92', '真伤叠加自身', '持续回合，增加自身', '10', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('93', '闪避叠加自身', '持续回合，增加自身', '11', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('94', '速度叠加自身', '持续回合，增加自身', '12', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('95', '暴击叠加自身', '持续回合，增加自身', '13', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('96', '属性叠加敌方', '持续回合，减少敌方', '14', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('97', '触发叠加敌方', '持续回合，减少敌方', '15', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('98', '生命叠加敌方', '持续回合，减少敌方', '16', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('99', '魔法叠加敌方', '持续回合，减少敌方', '17', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('100', '攻击叠加敌方', '持续回合，减少敌方', '18', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('101', '护甲叠加敌方', '持续回合，减少敌方', '19', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('102', '特攻叠加敌方', '持续回合，减少敌方', '20', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('103', '法抗叠加敌方', '持续回合，减少敌方', '21', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('104', '减伤叠加敌方', '持续回合，减少敌方', '22', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('105', '真伤叠加敌方', '持续回合，减少敌方', '23', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('106', '闪避叠加敌方', '持续回合，减少敌方', '24', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('107', '速度叠加敌方', '持续回合，减少敌方', '25', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('108', '暴击叠加敌方', '持续回合，减少敌方', '26', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('109', '治疗生命', '恢复生命', '29', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('110', '治疗魔法', '恢复魔法', '30', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('111', '控制单位', '持续回合，眩晕，禁锢，恐吓，冰冻，缠绕，跳过回合', '31', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('112', '复制', '复制，分身', '32', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('113', '召唤单位', '召唤单位', '33', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('114', '中毒单位', '持续回合,持续伤害', '34', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('115', '法术伤害', '造成伤害', '35', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('116', '物理伤害', '造成伤害', '36', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('117', '无敌', '无视伤害。', '40', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('118', '真实伤害', '真实伤害，无视防御', '37', '被攻击', '4', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('119', '属性叠加自身', '持续回合，增加自身', '1', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('120', '触发叠加自身', '持续回合，增加自身', '2', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('121', '生命叠加自身', '持续回合，增加自身', '3', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('122', '魔法叠加自身', '持续回合，增加自身', '4', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('123', '攻击叠加自身', '持续回合，增加自身', '5', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('124', '护甲叠加自身', '持续回合，增加自身', '6', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('125', '特攻叠加自身', '持续回合，增加自身', '7', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('126', '法抗叠加自身', '持续回合，增加自身', '8', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('127', '减伤叠加自身', '持续回合，增加自身', '9', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('128', '真伤叠加自身', '持续回合，增加自身', '10', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('129', '闪避叠加自身', '持续回合，增加自身', '11', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('130', '速度叠加自身', '持续回合，增加自身', '12', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('131', '暴击叠加自身', '持续回合，增加自身', '13', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('132', '属性叠加敌方', '持续回合，减少敌方', '14', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('133', '触发叠加敌方', '持续回合，减少敌方', '15', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('134', '生命叠加敌方', '持续回合，减少敌方', '16', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('135', '魔法叠加敌方', '持续回合，减少敌方', '17', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('136', '攻击叠加敌方', '持续回合，减少敌方', '18', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('137', '护甲叠加敌方', '持续回合，减少敌方', '19', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('138', '特攻叠加敌方', '持续回合，减少敌方', '20', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('139', '法抗叠加敌方', '持续回合，减少敌方', '21', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('140', '减伤叠加敌方', '持续回合，减少敌方', '22', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('141', '暴击叠加敌方', '持续回合，减少敌方', '23', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('142', '攻击叠加敌方', '持续回合，减少敌方', '24', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('143', '护甲叠加敌方', '持续回合，减少敌方', '25', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('144', '特攻叠加敌方', '持续回合，减少敌方', '26', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('145', '治疗生命', '恢复生命', '29', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('146', '治疗魔法', '恢复魔法', '30', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('147', '控制单位', '持续回合，眩晕，禁锢，恐吓，冰冻，缠绕，跳过回合', '31', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('148', '复活友方', '复活友方', '32', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('149', '召唤单位', '召唤单位', '33', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('150', '中毒单位', '持续回合,持续伤害', '34', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('151', '法术伤害', '造成伤害', '35', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('152', '物理伤害', '造成伤害', '36', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('153', '真实伤害', '真实伤害，无视防御', '37', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('154', '永恒', '永恒不死，满血和1血', '38', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('155', '复活自身', '复活自身', '39', '频死', '5', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('156', '清晰术', '移除效果', '28', '回合结束', '6', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('157', '治疗生命', '恢复生命', '29', '回合结束', '6', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('158', '治疗魔法', '恢复魔法', '30', '回合结束', '6', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('159', '召唤单位', '召唤单位，造成伤害，击杀', '33', '攻击追加', '7', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('160', '中毒单位', '持续回合', '34', '攻击追加', '7', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('161', '法术伤害', '造成伤害', '35', '攻击追加', '7', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('162', '物理伤害', '造成伤害', '36', '攻击追加', '7', '被动', '1');
INSERT INTO `x2_biology_skill_use` VALUES ('163', '真实伤害', '真实伤害，无视防御', '37', '攻击追加', '7', '被动', '1');

-- ----------------------------
-- Table structure for x2_biology_state
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_state`;
CREATE TABLE `x2_biology_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  `point` varchar(255) DEFAULT NULL,
  `value` int(11) DEFAULT '0' COMMENT '总共14000属性 200级',
  `time` int(11) DEFAULT NULL,
  `difficult` tinyint(1) DEFAULT '0' COMMENT '世界难度，低武，高武',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_state
-- ----------------------------
INSERT INTO `x2_biology_state` VALUES ('1', '凡人', '0', '0', '100', '1');
INSERT INTO `x2_biology_state` VALUES ('2', '先天', '20', '20', '200', '1');
INSERT INTO `x2_biology_state` VALUES ('3', '练气', '40', '50', '500', '1');
INSERT INTO `x2_biology_state` VALUES ('4', '筑基', '60', '100', '1000', '1');
INSERT INTO `x2_biology_state` VALUES ('5', '金丹', '80', '200', '3000', '2');
INSERT INTO `x2_biology_state` VALUES ('6', '元婴', '100', '500', '6000', '2');
INSERT INTO `x2_biology_state` VALUES ('7', '化神', '120', '800', '10000', '2');
INSERT INTO `x2_biology_state` VALUES ('8', '渡劫', '140', '1200', '20000', '2');
INSERT INTO `x2_biology_state` VALUES ('9', '仙人', '160', '1600', '32000', '3');
INSERT INTO `x2_biology_state` VALUES ('10', '天仙', '180', '2000', '42000', '3');
INSERT INTO `x2_biology_state` VALUES ('11', '真仙', '200', '2400', '60000', '3');
INSERT INTO `x2_biology_state` VALUES ('12', '玄仙', '220', '3000', '80000', '3');
INSERT INTO `x2_biology_state` VALUES ('13', '金仙', '240', '3600', '120000', '4');
INSERT INTO `x2_biology_state` VALUES ('14', '仙君', '260', '4000', '180000', '4');
INSERT INTO `x2_biology_state` VALUES ('15', '仙尊', '280', '5000', '300000', '4');
INSERT INTO `x2_biology_state` VALUES ('16', '仙帝', '300', '6000', '500000', '4');
INSERT INTO `x2_biology_state` VALUES ('17', '准圣', '320', '8000', '1000000', '5');
INSERT INTO `x2_biology_state` VALUES ('18', '圣人', '340', '12000', '2000000', '5');
INSERT INTO `x2_biology_state` VALUES ('19', '天道', '360', '20000', '5000000', '5');
INSERT INTO `x2_biology_state` VALUES ('20', '混元', '380', '40000', '10000000', '5');

-- ----------------------------
-- Table structure for x2_biology_use
-- ----------------------------
DROP TABLE IF EXISTS `x2_biology_use`;
CREATE TABLE `x2_biology_use` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '消耗物品',
  `name` varchar(11) DEFAULT NULL COMMENT '物品类型',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `value` int(11) DEFAULT NULL COMMENT '难度数值越大获得几率越小',
  `type` varchar(25) DEFAULT '1' COMMENT '技能类型 1进场 2 行动前3攻击4被攻击5频死 6回合结束 7攻击追加',
  `typeid` int(11) DEFAULT NULL,
  `chufa` varchar(25) DEFAULT '被动' COMMENT '分解类型  被动 主动',
  `chufaid` int(11) DEFAULT '1' COMMENT '1 主动 2 被动',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_biology_use
-- ----------------------------
INSERT INTO `x2_biology_use` VALUES ('1', '属性叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('2', '触发叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('3', '生命叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('4', '魔法叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('5', '攻击叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('6', '护甲叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('7', '特攻叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('8', '法抗叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('9', '减伤叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('10', '真伤叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('11', '闪避叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('12', '速度叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('13', '暴击叠加自身', '持续回合，增加自身', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('14', '属性叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('15', '触发叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('16', '生命叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('17', '魔法叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('18', '攻击叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('19', '护甲叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('20', '特攻叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('21', '法抗叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('22', '减伤叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('23', '真伤叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('24', '闪避叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('25', '速度叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('26', '暴击叠加敌方', '持续回合，减少敌方', null, '属性', '1', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('27', '特殊召唤', '特殊召唤单位，死亡不可复活,分身，坐骑，缘分', null, '单位', '3', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('28', '清晰术', '移除效果', null, '效果', '6', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('29', '治疗生命', '恢复生命', null, '效果', '6', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('30', '治疗魔法', '恢复魔法', null, '效果', '6', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('31', '控制单位', '持续回合，眩晕，禁锢，恐吓，冰冻，缠绕，跳过回合', null, '状态', '5', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('32', '复活友方', '复活友方', null, '复活', '2', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('33', '召唤单位', '召唤单位，造成伤害，击杀', null, '单位', '3', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('34', '中毒单位', '持续回合,持续伤害', null, '状态', '5', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('35', '法术伤害', '造成伤害', null, '伤害', '4', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('36', '物理伤害', '造成伤害', null, '伤害', '4', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('37', '真实伤害', '真实伤害，无视防御', null, '伤害', '4', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('38', '永恒', '永恒不死，满血和1血', null, '复活', '2', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('39', '复活自身', '复活自身', null, '复活', '2', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('40', '无敌', '免疫任何伤害', null, '效果', '6', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('41', '神圣', '无视闪避类', null, '效果', '6', '被动', '1');
INSERT INTO `x2_biology_use` VALUES ('42', '复制', '复制，分身', null, '单位', '3', '被动', '1');

-- ----------------------------
-- Table structure for x2_gold_finger
-- ----------------------------
DROP TABLE IF EXISTS `x2_gold_finger`;
CREATE TABLE `x2_gold_finger` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '金手指',
  `name` varchar(255) DEFAULT NULL,
  `descript` varchar(255) DEFAULT NULL COMMENT '描述',
  `type` tinyint(1) DEFAULT '1' COMMENT '类型0坏 1好',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_gold_finger
-- ----------------------------
INSERT INTO `x2_gold_finger` VALUES ('1', '炼金大师', '金币+10W', '1');
INSERT INTO `x2_gold_finger` VALUES ('2', '气运之子', '气运+200', '1');
INSERT INTO `x2_gold_finger` VALUES ('3', '炼丹师', '50%获取一枚低于自身境界以下的丹药', '1');
INSERT INTO `x2_gold_finger` VALUES ('4', '炼器师', '50%随获取一件低于自身境界以下的武器', '1');
INSERT INTO `x2_gold_finger` VALUES ('5', '采花贼', '对女性伤害结果+30%', '1');
INSERT INTO `x2_gold_finger` VALUES ('6', '东方不败', '受到女性伤害结果-30%', '1');
INSERT INTO `x2_gold_finger` VALUES ('7', '老爷爷', '50%概率获取功法一本', '1');
INSERT INTO `x2_gold_finger` VALUES ('8', '灭绝师太', '受到男性伤害结果减伤20%', '1');
INSERT INTO `x2_gold_finger` VALUES ('9', '哆啦A梦', '支付10W金币，从其它时空随机抽取物品。', '1');
INSERT INTO `x2_gold_finger` VALUES ('10', '10倍返还系统', '献祭，30%概率1-10倍暴击反还物品。70%物品概率消失。', '1');
INSERT INTO `x2_gold_finger` VALUES ('11', '艾薇女优', '对男性伤害增加20%', '1');
INSERT INTO `x2_gold_finger` VALUES ('12', '战斗狂', '经验+1W', '1');
INSERT INTO `x2_gold_finger` VALUES ('13', '宁采臣', '宁采臣附体，对女鬼伤害+50%，抓取女鬼概率+50%', '1');
INSERT INTO `x2_gold_finger` VALUES ('14', '许仙', '许仙附体，对女妖伤害+50%，抓取女妖概率+50%', '1');
INSERT INTO `x2_gold_finger` VALUES ('15', '董永', '董永附体，对女仙伤害+50%，抓取女仙概率+50%', '1');
INSERT INTO `x2_gold_finger` VALUES ('16', '加藤鹰', '加藤鹰附体，对女性伤害结果+50%，抓取女人概率+50%', '1');
INSERT INTO `x2_gold_finger` VALUES ('17', '万界仙门系统', '开宗立派，根据世界进度提升宗门等级。每天可领取对应的资源。每完成一个世界，等级+1。', '1');
INSERT INTO `x2_gold_finger` VALUES ('18', '寻宝系统', '所有物品掉落概率加倍。', '1');
INSERT INTO `x2_gold_finger` VALUES ('19', '灵珠', '灵石+100', '1');
INSERT INTO `x2_gold_finger` VALUES ('20', '天灵根', '境界提升,仙人之下+10%几率额外提升一级。', '1');
INSERT INTO `x2_gold_finger` VALUES ('21', '地灵根', '仙人之下境界突破失败不会掉级', '1');
INSERT INTO `x2_gold_finger` VALUES ('22', '无垢之体', '境界突破到元婴成功率+100%', '1');
INSERT INTO `x2_gold_finger` VALUES ('23', '苍井空', '苍井空附体，对男性伤害结果+50%', '1');
INSERT INTO `x2_gold_finger` VALUES ('24', '伪灵根', '直接突破到金丹境界', '1');
INSERT INTO `x2_gold_finger` VALUES ('25', '仙人之体', '开局既巅峰，每次冒险1%几率直接突破到仙人境界', '1');
INSERT INTO `x2_gold_finger` VALUES ('26', '变异灵根', '战斗胜利，5%概率等级+1', '1');
INSERT INTO `x2_gold_finger` VALUES ('27', '白痴', '由于是白痴，很容易受伤，受到伤害结果+100%', '0');
INSERT INTO `x2_gold_finger` VALUES ('28', '废材', '就是个废物，什么也没有', '0');
INSERT INTO `x2_gold_finger` VALUES ('29', '天人五衰', '每次探索10%全体寿元-1W', '0');
INSERT INTO `x2_gold_finger` VALUES ('30', '体弱多病', '每次探索20%全体生命-1W', '0');
INSERT INTO `x2_gold_finger` VALUES ('31', '天选之人', '每次冒险3%概率召唤作者助阵。', '1');
INSERT INTO `x2_gold_finger` VALUES ('32', '诅咒', '每次探索10%概率随机死亡一名队友。', '0');
INSERT INTO `x2_gold_finger` VALUES ('33', '资本家', '每次探索金币+1W', '1');
INSERT INTO `x2_gold_finger` VALUES ('34', '农民', '每次探索金币-1W', '0');
INSERT INTO `x2_gold_finger` VALUES ('35', '蔡徐坤', '每次探索5%概率满血复活死亡队友。', '1');
INSERT INTO `x2_gold_finger` VALUES ('36', '掉级系统', '每次探索5%概率全体队友等级-1', '0');
INSERT INTO `x2_gold_finger` VALUES ('37', '倒霉系统', '每冒险胜利一次，灵石-100。', '0');
INSERT INTO `x2_gold_finger` VALUES ('38', '五行体', '全体寿元+1W', '1');

-- ----------------------------
-- Table structure for x2_goods
-- ----------------------------
DROP TABLE IF EXISTS `x2_goods`;
CREATE TABLE `x2_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '武器表',
  `name` varchar(255) DEFAULT NULL,
  `type` int(255) DEFAULT '1' COMMENT 'type 1可用 2不可用',
  `point` varchar(255) DEFAULT NULL,
  `value` int(11) DEFAULT '0' COMMENT '基础白值属性--概率',
  `percent` int(11) DEFAULT '10' COMMENT '百分比10-100 人(白 绿 蓝 紫 金 红 橙) 鬼仙神（彩） 1-10 分5品不可洗练',
  `describe` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT '0' COMMENT '属性条数 最多9条',
  `belong` int(11) DEFAULT '0' COMMENT '有id标识 说明 可以合成',
  `tilian` int(11) DEFAULT '0' COMMENT '提炼--铁之精华 --药之精华  根据品质提炼',
  `grade` int(11) DEFAULT '1' COMMENT '物品等级默认为1  武器（1-20）   丹药丹毒（1-20）',
  `wordid` int(11) DEFAULT '0' COMMENT '世界id  0不属于任何世界的特殊物品',
  `gooduse` int(11) DEFAULT '1' COMMENT '物品类型 参考goods_use表',
  `usetype` int(11) DEFAULT '1' COMMENT '使用类型1材料 2使用 3合成',
  `selltype` int(11) DEFAULT '0' COMMENT '购买类型  0不可购买 1金币 2 灵石',
  `sellout` int(11) DEFAULT '0' COMMENT '卖出价格',
  `price` int(11) DEFAULT '0' COMMENT '价格',
  `percenttype` varchar(255) DEFAULT '残破' COMMENT ' 残破 劣质 普通 良好 优质 稀有 极品 完美 传说 神话',
  `wordType` int(11) DEFAULT '1' COMMENT '1低武世界',
  `skillid` int(11) DEFAULT '0' COMMENT '技能id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=122 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_goods
-- ----------------------------
INSERT INTO `x2_goods` VALUES ('1', '戮仙剑', '2', '仙剑', '10', '70', '诛仙套装之一戮仙剑', '5', '5', '100', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('2', '诛仙剑', '2', '仙剑', '10', '70', '诛仙套装之一诛仙剑', '5', '5', '100', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('3', '陷仙剑', '2', '仙剑', '10', '70', '诛仙套装之一陷仙剑', '5', '5', '100', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('4', '绝仙剑', '2', '仙剑', '10', '70', '诛仙套装之一绝仙剑', '5', '5', '100', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('5', '诛仙剑阵', '2', '剑', '1', '80', '诛仙剑阵，由戮仙剑，诛仙剑，绝仙剑，陷仙剑组，诛仙阵图成。', '6', '5', '100', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('6', '盘古斧', '2', '恶魔召唤', '1', '80', '盘古开天神器，盘古牙齿所化。', '6', '0', '500', '1', '0', '1', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('7', '匕首', '1', '药水绿色', '8000', '10', '一把普通的匕首，没什么大用处。', '0', '0', '1', '1', '1', '1', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('8', '承影', '1', '抵消疾病', '2000', '20', '上古十大名剑之一。', '1', '0', '20', '1', '2', '1', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('9', '铁剑', '1', '彩蛋', '8000', '20', '普通铁剑，没什么大用处。', '1', '0', '40', '1', '1', '1', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('10', '钢刀', '1', '彩蛋', '8000', '20', '普通铁剑，没什么大用处。', '1', '0', '60', '1', '1', '1', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('11', '玄铁重剑', '1', '彩蛋', '2000', '10', '玄铁重剑，重达4万万斤，由千年玄铁打造而成。', '0', '0', '0', '1', '3', '1', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('12', '天运丹', '1', '彩蛋', '10', '10', '截命运之力炼制而成，服之可增加幸运值。', '1', '0', '100', '20', '0', '2', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('13', '蜕凡丹', '1', '彩蛋', '100', '10', '一种可以增强体质的丹药。', '1', '0', '100', '1', '0', '2', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('14', '生生丹', '1', '彩蛋', '5', '10', '传说可以增加寿命100年的丹药。', '1', '0', '100', '1', '0', '2', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('15', '人生果', '1', '彩蛋', '4', '10', '三千一开花，三千年一结果，服之可增寿5000年', '1', '12', '100', '10', '0', '2', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('16', '千年蟠桃', '1', '彩蛋', '3', '10', '千年蟠桃，服之可增寿3000年', '1', '12', '100', '10', '0', '2', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('17', '黄泉仙酿', '1', '彩蛋', '2', '10', '服之可增寿2000年', '1', '12', '100', '10', '0', '2', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('19', '诛仙阵', '2', '彩蛋', '1', '10', '以诛仙四仙剑布阵，有诛仙阵图，和四仙剑，通天教主传多宝道人。', '9', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('18', '万仙阵', '2', '彩蛋', '10', '10', '通天门下弟子，由通天教主和他座下四大弟子主持。', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('20', '四象阵', '2', '彩蛋', '10', '10', '金光仙（金毛吼', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('21', '三才阵', '2', '彩蛋', '10', '10', '天地人三才组成。', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('22', '太极阵', '2', '彩蛋', '10', '10', '乌云仙（长须黑面，皂服丝绦，混元锤，金须鳌鱼），青首仙（青毛狮子）', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('23', '八卦阵', '2', '彩蛋', '10', '10', '太极生两仪，两仪生四相，四相生八卦，八卦而变六十四爻，从此周而复始变化无穷。', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('24', '十二都天门阵', '2', '彩蛋', '10', '10', '十二祖巫组成。', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('25', '北斗七星阵', '2', '彩蛋', '10', '10', '道教一元、两仪、三才、四相、五行、六合、七星、八卦、九宫的流变规律', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('26', '周天星斗大阵', '2', '彩蛋', '10', '10', '巫妖大战时，\r\n三百六十五位大妖所布置。', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('27', '九曲黄河阵', '2', '彩蛋', '10', '10', '云霄。内按叁才，包藏天地之妙，中有惑仙丹闭仙诀，能失仙之神，消仙之魄，陷仙之形，损仙之气，丧神仙之原本，捐神仙之肢体。神仙入此成凡人，凡人入此即绝命。九曲曲中无直，曲尽造化之奇，抉尽神仙之基，任他叁教圣人，遭此亦难逃脱。', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('28', '混元河洛大阵', '2', '彩蛋', '10', '10', '阵眼为河图，洛书。', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('29', '罗汉阵', '2', '彩蛋', '10', '10', '佛门阵法。', '6', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('30', '十绝阵', '2', '彩蛋', '0', '10', '由十天君主持的十个小阵组成。', '9', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('31', '秦天君天绝阵', '2', '彩蛋', '100', '10', '演先天之数，得先天清气；内藏混沌之机，中有三首幡，按天地人三才，共合为一气。若人入此阵内，有雷鸣之处，化作灰尘；仙道若逢此处，肢体震为粉碎，故曰“天绝阵”。', '5', '30', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('32', '赵天君地烈阵', '2', '彩蛋', '100', '10', '烈成分浊厚，上雷下火太无情；就是五行乾健体，难逃骨化与形倾。', '5', '30', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('33', '董天君风吼阵', '2', '彩蛋', '100', '10', '按地水火风之数，内有风火，此风火乃先天之气，叁昧真火，百万兵刃，从中而出。若神仙进此阵，风火交作，万刃齐攒，四肢立成齑粉；怕他有倒海移山之异术，难免身体化成脓血。（八角鹿，太阿双剑）', '5', '30', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('34', '袁天君寒冰阵', '2', '彩蛋', '100', '10', '名为寒水，实为刀山；内藏玄妙，中有风雷，上有冰山如狼牙，下有冰块如刀剑。若神仙入此阵，风雷动处，上下一磕，四肢立成齑粉，纵有异术，离免此难。', '5', '30', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('35', '金光圣母金光阵', '2', '彩蛋', '100', '10', '夺日月之精，藏天地之气，中有二十一面宝镜，用二十一根杆，每一面应在杆顶上，一镜上有一套。若人仙入阵，将此套拽起，雷声震动镜子，只一二转，金光射出，照住其身，立刻化为浓血，纵会飞腾，难越此阵。', '5', '30', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('36', '孙天君化血阵', '2', '彩蛋', '100', '10', '用先天灵气，中有风雷，内藏数斗黑沙。但神仙入阵，雷响处风卷黑沙，些须着处，立化血水，纵是神仙难逃利害。', '5', '30', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('37', '白天君烈阵', '2', '彩蛋', '100', '10', '妙用无穷，非同凡品：内藏叁火，有叁昧火，空中火，石中火，叁火并为一气；中有叁首红，若神仙进此阵内，叁展动，叁火齐飞，须火成为灰烬，纵有避火真言，难躲叁昧真火。', '5', '30', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('38', '姚天君落魂阵', '2', '彩蛋', '100', '10', '闭生门，开死户，中藏天地厉气，结聚而成；内有白纸一首，上画符印，若神仙入阵内，白旌展动，魂魄消散，倾刻而灭，不论神仙，随入随灭。', '5', '30', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('39', '王天君红水阵', '2', '彩蛋', '100', '10', '夺壬癸之精，藏太乙之妙，变幻莫测；中有一八卦台，上有一二个葫芦，任随人仙入阵，将葫芦往下一掷，倾出红水，汪洋无际。若是水溅出一点，黏在身上，顷刻化为血水，纵是神仙，无术可逃。', '5', '30', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('40', '张天君红沙阵', '2', '彩蛋', '100', '10', '内按天地人叁寸，中分叁气，内藏红砂叁斗，看似红砂，着身利刃，上不知天，下不知地，中不知人；若人仙冲入此阵，风雷运处，飞砂伤人，立刻骸鼻俱成齑粉，纵有神仙佛祖遭此，再不能逃。', '5', '30', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('41', '两仪阵', '2', '彩蛋', '100', '10', '灵牙仙（白象）', '5', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('42', '瘟癀阵', '2', '彩蛋', '100', '10', '九龙岛吕岳、陈庚。二十一把瘟癀伞，按九宫八卦排列，中有土台。', '5', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('43', '血河大阵', '2', '彩蛋', '100', '10', '冥河老祖以十万八千辆血河车所布置。', '5', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('44', '两仪微尘大阵', '2', '彩蛋', '100', '10', '老子以混元一气太清神符布置。', '5', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('45', '先天五方大阵', '2', '彩蛋', '100', '10', '由素色云界旗，青莲宝色旗，玄元控水旗，离地焰光旗，玉虚杏黄旗布置', '5', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('46', '大须弥正反九宫仙阵', '2', '彩蛋', '100', '10', '由九把九宫剑布置而成，在蜀山里仅次于两仪微尘大阵', '5', '0', '0', '1', '0', '11', '2', '0', '0', null, null, '1', '0');
INSERT INTO `x2_goods` VALUES ('47', '破封石', '1', '彩蛋', '10', '10', '可以破除封印，提升武器品阶。', '0', '0', '0', '1', '0', '8', '2', '1', '99800', '998', '神话', '1', '0');
INSERT INTO `x2_goods` VALUES ('48', '木箱', '1', '彩蛋', '2000', '10', '开出1-6境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '8', '2', '1', '5000', '50', '稀有', '1', '0');
INSERT INTO `x2_goods` VALUES ('49', '铁箱', '1', '彩蛋', '800', '10', '开出2-8境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '8', '2', '1', '8000', '80', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('50', '银箱', '1', '彩蛋', '300', '10', '开出6-12境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '8', '2', '1', '20000', '200', '传说', '2', '0');
INSERT INTO `x2_goods` VALUES ('51', '金箱', '1', '彩蛋', '100', '10', '开出8-16境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '8', '2', '1', '80000', '800', '传说', '3', '0');
INSERT INTO `x2_goods` VALUES ('52', '玉盒', '1', '彩蛋', '50', '10', '开出12-18境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '8', '2', '1', '240000', '2400', '传说', '4', '0');
INSERT INTO `x2_goods` VALUES ('53', '仙盒', '1', '彩蛋', '2', '10', '开出16-20境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '8', '2', '1', '500000', '5000', '神话', '5', '0');
INSERT INTO `x2_goods` VALUES ('54', '人仙令', '1', '彩蛋', '500', '10', '召唤令，人族生物', '0', '0', '0', '1', '0', '8', '2', '1', '5000', '10000', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('55', '魔仙令', '1', '彩蛋', '500', '10', '召唤令，魔族生物', '0', '0', '0', '1', '0', '8', '2', '1', '8000', '16000', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('56', '妖仙令', '1', '彩蛋', '500', '10', '召唤令，妖族生物', '0', '0', '0', '1', '0', '8', '2', '1', '8000', '16000', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('57', '鬼仙令', '1', '彩蛋', '500', '10', '召唤令，鬼族生物', '0', '0', '0', '1', '0', '8', '2', '1', '8000', '16000', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('58', '仙神令', '1', '彩蛋', '500', '10', '召唤令，仙族生物', '0', '0', '0', '1', '0', '8', '2', '1', '8000', '16000', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('59', '兽仙令', '1', '彩蛋', '500', '10', '召唤令，兽族生物', '0', '0', '0', '1', '0', '8', '2', '1', '8000', '16000', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('60', '灵仙令', '1', '彩蛋', '500', '10', '召唤令，灵族生物', '0', '0', '0', '1', '0', '8', '2', '1', '12000', '24000', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('61', '异仙令', '1', '彩蛋', '500', '10', '召唤令，异族生物', '0', '0', '0', '1', '0', '8', '2', '1', '15000', '30000', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('62', '彩蛋', '1', '彩蛋', '200', '10', '随机召唤令，人妖鬼神魔兽灵异。大几率召唤异形宝宝。', '0', '0', '0', '1', '0', '8', '2', '1', '20000', '20000', '神话', '1', '0');
INSERT INTO `x2_goods` VALUES ('63', '神魔令', '1', '彩蛋', '10', '10', '特殊召唤随机世界生物', '0', '0', '0', '1', '0', '8', '2', '1', '99800', '998', '神话', '1', '0');
INSERT INTO `x2_goods` VALUES ('64', '精魄', '1', '彩蛋', '2000', '10', '生物精魄，消耗100精魄可随机合成万仙令，生物分解可获得相应评分的精魄。1000金币=1精魄', '0', '0', '0', '1', '0', '4', '3', '1', '100', '0', '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('65', '灵药', '1', '彩蛋', '2000', '10', '草木精华，可用于炼丹强化。丹药分解可获得相应评分的灵药。3000金币=1灵药', '0', '0', '0', '1', '0', '4', '3', '1', '300', '0', '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('66', '铁精', '1', '彩蛋', '2000', '10', '锻冶之精华，可用于炼器强化。武器分解可获得相应评分的铁精。2000金币=1铁精', '0', '0', '0', '1', '0', '4', '3', '1', '200', '0', '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('67', '元神', '1', '彩蛋', '100', '10', '随机生物元神，附带生物技能。', '0', '0', '0', '1', '0', '7', '2', '1', '12600', '126', '传说', '1', '0');
INSERT INTO `x2_goods` VALUES ('68', '朱果', '1', '彩蛋', '1000', '10', '刷新生物属性，凤凰血而生，服用后有脱胎换骨的功效。', '0', '0', '0', '1', '0', '8', '2', '1', '1000', '10', '稀有', '1', '0');
INSERT INTO `x2_goods` VALUES ('69', '星辰石', '1', '彩蛋', '1000', '10', '武器洗炼', '0', '0', '0', '1', '0', '8', '2', '1', '1000', '10', '稀有', '1', '0');
INSERT INTO `x2_goods` VALUES ('70', '生生不熄', '1', '彩蛋', '1000', '10', '体力值+20', '0', '0', '0', '1', '0', '8', '2', '1', '1000', '10000', '稀有', '1', '0');
INSERT INTO `x2_goods` VALUES ('71', '传送石', '1', '彩蛋', '100', '10', '随机秘境，对应世界，生物难度。9个标记，可能物品，可能战斗，可能空，可组队，全部死亡退出场景。', '0', '0', '0', '1', '0', '8', '2', '1', '48800', '488', '传说', '1', '0');
INSERT INTO `x2_goods` VALUES ('72', '本源之力', '1', '彩蛋', '100', '10', '本源之力，用于主角突破自身境界。', '0', '0', '0', '1', '0', '8', '2', '1', '15000', '30000', '传说', '1', '0');
INSERT INTO `x2_goods` VALUES ('73', '三生石', '1', '彩蛋', '200', '10', '生物缘分刷新', '0', '0', '0', '1', '0', '8', '2', '1', '10000', '20000', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('74', '功法玉简', '1', '彩蛋', '200', '10', '获得随机技能书一本', '0', '0', '0', '1', '0', '8', '2', '1', '9800', '98', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('75', '忘情水', '1', '彩蛋', '200', '10', '修改角色名称。', '0', '0', '0', '1', '0', '8', '2', '1', '28800', '288', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('76', '破界符', '1', '彩蛋', '100', '10', '强制掠夺，胜利可以获得对方10%金币。', '0', '0', '0', '1', '0', '8', '2', '1', '10000', '100', '传说', '1', '0');
INSERT INTO `x2_goods` VALUES ('77', '符石', '1', '彩蛋', '300', '10', '使用可获随机获得符石。', '0', '0', '0', '1', '0', '8', '2', '1', '3600', '126', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('78', '彩虹泪', '1', '彩蛋', '100', '10', '可改变异形颜色', '0', '0', '0', '1', '0', '8', '2', '1', '16800', '168', '传说', '1', '0');
INSERT INTO `x2_goods` VALUES ('79', '神石', '1', '彩蛋', '100', '10', '20神石可合成神魔令，特殊召唤随机世界生物', '0', '0', '0', '1', '0', '8', '3', '1', '5000', '50', '传说', '1', '0');
INSERT INTO `x2_goods` VALUES ('80', '鸿蒙紫气', '1', '彩蛋', '1', '10', '服用鸿蒙紫气，方挑战圣境。', '0', '0', '0', '1', '0', '8', '2', '1', '999900', '9999', '神话', '1', '0');
INSERT INTO `x2_goods` VALUES ('81', '盘古石', '1', '彩蛋', '5', '10', '服用后，可学习任意种族技能一次。', '0', '0', '0', '1', '0', '8', '2', '1', '482000', '4820', '神话', '1', '0');
INSERT INTO `x2_goods` VALUES ('82', '孟婆汤', '1', '彩蛋', '1000', '10', '生物转生，重塑肉身，不保留境界。', '0', '0', '0', '1', '0', '8', '2', '1', '3000', '30000', '稀有', '1', '0');
INSERT INTO `x2_goods` VALUES ('83', '潜能', '1', '彩蛋', '60', '10', '随机学习生物天生技能', '0', '0', '0', '1', '0', '8', '2', '1', '36000', '360', '传说', '1', '0');
INSERT INTO `x2_goods` VALUES ('84', '技能绑定石', '1', '彩蛋', '100', '10', '绑定技能。', '0', '0', '0', '1', '0', '8', '2', '1', '20000', '200000', '传说', '1', '0');
INSERT INTO `x2_goods` VALUES ('85', '阵法石', '1', '彩蛋', '50', '10', '使用后获得随机阵法', '0', '0', '0', '1', '0', '8', '2', '1', '78000', '780000', '传说', '1', '0');
INSERT INTO `x2_goods` VALUES ('86', '道果', '1', '彩蛋', '300', '10', '生物使用后，三围增加50', '0', '0', '0', '1', '0', '8', '2', '1', '66600', '666', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('87', '仙魔石', '1', '彩蛋', '500', '10', '可以使人性情大变，刷新生物性格', '0', '0', '0', '1', '0', '8', '2', '1', '2000', '20', '完美', '1', '0');
INSERT INTO `x2_goods` VALUES ('88', '藏宝图', '1', '彩蛋', '1000', '10', '九宫格，每次挖掘消耗藏宝图+1', '0', '0', '0', '1', '0', '8', '2', '1', '800', '4000', '稀有', '1', '0');
INSERT INTO `x2_goods` VALUES ('89', '契约仙果', '1', '彩蛋', '80', '10', '使用后无法融合，无法交易，成长+1，异形+2', '0', '0', '0', '1', '0', '8', '2', '1', '999999', '999999', '传说', '1', '0');
INSERT INTO `x2_goods` VALUES ('90', '仙炼石', '1', '彩蛋', '10', '10', '可以仙炼武器', '0', '0', '0', '1', '0', '8', '1', '1', '0', null, '神话', '1', '0');
INSERT INTO `x2_goods` VALUES ('91', '妖炼石', '1', '彩蛋', '10', '10', '可以妖炼武器', '0', '0', '0', '1', '0', '8', '1', '1', '0', null, '神话', '1', '0');
INSERT INTO `x2_goods` VALUES ('92', '神炼石', '1', '彩蛋', '10', '10', '可以神炼武器', '0', '0', '0', '1', '0', '8', '1', '1', '0', null, '神话', '1', '0');
INSERT INTO `x2_goods` VALUES ('93', '何首乌', '1', '彩蛋', '2000', '10', '普通药材', '0', '0', '0', '1', '0', '4', '1', '1', '600', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('94', '千年人参', '1', '彩蛋', '1000', '10', '千年人参，有极大的药效。', '0', '0', '0', '1', '0', '4', '1', '1', '2000', null, '稀有', '1', '0');
INSERT INTO `x2_goods` VALUES ('95', '金袋', '1', '彩蛋', '90000', '10', '一袋金币，可以卖钱。', '0', '0', '0', '1', '0', '4', '1', '1', '100', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('96', '灵石', '1', '彩蛋', '2000', '10', '灵石堆，可以卖钱。', '0', '0', '0', '1', '0', '4', '1', '1', '500', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('97', '金矿', '1', '彩蛋', '1000', '10', '发现金矿，可以卖钱。', '0', '0', '0', '1', '0', '4', '1', '1', '2000', null, '稀有', '1', '0');
INSERT INTO `x2_goods` VALUES ('98', '灵脉', '1', '彩蛋', '1000', '10', '发现灵脉，可以卖钱。', '0', '0', '0', '1', '0', '4', '1', '1', '3000', null, '稀有', '1', '0');
INSERT INTO `x2_goods` VALUES ('99', '百年人参', '1', '彩蛋', '20000', '10', '百年人参，药效较低。', '0', '0', '0', '1', '0', '4', '1', '1', '800', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('100', '雕像', '1', '彩蛋', '20000', '10', '一个残破的雕像。据说是上古遗留下来的，有一定的价值。', '0', '0', '0', '1', '0', '4', '1', '1', '200', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('101', '龙凤镯', '1', '彩蛋', '20000', '10', '一块普通手镯。', '0', '0', '0', '1', '0', '4', '1', '1', '600', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('102', '古玉', '1', '彩蛋', '20000', '10', '一块古玉。色泽斑斓，极具观赏价值。', '0', '0', '0', '1', '0', '4', '1', '1', '500', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('103', '夜明珠', '1', '彩蛋', '20000', '10', '夜明珠', '0', '0', '0', '1', '0', '4', '1', '1', '400', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('104', '琉璃盏', '1', '彩蛋', '20000', '10', '一个普通琉璃盏', '0', '0', '0', '1', '0', '4', '1', '1', '1200', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('105', '五牛图', '1', '彩蛋', '10', '10', '韩滉（723～787）中国唐代画家。字太冲 。长安（今陕 西西安）人，代表作《五牛图》', '0', '0', '0', '1', '0', '4', '1', '1', '860', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('106', '捣练图', '1', '彩蛋', '0', '10', '张萱，京兆（今陕西西安）人，生卒年不详，代表作有《虢国夫专人游春图》、《捣练图》', '0', '0', '0', '1', '0', '4', '1', '1', '650', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('107', '兰亭知集序', '1', '彩蛋', '0', '10', '王羲之（303—361年），字逸少，号澹（dān），代表作【兰亭知集序】', '0', '0', '0', '1', '0', '4', '1', '1', '360', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('108', '金桥图', '1', '彩蛋', '0', '10', '吴道子(约686～760前后) 后改名道玄，尊称吴生，阳翟（今河南省禹县）人。代表作《金桥图》', '0', '0', '0', '1', '0', '4', '1', '1', '420', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('109', '历属代帝王图', '1', '彩蛋', '0', '10', '阎立本：（601-673）唐代雍州万年人。隋代画家阎毗之子，阎立德之弟。代表作《历属代帝王图》', '0', '0', '0', '1', '0', '4', '1', '1', '330', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('110', '玄秘塔碑', '1', '彩蛋', '0', '10', ' 柳公权( 778－道865 )，唐朝最后一位大书法家，京兆华原（今陕西耀县）人。代表作<玄秘塔碑>', '0', '0', '0', '1', '0', '4', '1', '1', '280', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('111', '争座位帖', '1', '彩蛋', '0', '10', '颜真卿（709-785年），唐代杰出书法家，伟大的爱国者。汉族，字清臣，琅琊孝悌里（今临沂市费县诸满村）人。代表作《争座位帖》', '0', '0', '0', '1', '0', '4', '1', '1', '688', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('112', '青花瓷', '1', '彩蛋', '0', '10', '青花瓷', '0', '0', '0', '1', '0', '4', '1', '1', '200', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('113', '清明上河图', '1', '彩蛋', '0', '10', '清明上河图', '0', '0', '0', '1', '0', '4', '1', '1', '1000', null, '普通', '1', '0');
INSERT INTO `x2_goods` VALUES ('114', '墨刀', '1', '彩蛋', '9000', '10', '', '0', '0', '0', '1', '0', '1', '1', '1', '1000', '0', '残破', '1', '0');
INSERT INTO `x2_goods` VALUES ('115', '倚天剑', '1', '彩蛋', '1000', '10', null, '0', '0', '0', '1', '0', '1', '1', '1', '1000', '0', '残破', '1', '0');
INSERT INTO `x2_goods` VALUES ('116', '屠龙刀', '1', '彩蛋', '1000', '10', null, '0', '0', '0', '1', '0', '1', '1', '1', '1000', '0', '残破', '1', '0');
INSERT INTO `x2_goods` VALUES ('117', '盗贼短剑', '1', '彩蛋', '8000', '10', null, '0', '0', '0', '1', '0', '1', '1', '0', '1000', '0', '残破', '1', '0');
INSERT INTO `x2_goods` VALUES ('118', '士兵长矛', '1', '彩蛋', '8000', '10', null, '0', '0', '0', '1', '0', '1', '1', '0', '1000', '0', '残破', '1', '0');
INSERT INTO `x2_goods` VALUES ('119', '千人斩', '1', '彩蛋', '8000', '10', null, '0', '0', '0', '1', '0', '1', '1', '0', '1000', '0', '残破', '1', '0');
INSERT INTO `x2_goods` VALUES ('120', '小型核弹', '1', '彩蛋', '10', '10', null, '0', '0', '0', '1', '0', '1', '1', '0', '1000', '0', '残破', '1', '0');
INSERT INTO `x2_goods` VALUES ('121', '乾坤大挪移', '1', '彩蛋', '0', '10', '技能书', '0', '0', '0', '1', '0', '12', '1', '0', '1000', '1000', '残破', '1', '1');

-- ----------------------------
-- Table structure for x2_goods_nature
-- ----------------------------
DROP TABLE IF EXISTS `x2_goods_nature`;
CREATE TABLE `x2_goods_nature` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '初始-物品属性表',
  `goodid` int(11) DEFAULT NULL COMMENT '物品id',
  `gooduse` int(11) DEFAULT NULL COMMENT '物品类型id 参考goods_use',
  `name` varchar(255) DEFAULT NULL COMMENT '物品名称',
  `extend` varchar(25) DEFAULT 'gongJi' COMMENT '伤害类型',
  `formula` varchar(100) DEFAULT NULL COMMENT '公式',
  `status` varchar(25) DEFAULT 'gongJi' COMMENT '公式伤害计算(爆率 法术 攻击 法伤  智力 敏捷 力量)',
  `isadd` tinyint(1) DEFAULT '0' COMMENT '伤害公式0减少1增加',
  `value` int(11) DEFAULT '0' COMMENT '成长增幅百分比,每级提升百分之1的效果.融合功法概率提升或掉落',
  `hurt` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT '1' COMMENT '物品类型  1主属性  2附加属性  3特殊属性 阵法type 位置',
  `percent` int(11) DEFAULT '1' COMMENT '强化value值,最多9次，物品表品质区间 1-10  残破 劣质 普通 良好 优质  极品 稀有 完美 传说 神话',
  `using` int(3) DEFAULT '0' COMMENT '属性 状态是否激活0未使用 1使用',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_goods_nature
-- ----------------------------
INSERT INTO `x2_goods_nature` VALUES ('1', '1', '1', '戮仙剑', 'gongJi', null, 'gongJi', null, '0', '10000', '1', '10', '0', null);
INSERT INTO `x2_goods_nature` VALUES ('2', '1', '1', '戮仙剑', 'huJia', null, 'gongJi', null, '0', '10000', '1', '10', '0', null);
INSERT INTO `x2_goods_nature` VALUES ('3', '1', '1', '戮仙剑', 'lucky', null, 'gongJi', null, '0', null, '2', '10', '0', null);
INSERT INTO `x2_goods_nature` VALUES ('4', '13', '1', '天运丹', 'lucky', null, 'gongJi', null, '0', null, '2', '10', '0', null);
INSERT INTO `x2_goods_nature` VALUES ('5', '1', '11', '破天阵', 'gongJi', null, 'gongJi', null, '0', null, '1', '1', '0', '攻击额外提升10% type对应位置');

-- ----------------------------
-- Table structure for x2_goods_store
-- ----------------------------
DROP TABLE IF EXISTS `x2_goods_store`;
CREATE TABLE `x2_goods_store` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '武器表',
  `name` varchar(255) DEFAULT NULL,
  `type` int(255) DEFAULT '2' COMMENT 'type 1可用 2不可用',
  `picture` varchar(255) DEFAULT NULL,
  `value` int(11) DEFAULT '0' COMMENT '出现率',
  `percent` int(11) DEFAULT '10' COMMENT '百分比10-100 人(白 绿 蓝 紫 金 红 橙) 鬼仙神（彩） 1-10 分5品不可洗练',
  `descript` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT '0' COMMENT '属性条数 最多10条',
  `belong` int(11) DEFAULT '0' COMMENT '有id标识 说明 可以合成',
  `tilian` int(11) DEFAULT '0' COMMENT '提炼--铁之精华 --药之精华  根据品质提炼',
  `grade` int(11) DEFAULT '1' COMMENT '物品等级默认为1  武器（1-20）   丹药丹毒（1-20）',
  `wordid` int(11) DEFAULT '1' COMMENT '世界id  1不属于任何世界的特殊物品',
  `gooduse` int(11) DEFAULT '1' COMMENT '物品类型 参考goods_use表',
  `usetype` int(11) DEFAULT '1' COMMENT '使用类型1材料 2使用 3合成',
  `selltype` int(11) DEFAULT '1' COMMENT '购买类型  1不可购买 2金币 3 灵石',
  `sellout` int(11) DEFAULT '0' COMMENT '卖出价格',
  `price` int(11) DEFAULT '0' COMMENT '价格',
  `percenttype` varchar(255) DEFAULT '残破' COMMENT ' 残破 劣质 普通 良好 优质 稀有 极品 完美 传说 神话',
  `userid` int(11) DEFAULT '0' COMMENT '拥有人 0=商店    其它=用户',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=114 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_goods_store
-- ----------------------------
INSERT INTO `x2_goods_store` VALUES ('1', '戮仙剑', '2', null, '10', '70', '诛仙套装之一戮仙剑', '5', '5', '100', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('2', '诛仙剑', '2', null, '10', '70', '诛仙套装之一诛仙剑', '5', '5', '100', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('3', '陷仙剑', '2', null, '10', '70', '诛仙套装之一陷仙剑', '5', '5', '100', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('4', '绝仙剑', '2', null, '10', '70', '诛仙套装之一绝仙剑', '5', '5', '100', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('5', '诛仙剑阵', '2', '', '0', '80', '诛仙剑阵，由戮仙剑，诛仙剑，绝仙剑，陷仙剑组，诛仙阵图成。', '6', '5', '100', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('6', '盘古斧', '2', '', '1', '80', '盘古开天神器，盘古牙齿所化。', '6', '0', '500', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('7', '匕首', '1', null, '2000', '10', '一把普通的匕首，没什么大用处。', '0', '0', '1', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('8', '承影', '1', '', '2000', '20', '上古十大名剑之一。', '1', '0', '20', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('9', '铁剑', '1', '', '2000', '20', '普通铁剑，没什么大用处。', '1', '0', '40', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('10', '钢刀', '1', '', '2000', '20', '普通铁剑，没什么大用处。', '1', '0', '60', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('11', '玄铁重剑', '1', null, '2000', '10', '玄铁重剑，重达4万万斤，由千年玄铁打造而成。', '0', '0', '0', '1', '1', '1', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('12', '天运丹', '1', null, '10', '10', '截命运之力炼制而成，服之可增加幸运值。', '1', '0', '100', '20', '1', '2', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('13', '蜕凡丹', '1', null, '100', '10', '一种可以增强体质的丹药。', '1', '0', '100', '1', '1', '2', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('14', '生生丹', '1', null, '1000', '10', '传说可以增加寿命100年的丹药。', '1', '0', '100', '1', '1', '2', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('15', '人生果', '1', null, '10000', '10', '三千一开花，三千年一结果，服之可增寿5000年', '1', '12', '100', '10', '1', '2', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('16', '千年蟠桃', '1', '', '10000', '10', '千年蟠桃，服之可增寿3000年', '1', '12', '100', '10', '1', '2', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('17', '黄泉仙酿', '1', '', '10000', '10', '服之可增寿2000年', '1', '12', '100', '10', '1', '2', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('19', '诛仙阵', '2', null, '0', '10', '以诛仙四仙剑布阵，有诛仙阵图，和四仙剑，通天教主传多宝道人。', '9', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('18', '万仙阵', '2', null, '10', '10', '通天门下弟子，由通天教主和他座下四大弟子主持。', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('20', '四象阵', '2', null, '10', '10', '金光仙（金毛吼', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('21', '三才阵', '2', null, '10', '10', '天地人三才组成。', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('22', '太极阵', '2', null, '10', '10', '乌云仙（长须黑面，皂服丝绦，混元锤，金须鳌鱼），青首仙（青毛狮子）', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('23', '八卦阵', '2', null, '10', '10', '太极生两仪，两仪生四相，四相生八卦，八卦而变六十四爻，从此周而复始变化无穷。', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('24', '十二都天门阵', '2', null, '10', '10', '十二祖巫组成。', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('25', '北斗七星阵', '2', null, '10', '10', '道教一元、两仪、三才、四相、五行、六合、七星、八卦、九宫的流变规律', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('26', '周天星斗大阵', '2', null, '10', '10', '巫妖大战时，\r\n三百六十五位大妖所布置。', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('27', '九曲黄河阵', '2', null, '10', '10', '云霄。内按叁才，包藏天地之妙，中有惑仙丹闭仙诀，能失仙之神，消仙之魄，陷仙之形，损仙之气，丧神仙之原本，捐神仙之肢体。神仙入此成凡人，凡人入此即绝命。九曲曲中无直，曲尽造化之奇，抉尽神仙之基，任他叁教圣人，遭此亦难逃脱。', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('28', '混元河洛大阵', '2', null, '10', '10', '阵眼为河图，洛书。', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('29', '罗汉阵', '2', null, '10', '10', '佛门阵法。', '6', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('30', '十绝阵', '2', null, '0', '10', '由十天君主持的十个小阵组成。', '9', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('31', '秦天君天绝阵', '2', null, '100', '10', '演先天之数，得先天清气；内藏混沌之机，中有三首幡，按天地人三才，共合为一气。若人入此阵内，有雷鸣之处，化作灰尘；仙道若逢此处，肢体震为粉碎，故曰“天绝阵”。', '5', '30', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('32', '赵天君地烈阵', '2', null, '100', '10', '烈成分浊厚，上雷下火太无情；就是五行乾健体，难逃骨化与形倾。', '5', '30', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('33', '董天君风吼阵', '2', null, '100', '10', '按地水火风之数，内有风火，此风火乃先天之气，叁昧真火，百万兵刃，从中而出。若神仙进此阵，风火交作，万刃齐攒，四肢立成齑粉；怕他有倒海移山之异术，难免身体化成脓血。（八角鹿，太阿双剑）', '5', '30', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('34', '袁天君寒冰阵', '2', null, '100', '10', '名为寒水，实为刀山；内藏玄妙，中有风雷，上有冰山如狼牙，下有冰块如刀剑。若神仙入此阵，风雷动处，上下一磕，四肢立成齑粉，纵有异术，离免此难。', '5', '30', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('35', '金光圣母金光阵', '2', null, '100', '10', '夺日月之精，藏天地之气，中有二十一面宝镜，用二十一根杆，每一面应在杆顶上，一镜上有一套。若人仙入阵，将此套拽起，雷声震动镜子，只一二转，金光射出，照住其身，立刻化为浓血，纵会飞腾，难越此阵。', '5', '30', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('36', '孙天君化血阵', '2', null, '100', '10', '用先天灵气，中有风雷，内藏数斗黑沙。但神仙入阵，雷响处风卷黑沙，些须着处，立化血水，纵是神仙难逃利害。', '5', '30', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('37', '白天君烈阵', '2', null, '100', '10', '妙用无穷，非同凡品：内藏叁火，有叁昧火，空中火，石中火，叁火并为一气；中有叁首红，若神仙进此阵内，叁展动，叁火齐飞，须火成为灰烬，纵有避火真言，难躲叁昧真火。', '5', '30', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('38', '姚天君落魂阵', '2', null, '100', '10', '闭生门，开死户，中藏天地厉气，结聚而成；内有白纸一首，上画符印，若神仙入阵内，白旌展动，魂魄消散，倾刻而灭，不论神仙，随入随灭。', '5', '30', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('39', '王天君红水阵', '2', null, '100', '10', '夺壬癸之精，藏太乙之妙，变幻莫测；中有一八卦台，上有一二个葫芦，任随人仙入阵，将葫芦往下一掷，倾出红水，汪洋无际。若是水溅出一点，黏在身上，顷刻化为血水，纵是神仙，无术可逃。', '5', '30', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('40', '张天君红沙阵', '2', null, '100', '10', '内按天地人叁寸，中分叁气，内藏红砂叁斗，看似红砂，着身利刃，上不知天，下不知地，中不知人；若人仙冲入此阵，风雷运处，飞砂伤人，立刻骸鼻俱成齑粉，纵有神仙佛祖遭此，再不能逃。', '5', '30', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('41', '两仪阵', '2', null, '100', '10', '灵牙仙（白象）', '5', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('42', '瘟癀阵', '2', null, '100', '10', '九龙岛吕岳、陈庚。二十一把瘟癀伞，按九宫八卦排列，中有土台。', '5', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('43', '血河大阵', '2', null, '100', '10', '冥河老祖以十万八千辆血河车所布置。', '5', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('44', '两仪微尘大阵', '2', null, '100', '10', '老子以混元一气太清神符布置。', '5', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('45', '先天五方大阵', '2', null, '100', '10', '由素色云界旗，青莲宝色旗，玄元控水旗，离地焰光旗，玉虚杏黄旗布置', '5', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('46', '大须弥正反九宫仙阵', '2', null, '100', '10', '由九把九宫剑布置而成，在蜀山里仅次于两仪微尘大阵', '5', '0', '0', '1', '1', '11', '2', '0', '0', null, null, '0');
INSERT INTO `x2_goods_store` VALUES ('47', '破封石', '1', null, '10', '10', '可以破除封印，提升武器品阶。', '0', '0', '0', '1', '1', '8', '2', '1', '99800', '998', '神话', '0');
INSERT INTO `x2_goods_store` VALUES ('48', '木箱', '1', null, '1000', '10', '开出1-6境界武器、技能或者丹药。', '0', '0', '0', '1', '1', '8', '2', '1', '5000', '50', '稀有', '0');
INSERT INTO `x2_goods_store` VALUES ('49', '铁箱', '1', null, '500', '10', '开出2-8境界武器、技能或者丹药。', '0', '0', '0', '1', '1', '8', '2', '1', '8000', '80', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('50', '银箱', '1', null, '100', '10', '开出6-12境界武器、技能或者丹药。', '0', '0', '0', '1', '1', '8', '2', '1', '20000', '200', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('51', '金箱', '1', null, '50', '10', '开出8-16境界武器、技能或者丹药。', '0', '0', '0', '1', '1', '8', '2', '1', '80000', '800', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('52', '玉盒', '1', null, '20', '10', '开出12-18境界武器、技能或者丹药。', '0', '0', '0', '1', '1', '8', '2', '1', '240000', '2400', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('53', '仙盒', '1', null, '2', '10', '开出16-20境界武器、技能或者丹药。', '0', '0', '0', '1', '1', '8', '2', '1', '500000', '5000', '神话', '0');
INSERT INTO `x2_goods_store` VALUES ('54', '人仙令', '1', null, '500', '10', '召唤令，人族生物', '0', '0', '0', '1', '1', '8', '2', '1', '5000', '10000', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('55', '魔仙令', '1', null, '500', '10', '召唤令，魔族生物', '0', '0', '0', '1', '1', '8', '2', '1', '8000', '16000', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('56', '妖仙令', '1', null, '500', '10', '召唤令，妖族生物', '0', '0', '0', '1', '1', '8', '2', '1', '8000', '16000', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('57', '鬼仙令', '1', null, '500', '10', '召唤令，鬼族生物', '0', '0', '0', '1', '1', '8', '2', '1', '8000', '16000', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('58', '仙神令', '1', null, '500', '10', '召唤令，仙族生物', '0', '0', '0', '1', '1', '8', '2', '1', '8000', '16000', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('59', '兽仙令', '1', null, '500', '10', '召唤令，兽族生物', '0', '0', '0', '1', '1', '8', '2', '1', '8000', '16000', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('60', '灵仙令', '1', null, '500', '10', '召唤令，灵族生物', '0', '0', '0', '1', '1', '8', '2', '1', '12000', '24000', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('61', '异仙令', '1', null, '500', '10', '召唤令，异族生物', '0', '0', '0', '1', '1', '8', '2', '1', '15000', '30000', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('62', '万仙令', '1', null, '200', '10', '随机召唤令，人妖鬼神魔兽灵异。', '0', '0', '0', '1', '1', '8', '2', '1', '10000', '20000', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('63', '神魔令', '1', null, '10', '10', '特殊召唤随机世界生物', '0', '0', '0', '1', '1', '8', '2', '1', '99800', '998', '神话', '0');
INSERT INTO `x2_goods_store` VALUES ('64', '精魄', '1', null, '2000', '10', '生物精魄，消耗100精魄可随机合成万仙令，生物分解可获得相应评分的精魄。1000金币=1精魄', '0', '0', '0', '1', '1', '8', '3', '1', '100', '0', '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('65', '灵药', '1', null, '2000', '10', '草木精华，可用于炼丹强化。丹药分解可获得相应评分的灵药。3000金币=1灵药', '0', '0', '0', '1', '1', '8', '3', '1', '300', '0', '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('66', '铁精', '1', null, '2000', '10', '锻冶之精华，可用于炼器强化。武器分解可获得相应评分的铁精。2000金币=1铁精', '0', '0', '0', '1', '1', '8', '3', '1', '200', '0', '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('67', '元神', '1', null, '100', '10', '随机生物元神，附带生物技能。', '0', '0', '0', '1', '1', '8', '2', '1', '12600', '126', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('68', '朱果', '1', null, '1000', '10', '刷新生物属性，凤凰血而生，服用后有脱胎换骨的功效。', '0', '0', '0', '1', '1', '8', '2', '1', '1000', '10', '稀有', '0');
INSERT INTO `x2_goods_store` VALUES ('69', '星辰石', '1', null, '1000', '10', '武器洗炼', '0', '0', '0', '1', '1', '8', '2', '1', '1000', '10', '稀有', '0');
INSERT INTO `x2_goods_store` VALUES ('70', '生生不熄', '1', null, '1000', '10', '体力值+20', '0', '0', '0', '1', '1', '8', '2', '1', '1000', '10000', '稀有', '0');
INSERT INTO `x2_goods_store` VALUES ('71', '传送石', '1', null, '100', '10', '随机秘境，对应世界，生物难度。9个标记，可能物品，可能战斗，可能空，可组队，全部死亡退出场景。', '0', '0', '0', '1', '1', '8', '2', '1', '48800', '488', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('72', '本源之力', '1', null, '100', '10', '本源之力，用于主角突破自身境界。', '0', '0', '0', '1', '1', '8', '2', '1', '15000', '30000', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('73', '三生石', '1', null, '200', '10', '生物缘分刷新', '0', '0', '0', '1', '1', '8', '2', '1', '10000', '20000', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('74', '功法玉简', '1', null, '200', '10', '获得随机技能书一本', '0', '0', '0', '1', '1', '8', '2', '1', '9800', '98', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('75', '忘情水', '1', null, '200', '10', '修改角色名称。', '0', '0', '0', '1', '1', '8', '2', '1', '28800', '288', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('76', '破界符', '1', null, '100', '10', '强制掠夺，胜利可以获得对方10%金币。', '0', '0', '0', '1', '1', '8', '2', '1', '10000', '100', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('77', '符石', '1', null, '300', '10', '使用可获随机获得符石。', '0', '0', '0', '1', '1', '8', '2', '1', '3600', '126', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('78', '彩虹泪', '1', null, '100', '10', '可改变异形颜色', '0', '0', '0', '1', '1', '8', '2', '1', '16800', '168', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('79', '神石', '1', null, '100', '10', '20神石可合成神魔令，特殊召唤随机世界生物', '0', '0', '0', '1', '1', '8', '3', '1', '5000', '50', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('80', '鸿蒙紫气', '1', null, '1', '10', '服用鸿蒙紫气，方挑战圣境。', '0', '0', '0', '1', '1', '8', '2', '1', '999900', '9999', '神话', '0');
INSERT INTO `x2_goods_store` VALUES ('81', '盘古石', '1', null, '5', '10', '服用后，可学习任意种族技能一次。', '0', '0', '0', '1', '1', '8', '2', '1', '482000', '4820', '神话', '0');
INSERT INTO `x2_goods_store` VALUES ('82', '孟婆汤', '1', null, '1000', '10', '生物转生，重塑肉身，不保留境界。', '0', '0', '0', '1', '1', '8', '2', '1', '3000', '30000', '稀有', '0');
INSERT INTO `x2_goods_store` VALUES ('83', '潜能', '1', null, '60', '10', '随机学习生物天生技能', '0', '0', '0', '1', '1', '8', '2', '1', '36000', '360', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('84', '技能绑定石', '1', null, '100', '10', '绑定技能。', '0', '0', '0', '1', '1', '8', '2', '1', '20000', '200000', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('85', '阵法石', '1', null, '50', '10', '使用后获得随机阵法', '0', '0', '0', '1', '1', '8', '2', '1', '78000', '780000', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('86', '道果', '1', null, '300', '10', '生物使用后，三围增加50', '0', '0', '0', '1', '1', '8', '2', '1', '66600', '666', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('87', '仙魔石', '1', null, '500', '10', '可以使人性情大变，刷新生物性格', '0', '0', '0', '1', '1', '8', '2', '1', '2000', '20', '完美', '0');
INSERT INTO `x2_goods_store` VALUES ('88', '藏宝图', '1', null, '1000', '10', '九宫格，每次挖掘消耗藏宝图+1', '0', '0', '0', '1', '1', '8', '2', '1', '800', '4000', '稀有', '0');
INSERT INTO `x2_goods_store` VALUES ('89', '契约仙果', '1', null, '80', '10', '使用后无法融合，无法交易，成长+1，异形+2', '0', '0', '0', '1', '1', '8', '2', '1', '999999', '999999', '传说', '0');
INSERT INTO `x2_goods_store` VALUES ('90', '仙炼石', '1', null, '10', '10', '可以仙炼武器', '0', '0', '0', '1', '1', '8', '1', '1', '0', null, '神话', '0');
INSERT INTO `x2_goods_store` VALUES ('91', '妖炼石', '1', null, '10', '10', '可以妖炼武器', '0', '0', '0', '1', '1', '8', '1', '1', '0', null, '神话', '0');
INSERT INTO `x2_goods_store` VALUES ('92', '神炼石', '1', null, '10', '10', '可以神炼武器', '0', '0', '0', '1', '1', '8', '1', '1', '0', null, '神话', '0');
INSERT INTO `x2_goods_store` VALUES ('93', '何首乌', '1', null, '2000', '10', '普通药材', '0', '0', '0', '1', '1', '8', '1', '1', '600', null, '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('94', '千年人参', '1', null, '1000', '10', '千年人参，有极大的药效。', '0', '0', '0', '1', '1', '8', '1', '1', '2000', null, '稀有', '0');
INSERT INTO `x2_goods_store` VALUES ('95', '金币', '1', null, '2000', '10', '金币堆，可以卖钱。', '0', '0', '0', '1', '1', '8', '1', '1', '100', null, '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('96', '灵石', '1', null, '2000', '10', '灵石堆，可以卖钱。', '0', '0', '0', '1', '1', '8', '1', '1', '500', null, '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('97', '金矿', '1', null, '1000', '10', '发现金矿，可以卖钱。', '0', '0', '0', '1', '1', '8', '1', '1', '1000', null, '稀有', '0');
INSERT INTO `x2_goods_store` VALUES ('98', '灵脉', '1', null, '1000', '10', '发现灵脉，可以卖钱。', '0', '0', '0', '1', '1', '8', '1', '1', '3000', null, '稀有', '0');
INSERT INTO `x2_goods_store` VALUES ('99', '百年人参', '1', null, '2000', '10', '百年人参，药效较低。', '0', '0', '0', '1', '1', '8', '1', '1', '800', null, '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('100', '雕像', '1', null, '2000', '10', '一个残破的雕像。', '0', '0', '0', '1', '1', '8', '1', '1', '200', null, '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('101', '龙凤镯', '1', null, '2000', '10', '一块普通手镯。', '0', '0', '0', '1', '1', '8', '1', '1', '600', null, '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('102', '古玉', '1', null, '2000', '10', '一块古玉。', '0', '0', '0', '1', '1', '8', '1', '1', '500', null, '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('103', '夜明珠', '1', null, '2000', '10', '夜明珠', '0', '0', '0', '1', '1', '8', '1', '1', '400', null, '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('104', '琉璃盏', '1', null, '2000', '10', '琉璃盏', '0', '0', '0', '1', '1', '8', '1', '1', '1200', null, '普通', '0');
INSERT INTO `x2_goods_store` VALUES ('105', '造化玉蝶', '1', null, '1', '10', '造化神器', '0', '0', '0', '1', '1', '1', null, '0', '0', '0', '残破', '0');
INSERT INTO `x2_goods_store` VALUES ('106', '二十四品青莲', '1', '/files/attach/images/20200610/1591780494723708.png', '1', '31', '', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '良好', '0');
INSERT INTO `x2_goods_store` VALUES ('113', '盘古真身', '2', null, '0', '10', null, '0', '0', '0', '1', '1', '1', '1', '1', '0', '0', '残破', '0');

-- ----------------------------
-- Table structure for x2_goods_store_nature
-- ----------------------------
DROP TABLE IF EXISTS `x2_goods_store_nature`;
CREATE TABLE `x2_goods_store_nature` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户和商店物品属性表',
  `goodid` int(11) DEFAULT NULL COMMENT '物品id',
  `name` varchar(255) DEFAULT NULL COMMENT '物品名称',
  `natureName` varchar(255) DEFAULT NULL COMMENT '属性名称',
  `gooduse` int(11) DEFAULT NULL COMMENT '物品类型id 参考goods_use',
  `value` int(11) DEFAULT '0' COMMENT '用户属性在百分比区间',
  `type` int(11) DEFAULT '1' COMMENT '物品类型  1主属性  2附加属性  3特殊属性 阵法type 位置',
  `percent` int(11) DEFAULT '10' COMMENT '百分比区间最大值为物品表品质区间 1-10  残破 劣质 普通 良好 优质  极品 稀有 完美 传说 神话',
  `status` int(3) DEFAULT '0' COMMENT '属性 状态是否激活0未使用 1使用',
  `describe` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_goods_store_nature
-- ----------------------------
INSERT INTO `x2_goods_store_nature` VALUES ('1', '1', '戮仙剑', '攻击', '1', '10000', '1', '10', '0', null);
INSERT INTO `x2_goods_store_nature` VALUES ('2', '1', '戮仙剑', '护甲', '1', '10000', '1', '10', '0', null);
INSERT INTO `x2_goods_store_nature` VALUES ('3', '1', '戮仙剑', '幸运', '1', '10', '2', '10', '0', null);
INSERT INTO `x2_goods_store_nature` VALUES ('4', '13', '天运丹', '幸运', '1', '10', '2', '10', '0', null);
INSERT INTO `x2_goods_store_nature` VALUES ('5', '1', '破天阵', '攻击', '11', '10', '1', '1', '0', '攻击提升10% type对应位置');

-- ----------------------------
-- Table structure for x2_goods_store_old
-- ----------------------------
DROP TABLE IF EXISTS `x2_goods_store_old`;
CREATE TABLE `x2_goods_store_old` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '消耗物品 单位为1',
  `name` varchar(11) DEFAULT NULL COMMENT '物品类型',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `value` int(11) DEFAULT NULL COMMENT '难度数值越大获得几率越小',
  `price` int(11) DEFAULT '0' COMMENT '估价',
  `type` int(11) DEFAULT '1' COMMENT '购买类型 1金币 2 灵石 3特殊',
  `sellout` int(11) DEFAULT '0' COMMENT '卖出价格',
  `gooduse` int(11) DEFAULT NULL COMMENT '物品类型id 参考goods_use表',
  `usetype` int(11) DEFAULT '1' COMMENT '使用类型1材料 2使用 3合成',
  `percent` varchar(255) DEFAULT '普通' COMMENT ' 残破 劣质 普通 良好 优质 稀有 极品 完美 传说 神话',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_goods_store_old
-- ----------------------------
INSERT INTO `x2_goods_store_old` VALUES ('1', '木箱', '开出1-6境界武器、技能或者丹药。', '1000', '50', '2', '5000', '8', '2', '稀有');
INSERT INTO `x2_goods_store_old` VALUES ('2', '铁箱', '开出2-8境界武器、技能或者丹药。', '500', '80', '2', '8000', '8', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('3', '银箱', '开出6-12境界武器、技能或者丹药。', '100', '200', '2', '20000', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('4', '金箱', '开出8-16境界武器、技能或者丹药。', '50', '800', '2', '80000', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('5', '玉盒', '开出12-18境界武器、技能或者丹药。', '20', '2400', '2', '240000', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('6', '仙盒', '开出16-20境界武器、技能或者丹药。', '2', '5000', '2', '500000', '8', '2', '神话');
INSERT INTO `x2_goods_store_old` VALUES ('7', '人仙令', '召唤令，人族生物', '500', '10000', '1', '5000', '11', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('11', '魔仙令', '召唤令，魔族生物', '500', '16000', '1', '8000', '11', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('8', '妖仙令', '召唤令，妖族生物', '500', '16000', '1', '8000', '11', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('9', '鬼仙令', '召唤令，鬼族生物', '500', '16000', '1', '8000', '11', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('10', '仙神令', '召唤令，仙族生物', '500', '16000', '1', '8000', '11', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('12', '兽仙令', '召唤令，兽族生物', '500', '16000', '1', '8000', '11', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('13', '灵仙令', '召唤令，灵族生物', '500', '24000', '1', '12000', '11', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('14', '异仙令', '召唤令，异族生物', '500', '30000', '1', '15000', '11', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('15', '万仙令', '随机召唤令，人妖鬼神魔兽灵异。', '200', '20000', '1', '10000', '11', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('16', '神魔令', '特殊召唤随机世界生物', '10', '998', '1', '99800', '11', '2', '神话');
INSERT INTO `x2_goods_store_old` VALUES ('17', '精魄', '生物精魄，消耗100精魄可随机合成万仙令，生物分解可获得相应评分的精魄。1000金币=1精魄', '2000', '0', '1', '100', '8', '3', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('18', '灵药', '草木精华，可用于炼丹强化。丹药分解可获得相应评分的灵药。3000金币=1灵药', '2000', '0', '1', '300', '8', '3', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('19', '铁精', '锻冶之精华，可用于炼器强化。武器分解可获得相应评分的铁精。2000金币=1铁精', '2000', '0', '1', '200', '8', '3', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('20', '元神', '随机生物元神，附带生物技能。', '100', '126', '2', '12600', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('21', '朱果', '刷新生物属性，凤凰血而生，服用后有脱胎换骨的功效。', '1000', '10', '2', '1000', '8', '2', '稀有');
INSERT INTO `x2_goods_store_old` VALUES ('22', '星辰石', '武器洗炼', '1000', '10', '2', '1000', '8', '2', '稀有');
INSERT INTO `x2_goods_store_old` VALUES ('23', '生生不熄', '体力值+20', '1000', '10000', '1', '1000', '8', '2', '稀有');
INSERT INTO `x2_goods_store_old` VALUES ('24', '传送石', '随机秘境，对应世界，生物难度。9个标记，可能物品，可能战斗，可能空，可组队，全部死亡退出场景。', '100', '488', '2', '48800', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('25', '本源之力', '本源之力，用于主角突破自身境界。', '100', '30000', '1', '15000', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('26', '三生石', '生物缘分刷新', '200', '20000', '1', '10000', '8', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('27', '功法玉简', '获得随机技能书一本', '200', '98', '2', '9800', '8', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('28', '忘情水', '修改角色名称。', '200', '288', '2', '28800', '8', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('29', '破界符', '强制掠夺，胜利可以获得对方10%金币。', '100', '100', '2', '10000', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('30', '符石', '使用可获随机获得符石。', '300', '126', '2', '3600', '8', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('31', '彩虹泪', '可改变异形颜色', '100', '168', '1', '16800', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('32', '神石', '20神石可合成神魔令，特殊召唤随机世界生物', '100', '50', '2', '5000', '8', '3', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('33', '鸿蒙紫气', '服用鸿蒙紫气，方挑战圣境。', '1', '9999', '2', '999900', '8', '2', '神话');
INSERT INTO `x2_goods_store_old` VALUES ('34', '盘古石', '服用后，可学习任意种族技能一次。', '5', '4820', '2', '482000', '8', '2', '神话');
INSERT INTO `x2_goods_store_old` VALUES ('35', '孟婆汤', '生物转生，重塑肉身，不保留境界。', '1000', '30000', '1', '3000', '8', '2', '稀有');
INSERT INTO `x2_goods_store_old` VALUES ('36', '潜能', '随机学习生物天生技能', '60', '360', '2', '36000', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('37', '技能绑定石', '绑定技能。', '100', '200000', '1', '20000', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('38', '阵法石', '使用后获得随机阵法', '50', '780000', '1', '78000', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('39', '道果', '生物使用后，三围增加50', '300', '666', '2', '66600', '8', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('40', '仙魔石', '可以使人性情大变，刷新生物性格', '500', '20', '2', '2000', '8', '2', '完美');
INSERT INTO `x2_goods_store_old` VALUES ('41', '藏宝图', '九宫格，每次挖掘消耗藏宝图+1', '1000', '4000', '1', '800', '8', '2', '稀有');
INSERT INTO `x2_goods_store_old` VALUES ('42', '契约仙果', '使用后无法融合，无法交易，成长+1，异形+2', '80', '999999', '1', '999999', '8', '2', '传说');
INSERT INTO `x2_goods_store_old` VALUES ('43', '仙炼石', '可以仙炼武器', '10', '0', '1', '0', null, '1', '神话');
INSERT INTO `x2_goods_store_old` VALUES ('44', '妖炼石', '可以妖炼武器', '10', '0', '1', '0', null, '1', '神话');
INSERT INTO `x2_goods_store_old` VALUES ('45', '神炼石', '可以神炼武器', '10', '0', '1', '0', null, '1', '神话');
INSERT INTO `x2_goods_store_old` VALUES ('46', '何首乌', '普通药材', '2000', '0', '1', '600', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('51', '千年人参', '千年人参，有极大的药效。', '1000', '0', '1', '2000', null, '1', '稀有');
INSERT INTO `x2_goods_store_old` VALUES ('47', '金币', '金币堆，可以卖钱。', '2000', '0', '1', '100', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('48', '灵石', '灵石堆，可以卖钱。', '2000', '0', '1', '500', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('49', '金矿', '发现金矿，可以卖钱。', '1000', '0', '1', '1000', null, '1', '稀有');
INSERT INTO `x2_goods_store_old` VALUES ('50', '灵脉', '发现灵脉，可以卖钱。', '1000', '0', '1', '3000', null, '1', '稀有');
INSERT INTO `x2_goods_store_old` VALUES ('52', '百年人参', '百年人参，药效较低。', '2000', '0', '1', '800', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('53', '雕像', '一个残破的雕像。', '2000', '0', '1', '200', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('54', '龙凤镯', '一块普通手镯。', '2000', '0', '1', '600', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('55', '古玉', '一块古玉。', '2000', '0', '1', '500', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('56', '夜明珠', null, '2000', '0', '1', '400', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('57', '琉璃盏', null, '2000', '0', '1', '1200', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('58', '破封石', '可以破除封印，提升武器品阶。', '10', '998', '1', '99800', '11', '2', '神话');
INSERT INTO `x2_goods_store_old` VALUES ('59', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('60', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('61', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('62', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('63', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('64', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('65', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('66', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('67', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('68', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('69', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('70', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('71', null, null, '2000', '0', '1', '0', null, '1', '普通');
INSERT INTO `x2_goods_store_old` VALUES ('72', null, null, '2000', '0', '1', '0', null, '1', '普通');

-- ----------------------------
-- Table structure for x2_goods_use
-- ----------------------------
DROP TABLE IF EXISTS `x2_goods_use`;
CREATE TABLE `x2_goods_use` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '消耗物品',
  `name` char(25) DEFAULT NULL COMMENT '物品类型',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `value` int(11) DEFAULT NULL COMMENT '难度数值越大获得几率越小',
  `type` int(11) DEFAULT '1' COMMENT '购买类型 1武器 2 道具 3技能  4元神  5丹药',
  `fenjie` char(25) DEFAULT '普通' COMMENT '分解类型',
  `button_name` char(25) DEFAULT NULL,
  `button_type` tinyint(1) DEFAULT '0' COMMENT '0默认类型 1特殊类型',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_goods_use
-- ----------------------------
INSERT INTO `x2_goods_use` VALUES ('9', '性格', '获得性格。', '100', '2', '普通', '装备', '0');
INSERT INTO `x2_goods_use` VALUES ('10', '秘境', '对应世界，生物难度。9个标记，可能物品，可能战斗，可能空，全部死亡退出场景。', '60', '2', '普通', '使用', '0');
INSERT INTO `x2_goods_use` VALUES ('11', '阵法', '使用后布置阵法。', '30', '2', '普通', '使用', '0');
INSERT INTO `x2_goods_use` VALUES ('8', '消耗物品', '使用的消耗物品。', '600', '2', '普通', '使用', '0');
INSERT INTO `x2_goods_use` VALUES ('7', '元神', '生物元神，附带生物技能，生物献祭1%概率获得元神。可以融合，最多保留2个技能', '100', '4', '普通', '装备', '0');
INSERT INTO `x2_goods_use` VALUES ('6', '符石', '用于神器刻画符文。', '100', '2', '普通', '装备', '0');
INSERT INTO `x2_goods_use` VALUES ('2', '丹药', '丹药类型，对生物使用获得特殊效果。', '1000', '5', '灵药', '使用', '0');
INSERT INTO `x2_goods_use` VALUES ('3', '缘分石', '用于刷新缘分类型。', '300', '2', '普通', '使用', '0');
INSERT INTO `x2_goods_use` VALUES ('4', '普通材料', '普通的使用材料，可以卖钱。', '2000', '2', '普通', '使用', '0');
INSERT INTO `x2_goods_use` VALUES ('5', '灵石材料', '普通的使用材料，可以卖灵石。', '20', '2', '普通', '使用', '0');
INSERT INTO `x2_goods_use` VALUES ('12', '技能', '使用后生物获得的技能。', '400', '3', '普通', '使用', '0');
INSERT INTO `x2_goods_use` VALUES ('1', '武器', '\n\n\n\n获得武器。 普通 良好 优质 稀有 极品 完美 传说 神话', '2000', '1', '铁精', '装备', '0');
INSERT INTO `x2_goods_use` VALUES ('13', '生物', '获得生物。', '500', '2', '精魄', '献祭', '0');
INSERT INTO `x2_goods_use` VALUES ('14', '神物', '获得神物，放在背包内有特殊加成。', '10', '2', '普通', '装备', '0');
INSERT INTO `x2_goods_use` VALUES ('15', '特殊物品', '使用获得特殊加成。--使用书籍可以直接破镜', '5', '2', '普通', '使用', '0');
INSERT INTO `x2_goods_use` VALUES ('18', '技能', '技能绑定，用于技能绑定按钮', '0', '1', '特殊', '绑定', '1');

-- ----------------------------
-- Table structure for x2_goods_use_type
-- ----------------------------
DROP TABLE IF EXISTS `x2_goods_use_type`;
CREATE TABLE `x2_goods_use_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  `type` tinyint(1) DEFAULT '1' COMMENT '使用类型1材料 2使用 3合成',
  `type_name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_goods_use_type
-- ----------------------------
INSERT INTO `x2_goods_use_type` VALUES ('1', '武器', '2', '装备');
INSERT INTO `x2_goods_use_type` VALUES ('2', '道具', '2', '使用');
INSERT INTO `x2_goods_use_type` VALUES ('3', '技能', '2', '使用');
INSERT INTO `x2_goods_use_type` VALUES ('4', '元神', '2', '使用');
INSERT INTO `x2_goods_use_type` VALUES ('5', '丹药', '2', '使用');
INSERT INTO `x2_goods_use_type` VALUES ('6', '普通', '1', '普通');
INSERT INTO `x2_goods_use_type` VALUES ('7', '合成', '3', '合成');

-- ----------------------------
-- Table structure for x2_jump
-- ----------------------------
DROP TABLE IF EXISTS `x2_jump`;
CREATE TABLE `x2_jump` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(1) DEFAULT NULL COMMENT '1.h5',
  `content` varchar(255) DEFAULT NULL,
  `belong` tinyint(1) NOT NULL DEFAULT '1' COMMENT '自定义轮播图',
  `createTime` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `sort` int(255) DEFAULT '0' COMMENT '排序',
  `form` int(1) NOT NULL DEFAULT '1' COMMENT '1平面 2弹窗',
  `endTime` varchar(255) DEFAULT NULL COMMENT '有效期',
  `name` varchar(255) DEFAULT NULL COMMENT '描述',
  `isLook` int(255) NOT NULL DEFAULT '0' COMMENT '是否展示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_jump
-- ----------------------------
INSERT INTO `x2_jump` VALUES ('1', '1', 'www.baidu.com', '1', '1568946098', '/files/attach/images/20200518/1589785582113689.jpg', '1', '1', '', '教材首页', '1');
INSERT INTO `x2_jump` VALUES ('2', '1', 'http://www.book.com/content/jump/addd', '1', '1568946098', '/files/attach/images/20200518/1589785150206036.jpg', '2', '1', '', '教材首页', '1');

-- ----------------------------
-- Table structure for x2_user
-- ----------------------------
DROP TABLE IF EXISTS `x2_user`;
CREATE TABLE `x2_user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户userid  角色id',
  `occupation` int(2) DEFAULT '0' COMMENT '职业0无 1炼器2 炼道 3炼魂 4炼丹 5炼体',
  `vip` int(2) DEFAULT '0' COMMENT 'vip等级',
  `grade` int(11) DEFAULT '1' COMMENT '等级',
  `state` int(11) DEFAULT '1' COMMENT '境界 1-20',
  `biologyknow` int(11) DEFAULT '0' COMMENT '生物图鉴数',
  `name` varchar(255) DEFAULT NULL COMMENT '用户名',
  `linshi` int(11) DEFAULT '0' COMMENT '灵石',
  `jinbi` int(11) DEFAULT '0' COMMENT '金币',
  `qiyun` int(11) DEFAULT '0' COMMENT '气运',
  `loginid` int(11) DEFAULT '0' COMMENT '登录id',
  `server` int(11) DEFAULT '0' COMMENT '服务端id',
  `servername` varchar(255) DEFAULT NULL COMMENT '服务器名字',
  `energy` int(11) DEFAULT '120' COMMENT '能量/体力',
  `benyuan` int(11) DEFAULT '0' COMMENT '世界本源',
  `wordid` int(11) DEFAULT '0' COMMENT '当前世界id',
  `biology1` int(11) DEFAULT '0' COMMENT '生物细胞，参考bioloby_bioloby表',
  `biology2` int(11) DEFAULT '0' COMMENT '生物细胞',
  `biology3` int(11) DEFAULT '0' COMMENT '生物细胞',
  `biology4` int(11) DEFAULT '0',
  `biology5` int(11) DEFAULT '0' COMMENT '生物细胞',
  `biology6` int(11) DEFAULT '0' COMMENT '生物细胞',
  `beishu` int(11) DEFAULT '1' COMMENT '倍数',
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user
-- ----------------------------
INSERT INTO `x2_user` VALUES ('1', '0', '10', '1', '3', '100', '红尘仙', '560', '3000', '0', '1', '1', '开天辟地', '130', '0', '39', '10', '10', '10', '10', '10', '10', '2');
INSERT INTO `x2_user` VALUES ('3', '0', '0', '1', '1', '0', '大魔王', '0', '600', '0', '1', '2', '混沌初开', '123', '0', '0', '10', '10', '10', '10', '10', '10', '1');
INSERT INTO `x2_user` VALUES ('26', '0', '0', '1', '1', '0', '策颜龙', '0', '0', '0', '58', '1', '混沌初开', '120', '0', '37', '9', '4', '5', '1', '23', '15', '1');

-- ----------------------------
-- Table structure for x2_user_biology
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_biology`;
CREATE TABLE `x2_user_biology` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户生物强化表',
  `userid` int(11) DEFAULT '1' COMMENT '模型创建所属人 1 管理员',
  `name` varchar(25) DEFAULT NULL COMMENT '生物名称',
  `biology` tinyint(3) DEFAULT '1' COMMENT '种族(人鬼妖神魔异) 0未知',
  `state` int(3) DEFAULT '1' COMMENT '生物境界',
  `grade` int(11) DEFAULT '1' COMMENT '等级',
  `shengMing` int(11) DEFAULT '1' COMMENT '生命',
  `moFa` int(11) DEFAULT '1' COMMENT '魔法',
  `gongJi` int(11) DEFAULT '1' COMMENT '攻击',
  `huJia` int(11) DEFAULT '1' COMMENT '护甲',
  `faGong` int(11) DEFAULT '1' COMMENT '特攻',
  `fakang` int(11) DEFAULT '1' COMMENT '法抗',
  `suDu` int(11) DEFAULT '1' COMMENT '速度',
  `shanbi` int(11) DEFAULT '0' COMMENT '闪避',
  `baoji` int(11) DEFAULT '150' COMMENT '暴击',
  `baojilv` int(11) DEFAULT '0' COMMENT '暴击率',
  `shuaXin` int(11) DEFAULT '1' COMMENT '刷新次数',
  `xunLian` int(11) DEFAULT '3' COMMENT '训练次数',
  `jinJie` int(11) DEFAULT '1' COMMENT '进阶',
  `biologyid` int(11) DEFAULT '0' COMMENT '生物id',
  `reiki` int(11) DEFAULT '1' COMMENT '灵气',
  `power` int(11) DEFAULT '1' COMMENT '力量',
  `agile` int(11) DEFAULT '1' COMMENT '敏捷',
  `intelligence` int(11) DEFAULT '1' COMMENT '智力',
  `special` int(11) DEFAULT '1' COMMENT '评分 战力 (与属性有关*30.0的基础评分) 悟性 和基础属性',
  `score` int(11) DEFAULT '1' COMMENT '评分',
  `wuXing` int(11) DEFAULT '3' COMMENT '悟性-成长率 1-10  自由属性 ',
  `skill` varchar(255) DEFAULT '1' COMMENT '技能编号',
  `yuanShen` int(11) DEFAULT '0' COMMENT '元神',
  `fate` int(11) DEFAULT '0' COMMENT '缘分(武器缘分) 本命法宝（只有一个）武器库随机-命中注定',
  `type` int(3) DEFAULT '4' COMMENT '1普通 2特殊 3NPC 4不可用',
  `descript` varchar(255) DEFAULT NULL COMMENT '描述',
  `lucky` int(3) DEFAULT '1' COMMENT ' 幸运值-成长值-潜能-技能进阶-境界突破',
  `maxNature` int(11) DEFAULT '0' COMMENT '自由属性点',
  `qianNeng` int(3) DEFAULT '1' COMMENT '潜能--1-10次，战斗中有几率进化-增加1-10 悟性（越低级潜能越大）',
  `character` int(3) DEFAULT '1' COMMENT '性格',
  `picture` varchar(255) DEFAULT NULL COMMENT '生物图片 形象',
  `yiXing` tinyint(1) DEFAULT '0' COMMENT '异性 0 否1是',
  `sex` int(255) DEFAULT '1' COMMENT '性别',
  `jingBi` int(11) DEFAULT '1' COMMENT '金币',
  `jingYan` int(11) DEFAULT '1' COMMENT '经验',
  `jianShang` int(255) DEFAULT '0' COMMENT '减伤',
  `zhenShang` int(255) DEFAULT '0' COMMENT '增伤（真实伤害）',
  `color` varchar(25) DEFAULT '#fff' COMMENT '颜色（普通默认为白色）',
  `danDu` int(11) DEFAULT '0' COMMENT '丹毒100  大30每回合对自身造成生命值%的伤害',
  `scoreGrade` varchar(11) DEFAULT 'D' COMMENT '评分等级 D C A B S SS SSS 传说',
  `chuFa` int(3) DEFAULT '0' COMMENT '触发--最多叠加到100',
  `wordid` int(11) DEFAULT NULL COMMENT '世界编号',
  `jiBan` int(11) NOT NULL DEFAULT '1' COMMENT '羁绊',
  `experience` int(11) DEFAULT '0' COMMENT '升级经验 每级 等级*500的经验',
  `minPower` int(11) DEFAULT '10' COMMENT '最小力量',
  `minAgile` int(11) DEFAULT '10',
  `minIntelligence` int(11) DEFAULT '10' COMMENT '最小力量',
  `createid` int(11) DEFAULT '0' COMMENT '生物创造id',
  `percent` float(11,0) DEFAULT '0' COMMENT '经验条(单独增加）',
  `xiXue` int(11) DEFAULT '0' COMMENT '吸血',
  `shenFen` int(3) DEFAULT '1' COMMENT '身份 1普通  2精英   3头目  4主角   5命运',
  `siwang` int(11) DEFAULT '0' COMMENT '死亡    尸焰（死亡） 炽炀（残暴）',
  `jisha` int(11) DEFAULT '0' COMMENT '击杀  罗睺（魔道） 盘古（力道） 九江（重道） 乌冹（轻道） 砀殕（命运）',
  `fuhuo` int(11) DEFAULT '0' COMMENT '复活   后土专属技能--轮回 空冥（空间） 扬眉（时间） 灵木道人（生命）',
  `huDun` int(11) DEFAULT '0' COMMENT '护盾',
  `zhiLiao` int(11) DEFAULT '0' COMMENT '治疗',
  `zhenShi` int(11) DEFAULT '0' COMMENT '真实伤害',
  `wuDi` int(11) DEFAULT '0' COMMENT '无敌',
  `gooduse1` int(11) DEFAULT '0' COMMENT '装备栏1',
  `gooduse2` int(11) DEFAULT '0' COMMENT '装备栏2',
  `zhuanshen` int(11) DEFAULT '0' COMMENT '满60级转身次数  鸿钧专属技能-天道',
  `zhujiao` tinyint(11) DEFAULT '0' COMMENT '主角模型，不可以创建',
  `zPower` int(11) DEFAULT '0' COMMENT '附加力量',
  `zAgile` int(11) DEFAULT '0' COMMENT '附加敏捷',
  `zIntelligence` int(11) DEFAULT '0' COMMENT '附加智力',
  `shouyuan` int(11) DEFAULT '60' COMMENT '寿元',
  `shouyuanYear` int(11) DEFAULT '1' COMMENT '年龄',
  `wuXingTotal` int(11) DEFAULT '0' COMMENT '悟性值',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=204 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_biology
-- ----------------------------
INSERT INTO `x2_user_biology` VALUES ('188', '1', '了空', '1', '1', '1', '374', '14', '92', '62', '112', '67', '12', '1', '150', '0', '1', '3', '1', '21', '27', '18', '13', '34', '900', '75', '4', '10', '0', '0', '1', '少林寺了空大师。', '17', '0', '1', '1', '山贼', '0', '1', '162', '82', '19', '19', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '11', '5', '25', '203', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology` VALUES ('187', '1', '曹正淳', '1', '1', '1', '364', '13', '88', '58', '107', '62', '11', '2', '150', '0', '1', '3', '1', '9', '25', '17', '14', '33', '881', '74', '1', '11', '0', '0', '1', '东厂总管太监曹正淳。野心勃勃的曹正淳权势滔天，他修炼“童子功“大成、武功盖世\r\n天下第一\r\n天下第一(22张)\r\n ，又自恃掌管东厂，权倾朝野，结党营私，勾结贪官，陷害忠良，无恶不作。', '23', '0', '1', '1', '宫本', '0', '1', '160', '81', '25', '25', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '3', '5', '11', '202', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology` VALUES ('184', '1', '朱无视', '1', '1', '1', '298', '13', '70', '38', '84', '42', '9', '2', '150', '0', '1', '3', '1', '6', '15', '10', '17', '32', '716', '69', '3', '7', '0', '0', '1', '外号铁胆神侯，为当今皇上叔父。当年先皇驾崩前，唯恐正德年少，易被奸人操控，或无力主持朝政，不懂分辨忠奸，于是特令皇弟朱无视创立护龙山庄，权力可凌驾所有朝廷机构，并赐予先皇之丹书铁卷、尚方宝剑，可以上斩昏君，下斩谗臣，给了正德一个最高特务机构，制衡东厂。', '21', '0', '1', '1', '宫本', '0', '1', '150', '76', '22', '22', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '4', '9', '17', '199', '0', '0', '3', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology` VALUES ('185', '1', '万三千', '1', '1', '1', '392', '12', '78', '57', '94', '61', '9', '0', '150', '0', '1', '3', '1', '11', '26', '24', '5', '21', '898', '70', '6', '5,11', '0', '0', '1', '天下第一庄庄主，富甲天下。', '7', '0', '1', '1', '司马懿', '0', '1', '152', '77', '9', '9', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '13', '3', '16', '200', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology` VALUES ('186', '1', '眠狂四郎', '1', '1', '1', '480', '11', '63', '32', '56', '30', '8', '1', '150', '0', '1', '3', '1', '15', '12', '33', '16', '9', '775', '58', '1', null, '0', '0', '1', '东瀛著名剑客眠狂四郎「幻剑」。', '15', '0', '1', '1', '貂蝉', '0', '1', '128', '65', '16', '16', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '21', '8', '7', '201', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology` VALUES ('198', '26', '洛克人', '6', '1', '1', '518', '11', '51', '29', '48', '28', '5', '2', '150', '0', '1', '3', '1', '37', '12', '40', '6', '3', '852', '59', '5', '53', '0', '0', '5', '', '23', '0', '1', '1', '洛克人', '0', '1', '130', '66', '24', '24', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '16', '3', '2', '216', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology` VALUES ('199', '26', '张无忌', '1', '1', '1', '492', '12', '51', '18', '48', '18', '6', '1', '150', '0', '1', '3', '1', '23', '5', '33', '17', '14', '772', '74', '2', '5', '0', '0', '2', '柳生但马守是武侠电视剧《天下第一》中的角色，是著名剑客柳生十兵卫的父亲，也是武学宗师。', '10', '0', '1', '1', '宫本', '0', '1', '160', '81', '10', '10', '#FFFFFF', '0', 'S', '0', '1', '1', '0', '24', '11', '13', '217', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology` VALUES ('203', '26', '魔法少女', '3', '1', '1', '350', '12', '61', '37', '68', '39', '7', '2', '150', '0', '1', '3', '1', '33', '16', '20', '9', '16', '701', '45', '12', null, '0', '0', '5', '', '28', '0', '1', '1', '魔法少女', '0', '1', '102', '52', '29', '29', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '11', '3', '8', '221', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology` VALUES ('201', '26', '蘑菇', '5', '1', '1', '366', '12', '100', '67', '98', '66', '14', '1', '150', '0', '1', '3', '1', '36', '29', '19', '20', '18', '832', '57', '5', null, '0', '0', '5', '', '12', '0', '1', '1', '蘑菇', '0', '1', '126', '64', '14', '14', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '2', '7', '1', '219', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology` VALUES ('202', '26', '曹正淳', '1', '1', '1', '406', '13', '99', '60', '106', '62', '14', '2', '150', '0', '1', '3', '1', '9', '25', '20', '23', '30', '888', '73', '7', null, '0', '0', '1', '东厂总管太监曹正淳。野心勃勃的曹正淳权势滔天，他修炼“童子功“大成、武功盖世\r\n天下第一\r\n天下第一(22张)\r\n ，又自恃掌管东厂，权倾朝野，结党营私，勾结贪官，陷害忠良，无恶不作。', '23', '0', '1', '1', '宫本', '0', '1', '158', '80', '25', '25', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '3', '5', '11', '220', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');

-- ----------------------------
-- Table structure for x2_user_biology_attribute
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_biology_attribute`;
CREATE TABLE `x2_user_biology_attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户生物强化表--仓库后面加仓库编号字段',
  `userBiologyid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT '1' COMMENT '模型创建所属人 1 管理员',
  `name` varchar(25) DEFAULT NULL COMMENT '生物名称',
  `biology` tinyint(3) DEFAULT '1' COMMENT '种族(人鬼妖神魔异) 0未知',
  `state` int(3) DEFAULT '1' COMMENT '生物境界',
  `grade` int(11) DEFAULT '1' COMMENT '等级',
  `shengMing` int(11) DEFAULT '1' COMMENT '生命',
  `moFa` int(11) DEFAULT '1' COMMENT '魔法',
  `gongJi` int(11) DEFAULT '1' COMMENT '攻击',
  `huJia` int(11) DEFAULT '1' COMMENT '护甲',
  `faGong` int(11) DEFAULT '1' COMMENT '特攻',
  `fakang` int(11) DEFAULT '1' COMMENT '法抗',
  `suDu` int(11) DEFAULT '1' COMMENT '速度',
  `shanbi` int(11) DEFAULT '0' COMMENT '闪避',
  `baoji` int(11) DEFAULT '150' COMMENT '暴击',
  `baojilv` int(11) DEFAULT '0' COMMENT '暴击率',
  `shuaXin` int(11) DEFAULT '1' COMMENT '刷新次数',
  `xunLian` int(11) DEFAULT '3' COMMENT '训练次数',
  `jinJie` int(11) DEFAULT '1' COMMENT '进阶',
  `biologyid` int(11) DEFAULT '0' COMMENT '生物id',
  `reiki` int(11) DEFAULT '1' COMMENT '灵气',
  `power` int(11) DEFAULT '1' COMMENT '力量',
  `agile` int(11) DEFAULT '1' COMMENT '敏捷',
  `intelligence` int(11) DEFAULT '1' COMMENT '智力',
  `special` int(11) DEFAULT '1' COMMENT '评分 战力 (与属性有关*30.0的基础评分) 悟性 和基础属性',
  `score` int(11) DEFAULT '1' COMMENT '评分',
  `wuXing` int(11) DEFAULT '3' COMMENT '悟性-成长率 1-10  自由属性 ',
  `skill` varchar(255) DEFAULT '1' COMMENT '技能编号',
  `yuanShen` int(11) DEFAULT '0' COMMENT '元神',
  `fate` int(11) DEFAULT '0' COMMENT '缘分(武器缘分) 本命法宝（只有一个）武器库随机-命中注定',
  `type` int(3) NOT NULL DEFAULT '4' COMMENT '1普通 2特殊 3NPC 4不可用',
  `descript` varchar(255) DEFAULT NULL COMMENT '描述',
  `lucky` int(3) DEFAULT '1' COMMENT ' 幸运值-成长值-潜能-技能进阶-境界突破',
  `maxNature` int(11) DEFAULT '0' COMMENT '自由属性点',
  `qianNeng` int(3) DEFAULT '1' COMMENT '潜能--1-10次，战斗中有几率进化-增加1-10 悟性（越低级潜能越大）',
  `character` int(3) DEFAULT '1' COMMENT '性格',
  `picture` varchar(255) DEFAULT NULL COMMENT '生物图片 形象',
  `yiXing` tinyint(1) DEFAULT '0' COMMENT '异性 0 否1是',
  `sex` int(255) DEFAULT '1' COMMENT '性别',
  `jingBi` int(11) DEFAULT '1' COMMENT '金币',
  `jingYan` int(11) DEFAULT '1' COMMENT '经验',
  `jianShang` int(255) DEFAULT '0' COMMENT '减伤',
  `zhenShang` int(255) DEFAULT '0' COMMENT '增伤（真实伤害）',
  `color` varchar(25) DEFAULT '#fff' COMMENT '颜色（普通默认为白色）',
  `danDu` int(11) DEFAULT '0' COMMENT '丹毒100  大30每回合对自身造成生命值%的伤害',
  `scoreGrade` varchar(11) DEFAULT 'D' COMMENT '评分等级 D C A B S SS SSS 传说',
  `chuFa` int(3) DEFAULT '0' COMMENT '触发--最多叠加到100',
  `wordid` int(11) DEFAULT NULL COMMENT '世界编号',
  `jiBan` int(11) DEFAULT '1' COMMENT '羁绊',
  `experience` int(11) DEFAULT '0' COMMENT '升级经验 每级 等级*500的经验',
  `minPower` int(11) DEFAULT '10' COMMENT '最小力量',
  `minAgile` int(11) DEFAULT '10',
  `minIntelligence` int(11) DEFAULT '10' COMMENT '最小力量',
  `createid` int(11) DEFAULT '0' COMMENT '生物创造id',
  `percent` float(11,0) DEFAULT '0' COMMENT '经验条(单独增加）',
  `xiXue` int(11) DEFAULT '0' COMMENT '吸血',
  `shenFen` int(3) DEFAULT '1' COMMENT '身份 1普通  2精英   3头目  4主角   5命运',
  `siwang` int(11) DEFAULT '0' COMMENT '死亡    尸焰（死亡） 炽炀（残暴）',
  `jisha` int(11) DEFAULT '0' COMMENT '击杀  罗睺（魔道） 盘古（力道） 九江（重道） 乌冹（轻道） 砀殕（命运）',
  `fuhuo` int(11) DEFAULT '0' COMMENT '复活   后土专属技能--轮回 空冥（空间） 扬眉（时间） 灵木道人（生命）',
  `huDun` int(11) DEFAULT '0' COMMENT '护盾',
  `zhiLiao` int(11) DEFAULT '0' COMMENT '治疗',
  `zhenShi` int(11) DEFAULT '0' COMMENT '真实伤害',
  `wuDi` int(11) DEFAULT '0' COMMENT '无敌',
  `gooduse1` int(11) DEFAULT '0' COMMENT '装备栏1',
  `gooduse2` int(11) DEFAULT '0' COMMENT '装备栏2',
  `zhuanshen` int(11) DEFAULT '0' COMMENT '满60级转身次数  鸿钧专属技能-天道',
  `zhujiao` tinyint(11) DEFAULT '0' COMMENT '主角模型，不可以创建',
  `zPower` int(11) DEFAULT '0' COMMENT '附加力量',
  `zAgile` int(11) DEFAULT '0' COMMENT '附加敏捷',
  `zIntelligence` int(11) DEFAULT '0' COMMENT '附加智力',
  `shouyuan` int(11) DEFAULT '60' COMMENT '寿元',
  `shouyuanYear` int(11) DEFAULT '1' COMMENT '年龄',
  `wuXingTotal` int(11) DEFAULT '0' COMMENT '悟性值',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=194 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_biology_attribute
-- ----------------------------
INSERT INTO `x2_user_biology_attribute` VALUES ('174', '184', '1', '朱无视', '1', '1', '1', '298', '13', '70', '38', '84', '42', '9', '2', '150', '0', '1', '3', '1', '6', '15', '10', '17', '32', '716', '69', '3', '7', '7', '0', '1', '外号铁胆神侯，为当今皇上叔父。当年先皇驾崩前，唯恐正德年少，易被奸人操控，或无力主持朝政，不懂分辨忠奸，于是特令皇弟朱无视创立护龙山庄，权力可凌驾所有朝廷机构，并赐予先皇之丹书铁卷、尚方宝剑，可以上斩昏君，下斩谗臣，给了正德一个最高特务机构，制衡东厂。', '21', '0', '1', '1', '山贼', '0', '1', '150', '76', '22', '22', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '4', '9', '17', '199', '0', '0', '3', '0', '0', '0', '0', '0', '0', '0', '3', null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology_attribute` VALUES ('175', '185', '1', '万三千', '1', '1', '1', '392', '12', '78', '57', '94', '61', '9', '0', '150', '0', '1', '3', '1', '11', '26', '24', '5', '21', '898', '70', '6', '5,11', '7', '0', '1', '天下第一庄庄主，富甲天下。', '7', '0', '1', '1', '宫本', '0', '1', '152', '77', '9', '9', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '13', '3', '16', '200', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '6', null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology_attribute` VALUES ('176', '186', '1', '眠狂四郎', '1', '1', '1', '480', '11', '63', '32', '56', '30', '8', '1', '150', '0', '1', '3', '1', '15', '12', '33', '16', '9', '775', '58', '1', null, '7', '0', '1', '东瀛著名剑客眠狂四郎「幻剑」。', '15', '0', '1', '1', '宫本', '0', '1', '128', '65', '16', '16', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '21', '8', '7', '201', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '2', '2', '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology_attribute` VALUES ('177', '187', '1', '曹正淳', '1', '1', '1', '364', '13', '88', '58', '107', '62', '11', '2', '150', '0', '1', '3', '1', '9', '25', '17', '14', '33', '881', '74', '1', '11', '7', '0', '1', '东厂总管太监曹正淳。野心勃勃的曹正淳权势滔天，他修炼“童子功“大成、武功盖世\r\n天下第一\r\n天下第一(22张)\r\n ，又自恃掌管东厂，权倾朝野，结党营私，勾结贪官，陷害忠良，无恶不作。', '23', '0', '1', '1', '司马懿', '0', '1', '160', '81', '25', '25', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '3', '5', '11', '202', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '2', '2', '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology_attribute` VALUES ('178', '188', '1', '了空', '1', '1', '1', '374', '14', '92', '62', '112', '67', '12', '1', '150', '0', '1', '3', '1', '21', '27', '18', '13', '34', '900', '75', '4', '10', '7', '0', '1', '少林寺了空大师。', '17', '0', '1', '1', '貂蝉', '0', '1', '162', '82', '19', '19', '#FFFFFF', '0', 'A', '0', '1', '1', '0', '11', '5', '25', '203', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '3', '2', '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology_attribute` VALUES ('188', '198', '26', '洛克人', '6', '1', '1', '518', '11', '51', '29', '48', '28', '5', '2', '150', '0', '1', '3', '1', '37', '12', '40', '6', '3', '852', '59', '5', '53', '0', '0', '5', '', '23', '0', '1', '1', '洛克人', '0', '1', '130', '66', '24', '24', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '16', '3', '2', '216', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology_attribute` VALUES ('189', '199', '26', '张无忌', '1', '1', '1', '492', '12', '51', '18', '48', '18', '6', '1', '150', '0', '1', '3', '1', '23', '5', '33', '17', '14', '772', '74', '2', '5', '0', '0', '2', '柳生但马守是武侠电视剧《天下第一》中的角色，是著名剑客柳生十兵卫的父亲，也是武学宗师。', '10', '0', '1', '1', '宫本', '0', '1', '160', '81', '10', '10', '#FFFFFF', '0', 'S', '0', '1', '1', '0', '24', '11', '13', '217', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology_attribute` VALUES ('193', '203', '26', '魔法少女', '3', '1', '1', '350', '12', '61', '37', '68', '39', '7', '2', '150', '0', '1', '3', '1', '33', '16', '20', '9', '16', '701', '45', '12', null, '0', '0', '5', '', '28', '0', '1', '1', '魔法少女', '0', '1', '102', '52', '29', '29', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '11', '3', '8', '221', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology_attribute` VALUES ('191', '201', '26', '蘑菇', '5', '1', '1', '366', '12', '100', '67', '98', '66', '14', '1', '150', '0', '1', '3', '1', '36', '29', '19', '20', '18', '832', '57', '5', null, '0', '0', '5', '', '12', '0', '1', '1', '蘑菇', '0', '1', '126', '64', '14', '14', '#FFFFFF', '0', 'C', '0', '1', '1', '0', '2', '7', '1', '219', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');
INSERT INTO `x2_user_biology_attribute` VALUES ('192', '202', '26', '曹正淳', '1', '1', '1', '406', '13', '99', '60', '106', '62', '14', '2', '150', '0', '1', '3', '1', '9', '25', '20', '23', '30', '888', '73', '7', null, '0', '0', '1', '东厂总管太监曹正淳。野心勃勃的曹正淳权势滔天，他修炼“童子功“大成、武功盖世\r\n天下第一\r\n天下第一(22张)\r\n ，又自恃掌管东厂，权倾朝野，结党营私，勾结贪官，陷害忠良，无恶不作。', '23', '0', '1', '1', '宫本', '0', '1', '158', '80', '25', '25', '#FFFFFF', '0', 'B', '0', '1', '1', '0', '3', '5', '11', '220', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', null, null, '0', '0', '0', '0', '0', '60', '1', '0');

-- ----------------------------
-- Table structure for x2_user_biology_attribute_old
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_biology_attribute_old`;
CREATE TABLE `x2_user_biology_attribute_old` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '战斗属性表',
  `biologyid` int(11) NOT NULL DEFAULT '0' COMMENT '生物id',
  `name` varchar(25) DEFAULT NULL COMMENT '生物名称',
  `biology` tinyint(3) DEFAULT '1' COMMENT '生物属性(神魔人鬼妖五行混沌) 0未知',
  `grade` int(11) DEFAULT '1' COMMENT '等级',
  `shengMing` int(11) DEFAULT '1' COMMENT '生命',
  `moFa` int(11) DEFAULT '1' COMMENT '魔法',
  `gongJi` int(11) DEFAULT '1' COMMENT '攻击',
  `huJia` int(11) DEFAULT '1' COMMENT '护甲',
  `faGong` int(11) DEFAULT '1' COMMENT '特攻',
  `fakang` int(11) DEFAULT '1' COMMENT '法抗',
  `suDu` int(11) DEFAULT '1' COMMENT '速度',
  `shanbi` int(11) DEFAULT '0' COMMENT '闪避',
  `baoji` int(11) DEFAULT '0' COMMENT '暴击',
  `baojilv` int(11) DEFAULT '0' COMMENT '暴击率',
  `shuaXin` int(11) DEFAULT '1' COMMENT '刷新次数',
  `xunLian` int(11) DEFAULT '3' COMMENT '训练次数',
  `state` int(3) DEFAULT '1' COMMENT '生物境界',
  `jinJie` int(11) DEFAULT '1' COMMENT '生物id',
  `reiki` int(11) DEFAULT '1' COMMENT '灵气',
  `power` int(11) DEFAULT '1' COMMENT '力量',
  `agile` int(11) DEFAULT '1' COMMENT '敏捷',
  `intelligence` int(11) DEFAULT '1' COMMENT '智力',
  `special` int(11) DEFAULT '1' COMMENT '评分 战力 (与属性有关*30.0的基础评分) 悟性 和基础属性',
  `score` int(11) DEFAULT '1' COMMENT '评分',
  `wuXing` int(11) DEFAULT '3' COMMENT '悟性-成长率 1-10  自由属性 ',
  `skill` int(11) DEFAULT '1' COMMENT '技能编号',
  `yuanShen` int(11) DEFAULT '0' COMMENT '元神',
  `Fate` int(11) DEFAULT '1' COMMENT '缘分(武器缘分) 本命法宝（只有一个）武器库随机-命中注定',
  `type` int(3) DEFAULT '1' COMMENT '1普通 2商店 3NPC',
  `descript` int(255) DEFAULT NULL COMMENT '描述',
  `lucky` int(3) DEFAULT '1' COMMENT ' 幸运值-成长值-潜能-技能进阶-境界突破',
  `maxNature` int(11) DEFAULT '10' COMMENT '自由属性点',
  `qianNeng` int(3) DEFAULT '1' COMMENT '潜能--1-10次，战斗中有几率进化-增加1-10 悟性（越低级潜能越大）',
  `character` int(3) DEFAULT '1' COMMENT '性格',
  `headerPicture` varchar(255) DEFAULT NULL COMMENT '头像',
  `Picture` varchar(255) DEFAULT NULL COMMENT '生物图片',
  `yiXing` tinyint(1) DEFAULT '0' COMMENT '异性 0 否1是',
  `sex` int(1) DEFAULT '0' COMMENT '性别',
  `jiBan` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_biology_attribute_old
-- ----------------------------
INSERT INTO `x2_user_biology_attribute_old` VALUES ('1', '0', null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '3', '1', '1', '1', '1', '1', '1', '1', '1', '3', '1', '0', '1', '1', null, '1', '10', '1', '1', null, null, '0', '0', null);
INSERT INTO `x2_user_biology_attribute_old` VALUES ('2', '0', null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '3', '1', '1', '1', '1', '1', '1', '1', '1', '3', '1', '0', '1', '1', null, '1', '10', '1', '1', null, null, '0', '0', null);
INSERT INTO `x2_user_biology_attribute_old` VALUES ('3', '0', null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '3', '1', '1', '1', '1', '1', '1', '1', '1', '3', '1', '0', '1', '1', null, '1', '10', '1', '1', null, null, '0', '0', '1');

-- ----------------------------
-- Table structure for x2_user_biology_cangku
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_biology_cangku`;
CREATE TABLE `x2_user_biology_cangku` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户仓库',
  `userid` int(11) DEFAULT NULL COMMENT '用户id',
  `number` int(11) DEFAULT NULL COMMENT '仓库编号',
  `biologyid` varchar(255) DEFAULT NULL COMMENT '生物编号',
  `status` int(11) DEFAULT '0' COMMENT '是否解锁0不可用1可用',
  `intable` varchar(50) DEFAULT NULL COMMENT '所在的附表--按顺序生成5个固定附表',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_biology_cangku
-- ----------------------------
INSERT INTO `x2_user_biology_cangku` VALUES ('1', '1', '1', '1,2,3', '1', 'x2_user_biology_cangku_1');
INSERT INTO `x2_user_biology_cangku` VALUES ('2', '1', '1', '1,2,3', '1', 'x2_user_biology_cangku_2');

-- ----------------------------
-- Table structure for x2_user_biology_nature_do
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_biology_nature_do`;
CREATE TABLE `x2_user_biology_nature_do` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '阵法',
  `do1` int(11) DEFAULT NULL COMMENT '战斗位置1  生物id',
  `do2` int(11) DEFAULT NULL COMMENT '战斗位置2 生物id',
  `do3` int(11) DEFAULT NULL COMMENT '战斗位置',
  `do4` int(11) DEFAULT NULL COMMENT '战斗位置',
  `do5` int(11) DEFAULT NULL COMMENT '战斗位置',
  `do6` int(11) DEFAULT NULL COMMENT '战斗位置',
  `do7` int(11) DEFAULT NULL COMMENT '战斗位置',
  `do8` int(11) DEFAULT NULL COMMENT '战斗位置',
  `do9` int(11) DEFAULT NULL COMMENT '战斗位置',
  `doNature` int(11) DEFAULT '0' COMMENT '阵法编号物品id',
  `userid` int(11) DEFAULT '0' COMMENT '用户id,0系统默认',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_biology_nature_do
-- ----------------------------
INSERT INTO `x2_user_biology_nature_do` VALUES ('2', '186', '185', null, null, '184', '187', '188', null, null, '0', '1');
INSERT INTO `x2_user_biology_nature_do` VALUES ('3', null, null, null, null, '173', '172', null, null, null, '0', '2');
INSERT INTO `x2_user_biology_nature_do` VALUES ('1', null, '173', null, null, null, null, null, null, null, '0', '0');
INSERT INTO `x2_user_biology_nature_do` VALUES ('26', null, '199', null, '203', null, '198', null, null, null, '0', '26');

-- ----------------------------
-- Table structure for x2_user_biology_packet
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_biology_packet`;
CREATE TABLE `x2_user_biology_packet` (
  `id` int(11) DEFAULT NULL COMMENT '生物背包(装备栏)1武器 2丹药 3技能 4消耗品 5材料',
  `userGoodsid` int(11) DEFAULT '0' COMMENT '用户物品编号'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_biology_packet
-- ----------------------------

-- ----------------------------
-- Table structure for x2_user_biology_skill
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_biology_skill`;
CREATE TABLE `x2_user_biology_skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userBiologyid` int(255) DEFAULT NULL COMMENT '生物id',
  `skillid` int(11) DEFAULT NULL COMMENT '技能id',
  `grade` tinyint(2) DEFAULT '1' COMMENT '技能等级',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_biology_skill
-- ----------------------------
INSERT INTO `x2_user_biology_skill` VALUES ('1', '1', '1', '1');

-- ----------------------------
-- Table structure for x2_user_goods
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_goods`;
CREATE TABLE `x2_user_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '武器表',
  `name` varchar(255) DEFAULT NULL,
  `type` int(255) DEFAULT '1' COMMENT 'type 1可用 2不可用',
  `point` varchar(255) DEFAULT NULL COMMENT '图标',
  `value` int(11) DEFAULT '0' COMMENT '基础白值属性',
  `percent` int(11) DEFAULT '10' COMMENT '百分比10-100 人(白 绿 蓝 紫 金 红 橙) 鬼仙神（彩） 1-10 分5品不可洗练',
  `describe` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT '0' COMMENT '属性条数 最多9条',
  `belong` int(11) DEFAULT '0' COMMENT '有id标识 说明 可以合成',
  `tilian` int(11) DEFAULT '0' COMMENT '提炼--铁之精华 --药之精华  根据品质提炼',
  `grade` int(11) DEFAULT '1' COMMENT '物品等级默认为1  武器（1-20）   丹药丹毒（1-20）',
  `wordId` int(11) DEFAULT '0' COMMENT '世界id  0不属于任何世界的特殊物品',
  `gooduse` int(11) DEFAULT '1' COMMENT '物品类型 参考goods_use表',
  `usetype` int(11) DEFAULT NULL COMMENT '使用类型1材料 2使用 3合成',
  `selltype` int(11) DEFAULT '0' COMMENT '购买类型  0不可购买 1金币 2 灵石',
  `sellout` int(11) DEFAULT '0' COMMENT '卖出价格',
  `price` int(11) DEFAULT '0' COMMENT '价格',
  `percenttype` varchar(255) DEFAULT '残破' COMMENT ' 残破 劣质 普通 良好 优质 稀有 极品 完美 传说 神话',
  `goodsid` int(11) DEFAULT '0' COMMENT '物品初始id',
  `wordType` int(11) DEFAULT '1' COMMENT '1低武世界',
  `userid` int(11) DEFAULT '0',
  `total` int(11) DEFAULT '1' COMMENT '拥有数量，普通不变属性才可以累计',
  `skillid` int(11) DEFAULT '0' COMMENT '技能id',
  `is_bag` tinyint(1) DEFAULT '0' COMMENT '是否装备0 未装备 1 已装备',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=116 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_goods
-- ----------------------------
INSERT INTO `x2_user_goods` VALUES ('1', '戮仙剑', '2', '仙剑', '10', '70', '诛仙套装之一戮仙剑', '5', '5', '100', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '1');
INSERT INTO `x2_user_goods` VALUES ('2', '诛仙剑', '2', '仙剑', '10', '70', '诛仙套装之一诛仙剑', '5', '5', '100', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '1');
INSERT INTO `x2_user_goods` VALUES ('3', '陷仙剑', '2', '仙剑', '10', '70', '诛仙套装之一陷仙剑', '5', '5', '100', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('4', '绝仙剑', '2', '仙剑', '10', '70', '诛仙套装之一绝仙剑', '5', '5', '100', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('5', '诛仙剑阵', '2', '剑', '1', '80', '诛仙剑阵，由戮仙剑，诛仙剑，绝仙剑，陷仙剑组，诛仙阵图成。', '6', '5', '100', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('6', '盘古斧', '2', '恶魔召唤', '1', '80', '盘古开天神器，盘古牙齿所化。', '6', '0', '500', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '1');
INSERT INTO `x2_user_goods` VALUES ('7', '后裔元神', '1', '药水绿色', '2000', '10', '上古大雾巫后裔元神', '0', '0', '1', '1', '1', '7', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('8', '承影', '1', '抵消疾病', '2000', '20', '上古十大名剑之一。', '1', '0', '20', '1', '1', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('9', '铁剑', '1', '彩蛋', '2000', '20', '普通铁剑，没什么大用处。', '1', '0', '40', '1', '1', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('10', '钢刀', '1', '彩蛋', '2000', '20', '普通铁剑，没什么大用处。', '1', '0', '60', '1', '1', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('11', '玄铁重剑', '1', '彩蛋', '2000', '10', '玄铁重剑，重达4万万斤，由千年玄铁打造而成。', '0', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('12', '天运丹', '1', '彩蛋', '10', '10', '截命运之力炼制而成，服之可增加幸运值。', '1', '0', '100', '20', '0', '2', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('13', '蜕凡丹', '1', '彩蛋', '100', '10', '一种可以增强体质的丹药。', '1', '0', '100', '1', '0', '2', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('14', '生生丹', '1', '彩蛋', '1000', '10', '传说可以增加寿命100年的丹药。', '1', '0', '100', '1', '0', '2', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('15', '人生果', '1', '彩蛋', '10000', '10', '三千一开花，三千年一结果，服之可增寿5000年', '1', '12', '100', '10', '0', '2', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('16', '千年蟠桃', '1', '彩蛋', '10000', '10', '千年蟠桃，服之可增寿3000年', '1', '12', '100', '10', '0', '2', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('17', '黄泉仙酿', '1', '彩蛋', '10000', '10', '服之可增寿2000年', '1', '12', '100', '10', '0', '2', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('19', '诛仙阵', '2', '彩蛋', '1', '10', '以诛仙四仙剑布阵，有诛仙阵图，和四仙剑，通天教主传多宝道人。', '9', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('18', '万仙阵', '2', '彩蛋', '10', '10', '通天门下弟子，由通天教主和他座下四大弟子主持。', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('20', '四象阵', '2', '彩蛋', '10', '10', '金光仙（金毛吼', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('21', '三才阵', '2', '恶魔召唤', '10', '10', '天地人三才组成。', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('22', '太极阵', '2', '恶魔召唤', '10', '10', '乌云仙（长须黑面，皂服丝绦，混元锤，金须鳌鱼），青首仙（青毛狮子）', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('23', '八卦阵', '2', '恶魔召唤', '10', '10', '太极生两仪，两仪生四相，四相生八卦，八卦而变六十四爻，从此周而复始变化无穷。', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('24', '十二都天门阵', '2', '恶魔召唤', '10', '10', '十二祖巫组成。', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('25', '北斗七星阵', '2', '恶魔召唤', '10', '10', '道教一元、两仪、三才、四相、五行、六合、七星、八卦、九宫的流变规律', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('26', '周天星斗大阵', '2', '恶魔召唤', '10', '10', '巫妖大战时，\r\n三百六十五位大妖所布置。', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('27', '九曲黄河阵', '2', '恶魔召唤', '10', '10', '云霄。内按叁才，包藏天地之妙，中有惑仙丹闭仙诀，能失仙之神，消仙之魄，陷仙之形，损仙之气，丧神仙之原本，捐神仙之肢体。神仙入此成凡人，凡人入此即绝命。九曲曲中无直，曲尽造化之奇，抉尽神仙之基，任他叁教圣人，遭此亦难逃脱。', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('28', '河洛大阵', '2', '恶魔召唤', '10', '10', '阵眼为河图，洛书。', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('29', '罗汉阵', '2', '恶魔召唤', '10', '10', '佛门阵法。', '6', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('30', '十绝阵', '2', '恶魔召唤', '0', '10', '由十天君主持的十个小阵组成。', '9', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('31', '天绝阵', '2', '恶魔召唤', '100', '10', '演先天之数，得先天清气；内藏混沌之机，中有三首幡，按天地人三才，共合为一气。若人入此阵内，有雷鸣之处，化作灰尘；仙道若逢此处，肢体震为粉碎，故曰“天绝阵”。', '5', '30', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('32', '地烈阵', '2', '恶魔召唤', '100', '10', '烈成分浊厚，上雷下火太无情；就是五行乾健体，难逃骨化与形倾。', '5', '30', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('33', '风吼阵', '2', '恶魔召唤', '100', '10', '按地水火风之数，内有风火，此风火乃先天之气，叁昧真火，百万兵刃，从中而出。若神仙进此阵，风火交作，万刃齐攒，四肢立成齑粉；怕他有倒海移山之异术，难免身体化成脓血。（八角鹿，太阿双剑）', '5', '30', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('34', '寒冰阵', '2', '恶魔召唤', '100', '10', '名为寒水，实为刀山；内藏玄妙，中有风雷，上有冰山如狼牙，下有冰块如刀剑。若神仙入此阵，风雷动处，上下一磕，四肢立成齑粉，纵有异术，离免此难。', '5', '30', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('35', '金光阵', '2', '恶魔召唤', '100', '10', '夺日月之精，藏天地之气，中有二十一面宝镜，用二十一根杆，每一面应在杆顶上，一镜上有一套。若人仙入阵，将此套拽起，雷声震动镜子，只一二转，金光射出，照住其身，立刻化为浓血，纵会飞腾，难越此阵。', '5', '30', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('36', '化血阵', '2', '恶魔召唤', '100', '10', '用先天灵气，中有风雷，内藏数斗黑沙。但神仙入阵，雷响处风卷黑沙，些须着处，立化血水，纵是神仙难逃利害。', '5', '30', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('37', '白天君烈阵', '2', '恶魔召唤', '100', '10', '妙用无穷，非同凡品：内藏叁火，有叁昧火，空中火，石中火，叁火并为一气；中有叁首红，若神仙进此阵内，叁展动，叁火齐飞，须火成为灰烬，纵有避火真言，难躲叁昧真火。', '5', '30', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('38', '姚天君落魂阵', '2', '恶魔召唤', '100', '10', '闭生门，开死户，中藏天地厉气，结聚而成；内有白纸一首，上画符印，若神仙入阵内，白旌展动，魂魄消散，倾刻而灭，不论神仙，随入随灭。', '5', '30', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('39', '王天君红水阵', '2', '恶魔召唤', '100', '10', '夺壬癸之精，藏太乙之妙，变幻莫测；中有一八卦台，上有一二个葫芦，任随人仙入阵，将葫芦往下一掷，倾出红水，汪洋无际。若是水溅出一点，黏在身上，顷刻化为血水，纵是神仙，无术可逃。', '5', '30', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('40', '张天君红沙阵', '2', '恶魔召唤', '100', '10', '内按天地人叁寸，中分叁气，内藏红砂叁斗，看似红砂，着身利刃，上不知天，下不知地，中不知人；若人仙冲入此阵，风雷运处，飞砂伤人，立刻骸鼻俱成齑粉，纵有神仙佛祖遭此，再不能逃。', '5', '30', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('41', '两仪阵', '2', '恶魔召唤', '100', '10', '灵牙仙（白象）', '5', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('42', '瘟癀阵', '2', '恶魔召唤', '100', '10', '九龙岛吕岳、陈庚。二十一把瘟癀伞，按九宫八卦排列，中有土台。', '5', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('43', '血河大阵', '2', '恶魔召唤', '100', '10', '冥河老祖以十万八千辆血河车所布置。', '5', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('44', '两仪微尘大阵', '2', '恶魔召唤', '100', '10', '老子以混元一气太清神符布置。', '5', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('45', '五方大阵', '2', '恶魔召唤', '100', '10', '由素色云界旗，青莲宝色旗，玄元控水旗，离地焰光旗，玉虚杏黄旗布置', '5', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('46', '九宫仙阵', '2', '恶魔召唤', '100', '10', '由九把九宫剑布置而成，在蜀山里仅次于两仪微尘大阵', '5', '0', '0', '1', '0', '1', '2', '0', '0', null, null, '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('47', '破封石', '1', '恶魔召唤', '10', '10', '可以破除封印，提升武器品阶。', '0', '0', '0', '1', '0', '2', '2', '1', '99800', '998', '神话', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('48', '木箱', '1', '恶魔召唤', '1000', '10', '开出1-6境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '2', '2', '1', '5000', '50', '稀有', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('49', '铁箱', '1', '恶魔召唤', '500', '10', '开出2-8境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '2', '2', '1', '8000', '80', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('50', '银箱', '1', '恶魔召唤', '100', '10', '开出6-12境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '2', '2', '1', '20000', '200', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('51', '金箱', '1', '恶魔召唤', '50', '10', '开出8-16境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '2', '2', '1', '80000', '800', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('52', '玉盒', '1', '恶魔召唤', '20', '10', '开出12-18境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '2', '2', '1', '240000', '2400', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('53', '仙盒', '1', '恶魔召唤', '2', '10', '开出16-20境界武器、技能或者丹药。', '0', '0', '0', '1', '0', '2', '2', '1', '500000', '5000', '神话', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('54', '人仙令', '1', '恶魔召唤', '500', '10', '召唤令，人族生物', '0', '0', '0', '1', '0', '2', '2', '1', '5000', '10000', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('55', '魔仙令', '1', '恶魔召唤', '500', '10', '召唤令，魔族生物', '0', '0', '0', '1', '0', '2', '2', '1', '8000', '16000', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('56', '妖仙令', '1', '恶魔召唤', '500', '10', '召唤令，妖族生物', '0', '0', '0', '1', '0', '2', '2', '1', '8000', '16000', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('57', '鬼仙令', '1', '恶魔召唤', '500', '10', '召唤令，鬼族生物', '0', '0', '0', '1', '0', '2', '2', '1', '8000', '16000', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('58', '仙神令', '1', '恶魔召唤', '500', '10', '召唤令，仙族生物', '0', '0', '0', '1', '0', '2', '2', '1', '8000', '16000', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('59', '兽仙令', '1', '恶魔召唤', '500', '10', '召唤令，兽族生物', '0', '0', '0', '1', '0', '2', '2', '1', '8000', '16000', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('60', '灵仙令', '1', '恶魔召唤', '500', '10', '召唤令，灵族生物', '0', '0', '0', '1', '0', '2', '2', '1', '12000', '24000', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('61', '异仙令', '1', '恶魔召唤', '500', '10', '召唤令，异族生物', '0', '0', '0', '1', '0', '2', '2', '1', '15000', '30000', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('62', '万仙令', '1', '恶魔召唤', '200', '10', '随机召唤令，人妖鬼神魔兽灵异。', '0', '0', '0', '1', '0', '2', '2', '1', '10000', '20000', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('63', '神魔令', '1', '恶魔召唤', '10', '10', '特殊召唤随机世界生物', '0', '0', '0', '1', '0', '2', '2', '1', '99800', '998', '神话', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('64', '精魄', '1', '恶魔召唤', '2000', '10', '生物精魄，消耗100精魄可随机合成万仙令，生物分解可获得相应评分的精魄。1000金币=1精魄', '0', '0', '0', '1', '0', '2', '3', '1', '100', '0', '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('65', '灵药', '1', '恶魔召唤', '2000', '10', '草木精华，可用于炼丹强化。丹药分解可获得相应评分的灵药。3000金币=1灵药', '0', '0', '0', '1', '0', '2', '3', '1', '300', '0', '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('66', '铁精', '1', '恶魔召唤', '2000', '10', '锻冶之精华，可用于炼器强化。武器分解可获得相应评分的铁精。2000金币=1铁精', '0', '0', '0', '1', '0', '2', '3', '1', '200', '0', '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('67', '元神', '1', '恶魔召唤', '100', '10', '随机生物元神，附带生物技能。', '0', '0', '0', '1', '0', '2', '2', '1', '12600', '126', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('68', '朱果', '1', '恶魔召唤', '1000', '10', '刷新生物属性，凤凰血而生，服用后有脱胎换骨的功效。', '0', '0', '0', '1', '0', '1', '2', '1', '1000', '10', '稀有', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('69', '星辰石', '1', '恶魔召唤', '1000', '10', '武器洗炼', '0', '0', '0', '1', '0', '2', '2', '1', '1000', '10', '稀有', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('70', '生生不熄', '1', '恶魔召唤', '1000', '10', '体力值+20', '0', '0', '0', '1', '0', '2', '2', '1', '1000', '10000', '稀有', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('71', '传送石', '1', '恶魔召唤', '100', '10', '随机秘境，对应世界，生物难度。9个标记，可能物品，可能战斗，可能空，可组队，全部死亡退出场景。', '0', '0', '0', '1', '0', '2', '2', '1', '48800', '488', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('72', '本源之力', '1', '恶魔召唤', '100', '10', '本源之力，用于主角突破自身境界。', '0', '0', '0', '1', '0', '2', '2', '1', '15000', '30000', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('73', '三生石', '1', '恶魔召唤', '200', '10', '生物缘分刷新', '0', '0', '0', '1', '0', '2', '2', '1', '10000', '20000', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('74', '功法玉简', '1', '恶魔召唤', '200', '10', '获得随机技能书一本', '0', '0', '0', '1', '0', '2', '2', '1', '9800', '98', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('75', '忘情水', '1', '恶魔召唤', '200', '10', '修改角色名称。', '0', '0', '0', '1', '0', '2', '2', '1', '28800', '288', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('76', '破界符', '1', '恶魔召唤', '100', '10', '强制掠夺，胜利可以获得对方10%金币。', '0', '0', '0', '1', '0', '2', '2', '1', '10000', '100', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('77', '符石', '1', '恶魔召唤', '300', '10', '使用可获随机获得符石。', '0', '0', '0', '1', '0', '2', '2', '1', '3600', '126', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('78', '彩虹泪', '1', '恶魔召唤', '100', '10', '可改变异形颜色', '0', '0', '0', '1', '0', '2', '2', '1', '16800', '168', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('79', '神石', '1', '恶魔召唤', '100', '10', '20神石可合成神魔令，特殊召唤随机世界生物', '0', '0', '0', '1', '0', '2', '3', '1', '5000', '50', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('80', '鸿蒙紫气', '1', '恶魔召唤', '1', '10', '服用鸿蒙紫气，方挑战圣境。', '0', '0', '0', '1', '0', '2', '2', '1', '999900', '9999', '神话', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('81', '盘古石', '1', '恶魔召唤', '5', '10', '服用后，可学习任意种族技能一次。', '0', '0', '0', '1', '0', '2', '2', '1', '482000', '4820', '神话', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('82', '孟婆汤', '1', '恶魔召唤', '1000', '10', '生物转生，重塑肉身，不保留境界。', '0', '0', '0', '1', '0', '2', '2', '1', '3000', '30000', '稀有', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('83', '潜能', '1', '恶魔召唤', '60', '10', '随机学习生物天生技能', '0', '0', '0', '1', '0', '2', '2', '1', '36000', '360', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('84', '技能绑定石', '1', '恶魔召唤', '100', '10', '绑定技能。', '0', '0', '0', '1', '0', '2', '2', '1', '20000', '200000', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('85', '阵法石', '1', '恶魔召唤', '50', '10', '使用后获得随机阵法', '0', '0', '0', '1', '0', '2', '2', '1', '78000', '780000', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('86', '道果', '1', '恶魔召唤', '300', '10', '生物使用后，三围增加50', '0', '0', '0', '1', '0', '2', '2', '1', '66600', '666', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('87', '仙魔石', '1', '恶魔召唤', '500', '10', '可以使人性情大变，刷新生物性格', '0', '0', '0', '1', '0', '2', '2', '1', '2000', '20', '完美', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('88', '藏宝图', '1', '恶魔召唤', '1000', '10', '九宫格，每次挖掘消耗藏宝图+1', '0', '0', '0', '1', '0', '2', '2', '1', '800', '4000', '稀有', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('89', '契约仙果', '1', '恶魔召唤', '80', '10', '使用后无法融合，无法交易，成长+1，异形+2', '0', '0', '0', '1', '0', '2', '2', '1', '999999', '999999', '传说', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('90', '仙炼石', '1', '恶魔召唤', '10', '10', '可以仙炼武器', '0', '0', '0', '1', '0', '8', '8', '1', '0', null, '神话', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('91', '妖炼石', '1', '恶魔召唤', '10', '10', '可以妖炼武器', '0', '0', '0', '1', '0', '8', '8', '1', '0', null, '神话', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('92', '神炼石', '1', '恶魔召唤', '10', '10', '可以神炼武器', '0', '0', '0', '1', '0', '8', '8', '1', '0', null, '神话', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('93', '何首乌', '1', '恶魔召唤', '2000', '10', '普通药材', '0', '0', '0', '1', '0', '4', '4', '1', '600', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('94', '千年人参', '1', '恶魔召唤', '1000', '10', '千年人参，有极大的药效。', '0', '0', '0', '1', '0', '4', '4', '1', '2000', null, '稀有', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('95', '金币', '1', '恶魔召唤', '2000', '10', '金币堆，可以卖钱。', '0', '0', '0', '1', '0', '4', '4', '1', '100', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('96', '灵石', '1', '恶魔召唤', '2000', '10', '灵石堆，可以卖钱。', '0', '0', '0', '1', '0', '4', '4', '1', '500', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('97', '金矿', '1', '恶魔召唤', '1000', '10', '发现金矿，可以卖钱。', '0', '0', '0', '1', '0', '4', '4', '1', '1000', null, '稀有', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('98', '灵脉', '1', '恶魔召唤', '1000', '10', '发现灵脉，可以卖钱。', '0', '0', '0', '1', '0', '4', '4', '1', '3000', null, '稀有', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('99', '百年人参', '1', '恶魔召唤', '2000', '10', '百年人参，药效较低。', '0', '0', '0', '1', '0', '4', '4', '1', '800', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('100', '雕像', '1', '恶魔召唤', '2000', '10', '一个残破的雕像。', '0', '0', '0', '1', '0', '4', '4', '1', '200', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('101', '龙凤镯', '1', '恶魔召唤', '2000', '10', '一块普通手镯。', '0', '0', '0', '1', '0', '4', '4', '1', '600', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('102', '古玉', '1', '恶魔召唤', '2000', '10', '一块古玉。', '0', '0', '0', '1', '0', '4', '4', '1', '500', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('103', '夜明珠', '1', '恶魔召唤', '2000', '10', '夜明珠', '0', '0', '0', '1', '0', '4', '4', '1', '400', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('104', '琉璃盏', '1', '恶魔召唤', '2000', '10', '一个普通琉璃盏', '0', '0', '0', '1', '0', '4', '4', '1', '1200', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('105', '五牛图', '1', '恶魔召唤', '10', '10', '韩滉（723～787）中国唐代画家。字太冲 。长安（今陕 西西安）人，代表作《五牛图》', '0', '0', '0', '1', '0', '4', '4', '1', '860', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('106', '捣练图', '1', '恶魔召唤', '0', '10', '张萱，京兆（今陕西西安）人，生卒年不详，代表作有《虢国夫专人游春图》、《捣练图》', '0', '0', '0', '1', '0', '4', '4', '1', '650', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('107', '兰亭知集序', '1', '恶魔召唤', '0', '10', '王羲之（303—361年），字逸少，号澹（dān），代表作【兰亭知集序】', '0', '0', '0', '1', '0', '4', '4', '1', '360', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('108', '金桥图', '1', '恶魔召唤', '0', '10', '吴道子(约686～760前后) 后改名道玄，尊称吴生，阳翟（今河南省禹县）人。代表作《金桥图》', '0', '0', '0', '1', '0', '4', '4', '1', '420', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('109', '历属代帝王图', '1', '恶魔召唤', '0', '10', '阎立本：（601-673）唐代雍州万年人。隋代画家阎毗之子，阎立德之弟。代表作《历属代帝王图》', '0', '0', '0', '1', '0', '4', '4', '1', '330', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('110', '玄秘塔碑', '1', '恶魔召唤', '0', '10', ' 柳公权( 778－道865 )，唐朝最后一位大书法家，京兆华原（今陕西耀县）人。代表作<玄秘塔碑>', '0', '0', '0', '1', '0', '4', '4', '1', '280', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('111', '争座位帖', '1', '恶魔召唤', '0', '10', '颜真卿（709-785年），唐代杰出书法家，伟大的爱国者。汉族，字清臣，琅琊孝悌里（今临沂市费县诸满村）人。代表作《争座位帖》', '0', '0', '0', '1', '0', '4', '4', '1', '688', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('112', '青花瓷', '1', '恶魔召唤', '0', '10', '青花瓷', '0', '0', '0', '1', '0', '4', '4', '1', '200', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('113', '清明上河图', '1', '恶魔召唤', '0', '10', '清明上河图', '0', '0', '0', '1', '0', '4', '4', '1', '1000', null, '普通', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('114', '强生丹', '1', '恶魔召唤', '0', '10', '力量+10,服之可增加一牛之力。', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '残破', '0', '1', '1', '1', '0', '0');
INSERT INTO `x2_user_goods` VALUES ('115', '农夫三拳', '1', '恶魔召唤', '0', '10', null, '0', '0', '0', '1', '0', '12', '12', '0', '0', '0', '残破', '0', '1', '1', '1', '0', '0');

-- ----------------------------
-- Table structure for x2_user_goods_nature
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_goods_nature`;
CREATE TABLE `x2_user_goods_nature` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '物品属性表 附加属性',
  `goodsid` int(11) DEFAULT NULL COMMENT '物品id',
  `name` varchar(255) DEFAULT NULL COMMENT '物品名称',
  `extend` varchar(25) DEFAULT 'gongJi' COMMENT '伤害类型',
  `formula` varchar(100) DEFAULT NULL COMMENT '公式',
  `status` varchar(25) DEFAULT 'gongJi' COMMENT '公式伤害计算(爆率 法术 攻击 法伤  智力 敏捷 力量)',
  `isadd` tinyint(1) DEFAULT '0' COMMENT '伤害公式0减少1增加',
  `value` int(11) DEFAULT '0' COMMENT '成长增幅百分比,每级提升百分之1的效果.融合功法概率提升或掉落',
  `hurt` int(11) DEFAULT '0' COMMENT '伤害 固定伤害值 -数为减少',
  `type` int(11) DEFAULT '1' COMMENT '物品类型  1 白值  2附加属性',
  `userid` int(11) DEFAULT '0' COMMENT '用户id',
  `percent` int(11) DEFAULT '0' COMMENT '强化value值,最多9次，物品表品质区间 1-10  残破 劣质 普通 良好 优质  极品 稀有 完美 传说 神话',
  `using` tinyint(1) DEFAULT '0' COMMENT '属性 状态是否激活0未使用 1使用',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_goods_nature
-- ----------------------------
INSERT INTO `x2_user_goods_nature` VALUES ('1', '1', '戮仙剑', 'gongJi', null, 'gongJi', '0', '2', '10000', '1', '1', '1', '1', '攻击+1w');
INSERT INTO `x2_user_goods_nature` VALUES ('2', '1', '戮仙剑', 'gongJi', '*0.1', 'gongJi', '1', '0', '0', '1', '1', '1', '1', '攻击+10%');
INSERT INTO `x2_user_goods_nature` VALUES ('3', '4', '天运丹', 'lucky', null, 'gongJi', '0', '0', '0', '2', '1', '1', '1', null);
INSERT INTO `x2_user_goods_nature` VALUES ('4', '5', '破天阵', 'gongJi', '*0.1', 'gongJi', '0', '0', '0', '1', '0', '0', '0', '攻击提升10%');
INSERT INTO `x2_user_goods_nature` VALUES ('5', '2', '诛仙剑', 'huJia', null, 'huJia', '0', '0', '20000', '1', '0', '0', '0', '护甲+2w');
INSERT INTO `x2_user_goods_nature` VALUES ('6', '2', '诛仙剑', 'gongJi', null, 'gongJi', '0', '0', '3000', '1', '0', '0', '0', '攻击+3000');
INSERT INTO `x2_user_goods_nature` VALUES ('7', '7', '后裔元神', 'gongJi', null, 'gongJi', '0', '0', '5000', '1', '0', '0', '0', '攻击+5000');

-- ----------------------------
-- Table structure for x2_user_handbook
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_handbook`;
CREATE TABLE `x2_user_handbook` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '图鉴表',
  `biologyid` int(11) DEFAULT NULL COMMENT '图鉴id',
  `userid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_handbook
-- ----------------------------
INSERT INTO `x2_user_handbook` VALUES ('1', '1', '1');

-- ----------------------------
-- Table structure for x2_user_login
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_login`;
CREATE TABLE `x2_user_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `loginname` varchar(25) DEFAULT NULL,
  `password` varchar(25) DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL,
  `createTime` varchar(25) DEFAULT NULL,
  `token` varchar(50) DEFAULT NULL,
  `ip` varchar(25) DEFAULT NULL,
  `server` int(11) DEFAULT '1' COMMENT '服务端',
  `color` varchar(25) DEFAULT NULL,
  `userid` int(11) DEFAULT '0' COMMENT '登录后的角色id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_login
-- ----------------------------
INSERT INTO `x2_user_login` VALUES ('1', 'yincan1993', '123456', '18181941463', null, '04d47564561b40edbec2b0001e45cf74', null, '1', null, '1');
INSERT INTO `x2_user_login` VALUES ('59', '123', '123456', null, null, 'b1ed7559545069f4e0adab294fb8b36a', null, '1', null, '26');
INSERT INTO `x2_user_login` VALUES ('3', 'yincan', '123456', '18181941466', null, null, null, '1', null, '0');
INSERT INTO `x2_user_login` VALUES ('58', 'cc123', '123456', null, null, '69a6a98913bd4323777679c89bf20002', null, '1', null, '0');

-- ----------------------------
-- Table structure for x2_user_packet
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_packet`;
CREATE TABLE `x2_user_packet` (
  `id` int(11) DEFAULT NULL COMMENT '用户背包1武器 2丹药 3技能 4消耗品 5材料',
  `userGoodsid` int(11) DEFAULT '0' COMMENT '用户物品编号'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_packet
-- ----------------------------

-- ----------------------------
-- Table structure for x2_user_server
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_server`;
CREATE TABLE `x2_user_server` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `value` int(11) DEFAULT '0' COMMENT ' 流畅500  拥挤1000  火爆  2000 爆满    每个服上限2000人',
  `type` varchar(255) DEFAULT '流畅' COMMENT '空闲 0 流畅 2000  4000  拥挤  5000 爆满    每个服上限5000人',
  `status` int(11) DEFAULT '0' COMMENT '状态 0关闭 1开放',
  `num` int(11) DEFAULT '0' COMMENT '服务器人数',
  `picUrl` varchar(255) DEFAULT NULL,
  `color` varchar(25) NOT NULL DEFAULT 'green' COMMENT '颜色不能为空，cocos,cc.color会报错',
  `userid` int(11) DEFAULT '0' COMMENT '用户登录后的角色id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_server
-- ----------------------------
INSERT INTO `x2_user_server` VALUES ('1', '混沌初开', '0', '空闲', '0', '4', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('2', '开天辟地', '0', '空闲', '0', '0', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('3', '三千神魔', '0', '空闲', '0', '0', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('4', '鸿蒙紫气', '0', '空闲', '0', '0', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('5', '龙凤大劫', '0', '空闲', '0', '0', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('6', '后羿射日', '0', '空闲', '0', '0', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('7', '女娲补天', '0', '空闲', '0', '0', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('8', '巫妖大战', '0', '空闲', '0', '0', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('9', '封神之战', '0', '空闲', '0', '0', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('10', '佛道之争', '0', '空闲', '0', '0', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('11', '瑶池仙境', '0', '空闲', '0', '0', 'server_pic/server_background', 'green', '0');
INSERT INTO `x2_user_server` VALUES ('12', '蓬莱仙岛', '0', '空闲', '0', '1', 'server_pic/server_background', 'green', '0');

-- ----------------------------
-- Table structure for x2_user_words
-- ----------------------------
DROP TABLE IF EXISTS `x2_user_words`;
CREATE TABLE `x2_user_words` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户标记世界--进度',
  `past` int(3) DEFAULT '0' COMMENT '通过率--正常100关',
  `wordid` int(11) DEFAULT '0' COMMENT '世界id',
  `userid` int(11) DEFAULT NULL,
  `complete` int(2) DEFAULT '0' COMMENT '是否完成 0未完 1 完成 2失败',
  `star` int(11) DEFAULT '1' COMMENT '星级1-5, 境界1-20  叠加对应等级属性',
  `num` int(25) DEFAULT '0' COMMENT '时间流速次为单位，刷新次数',
  `map` longtext COMMENT '生物地图',
  `map_pic` varchar(255) DEFAULT NULL COMMENT '地图编号',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_user_words
-- ----------------------------
INSERT INTO `x2_user_words` VALUES ('1', '100', '1', '1', '1', '1', '0', '[{\"x\":67,\"y\":75,\"map_int\":0,\"map_status\":1,\"total\":2,\"yiXing\":5,\"grade\":7,\"nature_do\":{\"id\":\"1\",\"do1\":1,\"do2\":\"173\",\"do3\":3,\"do4\":null,\"do5\":null,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5f3a\\u76d7\",\"id\":1,\"biology\":\"1\",\"state\":2,\"grade\":5,\"shengMing\":2220,\"moFa\":63,\"gongJi\":366,\"huJia\":141,\"faGong\":284,\"fakang\":120,\"suDu\":59,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":38,\"special\":3475.6000000000004,\"score\":\"116\",\"wuXing\":\"12\",\"skill\":\"2,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\",\"lucky\":\"13\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":252,\"jingYan\":131,\"jianShang\":16.8,\"zhenShang\":16.8,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":125,\"agile\":160,\"intelligence\":75,\"minPower\":\"4\",\"minAgile\":\"17\",\"minIntelligence\":\"3\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"14\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5148\\u5929\",\"point\":\"20\",\"value\":\"20\",\"time\":\"200\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u67f3\\u751f\\u98d8\\u7d6e\",\"id\":\"173\",\"biology\":\"1\",\"state\":3,\"grade\":2,\"shengMing\":912,\"moFa\":28,\"gongJi\":177,\"huJia\":93,\"faGong\":192,\"fakang\":97,\"suDu\":25,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":35,\"special\":1830,\"score\":\"152\",\"wuXing\":\"15\",\"skill\":\"7,11,4,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u67f3\\u751f\\u96ea\\u59ec\\u4e4b\\u59b9\\u3002\\u98d8\\u7d6e\\u8868\\u9762\\u4e00\\u5982\\u5176\\u59ca\\u96ea\\u59ec\\u822c\\u67d4\\u5f31\\uff0c\\u548c\\u5929\\u6daf\\u7ed3\\u5a5a\\u751f\\u5b50\\u540e\\u66f4\\u662f\\u4e2a\\u5178\\u578b\\u8d24\\u59bb\\u826f\\u6bcd\\uff0c\\u53ef\\u662f\\u5176\\u5b9e\\u673a\\u5fc3\\u751a\\u91cd\\uff0c\\uff0c\\u57ce\\u5e9c\\u751a\\u6df1\\uff0c\\u6697\\u5730\\u91cc\\u662f\\u4e2a\\u51b7\\u8840\\u6740\\u624b\\uff0c\\u4e14\\u901a\\u8fc7\\u4e0b\\u836f\\u7684\\u624b\\u6bb5\\u8feb\\u4f7f\\u5929\\u6daf\\u8fce\\u5a36\\u4e86\\u81ea\\u5df1\\u3002\\u3002\",\"lucky\":\"7\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":318,\"jingYan\":161,\"jianShang\":10.5,\"zhenShang\":10.5,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":48,\"agile\":50,\"intelligence\":66,\"minPower\":\"10\",\"minAgile\":\"14\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"4\",\"state_name\":{\"id\":\"3\",\"name\":\"\\u7ec3\\u6c14\",\"point\":\"40\",\"value\":\"50\",\"time\":\"500\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\" \\u5f52\\u6d77\\u4e00\\u5200\",\"id\":3,\"biology\":\"1\",\"state\":2,\"grade\":7,\"shengMing\":3122,\"moFa\":91,\"gongJi\":489,\"huJia\":228,\"faGong\":483,\"fakang\":227,\"suDu\":69,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":78,\"special\":4894.6,\"score\":\"113\",\"wuXing\":\"17\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u5730\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u5f52\\u6d77\\u4e00\\u5200\\uff08\\u970d\\u5efa\\u534e\\u9970\\u6f14\\uff09\\uff0c\\u9ad8\\u50b2\\u5be1\\u8a00\\uff0c\\u7709\\u5b87\\u95f4\\u5e26\\u70b9\\u5fe7\\u90c1\\uff0c\\u56e0\\u5c11\\u65f6\\u7236\\u4eb2\\u5f52\\u6d77\\u767e\\u70bc\\u88ab\\u6740\\uff0c\\u4ed6\\u77e2\\u5fd7\\u8981\\u62a5\\u7236\\u4ec7\\uff0c\\u5200\\u6cd5\\u5929\\u4e0b\\u7b2c\\u4e00\\uff0c\\u6740\\u4eba\\u4ece\\u4e0d\\u7528\\u4f7f\\u7b2c\\u4e8c\\u5200\\u3002\",\"lucky\":\"20\",\"maxNature\":60,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5c71\\u8d3c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":250,\"jingYan\":132,\"jianShang\":27.8,\"zhenShang\":27.8,\"color\":\"#f3f3f3\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":182,\"agile\":154,\"intelligence\":147,\"minPower\":\"18\",\"minAgile\":\"14\",\"minIntelligence\":\"12\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"2\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5148\\u5929\",\"point\":\"20\",\"value\":\"20\",\"time\":\"200\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u4eba\"}]},{\"x\":867,\"y\":225,\"map_int\":1,\"map_status\":0,\"total\":1,\"yiXing\":1,\"grade\":4,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":null,\"do6\":null,\"do7\":7,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u4e8c\\u86cb\",\"id\":\"173\",\"biology\":\"1\",\"state\":3,\"grade\":4,\"shengMing\":1712,\"moFa\":53,\"gongJi\":302,\"huJia\":125,\"faGong\":279,\"fakang\":119,\"suDu\":47,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":37,\"special\":2935.3999999999996,\"score\":\"140\",\"wuXing\":\"17\",\"skill\":\"2,4,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"26\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u53f8\\u9a6c\\u61ff.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":298,\"jingYan\":153,\"jianShang\":29.7,\"zhenShang\":29.7,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":88,\"agile\":120,\"intelligence\":96,\"minPower\":\"5\",\"minAgile\":\"9\",\"minIntelligence\":\"7\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"30\",\"state_name\":{\"id\":\"3\",\"name\":\"\\u7ec3\\u6c14\",\"point\":\"40\",\"value\":\"50\",\"time\":\"500\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u5c06\\u519b\",\"id\":7,\"biology\":\"1\",\"state\":2,\"grade\":3,\"shengMing\":1404,\"moFa\":41,\"gongJi\":199,\"huJia\":90,\"faGong\":231,\"fakang\":98,\"suDu\":26,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":30,\"special\":2217,\"score\":\"124\",\"wuXing\":\"19\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":264,\"jingYan\":135,\"jianShang\":23,\"zhenShang\":23,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":81,\"agile\":57,\"intelligence\":90,\"minPower\":\"12\",\"minAgile\":\"7\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"28\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5148\\u5929\",\"point\":\"20\",\"value\":\"20\",\"time\":\"200\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u4eba\"}]}]', '/app_resources/word/地图1.jpg');
INSERT INTO `x2_user_words` VALUES ('2', '100', '2', '1', '1', '1', '0', '[{\"x\":467,\"y\":225,\"map_int\":0,\"map_status\":1,\"total\":5,\"yiXing\":1,\"grade\":6,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":2,\"do3\":3,\"do4\":4,\"do5\":null,\"do6\":6,\"do7\":7,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5251\\u5723\",\"id\":2,\"biology\":\"1\",\"state\":16,\"grade\":2,\"shengMing\":768,\"moFa\":27,\"gongJi\":130,\"huJia\":58,\"faGong\":153,\"fakang\":63,\"suDu\":17,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":19,\"special\":1344.8000000000002,\"score\":\"106\",\"wuXing\":\"13\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\",\"lucky\":\"27\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685267811876.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":226,\"jingYan\":115,\"jianShang\":28.899999999999999,\"zhenShang\":28.899999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":36,\"agile\":40,\"intelligence\":64,\"minPower\":\"8\",\"minAgile\":\"9\",\"minIntelligence\":\"25\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"17\",\"state_name\":{\"id\":\"16\",\"name\":\"\\u4ed9\\u5e1d\",\"point\":\"300\",\"value\":\"8000\",\"time\":\"500000\",\"difficult\":\"4\"}},{\"name\":\"\\u5251\\u5723\",\"id\":3,\"biology\":\"1\",\"state\":15,\"grade\":3,\"shengMing\":1152,\"moFa\":41,\"gongJi\":192,\"huJia\":84,\"faGong\":226,\"fakang\":92,\"suDu\":26,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":27,\"special\":1951.4000000000001,\"score\":\"106\",\"wuXing\":\"13\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\",\"lucky\":\"27\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685267811876.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":228,\"jingYan\":117,\"jianShang\":29.699999999999999,\"zhenShang\":29.699999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":54,\"agile\":60,\"intelligence\":96,\"minPower\":\"8\",\"minAgile\":\"9\",\"minIntelligence\":\"25\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"17\",\"state_name\":{\"id\":\"15\",\"name\":\"\\u4ed9\\u5c0a\",\"point\":\"280\",\"value\":\"6000\",\"time\":\"300000\",\"difficult\":\"4\"}},{\"name\":\"\\u7720\\u72c2\\u56db\\u90ce\",\"id\":4,\"biology\":\"1\",\"state\":13,\"grade\":6,\"shengMing\":2964,\"moFa\":72,\"gongJi\":380,\"huJia\":161,\"faGong\":311,\"fakang\":143,\"suDu\":54,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":50,\"special\":4376,\"score\":\"111\",\"wuXing\":\"8\",\"skill\":\"11,4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e1c\\u701b\\u8457\\u540d\\u5251\\u5ba2\\u7720\\u72c2\\u56db\\u90ce\\u300c\\u5e7b\\u5251\\u300d\\u3002\",\"lucky\":\"15\",\"maxNature\":50,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703687015670821.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":244,\"jingYan\":128,\"jianShang\":20,\"zhenShang\":20,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":198,\"agile\":132,\"intelligence\":60,\"minPower\":\"21\",\"minAgile\":\"8\",\"minIntelligence\":\"7\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"15\",\"state_name\":{\"id\":\"13\",\"name\":\"\\u91d1\\u4ed9\",\"point\":\"240\",\"value\":\"3600\",\"time\":\"120000\",\"difficult\":\"4\"}},{\"name\":\"\\u4e07\\u4e09\\u5343\",\"id\":6,\"biology\":\"1\",\"state\":13,\"grade\":4,\"shengMing\":1736,\"moFa\":54,\"gongJi\":260,\"huJia\":138,\"faGong\":321,\"fakang\":153,\"suDu\":31,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":53,\"special\":2920.6000000000004,\"score\":\"105\",\"wuXing\":\"9\",\"skill\":\"5,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5929\\u4e0b\\u7b2c\\u4e00\\u5e84\\u5e84\\u4e3b\\uff0c\\u5bcc\\u7532\\u5929\\u4e0b\\u3002\",\"lucky\":\"7\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685311953671.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":228,\"jingYan\":118,\"jianShang\":12.300000000000001,\"zhenShang\":12.300000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":100,\"agile\":52,\"intelligence\":116,\"minPower\":\"13\",\"minAgile\":\"3\",\"minIntelligence\":\"16\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"11\",\"state_name\":{\"id\":\"13\",\"name\":\"\\u91d1\\u4ed9\",\"point\":\"240\",\"value\":\"3600\",\"time\":\"120000\",\"difficult\":\"4\"}},{\"name\":\"\\u9e92\\u9e9f\\u5b50\",\"id\":7,\"biology\":\"1\",\"state\":13,\"grade\":5,\"shengMing\":2680,\"moFa\":63,\"gongJi\":420,\"huJia\":175,\"faGong\":314,\"fakang\":149,\"suDu\":68,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":52,\"special\":4064.3999999999996,\"score\":\"116\",\"wuXing\":\"12\",\"skill\":\"2\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u9e92\\u9e9f\\u95e8\\u95e8\\u4e3b\\u3002\",\"lucky\":\"16\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703682069195640.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":252,\"jingYan\":131,\"jianShang\":21.199999999999999,\"zhenShang\":21.199999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":170,\"agile\":175,\"intelligence\":65,\"minPower\":\"8\",\"minAgile\":\"16\",\"minIntelligence\":\"7\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"19\",\"state_name\":{\"id\":\"13\",\"name\":\"\\u91d1\\u4ed9\",\"point\":\"240\",\"value\":\"3600\",\"time\":\"120000\",\"difficult\":\"4\"}}]},{\"x\":467,\"y\":375,\"map_int\":1,\"map_status\":1,\"total\":5,\"yiXing\":2,\"grade\":9,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":2,\"do3\":3,\"do4\":4,\"do5\":null,\"do6\":6,\"do7\":7,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5229\\u79c0\\u516c\\u4e3b\",\"id\":2,\"biology\":\"1\",\"state\":14,\"grade\":8,\"shengMing\":4112,\"moFa\":118,\"gongJi\":527,\"huJia\":226,\"faGong\":688,\"fakang\":266,\"suDu\":64,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":71,\"special\":6292.2000000000007,\"score\":\"143\",\"wuXing\":\"18\",\"skill\":\"7,4\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u51fa\\u4e91\\u56fd\\u516c\\u4e3b\\u3002\",\"lucky\":\"27\",\"maxNature\":70,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686026358466.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":312,\"jingYan\":164,\"jianShang\":34.100000000000001,\"zhenShang\":34.100000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2800,\"power\":240,\"agile\":144,\"intelligence\":312,\"minPower\":\"6\",\"minAgile\":\"5\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"16\",\"state_name\":{\"id\":\"14\",\"name\":\"\\u4ed9\\u541b\",\"point\":\"260\",\"value\":\"4000\",\"time\":\"180000\",\"difficult\":\"4\"}},{\"name\":\"\\u6b63\\u5fb7\\u7687\\u5e1d\",\"id\":3,\"biology\":\"1\",\"state\":14,\"grade\":8,\"shengMing\":2784,\"moFa\":101,\"gongJi\":622,\"huJia\":239,\"faGong\":469,\"fakang\":201,\"suDu\":108,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":64,\"special\":4806.7999999999993,\"score\":\"100\",\"wuXing\":\"6\",\"skill\":\"8,6\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u7687\\u4e0a,\\u4e91\\u7f57\\u90e1\\u4e3b\\u7684\\u7687\\u5144\\u3002\",\"lucky\":\"27\",\"maxNature\":70,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686673801306.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":226,\"jingYan\":121,\"jianShang\":33.399999999999999,\"zhenShang\":33.399999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2800,\"power\":112,\"agile\":296,\"intelligence\":136,\"minPower\":\"2\",\"minAgile\":\"19\",\"minIntelligence\":\"3\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"10\",\"state_name\":{\"id\":\"14\",\"name\":\"\\u4ed9\\u541b\",\"point\":\"260\",\"value\":\"4000\",\"time\":\"180000\",\"difficult\":\"4\"}},{\"name\":\"\\u4e91\\u7f57\\u90e1\\u4e3b\",\"id\":4,\"biology\":\"1\",\"state\":13,\"grade\":9,\"shengMing\":4428,\"moFa\":129,\"gongJi\":699,\"huJia\":339,\"faGong\":803,\"fakang\":365,\"suDu\":95,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":119,\"special\":7285.7999999999993,\"score\":\"154\",\"wuXing\":\"15\",\"skill\":\"8,4,2,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f53\\u4eca\\u7687\\u4e0a\\u4e4b\\u59b9\\u3002\",\"lucky\":\"17\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685358505621.png\",\"yiXing\":1,\"sex\":\"2\",\"jingBi\":336,\"jingYan\":177,\"jianShang\":28.899999999999999,\"zhenShang\":28.899999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":252,\"agile\":198,\"intelligence\":306,\"minPower\":\"7\",\"minAgile\":\"5\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"7\",\"state_name\":{\"id\":\"13\",\"name\":\"\\u91d1\\u4ed9\",\"point\":\"240\",\"value\":\"3600\",\"time\":\"120000\",\"difficult\":\"4\"}},{\"name\":\"\\u67f3\\u751f\\u96ea\\u59ec\",\"id\":6,\"biology\":\"1\",\"state\":13,\"grade\":3,\"shengMing\":1758,\"moFa\":40,\"gongJi\":295,\"huJia\":150,\"faGong\":264,\"fakang\":142,\"suDu\":45,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":54,\"special\":2829.8000000000002,\"score\":\"127\",\"wuXing\":\"13\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u6e29\\u67d4\\u3001\\u7eaf\\u6d01\\u3001\\u7f8e\\u4e3d\\u3001\\u5584\\u826f\\u3001\\u4e3e\\u6b62\\u4f18\\u96c5\\u3001\\u8c08\\u5410\\u5927\\u65b9\\u3001\\u673a\\u667a\\u8fc7\\u4eba\\u3001\\u7434\\u68cb\\u4e66\\u753b\\uff0c\\u6837\\u6837\\u7cbe\\u901a\\u3002\\u662f\\u67f3\\u751f\\u95e8\\u4e3b\\u67f3\\u751f\\u4f46\\u9a6c\\u5b88\\u957f\\u5973\\uff0c\\u6b66\\u529f\\u9ad8\\u5f3a\\uff0c\\u7ee7\\u627f\\u67f3\\u751f\\u5bb6\\u72ec\\u95e8\\u7edd\\u62db\\u96ea\\u98d8\\u4eba\\u95f4\\u3002\",\"lucky\":\"10\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703687072256359.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":270,\"jingYan\":138,\"jianShang\":15.4,\"zhenShang\":15.4,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":114,\"agile\":96,\"intelligence\":63,\"minPower\":\"14\",\"minAgile\":\"10\",\"minIntelligence\":\"2\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"5\",\"state_name\":{\"id\":\"13\",\"name\":\"\\u91d1\\u4ed9\",\"point\":\"240\",\"value\":\"3600\",\"time\":\"120000\",\"difficult\":\"4\"}},{\"name\":\"\\u5229\\u79c0\\u516c\\u4e3b\",\"id\":7,\"biology\":\"1\",\"state\":14,\"grade\":9,\"shengMing\":4626,\"moFa\":133,\"gongJi\":593,\"huJia\":254,\"faGong\":774,\"fakang\":300,\"suDu\":72,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":80,\"special\":7054,\"score\":\"143\",\"wuXing\":\"18\",\"skill\":\"7,4\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u51fa\\u4e91\\u56fd\\u516c\\u4e3b\\u3002\",\"lucky\":\"27\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686026358466.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":314,\"jingYan\":166,\"jianShang\":35,\"zhenShang\":35,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":270,\"agile\":162,\"intelligence\":351,\"minPower\":\"6\",\"minAgile\":\"5\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"16\",\"state_name\":{\"id\":\"14\",\"name\":\"\\u4ed9\\u541b\",\"point\":\"260\",\"value\":\"4000\",\"time\":\"180000\",\"difficult\":\"4\"}}]},{\"x\":667,\"y\":525,\"map_int\":2,\"map_status\":1,\"total\":5,\"yiXing\":5,\"grade\":31,\"nature_do\":{\"id\":\"1\",\"do1\":1,\"do2\":\"173\",\"do3\":3,\"do4\":4,\"do5\":5,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":9,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5c71\\u8d3c\",\"id\":1,\"biology\":\"1\",\"state\":13,\"grade\":21,\"shengMing\":8190,\"moFa\":286,\"gongJi\":1844,\"huJia\":744,\"faGong\":1542,\"fakang\":669,\"suDu\":315,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":210,\"special\":14038,\"score\":\"127\",\"wuXing\":\"13\",\"skill\":\"4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"22\",\"maxNature\":200,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703687041511441.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":306,\"jingYan\":174,\"jianShang\":43,\"zhenShang\":43,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":21000,\"power\":336,\"agile\":840,\"intelligence\":525,\"minPower\":\"6\",\"minAgile\":\"14\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"26\",\"state_name\":{\"id\":\"13\",\"name\":\"\\u91d1\\u4ed9\",\"point\":\"240\",\"value\":\"3600\",\"time\":\"120000\",\"difficult\":\"4\"}},{\"name\":\" \\u5f52\\u6d77\\u4e00\\u5200\",\"id\":\"173\",\"biology\":\"1\",\"state\":13,\"grade\":11,\"shengMing\":4906,\"moFa\":143,\"gongJi\":754,\"huJia\":344,\"faGong\":743,\"fakang\":341,\"suDu\":107,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":115,\"special\":7568,\"score\":\"113\",\"wuXing\":\"17\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u5730\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u5f52\\u6d77\\u4e00\\u5200\\uff08\\u970d\\u5efa\\u534e\\u9970\\u6f14\\uff09\\uff0c\\u9ad8\\u50b2\\u5be1\\u8a00\\uff0c\\u7709\\u5b87\\u95f4\\u5e26\\u70b9\\u5fe7\\u90c1\\uff0c\\u56e0\\u5c11\\u65f6\\u7236\\u4eb2\\u5f52\\u6d77\\u767e\\u70bc\\u88ab\\u6740\\uff0c\\u4ed6\\u77e2\\u5fd7\\u8981\\u62a5\\u7236\\u4ec7\\uff0c\\u5200\\u6cd5\\u5929\\u4e0b\\u7b2c\\u4e00\\uff0c\\u6740\\u4eba\\u4ece\\u4e0d\\u7528\\u4f7f\\u7b2c\\u4e8c\\u5200\\u3002\",\"lucky\":\"20\",\"maxNature\":100,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685395934717.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":258,\"jingYan\":140,\"jianShang\":31.5,\"zhenShang\":31.5,\"color\":\"#f3f3f3\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":5500,\"power\":286,\"agile\":242,\"intelligence\":231,\"minPower\":\"18\",\"minAgile\":\"14\",\"minIntelligence\":\"12\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"2\",\"state_name\":{\"id\":\"13\",\"name\":\"\\u91d1\\u4ed9\",\"point\":\"240\",\"value\":\"3600\",\"time\":\"120000\",\"difficult\":\"4\"}},{\"name\":\"\\u67f3\\u751f\\u96ea\\u59ec\",\"id\":3,\"biology\":\"1\",\"state\":14,\"grade\":14,\"shengMing\":8204,\"moFa\":189,\"gongJi\":1249,\"huJia\":571,\"faGong\":1102,\"fakang\":535,\"suDu\":190,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":187,\"special\":12335.400000000001,\"score\":\"127\",\"wuXing\":\"13\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u6e29\\u67d4\\u3001\\u7eaf\\u6d01\\u3001\\u7f8e\\u4e3d\\u3001\\u5584\\u826f\\u3001\\u4e3e\\u6b62\\u4f18\\u96c5\\u3001\\u8c08\\u5410\\u5927\\u65b9\\u3001\\u673a\\u667a\\u8fc7\\u4eba\\u3001\\u7434\\u68cb\\u4e66\\u753b\\uff0c\\u6837\\u6837\\u7cbe\\u901a\\u3002\\u662f\\u67f3\\u751f\\u95e8\\u4e3b\\u67f3\\u751f\\u4f46\\u9a6c\\u5b88\\u957f\\u5973\\uff0c\\u6b66\\u529f\\u9ad8\\u5f3a\\uff0c\\u7ee7\\u627f\\u67f3\\u751f\\u5bb6\\u72ec\\u95e8\\u7edd\\u62db\\u96ea\\u98d8\\u4eba\\u95f4\\u3002\",\"lucky\":\"10\",\"maxNature\":130,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703687072256359.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":292,\"jingYan\":160,\"jianShang\":28.699999999999999,\"zhenShang\":28.699999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":9100,\"power\":532,\"agile\":448,\"intelligence\":294,\"minPower\":\"14\",\"minAgile\":\"10\",\"minIntelligence\":\"2\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"5\",\"state_name\":{\"id\":\"14\",\"name\":\"\\u4ed9\\u541b\",\"point\":\"260\",\"value\":\"4000\",\"time\":\"180000\",\"difficult\":\"4\"}},{\"name\":\"\\u5251\\u60ca\\u5cf0\",\"id\":4,\"biology\":\"1\",\"state\":13,\"grade\":31,\"shengMing\":15438,\"moFa\":438,\"gongJi\":2454,\"huJia\":1042,\"faGong\":2484,\"fakang\":1050,\"suDu\":364,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":317,\"special\":23758.400000000001,\"score\":\"115\",\"wuXing\":\"9\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u8f9f\\u90aa\\u5c71\\u5e84\\uff0c\\u66fe\\u4e0e\\u5f52\\u6d77\\u767e\\u70bc\\u4e00\\u6218\\u3002\",\"lucky\":\"28\",\"maxNature\":300,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703684186794604.png\",\"yiXing\":1,\"sex\":\"1\",\"jingBi\":302,\"jingYan\":182,\"jianShang\":59.700000000000003,\"zhenShang\":59.700000000000003,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":46500,\"power\":868,\"agile\":899,\"intelligence\":930,\"minPower\":\"5\",\"minAgile\":\"10\",\"minIntelligence\":\"18\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"20\",\"state_name\":{\"id\":\"13\",\"name\":\"\\u91d1\\u4ed9\",\"point\":\"240\",\"value\":\"3600\",\"time\":\"120000\",\"difficult\":\"4\"}},{\"name\":\"\\u4e86\\u7a7a\",\"id\":5,\"biology\":\"1\",\"state\":13,\"grade\":29,\"shengMing\":13456,\"moFa\":430,\"gongJi\":2214,\"huJia\":1024,\"faGong\":2660,\"fakang\":1136,\"suDu\":303,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":343,\"special\":21869.599999999999,\"score\":\"132\",\"wuXing\":\"8\",\"skill\":\"2,10,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5c11\\u6797\\u5bfa\\u4e86\\u7a7a\\u5927\\u5e08\\u3002\",\"lucky\":\"17\",\"maxNature\":280,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686329308948.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":332,\"jingYan\":195,\"jianShang\":51.300000000000004,\"zhenShang\":51.300000000000004,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":40600,\"power\":696,\"agile\":667,\"intelligence\":1131,\"minPower\":\"11\",\"minAgile\":\"5\",\"minIntelligence\":\"25\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"21\",\"state_name\":{\"id\":\"13\",\"name\":\"\\u91d1\\u4ed9\",\"point\":\"240\",\"value\":\"3600\",\"time\":\"120000\",\"difficult\":\"4\"}},{\"name\":\"\\u5c71\\u8d3c\",\"id\":9,\"biology\":\"1\",\"state\":14,\"grade\":21,\"shengMing\":8190,\"moFa\":286,\"gongJi\":1844,\"huJia\":744,\"faGong\":1542,\"fakang\":669,\"suDu\":315,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":210,\"special\":14038,\"score\":\"127\",\"wuXing\":\"13\",\"skill\":\"4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"22\",\"maxNature\":200,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703687041511441.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":306,\"jingYan\":174,\"jianShang\":43,\"zhenShang\":43,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":21000,\"power\":336,\"agile\":840,\"intelligence\":525,\"minPower\":\"6\",\"minAgile\":\"14\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"26\",\"state_name\":{\"id\":\"14\",\"name\":\"\\u4ed9\\u541b\",\"point\":\"260\",\"value\":\"4000\",\"time\":\"180000\",\"difficult\":\"4\"}}]}]', '/app_resources/word/地图2.jpg');
INSERT INTO `x2_user_words` VALUES ('3', '100', '3', '1', '1', '2', '0', '[{\"x\":1067,\"y\":75,\"map_int\":0,\"map_status\":1,\"total\":2,\"yiXing\":2,\"grade\":6,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":5,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":9,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5343\\u9762\\u90ce\\u541b\",\"id\":\"173\",\"biology\":\"1\",\"state\":2,\"grade\":6,\"shengMing\":2412,\"moFa\":92,\"gongJi\":354,\"huJia\":154,\"faGong\":544,\"fakang\":202,\"suDu\":40,\"shanbi\":3,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":50,\"special\":4071,\"score\":\"131\",\"wuXing\":\"16\",\"skill\":\"4,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5343\\u9762\\u90ce\\u541b\\uff0c\\u64c5\\u957f\\u7528\\u6bd2\\u548c\\u6613\\u5bb9\\u3002\",\"lucky\":\"30\",\"maxNature\":50,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686555229965.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":284,\"jingYan\":148,\"jianShang\":35,\"zhenShang\":35,\"color\":\"#f3f3f3\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":108,\"agile\":84,\"intelligence\":282,\"minPower\":\"9\",\"minAgile\":\"8\",\"minIntelligence\":\"13\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"18\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5b97\\u5e08\",\"point\":\"20\",\"value\":\"50\",\"time\":\"200\",\"difficult\":\"1\"}},{\"name\":\"\\u4e91\\u7f57\\u90e1\\u4e3b\",\"id\":5,\"biology\":\"1\",\"state\":3,\"grade\":3,\"shengMing\":1476,\"moFa\":43,\"gongJi\":255,\"huJia\":135,\"faGong\":290,\"fakang\":144,\"suDu\":35,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":51,\"special\":2724.1999999999998,\"score\":\"154\",\"wuXing\":\"15\",\"skill\":\"8,4,2,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f53\\u4eca\\u7687\\u4e0a\\u4e4b\\u59b9\\u3002\",\"lucky\":\"17\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685358505621.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":324,\"jingYan\":165,\"jianShang\":22.100000000000001,\"zhenShang\":22.100000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":84,\"agile\":66,\"intelligence\":102,\"minPower\":\"7\",\"minAgile\":\"5\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"7\",\"state_name\":{\"id\":\"3\",\"name\":\"\\u5148\\u5929\",\"point\":\"40\",\"value\":\"100\",\"time\":\"500\",\"difficult\":\"1\"}},{\"name\":\"\\u5f20\\u65e0\\u5fcc\",\"id\":9,\"biology\":\"1\",\"state\":1,\"grade\":4,\"shengMing\":2216,\"moFa\":56,\"gongJi\":272,\"huJia\":110,\"faGong\":302,\"fakang\":117,\"suDu\":36,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":32,\"special\":3468.3999999999996,\"score\":\"149\",\"wuXing\":\"6\",\"skill\":\"4,6,7,8,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u67f3\\u751f\\u4f46\\u9a6c\\u5b88\\u662f\\u6b66\\u4fa0\\u7535\\u89c6\\u5267\\u300a\\u5929\\u4e0b\\u7b2c\\u4e00\\u300b\\u4e2d\\u7684\\u89d2\\u8272\\uff0c\\u662f\\u8457\\u540d\\u5251\\u5ba2\\u67f3\\u751f\\u5341\\u5175\\u536b\\u7684\\u7236\\u4eb2\\uff0c\\u4e5f\\u662f\\u6b66\\u5b66\\u5b97\\u5e08\\u3002\",\"lucky\":\"10\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703682605991874.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":316,\"jingYan\":162,\"jianShang\":13.199999999999999,\"zhenShang\":13.199999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":140,\"agile\":88,\"intelligence\":120,\"minPower\":\"24\",\"minAgile\":\"11\",\"minIntelligence\":\"13\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"23\",\"state_name\":{\"id\":\"1\",\"name\":\"\\u51e1\\u4eba\",\"point\":\"0\",\"value\":\"0\",\"time\":\"100\",\"difficult\":\"1\"}}]},{\"x\":667,\"y\":225,\"map_int\":1,\"map_status\":1,\"total\":2,\"yiXing\":1,\"grade\":5,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":null,\"do6\":6,\"do7\":null,\"do8\":8,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u6731\\u65e0\\u89c6\",\"id\":\"173\",\"biology\":\"1\",\"state\":2,\"grade\":5,\"shengMing\":1650,\"moFa\":69,\"gongJi\":334,\"huJia\":146,\"faGong\":378,\"fakang\":157,\"suDu\":48,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":47,\"special\":2982.3999999999996,\"score\":\"103\",\"wuXing\":\"13\",\"skill\":\"7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5916\\u53f7\\u94c1\\u80c6\\u795e\\u4faf\\uff0c\\u4e3a\\u5f53\\u4eca\\u7687\\u4e0a\\u53d4\\u7236\\u3002\\u5f53\\u5e74\\u5148\\u7687\\u9a7e\\u5d29\\u524d\\uff0c\\u552f\\u6050\\u6b63\\u5fb7\\u5e74\\u5c11\\uff0c\\u6613\\u88ab\\u5978\\u4eba\\u64cd\\u63a7\\uff0c\\u6216\\u65e0\\u529b\\u4e3b\\u6301\\u671d\\u653f\\uff0c\\u4e0d\\u61c2\\u5206\\u8fa8\\u5fe0\\u5978\\uff0c\\u4e8e\\u662f\\u7279\\u4ee4\\u7687\\u5f1f\\u6731\\u65e0\\u89c6\\u521b\\u7acb\\u62a4\\u9f99\\u5c71\\u5e84\\uff0c\\u6743\\u529b\\u53ef\\u51cc\\u9a7e\\u6240\\u6709\\u671d\\u5ef7\\u673a\\u6784\\uff0c\\u5e76\\u8d50\\u4e88\\u5148\\u7687\\u4e4b\\u4e39\\u4e66\\u94c1\\u5377\\u3001\\u5c1a\\u65b9\\u5b9d\\u5251\\uff0c\\u53ef\\u4ee5\\u4e0a\\u65a9\\u660f\\u541b\\uff0c\\u4e0b\\u65a9\\u8c17\\u81e3\\uff0c\\u7ed9\\u4e86\\u6b63\\u5fb7\\u4e00\\u4e2a\\u6700\\u9ad8\\u7279\\u52a1\\u673a\\u6784\\uff0c\\u5236\\u8861\\u4e1c\\u5382\\u3002\",\"lucky\":\"21\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686647458929.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":226,\"jingYan\":118,\"jianShang\":25.699999999999999,\"zhenShang\":25.699999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":60,\"agile\":115,\"intelligence\":160,\"minPower\":\"4\",\"minAgile\":\"9\",\"minIntelligence\":\"17\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"6\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5b97\\u5e08\",\"point\":\"20\",\"value\":\"50\",\"time\":\"200\",\"difficult\":\"1\"}},{\"name\":\"\\u4e86\\u7a7a\",\"id\":6,\"biology\":\"1\",\"state\":3,\"grade\":4,\"shengMing\":1856,\"moFa\":59,\"gongJi\":330,\"huJia\":166,\"faGong\":392,\"fakang\":182,\"suDu\":45,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":60,\"special\":3337,\"score\":\"132\",\"wuXing\":\"8\",\"skill\":\"2,10,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5c11\\u6797\\u5bfa\\u4e86\\u7a7a\\u5927\\u5e08\\u3002\",\"lucky\":\"17\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686329308948.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":282,\"jingYan\":145,\"jianShang\":23,\"zhenShang\":23,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":96,\"agile\":92,\"intelligence\":156,\"minPower\":\"11\",\"minAgile\":\"5\",\"minIntelligence\":\"25\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"21\",\"state_name\":{\"id\":\"3\",\"name\":\"\\u5148\\u5929\",\"point\":\"40\",\"value\":\"100\",\"time\":\"500\",\"difficult\":\"1\"}},{\"name\":\"\\u6e38\\u4fa0\",\"id\":8,\"biology\":\"1\",\"state\":3,\"grade\":5,\"shengMing\":2000,\"moFa\":70,\"gongJi\":386,\"huJia\":195,\"faGong\":439,\"fakang\":208,\"suDu\":54,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":71,\"special\":3729.1999999999998,\"score\":\"126\",\"wuXing\":\"6\",\"skill\":\"4,10,6,2\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685236865063.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":272,\"jingYan\":141,\"jianShang\":27.100000000000001,\"zhenShang\":27.100000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":95,\"agile\":110,\"intelligence\":165,\"minPower\":\"9\",\"minAgile\":\"10\",\"minIntelligence\":\"12\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"29\",\"state_name\":{\"id\":\"3\",\"name\":\"\\u5148\\u5929\",\"point\":\"40\",\"value\":\"100\",\"time\":\"500\",\"difficult\":\"1\"}}]},{\"x\":267,\"y\":375,\"map_int\":2,\"map_status\":1,\"total\":3,\"yiXing\":4,\"grade\":11,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":3,\"do4\":4,\"do5\":null,\"do6\":null,\"do7\":null,\"do8\":8,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u66f9\\u6b63\\u6df3\",\"id\":\"173\",\"biology\":\"1\",\"state\":3,\"grade\":6,\"shengMing\":2640,\"moFa\":90,\"gongJi\":476,\"huJia\":230,\"faGong\":585,\"fakang\":257,\"suDu\":65,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":80,\"special\":4587,\"score\":\"110\",\"wuXing\":\"7\",\"skill\":\"11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e1c\\u5382\\u603b\\u7ba1\\u592a\\u76d1\\u66f9\\u6b63\\u6df3\\u3002\\u91ce\\u5fc3\\u52c3\\u52c3\\u7684\\u66f9\\u6b63\\u6df3\\u6743\\u52bf\\u6ed4\\u5929\\uff0c\\u4ed6\\u4fee\\u70bc\\u201c\\u7ae5\\u5b50\\u529f\\u201c\\u5927\\u6210\\u3001\\u6b66\\u529f\\u76d6\\u4e16\\r\\n\\u5929\\u4e0b\\u7b2c\\u4e00\\r\\n\\u5929\\u4e0b\\u7b2c\\u4e00(22\\u5f20)\\r\\n \\uff0c\\u53c8\\u81ea\\u6043\\u638c\\u7ba1\\u4e1c\\u5382\\uff0c\\u6743\\u503e\\u671d\\u91ce\\uff0c\\u7ed3\\u515a\\u8425\\u79c1\\uff0c\\u52fe\\u7ed3\\u8d2a\\u5b98\\uff0c\\u9677\\u5bb3\\u5fe0\\u826f\\uff0c\\u65e0\\u6076\\u4e0d\\u4f5c\\u3002\",\"lucky\":\"23\",\"maxNature\":50,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686979525672.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":242,\"jingYan\":127,\"jianShang\":31,\"zhenShang\":31,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":126,\"agile\":138,\"intelligence\":252,\"minPower\":\"3\",\"minAgile\":\"5\",\"minIntelligence\":\"11\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"9\",\"state_name\":{\"id\":\"3\",\"name\":\"\\u5148\\u5929\",\"point\":\"40\",\"value\":\"100\",\"time\":\"500\",\"difficult\":\"1\"}},{\"name\":\"\\u6bb5\\u5929\\u6daf\",\"id\":3,\"biology\":\"1\",\"state\":3,\"grade\":9,\"shengMing\":3618,\"moFa\":119,\"gongJi\":566,\"huJia\":234,\"faGong\":584,\"fakang\":239,\"suDu\":80,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":71,\"special\":5633.2000000000007,\"score\":\"93\",\"wuXing\":\"8\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u5929\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u6bb5\\u5929\\u6daf\\uff08\\u674e\\u4e9a\\u9e4f\\u9970\\u6f14\\uff09\\uff0c\\u51b7\\u9759\\u6c89\\u7740\\uff0c\\u81ea\\u5c0f\\u7531\\u94c1\\u80c6\\u795e\\u4faf\\u6536\\u517b\\uff0c\\u5728\\u4e1c\\u701b\\u8ddf\\u968f\\u201c\\u4f0a\\u8d3a\\u6d3e\\u201d\\u5b66\\u5f97\\u5fcd\\u672f\\u53ca\\u201c\\u5e7b\\u5251\\u201d\\u540e\\uff0c\\u52a0\\u5165\\u201c\\u62a4\\u9f99\\u5c71\\u5e84\\u201d\\uff0c\\u6b66\\u529f\\u6df1\\u4e0d\\u53ef\\u6d4b\\u3002\",\"lucky\":\"28\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685125282970.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":214,\"jingYan\":116,\"jianShang\":35.100000000000001,\"zhenShang\":35.100000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":189,\"agile\":198,\"intelligence\":216,\"minPower\":\"6\",\"minAgile\":\"12\",\"minIntelligence\":\"17\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"13\",\"state_name\":{\"id\":\"3\",\"name\":\"\\u5148\\u5929\",\"point\":\"40\",\"value\":\"100\",\"time\":\"500\",\"difficult\":\"1\"}},{\"name\":\"\\u5c71\\u8d3c\",\"id\":4,\"biology\":\"1\",\"state\":1,\"grade\":10,\"shengMing\":3900,\"moFa\":136,\"gongJi\":884,\"huJia\":360,\"faGong\":740,\"fakang\":324,\"suDu\":150,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":103,\"special\":6813.6000000000004,\"score\":\"127\",\"wuXing\":\"13\",\"skill\":\"4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"22\",\"maxNature\":90,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703687041511441.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":284,\"jingYan\":152,\"jianShang\":32.299999999999997,\"zhenShang\":32.299999999999997,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":4500,\"power\":160,\"agile\":400,\"intelligence\":250,\"minPower\":\"6\",\"minAgile\":\"14\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"26\",\"state_name\":{\"id\":\"1\",\"name\":\"\\u51e1\\u4eba\",\"point\":\"0\",\"value\":\"0\",\"time\":\"100\",\"difficult\":\"1\"}},{\"name\":\"\\u4e86\\u7a7a\",\"id\":8,\"biology\":\"1\",\"state\":1,\"grade\":7,\"shengMing\":3248,\"moFa\":103,\"gongJi\":557,\"huJia\":269,\"faGong\":664,\"fakang\":296,\"suDu\":76,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":94,\"special\":5560.7999999999993,\"score\":\"132\",\"wuXing\":\"8\",\"skill\":\"2,10,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5c11\\u6797\\u5bfa\\u4e86\\u7a7a\\u5927\\u5e08\\u3002\",\"lucky\":\"17\",\"maxNature\":60,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686329308948.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":288,\"jingYan\":151,\"jianShang\":26.399999999999999,\"zhenShang\":26.399999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":168,\"agile\":161,\"intelligence\":273,\"minPower\":\"11\",\"minAgile\":\"5\",\"minIntelligence\":\"25\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"21\",\"state_name\":{\"id\":\"1\",\"name\":\"\\u51e1\\u4eba\",\"point\":\"0\",\"value\":\"0\",\"time\":\"100\",\"difficult\":\"1\"}}]},{\"x\":667,\"y\":375,\"map_int\":3,\"map_status\":1,\"total\":3,\"yiXing\":1,\"grade\":5,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":3,\"do4\":4,\"do5\":null,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":9,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5f52\\u6d77\\u767e\\u70bc\",\"id\":\"173\",\"biology\":\"1\",\"state\":2,\"grade\":3,\"shengMing\":1500,\"moFa\":42,\"gongJi\":230,\"huJia\":93,\"faGong\":236,\"fakang\":95,\"suDu\":34,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":27,\"special\":2518.3999999999996,\"score\":\"154\",\"wuXing\":\"18\",\"skill\":\"6,5,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f52\\u6d77\\u4e00\\u5200\\u4e4b\\u7236\\u3002\",\"lucky\":\"27\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686540611104.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":324,\"jingYan\":165,\"jianShang\":29.699999999999999,\"zhenShang\":29.699999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":84,\"agile\":87,\"intelligence\":93,\"minPower\":\"9\",\"minAgile\":\"13\",\"minIntelligence\":\"22\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"22\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5b97\\u5e08\",\"point\":\"20\",\"value\":\"50\",\"time\":\"200\",\"difficult\":\"1\"}},{\"name\":\"\\u5343\\u9762\\u90ce\\u541b\",\"id\":3,\"biology\":\"1\",\"state\":4,\"grade\":5,\"shengMing\":2010,\"moFa\":76,\"gongJi\":294,\"huJia\":127,\"faGong\":452,\"fakang\":167,\"suDu\":33,\"shanbi\":3,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":41,\"special\":3421.1999999999998,\"score\":\"131\",\"wuXing\":\"16\",\"skill\":\"4,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5343\\u9762\\u90ce\\u541b\\uff0c\\u64c5\\u957f\\u7528\\u6bd2\\u548c\\u6613\\u5bb9\\u3002\",\"lucky\":\"30\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686555229965.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":282,\"jingYan\":146,\"jianShang\":34.100000000000001,\"zhenShang\":34.100000000000001,\"color\":\"#f3f3f3\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":90,\"agile\":70,\"intelligence\":235,\"minPower\":\"9\",\"minAgile\":\"8\",\"minIntelligence\":\"13\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"18\",\"state_name\":{\"id\":\"4\",\"name\":\"\\u7b51\\u57fa\",\"point\":\"60\",\"value\":\"200\",\"time\":\"1000\",\"difficult\":\"1\"}},{\"name\":\"\\u6210\\u662f\\u975e\",\"id\":4,\"biology\":\"1\",\"state\":1,\"grade\":4,\"shengMing\":2032,\"moFa\":55,\"gongJi\":330,\"huJia\":159,\"faGong\":338,\"fakang\":161,\"suDu\":47,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":55,\"special\":3321,\"score\":\"110\",\"wuXing\":\"8\",\"skill\":\"6\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\\u201c\\u9ec4\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u6210\\u662f\\u975e\\uff08\\u90ed\\u664b\\u5b89\\u9970\\u6f14\\uff09\\uff0c\\u672c\\u662f\\u5e02\\u4e95\\u6df7\\u6df7\\uff0c\\u8bd9\\u8c10\\u6ed1\\u7a3d\\uff0c\\u4e0d\\u5b66\\u65e0\\u672f\\u5374\\u673a\\u667a\\u73b2\\u73d1\\uff0c\\u56e0\\u7f18\\u9645\\u4f1a\\u6210\\u4e3a\\u201c\\u4e0d\\u8d25\\u987d\\u7ae5\\u201d\\u53e4\\u4e09\\u901a\\u7684\\u4f20\\u4eba\\uff0c\\u6b66\\u529f\\u5929\\u4e0b\\u7b2c\\u4e00\\u3002\\u4ed6\\u4e00\\u65e6\\u4f7f\\u51fa\\u7edd\\u5b66\\u201c\\u91d1\\u521a\\u4e0d\\u574f\\u795e\\u529f\\u201d\\uff0c\\u4fbf\\u4f1a\\u6d51\\u8eab\\u53d8\\u6210\\u91d1\\u8272\\uff0c\\u53d8\\u8eab\\u6210\\u4e3a\\u91d1\\u4eba\\uff0c\\u529b\\u5927\\u65e0\\u7a77\\uff0c\\u5bd2\\u6691\\u4e0d\\u754f\\uff0c\\u6c34\\u706b\\u4e0d\\u60e7\\uff0c\\u5200\\u67aa\\u4e0d\\u5165\\uff0c\\u767e\\u6bd2\\u4e0d\\u4fb5\\u3002\",\"lucky\":\"16\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685171864428.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":238,\"jingYan\":123,\"jianShang\":21.5,\"zhenShang\":21.5,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":120,\"agile\":104,\"intelligence\":112,\"minPower\":\"12\",\"minAgile\":\"5\",\"minIntelligence\":\"6\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"5\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"24\",\"state_name\":{\"id\":\"1\",\"name\":\"\\u51e1\\u4eba\",\"point\":\"0\",\"value\":\"0\",\"time\":\"100\",\"difficult\":\"1\"}},{\"name\":\"\\u6731\\u65e0\\u89c6\",\"id\":9,\"biology\":\"1\",\"state\":2,\"grade\":5,\"shengMing\":1650,\"moFa\":69,\"gongJi\":334,\"huJia\":146,\"faGong\":378,\"fakang\":157,\"suDu\":48,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":47,\"special\":2982.3999999999996,\"score\":\"103\",\"wuXing\":\"13\",\"skill\":\"7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5916\\u53f7\\u94c1\\u80c6\\u795e\\u4faf\\uff0c\\u4e3a\\u5f53\\u4eca\\u7687\\u4e0a\\u53d4\\u7236\\u3002\\u5f53\\u5e74\\u5148\\u7687\\u9a7e\\u5d29\\u524d\\uff0c\\u552f\\u6050\\u6b63\\u5fb7\\u5e74\\u5c11\\uff0c\\u6613\\u88ab\\u5978\\u4eba\\u64cd\\u63a7\\uff0c\\u6216\\u65e0\\u529b\\u4e3b\\u6301\\u671d\\u653f\\uff0c\\u4e0d\\u61c2\\u5206\\u8fa8\\u5fe0\\u5978\\uff0c\\u4e8e\\u662f\\u7279\\u4ee4\\u7687\\u5f1f\\u6731\\u65e0\\u89c6\\u521b\\u7acb\\u62a4\\u9f99\\u5c71\\u5e84\\uff0c\\u6743\\u529b\\u53ef\\u51cc\\u9a7e\\u6240\\u6709\\u671d\\u5ef7\\u673a\\u6784\\uff0c\\u5e76\\u8d50\\u4e88\\u5148\\u7687\\u4e4b\\u4e39\\u4e66\\u94c1\\u5377\\u3001\\u5c1a\\u65b9\\u5b9d\\u5251\\uff0c\\u53ef\\u4ee5\\u4e0a\\u65a9\\u660f\\u541b\\uff0c\\u4e0b\\u65a9\\u8c17\\u81e3\\uff0c\\u7ed9\\u4e86\\u6b63\\u5fb7\\u4e00\\u4e2a\\u6700\\u9ad8\\u7279\\u52a1\\u673a\\u6784\\uff0c\\u5236\\u8861\\u4e1c\\u5382\\u3002\",\"lucky\":\"21\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686647458929.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":226,\"jingYan\":118,\"jianShang\":25.699999999999999,\"zhenShang\":25.699999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":60,\"agile\":115,\"intelligence\":160,\"minPower\":\"4\",\"minAgile\":\"9\",\"minIntelligence\":\"17\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"6\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5b97\\u5e08\",\"point\":\"20\",\"value\":\"50\",\"time\":\"200\",\"difficult\":\"1\"}}]},{\"x\":667,\"y\":525,\"map_int\":4,\"map_status\":1,\"total\":1,\"yiXing\":5,\"grade\":10,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":null,\"do6\":6,\"do7\":null,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u4e86\\u7a7a\",\"id\":\"173\",\"biology\":\"1\",\"state\":2,\"grade\":3,\"shengMing\":1392,\"moFa\":44,\"gongJi\":256,\"huJia\":133,\"faGong\":302,\"fakang\":144,\"suDu\":35,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":49,\"special\":2599.8000000000002,\"score\":\"132\",\"wuXing\":\"8\",\"skill\":\"2,10,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5c11\\u6797\\u5bfa\\u4e86\\u7a7a\\u5927\\u5e08\\u3002\",\"lucky\":\"17\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686329308948.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":280,\"jingYan\":143,\"jianShang\":21.899999999999999,\"zhenShang\":21.899999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":72,\"agile\":69,\"intelligence\":117,\"minPower\":\"11\",\"minAgile\":\"5\",\"minIntelligence\":\"25\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"21\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5b97\\u5e08\",\"point\":\"20\",\"value\":\"50\",\"time\":\"200\",\"difficult\":\"1\"}},{\"name\":\"\\u66f9\\u6b63\\u6df3\",\"id\":6,\"biology\":\"1\",\"state\":3,\"grade\":8,\"shengMing\":3520,\"moFa\":120,\"gongJi\":625,\"huJia\":297,\"faGong\":771,\"fakang\":333,\"suDu\":85,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":102,\"special\":6021.3999999999996,\"score\":\"110\",\"wuXing\":\"7\",\"skill\":\"11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e1c\\u5382\\u603b\\u7ba1\\u592a\\u76d1\\u66f9\\u6b63\\u6df3\\u3002\\u91ce\\u5fc3\\u52c3\\u52c3\\u7684\\u66f9\\u6b63\\u6df3\\u6743\\u52bf\\u6ed4\\u5929\\uff0c\\u4ed6\\u4fee\\u70bc\\u201c\\u7ae5\\u5b50\\u529f\\u201c\\u5927\\u6210\\u3001\\u6b66\\u529f\\u76d6\\u4e16\\r\\n\\u5929\\u4e0b\\u7b2c\\u4e00\\r\\n\\u5929\\u4e0b\\u7b2c\\u4e00(22\\u5f20)\\r\\n \\uff0c\\u53c8\\u81ea\\u6043\\u638c\\u7ba1\\u4e1c\\u5382\\uff0c\\u6743\\u503e\\u671d\\u91ce\\uff0c\\u7ed3\\u515a\\u8425\\u79c1\\uff0c\\u52fe\\u7ed3\\u8d2a\\u5b98\\uff0c\\u9677\\u5bb3\\u5fe0\\u826f\\uff0c\\u65e0\\u6076\\u4e0d\\u4f5c\\u3002\",\"lucky\":\"23\",\"maxNature\":70,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686979525672.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":246,\"jingYan\":131,\"jianShang\":33.200000000000003,\"zhenShang\":33.200000000000003,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2800,\"power\":168,\"agile\":184,\"intelligence\":336,\"minPower\":\"3\",\"minAgile\":\"5\",\"minIntelligence\":\"11\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"9\",\"state_name\":{\"id\":\"3\",\"name\":\"\\u5148\\u5929\",\"point\":\"40\",\"value\":\"100\",\"time\":\"500\",\"difficult\":\"1\"}}]}]', '/app_resources/word/地图1.jpg');
INSERT INTO `x2_user_words` VALUES ('4', '0', '40', '1', '1', '1', '0', '[{\"x\":267,\"y\":375,\"map_int\":0,\"map_status\":1,\"total\":2,\"yiXing\":4,\"grade\":6,\"nature_do\":{\"id\":\"1\",\"do1\":1,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":null,\"do6\":null,\"do7\":7,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u7720\\u72c2\\u56db\\u90ce\",\"id\":1,\"biology\":\"1\",\"state\":2,\"grade\":6,\"shengMing\":2964,\"moFa\":72,\"gongJi\":380,\"huJia\":161,\"faGong\":311,\"fakang\":143,\"suDu\":54,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":50,\"special\":4376,\"score\":\"111\",\"wuXing\":\"8\",\"skill\":\"11,4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e1c\\u701b\\u8457\\u540d\\u5251\\u5ba2\\u7720\\u72c2\\u56db\\u90ce\\u300c\\u5e7b\\u5251\\u300d\\u3002\",\"lucky\":\"15\",\"maxNature\":50,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":1,\"sex\":\"1\",\"jingBi\":244,\"jingYan\":128,\"jianShang\":20,\"zhenShang\":20,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":198,\"agile\":132,\"intelligence\":60,\"minPower\":\"21\",\"minAgile\":\"8\",\"minIntelligence\":\"7\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"15\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5148\\u5929\",\"point\":\"20\",\"value\":\"20\",\"time\":\"200\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u7720\\u72c2\\u56db\\u90ce\",\"id\":\"173\",\"biology\":\"1\",\"state\":1,\"grade\":6,\"shengMing\":2964,\"moFa\":72,\"gongJi\":380,\"huJia\":161,\"faGong\":311,\"fakang\":143,\"suDu\":54,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":50,\"special\":4376,\"score\":\"111\",\"wuXing\":\"8\",\"skill\":\"11,4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e1c\\u701b\\u8457\\u540d\\u5251\\u5ba2\\u7720\\u72c2\\u56db\\u90ce\\u300c\\u5e7b\\u5251\\u300d\\u3002\",\"lucky\":\"15\",\"maxNature\":50,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":244,\"jingYan\":128,\"jianShang\":20,\"zhenShang\":20,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":198,\"agile\":132,\"intelligence\":60,\"minPower\":\"21\",\"minAgile\":\"8\",\"minIntelligence\":\"7\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"15\",\"state_name\":{\"id\":\"1\",\"name\":\"\\u51e1\\u4eba\",\"point\":\"0\",\"value\":\"0\",\"time\":\"100\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u4e0a\\u5b98\\u6d77\\u68e0\",\"id\":7,\"biology\":\"1\",\"state\":2,\"grade\":6,\"shengMing\":2328,\"moFa\":77,\"gongJi\":422,\"huJia\":200,\"faGong\":411,\"fakang\":197,\"suDu\":62,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":69,\"special\":4064.8000000000002,\"score\":\"130\",\"wuXing\":\"13\",\"skill\":\"2,6,4,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u7384\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u4e0a\\u5b98\\u6d77\\u68e0\\uff08\\u53f6\\u7487\\u9970\\u6f14\\uff09\\uff0c\\u8273\\u5982\\u6843\\u674e\\uff0c\\u673a\\u667a\\u8fc7\\u4eba\\uff0c\\u7434\\u68cb\\u4e66\\u753b\\uff0c\\u533b\\u535c\\u661f\\u76f8\\uff0c\\u65e0\\u4e0d\\u901a\\u6653\\uff0c\\u5e73\\u65e5\\u5374\\u4f5c\\u7537\\u88c5\\u6253\\u626e\\uff0c\\u4e3b\\u6301\\u201c\\u5929\\u4e0b\\u7b2c\\u4e00\\u5e84\\u201d\\uff0c\\u5e84\\u5185\\u4eba\\u624d\\u6d4e\\u6d4e\\uff0c\\u638c\\u63e1\\u5929\\u4e0b\\u673a\\u5bc6\\u3002\",\"lucky\":\"17\",\"maxNature\":50,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":282,\"jingYan\":147,\"jianShang\":23.899999999999999,\"zhenShang\":23.899999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":120,\"agile\":138,\"intelligence\":126,\"minPower\":\"10\",\"minAgile\":\"20\",\"minIntelligence\":\"15\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"8\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5148\\u5929\",\"point\":\"20\",\"value\":\"20\",\"time\":\"200\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u517d\"}]},{\"x\":1067,\"y\":375,\"map_int\":1,\"map_status\":1,\"total\":1,\"yiXing\":5,\"grade\":5,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":5,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5229\\u79c0\\u516c\\u4e3b\",\"id\":\"173\",\"biology\":\"1\",\"state\":3,\"grade\":4,\"shengMing\":2056,\"moFa\":59,\"gongJi\":258,\"huJia\":108,\"faGong\":339,\"fakang\":128,\"suDu\":31,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":33,\"special\":3224.6000000000004,\"score\":\"143\",\"wuXing\":\"18\",\"skill\":\"7,4\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u51fa\\u4e91\\u56fd\\u516c\\u4e3b\\u3002\",\"lucky\":\"27\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":304,\"jingYan\":156,\"jianShang\":30.300000000000001,\"zhenShang\":30.300000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":120,\"agile\":72,\"intelligence\":156,\"minPower\":\"6\",\"minAgile\":\"5\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"16\",\"state_name\":{\"id\":\"3\",\"name\":\"\\u7ec3\\u6c14\",\"point\":\"40\",\"value\":\"50\",\"time\":\"500\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u6e38\\u4fa0\",\"id\":5,\"biology\":\"1\",\"state\":2,\"grade\":5,\"shengMing\":2000,\"moFa\":70,\"gongJi\":386,\"huJia\":195,\"faGong\":439,\"fakang\":208,\"suDu\":54,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":71,\"special\":3729.1999999999998,\"score\":\"126\",\"wuXing\":\"6\",\"skill\":\"4,10,6,2\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":272,\"jingYan\":141,\"jianShang\":27.100000000000001,\"zhenShang\":27.100000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":95,\"agile\":110,\"intelligence\":165,\"minPower\":\"9\",\"minAgile\":\"10\",\"minIntelligence\":\"12\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"29\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5148\\u5929\",\"point\":\"20\",\"value\":\"20\",\"time\":\"200\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u517d\"}]}]', '/app_resources/word/地图2.jpg');
INSERT INTO `x2_user_words` VALUES ('5', '0', '39', '1', '0', '1', '0', '[{\"x\":667,\"y\":225,\"map_int\":0,\"map_status\":1,\"total\":2,\"yiXing\":2,\"grade\":2,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":4,\"do5\":5,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u9b54\\u6cd5\\u5c11\\u5973\",\"id\":\"173\",\"biology\":\"3\",\"state\":2,\"grade\":2,\"shengMing\":836,\"moFa\":25,\"gongJi\":130,\"huJia\":64,\"faGong\":136,\"fakang\":65,\"suDu\":17,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":23,\"special\":1458.5999999999999,\"score\":\"99\",\"wuXing\":\"13\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"5\",\"descript\":\"\",\"lucky\":\"28\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u9b54\\u6cd5\\u5c11\\u5973\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":212,\"jingYan\":108,\"jianShang\":30.300000000000001,\"zhenShang\":30.300000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":48,\"agile\":36,\"intelligence\":42,\"minPower\":\"11\",\"minAgile\":\"3\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"33\",\"state_name\":{\"id\":\"2\",\"name\":\"\\u5148\\u5929\",\"point\":\"20\",\"value\":\"20\",\"time\":\"200\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u9ab7\\u9ac5\\u5175\",\"id\":4,\"biology\":\"4\",\"state\":3,\"grade\":2,\"shengMing\":688,\"moFa\":24,\"gongJi\":117,\"huJia\":65,\"faGong\":122,\"fakang\":66,\"suDu\":15,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":26,\"special\":1257.1999999999998,\"score\":\"56\",\"wuXing\":\"12\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":null,\"lucky\":\"14\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u6d1b\\u514b\\u4eba\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":126,\"jingYan\":65,\"jianShang\":16.600000000000001,\"zhenShang\":16.600000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"D\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":38,\"agile\":24,\"intelligence\":30,\"minPower\":\"4\",\"minAgile\":\"1\",\"minIntelligence\":\"2\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"38\",\"state_name\":{\"id\":\"3\",\"name\":\"\\u7ec3\\u6c14\",\"point\":\"40\",\"value\":\"50\",\"time\":\"500\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u9b3c\"},{\"name\":\"\\u6d1b\\u514b\\u4eba\",\"id\":5,\"biology\":\"6\",\"state\":1,\"grade\":2,\"shengMing\":1120,\"moFa\":23,\"gongJi\":110,\"huJia\":53,\"faGong\":103,\"fakang\":51,\"suDu\":12,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":19,\"special\":1642.8000000000002,\"score\":\"88\",\"wuXing\":\"8\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"5\",\"descript\":\"\",\"lucky\":\"23\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u6d1b\\u514b\\u4eba\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":190,\"jingYan\":97,\"jianShang\":24.899999999999999,\"zhenShang\":24.899999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"C\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":84,\"agile\":24,\"intelligence\":16,\"minPower\":\"16\",\"minAgile\":\"3\",\"minIntelligence\":\"2\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"37\",\"state_name\":{\"id\":\"1\",\"name\":\"\\u51e1\\u4eba\",\"point\":\"0\",\"value\":\"0\",\"time\":\"100\",\"difficult\":\"1\"},\"zhong_zhu\":\"\\u5f02\"}]}]', '/app_resources/word/地图2.jpg');
INSERT INTO `x2_user_words` VALUES ('8', '0', '32', '1', '1', '3', '0', '[{\"x\":867,\"y\":75,\"map_int\":0,\"map_status\":1,\"total\":8,\"yiXing\":5,\"grade\":35,\"nature_do\":{\"id\":\"1\",\"do1\":1,\"do2\":2,\"do3\":3,\"do4\":4,\"do5\":5,\"do6\":6,\"do7\":7,\"do8\":8,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5c06\\u519b\",\"id\":1,\"biology\":\"1\",\"state\":18,\"grade\":18,\"shengMing\":8424,\"moFa\":250,\"gongJi\":1164,\"huJia\":510,\"faGong\":1354,\"fakang\":557,\"suDu\":151,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":164,\"special\":12698.8,\"score\":\"124\",\"wuXing\":\"19\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":170,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":294,\"jingYan\":165,\"jianShang\":36.400000000000006,\"zhenShang\":36.400000000000006,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":15300,\"power\":486,\"agile\":342,\"intelligence\":540,\"minPower\":\"12\",\"minAgile\":\"7\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"28\",\"state_name\":{\"id\":\"18\",\"name\":\"\\u5723\\u4eba\",\"point\":\"340\",\"value\":\"12000\",\"time\":\"2000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u91ce\\u732a\",\"id\":2,\"biology\":\"1\",\"state\":17,\"grade\":35,\"shengMing\":16520,\"moFa\":463,\"gongJi\":2158,\"huJia\":949,\"faGong\":2326,\"fakang\":991,\"suDu\":281,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":308,\"special\":24246.6,\"score\":\"114\",\"wuXing\":\"12\",\"skill\":\"8,2\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"19\",\"maxNature\":340,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u53f8\\u9a6c\\u61ff.png\",\"yiXing\":1,\"sex\":\"1\",\"jingBi\":308,\"jingYan\":189,\"jianShang\":49.8,\"zhenShang\":49.8,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":59500,\"power\":1015,\"agile\":630,\"intelligence\":805,\"minPower\":\"11\",\"minAgile\":\"3\",\"minIntelligence\":\"6\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"25\",\"state_name\":{\"id\":\"17\",\"name\":\"\\u51c6\\u5723\",\"point\":\"320\",\"value\":\"8000\",\"time\":\"1000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u66f9\\u6b63\\u6df3\",\"id\":3,\"biology\":\"1\",\"state\":18,\"grade\":16,\"shengMing\":7040,\"moFa\":241,\"gongJi\":1225,\"huJia\":568,\"faGong\":1517,\"fakang\":641,\"suDu\":167,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":191,\"special\":11776.2,\"score\":\"110\",\"wuXing\":\"7\",\"skill\":\"11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e1c\\u5382\\u603b\\u7ba1\\u592a\\u76d1\\u66f9\\u6b63\\u6df3\\u3002\\u91ce\\u5fc3\\u52c3\\u52c3\\u7684\\u66f9\\u6b63\\u6df3\\u6743\\u52bf\\u6ed4\\u5929\\uff0c\\u4ed6\\u4fee\\u70bc\\u201c\\u7ae5\\u5b50\\u529f\\u201c\\u5927\\u6210\\u3001\\u6b66\\u529f\\u76d6\\u4e16\\r\\n\\u5929\\u4e0b\\u7b2c\\u4e00\\r\\n\\u5929\\u4e0b\\u7b2c\\u4e00(22\\u5f20)\\r\\n \\uff0c\\u53c8\\u81ea\\u6043\\u638c\\u7ba1\\u4e1c\\u5382\\uff0c\\u6743\\u503e\\u671d\\u91ce\\uff0c\\u7ed3\\u515a\\u8425\\u79c1\\uff0c\\u52fe\\u7ed3\\u8d2a\\u5b98\\uff0c\\u9677\\u5bb3\\u5fe0\\u826f\\uff0c\\u65e0\\u6076\\u4e0d\\u4f5c\\u3002\",\"lucky\":\"23\",\"maxNature\":150,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":262,\"jingYan\":147,\"jianShang\":42.1,\"zhenShang\":42.1,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":12000,\"power\":336,\"agile\":368,\"intelligence\":672,\"minPower\":\"3\",\"minAgile\":\"5\",\"minIntelligence\":\"11\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"9\",\"state_name\":{\"id\":\"18\",\"name\":\"\\u5723\\u4eba\",\"point\":\"340\",\"value\":\"12000\",\"time\":\"2000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u4e91\\u7f57\\u90e1\\u4e3b\",\"id\":4,\"biology\":\"1\",\"state\":18,\"grade\":11,\"shengMing\":5412,\"moFa\":158,\"gongJi\":848,\"huJia\":408,\"faGong\":974,\"fakang\":440,\"suDu\":115,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":142,\"special\":8810.400000000001,\"score\":\"154\",\"wuXing\":\"15\",\"skill\":\"8,4,2,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f53\\u4eca\\u7687\\u4e0a\\u4e4b\\u59b9\\u3002\",\"lucky\":\"17\",\"maxNature\":100,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5c71\\u8d3c.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":340,\"jingYan\":181,\"jianShang\":31.200000000000003,\"zhenShang\":31.200000000000003,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":5500,\"power\":308,\"agile\":242,\"intelligence\":374,\"minPower\":\"7\",\"minAgile\":\"5\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"7\",\"state_name\":{\"id\":\"18\",\"name\":\"\\u5723\\u4eba\",\"point\":\"340\",\"value\":\"12000\",\"time\":\"2000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u4e91\\u7f57\\u90e1\\u4e3b\",\"id\":5,\"biology\":\"1\",\"state\":17,\"grade\":7,\"shengMing\":3444,\"moFa\":100,\"gongJi\":550,\"huJia\":271,\"faGong\":631,\"fakang\":291,\"suDu\":75,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":96,\"special\":5762.200000000001,\"score\":\"154\",\"wuXing\":\"15\",\"skill\":\"8,4,2,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f53\\u4eca\\u7687\\u4e0a\\u4e4b\\u59b9\\u3002\",\"lucky\":\"17\",\"maxNature\":60,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5c71\\u8d3c.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":332,\"jingYan\":173,\"jianShang\":26.6,\"zhenShang\":26.6,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":196,\"agile\":154,\"intelligence\":238,\"minPower\":\"7\",\"minAgile\":\"5\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"7\",\"state_name\":{\"id\":\"17\",\"name\":\"\\u51c6\\u5723\",\"point\":\"320\",\"value\":\"8000\",\"time\":\"1000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u6b63\\u5fb7\\u7687\\u5e1d\",\"id\":6,\"biology\":\"1\",\"state\":17,\"grade\":25,\"shengMing\":8700,\"moFa\":318,\"gongJi\":1940,\"huJia\":743,\"faGong\":1460,\"fakang\":623,\"suDu\":336,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":197,\"special\":14562.400000000001,\"score\":\"100\",\"wuXing\":\"6\",\"skill\":\"8,6\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u7687\\u4e0a,\\u4e91\\u7f57\\u90e1\\u4e3b\\u7684\\u7687\\u5144\\u3002\",\"lucky\":\"27\",\"maxNature\":240,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u53f8\\u9a6c\\u61ff.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":260,\"jingYan\":155,\"jianShang\":46.7,\"zhenShang\":46.7,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":30000,\"power\":350,\"agile\":925,\"intelligence\":425,\"minPower\":\"2\",\"minAgile\":\"19\",\"minIntelligence\":\"3\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"10\",\"state_name\":{\"id\":\"17\",\"name\":\"\\u51c6\\u5723\",\"point\":\"320\",\"value\":\"8000\",\"time\":\"1000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u4e91\\u7f57\\u90e1\\u4e3b\",\"id\":7,\"biology\":\"1\",\"state\":18,\"grade\":4,\"shengMing\":1968,\"moFa\":57,\"gongJi\":329,\"huJia\":169,\"faGong\":375,\"fakang\":180,\"suDu\":45,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":62,\"special\":3482.3999999999996,\"score\":\"154\",\"wuXing\":\"15\",\"skill\":\"8,4,2,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f53\\u4eca\\u7687\\u4e0a\\u4e4b\\u59b9\\u3002\",\"lucky\":\"17\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5c71\\u8d3c.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":326,\"jingYan\":167,\"jianShang\":23.2,\"zhenShang\":23.2,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":112,\"agile\":88,\"intelligence\":136,\"minPower\":\"7\",\"minAgile\":\"5\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"7\",\"state_name\":{\"id\":\"18\",\"name\":\"\\u5723\\u4eba\",\"point\":\"340\",\"value\":\"12000\",\"time\":\"2000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u5f20\\u65e0\\u5fcc\",\"id\":8,\"biology\":\"1\",\"state\":18,\"grade\":29,\"shengMing\":16066,\"moFa\":410,\"gongJi\":2032,\"huJia\":857,\"faGong\":2254,\"fakang\":913,\"suDu\":270,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":262,\"special\":23437.4,\"score\":\"149\",\"wuXing\":\"6\",\"skill\":\"4,6,7,8,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u67f3\\u751f\\u4f46\\u9a6c\\u5b88\\u662f\\u6b66\\u4fa0\\u7535\\u89c6\\u5267\\u300a\\u5929\\u4e0b\\u7b2c\\u4e00\\u300b\\u4e2d\\u7684\\u89d2\\u8272\\uff0c\\u662f\\u8457\\u540d\\u5251\\u5ba2\\u67f3\\u751f\\u5341\\u5175\\u536b\\u7684\\u7236\\u4eb2\\uff0c\\u4e5f\\u662f\\u6b66\\u5b66\\u5b97\\u5e08\\u3002\",\"lucky\":\"10\",\"maxNature\":280,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":366,\"jingYan\":212,\"jianShang\":36.2,\"zhenShang\":36.2,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":40600,\"power\":1015,\"agile\":638,\"intelligence\":870,\"minPower\":\"24\",\"minAgile\":\"11\",\"minIntelligence\":\"13\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"23\",\"state_name\":{\"id\":\"18\",\"name\":\"\\u5723\\u4eba\",\"point\":\"340\",\"value\":\"12000\",\"time\":\"2000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"}]},{\"x\":67,\"y\":375,\"map_int\":1,\"map_status\":1,\"total\":2,\"yiXing\":5,\"grade\":13,\"nature_do\":{\"id\":\"1\",\"do1\":1,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":null,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":9,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u4e0a\\u5b98\\u6d77\\u68e0\",\"id\":1,\"biology\":\"1\",\"state\":17,\"grade\":13,\"shengMing\":5044,\"moFa\":168,\"gongJi\":878,\"huJia\":396,\"faGong\":853,\"fakang\":390,\"suDu\":129,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":131,\"special\":8300.2,\"score\":\"130\",\"wuXing\":\"13\",\"skill\":\"2,6,4,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u7384\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u4e0a\\u5b98\\u6d77\\u68e0\\uff08\\u53f6\\u7487\\u9970\\u6f14\\uff09\\uff0c\\u8273\\u5982\\u6843\\u674e\\uff0c\\u673a\\u667a\\u8fc7\\u4eba\\uff0c\\u7434\\u68cb\\u4e66\\u753b\\uff0c\\u533b\\u535c\\u661f\\u76f8\\uff0c\\u65e0\\u4e0d\\u901a\\u6653\\uff0c\\u5e73\\u65e5\\u5374\\u4f5c\\u7537\\u88c5\\u6253\\u626e\\uff0c\\u4e3b\\u6301\\u201c\\u5929\\u4e0b\\u7b2c\\u4e00\\u5e84\\u201d\\uff0c\\u5e84\\u5185\\u4eba\\u624d\\u6d4e\\u6d4e\\uff0c\\u638c\\u63e1\\u5929\\u4e0b\\u673a\\u5bc6\\u3002\",\"lucky\":\"17\",\"maxNature\":120,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":296,\"jingYan\":161,\"jianShang\":30.1,\"zhenShang\":30.1,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":7800,\"power\":260,\"agile\":299,\"intelligence\":273,\"minPower\":\"10\",\"minAgile\":\"20\",\"minIntelligence\":\"15\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"8\",\"state_name\":{\"id\":\"17\",\"name\":\"\\u51c6\\u5723\",\"point\":\"320\",\"value\":\"8000\",\"time\":\"1000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u6731\\u65e0\\u89c6\",\"id\":\"173\",\"biology\":\"1\",\"state\":18,\"grade\":12,\"shengMing\":3960,\"moFa\":166,\"gongJi\":787,\"huJia\":336,\"faGong\":891,\"fakang\":362,\"suDu\":114,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":105,\"special\":6886,\"score\":\"103\",\"wuXing\":\"13\",\"skill\":\"7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5916\\u53f7\\u94c1\\u80c6\\u795e\\u4faf\\uff0c\\u4e3a\\u5f53\\u4eca\\u7687\\u4e0a\\u53d4\\u7236\\u3002\\u5f53\\u5e74\\u5148\\u7687\\u9a7e\\u5d29\\u524d\\uff0c\\u552f\\u6050\\u6b63\\u5fb7\\u5e74\\u5c11\\uff0c\\u6613\\u88ab\\u5978\\u4eba\\u64cd\\u63a7\\uff0c\\u6216\\u65e0\\u529b\\u4e3b\\u6301\\u671d\\u653f\\uff0c\\u4e0d\\u61c2\\u5206\\u8fa8\\u5fe0\\u5978\\uff0c\\u4e8e\\u662f\\u7279\\u4ee4\\u7687\\u5f1f\\u6731\\u65e0\\u89c6\\u521b\\u7acb\\u62a4\\u9f99\\u5c71\\u5e84\\uff0c\\u6743\\u529b\\u53ef\\u51cc\\u9a7e\\u6240\\u6709\\u671d\\u5ef7\\u673a\\u6784\\uff0c\\u5e76\\u8d50\\u4e88\\u5148\\u7687\\u4e4b\\u4e39\\u4e66\\u94c1\\u5377\\u3001\\u5c1a\\u65b9\\u5b9d\\u5251\\uff0c\\u53ef\\u4ee5\\u4e0a\\u65a9\\u660f\\u541b\\uff0c\\u4e0b\\u65a9\\u8c17\\u81e3\\uff0c\\u7ed9\\u4e86\\u6b63\\u5fb7\\u4e00\\u4e2a\\u6700\\u9ad8\\u7279\\u52a1\\u673a\\u6784\\uff0c\\u5236\\u8861\\u4e1c\\u5382\\u3002\",\"lucky\":\"21\",\"maxNature\":110,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u8c82\\u8749.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":240,\"jingYan\":132,\"jianShang\":31.5,\"zhenShang\":31.5,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":6600,\"power\":144,\"agile\":276,\"intelligence\":384,\"minPower\":\"4\",\"minAgile\":\"9\",\"minIntelligence\":\"17\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"6\",\"state_name\":{\"id\":\"18\",\"name\":\"\\u5723\\u4eba\",\"point\":\"340\",\"value\":\"12000\",\"time\":\"2000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"},{\"name\":\"\\u91ce\\u732a\",\"id\":9,\"biology\":\"1\",\"state\":19,\"grade\":4,\"shengMing\":1888,\"moFa\":52,\"gongJi\":258,\"huJia\":120,\"faGong\":277,\"fakang\":124,\"suDu\":33,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":41,\"special\":2990.2,\"score\":\"114\",\"wuXing\":\"12\",\"skill\":\"8,2\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"19\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u53f8\\u9a6c\\u61ff.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":246,\"jingYan\":127,\"jianShang\":23.1,\"zhenShang\":23.1,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":116,\"agile\":72,\"intelligence\":92,\"minPower\":\"11\",\"minAgile\":\"3\",\"minIntelligence\":\"6\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"25\",\"state_name\":{\"id\":\"19\",\"name\":\"\\u5929\\u9053\",\"point\":\"360\",\"value\":\"20000\",\"time\":\"5000000\",\"difficult\":\"5\"},\"zhong_zhu\":\"\\u4eba\"}]}]', '/app_resources/word/地图2.jpg');
INSERT INTO `x2_user_words` VALUES ('6', '0', '5', '1', '1', '3', '0', '[{\"x\":667,\"y\":225,\"map_int\":0,\"map_status\":1,\"total\":5,\"yiXing\":2,\"grade\":11,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":3,\"do4\":4,\"do5\":null,\"do6\":6,\"do7\":null,\"do8\":8,\"do9\":9,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u66f9\\u6b63\\u6df3\",\"id\":\"173\",\"biology\":\"1\",\"state\":6,\"grade\":5,\"shengMing\":2200,\"moFa\":75,\"gongJi\":401,\"huJia\":196,\"faGong\":492,\"fakang\":219,\"suDu\":55,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":69,\"special\":3868.8000000000002,\"score\":\"110\",\"wuXing\":\"7\",\"skill\":\"11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e1c\\u5382\\u603b\\u7ba1\\u592a\\u76d1\\u66f9\\u6b63\\u6df3\\u3002\\u91ce\\u5fc3\\u52c3\\u52c3\\u7684\\u66f9\\u6b63\\u6df3\\u6743\\u52bf\\u6ed4\\u5929\\uff0c\\u4ed6\\u4fee\\u70bc\\u201c\\u7ae5\\u5b50\\u529f\\u201c\\u5927\\u6210\\u3001\\u6b66\\u529f\\u76d6\\u4e16\\r\\n\\u5929\\u4e0b\\u7b2c\\u4e00\\r\\n\\u5929\\u4e0b\\u7b2c\\u4e00(22\\u5f20)\\r\\n \\uff0c\\u53c8\\u81ea\\u6043\\u638c\\u7ba1\\u4e1c\\u5382\\uff0c\\u6743\\u503e\\u671d\\u91ce\\uff0c\\u7ed3\\u515a\\u8425\\u79c1\\uff0c\\u52fe\\u7ed3\\u8d2a\\u5b98\\uff0c\\u9677\\u5bb3\\u5fe0\\u826f\\uff0c\\u65e0\\u6076\\u4e0d\\u4f5c\\u3002\",\"lucky\":\"23\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686979525672.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":240,\"jingYan\":125,\"jianShang\":29.899999999999999,\"zhenShang\":29.899999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":105,\"agile\":115,\"intelligence\":210,\"minPower\":\"3\",\"minAgile\":\"5\",\"minIntelligence\":\"11\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"9\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}},{\"name\":\"\\u53e4\\u4e09\\u901a\",\"id\":3,\"biology\":\"1\",\"state\":6,\"grade\":9,\"shengMing\":4806,\"moFa\":134,\"gongJi\":722,\"huJia\":335,\"faGong\":843,\"fakang\":365,\"suDu\":98,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":112,\"special\":7679.3999999999996,\"score\":\"145\",\"wuXing\":\"11\",\"skill\":\"6,5,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e0d\\u8d25\\u987d\\u7ae5\",\"lucky\":\"20\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685905546655.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":318,\"jingYan\":168,\"jianShang\":31.200000000000003,\"zhenShang\":31.200000000000003,\"color\":\"#00ffff\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":279,\"agile\":216,\"intelligence\":342,\"minPower\":\"8\",\"minAgile\":\"3\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"3\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}},{\"name\":\"\\u6e38\\u4fa0\",\"id\":4,\"biology\":\"1\",\"state\":7,\"grade\":11,\"shengMing\":4400,\"moFa\":155,\"gongJi\":805,\"huJia\":385,\"faGong\":921,\"fakang\":414,\"suDu\":112,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":134,\"special\":7644.7999999999993,\"score\":\"126\",\"wuXing\":\"6\",\"skill\":\"4,10,6,2\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":100,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685236865063.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":284,\"jingYan\":153,\"jianShang\":33.399999999999999,\"zhenShang\":33.399999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":5500,\"power\":209,\"agile\":242,\"intelligence\":363,\"minPower\":\"9\",\"minAgile\":\"10\",\"minIntelligence\":\"12\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"29\",\"state_name\":{\"id\":\"7\",\"name\":\"\\u5316\\u795e\",\"point\":\"120\",\"value\":\"800\",\"time\":\"10000\",\"difficult\":\"2\"}},{\"name\":\"\\u5251\\u5723\",\"id\":6,\"biology\":\"1\",\"state\":6,\"grade\":7,\"shengMing\":2688,\"moFa\":97,\"gongJi\":440,\"huJia\":188,\"faGong\":520,\"fakang\":208,\"suDu\":59,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":59,\"special\":4376.7999999999993,\"score\":\"106\",\"wuXing\":\"13\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\",\"lucky\":\"27\",\"maxNature\":60,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685267811876.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":236,\"jingYan\":125,\"jianShang\":32.899999999999999,\"zhenShang\":32.899999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":126,\"agile\":140,\"intelligence\":224,\"minPower\":\"8\",\"minAgile\":\"9\",\"minIntelligence\":\"25\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"17\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}},{\"name\":\"\\u9e92\\u9e9f\\u5b50\",\"id\":8,\"biology\":\"1\",\"state\":7,\"grade\":9,\"shengMing\":4824,\"moFa\":114,\"gongJi\":749,\"huJia\":308,\"faGong\":559,\"fakang\":261,\"suDu\":121,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":90,\"special\":7177,\"score\":\"116\",\"wuXing\":\"12\",\"skill\":\"2\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u9e92\\u9e9f\\u95e8\\u95e8\\u4e3b\\u3002\",\"lucky\":\"16\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703682069195640.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":260,\"jingYan\":139,\"jianShang\":25,\"zhenShang\":25,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":306,\"agile\":315,\"intelligence\":117,\"minPower\":\"8\",\"minAgile\":\"16\",\"minIntelligence\":\"7\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"19\",\"state_name\":{\"id\":\"7\",\"name\":\"\\u5316\\u795e\",\"point\":\"120\",\"value\":\"800\",\"time\":\"10000\",\"difficult\":\"2\"}},{\"name\":\"\\u4e8c\\u86cb\",\"id\":9,\"biology\":\"1\",\"state\":5,\"grade\":9,\"shengMing\":3852,\"moFa\":120,\"gongJi\":673,\"huJia\":274,\"faGong\":621,\"fakang\":261,\"suDu\":105,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":80,\"special\":6256,\"score\":\"140\",\"wuXing\":\"17\",\"skill\":\"2,4,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"26\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20200610\\/1591780494723708.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":308,\"jingYan\":163,\"jianShang\":34,\"zhenShang\":34,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":198,\"agile\":270,\"intelligence\":216,\"minPower\":\"5\",\"minAgile\":\"9\",\"minIntelligence\":\"7\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"30\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}}]},{\"x\":1067,\"y\":225,\"map_int\":1,\"map_status\":1,\"total\":2,\"yiXing\":5,\"grade\":19,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":5,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":9,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5c71\\u8d3c\",\"id\":\"173\",\"biology\":\"1\",\"state\":5,\"grade\":19,\"shengMing\":7410,\"moFa\":258,\"gongJi\":1668,\"huJia\":673,\"faGong\":1395,\"fakang\":605,\"suDu\":285,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":190,\"special\":12718,\"score\":\"127\",\"wuXing\":\"13\",\"skill\":\"4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"22\",\"maxNature\":180,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703687041511441.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":302,\"jingYan\":170,\"jianShang\":41,\"zhenShang\":41,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":17100,\"power\":304,\"agile\":760,\"intelligence\":475,\"minPower\":\"6\",\"minAgile\":\"14\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"26\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u6811\\u5996\",\"id\":5,\"biology\":\"1\",\"state\":5,\"grade\":11,\"shengMing\":4818,\"moFa\":133,\"gongJi\":737,\"huJia\":280,\"faGong\":537,\"fakang\":230,\"suDu\":118,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":75,\"special\":7035,\"score\":\"99\",\"wuXing\":\"12\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":100,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20200811\\/1597113740121818.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":230,\"jingYan\":126,\"jianShang\":27.5,\"zhenShang\":27.5,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":5500,\"power\":286,\"agile\":319,\"intelligence\":110,\"minPower\":\"7\",\"minAgile\":\"11\",\"minIntelligence\":\"5\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"31\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u7720\\u72c2\\u56db\\u90ce\",\"id\":9,\"biology\":\"1\",\"state\":5,\"grade\":18,\"shengMing\":8892,\"moFa\":217,\"gongJi\":1124,\"huJia\":467,\"faGong\":917,\"fakang\":415,\"suDu\":161,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":142,\"special\":12594.400000000001,\"score\":\"111\",\"wuXing\":\"8\",\"skill\":\"11,4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e1c\\u701b\\u8457\\u540d\\u5251\\u5ba2\\u7720\\u72c2\\u56db\\u90ce\\u300c\\u5e7b\\u5251\\u300d\\u3002\",\"lucky\":\"15\",\"maxNature\":170,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703687015670821.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":268,\"jingYan\":152,\"jianShang\":29.200000000000003,\"zhenShang\":29.200000000000003,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":15300,\"power\":594,\"agile\":396,\"intelligence\":180,\"minPower\":\"21\",\"minAgile\":\"8\",\"minIntelligence\":\"7\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"15\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}}]},{\"x\":867,\"y\":375,\"map_int\":2,\"map_status\":1,\"total\":5,\"yiXing\":4,\"grade\":14,\"nature_do\":{\"id\":\"1\",\"do1\":1,\"do2\":\"173\",\"do3\":3,\"do4\":null,\"do5\":null,\"do6\":6,\"do7\":7,\"do8\":8,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u6e38\\u4fa0\",\"id\":1,\"biology\":\"1\",\"state\":5,\"grade\":9,\"shengMing\":3600,\"moFa\":127,\"gongJi\":665,\"huJia\":322,\"faGong\":760,\"fakang\":346,\"suDu\":93,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":113,\"special\":6340.6000000000004,\"score\":\"126\",\"wuXing\":\"6\",\"skill\":\"4,10,6,2\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685236865063.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":280,\"jingYan\":149,\"jianShang\":31.300000000000001,\"zhenShang\":31.300000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":171,\"agile\":198,\"intelligence\":297,\"minPower\":\"9\",\"minAgile\":\"10\",\"minIntelligence\":\"12\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"29\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u7d20\\u5fc3\",\"id\":\"173\",\"biology\":\"1\",\"state\":6,\"grade\":10,\"shengMing\":5340,\"moFa\":137,\"gongJi\":896,\"huJia\":408,\"faGong\":810,\"fakang\":387,\"suDu\":138,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":133,\"special\":8487.6000000000004,\"score\":\"137\",\"wuXing\":\"9\",\"skill\":\"5,7,6\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u795e\\u4faf\\u6700\\u7231,\\u6210\\u662f\\u975e\\u4e4b\\u6bcd\\uff0c\\u53e4\\u4e09\\u901a\\u7684\\u8868\\u59b9\",\"lucky\":\"6\",\"maxNature\":90,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685149885948.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":304,\"jingYan\":162,\"jianShang\":19.300000000000001,\"zhenShang\":19.300000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":4500,\"power\":320,\"agile\":330,\"intelligence\":240,\"minPower\":\"11\",\"minAgile\":\"13\",\"minIntelligence\":\"10\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"12\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}},{\"name\":\"\\u5343\\u9762\\u90ce\\u541b\",\"id\":3,\"biology\":\"1\",\"state\":5,\"grade\":7,\"shengMing\":2814,\"moFa\":107,\"gongJi\":412,\"huJia\":179,\"faGong\":634,\"fakang\":235,\"suDu\":46,\"shanbi\":3,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":58,\"special\":4709.6000000000004,\"score\":\"131\",\"wuXing\":\"16\",\"skill\":\"4,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5343\\u9762\\u90ce\\u541b\\uff0c\\u64c5\\u957f\\u7528\\u6bd2\\u548c\\u6613\\u5bb9\\u3002\",\"lucky\":\"30\",\"maxNature\":60,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686555229965.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":286,\"jingYan\":150,\"jianShang\":35.799999999999997,\"zhenShang\":35.799999999999997,\"color\":\"#f3f3f3\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":126,\"agile\":98,\"intelligence\":329,\"minPower\":\"9\",\"minAgile\":\"8\",\"minIntelligence\":\"13\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"18\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\" \\u5f52\\u6d77\\u4e00\\u5200\",\"id\":6,\"biology\":\"1\",\"state\":5,\"grade\":4,\"shengMing\":1784,\"moFa\":52,\"gongJi\":290,\"huJia\":141,\"faGong\":286,\"fakang\":140,\"suDu\":41,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":50,\"special\":2886,\"score\":\"113\",\"wuXing\":\"17\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u5730\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u5f52\\u6d77\\u4e00\\u5200\\uff08\\u970d\\u5efa\\u534e\\u9970\\u6f14\\uff09\\uff0c\\u9ad8\\u50b2\\u5be1\\u8a00\\uff0c\\u7709\\u5b87\\u95f4\\u5e26\\u70b9\\u5fe7\\u90c1\\uff0c\\u56e0\\u5c11\\u65f6\\u7236\\u4eb2\\u5f52\\u6d77\\u767e\\u70bc\\u88ab\\u6740\\uff0c\\u4ed6\\u77e2\\u5fd7\\u8981\\u62a5\\u7236\\u4ec7\\uff0c\\u5200\\u6cd5\\u5929\\u4e0b\\u7b2c\\u4e00\\uff0c\\u6740\\u4eba\\u4ece\\u4e0d\\u7528\\u4f7f\\u7b2c\\u4e8c\\u5200\\u3002\",\"lucky\":\"20\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685395934717.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":244,\"jingYan\":126,\"jianShang\":25,\"zhenShang\":25,\"color\":\"#f3f3f3\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":104,\"agile\":88,\"intelligence\":84,\"minPower\":\"18\",\"minAgile\":\"14\",\"minIntelligence\":\"12\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"2\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u4e91\\u7f57\\u90e1\\u4e3b\",\"id\":7,\"biology\":\"1\",\"state\":5,\"grade\":7,\"shengMing\":3444,\"moFa\":100,\"gongJi\":550,\"huJia\":271,\"faGong\":631,\"fakang\":291,\"suDu\":75,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":96,\"special\":5762.2000000000007,\"score\":\"154\",\"wuXing\":\"15\",\"skill\":\"8,4,2,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f53\\u4eca\\u7687\\u4e0a\\u4e4b\\u59b9\\u3002\",\"lucky\":\"17\",\"maxNature\":60,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685358505621.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":332,\"jingYan\":173,\"jianShang\":26.600000000000001,\"zhenShang\":26.600000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":196,\"agile\":154,\"intelligence\":238,\"minPower\":\"7\",\"minAgile\":\"5\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"7\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u4e91\\u7f57\\u90e1\\u4e3b\",\"id\":8,\"biology\":\"1\",\"state\":6,\"grade\":11,\"shengMing\":5412,\"moFa\":158,\"gongJi\":848,\"huJia\":408,\"faGong\":974,\"fakang\":440,\"suDu\":115,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":142,\"special\":8810.4000000000015,\"score\":\"154\",\"wuXing\":\"15\",\"skill\":\"8,4,2,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f53\\u4eca\\u7687\\u4e0a\\u4e4b\\u59b9\\u3002\",\"lucky\":\"17\",\"maxNature\":100,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685358505621.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":340,\"jingYan\":181,\"jianShang\":31.200000000000003,\"zhenShang\":31.200000000000003,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":5500,\"power\":308,\"agile\":242,\"intelligence\":374,\"minPower\":\"7\",\"minAgile\":\"5\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"7\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}}]},{\"x\":267,\"y\":525,\"map_int\":3,\"map_status\":1,\"total\":5,\"yiXing\":3,\"grade\":13,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":2,\"do3\":3,\"do4\":4,\"do5\":5,\"do6\":null,\"do7\":7,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u58eb\\u5175\",\"id\":2,\"biology\":\"1\",\"state\":6,\"grade\":7,\"shengMing\":-43092,\"moFa\":-206,\"gongJi\":-5892,\"huJia\":-2875,\"faGong\":-5098,\"fakang\":-2677,\"suDu\":-996,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":-928,\"special\":-61743.600000000006,\"score\":\"136\",\"wuXing\":\"12\",\"skill\":\"1,2,3\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"3\",\"maxNature\":-930,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685218177525.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":296,\"jingYan\":155,\"jianShang\":-89.800000000000011,\"zhenShang\":-89.800000000000011,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":-3588,\"agile\":-2392,\"intelligence\":-1564,\"minPower\":\"4\",\"minAgile\":\"5\",\"minIntelligence\":\"4\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"27\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}},{\"name\":\"\\u6731\\u65e0\\u89c6\",\"id\":3,\"biology\":\"1\",\"state\":6,\"grade\":7,\"shengMing\":2310,\"moFa\":97,\"gongJi\":465,\"huJia\":201,\"faGong\":525,\"fakang\":216,\"suDu\":67,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":64,\"special\":4101.8000000000002,\"score\":\"103\",\"wuXing\":\"13\",\"skill\":\"7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5916\\u53f7\\u94c1\\u80c6\\u795e\\u4faf\\uff0c\\u4e3a\\u5f53\\u4eca\\u7687\\u4e0a\\u53d4\\u7236\\u3002\\u5f53\\u5e74\\u5148\\u7687\\u9a7e\\u5d29\\u524d\\uff0c\\u552f\\u6050\\u6b63\\u5fb7\\u5e74\\u5c11\\uff0c\\u6613\\u88ab\\u5978\\u4eba\\u64cd\\u63a7\\uff0c\\u6216\\u65e0\\u529b\\u4e3b\\u6301\\u671d\\u653f\\uff0c\\u4e0d\\u61c2\\u5206\\u8fa8\\u5fe0\\u5978\\uff0c\\u4e8e\\u662f\\u7279\\u4ee4\\u7687\\u5f1f\\u6731\\u65e0\\u89c6\\u521b\\u7acb\\u62a4\\u9f99\\u5c71\\u5e84\\uff0c\\u6743\\u529b\\u53ef\\u51cc\\u9a7e\\u6240\\u6709\\u671d\\u5ef7\\u673a\\u6784\\uff0c\\u5e76\\u8d50\\u4e88\\u5148\\u7687\\u4e4b\\u4e39\\u4e66\\u94c1\\u5377\\u3001\\u5c1a\\u65b9\\u5b9d\\u5251\\uff0c\\u53ef\\u4ee5\\u4e0a\\u65a9\\u660f\\u541b\\uff0c\\u4e0b\\u65a9\\u8c17\\u81e3\\uff0c\\u7ed9\\u4e86\\u6b63\\u5fb7\\u4e00\\u4e2a\\u6700\\u9ad8\\u7279\\u52a1\\u673a\\u6784\\uff0c\\u5236\\u8861\\u4e1c\\u5382\\u3002\",\"lucky\":\"21\",\"maxNature\":60,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686647458929.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":230,\"jingYan\":122,\"jianShang\":27.399999999999999,\"zhenShang\":27.399999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":84,\"agile\":161,\"intelligence\":224,\"minPower\":\"4\",\"minAgile\":\"9\",\"minIntelligence\":\"17\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"6\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}},{\"name\":\"\\u5251\\u60ca\\u5cf0\",\"id\":4,\"biology\":\"1\",\"state\":6,\"grade\":13,\"shengMing\":6474,\"moFa\":183,\"gongJi\":1033,\"huJia\":441,\"faGong\":1045,\"fakang\":444,\"suDu\":153,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":135,\"special\":10043,\"score\":\"115\",\"wuXing\":\"9\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u8f9f\\u90aa\\u5c71\\u5e84\\uff0c\\u66fe\\u4e0e\\u5f52\\u6d77\\u767e\\u70bc\\u4e00\\u6218\\u3002\",\"lucky\":\"28\",\"maxNature\":120,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703684186794604.png\",\"yiXing\":1,\"sex\":\"1\",\"jingBi\":266,\"jingYan\":146,\"jianShang\":41.5,\"zhenShang\":41.5,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":7800,\"power\":364,\"agile\":377,\"intelligence\":390,\"minPower\":\"5\",\"minAgile\":\"10\",\"minIntelligence\":\"18\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"20\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}},{\"name\":\"\\u67f3\\u751f\\u98d8\\u7d6e\",\"id\":5,\"biology\":\"1\",\"state\":5,\"grade\":9,\"shengMing\":4104,\"moFa\":128,\"gongJi\":703,\"huJia\":327,\"faGong\":772,\"fakang\":344,\"suDu\":100,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":110,\"special\":6874,\"score\":\"152\",\"wuXing\":\"15\",\"skill\":\"7,11,4,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u67f3\\u751f\\u96ea\\u59ec\\u4e4b\\u59b9\\u3002\\u98d8\\u7d6e\\u8868\\u9762\\u4e00\\u5982\\u5176\\u59ca\\u96ea\\u59ec\\u822c\\u67d4\\u5f31\\uff0c\\u548c\\u5929\\u6daf\\u7ed3\\u5a5a\\u751f\\u5b50\\u540e\\u66f4\\u662f\\u4e2a\\u5178\\u578b\\u8d24\\u59bb\\u826f\\u6bcd\\uff0c\\u53ef\\u662f\\u5176\\u5b9e\\u673a\\u5fc3\\u751a\\u91cd\\uff0c\\uff0c\\u57ce\\u5e9c\\u751a\\u6df1\\uff0c\\u6697\\u5730\\u91cc\\u662f\\u4e2a\\u51b7\\u8840\\u6740\\u624b\\uff0c\\u4e14\\u901a\\u8fc7\\u4e0b\\u836f\\u7684\\u624b\\u6bb5\\u8feb\\u4f7f\\u5929\\u6daf\\u8fce\\u5a36\\u4e86\\u81ea\\u5df1\\u3002\\u3002\",\"lucky\":\"7\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685371636014.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":332,\"jingYan\":175,\"jianShang\":18,\"zhenShang\":18,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":216,\"agile\":225,\"intelligence\":297,\"minPower\":\"10\",\"minAgile\":\"14\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"4\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u5f20\\u65e0\\u5fcc\",\"id\":7,\"biology\":\"1\",\"state\":8,\"grade\":8,\"shengMing\":4432,\"moFa\":113,\"gongJi\":554,\"huJia\":230,\"faGong\":615,\"fakang\":245,\"suDu\":73,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":69,\"special\":6665.7999999999993,\"score\":\"149\",\"wuXing\":\"6\",\"skill\":\"4,6,7,8,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u67f3\\u751f\\u4f46\\u9a6c\\u5b88\\u662f\\u6b66\\u4fa0\\u7535\\u89c6\\u5267\\u300a\\u5929\\u4e0b\\u7b2c\\u4e00\\u300b\\u4e2d\\u7684\\u89d2\\u8272\\uff0c\\u662f\\u8457\\u540d\\u5251\\u5ba2\\u67f3\\u751f\\u5341\\u5175\\u536b\\u7684\\u7236\\u4eb2\\uff0c\\u4e5f\\u662f\\u6b66\\u5b66\\u5b97\\u5e08\\u3002\",\"lucky\":\"10\",\"maxNature\":70,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703682605991874.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":324,\"jingYan\":170,\"jianShang\":16.899999999999999,\"zhenShang\":16.899999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2800,\"power\":280,\"agile\":176,\"intelligence\":240,\"minPower\":\"24\",\"minAgile\":\"11\",\"minIntelligence\":\"13\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"23\",\"state_name\":{\"id\":\"8\",\"name\":\"\\u6e21\\u52ab\",\"point\":\"140\",\"value\":\"1200\",\"time\":\"20000\",\"difficult\":\"2\"}}]},{\"x\":667,\"y\":525,\"map_int\":4,\"map_status\":1,\"total\":4,\"yiXing\":2,\"grade\":10,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":3,\"do4\":null,\"do5\":5,\"do6\":null,\"do7\":7,\"do8\":8,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5f20\\u65e0\\u5fcc\",\"id\":\"173\",\"biology\":\"1\",\"state\":6,\"grade\":8,\"shengMing\":4432,\"moFa\":113,\"gongJi\":554,\"huJia\":230,\"faGong\":615,\"fakang\":245,\"suDu\":73,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":69,\"special\":6665.7999999999993,\"score\":\"149\",\"wuXing\":\"6\",\"skill\":\"4,6,7,8,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u67f3\\u751f\\u4f46\\u9a6c\\u5b88\\u662f\\u6b66\\u4fa0\\u7535\\u89c6\\u5267\\u300a\\u5929\\u4e0b\\u7b2c\\u4e00\\u300b\\u4e2d\\u7684\\u89d2\\u8272\\uff0c\\u662f\\u8457\\u540d\\u5251\\u5ba2\\u67f3\\u751f\\u5341\\u5175\\u536b\\u7684\\u7236\\u4eb2\\uff0c\\u4e5f\\u662f\\u6b66\\u5b66\\u5b97\\u5e08\\u3002\",\"lucky\":\"10\",\"maxNature\":70,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703682605991874.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":324,\"jingYan\":170,\"jianShang\":16.899999999999999,\"zhenShang\":16.899999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2800,\"power\":280,\"agile\":176,\"intelligence\":240,\"minPower\":\"24\",\"minAgile\":\"11\",\"minIntelligence\":\"13\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"23\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}},{\"name\":\"\\u53e4\\u4e09\\u901a\",\"id\":3,\"biology\":\"1\",\"state\":5,\"grade\":10,\"shengMing\":5340,\"moFa\":149,\"gongJi\":799,\"huJia\":369,\"faGong\":934,\"fakang\":403,\"suDu\":108,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":123,\"special\":8491.6000000000004,\"score\":\"145\",\"wuXing\":\"11\",\"skill\":\"6,5,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e0d\\u8d25\\u987d\\u7ae5\",\"lucky\":\"20\",\"maxNature\":90,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685905546655.png\",\"yiXing\":1,\"sex\":\"1\",\"jingBi\":320,\"jingYan\":170,\"jianShang\":32.299999999999997,\"zhenShang\":32.299999999999997,\"color\":\"#00ffff\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":4500,\"power\":310,\"agile\":240,\"intelligence\":380,\"minPower\":\"8\",\"minAgile\":\"3\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"3\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u67f3\\u751f\\u96ea\\u59ec\",\"id\":5,\"biology\":\"1\",\"state\":6,\"grade\":7,\"shengMing\":4102,\"moFa\":94,\"gongJi\":641,\"huJia\":302,\"faGong\":568,\"fakang\":284,\"suDu\":97,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":102,\"special\":6281.3999999999996,\"score\":\"127\",\"wuXing\":\"13\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u6e29\\u67d4\\u3001\\u7eaf\\u6d01\\u3001\\u7f8e\\u4e3d\\u3001\\u5584\\u826f\\u3001\\u4e3e\\u6b62\\u4f18\\u96c5\\u3001\\u8c08\\u5410\\u5927\\u65b9\\u3001\\u673a\\u667a\\u8fc7\\u4eba\\u3001\\u7434\\u68cb\\u4e66\\u753b\\uff0c\\u6837\\u6837\\u7cbe\\u901a\\u3002\\u662f\\u67f3\\u751f\\u95e8\\u4e3b\\u67f3\\u751f\\u4f46\\u9a6c\\u5b88\\u957f\\u5973\\uff0c\\u6b66\\u529f\\u9ad8\\u5f3a\\uff0c\\u7ee7\\u627f\\u67f3\\u751f\\u5bb6\\u72ec\\u95e8\\u7edd\\u62db\\u96ea\\u98d8\\u4eba\\u95f4\\u3002\",\"lucky\":\"10\",\"maxNature\":60,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703687072256359.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":278,\"jingYan\":146,\"jianShang\":20.200000000000003,\"zhenShang\":20.200000000000003,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":266,\"agile\":224,\"intelligence\":147,\"minPower\":\"14\",\"minAgile\":\"10\",\"minIntelligence\":\"2\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"5\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}},{\"name\":\"\\u5c06\\u519b\",\"id\":7,\"biology\":\"1\",\"state\":7,\"grade\":7,\"shengMing\":3276,\"moFa\":97,\"gongJi\":457,\"huJia\":202,\"faGong\":531,\"fakang\":221,\"suDu\":59,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":66,\"special\":5014.2000000000007,\"score\":\"124\",\"wuXing\":\"19\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":60,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685997192544.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":272,\"jingYan\":143,\"jianShang\":26.600000000000001,\"zhenShang\":26.600000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":189,\"agile\":133,\"intelligence\":210,\"minPower\":\"12\",\"minAgile\":\"7\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"28\",\"state_name\":{\"id\":\"7\",\"name\":\"\\u5316\\u795e\",\"point\":\"120\",\"value\":\"800\",\"time\":\"10000\",\"difficult\":\"2\"}},{\"name\":\"\\u5c71\\u8d3c\",\"id\":8,\"biology\":\"1\",\"state\":6,\"grade\":4,\"shengMing\":1560,\"moFa\":54,\"gongJi\":361,\"huJia\":151,\"faGong\":303,\"fakang\":137,\"suDu\":61,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":45,\"special\":2877,\"score\":\"127\",\"wuXing\":\"13\",\"skill\":\"4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"22\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703687041511441.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":272,\"jingYan\":140,\"jianShang\":26.5,\"zhenShang\":26.5,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":64,\"agile\":160,\"intelligence\":100,\"minPower\":\"6\",\"minAgile\":\"14\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"26\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}}]},{\"x\":867,\"y\":525,\"map_int\":5,\"map_status\":1,\"total\":2,\"yiXing\":1,\"grade\":8,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":null,\"do6\":6,\"do7\":null,\"do8\":8,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u6210\\u662f\\u975e\",\"id\":\"173\",\"biology\":\"1\",\"state\":5,\"grade\":4,\"shengMing\":2032,\"moFa\":55,\"gongJi\":330,\"huJia\":159,\"faGong\":338,\"fakang\":161,\"suDu\":47,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":55,\"special\":3321,\"score\":\"110\",\"wuXing\":\"8\",\"skill\":\"6\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\\u201c\\u9ec4\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u6210\\u662f\\u975e\\uff08\\u90ed\\u664b\\u5b89\\u9970\\u6f14\\uff09\\uff0c\\u672c\\u662f\\u5e02\\u4e95\\u6df7\\u6df7\\uff0c\\u8bd9\\u8c10\\u6ed1\\u7a3d\\uff0c\\u4e0d\\u5b66\\u65e0\\u672f\\u5374\\u673a\\u667a\\u73b2\\u73d1\\uff0c\\u56e0\\u7f18\\u9645\\u4f1a\\u6210\\u4e3a\\u201c\\u4e0d\\u8d25\\u987d\\u7ae5\\u201d\\u53e4\\u4e09\\u901a\\u7684\\u4f20\\u4eba\\uff0c\\u6b66\\u529f\\u5929\\u4e0b\\u7b2c\\u4e00\\u3002\\u4ed6\\u4e00\\u65e6\\u4f7f\\u51fa\\u7edd\\u5b66\\u201c\\u91d1\\u521a\\u4e0d\\u574f\\u795e\\u529f\\u201d\\uff0c\\u4fbf\\u4f1a\\u6d51\\u8eab\\u53d8\\u6210\\u91d1\\u8272\\uff0c\\u53d8\\u8eab\\u6210\\u4e3a\\u91d1\\u4eba\\uff0c\\u529b\\u5927\\u65e0\\u7a77\\uff0c\\u5bd2\\u6691\\u4e0d\\u754f\\uff0c\\u6c34\\u706b\\u4e0d\\u60e7\\uff0c\\u5200\\u67aa\\u4e0d\\u5165\\uff0c\\u767e\\u6bd2\\u4e0d\\u4fb5\\u3002\",\"lucky\":\"16\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685171864428.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":238,\"jingYan\":123,\"jianShang\":21.5,\"zhenShang\":21.5,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":120,\"agile\":104,\"intelligence\":112,\"minPower\":\"12\",\"minAgile\":\"5\",\"minIntelligence\":\"6\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"5\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"24\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u5251\\u60ca\\u5cf0\",\"id\":6,\"biology\":\"1\",\"state\":5,\"grade\":4,\"shengMing\":1992,\"moFa\":56,\"gongJi\":322,\"huJia\":140,\"faGong\":326,\"fakang\":141,\"suDu\":48,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":44,\"special\":3185.8000000000002,\"score\":\"115\",\"wuXing\":\"9\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u8f9f\\u90aa\\u5c71\\u5e84\\uff0c\\u66fe\\u4e0e\\u5f52\\u6d77\\u767e\\u70bc\\u4e00\\u6218\\u3002\",\"lucky\":\"28\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703684186794604.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":248,\"jingYan\":128,\"jianShang\":32.399999999999999,\"zhenShang\":32.399999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":112,\"agile\":116,\"intelligence\":120,\"minPower\":\"5\",\"minAgile\":\"10\",\"minIntelligence\":\"18\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"20\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u6b63\\u5fb7\\u7687\\u5e1d\",\"id\":8,\"biology\":\"1\",\"state\":5,\"grade\":7,\"shengMing\":2436,\"moFa\":89,\"gongJi\":544,\"huJia\":209,\"faGong\":410,\"fakang\":176,\"suDu\":94,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":56,\"special\":4231.1999999999998,\"score\":\"100\",\"wuXing\":\"6\",\"skill\":\"8,6\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u7687\\u4e0a,\\u4e91\\u7f57\\u90e1\\u4e3b\\u7684\\u7687\\u5144\\u3002\",\"lucky\":\"27\",\"maxNature\":60,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703686673801306.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":224,\"jingYan\":119,\"jianShang\":32.600000000000001,\"zhenShang\":32.600000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2100,\"power\":98,\"agile\":259,\"intelligence\":119,\"minPower\":\"2\",\"minAgile\":\"19\",\"minIntelligence\":\"3\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"10\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}}]}]', '/app_resources/word/地图1.jpg');
INSERT INTO `x2_user_words` VALUES ('7', '0', '8', '1', '1', '1', '0', '[{\"x\":1067,\"y\":75,\"map_int\":0,\"map_status\":1,\"total\":3,\"yiXing\":4,\"grade\":18,\"nature_do\":{\"id\":\"1\",\"do1\":1,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":null,\"do6\":6,\"do7\":7,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u4e0a\\u5b98\\u6d77\\u68e0\",\"id\":1,\"biology\":\"1\",\"state\":5,\"grade\":5,\"shengMing\":1940,\"moFa\":64,\"gongJi\":357,\"huJia\":171,\"faGong\":347,\"fakang\":169,\"suDu\":52,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":60,\"special\":3457,\"score\":\"130\",\"wuXing\":\"13\",\"skill\":\"2,6,4,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u7384\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u4e0a\\u5b98\\u6d77\\u68e0\\uff08\\u53f6\\u7487\\u9970\\u6f14\\uff09\\uff0c\\u8273\\u5982\\u6843\\u674e\\uff0c\\u673a\\u667a\\u8fc7\\u4eba\\uff0c\\u7434\\u68cb\\u4e66\\u753b\\uff0c\\u533b\\u535c\\u661f\\u76f8\\uff0c\\u65e0\\u4e0d\\u901a\\u6653\\uff0c\\u5e73\\u65e5\\u5374\\u4f5c\\u7537\\u88c5\\u6253\\u626e\\uff0c\\u4e3b\\u6301\\u201c\\u5929\\u4e0b\\u7b2c\\u4e00\\u5e84\\u201d\\uff0c\\u5e84\\u5185\\u4eba\\u624d\\u6d4e\\u6d4e\\uff0c\\u638c\\u63e1\\u5929\\u4e0b\\u673a\\u5bc6\\u3002\",\"lucky\":\"17\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685348230367.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":280,\"jingYan\":145,\"jianShang\":23,\"zhenShang\":23,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":100,\"agile\":115,\"intelligence\":105,\"minPower\":\"10\",\"minAgile\":\"20\",\"minIntelligence\":\"15\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"8\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u7d20\\u5fc3\",\"id\":\"173\",\"biology\":\"1\",\"state\":6,\"grade\":8,\"shengMing\":4272,\"moFa\":109,\"gongJi\":722,\"huJia\":332,\"faGong\":653,\"fakang\":314,\"suDu\":111,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":109,\"special\":6855.7999999999993,\"score\":\"137\",\"wuXing\":\"9\",\"skill\":\"5,7,6\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u795e\\u4faf\\u6700\\u7231,\\u6210\\u662f\\u975e\\u4e4b\\u6bcd\\uff0c\\u53e4\\u4e09\\u901a\\u7684\\u8868\\u59b9\",\"lucky\":\"6\",\"maxNature\":70,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685149885948.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":300,\"jingYan\":158,\"jianShang\":16.899999999999999,\"zhenShang\":16.899999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2800,\"power\":256,\"agile\":264,\"intelligence\":192,\"minPower\":\"11\",\"minAgile\":\"13\",\"minIntelligence\":\"10\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"12\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"600\",\"time\":\"6000\",\"difficult\":\"2\"}},{\"name\":\"\\u5c06\\u519b\",\"id\":6,\"biology\":\"1\",\"state\":5,\"grade\":9,\"shengMing\":4212,\"moFa\":125,\"gongJi\":586,\"huJia\":259,\"faGong\":681,\"fakang\":282,\"suDu\":76,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":84,\"special\":6413.7999999999993,\"score\":\"124\",\"wuXing\":\"19\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685997192544.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":276,\"jingYan\":147,\"jianShang\":28.399999999999999,\"zhenShang\":28.399999999999999,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":243,\"agile\":171,\"intelligence\":270,\"minPower\":\"12\",\"minAgile\":\"7\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"28\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}},{\"name\":\"\\u5c06\\u519b\",\"id\":7,\"biology\":\"1\",\"state\":5,\"grade\":18,\"shengMing\":8424,\"moFa\":250,\"gongJi\":1164,\"huJia\":510,\"faGong\":1354,\"fakang\":557,\"suDu\":151,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":164,\"special\":12698.799999999999,\"score\":\"124\",\"wuXing\":\"19\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":170,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\/files\\/attach\\/images\\/20231227\\/1703685997192544.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":294,\"jingYan\":165,\"jianShang\":36.400000000000006,\"zhenShang\":36.400000000000006,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":15300,\"power\":486,\"agile\":342,\"intelligence\":540,\"minPower\":\"12\",\"minAgile\":\"7\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":null,\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"userBiologyid\":\"28\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"400\",\"time\":\"3000\",\"difficult\":\"2\"}}]}]', '/app_resources/word/地图1.jpg');
INSERT INTO `x2_user_words` VALUES ('9', '0', '6', '26', '0', '1', '0', '[{\"x\":267,\"y\":75,\"map_int\":0,\"map_status\":1,\"total\":4,\"yiXing\":3,\"grade\":4,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":2,\"do3\":3,\"do4\":null,\"do5\":null,\"do6\":null,\"do7\":null,\"do8\":8,\"do9\":9,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u6b63\\u5fb7\\u7687\\u5e1d\",\"id\":2,\"biology\":\"1\",\"state\":9,\"grade\":3,\"shengMing\":1044,\"moFa\":38,\"gongJi\":235,\"huJia\":91,\"faGong\":177,\"fakang\":77,\"suDu\":40,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":25,\"special\":1938,\"score\":\"100\",\"wuXing\":\"6\",\"skill\":\"8,6\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u7687\\u4e0a,\\u4e91\\u7f57\\u90e1\\u4e3b\\u7684\\u7687\\u5144\\u3002\",\"lucky\":\"27\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":216,\"jingYan\":111,\"jianShang\":29.5,\"zhenShang\":29.5,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":42,\"agile\":111,\"intelligence\":51,\"minPower\":\"2\",\"minAgile\":\"19\",\"minIntelligence\":\"3\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"10\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u6e38\\u4fa0\",\"id\":3,\"biology\":\"1\",\"state\":9,\"grade\":4,\"shengMing\":1600,\"moFa\":56,\"gongJi\":317,\"huJia\":164,\"faGong\":359,\"fakang\":175,\"suDu\":44,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":61,\"special\":3080.2,\"score\":\"126\",\"wuXing\":\"6\",\"skill\":\"4,10,6,2\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\",\"lucky\":\"20\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":1,\"sex\":\"1\",\"jingBi\":270,\"jingYan\":139,\"jianShang\":26.1,\"zhenShang\":26.1,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":76,\"agile\":88,\"intelligence\":132,\"minPower\":\"9\",\"minAgile\":\"10\",\"minIntelligence\":\"12\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"29\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u8611\\u83c7\",\"id\":8,\"biology\":\"5\",\"state\":11,\"grade\":2,\"shengMing\":756,\"moFa\":25,\"gongJi\":170,\"huJia\":96,\"faGong\":166,\"fakang\":95,\"suDu\":25,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":38,\"special\":1503.6,\"score\":\"79\",\"wuXing\":\"5\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"5\",\"descript\":\"\",\"lucky\":\"12\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u8611\\u83c7\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":172,\"jingYan\":88,\"jianShang\":15.8,\"zhenShang\":15.8,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"C\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":38,\"agile\":46,\"intelligence\":42,\"minPower\":\"2\",\"minAgile\":\"7\",\"minIntelligence\":\"1\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"36\",\"state_name\":{\"id\":\"11\",\"name\":\"\\u771f\\u4ed9\",\"point\":\"200\",\"value\":\"2400\",\"time\":\"60000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u7075\"},{\"name\":\"\\u67f3\\u751f\\u96ea\\u59ec\",\"id\":9,\"biology\":\"1\",\"state\":11,\"grade\":3,\"shengMing\":1758,\"moFa\":40,\"gongJi\":295,\"huJia\":150,\"faGong\":264,\"fakang\":142,\"suDu\":45,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":54,\"special\":2829.8,\"score\":\"127\",\"wuXing\":\"13\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u6e29\\u67d4\\u3001\\u7eaf\\u6d01\\u3001\\u7f8e\\u4e3d\\u3001\\u5584\\u826f\\u3001\\u4e3e\\u6b62\\u4f18\\u96c5\\u3001\\u8c08\\u5410\\u5927\\u65b9\\u3001\\u673a\\u667a\\u8fc7\\u4eba\\u3001\\u7434\\u68cb\\u4e66\\u753b\\uff0c\\u6837\\u6837\\u7cbe\\u901a\\u3002\\u662f\\u67f3\\u751f\\u95e8\\u4e3b\\u67f3\\u751f\\u4f46\\u9a6c\\u5b88\\u957f\\u5973\\uff0c\\u6b66\\u529f\\u9ad8\\u5f3a\\uff0c\\u7ee7\\u627f\\u67f3\\u751f\\u5bb6\\u72ec\\u95e8\\u7edd\\u62db\\u96ea\\u98d8\\u4eba\\u95f4\\u3002\",\"lucky\":\"10\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":270,\"jingYan\":138,\"jianShang\":15.4,\"zhenShang\":15.4,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":114,\"agile\":96,\"intelligence\":63,\"minPower\":\"14\",\"minAgile\":\"10\",\"minIntelligence\":\"2\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"5\",\"state_name\":{\"id\":\"11\",\"name\":\"\\u771f\\u4ed9\",\"point\":\"200\",\"value\":\"2400\",\"time\":\"60000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"}]},{\"x\":267,\"y\":225,\"map_int\":1,\"map_status\":1,\"total\":4,\"yiXing\":4,\"grade\":10,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":3,\"do4\":4,\"do5\":5,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":9,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u4e86\\u7a7a\",\"id\":\"173\",\"biology\":\"1\",\"state\":9,\"grade\":8,\"shengMing\":3712,\"moFa\":118,\"gongJi\":633,\"huJia\":305,\"faGong\":756,\"fakang\":336,\"suDu\":87,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":106,\"special\":6309.200000000001,\"score\":\"132\",\"wuXing\":\"8\",\"skill\":\"2,10,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5c11\\u6797\\u5bfa\\u4e86\\u7a7a\\u5927\\u5e08\\u3002\",\"lucky\":\"17\",\"maxNature\":70,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":290,\"jingYan\":153,\"jianShang\":27.6,\"zhenShang\":27.6,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2800,\"power\":192,\"agile\":184,\"intelligence\":312,\"minPower\":\"11\",\"minAgile\":\"5\",\"minIntelligence\":\"25\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"21\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u672a\\u77e5\\u751f\\u7269\",\"id\":3,\"biology\":\"1\",\"state\":10,\"grade\":9,\"shengMing\":2628,\"moFa\":113,\"gongJi\":630,\"huJia\":277,\"faGong\":544,\"fakang\":256,\"suDu\":102,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":89,\"special\":4737.799999999999,\"score\":\"56\",\"wuXing\":\"14\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":null,\"lucky\":\"15\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u6d1b\\u514b\\u4eba\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":140,\"jingYan\":79,\"jianShang\":23.9,\"zhenShang\":23.9,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"D\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":90,\"agile\":252,\"intelligence\":162,\"minPower\":\"2\",\"minAgile\":\"7\",\"minIntelligence\":\"3\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"39\",\"state_name\":{\"id\":\"10\",\"name\":\"\\u5929\\u4ed9\",\"point\":\"180\",\"value\":\"2000\",\"time\":\"42000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u9ab7\\u9ac5\\u5175\",\"id\":4,\"biology\":\"4\",\"state\":9,\"grade\":10,\"shengMing\":3440,\"moFa\":121,\"gongJi\":483,\"huJia\":224,\"faGong\":512,\"fakang\":231,\"suDu\":59,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":79,\"special\":5293.799999999999,\"score\":\"56\",\"wuXing\":\"12\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":null,\"lucky\":\"14\",\"maxNature\":90,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u6d1b\\u514b\\u4eba\",\"yiXing\":1,\"sex\":\"1\",\"jingBi\":142,\"jingYan\":81,\"jianShang\":21.9,\"zhenShang\":21.9,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"D\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":4500,\"power\":190,\"agile\":120,\"intelligence\":150,\"minPower\":\"4\",\"minAgile\":\"1\",\"minIntelligence\":\"2\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"38\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u9b3c\"},{\"name\":\"\\u72ec\\u89d2\\u517d\",\"id\":5,\"biology\":\"1\",\"state\":9,\"grade\":9,\"shengMing\":3312,\"moFa\":109,\"gongJi\":688,\"huJia\":299,\"faGong\":515,\"fakang\":256,\"suDu\":114,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":94,\"special\":5551.799999999999,\"score\":\"99\",\"wuXing\":\"15\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"5\",\"descript\":\"\",\"lucky\":\"22\",\"maxNature\":80,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u72ec\\u89d2\\u517d\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":226,\"jingYan\":122,\"jianShang\":31.4,\"zhenShang\":31.4,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":3600,\"power\":162,\"agile\":288,\"intelligence\":108,\"minPower\":\"2\",\"minAgile\":\"5\",\"minIntelligence\":\"6\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"35\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u58eb\\u5175\",\"id\":9,\"biology\":\"1\",\"state\":9,\"grade\":4,\"shengMing\":-44820,\"moFa\":-245,\"gongJi\":-6118,\"huJia\":-2974,\"faGong\":-5298,\"fakang\":-2769,\"suDu\":-1028,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":-959,\"special\":-64196.8,\"score\":\"136\",\"wuXing\":\"12\",\"skill\":\"1,2,3\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\",\"lucky\":\"3\",\"maxNature\":-960,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":290,\"jingYan\":149,\"jianShang\":-92.9,\"zhenShang\":-92.9,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":-3705,\"agile\":-2470,\"intelligence\":-1615,\"minPower\":\"4\",\"minAgile\":\"5\",\"minIntelligence\":\"4\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"27\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"}]},{\"x\":667,\"y\":225,\"map_int\":2,\"map_status\":1,\"total\":3,\"yiXing\":5,\"grade\":23,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":4,\"do5\":5,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":9,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5f52\\u6d77\\u767e\\u70bc\",\"id\":\"173\",\"biology\":\"1\",\"state\":11,\"grade\":14,\"shengMing\":7000,\"moFa\":199,\"gongJi\":1089,\"huJia\":449,\"faGong\":1116,\"fakang\":456,\"suDu\":161,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":132,\"special\":10884.400000000001,\"score\":\"154\",\"wuXing\":\"18\",\"skill\":\"6,5,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f52\\u6d77\\u4e00\\u5200\\u4e4b\\u7236\\u3002\",\"lucky\":\"27\",\"maxNature\":130,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":346,\"jingYan\":187,\"jianShang\":40.2,\"zhenShang\":40.2,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":9100,\"power\":392,\"agile\":406,\"intelligence\":434,\"minPower\":\"9\",\"minAgile\":\"13\",\"minIntelligence\":\"22\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"22\",\"state_name\":{\"id\":\"11\",\"name\":\"\\u771f\\u4ed9\",\"point\":\"200\",\"value\":\"2400\",\"time\":\"60000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u5229\\u79c0\\u516c\\u4e3b\",\"id\":4,\"biology\":\"1\",\"state\":11,\"grade\":4,\"shengMing\":2056,\"moFa\":59,\"gongJi\":258,\"huJia\":108,\"faGong\":339,\"fakang\":128,\"suDu\":31,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":33,\"special\":3224.6000000000004,\"score\":\"143\",\"wuXing\":\"18\",\"skill\":\"7,4\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u51fa\\u4e91\\u56fd\\u516c\\u4e3b\\u3002\",\"lucky\":\"27\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":304,\"jingYan\":156,\"jianShang\":30.3,\"zhenShang\":30.3,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":120,\"agile\":72,\"intelligence\":156,\"minPower\":\"6\",\"minAgile\":\"5\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"16\",\"state_name\":{\"id\":\"11\",\"name\":\"\\u771f\\u4ed9\",\"point\":\"200\",\"value\":\"2400\",\"time\":\"60000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u6d1b\\u514b\\u4eba\",\"id\":5,\"biology\":\"6\",\"state\":9,\"grade\":4,\"shengMing\":2240,\"moFa\":47,\"gongJi\":213,\"huJia\":98,\"faGong\":198,\"fakang\":94,\"suDu\":24,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":34,\"special\":3102.8,\"score\":\"88\",\"wuXing\":\"8\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"5\",\"descript\":\"\",\"lucky\":\"23\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u6d1b\\u514b\\u4eba\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":194,\"jingYan\":101,\"jianShang\":26.4,\"zhenShang\":26.4,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"C\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":168,\"agile\":48,\"intelligence\":32,\"minPower\":\"16\",\"minAgile\":\"3\",\"minIntelligence\":\"2\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"37\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u5f02\"},{\"name\":\"\\u58eb\\u5175\",\"id\":9,\"biology\":\"1\",\"state\":10,\"grade\":10,\"shengMing\":-41364,\"moFa\":-167,\"gongJi\":-5668,\"huJia\":-2779,\"faGong\":-4900,\"fakang\":-2587,\"suDu\":-963,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":-898,\"special\":-59299.600000000006,\"score\":\"136\",\"wuXing\":\"12\",\"skill\":\"1,2,3\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\",\"lucky\":\"3\",\"maxNature\":-900,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":302,\"jingYan\":161,\"jianShang\":-86.80000000000001,\"zhenShang\":-86.80000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":4500,\"power\":-3471,\"agile\":-2314,\"intelligence\":-1513,\"minPower\":\"4\",\"minAgile\":\"5\",\"minIntelligence\":\"4\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"27\",\"state_name\":{\"id\":\"10\",\"name\":\"\\u5929\\u4ed9\",\"point\":\"180\",\"value\":\"2000\",\"time\":\"42000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"}]},{\"x\":67,\"y\":525,\"map_int\":3,\"map_status\":1,\"total\":1,\"yiXing\":5,\"grade\":23,\"nature_do\":{\"id\":\"1\",\"do1\":1,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":null,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u672a\\u77e5\\u751f\\u7269\",\"id\":1,\"biology\":\"1\",\"state\":9,\"grade\":23,\"shengMing\":6716,\"moFa\":288,\"gongJi\":1563,\"huJia\":660,\"faGong\":1342,\"fakang\":605,\"suDu\":254,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":203,\"special\":11752.599999999999,\"score\":\"56\",\"wuXing\":\"14\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":null,\"lucky\":\"15\",\"maxNature\":220,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u6d1b\\u514b\\u4eba\",\"yiXing\":1,\"sex\":\"1\",\"jingBi\":168,\"jingYan\":107,\"jianShang\":35.3,\"zhenShang\":35.3,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"D\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":25300,\"power\":230,\"agile\":644,\"intelligence\":414,\"minPower\":\"2\",\"minAgile\":\"7\",\"minIntelligence\":\"3\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"39\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u53e4\\u4e09\\u901a\",\"id\":\"173\",\"biology\":\"1\",\"state\":9,\"grade\":6,\"shengMing\":3204,\"moFa\":89,\"gongJi\":488,\"huJia\":230,\"faGong\":568,\"fakang\":250,\"suDu\":66,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":78,\"special\":5230.6,\"score\":\"145\",\"wuXing\":\"11\",\"skill\":\"6,5,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e0d\\u8d25\\u987d\\u7ae5\",\"lucky\":\"20\",\"maxNature\":50,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":312,\"jingYan\":162,\"jianShang\":27.8,\"zhenShang\":27.8,\"color\":\"#00ffff\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":186,\"agile\":144,\"intelligence\":228,\"minPower\":\"8\",\"minAgile\":\"3\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"3\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"}]},{\"x\":667,\"y\":525,\"map_int\":4,\"map_status\":1,\"total\":2,\"yiXing\":3,\"grade\":9,\"nature_do\":{\"id\":\"1\",\"do1\":1,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":5,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u5229\\u79c0\\u516c\\u4e3b\",\"id\":1,\"biology\":\"1\",\"state\":12,\"grade\":5,\"shengMing\":2570,\"moFa\":74,\"gongJi\":326,\"huJia\":138,\"faGong\":427,\"fakang\":163,\"suDu\":39,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":43,\"special\":3994.6000000000004,\"score\":\"143\",\"wuXing\":\"18\",\"skill\":\"7,4\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u51fa\\u4e91\\u56fd\\u516c\\u4e3b\\u3002\",\"lucky\":\"27\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":306,\"jingYan\":158,\"jianShang\":31.3,\"zhenShang\":31.3,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":150,\"agile\":90,\"intelligence\":195,\"minPower\":\"6\",\"minAgile\":\"5\",\"minIntelligence\":\"19\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"16\",\"state_name\":{\"id\":\"12\",\"name\":\"\\u7384\\u4ed9\",\"point\":\"220\",\"value\":\"3000\",\"time\":\"80000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u8611\\u83c7\",\"id\":\"173\",\"biology\":\"5\",\"state\":9,\"grade\":6,\"shengMing\":2268,\"moFa\":77,\"gongJi\":433,\"huJia\":211,\"faGong\":421,\"fakang\":208,\"suDu\":63,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":75,\"special\":3896,\"score\":\"79\",\"wuXing\":\"5\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"5\",\"descript\":\"\",\"lucky\":\"12\",\"maxNature\":50,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u8611\\u83c7\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":180,\"jingYan\":96,\"jianShang\":19.5,\"zhenShang\":19.5,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"C\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":114,\"agile\":138,\"intelligence\":126,\"minPower\":\"2\",\"minAgile\":\"7\",\"minIntelligence\":\"1\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"36\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u7075\"},{\"name\":\"\\u9ab7\\u9ac5\\u5175\",\"id\":5,\"biology\":\"4\",\"state\":10,\"grade\":3,\"shengMing\":1032,\"moFa\":36,\"gongJi\":163,\"huJia\":85,\"faGong\":172,\"fakang\":88,\"suDu\":20,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":33,\"special\":1764.6,\"score\":\"56\",\"wuXing\":\"12\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":null,\"lucky\":\"14\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u6d1b\\u514b\\u4eba\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":128,\"jingYan\":67,\"jianShang\":17.3,\"zhenShang\":17.3,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"D\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":57,\"agile\":36,\"intelligence\":45,\"minPower\":\"4\",\"minAgile\":\"1\",\"minIntelligence\":\"2\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"38\",\"state_name\":{\"id\":\"10\",\"name\":\"\\u5929\\u4ed9\",\"point\":\"180\",\"value\":\"2000\",\"time\":\"42000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u9b3c\"}]},{\"x\":1067,\"y\":525,\"map_int\":5,\"map_status\":1,\"total\":3,\"yiXing\":1,\"grade\":7,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":2,\"do3\":3,\"do4\":null,\"do5\":null,\"do6\":6,\"do7\":null,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u4e0a\\u5b98\\u6d77\\u68e0\",\"id\":2,\"biology\":\"1\",\"state\":9,\"grade\":4,\"shengMing\":1552,\"moFa\":51,\"gongJi\":291,\"huJia\":143,\"faGong\":284,\"fakang\":141,\"suDu\":42,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":51,\"special\":2850.2,\"score\":\"130\",\"wuXing\":\"13\",\"skill\":\"2,6,4,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u7384\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u4e0a\\u5b98\\u6d77\\u68e0\\uff08\\u53f6\\u7487\\u9970\\u6f14\\uff09\\uff0c\\u8273\\u5982\\u6843\\u674e\\uff0c\\u673a\\u667a\\u8fc7\\u4eba\\uff0c\\u7434\\u68cb\\u4e66\\u753b\\uff0c\\u533b\\u535c\\u661f\\u76f8\\uff0c\\u65e0\\u4e0d\\u901a\\u6653\\uff0c\\u5e73\\u65e5\\u5374\\u4f5c\\u7537\\u88c5\\u6253\\u626e\\uff0c\\u4e3b\\u6301\\u201c\\u5929\\u4e0b\\u7b2c\\u4e00\\u5e84\\u201d\\uff0c\\u5e84\\u5185\\u4eba\\u624d\\u6d4e\\u6d4e\\uff0c\\u638c\\u63e1\\u5929\\u4e0b\\u673a\\u5bc6\\u3002\",\"lucky\":\"17\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":278,\"jingYan\":143,\"jianShang\":22.1,\"zhenShang\":22.1,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":80,\"agile\":92,\"intelligence\":84,\"minPower\":\"10\",\"minAgile\":\"20\",\"minIntelligence\":\"15\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"8\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u7720\\u72c2\\u56db\\u90ce\",\"id\":3,\"biology\":\"1\",\"state\":9,\"grade\":6,\"shengMing\":2964,\"moFa\":72,\"gongJi\":380,\"huJia\":161,\"faGong\":311,\"fakang\":143,\"suDu\":54,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":50,\"special\":4376,\"score\":\"111\",\"wuXing\":\"8\",\"skill\":\"11,4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e1c\\u701b\\u8457\\u540d\\u5251\\u5ba2\\u7720\\u72c2\\u56db\\u90ce\\u300c\\u5e7b\\u5251\\u300d\\u3002\",\"lucky\":\"15\",\"maxNature\":50,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":244,\"jingYan\":128,\"jianShang\":20,\"zhenShang\":20,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":198,\"agile\":132,\"intelligence\":60,\"minPower\":\"21\",\"minAgile\":\"8\",\"minIntelligence\":\"7\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"15\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u91ce\\u732a\",\"id\":6,\"biology\":\"1\",\"state\":10,\"grade\":3,\"shengMing\":1416,\"moFa\":39,\"gongJi\":198,\"huJia\":94,\"faGong\":212,\"fakang\":98,\"suDu\":26,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":33,\"special\":2311.6000000000004,\"score\":\"114\",\"wuXing\":\"12\",\"skill\":\"8,2\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\",\"lucky\":\"19\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u5bab\\u672c\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":244,\"jingYan\":125,\"jianShang\":22.3,\"zhenShang\":22.3,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":87,\"agile\":54,\"intelligence\":69,\"minPower\":\"11\",\"minAgile\":\"3\",\"minIntelligence\":\"6\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"25\",\"state_name\":{\"id\":\"10\",\"name\":\"\\u5929\\u4ed9\",\"point\":\"180\",\"value\":\"2000\",\"time\":\"42000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"}]}]', '/app_resources/word/地图1.jpg');
INSERT INTO `x2_user_words` VALUES ('10', '0', '8', '26', '0', '1', '0', '[{\"x\":267,\"y\":75,\"map_int\":0,\"map_status\":1,\"total\":2,\"yiXing\":1,\"grade\":3,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":2,\"do3\":3,\"do4\":null,\"do5\":null,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u7720\\u72c2\\u56db\\u90ce\",\"id\":2,\"biology\":\"1\",\"state\":5,\"grade\":2,\"shengMing\":988,\"moFa\":24,\"gongJi\":131,\"huJia\":58,\"faGong\":108,\"fakang\":52,\"suDu\":18,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":19,\"special\":1632.8000000000002,\"score\":\"111\",\"wuXing\":\"8\",\"skill\":\"11,4,7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u4e1c\\u701b\\u8457\\u540d\\u5251\\u5ba2\\u7720\\u72c2\\u56db\\u90ce\\u300c\\u5e7b\\u5251\\u300d\\u3002\",\"lucky\":\"15\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u53f8\\u9a6c\\u61ff.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":236,\"jingYan\":120,\"jianShang\":16.9,\"zhenShang\":16.9,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":66,\"agile\":44,\"intelligence\":20,\"minPower\":\"21\",\"minAgile\":\"8\",\"minIntelligence\":\"7\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"15\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"200\",\"time\":\"3000\",\"difficult\":\"2\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\" \\u5f52\\u6d77\\u4e00\\u5200\",\"id\":3,\"biology\":\"1\",\"state\":7,\"grade\":3,\"shengMing\":1338,\"moFa\":39,\"gongJi\":225,\"huJia\":113,\"faGong\":222,\"fakang\":112,\"suDu\":32,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":41,\"special\":2222.2,\"score\":\"113\",\"wuXing\":\"17\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u5730\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u5f52\\u6d77\\u4e00\\u5200\\uff08\\u970d\\u5efa\\u534e\\u9970\\u6f14\\uff09\\uff0c\\u9ad8\\u50b2\\u5be1\\u8a00\\uff0c\\u7709\\u5b87\\u95f4\\u5e26\\u70b9\\u5fe7\\u90c1\\uff0c\\u56e0\\u5c11\\u65f6\\u7236\\u4eb2\\u5f52\\u6d77\\u767e\\u70bc\\u88ab\\u6740\\uff0c\\u4ed6\\u77e2\\u5fd7\\u8981\\u62a5\\u7236\\u4ec7\\uff0c\\u5200\\u6cd5\\u5929\\u4e0b\\u7b2c\\u4e00\\uff0c\\u6740\\u4eba\\u4ece\\u4e0d\\u7528\\u4f7f\\u7b2c\\u4e8c\\u5200\\u3002\",\"lucky\":\"20\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5c71\\u8d3c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":242,\"jingYan\":124,\"jianShang\":24.1,\"zhenShang\":24.1,\"color\":\"#f3f3f3\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":78,\"agile\":66,\"intelligence\":63,\"minPower\":\"18\",\"minAgile\":\"14\",\"minIntelligence\":\"12\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"2\",\"state_name\":{\"id\":\"7\",\"name\":\"\\u5316\\u795e\",\"point\":\"120\",\"value\":\"800\",\"time\":\"10000\",\"difficult\":\"2\"},\"zhong_zhu\":\"\\u517d\"}]},{\"x\":467,\"y\":75,\"map_int\":1,\"map_status\":1,\"total\":2,\"yiXing\":5,\"grade\":2,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":3,\"do4\":null,\"do5\":null,\"do6\":null,\"do7\":null,\"do8\":8,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u6bb5\\u5929\\u6daf\",\"id\":\"173\",\"biology\":\"1\",\"state\":5,\"grade\":2,\"shengMing\":804,\"moFa\":26,\"gongJi\":128,\"huJia\":54,\"faGong\":132,\"fakang\":55,\"suDu\":18,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":17,\"special\":1345.4,\"score\":\"93\",\"wuXing\":\"8\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u5929\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u6bb5\\u5929\\u6daf\\uff08\\u674e\\u4e9a\\u9e4f\\u9970\\u6f14\\uff09\\uff0c\\u51b7\\u9759\\u6c89\\u7740\\uff0c\\u81ea\\u5c0f\\u7531\\u94c1\\u80c6\\u795e\\u4faf\\u6536\\u517b\\uff0c\\u5728\\u4e1c\\u701b\\u8ddf\\u968f\\u201c\\u4f0a\\u8d3a\\u6d3e\\u201d\\u5b66\\u5f97\\u5fcd\\u672f\\u53ca\\u201c\\u5e7b\\u5251\\u201d\\u540e\\uff0c\\u52a0\\u5165\\u201c\\u62a4\\u9f99\\u5c71\\u5e84\\u201d\\uff0c\\u6b66\\u529f\\u6df1\\u4e0d\\u53ef\\u6d4b\\u3002\",\"lucky\":\"28\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":200,\"jingYan\":102,\"jianShang\":29.7,\"zhenShang\":29.7,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":42,\"agile\":44,\"intelligence\":48,\"minPower\":\"6\",\"minAgile\":\"12\",\"minIntelligence\":\"17\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"13\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"200\",\"time\":\"3000\",\"difficult\":\"2\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u5251\\u60ca\\u5cf0\",\"id\":3,\"biology\":\"1\",\"state\":6,\"grade\":2,\"shengMing\":996,\"moFa\":28,\"gongJi\":165,\"huJia\":74,\"faGong\":167,\"fakang\":74,\"suDu\":24,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":24,\"special\":1664.8000000000002,\"score\":\"115\",\"wuXing\":\"9\",\"skill\":\"\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u8f9f\\u90aa\\u5c71\\u5e84\\uff0c\\u66fe\\u4e0e\\u5f52\\u6d77\\u767e\\u70bc\\u4e00\\u6218\\u3002\",\"lucky\":\"28\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u53f8\\u9a6c\\u61ff.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":244,\"jingYan\":124,\"jianShang\":30.4,\"zhenShang\":30.4,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":56,\"agile\":58,\"intelligence\":60,\"minPower\":\"5\",\"minAgile\":\"10\",\"minIntelligence\":\"18\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"20\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"500\",\"time\":\"6000\",\"difficult\":\"2\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u4e91\\u7f57\\u90e1\\u4e3b\",\"id\":8,\"biology\":\"1\",\"state\":5,\"grade\":2,\"shengMing\":984,\"moFa\":28,\"gongJi\":182,\"huJia\":102,\"faGong\":205,\"fakang\":108,\"suDu\":25,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":40,\"special\":1967,\"score\":\"154\",\"wuXing\":\"15\",\"skill\":\"8,4,2,5\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f53\\u4eca\\u7687\\u4e0a\\u4e4b\\u59b9\\u3002\",\"lucky\":\"17\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5c71\\u8d3c.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":322,\"jingYan\":163,\"jianShang\":21,\"zhenShang\":21,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":56,\"agile\":44,\"intelligence\":68,\"minPower\":\"7\",\"minAgile\":\"5\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"2\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"7\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"200\",\"time\":\"3000\",\"difficult\":\"2\"},\"zhong_zhu\":\"\\u517d\"}]},{\"x\":667,\"y\":75,\"map_int\":2,\"map_status\":1,\"total\":2,\"yiXing\":1,\"grade\":4,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":null,\"do6\":null,\"do7\":null,\"do8\":8,\"do9\":9,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u72ec\\u89d2\\u517d\",\"id\":\"173\",\"biology\":\"1\",\"state\":5,\"grade\":2,\"shengMing\":736,\"moFa\":24,\"gongJi\":177,\"huJia\":90,\"faGong\":138,\"fakang\":81,\"suDu\":29,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":33,\"special\":1460.6,\"score\":\"99\",\"wuXing\":\"15\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"5\",\"descript\":\"\",\"lucky\":\"22\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u72ec\\u89d2\\u517d.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":212,\"jingYan\":108,\"jianShang\":25.3,\"zhenShang\":25.3,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":36,\"agile\":64,\"intelligence\":24,\"minPower\":\"2\",\"minAgile\":\"5\",\"minIntelligence\":\"6\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"35\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"200\",\"time\":\"3000\",\"difficult\":\"2\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u8611\\u83c7\",\"id\":8,\"biology\":\"5\",\"state\":7,\"grade\":2,\"shengMing\":756,\"moFa\":25,\"gongJi\":170,\"huJia\":96,\"faGong\":166,\"fakang\":95,\"suDu\":25,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":38,\"special\":1503.6,\"score\":\"79\",\"wuXing\":\"5\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"5\",\"descript\":\"\",\"lucky\":\"12\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u8611\\u83c7.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":172,\"jingYan\":88,\"jianShang\":15.8,\"zhenShang\":15.8,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"C\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":38,\"agile\":46,\"intelligence\":42,\"minPower\":\"2\",\"minAgile\":\"7\",\"minIntelligence\":\"1\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"36\",\"state_name\":{\"id\":\"7\",\"name\":\"\\u5316\\u795e\",\"point\":\"120\",\"value\":\"800\",\"time\":\"10000\",\"difficult\":\"2\"},\"zhong_zhu\":\"\\u7075\"},{\"name\":\"\\u6210\\u662f\\u975e\",\"id\":9,\"biology\":\"1\",\"state\":6,\"grade\":2,\"shengMing\":1016,\"moFa\":27,\"gongJi\":176,\"huJia\":90,\"faGong\":180,\"fakang\":91,\"suDu\":25,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":33,\"special\":1777.6,\"score\":\"110\",\"wuXing\":\"8\",\"skill\":\"6\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\\u201c\\u9ec4\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u6210\\u662f\\u975e\\uff08\\u90ed\\u664b\\u5b89\\u9970\\u6f14\\uff09\\uff0c\\u672c\\u662f\\u5e02\\u4e95\\u6df7\\u6df7\\uff0c\\u8bd9\\u8c10\\u6ed1\\u7a3d\\uff0c\\u4e0d\\u5b66\\u65e0\\u672f\\u5374\\u673a\\u667a\\u73b2\\u73d1\\uff0c\\u56e0\\u7f18\\u9645\\u4f1a\\u6210\\u4e3a\\u201c\\u4e0d\\u8d25\\u987d\\u7ae5\\u201d\\u53e4\\u4e09\\u901a\\u7684\\u4f20\\u4eba\\uff0c\\u6b66\\u529f\\u5929\\u4e0b\\u7b2c\\u4e00\\u3002\\u4ed6\\u4e00\\u65e6\\u4f7f\\u51fa\\u7edd\\u5b66\\u201c\\u91d1\\u521a\\u4e0d\\u574f\\u795e\\u529f\\u201d\\uff0c\\u4fbf\\u4f1a\\u6d51\\u8eab\\u53d8\\u6210\\u91d1\\u8272\\uff0c\\u53d8\\u8eab\\u6210\\u4e3a\\u91d1\\u4eba\\uff0c\\u529b\\u5927\\u65e0\\u7a77\\uff0c\\u5bd2\\u6691\\u4e0d\\u754f\\uff0c\\u6c34\\u706b\\u4e0d\\u60e7\\uff0c\\u5200\\u67aa\\u4e0d\\u5165\\uff0c\\u767e\\u6bd2\\u4e0d\\u4fb5\\u3002\",\"lucky\":\"16\",\"maxNature\":10,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":234,\"jingYan\":119,\"jianShang\":19.3,\"zhenShang\":19.3,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":100,\"power\":60,\"agile\":52,\"intelligence\":56,\"minPower\":\"12\",\"minAgile\":\"5\",\"minIntelligence\":\"6\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"5\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"24\",\"state_name\":{\"id\":\"6\",\"name\":\"\\u5143\\u5a74\",\"point\":\"100\",\"value\":\"500\",\"time\":\"6000\",\"difficult\":\"2\"},\"zhong_zhu\":\"\\u517d\"}]},{\"x\":467,\"y\":525,\"map_int\":3,\"map_status\":1,\"total\":1,\"yiXing\":5,\"grade\":21,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":null,\"do5\":null,\"do6\":6,\"do7\":null,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u67f3\\u751f\\u98d8\\u7d6e\",\"id\":\"173\",\"biology\":\"1\",\"state\":7,\"grade\":11,\"shengMing\":5016,\"moFa\":157,\"gongJi\":854,\"huJia\":395,\"faGong\":938,\"fakang\":416,\"suDu\":122,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":132,\"special\":8320.4,\"score\":\"152\",\"wuXing\":\"15\",\"skill\":\"7,11,4,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u67f3\\u751f\\u96ea\\u59ec\\u4e4b\\u59b9\\u3002\\u98d8\\u7d6e\\u8868\\u9762\\u4e00\\u5982\\u5176\\u59ca\\u96ea\\u59ec\\u822c\\u67d4\\u5f31\\uff0c\\u548c\\u5929\\u6daf\\u7ed3\\u5a5a\\u751f\\u5b50\\u540e\\u66f4\\u662f\\u4e2a\\u5178\\u578b\\u8d24\\u59bb\\u826f\\u6bcd\\uff0c\\u53ef\\u662f\\u5176\\u5b9e\\u673a\\u5fc3\\u751a\\u91cd\\uff0c\\uff0c\\u57ce\\u5e9c\\u751a\\u6df1\\uff0c\\u6697\\u5730\\u91cc\\u662f\\u4e2a\\u51b7\\u8840\\u6740\\u624b\\uff0c\\u4e14\\u901a\\u8fc7\\u4e0b\\u836f\\u7684\\u624b\\u6bb5\\u8feb\\u4f7f\\u5929\\u6daf\\u8fce\\u5a36\\u4e86\\u81ea\\u5df1\\u3002\\u3002\",\"lucky\":\"7\",\"maxNature\":100,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":336,\"jingYan\":179,\"jianShang\":20.200000000000003,\"zhenShang\":20.200000000000003,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":5500,\"power\":264,\"agile\":275,\"intelligence\":363,\"minPower\":\"10\",\"minAgile\":\"14\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"4\",\"state_name\":{\"id\":\"7\",\"name\":\"\\u5316\\u795e\",\"point\":\"120\",\"value\":\"800\",\"time\":\"10000\",\"difficult\":\"2\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u58eb\\u5175\",\"id\":6,\"biology\":\"1\",\"state\":5,\"grade\":6,\"shengMing\":-43668,\"moFa\":-219,\"gongJi\":-5967,\"huJia\":-2907,\"faGong\":-5164,\"fakang\":-2707,\"suDu\":-1006,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":-938,\"special\":-62557.600000000006,\"score\":\"136\",\"wuXing\":\"12\",\"skill\":\"1,2,3\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"3\",\"maxNature\":-940,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5c71\\u8d3c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":294,\"jingYan\":153,\"jianShang\":-90.80000000000001,\"zhenShang\":-90.80000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":-3627,\"agile\":-2418,\"intelligence\":-1581,\"minPower\":\"4\",\"minAgile\":\"5\",\"minIntelligence\":\"4\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"27\",\"state_name\":{\"id\":\"5\",\"name\":\"\\u91d1\\u4e39\",\"point\":\"80\",\"value\":\"200\",\"time\":\"3000\",\"difficult\":\"2\"},\"zhong_zhu\":\"\\u517d\"}]}]', '/app_resources/word/地图1.jpg');
INSERT INTO `x2_user_words` VALUES ('11', '0', '37', '26', '0', '1', '0', '[{\"x\":467,\"y\":75,\"map_int\":0,\"map_status\":1,\"total\":2,\"yiXing\":5,\"grade\":24,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":2,\"do3\":3,\"do4\":null,\"do5\":null,\"do6\":null,\"do7\":null,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u4e0a\\u5b98\\u6d77\\u68e0\",\"id\":2,\"biology\":\"1\",\"state\":10,\"grade\":5,\"shengMing\":1940,\"moFa\":64,\"gongJi\":357,\"huJia\":171,\"faGong\":347,\"fakang\":169,\"suDu\":52,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":60,\"special\":3457,\"score\":\"130\",\"wuXing\":\"13\",\"skill\":\"2,6,4,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u7384\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u4e0a\\u5b98\\u6d77\\u68e0\\uff08\\u53f6\\u7487\\u9970\\u6f14\\uff09\\uff0c\\u8273\\u5982\\u6843\\u674e\\uff0c\\u673a\\u667a\\u8fc7\\u4eba\\uff0c\\u7434\\u68cb\\u4e66\\u753b\\uff0c\\u533b\\u535c\\u661f\\u76f8\\uff0c\\u65e0\\u4e0d\\u901a\\u6653\\uff0c\\u5e73\\u65e5\\u5374\\u4f5c\\u7537\\u88c5\\u6253\\u626e\\uff0c\\u4e3b\\u6301\\u201c\\u5929\\u4e0b\\u7b2c\\u4e00\\u5e84\\u201d\\uff0c\\u5e84\\u5185\\u4eba\\u624d\\u6d4e\\u6d4e\\uff0c\\u638c\\u63e1\\u5929\\u4e0b\\u673a\\u5bc6\\u3002\",\"lucky\":\"17\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":280,\"jingYan\":145,\"jianShang\":23,\"zhenShang\":23,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":100,\"agile\":115,\"intelligence\":105,\"minPower\":\"10\",\"minAgile\":\"20\",\"minIntelligence\":\"15\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"8\",\"state_name\":{\"id\":\"10\",\"name\":\"\\u5929\\u4ed9\",\"point\":\"180\",\"value\":\"2000\",\"time\":\"42000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u4e86\\u7a7a\",\"id\":3,\"biology\":\"1\",\"state\":12,\"grade\":10,\"shengMing\":4640,\"moFa\":148,\"gongJi\":783,\"huJia\":372,\"faGong\":936,\"fakang\":411,\"suDu\":107,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":128,\"special\":7785.6,\"score\":\"132\",\"wuXing\":\"8\",\"skill\":\"2,10,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5c11\\u6797\\u5bfa\\u4e86\\u7a7a\\u5927\\u5e08\\u3002\",\"lucky\":\"17\",\"maxNature\":90,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u8c82\\u8749.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":294,\"jingYan\":157,\"jianShang\":29.8,\"zhenShang\":29.8,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":4500,\"power\":240,\"agile\":230,\"intelligence\":390,\"minPower\":\"11\",\"minAgile\":\"5\",\"minIntelligence\":\"25\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"21\",\"state_name\":{\"id\":\"12\",\"name\":\"\\u7384\\u4ed9\",\"point\":\"220\",\"value\":\"3000\",\"time\":\"80000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"}]},{\"x\":267,\"y\":225,\"map_int\":1,\"map_status\":1,\"total\":3,\"yiXing\":1,\"grade\":7,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":3,\"do4\":null,\"do5\":null,\"do6\":6,\"do7\":7,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u4e0a\\u5b98\\u6d77\\u68e0\",\"id\":\"173\",\"biology\":\"1\",\"state\":10,\"grade\":6,\"shengMing\":2328,\"moFa\":77,\"gongJi\":422,\"huJia\":200,\"faGong\":411,\"fakang\":197,\"suDu\":62,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":69,\"special\":4064.8,\"score\":\"130\",\"wuXing\":\"13\",\"skill\":\"2,6,4,10\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u201c\\u7384\\u5b57\\u7b2c\\u4e00\\u53f7\\u201d\\u4e0a\\u5b98\\u6d77\\u68e0\\uff08\\u53f6\\u7487\\u9970\\u6f14\\uff09\\uff0c\\u8273\\u5982\\u6843\\u674e\\uff0c\\u673a\\u667a\\u8fc7\\u4eba\\uff0c\\u7434\\u68cb\\u4e66\\u753b\\uff0c\\u533b\\u535c\\u661f\\u76f8\\uff0c\\u65e0\\u4e0d\\u901a\\u6653\\uff0c\\u5e73\\u65e5\\u5374\\u4f5c\\u7537\\u88c5\\u6253\\u626e\\uff0c\\u4e3b\\u6301\\u201c\\u5929\\u4e0b\\u7b2c\\u4e00\\u5e84\\u201d\\uff0c\\u5e84\\u5185\\u4eba\\u624d\\u6d4e\\u6d4e\\uff0c\\u638c\\u63e1\\u5929\\u4e0b\\u673a\\u5bc6\\u3002\",\"lucky\":\"17\",\"maxNature\":50,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"2\",\"jingBi\":282,\"jingYan\":147,\"jianShang\":23.9,\"zhenShang\":23.9,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":120,\"agile\":138,\"intelligence\":126,\"minPower\":\"10\",\"minAgile\":\"20\",\"minIntelligence\":\"15\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"4\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"8\",\"state_name\":{\"id\":\"10\",\"name\":\"\\u5929\\u4ed9\",\"point\":\"180\",\"value\":\"2000\",\"time\":\"42000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u6731\\u65e0\\u89c6\",\"id\":3,\"biology\":\"1\",\"state\":11,\"grade\":4,\"shengMing\":1320,\"moFa\":55,\"gongJi\":270,\"huJia\":120,\"faGong\":305,\"fakang\":128,\"suDu\":39,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":39,\"special\":2427.8,\"score\":\"103\",\"wuXing\":\"13\",\"skill\":\"7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5916\\u53f7\\u94c1\\u80c6\\u795e\\u4faf\\uff0c\\u4e3a\\u5f53\\u4eca\\u7687\\u4e0a\\u53d4\\u7236\\u3002\\u5f53\\u5e74\\u5148\\u7687\\u9a7e\\u5d29\\u524d\\uff0c\\u552f\\u6050\\u6b63\\u5fb7\\u5e74\\u5c11\\uff0c\\u6613\\u88ab\\u5978\\u4eba\\u64cd\\u63a7\\uff0c\\u6216\\u65e0\\u529b\\u4e3b\\u6301\\u671d\\u653f\\uff0c\\u4e0d\\u61c2\\u5206\\u8fa8\\u5fe0\\u5978\\uff0c\\u4e8e\\u662f\\u7279\\u4ee4\\u7687\\u5f1f\\u6731\\u65e0\\u89c6\\u521b\\u7acb\\u62a4\\u9f99\\u5c71\\u5e84\\uff0c\\u6743\\u529b\\u53ef\\u51cc\\u9a7e\\u6240\\u6709\\u671d\\u5ef7\\u673a\\u6784\\uff0c\\u5e76\\u8d50\\u4e88\\u5148\\u7687\\u4e4b\\u4e39\\u4e66\\u94c1\\u5377\\u3001\\u5c1a\\u65b9\\u5b9d\\u5251\\uff0c\\u53ef\\u4ee5\\u4e0a\\u65a9\\u660f\\u541b\\uff0c\\u4e0b\\u65a9\\u8c17\\u81e3\\uff0c\\u7ed9\\u4e86\\u6b63\\u5fb7\\u4e00\\u4e2a\\u6700\\u9ad8\\u7279\\u52a1\\u673a\\u6784\\uff0c\\u5236\\u8861\\u4e1c\\u5382\\u3002\",\"lucky\":\"21\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u8c82\\u8749.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":224,\"jingYan\":116,\"jianShang\":24.9,\"zhenShang\":24.9,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":48,\"agile\":92,\"intelligence\":128,\"minPower\":\"4\",\"minAgile\":\"9\",\"minIntelligence\":\"17\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"6\",\"state_name\":{\"id\":\"11\",\"name\":\"\\u771f\\u4ed9\",\"point\":\"200\",\"value\":\"2400\",\"time\":\"60000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u6731\\u65e0\\u89c6\",\"id\":6,\"biology\":\"1\",\"state\":9,\"grade\":5,\"shengMing\":1650,\"moFa\":69,\"gongJi\":334,\"huJia\":146,\"faGong\":378,\"fakang\":157,\"suDu\":48,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":47,\"special\":2982.3999999999996,\"score\":\"103\",\"wuXing\":\"13\",\"skill\":\"7\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5916\\u53f7\\u94c1\\u80c6\\u795e\\u4faf\\uff0c\\u4e3a\\u5f53\\u4eca\\u7687\\u4e0a\\u53d4\\u7236\\u3002\\u5f53\\u5e74\\u5148\\u7687\\u9a7e\\u5d29\\u524d\\uff0c\\u552f\\u6050\\u6b63\\u5fb7\\u5e74\\u5c11\\uff0c\\u6613\\u88ab\\u5978\\u4eba\\u64cd\\u63a7\\uff0c\\u6216\\u65e0\\u529b\\u4e3b\\u6301\\u671d\\u653f\\uff0c\\u4e0d\\u61c2\\u5206\\u8fa8\\u5fe0\\u5978\\uff0c\\u4e8e\\u662f\\u7279\\u4ee4\\u7687\\u5f1f\\u6731\\u65e0\\u89c6\\u521b\\u7acb\\u62a4\\u9f99\\u5c71\\u5e84\\uff0c\\u6743\\u529b\\u53ef\\u51cc\\u9a7e\\u6240\\u6709\\u671d\\u5ef7\\u673a\\u6784\\uff0c\\u5e76\\u8d50\\u4e88\\u5148\\u7687\\u4e4b\\u4e39\\u4e66\\u94c1\\u5377\\u3001\\u5c1a\\u65b9\\u5b9d\\u5251\\uff0c\\u53ef\\u4ee5\\u4e0a\\u65a9\\u660f\\u541b\\uff0c\\u4e0b\\u65a9\\u8c17\\u81e3\\uff0c\\u7ed9\\u4e86\\u6b63\\u5fb7\\u4e00\\u4e2a\\u6700\\u9ad8\\u7279\\u52a1\\u673a\\u6784\\uff0c\\u5236\\u8861\\u4e1c\\u5382\\u3002\",\"lucky\":\"21\",\"maxNature\":40,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u8c82\\u8749.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":226,\"jingYan\":118,\"jianShang\":25.7,\"zhenShang\":25.7,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1000,\"power\":60,\"agile\":115,\"intelligence\":160,\"minPower\":\"4\",\"minAgile\":\"9\",\"minIntelligence\":\"17\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"3\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"6\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u5f52\\u6d77\\u767e\\u70bc\",\"id\":7,\"biology\":\"1\",\"state\":10,\"grade\":3,\"shengMing\":1500,\"moFa\":42,\"gongJi\":230,\"huJia\":93,\"faGong\":236,\"fakang\":95,\"suDu\":34,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":27,\"special\":2518.3999999999996,\"score\":\"154\",\"wuXing\":\"18\",\"skill\":\"6,5,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\\u5f52\\u6d77\\u4e00\\u5200\\u4e4b\\u7236\\u3002\",\"lucky\":\"27\",\"maxNature\":20,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5c71\\u8d3c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":324,\"jingYan\":165,\"jianShang\":29.7,\"zhenShang\":29.7,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"SS\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":84,\"agile\":87,\"intelligence\":93,\"minPower\":\"9\",\"minAgile\":\"13\",\"minIntelligence\":\"22\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"22\",\"state_name\":{\"id\":\"10\",\"name\":\"\\u5929\\u4ed9\",\"point\":\"180\",\"value\":\"2000\",\"time\":\"42000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"}]},{\"x\":67,\"y\":525,\"map_int\":2,\"map_status\":1,\"total\":3,\"yiXing\":2,\"grade\":8,\"nature_do\":{\"id\":\"1\",\"do1\":null,\"do2\":\"173\",\"do3\":null,\"do4\":4,\"do5\":5,\"do6\":null,\"do7\":7,\"do8\":null,\"do9\":null,\"doNature\":\"0\",\"userid\":\"0\"},\"biology_list\":[{\"name\":\"\\u58eb\\u5175\",\"id\":\"173\",\"biology\":\"1\",\"state\":9,\"grade\":3,\"shengMing\":-45396,\"moFa\":-258,\"gongJi\":-6193,\"huJia\":-3006,\"faGong\":-5364,\"fakang\":-2799,\"suDu\":-1039,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":-969,\"special\":-65011.8,\"score\":\"136\",\"wuXing\":\"12\",\"skill\":\"1,2,3\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"3\",\"maxNature\":-970,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5c71\\u8d3c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":288,\"jingYan\":147,\"jianShang\":-93.9,\"zhenShang\":-93.9,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":300,\"power\":-3744,\"agile\":-2496,\"intelligence\":-1632,\"minPower\":\"4\",\"minAgile\":\"5\",\"minIntelligence\":\"4\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"27\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u5f3a\\u76d7\",\"id\":4,\"biology\":\"1\",\"state\":9,\"grade\":4,\"shengMing\":1776,\"moFa\":50,\"gongJi\":292,\"huJia\":112,\"faGong\":226,\"fakang\":95,\"suDu\":47,\"shanbi\":1,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":30,\"special\":2811,\"score\":\"116\",\"wuXing\":\"12\",\"skill\":\"2,11\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"1\",\"descript\":\"\",\"lucky\":\"13\",\"maxNature\":30,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5bab\\u672c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":250,\"jingYan\":129,\"jianShang\":16,\"zhenShang\":16,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"A\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":600,\"power\":100,\"agile\":128,\"intelligence\":60,\"minPower\":\"4\",\"minAgile\":\"17\",\"minIntelligence\":\"3\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"14\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u58eb\\u5175\",\"id\":5,\"biology\":\"1\",\"state\":10,\"grade\":6,\"shengMing\":-43668,\"moFa\":-219,\"gongJi\":-5967,\"huJia\":-2907,\"faGong\":-5164,\"fakang\":-2707,\"suDu\":-1006,\"shanbi\":0,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":-938,\"special\":-62557.600000000006,\"score\":\"136\",\"wuXing\":\"12\",\"skill\":\"1,2,3\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"4\",\"descript\":\"\",\"lucky\":\"3\",\"maxNature\":-940,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u5c71\\u8d3c.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":294,\"jingYan\":153,\"jianShang\":-90.80000000000001,\"zhenShang\":-90.80000000000001,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"S\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":1500,\"power\":-3627,\"agile\":-2418,\"intelligence\":-1581,\"minPower\":\"4\",\"minAgile\":\"5\",\"minIntelligence\":\"4\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"27\",\"state_name\":{\"id\":\"10\",\"name\":\"\\u5929\\u4ed9\",\"point\":\"180\",\"value\":\"2000\",\"time\":\"42000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u517d\"},{\"name\":\"\\u9b54\\u6cd5\\u5c11\\u5973\",\"id\":7,\"biology\":\"3\",\"state\":9,\"grade\":8,\"shengMing\":3344,\"moFa\":103,\"gongJi\":481,\"huJia\":214,\"faGong\":504,\"fakang\":220,\"suDu\":64,\"shanbi\":2,\"baoji\":\"150\",\"baojilv\":\"0\",\"shuaXin\":\"1\",\"xunLian\":\"3\",\"jinJie\":\"1\",\"biologyid\":\"0\",\"reiki\":71,\"special\":5173.200000000001,\"score\":\"99\",\"wuXing\":\"13\",\"skill\":\"53\",\"yuanShen\":\"0\",\"fate\":\"0\",\"type\":\"5\",\"descript\":\"\",\"lucky\":\"28\",\"maxNature\":70,\"qianNeng\":\"1\",\"character\":\"1\",\"picture\":\"\\u56fe\\u6807\\u751f\\u7269\\/\\u9b54\\u6cd5\\u5c11\\u5973.png\",\"yiXing\":0,\"sex\":\"1\",\"jingBi\":224,\"jingYan\":120,\"jianShang\":35.1,\"zhenShang\":35.1,\"color\":\"#FFFFFF\",\"danDu\":\"0\",\"scoreGrade\":\"B\",\"chuFa\":\"0\",\"wordid\":\"1\",\"jiBan\":\"1\",\"experience\":2800,\"power\":192,\"agile\":144,\"intelligence\":168,\"minPower\":\"11\",\"minAgile\":\"3\",\"minIntelligence\":\"8\",\"userid\":\"1\",\"percent\":\"0\",\"xiXue\":\"0\",\"shenFen\":\"1\",\"siwang\":\"0\",\"jisha\":\"0\",\"fuhuo\":\"0\",\"huDun\":\"0\",\"zhiLiao\":\"0\",\"zhenShi\":\"0\",\"wuDi\":\"0\",\"gooduse1\":null,\"gooduse2\":null,\"zhuanshen\":\"0\",\"zhujiao\":\"0\",\"zPower\":\"0\",\"zIntelligence\":\"0\",\"shouyuan\":\"60\",\"shouyuanYear\":\"1\",\"zAgile\":\"0\",\"wuXingTotal\":\"0\",\"userBiologyid\":\"33\",\"state_name\":{\"id\":\"9\",\"name\":\"\\u4ed9\\u4eba\",\"point\":\"160\",\"value\":\"1600\",\"time\":\"32000\",\"difficult\":\"3\"},\"zhong_zhu\":\"\\u4eba\"}]}]', '/app_resources/word/地图1.jpg');

-- ----------------------------
-- Table structure for x2_words
-- ----------------------------
DROP TABLE IF EXISTS `x2_words`;
CREATE TABLE `x2_words` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '世界表',
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `type` int(11) DEFAULT '1' COMMENT '世界等级',
  `music` varchar(255) DEFAULT NULL COMMENT '背景音乐',
  `picture` varchar(255) DEFAULT NULL COMMENT '图片',
  `difficult` int(255) DEFAULT '1' COMMENT '相对当前世界难度',
  `type_name` varchar(255) DEFAULT NULL COMMENT '世界等级名称',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `down` varchar(255) DEFAULT NULL COMMENT '掉落',
  `time` int(25) DEFAULT '10' COMMENT '时间流速',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_words
-- ----------------------------
INSERT INTO `x2_words` VALUES ('1', '魔兽世界', '0', null, '蓝星', '1', '普通世界', '魔兽世界', null, '0');
INSERT INTO `x2_words` VALUES ('2', '天下第一', '1', '', '天下第一', '4', '低武世界', '', '', '2');
INSERT INTO `x2_words` VALUES ('3', '武林外传', '1', '', '倩女幽魂', '1', '低武世界', '', '', '1');
INSERT INTO `x2_words` VALUES ('4', '隋唐英雄传', '1', '', '隋唐英雄传', '1', '低武世界', '', '', '1');
INSERT INTO `x2_words` VALUES ('5', '水浒传', '1', '', '水浒传', '2', '低武世界', '来源于小说，水浒传为世界背景，以天师教道统为主，人物实力较高。', '', '1');
INSERT INTO `x2_words` VALUES ('6', '蝶舞天涯', '1', '', '蝶舞天涯', '3', '低武世界', '来源于电视剧，吕布与貂蝉为主线人物，原定名《三国传说》。《太平经》：《太平经》又名《太平清领书》。据《后汉书·襄楷传》称：汉顺帝时，琅玡人宫崇诣阙，献其师于吉所得神书，号曰《太平清领书》。此神书即《太平经》，系东汉原始道教重要经典。', '《太平经》', '1');
INSERT INTO `x2_words` VALUES ('7', '大唐双龙传', '1', '', '大唐双龙传', '4', '低武世界', '《三官经》：《太上三元赐福赦罪解厄消灾延生保命妙经》也作《三官经》或《三官感应妙经》。三官，指天、地、水三官大帝。转诵此经至满千遍，大作踊跃；悔过愆尤，断恶修善,即能除无妄之灾，解有仇之愆；赐千祥之福，脱九厄之难，离三途之苦。', '《三官经》', '2');
INSERT INTO `x2_words` VALUES ('8', '鹿鼎记', '1', '', '鹿鼎记', '2', '低武世界', '', '', '1');
INSERT INTO `x2_words` VALUES ('9', '倚天屠龙记', '2', '', '倚天屠龙记', '3', '古武世界', '', '《九阳真经》《九阴真经》', '2');
INSERT INTO `x2_words` VALUES ('10', '笑傲江湖', '2', '', '笑傲江湖', '2', '古武世界', '', '《道藏》', '2');
INSERT INTO `x2_words` VALUES ('11', '神雕侠侣', '2', '', '神雕侠侣', '2', '古武世界', '', '《周易参同契》', '2');
INSERT INTO `x2_words` VALUES ('12', '天龙八部', '2', '', '天龙八部', '3', '古武世界', '《南华经》：《南华真经》即《庄子》，战国时庄周撰。唐玄宗于天宝元年诏封庄子为“南华真人”，尊其书为《南华真经》。到宋徽宗时,又追封庄周为“微妙无通真君”', '《不老长春功》 《南华经》 《易筋经》 ', '5');
INSERT INTO `x2_words` VALUES ('13', '倩女幽魂', '2', '', '倩女幽魂', '2', '古武世界', '《抱朴子》：《抱朴子》是对战国以来、直至汉代的神仙思想和炼丹养生方术所作的系统的总结，为魏晋神仙道教奠定理论基础的道教经典。作者是晋代葛洪祖师。', '《抱朴子》', '20');
INSERT INTO `x2_words` VALUES ('14', '侠客行', '2', '', '倩女幽魂', '5', '古武世界', '《太玄经》，汉扬雄撰，也称《扬子太玄经》，其书模仿《周易》，以天地人三才为本，著重阐发宇宙生成、天地运行及人事变化之哲理，具有辩证法因素。该书对东汉以来天文象数学发展影响甚大，但其文辞艰深晦涩，故历代学者为之注释训诂者颇多。', '《太玄经》', '10');
INSERT INTO `x2_words` VALUES ('15', '秦时明月', '2', '', '倩女幽魂', '4', '古武世界', '《道德经》：《道德经》又称《老子》、《五千言》，是中国古代先秦诸子分家前的一部著作，是中国历史上首部完整的哲学著作，是道家哲学思想的重要来源,春秋时期的老子李耳所撰写', '《道德经》', '10');
INSERT INTO `x2_words` VALUES ('16', '仙剑奇侠传', '3', '', '倩女幽魂', '4', '仙侠世界', '《北斗经》：《北斗经》，全称《太上玄灵北斗本命延生真经》。经中称，北斗七星君乃造化之枢机，人神之主宰，有回生注死之功，消灾度厄之力。凡人性命五体，悉属本命星官主掌。', '《北斗经》', '10');
INSERT INTO `x2_words` VALUES ('17', '蜀山传奇', '3', '', '倩女幽魂', '5', '仙侠世界', '《通玄经》：《通玄真经》即《文子》，战国时文子所著。唐玄宗崇道，于天宝元年（742）封文子为「通玄真人」，尊称其书为《通玄真经》。', '《通玄真经》', '100');
INSERT INTO `x2_words` VALUES ('18', '诛仙', '3', '', '倩女幽魂', '4', '仙侠世界', '', '《天书》', '20');
INSERT INTO `x2_words` VALUES ('19', '漫威世界', '2', '', '倩女幽魂', '5', '古武世界', '《冲虚经》：《冲虚经》即《列子》，旧题周列御寇撰。唐玄宗崇道，于天宝元年（742）封 列子为冲虚真人，尊称其书《冲虚真经》。至宋真宗景德（1004－1007）中加封列子为「冲虚至德真人」，故又名《冲虚至德真经》', '《长生诀》《冲虚经》', '20');
INSERT INTO `x2_words` VALUES ('20', '西游记', '4', '', '倩女幽魂', '3', '神话世界', '', '', '100');
INSERT INTO `x2_words` VALUES ('21', '盘龙', '4', '', '倩女幽魂', '3', '神话世界', '《阴符经》：《阴符经》，全称《黄帝阴符经》或《轩辕黄帝阴符经》，也称《黄帝天机经》，总共只有300多字。《阴符经》是唐朝著名道士李筌发现于嵩山，在骊山经骊山老母点化，此后才传抄流行于世。', '《阴符经》', '50');
INSERT INTO `x2_words` VALUES ('22', '斗破苍穹', '4', '', '倩女幽魂', '2', '神话世界', '《常清静经》：《常清静经》是《太上老君说常清静经》的简称，大约成书于唐代，收录于《正统道藏》洞神部。它是多数道教学人必须背诵的经典，被视为道教在心性修练上的法宝。', '《常清静经》', '100');
INSERT INTO `x2_words` VALUES ('23', '遮天', '4', '', '倩女幽魂', '4', '神话世界', '《度人经》：全称《太上洞玄灵宝无量度人上品妙经》，或称《元始无量度人上品妙经》。由《元始洞玄灵宝本章》、《元洞玉历章》和《前序》、《中序》、《后序》及《元始灵书》上、中、下篇组成。', '《度人经》', '200');
INSERT INTO `x2_words` VALUES ('24', '永生', '4', '', '倩女幽魂', '5', '神话世界', '《心印经》：气功内丹术著作。全称《高上玉皇心印妙经》。一卷，唐代著作。此经为四言韵文，共五十句。主要讲述内丹术的基本理论，阐发精、气、神的含义及它们之间的关系，对后世有较大影响。', '《心印经', '500');
INSERT INTO `x2_words` VALUES ('25', '诸神黄昏', '4', '', '倩女幽魂', '2', '神话世界', '', '《圣经》', '100');
INSERT INTO `x2_words` VALUES ('26', '凡人修仙传', '4', '', '倩女幽魂', '4', '神话世界', '《玉皇经》：全称《高上玉皇本行集经》，有3卷。道士斋醮祈禳及道门功课的必诵经文。经文由《清微天宫神通品》、《太上大光明圆满大神咒品》、《诵持功德品》、《天真护持品》及《报应神验品》组成。', '《玉皇经》', '100');
INSERT INTO `x2_words` VALUES ('27', '玄黄', '5', '', '倩女幽魂', '2', '起源世界', '玄黄，天地玄黄宇宙洪荒混沌', '', '500');
INSERT INTO `x2_words` VALUES ('28', '鸿蒙', '5', '', '倩女幽魂', '1', '起源世界', '天地，天地玄黄宇宙洪荒混沌', '', '500');
INSERT INTO `x2_words` VALUES ('29', '洪荒', '5', '', '倩女幽魂', '4', '起源世界', '洪荒，天地玄黄宇宙洪荒混沌', '', '500');
INSERT INTO `x2_words` VALUES ('30', '混沌', '5', '', '倩女幽魂', '5', '起源世界', '混沌，天地玄黄宇宙洪荒混沌', '', '500');
INSERT INTO `x2_words` VALUES ('31', '我和僵尸有个约会', '3', '', '倩女幽魂', '5', '仙侠世界', '', '《地书》《人书》', '50');
INSERT INTO `x2_words` VALUES ('32', '僵尸道长', '1', '', '僵尸道长', '5', '低武世界', '《上清经》被视为道家“三奇第一之奇”，历代流传不绝，宣称如果得到《上清 经》，根本不需要再炼丹修道，只需读上一万遍，便可以成仙。《上清经》的全称是 《上清大洞真经三十九章》，又称《大洞真经》、《三天龙书》、《九天太真道经》、 《三十九章经》，为上清派首经。', '《六甲天书 》《上清经》 ', '5');
INSERT INTO `x2_words` VALUES ('33', '神话', '2', '', '倩女幽魂', '1', '古武世界', '', '仙丹(寿元+1w)', '100');
INSERT INTO `x2_words` VALUES ('34', '漫威', '4', '', '倩女幽魂', '3', '神话世界', '', '', '50');
INSERT INTO `x2_words` VALUES ('35', '封神演义', '4', '', '倩女幽魂', '4', '神话世界', '', '', '20');
INSERT INTO `x2_words` VALUES ('36', '宇宙', '5', '', '倩女幽魂', '3', '起源世界', '宇宙，天地玄黄宇宙洪荒混沌', '', '500');
INSERT INTO `x2_words` VALUES ('37', '风云', '1', '', '风云', '3', '低武世界', '', '', '2');
INSERT INTO `x2_words` VALUES ('38', '连城诀', '1', '', '连城诀', '1', '低武世界', '', '', '1');
INSERT INTO `x2_words` VALUES ('39', '功夫', '0', '', '功夫', '1', '普通世界', '', '', '1');
INSERT INTO `x2_words` VALUES ('41', '指环王', '4', null, '倩女幽魂', '1', '神话世界', null, null, '50');
INSERT INTO `x2_words` VALUES ('40', '少年张三丰', '1', '', '少年张三丰', '1', '低武世界', '', '', '1');
INSERT INTO `x2_words` VALUES ('42', '聊斋', '2', null, '倩女幽魂', '2', '神话世界', null, null, '20');
INSERT INTO `x2_words` VALUES ('43', '楚汉传奇', '0', null, '楚汉传奇', '1', '普通世界', '', '', '1');
INSERT INTO `x2_words` VALUES ('44', '斗罗大陆', '3', null, '楚汉传奇', '5', '仙侠世界', null, null, '10');

-- ----------------------------
-- Table structure for x2_words_biology
-- ----------------------------
DROP TABLE IF EXISTS `x2_words_biology`;
CREATE TABLE `x2_words_biology` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `biology` longtext COMMENT '生物',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_words_biology
-- ----------------------------
INSERT INTO `x2_words_biology` VALUES ('1', '世界boos', null);
INSERT INTO `x2_words_biology` VALUES ('2', '秘境boos', null);
INSERT INTO `x2_words_biology` VALUES ('3', '金丹', null);
INSERT INTO `x2_words_biology` VALUES ('4', '元婴', null);
INSERT INTO `x2_words_biology` VALUES ('5', '仙人', null);
INSERT INTO `x2_words_biology` VALUES ('6', '天仙', null);

-- ----------------------------
-- Table structure for x2_words_story
-- ----------------------------
DROP TABLE IF EXISTS `x2_words_story`;
CREATE TABLE `x2_words_story` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `velue` int(11) DEFAULT '1' COMMENT '概率',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `condition` int(11) DEFAULT '0' COMMENT '完成条件 剧情数',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_words_story
-- ----------------------------
INSERT INTO `x2_words_story` VALUES ('1', '奇遇', '1', '触发任意战斗事件。', '0');
INSERT INTO `x2_words_story` VALUES ('2', '奇遇', '1', '触发任意战斗事件。', '0');
INSERT INTO `x2_words_story` VALUES ('3', '奇遇', '1', '触发任意战斗事件。', '0');
INSERT INTO `x2_words_story` VALUES ('4', '商人', '1', '可以购买异世界物品。', '0');
INSERT INTO `x2_words_story` VALUES ('5', '天材地宝', '1', '有几率获得天材地宝。', '0');
INSERT INTO `x2_words_story` VALUES ('6', '奇遇', '1', '触发任意战斗事件。', '0');
INSERT INTO `x2_words_story` VALUES ('7', '奇遇', '1', '触发任意战斗事件。', '0');
INSERT INTO `x2_words_story` VALUES ('8', '奇遇', '1', '触发任意战斗事件。', '0');
INSERT INTO `x2_words_story` VALUES ('9', '奇遇', '1', '触发任意战斗事件。', '0');
INSERT INTO `x2_words_story` VALUES ('10', '拜入门派', '1', '有几率获得功法。', '0');

-- ----------------------------
-- Table structure for x2_words_story_condition
-- ----------------------------
DROP TABLE IF EXISTS `x2_words_story_condition`;
CREATE TABLE `x2_words_story_condition` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '剧情胜利条件表',
  `name` varchar(255) DEFAULT NULL,
  `describe` varchar(255) DEFAULT NULL,
  `value` int(11) DEFAULT '1' COMMENT '条件1 指定队伍数    条件2 死亡人数',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_words_story_condition
-- ----------------------------
INSERT INTO `x2_words_story_condition` VALUES ('1', '击杀普通', '击杀普通 ', '10');
INSERT INTO `x2_words_story_condition` VALUES ('2', '击杀精英', '击杀精英 ', '5');
INSERT INTO `x2_words_story_condition` VALUES ('3', '击杀头目', '击杀头目 ', '3');
INSERT INTO `x2_words_story_condition` VALUES ('4', '击杀气运之子', '击杀敌方气运之子', '2');
INSERT INTO `x2_words_story_condition` VALUES ('5', '击杀天地主角', '击杀敌方天地主角', '1');
INSERT INTO `x2_words_story_condition` VALUES ('6', '秘境', '特殊物品', '1');
INSERT INTO `x2_words_story_condition` VALUES ('7', '天罚', '友方阵容降低血量50%', '1');
INSERT INTO `x2_words_story_condition` VALUES ('8', '治疗', '友方阵容回复血量100%', '1');
INSERT INTO `x2_words_story_condition` VALUES ('9', '奇遇', '意外获得物品', '5');
INSERT INTO `x2_words_story_condition` VALUES ('10', '无', '什么也没发生', '1');

-- ----------------------------
-- Table structure for x2_words_story_value
-- ----------------------------
DROP TABLE IF EXISTS `x2_words_story_value`;
CREATE TABLE `x2_words_story_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '生成条件表， 用户临时参数储存表',
  `name` varchar(255) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `conditionid` int(11) DEFAULT NULL COMMENT '剧情id',
  `value` int(11) DEFAULT '0' COMMENT '完成参数',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x2_words_story_value
-- ----------------------------
INSERT INTO `x2_words_story_value` VALUES ('1', '击杀', '1', '1', '1');
