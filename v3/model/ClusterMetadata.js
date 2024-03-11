"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterMetadata = void 0;
class ClusterMetadata {
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
    withAlias(alias) {
        this['alias'] = alias;
        return this;
    }
    withAnnotations(annotations) {
        this['annotations'] = annotations;
        return this;
    }
    withLabels(labels) {
        this['labels'] = labels;
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
exports.ClusterMetadata = ClusterMetadata;
//# sourceMappingURL=ClusterMetadata.js.map