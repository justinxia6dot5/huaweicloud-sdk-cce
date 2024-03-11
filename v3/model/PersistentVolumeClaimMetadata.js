"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentVolumeClaimMetadata = void 0;
class PersistentVolumeClaimMetadata {
    constructor(name) {
        this['name'] = name;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withLabels(labels) {
        this['labels'] = labels;
        return this;
    }
}
exports.PersistentVolumeClaimMetadata = PersistentVolumeClaimMetadata;
//# sourceMappingURL=PersistentVolumeClaimMetadata.js.map