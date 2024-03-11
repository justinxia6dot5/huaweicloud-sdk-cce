"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterUpgradeResponseAction = void 0;
class ClusterUpgradeResponseAction {
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
    withTargetPlatformVersion(targetPlatformVersion) {
        this['targetPlatformVersion'] = targetPlatformVersion;
        return this;
    }
    withStrategy(strategy) {
        this['strategy'] = strategy;
        return this;
    }
    withConfig(config) {
        this['config'] = config;
        return this;
    }
}
exports.ClusterUpgradeResponseAction = ClusterUpgradeResponseAction;
//# sourceMappingURL=ClusterUpgradeResponseAction.js.map