"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostNetwork = void 0;
class HostNetwork {
    constructor(vpc, subnet) {
        this['vpc'] = vpc;
        this['subnet'] = subnet;
    }
    withVpc(vpc) {
        this['vpc'] = vpc;
        return this;
    }
    withSubnet(subnet) {
        this['subnet'] = subnet;
        return this;
    }
    withSecurityGroup(securityGroup) {
        this['SecurityGroup'] = securityGroup;
        return this;
    }
    set securityGroup(securityGroup) {
        this['SecurityGroup'] = securityGroup;
    }
    get securityGroup() {
        return this['SecurityGroup'];
    }
}
exports.HostNetwork = HostNetwork;
//# sourceMappingURL=HostNetwork.js.map