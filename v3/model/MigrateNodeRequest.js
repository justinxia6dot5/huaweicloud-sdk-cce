"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateNodeRequest = void 0;
class MigrateNodeRequest {
    constructor(clusterId, targetClusterId, contentType) {
        this['cluster_id'] = clusterId;
        this['target_cluster_id'] = targetClusterId;
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
    withTargetClusterId(targetClusterId) {
        this['target_cluster_id'] = targetClusterId;
        return this;
    }
    set targetClusterId(targetClusterId) {
        this['target_cluster_id'] = targetClusterId;
    }
    get targetClusterId() {
        return this['target_cluster_id'];
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
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.MigrateNodeRequest = MigrateNodeRequest;
//# sourceMappingURL=MigrateNodeRequest.js.map