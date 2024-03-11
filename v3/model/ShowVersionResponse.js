"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowVersionResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ShowVersionResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withVersions(versions) {
        this['versions'] = versions;
        return this;
    }
}
exports.ShowVersionResponse = ShowVersionResponse;
//# sourceMappingURL=ShowVersionResponse.js.map