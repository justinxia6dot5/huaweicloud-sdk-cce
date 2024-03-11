"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUpgradeClusterTasksRequest = void 0;
class ListUpgradeClusterTasksRequest {
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
exports.ListUpgradeClusterTasksRequest = ListUpgradeClusterTasksRequest;
//# sourceMappingURL=ListUpgradeClusterTasksRequest.js.map