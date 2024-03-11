"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddonInstance = void 0;
class AddonInstance {
    constructor(kind, apiVersion, spec, status) {
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['spec'] = spec;
        this['status'] = status;
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
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
exports.AddonInstance = AddonInstance;
//# sourceMappingURL=AddonInstance.js.map