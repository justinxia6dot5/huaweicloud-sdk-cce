"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNodeList = void 0;
class AddNodeList {
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
exports.AddNodeList = AddNodeList;
//# sourceMappingURL=AddNodeList.js.map