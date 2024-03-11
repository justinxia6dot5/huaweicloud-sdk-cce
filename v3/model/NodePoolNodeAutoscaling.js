"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePoolNodeAutoscaling = void 0;
class NodePoolNodeAutoscaling {
    constructor() {
    }
    withEnable(enable) {
        this['enable'] = enable;
        return this;
    }
    withMinNodeCount(minNodeCount) {
        this['minNodeCount'] = minNodeCount;
        return this;
    }
    withMaxNodeCount(maxNodeCount) {
        this['maxNodeCount'] = maxNodeCount;
        return this;
    }
    withScaleDownCooldownTime(scaleDownCooldownTime) {
        this['scaleDownCooldownTime'] = scaleDownCooldownTime;
        return this;
    }
    withPriority(priority) {
        this['priority'] = priority;
        return this;
    }
}
exports.NodePoolNodeAutoscaling = NodePoolNodeAutoscaling;
//# sourceMappingURL=NodePoolNodeAutoscaling.js.map