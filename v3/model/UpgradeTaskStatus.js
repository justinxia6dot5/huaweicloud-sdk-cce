"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeTaskStatus = void 0;
class UpgradeTaskStatus {
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
exports.UpgradeTaskStatus = UpgradeTaskStatus;
//# sourceMappingURL=UpgradeTaskStatus.js.map