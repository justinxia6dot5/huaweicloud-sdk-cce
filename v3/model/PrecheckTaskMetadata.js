"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecheckTaskMetadata = void 0;
class PrecheckTaskMetadata {
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
exports.PrecheckTaskMetadata = PrecheckTaskMetadata;
//# sourceMappingURL=PrecheckTaskMetadata.js.map