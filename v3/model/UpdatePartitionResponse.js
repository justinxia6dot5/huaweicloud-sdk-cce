"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePartitionResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class UpdatePartitionResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
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
exports.UpdatePartitionResponse = UpdatePartitionResponse;
//# sourceMappingURL=UpdatePartitionResponse.js.map