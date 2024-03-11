"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeSpec = void 0;
class UpgradeSpec {
    constructor() {
    }
    withClusterUpgradeAction(clusterUpgradeAction) {
        this['clusterUpgradeAction'] = clusterUpgradeAction;
        return this;
    }
}
exports.UpgradeSpec = UpgradeSpec;
//# sourceMappingURL=UpgradeSpec.js.map