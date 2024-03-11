"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReinstallRuntimeConfig = void 0;
class ReinstallRuntimeConfig {
    constructor() {
    }
    withDockerBaseSize(dockerBaseSize) {
        this['dockerBaseSize'] = dockerBaseSize;
        return this;
    }
    withRuntime(runtime) {
        this['runtime'] = runtime;
        return this;
    }
}
exports.ReinstallRuntimeConfig = ReinstallRuntimeConfig;
//# sourceMappingURL=ReinstallRuntimeConfig.js.map