"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volume = void 0;
class Volume {
    constructor(size, volumetype) {
        this['size'] = size;
        this['volumetype'] = volumetype;
    }
    withSize(size) {
        this['size'] = size;
        return this;
    }
    withVolumetype(volumetype) {
        this['volumetype'] = volumetype;
        return this;
    }
    withExtendParam(extendParam) {
        this['extendParam'] = extendParam;
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
    withClusterType(clusterType) {
        this['cluster_type'] = clusterType;
        return this;
    }
    set clusterType(clusterType) {
        this['cluster_type'] = clusterType;
    }
    get clusterType() {
        return this['cluster_type'];
    }
    withHwPassthrough(hwPassthrough) {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    set hwPassthrough(hwPassthrough) {
        this['hw:passthrough'] = hwPassthrough;
    }
    get hwPassthrough() {
        return this['hw:passthrough'];
    }
    withMetadata(metadata) {
        this['metadata'] = metadata;
        return this;
    }
}
exports.Volume = Volume;
//# sourceMappingURL=Volume.js.map