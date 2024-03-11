"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterInformation = void 0;
class ClusterInformation {
    constructor(spec) {
        this['spec'] = spec;
    }
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
    withMetadata(metadata) {
        this['metadata'] = metadata;
        return this;
    }
}
exports.ClusterInformation = ClusterInformation;
//# sourceMappingURL=ClusterInformation.js.map