"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartitionReqBody = void 0;
class PartitionReqBody {
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
exports.PartitionReqBody = PartitionReqBody;
//# sourceMappingURL=PartitionReqBody.js.map