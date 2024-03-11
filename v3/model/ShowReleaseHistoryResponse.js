"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowReleaseHistoryResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ShowReleaseHistoryResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.ShowReleaseHistoryResponse = ShowReleaseHistoryResponse;
//# sourceMappingURL=ShowReleaseHistoryResponse.js.map