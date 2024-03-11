"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostCheckRequest = void 0;
class CreatePostCheckRequest {
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
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.CreatePostCheckRequest = CreatePostCheckRequest;
//# sourceMappingURL=CreatePostCheckRequest.js.map