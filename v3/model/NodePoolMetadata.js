"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePoolMetadata = void 0;
class NodePoolMetadata {
    constructor(name) {
        this['name'] = name;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withUid(uid) {
        this['uid'] = uid;
        return this;
    }
    withAnnotations(annotations) {
        this['annotations'] = annotations;
        return this;
    }
    withUpdateTimestamp(updateTimestamp) {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    withCreationTimestamp(creationTimestamp) {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
}
exports.NodePoolMetadata = NodePoolMetadata;
//# sourceMappingURL=NodePoolMetadata.js.map