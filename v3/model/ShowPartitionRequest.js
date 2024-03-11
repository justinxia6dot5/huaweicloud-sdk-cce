"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowPartitionRequest = void 0;
class ShowPartitionRequest {
    constructor(clusterId, partitionName) {
        this['cluster_id'] = clusterId;
        this['partition_name'] = partitionName;
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
    withPartitionName(partitionName) {
        this['partition_name'] = partitionName;
        return this;
    }
    set partitionName(partitionName) {
        this['partition_name'] = partitionName;
    }
    get partitionName() {
        return this['partition_name'];
    }
}
exports.ShowPartitionRequest = ShowPartitionRequest;
//# sourceMappingURL=ShowPartitionRequest.js.map