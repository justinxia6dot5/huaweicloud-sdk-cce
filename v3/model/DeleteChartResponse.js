"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteChartResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class DeleteChartResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.DeleteChartResponse = DeleteChartResponse;
//# sourceMappingURL=DeleteChartResponse.js.map