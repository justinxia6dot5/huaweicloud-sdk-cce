"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNode = void 0;
class AddNode {
    constructor(serverID, spec) {
        this['serverID'] = serverID;
        this['spec'] = spec;
    }
    withServerID(serverID) {
        this['serverID'] = serverID;
        return this;
    }
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
}
exports.AddNode = AddNode;
//# sourceMappingURL=AddNode.js.map