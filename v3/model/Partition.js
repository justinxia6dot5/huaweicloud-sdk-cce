"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partition = void 0;
class Partition {
    constructor() {
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withMetadata(metadata) {
        this['metadata'] = metadata;
        return this;
    }
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
}
exports.Partition = Partition;
//# sourceMappingURL=Partition.js.map