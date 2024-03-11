"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterUpgradeAction = void 0;
class ClusterUpgradeAction {
    constructor(strategy, targetVersion) {
        this['strategy'] = strategy;
        this['targetVersion'] = targetVersion;
    }
    withAddons(addons) {
        this['addons'] = addons;
        return this;
    }
    withNodeOrder(nodeOrder) {
        this['nodeOrder'] = nodeOrder;
        return this;
    }
    withNodePoolOrder(nodePoolOrder) {
        this['nodePoolOrder'] = nodePoolOrder;
        return this;
    }
    withStrategy(strategy) {
        this['strategy'] = strategy;
        return this;
    }
    withTargetVersion(targetVersion) {
        this['targetVersion'] = targetVersion;
        return this;
    }
}
exports.ClusterUpgradeAction = ClusterUpgradeAction;
//# sourceMappingURL=ClusterUpgradeAction.js.map