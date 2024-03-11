"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNodePoolStatusPhaseEnum = exports.DeleteNodePoolStatus = void 0;
class DeleteNodePoolStatus {
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
exports.DeleteNodePoolStatus = DeleteNodePoolStatus;
/**
    * @export
    * @enum {string}
    */
var DeleteNodePoolStatusPhaseEnum;
(function (DeleteNodePoolStatusPhaseEnum) {
    DeleteNodePoolStatusPhaseEnum["SYNCHRONIZING"] = "Synchronizing";
    DeleteNodePoolStatusPhaseEnum["SYNCHRONIZED"] = "Synchronized";
    DeleteNodePoolStatusPhaseEnum["SOLDOUT"] = "SoldOut";
    DeleteNodePoolStatusPhaseEnum["DELETING"] = "Deleting";
    DeleteNodePoolStatusPhaseEnum["ERROR"] = "Error";
})(DeleteNodePoolStatusPhaseEnum = exports.DeleteNodePoolStatusPhaseEnum || (exports.DeleteNodePoolStatusPhaseEnum = {}));
//# sourceMappingURL=DeleteNodePoolStatus.js.map