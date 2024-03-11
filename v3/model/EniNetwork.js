"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EniNetwork = void 0;
class EniNetwork {
    constructor(eniSubnetId, eniSubnetCIDR, subnets) {
        this['eniSubnetId'] = eniSubnetId;
        this['eniSubnetCIDR'] = eniSubnetCIDR;
        this['subnets'] = subnets;
    }
    withEniSubnetId(eniSubnetId) {
        this['eniSubnetId'] = eniSubnetId;
        return this;
    }
    withEniSubnetCIDR(eniSubnetCIDR) {
        this['eniSubnetCIDR'] = eniSubnetCIDR;
        return this;
    }
    withSubnets(subnets) {
        this['subnets'] = subnets;
        return this;
    }
}
exports.EniNetwork = EniNetwork;
//# sourceMappingURL=EniNetwork.js.map