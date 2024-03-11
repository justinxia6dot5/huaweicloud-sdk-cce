"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterCheckStatus = void 0;
class ClusterCheckStatus {
    constructor() {
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withItemsStatus(itemsStatus) {
        this['itemsStatus'] = itemsStatus;
        return this;
    }
}
exports.ClusterCheckStatus = ClusterCheckStatus;
//# sourceMappingURL=ClusterCheckStatus.js.map