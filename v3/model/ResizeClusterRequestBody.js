"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeClusterRequestBody = void 0;
class ResizeClusterRequestBody {
    constructor(flavorResize) {
        this['flavorResize'] = flavorResize;
    }
    withFlavorResize(flavorResize) {
        this['flavorResize'] = flavorResize;
        return this;
    }
    withExtendParam(extendParam) {
        this['extendParam'] = extendParam;
        return this;
    }
}
exports.ResizeClusterRequestBody = ResizeClusterRequestBody;
//# sourceMappingURL=ResizeClusterRequestBody.js.map