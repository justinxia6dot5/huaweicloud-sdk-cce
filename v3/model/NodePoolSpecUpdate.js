"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePoolSpecUpdate = void 0;
class NodePoolSpecUpdate {
    constructor(nodeTemplate, initialNodeCount, autoscaling) {
        this['nodeTemplate'] = nodeTemplate;
        this['initialNodeCount'] = initialNodeCount;
        this['autoscaling'] = autoscaling;
    }
    withNodeTemplate(nodeTemplate) {
        this['nodeTemplate'] = nodeTemplate;
        return this;
    }
    withInitialNodeCount(initialNodeCount) {
        this['initialNodeCount'] = initialNodeCount;
        return this;
    }
    withAutoscaling(autoscaling) {
        this['autoscaling'] = autoscaling;
        return this;
    }
}
exports.NodePoolSpecUpdate = NodePoolSpecUpdate;
//# sourceMappingURL=NodePoolSpecUpdate.js.map