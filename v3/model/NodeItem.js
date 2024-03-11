"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeItem = void 0;
class NodeItem {
    constructor(uid) {
        this['uid'] = uid;
    }
    withUid(uid) {
        this['uid'] = uid;
        return this;
    }
}
exports.NodeItem = NodeItem;
//# sourceMappingURL=NodeItem.js.map