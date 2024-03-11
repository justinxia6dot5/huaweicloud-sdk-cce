"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePoolStatusPhaseEnum = exports.NodePoolStatus = void 0;
class NodePoolStatus {
    constructor() {
    }
    withCurrentNode(currentNode) {
        this['currentNode'] = currentNode;
        return this;
    }
    withCreatingNode(creatingNode) {
        this['creatingNode'] = creatingNode;
        return this;
    }
    withDeletingNode(deletingNode) {
        this['deletingNode'] = deletingNode;
        return this;
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withJobId(jobId) {
        this['jobId'] = jobId;
        return this;
    }
    withConditions(conditions) {
        this['conditions'] = conditions;
        return this;
    }
}
exports.NodePoolStatus = NodePoolStatus;
/**
    * @export
    * @enum {string}
    */
var NodePoolStatusPhaseEnum;
(function (NodePoolStatusPhaseEnum) {
    NodePoolStatusPhaseEnum["SYNCHRONIZING"] = "Synchronizing";
    NodePoolStatusPhaseEnum["SYNCHRONIZED"] = "Synchronized";
    NodePoolStatusPhaseEnum["SOLDOUT"] = "SoldOut";
    NodePoolStatusPhaseEnum["DELETING"] = "Deleting";
    NodePoolStatusPhaseEnum["ERROR"] = "Error";
})(NodePoolStatusPhaseEnum = exports.NodePoolStatusPhaseEnum || (exports.NodePoolStatusPhaseEnum = {}));
//# sourceMappingURL=NodePoolStatus.js.map