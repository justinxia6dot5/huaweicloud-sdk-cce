"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePriority = void 0;
class NodePriority {
    constructor(nodeSelector, priority) {
        this['nodeSelector'] = nodeSelector;
        this['priority'] = priority;
    }
    withNodeSelector(nodeSelector) {
        this['nodeSelector'] = nodeSelector;
        return this;
    }
    withPriority(priority) {
        this['priority'] = priority;
        return this;
    }
}
exports.NodePriority = NodePriority;
//# sourceMappingURL=NodePriority.js.map