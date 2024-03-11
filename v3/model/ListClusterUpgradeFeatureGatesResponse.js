"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClusterUpgradeFeatureGatesResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ListClusterUpgradeFeatureGatesResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withMetadata(metadata) {
        this['metadata'] = metadata;
        return this;
    }
    withUpgradeFeatureGates(upgradeFeatureGates) {
        this['upgradeFeatureGates'] = upgradeFeatureGates;
        return this;
    }
}
exports.ListClusterUpgradeFeatureGatesResponse = ListClusterUpgradeFeatureGatesResponse;
//# sourceMappingURL=ListClusterUpgradeFeatureGatesResponse.js.map