"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddonInstanceResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class UpdateAddonInstanceResponse extends SdkResponse_1.SdkResponse {
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
    withMetadata(metadata) {
        this['metadata'] = metadata;
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
exports.UpdateAddonInstanceResponse = UpdateAddonInstanceResponse;
//# sourceMappingURL=UpdateAddonInstanceResponse.js.map