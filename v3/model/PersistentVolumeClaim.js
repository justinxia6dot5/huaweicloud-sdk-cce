"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentVolumeClaim = void 0;
class PersistentVolumeClaim {
    constructor(apiVersion, kind, metadata, spec) {
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withMetadata(metadata) {
        this['metadata'] = metadata;
        return this;
    }
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
}
exports.PersistentVolumeClaim = PersistentVolumeClaim;
//# sourceMappingURL=PersistentVolumeClaim.js.map