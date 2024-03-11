"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReinstallK8sOptionsConfig = void 0;
class ReinstallK8sOptionsConfig {
    constructor() {
    }
    withLabels(labels) {
        this['labels'] = labels;
        return this;
    }
    withTaints(taints) {
        this['taints'] = taints;
        return this;
    }
    withMaxPods(maxPods) {
        this['maxPods'] = maxPods;
        return this;
    }
    withNicMultiqueue(nicMultiqueue) {
        this['nicMultiqueue'] = nicMultiqueue;
        return this;
    }
    withNicThreshold(nicThreshold) {
        this['nicThreshold'] = nicThreshold;
        return this;
    }
}
exports.ReinstallK8sOptionsConfig = ReinstallK8sOptionsConfig;
//# sourceMappingURL=ReinstallK8sOptionsConfig.js.map