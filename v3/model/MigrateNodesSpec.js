"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateNodesSpec = void 0;
class MigrateNodesSpec {
    constructor(os, login, nodes) {
        this['os'] = os;
        this['login'] = login;
        this['nodes'] = nodes;
    }
    withOs(os) {
        this['os'] = os;
        return this;
    }
    withExtendParam(extendParam) {
        this['extendParam'] = extendParam;
        return this;
    }
    withLogin(login) {
        this['login'] = login;
        return this;
    }
    withRuntime(runtime) {
        this['runtime'] = runtime;
        return this;
    }
    withNodes(nodes) {
        this['nodes'] = nodes;
        return this;
    }
}
exports.MigrateNodesSpec = MigrateNodesSpec;
//# sourceMappingURL=MigrateNodesSpec.js.map