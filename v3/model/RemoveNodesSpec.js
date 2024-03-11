"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveNodesSpec = void 0;
class RemoveNodesSpec {
    constructor(login, nodes) {
        this['login'] = login;
        this['nodes'] = nodes;
    }
    withLogin(login) {
        this['login'] = login;
        return this;
    }
    withNodes(nodes) {
        this['nodes'] = nodes;
        return this;
    }
}
exports.RemoveNodesSpec = RemoveNodesSpec;
//# sourceMappingURL=RemoveNodesSpec.js.map