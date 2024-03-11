"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAddonInstanceRequest = void 0;
class DeleteAddonInstanceRequest {
    constructor(contentType, id) {
        this['Content-Type'] = contentType;
        this['id'] = id;
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
    withId(id) {
        this['id'] = id;
        return this;
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
exports.DeleteAddonInstanceRequest = DeleteAddonInstanceRequest;
//# sourceMappingURL=DeleteAddonInstanceRequest.js.map