"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClusterUpgradePathsRequest = void 0;
class ListClusterUpgradePathsRequest {
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
exports.ListClusterUpgradePathsRequest = ListClusterUpgradePathsRequest;
//# sourceMappingURL=ListClusterUpgradePathsRequest.js.map