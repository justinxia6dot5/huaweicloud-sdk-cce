"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartitionMetadata = void 0;
class PartitionMetadata {
    constructor() {
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withCreationTimestamp(creationTimestamp) {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
}
exports.PartitionMetadata = PartitionMetadata;
//# sourceMappingURL=PartitionMetadata.js.map