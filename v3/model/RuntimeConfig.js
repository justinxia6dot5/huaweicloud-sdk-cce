"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeConfig = void 0;
class RuntimeConfig {
    constructor(lvType) {
        this['lvType'] = lvType;
    }
    withLvType(lvType) {
        this['lvType'] = lvType;
        return this;
    }
}
exports.RuntimeConfig = RuntimeConfig;
//# sourceMappingURL=RuntimeConfig.js.map