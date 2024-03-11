"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReleasesResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ListReleasesResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.ListReleasesResponse = ListReleasesResponse;
//# sourceMappingURL=ListReleasesResponse.js.map