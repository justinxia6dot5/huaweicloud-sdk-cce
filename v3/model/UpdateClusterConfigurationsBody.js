"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClusterConfigurationsBody = void 0;
class UpdateClusterConfigurationsBody {
    constructor(apiVersion, kind, metadata, spec) {
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
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
    withMetadata(metadata) {
        this['metadata'] = metadata;
        return this;
    }
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
}
exports.UpdateClusterConfigurationsBody = UpdateClusterConfigurationsBody;
//# sourceMappingURL=UpdateClusterConfigurationsBody.js.map