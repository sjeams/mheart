import {TOOLS} from './Conf';

cc.Class({
    extends: cc.Component,

    properties: {
        gridLayout: cc.Node,
        toolPrefab: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    spawnTools () {
        // 首先确定gridLayout的各个属性
        let cellWidth = this.gridLayout.width * 0.105;
        let cellHeight = this.gridLayout.height * 0.215;
        let spacingX = this.gridLayout.width * 0.022;
        let spacingY = this.gridLayout.height * 0.045;

        this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
        this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
        this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
        this.gridLayout.getComponent(cc.Layout).spacingY = spacingY;

        // 根据TOOLS生成相应的道具
        this.toolsArray = [];
        for (let i=0; i<TOOLS.length; i++) {
            let tool = cc.instantiate(this.toolPrefab);
            tool.getComponent('Tool').initInfo(TOOLS[i]);
            this.toolsArray.push(tool);
            this.gridLayout.addChild(tool);
        }
    },

    bagBtn () {
        // 背包按钮
        if (this.gridLayout.parent.active) {
            // 隐藏节点
            this.gridLayout.parent.active = false;

            // 删除所有道具(或者不删，只是隐藏，自己决定)
            this.toolsArray.forEach(element => {
                element.removeFromParent();
            });
        }
        else {
            // 显示节点
            this.gridLayout.parent.active = true;

            // 生成所有道具
            this.spawnTools();
        }
    },
});
