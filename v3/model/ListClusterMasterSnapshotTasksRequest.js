"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClusterMasterSnapshotTasksRequest = void 0;
class ListClusterMasterSnapshotTasksRequest {
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
exports.ListClusterMasterSnapshotTasksRequest = ListClusterMasterSnapshotTasksRequest;
//# sourceMappingURL=ListClusterMasterSnapshotTasksRequest.js.map