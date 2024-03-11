"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddonMetadata = void 0;
class AddonMetadata {
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
    withAlias(alias) {
        this['alias'] = alias;
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
exports.AddonMetadata = AddonMetadata;
//# sourceMappingURL=AddonMetadata.js.map