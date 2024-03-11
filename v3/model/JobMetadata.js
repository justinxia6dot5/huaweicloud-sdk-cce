"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobMetadata = void 0;
class JobMetadata {
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
exports.JobMetadata = JobMetadata;
//# sourceMappingURL=JobMetadata.js.map