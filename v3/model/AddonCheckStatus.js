"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddonCheckStatus = void 0;
class AddonCheckStatus {
    constructor() {
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withItemsStatus(itemsStatus) {
        this['itemsStatus'] = itemsStatus;
        return this;
    }
}
exports.AddonCheckStatus = AddonCheckStatus;
//# sourceMappingURL=AddonCheckStatus.js.map