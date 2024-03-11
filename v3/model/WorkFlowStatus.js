"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkFlowStatus = void 0;
class WorkFlowStatus {
    constructor() {
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withPointStatuses(pointStatuses) {
        this['pointStatuses'] = pointStatuses;
        return this;
    }
    withLineStatuses(lineStatuses) {
        this['lineStatuses'] = lineStatuses;
        return this;
    }
}
exports.WorkFlowStatus = WorkFlowStatus;
//# sourceMappingURL=WorkFlowStatus.js.map