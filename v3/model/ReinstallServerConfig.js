"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReinstallServerConfig = void 0;
class ReinstallServerConfig {
    constructor() {
    }
    withUserTags(userTags) {
        this['userTags'] = userTags;
        return this;
    }
    withRootVolume(rootVolume) {
        this['rootVolume'] = rootVolume;
        return this;
    }
}
exports.ReinstallServerConfig = ReinstallServerConfig;
//# sourceMappingURL=ReinstallServerConfig.js.map