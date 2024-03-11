"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNodePoolsRequest = void 0;
class ListNodePoolsRequest {
    constructor(clusterId, contentType) {
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
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
    withContentType(contentType) {
        this['Content-Type'] = contentType;
        return this;
    }
    set contentType(contentType) {
        this['Content-Type'] = contentType;
    }
    get contentType() {
        return this['Content-Type'];
    }
    withShowDefaultNodePool(showDefaultNodePool) {
        this['showDefaultNodePool'] = showDefaultNodePool;
        return this;
    }
}
exports.ListNodePoolsRequest = ListNodePoolsRequest;
//# sourceMappingURL=ListNodePoolsRequest.js.map