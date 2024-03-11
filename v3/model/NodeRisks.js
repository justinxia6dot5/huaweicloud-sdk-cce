"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeRisks = void 0;
class NodeRisks {
    constructor() {
    }
    withNodeID(nodeID) {
        this['NodeID'] = nodeID;
        return this;
    }
    set nodeID(nodeID) {
        this['NodeID'] = nodeID;
    }
    get nodeID() {
        return this['NodeID'];
    }
}
exports.NodeRisks = NodeRisks;
//# sourceMappingURL=NodeRisks.js.map