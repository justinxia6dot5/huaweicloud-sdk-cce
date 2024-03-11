"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReleaseResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class DeleteReleaseResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.DeleteReleaseResponse = DeleteReleaseResponse;
//# sourceMappingURL=DeleteReleaseResponse.js.map