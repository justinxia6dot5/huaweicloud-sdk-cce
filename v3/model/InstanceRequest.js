"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceRequest = void 0;
class InstanceRequest {
    constructor(kind, apiVersion, metadata, spec) {
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['metadata'] = metadata;
        this['spec'] = spec;
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
}
exports.InstanceRequest = InstanceRequest;
//# sourceMappingURL=InstanceRequest.js.map