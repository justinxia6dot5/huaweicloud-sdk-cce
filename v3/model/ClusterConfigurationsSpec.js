"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterConfigurationsSpec = void 0;
class ClusterConfigurationsSpec {
    constructor(packages) {
        this['packages'] = packages;
    }
    withPackages(packages) {
        this['packages'] = packages;
        return this;
    }
}
exports.ClusterConfigurationsSpec = ClusterConfigurationsSpec;
//# sourceMappingURL=ClusterConfigurationsSpec.js.map