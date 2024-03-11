"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryUpgradeClusterTaskRequest = void 0;
class RetryUpgradeClusterTaskRequest {
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
exports.RetryUpgradeClusterTaskRequest = RetryUpgradeClusterTaskRequest;
//# sourceMappingURL=RetryUpgradeClusterTaskRequest.js.map