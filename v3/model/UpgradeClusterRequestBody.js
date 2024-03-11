"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeClusterRequestBody = void 0;
class UpgradeClusterRequestBody {
    constructor(metadata, spec) {
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    withMetadata(metadata) {
        this['metadata'] = metadata;
        return this;
    }
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
}
exports.UpgradeClusterRequestBody = UpgradeClusterRequestBody;
//# sourceMappingURL=UpgradeClusterRequestBody.js.map