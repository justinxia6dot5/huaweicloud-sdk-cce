"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCheckStatus = void 0;
class NodeCheckStatus {
    constructor() {
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withNodeStageStatus(nodeStageStatus) {
        this['nodeStageStatus'] = nodeStageStatus;
        return this;
    }
}
exports.NodeCheckStatus = NodeCheckStatus;
//# sourceMappingURL=NodeCheckStatus.js.map