"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeClusterResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class UpgradeClusterResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
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
exports.UpgradeClusterResponse = UpgradeClusterResponse;
//# sourceMappingURL=UpgradeClusterResponse.js.map