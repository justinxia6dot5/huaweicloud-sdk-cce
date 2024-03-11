"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUpgradeWorkFlowsResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ListUpgradeWorkFlowsResponse extends SdkResponse_1.SdkResponse {
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
    withItems(items) {
        this['items'] = items;
        return this;
    }
}
exports.ListUpgradeWorkFlowsResponse = ListUpgradeWorkFlowsResponse;
//# sourceMappingURL=ListUpgradeWorkFlowsResponse.js.map