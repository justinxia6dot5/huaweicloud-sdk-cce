"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetNode = void 0;
class ResetNode {
    constructor(nodeID, spec) {
        this['nodeID'] = nodeID;
        this['spec'] = spec;
    }
    withNodeID(nodeID) {
        this['nodeID'] = nodeID;
        return this;
    }
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
}
exports.ResetNode = ResetNode;
//# sourceMappingURL=ResetNode.js.map