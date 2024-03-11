"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetNodeList = void 0;
class ResetNodeList {
    constructor(apiVersion, kind, nodeList) {
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['nodeList'] = nodeList;
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withNodeList(nodeList) {
        this['nodeList'] = nodeList;
        return this;
    }
}
exports.ResetNodeList = ResetNodeList;
//# sourceMappingURL=ResetNodeList.js.map