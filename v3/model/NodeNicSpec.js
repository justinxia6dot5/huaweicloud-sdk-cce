"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeNicSpec = void 0;
class NodeNicSpec {
    constructor() {
    }
    withPrimaryNic(primaryNic) {
        this['primaryNic'] = primaryNic;
        return this;
    }
    withExtNics(extNics) {
        this['extNics'] = extNics;
        return this;
    }
}
exports.NodeNicSpec = NodeNicSpec;
//# sourceMappingURL=NodeNicSpec.js.map