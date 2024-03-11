"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListChartsResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ListChartsResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.ListChartsResponse = ListChartsResponse;
//# sourceMappingURL=ListChartsResponse.js.map