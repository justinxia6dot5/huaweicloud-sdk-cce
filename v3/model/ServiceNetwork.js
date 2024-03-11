"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNetwork = void 0;
class ServiceNetwork {
    constructor() {
    }
    withIPv4CIDR(iPv4CIDR) {
        this['IPv4CIDR'] = iPv4CIDR;
        return this;
    }
    set iPv4CIDR(iPv4CIDR) {
        this['IPv4CIDR'] = iPv4CIDR;
    }
    get iPv4CIDR() {
        return this['IPv4CIDR'];
    }
}
exports.ServiceNetwork = ServiceNetwork;
//# sourceMappingURL=ServiceNetwork.js.map