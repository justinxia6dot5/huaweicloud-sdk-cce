"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePool = void 0;
class NodePool {
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
    withStatus(status) {
        this['status'] = status;
        return this;
    }
}
exports.NodePool = NodePool;
//# sourceMappingURL=NodePool.js.map