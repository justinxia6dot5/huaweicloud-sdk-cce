"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeClusterResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ResizeClusterResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withJobID(jobID) {
        this['jobID'] = jobID;
        return this;
    }
    withOrderID(orderID) {
        this['orderID'] = orderID;
        return this;
    }
}
exports.ResizeClusterResponse = ResizeClusterResponse;
//# sourceMappingURL=ResizeClusterResponse.js.map