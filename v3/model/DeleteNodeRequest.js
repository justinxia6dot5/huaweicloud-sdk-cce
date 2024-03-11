"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNodeRequestNodepoolScaleDownEnum = exports.DeleteNodeRequest = void 0;
class DeleteNodeRequest {
    constructor(clusterId, nodeId, contentType) {
        this['cluster_id'] = clusterId;
        this['node_id'] = nodeId;
        this['Content-Type'] = contentType;
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
    withNodeId(nodeId) {
        this['node_id'] = nodeId;
        return this;
    }
    set nodeId(nodeId) {
        this['node_id'] = nodeId;
    }
    get nodeId() {
        return this['node_id'];
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
    withNodepoolScaleDown(nodepoolScaleDown) {
        this['nodepoolScaleDown'] = nodepoolScaleDown;
        return this;
    }
}
exports.DeleteNodeRequest = DeleteNodeRequest;
/**
    * @export
    * @enum {string}
    */
var DeleteNodeRequestNodepoolScaleDownEnum;
(function (DeleteNodeRequestNodepoolScaleDownEnum) {
    DeleteNodeRequestNodepoolScaleDownEnum["NOSCALEDOWN"] = "NoScaleDown";
})(DeleteNodeRequestNodepoolScaleDownEnum = exports.DeleteNodeRequestNodepoolScaleDownEnum || (exports.DeleteNodeRequestNodepoolScaleDownEnum = {}));
//# sourceMappingURL=DeleteNodeRequest.js.map