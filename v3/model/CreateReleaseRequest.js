"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReleaseRequest = void 0;
class CreateReleaseRequest {
    constructor(contentType, clusterId) {
        this['Content-Type'] = contentType;
        this['cluster_id'] = clusterId;
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
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.CreateReleaseRequest = CreateReleaseRequest;
//# sourceMappingURL=CreateReleaseRequest.js.map