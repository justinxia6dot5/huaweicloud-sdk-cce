"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerNetworkModeEnum = exports.ContainerNetwork = void 0;
class ContainerNetwork {
    constructor(mode) {
        this['mode'] = mode;
    }
    withMode(mode) {
        this['mode'] = mode;
        return this;
    }
    withCidr(cidr) {
        this['cidr'] = cidr;
        return this;
    }
    withCidrs(cidrs) {
        this['cidrs'] = cidrs;
        return this;
    }
}
exports.ContainerNetwork = ContainerNetwork;
/**
    * @export
    * @enum {string}
    */
var ContainerNetworkModeEnum;
(function (ContainerNetworkModeEnum) {
    ContainerNetworkModeEnum["OVERLAY_L2"] = "overlay_l2";
    ContainerNetworkModeEnum["VPC_ROUTER"] = "vpc-router";
    ContainerNetworkModeEnum["ENI"] = "eni";
})(ContainerNetworkModeEnum = exports.ContainerNetworkModeEnum || (exports.ContainerNetworkModeEnum = {}));
//# sourceMappingURL=ContainerNetwork.js.map