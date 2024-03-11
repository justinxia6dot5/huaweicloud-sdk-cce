"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PauseUpgradeClusterTaskRequest = void 0;
class PauseUpgradeClusterTaskRequest {
    constructor(clusterId) {
        this['cluster_id'] = clusterId;
    }
    withClusterId(clusterId) {
        this['cluster_id'] = clusterId;
        return this;
    }
    set clusterId(clusterId) {
        this['cluster_id'] = clusterId;
    }
    get clusterId() {
        return this['cluster_id'];
    }
}
exports.PauseUpgradeClusterTaskRequest = PauseUpgradeClusterTaskRequest;
//# sourceMappingURL=PauseUpgradeClusterTaskRequest.js.map