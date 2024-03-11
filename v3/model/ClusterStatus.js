"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterStatus = void 0;
class ClusterStatus {
    constructor() {
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withJobID(jobID) {
        this['jobID'] = jobID;
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
    withEndpoints(endpoints) {
        this['endpoints'] = endpoints;
        return this;
    }
    withIsLocked(isLocked) {
        this['isLocked'] = isLocked;
        return this;
    }
    withLockScene(lockScene) {
        this['lockScene'] = lockScene;
        return this;
    }
    withLockSource(lockSource) {
        this['lockSource'] = lockSource;
        return this;
    }
    withLockSourceId(lockSourceId) {
        this['lockSourceId'] = lockSourceId;
        return this;
    }
    withDeleteOption(deleteOption) {
        this['deleteOption'] = deleteOption;
        return this;
    }
    withDeleteStatus(deleteStatus) {
        this['deleteStatus'] = deleteStatus;
        return this;
    }
}
exports.ClusterStatus = ClusterStatus;
//# sourceMappingURL=ClusterStatus.js.map