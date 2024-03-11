"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportVersions = void 0;
class SupportVersions {
    constructor(clusterType, clusterVersion) {
        this['clusterType'] = clusterType;
        this['clusterVersion'] = clusterVersion;
    }
    withClusterType(clusterType) {
        this['clusterType'] = clusterType;
        return this;
    }
    withClusterVersion(clusterVersion) {
        this['clusterVersion'] = clusterVersion;
        return this;
    }
}
exports.SupportVersions = SupportVersions;
//# sourceMappingURL=SupportVersions.js.map