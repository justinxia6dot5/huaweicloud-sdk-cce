"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostcheckSpec = void 0;
class PostcheckSpec {
    constructor() {
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
exports.PostcheckSpec = PostcheckSpec;
//# sourceMappingURL=PostcheckSpec.js.map