"use strict";
cc._RF.push(module, 'fc4adBWKu1BTJfx5nsR6FFy', 'OutlineDemo');
// resources/assets/OutlineDemo/OutlineDemo.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OutlineDemo = /** @class */ (function (_super) {
    __extends(OutlineDemo, _super);
    function OutlineDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.outlineSprite = null;
        return _this;
    }
    OutlineDemo.prototype.onLoad = function () {
        //获取图片的材质
        var material = this.outlineSprite.getMaterial(0);
        material.setProperty("imgColor", new cc.Vec4(255, 0, 0, 255));
        material.setProperty("radius", 0.01);
        // //打印材质的pass属性
        // console.log((material as any)._effect._passes[0]._defines["USE_TEXTURE"]);
        // //监听鼠标移动
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => {
        //     let localPos = this.outlineSprite.node.parent.convertToNodeSpaceAR(e.getLocation());
        //     //判断鼠标移入图片内，则设置颜色为绿色
        //     if (this.outlineSprite.node.getBoundingBox().contains(localPos)) {
        //         material.setProperty("imgColor", new cc.Vec4(255, 0, 0, 255));
        //         material.setProperty("radius", 0.01);
        //         //判断鼠标移出图片，则设置颜色为0，还原成本来颜色
        //     } else {
        //         material.setProperty("imgColor", new cc.Vec4(0, 0, 0, 0));
        //     }
        // }, this);
    };
    __decorate([
        property({ type: cc.Sprite, tooltip: "材质为OutlineMaterial图片" })
    ], OutlineDemo.prototype, "outlineSprite", void 0);
    OutlineDemo = __decorate([
        ccclass
    ], OutlineDemo);
    return OutlineDemo;
}(cc.Component));
exports.default = OutlineDemo;

cc._RF.pop();