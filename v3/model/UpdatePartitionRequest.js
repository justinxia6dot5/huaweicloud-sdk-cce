"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePartitionRequest = void 0;
class UpdatePartitionRequest {
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
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.UpdatePartitionRequest = UpdatePartitionRequest;
//# sourceMappingURL=UpdatePartitionRequest.js.map