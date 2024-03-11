"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterNodeInformation = void 0;
class ClusterNodeInformation {
    constructor(metadata) {
        this['metadata'] = metadata;
    }
    withMetadata(metadata) {
        this['metadata'] = metadata;
        return this;
    }
}
exports.ClusterNodeInformation = ClusterNodeInformation;
//# sourceMappingURL=ClusterNodeInformation.js.map