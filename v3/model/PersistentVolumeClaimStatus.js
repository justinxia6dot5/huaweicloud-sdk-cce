"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentVolumeClaimStatus = void 0;
class PersistentVolumeClaimStatus {
    constructor() {
    }
    withAccessModes(accessModes) {
        this['accessModes'] = accessModes;
        return this;
    }
    withCapacity(capacity) {
        this['capacity'] = capacity;
        return this;
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
}
exports.PersistentVolumeClaimStatus = PersistentVolumeClaimStatus;
//# sourceMappingURL=PersistentVolumeClaimStatus.js.map