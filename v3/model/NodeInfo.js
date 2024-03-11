"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeInfo = void 0;
class NodeInfo {
    constructor() {
    }
    withUid(uid) {
        this['uid'] = uid;
        return this;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
    withNodeType(nodeType) {
        this['nodeType'] = nodeType;
        return this;
    }
}
exports.NodeInfo = NodeInfo;
//# sourceMappingURL=NodeInfo.js.map