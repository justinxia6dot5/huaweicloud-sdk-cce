"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotStatus = void 0;
class SnapshotStatus {
    constructor() {
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withProgress(progress) {
        this['progress'] = progress;
        return this;
    }
    withCompletionTime(completionTime) {
        this['completionTime'] = completionTime;
        return this;
    }
}
exports.SnapshotStatus = SnapshotStatus;
//# sourceMappingURL=SnapshotStatus.js.map