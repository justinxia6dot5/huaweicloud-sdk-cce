"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePoolUpdate = void 0;
class NodePoolUpdate {
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
exports.NodePoolUpdate = NodePoolUpdate;
//# sourceMappingURL=NodePoolUpdate.js.map