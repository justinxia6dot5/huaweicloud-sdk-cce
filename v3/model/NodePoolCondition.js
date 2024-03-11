"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePoolCondition = void 0;
class NodePoolCondition {
    constructor() {
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
    withLastProbeTime(lastProbeTime) {
        this['lastProbeTime'] = lastProbeTime;
        return this;
    }
    withLastTransitTime(lastTransitTime) {
        this['lastTransitTime'] = lastTransitTime;
        return this;
    }
    withReason(reason) {
        this['reason'] = reason;
        return this;
    }
    withMessage(message) {
        this['message'] = message;
        return this;
    }
}
exports.NodePoolCondition = NodePoolCondition;
//# sourceMappingURL=NodePoolCondition.js.map