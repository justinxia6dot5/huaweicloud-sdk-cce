"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClusterUpgradeFeatureGatesRequest = void 0;
class ListClusterUpgradeFeatureGatesRequest {
    constructor(contentType) {
        this['Content-Type'] = contentType;
    }
    withContentType(contentType) {
        this['Content-Type'] = contentType;
        return this;
    }
    set contentType(contentType) {
        this['Content-Type'] = contentType;
    }
    get contentType() {
        return this['Content-Type'];
    }
}
exports.ListClusterUpgradeFeatureGatesRequest = ListClusterUpgradeFeatureGatesRequest;
//# sourceMappingURL=ListClusterUpgradeFeatureGatesRequest.js.map