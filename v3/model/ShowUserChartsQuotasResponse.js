"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserChartsQuotasResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ShowUserChartsQuotasResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withQuotas(quotas) {
        this['quotas'] = quotas;
        return this;
    }
}
exports.ShowUserChartsQuotasResponse = ShowUserChartsQuotasResponse;
//# sourceMappingURL=ShowUserChartsQuotasResponse.js.map