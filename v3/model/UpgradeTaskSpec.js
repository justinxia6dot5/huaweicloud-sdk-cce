"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeTaskSpec = void 0;
class UpgradeTaskSpec {
    constructor() {
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
    withTargetVersion(targetVersion) {
        this['targetVersion'] = targetVersion;
        return this;
    }
    withItems(items) {
        this['items'] = items;
        return this;
    }
}
exports.UpgradeTaskSpec = UpgradeTaskSpec;
//# sourceMappingURL=UpgradeTaskSpec.js.map