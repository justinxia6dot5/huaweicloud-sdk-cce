"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCloudPersistentVolumeClaimsRequest = void 0;
class CreateCloudPersistentVolumeClaimsRequest {
    constructor(namespace, contentType) {
        this['namespace'] = namespace;
        this['Content-Type'] = contentType;
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
    withXClusterID(xClusterID) {
        this['X-Cluster-ID'] = xClusterID;
        return this;
    }
    set xClusterID(xClusterID) {
        this['X-Cluster-ID'] = xClusterID;
    }
    get xClusterID() {
        return this['X-Cluster-ID'];
    }
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.CreateCloudPersistentVolumeClaimsRequest = CreateCloudPersistentVolumeClaimsRequest;
//# sourceMappingURL=CreateCloudPersistentVolumeClaimsRequest.js.map