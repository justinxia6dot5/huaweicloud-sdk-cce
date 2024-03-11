"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualSpace = void 0;
class VirtualSpace {
    constructor(name, size) {
        this['name'] = name;
        this['size'] = size;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withSize(size) {
        this['size'] = size;
        return this;
    }
    withLvmConfig(lvmConfig) {
        this['lvmConfig'] = lvmConfig;
        return this;
    }
    withRuntimeConfig(runtimeConfig) {
        this['runtimeConfig'] = runtimeConfig;
        return this;
    }
}
exports.VirtualSpace = VirtualSpace;
//# sourceMappingURL=VirtualSpace.js.map