

const { ccclass, property } = cc._decorator;

@ccclass
export default class OutlineDemo extends cc.Component {

    @property({ type: cc.Sprite, tooltip: "材质为OutlineMaterial图片" })
    outlineSprite: cc.Sprite = null;

    onLoad() {
        //获取图片的材质
        let material: cc.Material = this.outlineSprite.getMaterial(0);
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
    }
}
