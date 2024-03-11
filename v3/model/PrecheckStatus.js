"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecheckStatus = void 0;
class PrecheckStatus {
    constructor() {
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withExpireTimeStamp(expireTimeStamp) {
        this['expireTimeStamp'] = expireTimeStamp;
        return this;
    }
    withMessage(message) {
        this['message'] = message;
        return this;
    }
    withClusterCheckStatus(clusterCheckStatus) {
        this['clusterCheckStatus'] = clusterCheckStatus;
        return this;
    }
    withAddonCheckStatus(addonCheckStatus) {
        this['addonCheckStatus'] = addonCheckStatus;
        return this;
    }
    withNodeCheckStatus(nodeCheckStatus) {
        this['nodeCheckStatus'] = nodeCheckStatus;
        return this;
    }
}
exports.PrecheckStatus = PrecheckStatus;
//# sourceMappingURL=PrecheckStatus.js.map