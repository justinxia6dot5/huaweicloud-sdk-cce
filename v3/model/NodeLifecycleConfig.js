"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeLifecycleConfig = void 0;
class NodeLifecycleConfig {
    constructor() {
    }
    withPreInstall(preInstall) {
        this['preInstall'] = preInstall;
        return this;
    }
    withPostInstall(postInstall) {
        this['postInstall'] = postInstall;
        return this;
    }
}
exports.NodeLifecycleConfig = NodeLifecycleConfig;
//# sourceMappingURL=NodeLifecycleConfig.js.map