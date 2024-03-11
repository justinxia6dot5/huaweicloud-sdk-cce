"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecheckSpec = void 0;
class PrecheckSpec {
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
    withSkippedCheckItemList(skippedCheckItemList) {
        this['skippedCheckItemList'] = skippedCheckItemList;
        return this;
    }
}
exports.PrecheckSpec = PrecheckSpec;
//# sourceMappingURL=PrecheckSpec.js.map