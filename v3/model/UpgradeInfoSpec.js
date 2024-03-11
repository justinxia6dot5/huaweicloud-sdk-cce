"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeInfoSpec = void 0;
class UpgradeInfoSpec {
    constructor() {
    }
    withLastUpgradeInfo(lastUpgradeInfo) {
        this['lastUpgradeInfo'] = lastUpgradeInfo;
        return this;
    }
    withVersionInfo(versionInfo) {
        this['versionInfo'] = versionInfo;
        return this;
    }
    withUpgradeFeatureGates(upgradeFeatureGates) {
        this['upgradeFeatureGates'] = upgradeFeatureGates;
        return this;
    }
}
exports.UpgradeInfoSpec = UpgradeInfoSpec;
//# sourceMappingURL=UpgradeInfoSpec.js.map