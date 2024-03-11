"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowChartValuesResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ShowChartValuesResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withValues(values) {
        this['values'] = values;
        return this;
    }
}
exports.ShowChartValuesResponse = ShowChartValuesResponse;
//# sourceMappingURL=ShowChartValuesResponse.js.map