"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNodePoolRequest = void 0;
class DeleteNodePoolRequest {
    constructor(clusterId, nodepoolId, contentType) {
        this['cluster_id'] = clusterId;
        this['nodepool_id'] = nodepoolId;
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
    withNodepoolId(nodepoolId) {
        this['nodepool_id'] = nodepoolId;
        return this;
    }
    set nodepoolId(nodepoolId) {
        this['nodepool_id'] = nodepoolId;
    }
    get nodepoolId() {
        return this['nodepool_id'];
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
}
exports.DeleteNodePoolRequest = DeleteNodePoolRequest;
//# sourceMappingURL=DeleteNodePoolRequest.js.map