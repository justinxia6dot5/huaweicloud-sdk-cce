"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeClusterRequestMetadata = void 0;
class UpgradeClusterRequestMetadata {
    constructor(apiVersion, kind) {
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
}
exports.UpgradeClusterRequestMetadata = UpgradeClusterRequestMetadata;
//# sourceMappingURL=UpgradeClusterRequestMetadata.js.map