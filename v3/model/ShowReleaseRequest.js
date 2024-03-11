"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowReleaseRequest = void 0;
class ShowReleaseRequest {
    constructor(name, namespace, contentType, clusterId) {
        this['name'] = name;
        this['namespace'] = namespace;
        this['Content-Type'] = contentType;
        this['cluster_id'] = clusterId;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withNamespace(namespace) {
        this['namespace'] = namespace;
        return this;
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
exports.ShowReleaseRequest = ShowReleaseRequest;
//# sourceMappingURL=ShowReleaseRequest.js.map