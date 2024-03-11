"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterEndpoints = void 0;
class ClusterEndpoints {
    constructor() {
    }
    withUrl(url) {
        this['url'] = url;
        return this;
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
}
exports.ClusterEndpoints = ClusterEndpoints;
//# sourceMappingURL=ClusterEndpoints.js.map