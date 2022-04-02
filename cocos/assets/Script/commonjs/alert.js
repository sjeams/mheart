// //引入alert    
// let alert = require('alert');

// //弹窗调用
// alert.show.call(this, "确认退出游戏？", "取消", "确认", function (type) {
//    if (type == "取消") {
//        console.log("取消");
//    }
//    if (type == "确认") {
//        console.log("确认");
//    }
// });



let tipAlert = {
    _alert: null,           //prefab
    _animSpeed: 0.3,        //弹窗动画速度
};
 
/**
 * @param tipStr
 * @param leftStr
 * @param rightStr
 * @param callback
 */
let show = function (tipStr,leftStr,rightStr,callback) {
    cc.loader.loadRes("alert/tipAlert",cc.Prefab, function (error, prefab){
        if (error){
            cc.error(error);
            return;
        }
        tipAlert._alert = cc.instantiate(prefab);
        cc.director.getScene().addChild(tipAlert._alert,3);
        cc.find("tipAlert/content/top/tip").getComponent(cc.Label).string = tipStr;
        cc.find("tipAlert/content/bottom/left_btn/leftbtn").getComponent(cc.Label).string = leftStr;
        cc.find("tipAlert/content/bottom/right_btn/rightbtn").getComponent(cc.Label).string = rightStr;
        if(callback){
            cc.find("tipAlert/content/bottom/left_btn").on('click', function (event) {
                dismiss();
                callback(leftStr);
            }, this);
 
            cc.find("tipAlert/content/bottom/right_btn").on('click', function (event) {
                dismiss();
                callback(rightStr);
            }, this);
        }
        //设置parent 为当前场景的Canvas ，position跟随父节点
        tipAlert._alert.parent = cc.find("Canvas");
        startFadeIn();
    });
};
 
// 执行弹进动画
let startFadeIn = function () {
    //动画
    tipAlert._alert.setScale(2);
    tipAlert._alert.opacity = 0;
    let cbFadeIn = cc.callFunc(onFadeInFinish, this);
    let actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(tipAlert._animSpeed, 255), cc.scaleTo(tipAlert._animSpeed, 1.0)), cbFadeIn);
    tipAlert._alert.runAction(actionFadeIn);
};
 
 
// 弹进动画完成回调
let onFadeInFinish = function () {
};
 
// 执行弹出动画
let dismiss = function () {
    if (!tipAlert._alert) {
        return;
    }
    let cbFadeOut = cc.callFunc(onFadeOutFinish, this);
    let actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(tipAlert._animSpeed, 0), cc.scaleTo(tipAlert._animSpeed, 2.0)), cbFadeOut);
    tipAlert._alert.runAction(actionFadeOut);
};
 
// 弹出动画完成回调
let onFadeOutFinish = function () {
    onDestroy();
};
 
let onDestroy = function () {
    if (tipAlert._alert != null) {
        tipAlert._alert.removeFromParent();
        tipAlert._alert = null;
    }
};
 
module.exports={
  show
};