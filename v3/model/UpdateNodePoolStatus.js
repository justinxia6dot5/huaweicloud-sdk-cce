"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNodePoolStatusPhaseEnum = exports.UpdateNodePoolStatus = void 0;
class UpdateNodePoolStatus {
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
    withConditions(conditions) {
        this['conditions'] = conditions;
        return this;
    }
}
exports.UpdateNodePoolStatus = UpdateNodePoolStatus;
/**
    * @export
    * @enum {string}
    */
var UpdateNodePoolStatusPhaseEnum;
(function (UpdateNodePoolStatusPhaseEnum) {
    UpdateNodePoolStatusPhaseEnum["SYNCHRONIZING"] = "Synchronizing";
    UpdateNodePoolStatusPhaseEnum["SYNCHRONIZED"] = "Synchronized";
    UpdateNodePoolStatusPhaseEnum["SOLDOUT"] = "SoldOut";
    UpdateNodePoolStatusPhaseEnum["DELETING"] = "Deleting";
    UpdateNodePoolStatusPhaseEnum["ERROR"] = "Error";
})(UpdateNodePoolStatusPhaseEnum = exports.UpdateNodePoolStatusPhaseEnum || (exports.UpdateNodePoolStatusPhaseEnum = {}));
//# sourceMappingURL=UpdateNodePoolStatus.js.map