"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotTask = void 0;
class SnapshotTask {
    constructor() {
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
exports.SnapshotTask = SnapshotTask;
//# sourceMappingURL=SnapshotTask.js.map