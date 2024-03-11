"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContinueUpgradeClusterTaskRequest = void 0;
class ContinueUpgradeClusterTaskRequest {
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
exports.ContinueUpgradeClusterTaskRequest = ContinueUpgradeClusterTaskRequest;
//# sourceMappingURL=ContinueUpgradeClusterTaskRequest.js.map