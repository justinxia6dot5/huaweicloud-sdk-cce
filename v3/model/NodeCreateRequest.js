"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCreateRequest = void 0;
class NodeCreateRequest {
    constructor(kind, apiVersion, spec) {
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
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
exports.NodeCreateRequest = NodeCreateRequest;
//# sourceMappingURL=NodeCreateRequest.js.map