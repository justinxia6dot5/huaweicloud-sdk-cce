"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeEIPSpec = void 0;
class NodeEIPSpec {
    constructor(iptype) {
        this['iptype'] = iptype;
    }
    withIptype(iptype) {
        this['iptype'] = iptype;
        return this;
    }
    withBandwidth(bandwidth) {
        this['bandwidth'] = bandwidth;
        return this;
    }
}
exports.NodeEIPSpec = NodeEIPSpec;
//# sourceMappingURL=NodeEIPSpec.js.map