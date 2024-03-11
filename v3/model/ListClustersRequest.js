"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClustersRequestTypeEnum = exports.ListClustersRequestStatusEnum = exports.ListClustersRequest = void 0;
class ListClustersRequest {
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
    withDetail(detail) {
        this['detail'] = detail;
        return this;
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
}
exports.ListClustersRequest = ListClustersRequest;
/**
    * @export
    * @enum {string}
    */
var ListClustersRequestStatusEnum;
(function (ListClustersRequestStatusEnum) {
    ListClustersRequestStatusEnum["AVAILABLE"] = "Available";
    ListClustersRequestStatusEnum["UNAVAILABLE"] = "Unavailable";
    ListClustersRequestStatusEnum["SCALINGUP"] = "ScalingUp";
    ListClustersRequestStatusEnum["SCALINGDOWN"] = "ScalingDown";
    ListClustersRequestStatusEnum["CREATING"] = "Creating";
    ListClustersRequestStatusEnum["DELETING"] = "Deleting";
    ListClustersRequestStatusEnum["UPGRADING"] = "Upgrading";
    ListClustersRequestStatusEnum["RESIZING"] = "Resizing";
    ListClustersRequestStatusEnum["ROLLINGBACK"] = "RollingBack";
    ListClustersRequestStatusEnum["ROLLBACKFAILED"] = "RollbackFailed";
    ListClustersRequestStatusEnum["HIBERNATING"] = "Hibernating";
    ListClustersRequestStatusEnum["HIBERNATION"] = "Hibernation";
    ListClustersRequestStatusEnum["AWAKING"] = "Awaking";
    ListClustersRequestStatusEnum["EMPTY"] = "Empty";
})(ListClustersRequestStatusEnum = exports.ListClustersRequestStatusEnum || (exports.ListClustersRequestStatusEnum = {}));
/**
    * @export
    * @enum {string}
    */
var ListClustersRequestTypeEnum;
(function (ListClustersRequestTypeEnum) {
    ListClustersRequestTypeEnum["VIRTUALMACHINE"] = "VirtualMachine";
    ListClustersRequestTypeEnum["ARM64"] = "ARM64";
})(ListClustersRequestTypeEnum = exports.ListClustersRequestTypeEnum || (exports.ListClustersRequestTypeEnum = {}));
//# sourceMappingURL=ListClustersRequest.js.map