"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMetadata = void 0;
class NodeMetadata {
    constructor() {
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withUid(uid) {
        this['uid'] = uid;
        return this;
    }
    withLabels(labels) {
        this['labels'] = labels;
        return this;
    }
    withAnnotations(annotations) {
        this['annotations'] = annotations;
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
exports.NodeMetadata = NodeMetadata;
//# sourceMappingURL=NodeMetadata.js.map