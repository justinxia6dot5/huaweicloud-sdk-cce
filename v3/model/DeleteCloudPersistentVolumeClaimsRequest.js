"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCloudPersistentVolumeClaimsRequest = void 0;
class DeleteCloudPersistentVolumeClaimsRequest {
    constructor(name, namespace, contentType) {
        this['name'] = name;
        this['namespace'] = namespace;
        this['Content-Type'] = contentType;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withNamespace(namespace) {
        this['namespace'] = namespace;
        return this;
    }
    withDeleteVolume(deleteVolume) {
        this['deleteVolume'] = deleteVolume;
        return this;
    }
    withStorageType(storageType) {
        this['storageType'] = storageType;
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
}
exports.DeleteCloudPersistentVolumeClaimsRequest = DeleteCloudPersistentVolumeClaimsRequest;
//# sourceMappingURL=DeleteCloudPersistentVolumeClaimsRequest.js.map