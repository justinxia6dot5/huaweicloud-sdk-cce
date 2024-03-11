"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecheckClusterRequestBody = void 0;
class PrecheckClusterRequestBody {
    constructor(apiVersion, kind, spec) {
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
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
}
exports.PrecheckClusterRequestBody = PrecheckClusterRequestBody;
//# sourceMappingURL=PrecheckClusterRequestBody.js.map