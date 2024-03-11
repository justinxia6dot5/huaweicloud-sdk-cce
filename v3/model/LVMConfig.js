"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LVMConfig = void 0;
class LVMConfig {
    constructor(lvType) {
        this['lvType'] = lvType;
    }
    withLvType(lvType) {
        this['lvType'] = lvType;
        return this;
    }
    withPath(path) {
        this['path'] = path;
        return this;
    }
}
exports.LVMConfig = LVMConfig;
//# sourceMappingURL=LVMConfig.js.map