"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowClusterConfigurationDetailsResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ShowClusterConfigurationDetailsResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.ShowClusterConfigurationDetailsResponse = ShowClusterConfigurationDetailsResponse;
//# sourceMappingURL=ShowClusterConfigurationDetailsResponse.js.map