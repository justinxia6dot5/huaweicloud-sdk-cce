"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NicSpec = void 0;
class NicSpec {
    constructor() {
    }
    withSubnetId(subnetId) {
        this['subnetId'] = subnetId;
        return this;
    }
    withFixedIps(fixedIps) {
        this['fixedIps'] = fixedIps;
        return this;
    }
    withIpBlock(ipBlock) {
        this['ipBlock'] = ipBlock;
        return this;
    }
}
exports.NicSpec = NicSpec;
//# sourceMappingURL=NicSpec.js.map