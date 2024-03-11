"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReinstallVolumeConfig = void 0;
class ReinstallVolumeConfig {
    constructor() {
    }
    withLvmConfig(lvmConfig) {
        this['lvmConfig'] = lvmConfig;
        return this;
    }
    withStorage(storage) {
        this['storage'] = storage;
        return this;
    }
}
exports.ReinstallVolumeConfig = ReinstallVolumeConfig;
//# sourceMappingURL=ReinstallVolumeConfig.js.map