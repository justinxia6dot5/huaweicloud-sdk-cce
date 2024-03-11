"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetNodeResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ResetNodeResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withJobid(jobid) {
        this['jobid'] = jobid;
        return this;
    }
}
exports.ResetNodeResponse = ResetNodeResponse;
//# sourceMappingURL=ResetNodeResponse.js.map