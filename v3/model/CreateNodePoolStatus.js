"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNodePoolStatusPhaseEnum = exports.CreateNodePoolStatus = void 0;
class CreateNodePoolStatus {
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
exports.CreateNodePoolStatus = CreateNodePoolStatus;
/**
    * @export
    * @enum {string}
    */
var CreateNodePoolStatusPhaseEnum;
(function (CreateNodePoolStatusPhaseEnum) {
    CreateNodePoolStatusPhaseEnum["SYNCHRONIZING"] = "Synchronizing";
    CreateNodePoolStatusPhaseEnum["SYNCHRONIZED"] = "Synchronized";
    CreateNodePoolStatusPhaseEnum["SOLDOUT"] = "SoldOut";
    CreateNodePoolStatusPhaseEnum["DELETING"] = "Deleting";
    CreateNodePoolStatusPhaseEnum["ERROR"] = "Error";
})(CreateNodePoolStatusPhaseEnum = exports.CreateNodePoolStatusPhaseEnum || (exports.CreateNodePoolStatusPhaseEnum = {}));
//# sourceMappingURL=CreateNodePoolStatus.js.map