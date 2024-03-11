"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowQuotasResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ShowQuotasResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withQuotas(quotas) {
        this['quotas'] = quotas;
        return this;
    }
}
exports.ShowQuotasResponse = ShowQuotasResponse;
//# sourceMappingURL=ShowQuotasResponse.js.map