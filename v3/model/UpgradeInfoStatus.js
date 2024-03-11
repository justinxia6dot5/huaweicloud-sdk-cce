"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeInfoStatus = void 0;
class UpgradeInfoStatus {
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
exports.UpgradeInfoStatus = UpgradeInfoStatus;
//# sourceMappingURL=UpgradeInfoStatus.js.map