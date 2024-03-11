"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpgradeWorkFlowRequestBody = void 0;
class CreateUpgradeWorkFlowRequestBody {
    constructor(kind, apiVersion, spec) {
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['spec'] = spec;
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
}
exports.CreateUpgradeWorkFlowRequestBody = CreateUpgradeWorkFlowRequestBody;
//# sourceMappingURL=CreateUpgradeWorkFlowRequestBody.js.map