"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecheckClusterTask = void 0;
class PrecheckClusterTask {
    constructor() {
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
exports.PrecheckClusterTask = PrecheckClusterTask;
//# sourceMappingURL=PrecheckClusterTask.js.map