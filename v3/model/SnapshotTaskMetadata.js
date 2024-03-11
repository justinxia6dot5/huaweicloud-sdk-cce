"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotTaskMetadata = void 0;
class SnapshotTaskMetadata {
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
exports.SnapshotTaskMetadata = SnapshotTaskMetadata;
//# sourceMappingURL=SnapshotTaskMetadata.js.map