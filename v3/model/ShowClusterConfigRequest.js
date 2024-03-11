"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowClusterConfigRequestTypeEnum = exports.ShowClusterConfigRequest = void 0;
class ShowClusterConfigRequest {
    constructor(clusterId, contentType) {
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
    withClusterId(clusterId) {
        this['cluster_id'] = clusterId;
        return this;
    }
    set clusterId(clusterId) {
        this['cluster_id'] = clusterId;
    }
    get clusterId() {
        return this['cluster_id'];
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
exports.ShowClusterConfigRequest = ShowClusterConfigRequest;
/**
    * @export
    * @enum {string}
    */
var ShowClusterConfigRequestTypeEnum;
(function (ShowClusterConfigRequestTypeEnum) {
    ShowClusterConfigRequestTypeEnum["CONTROL"] = "control";
    ShowClusterConfigRequestTypeEnum["AUDIT"] = "audit";
    ShowClusterConfigRequestTypeEnum["SYSTEM_ADDON"] = "system-addon";
})(ShowClusterConfigRequestTypeEnum = exports.ShowClusterConfigRequestTypeEnum || (exports.ShowClusterConfigRequestTypeEnum = {}));
//# sourceMappingURL=ShowClusterConfigRequest.js.map