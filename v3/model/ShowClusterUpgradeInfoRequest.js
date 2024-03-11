"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowClusterUpgradeInfoRequest = void 0;
class ShowClusterUpgradeInfoRequest {
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
exports.ShowClusterUpgradeInfoRequest = ShowClusterUpgradeInfoRequest;
//# sourceMappingURL=ShowClusterUpgradeInfoRequest.js.map