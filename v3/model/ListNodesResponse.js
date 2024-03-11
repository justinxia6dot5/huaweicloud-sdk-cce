"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNodesResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ListNodesResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withItems(items) {
        this['items'] = items;
        return this;
    }
}
exports.ListNodesResponse = ListNodesResponse;
//# sourceMappingURL=ListNodesResponse.js.map