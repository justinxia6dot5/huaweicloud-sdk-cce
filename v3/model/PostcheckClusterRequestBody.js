"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostcheckClusterRequestBody = void 0;
class PostcheckClusterRequestBody {
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
exports.PostcheckClusterRequestBody = PostcheckClusterRequestBody;
//# sourceMappingURL=PostcheckClusterRequestBody.js.map