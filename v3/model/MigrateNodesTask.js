"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateNodesTask = void 0;
class MigrateNodesTask {
    constructor(spec) {
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
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
}
exports.MigrateNodesTask = MigrateNodesTask;
//# sourceMappingURL=MigrateNodesTask.js.map