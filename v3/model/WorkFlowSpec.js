"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkFlowSpec = void 0;
class WorkFlowSpec {
    constructor(targetVersion) {
        this['targetVersion'] = targetVersion;
    }
    withClusterID(clusterID) {
        this['clusterID'] = clusterID;
        return this;
    }
    withClusterVersion(clusterVersion) {
        this['clusterVersion'] = clusterVersion;
        return this;
    }
    withTargetVersion(targetVersion) {
        this['targetVersion'] = targetVersion;
        return this;
    }
}
exports.WorkFlowSpec = WorkFlowSpec;
//# sourceMappingURL=WorkFlowSpec.js.map