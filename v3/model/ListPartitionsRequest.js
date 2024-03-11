"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPartitionsRequest = void 0;
class ListPartitionsRequest {
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
exports.ListPartitionsRequest = ListPartitionsRequest;
//# sourceMappingURL=ListPartitionsRequest.js.map