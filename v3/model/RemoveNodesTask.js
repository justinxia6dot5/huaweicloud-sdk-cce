"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveNodesTask = void 0;
class RemoveNodesTask {
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
exports.RemoveNodesTask = RemoveNodesTask;
//# sourceMappingURL=RemoveNodesTask.js.map