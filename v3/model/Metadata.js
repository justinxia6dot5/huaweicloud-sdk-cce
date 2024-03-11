"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
class Metadata {
    constructor() {
    }
    withUid(uid) {
        this['uid'] = uid;
        return this;
    }
    withName(name) {
        this['name'] = name;
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
    withUpdateTimestamp(updateTimestamp) {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    withCreationTimestamp(creationTimestamp) {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
}
exports.Metadata = Metadata;
//# sourceMappingURL=Metadata.js.map