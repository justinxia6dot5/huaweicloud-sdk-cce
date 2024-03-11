"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClusterMasterSnapshotRequest = void 0;
class CreateClusterMasterSnapshotRequest {
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
exports.CreateClusterMasterSnapshotRequest = CreateClusterMasterSnapshotRequest;
//# sourceMappingURL=CreateClusterMasterSnapshotRequest.js.map