"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowClusterEndpointsResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ShowClusterEndpointsResponse extends SdkResponse_1.SdkResponse {
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
    withStatus(status) {
        this['status'] = status;
        return this;
    }
}
exports.ShowClusterEndpointsResponse = ShowClusterEndpointsResponse;
//# sourceMappingURL=ShowClusterEndpointsResponse.js.map