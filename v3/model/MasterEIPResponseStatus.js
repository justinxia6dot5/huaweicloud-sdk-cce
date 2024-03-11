"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterEIPResponseStatus = void 0;
class MasterEIPResponseStatus {
    constructor() {
    }
    withPrivateEndpoint(privateEndpoint) {
        this['privateEndpoint'] = privateEndpoint;
        return this;
    }
    withPublicEndpoint(publicEndpoint) {
        this['publicEndpoint'] = publicEndpoint;
        return this;
    }
}
exports.MasterEIPResponseStatus = MasterEIPResponseStatus;
//# sourceMappingURL=MasterEIPResponseStatus.js.map