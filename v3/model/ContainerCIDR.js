"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerCIDR = void 0;
class ContainerCIDR {
    constructor(cidr) {
        this['cidr'] = cidr;
    }
    withCidr(cidr) {
        this['cidr'] = cidr;
        return this;
    }
}
exports.ContainerCIDR = ContainerCIDR;
//# sourceMappingURL=ContainerCIDR.js.map