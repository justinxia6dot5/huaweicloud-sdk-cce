"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePublicIP = void 0;
class NodePublicIP {
    constructor() {
    }
    withIds(ids) {
        this['ids'] = ids;
        return this;
    }
    withCount(count) {
        this['count'] = count;
        return this;
    }
    withEip(eip) {
        this['eip'] = eip;
        return this;
    }
}
exports.NodePublicIP = NodePublicIP;
//# sourceMappingURL=NodePublicIP.js.map