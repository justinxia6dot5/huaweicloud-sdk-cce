"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClusterUpgradePathsResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ListClusterUpgradePathsResponse extends SdkResponse_1.SdkResponse {
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
    withUpgradePaths(upgradePaths) {
        this['upgradePaths'] = upgradePaths;
        return this;
    }
}
exports.ListClusterUpgradePathsResponse = ListClusterUpgradePathsResponse;
//# sourceMappingURL=ListClusterUpgradePathsResponse.js.map