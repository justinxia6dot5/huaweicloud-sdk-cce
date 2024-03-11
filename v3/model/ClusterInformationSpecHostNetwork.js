"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterInformationSpecHostNetwork = void 0;
class ClusterInformationSpecHostNetwork {
    constructor() {
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
exports.ClusterInformationSpecHostNetwork = ClusterInformationSpecHostNetwork;
//# sourceMappingURL=ClusterInformationSpecHostNetwork.js.map