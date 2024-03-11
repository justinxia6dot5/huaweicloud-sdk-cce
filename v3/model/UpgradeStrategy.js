"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeStrategy = void 0;
class UpgradeStrategy {
    constructor(type) {
        this['type'] = type;
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
    withInPlaceRollingUpdate(inPlaceRollingUpdate) {
        this['inPlaceRollingUpdate'] = inPlaceRollingUpdate;
        return this;
    }
}
exports.UpgradeStrategy = UpgradeStrategy;
//# sourceMappingURL=UpgradeStrategy.js.map