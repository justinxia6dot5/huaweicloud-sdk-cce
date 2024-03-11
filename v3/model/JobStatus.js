"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobStatus = void 0;
class JobStatus {
    constructor() {
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withReason(reason) {
        this['reason'] = reason;
        return this;
    }
}
exports.JobStatus = JobStatus;
//# sourceMappingURL=JobStatus.js.map