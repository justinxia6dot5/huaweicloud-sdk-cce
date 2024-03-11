"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeTaskMetadata = void 0;
class UpgradeTaskMetadata {
    constructor() {
    }
    withUid(uid) {
        this['uid'] = uid;
        return this;
    }
    withCreationTimestamp(creationTimestamp) {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    withUpdateTimestamp(updateTimestamp) {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}
exports.UpgradeTaskMetadata = UpgradeTaskMetadata;
//# sourceMappingURL=UpgradeTaskMetadata.js.map