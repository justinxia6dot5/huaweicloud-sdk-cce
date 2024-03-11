"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPreCheckTasksRequest = void 0;
class ListPreCheckTasksRequest {
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
exports.ListPreCheckTasksRequest = ListPreCheckTasksRequest;
//# sourceMappingURL=ListPreCheckTasksRequest.js.map