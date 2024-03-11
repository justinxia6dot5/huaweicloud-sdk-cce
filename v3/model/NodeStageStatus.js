"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeStageStatus = void 0;
class NodeStageStatus {
    constructor() {
    }
    withNodeInfo(nodeInfo) {
        this['nodeInfo'] = nodeInfo;
        return this;
    }
    withItemsStatus(itemsStatus) {
        this['itemsStatus'] = itemsStatus;
        return this;
    }
}
exports.NodeStageStatus = NodeStageStatus;
//# sourceMappingURL=NodeStageStatus.js.map