"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeTaskResponseBody = void 0;
class UpgradeTaskResponseBody {
    constructor() {
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withKind(kind) {
        this['kind'] = kind;
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
exports.UpgradeTaskResponseBody = UpgradeTaskResponseBody;
//# sourceMappingURL=UpgradeTaskResponseBody.js.map