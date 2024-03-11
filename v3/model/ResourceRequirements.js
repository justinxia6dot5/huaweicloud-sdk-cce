"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRequirements = void 0;
class ResourceRequirements {
    constructor() {
    }
    withLimits(limits) {
        this['limits'] = limits;
        return this;
    }
    withRequests(requests) {
        this['requests'] = requests;
        return this;
    }
}
exports.ResourceRequirements = ResourceRequirements;
//# sourceMappingURL=ResourceRequirements.js.map