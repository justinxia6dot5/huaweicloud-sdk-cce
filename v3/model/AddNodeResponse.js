"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNodeResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class AddNodeResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withJobid(jobid) {
        this['jobid'] = jobid;
        return this;
    }
}
exports.AddNodeResponse = AddNodeResponse;
//# sourceMappingURL=AddNodeResponse.js.map