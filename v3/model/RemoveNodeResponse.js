"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveNodeResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class RemoveNodeResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
}
exports.RemoveNodeResponse = RemoveNodeResponse;
//# sourceMappingURL=RemoveNodeResponse.js.map