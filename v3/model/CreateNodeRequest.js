"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNodeRequestNodepoolScaleUpEnum = exports.CreateNodeRequest = void 0;
class CreateNodeRequest {
    constructor(clusterId, contentType) {
        this['cluster_id'] = clusterId;
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
    withNodepoolScaleUp(nodepoolScaleUp) {
        this['nodepoolScaleUp'] = nodepoolScaleUp;
        return this;
    }
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.CreateNodeRequest = CreateNodeRequest;
/**
    * @export
    * @enum {string}
    */
var CreateNodeRequestNodepoolScaleUpEnum;
(function (CreateNodeRequestNodepoolScaleUpEnum) {
    CreateNodeRequestNodepoolScaleUpEnum["NODEPOOLSCALEUP"] = "NodepoolScaleUp";
})(CreateNodeRequestNodepoolScaleUpEnum = exports.CreateNodeRequestNodepoolScaleUpEnum || (exports.CreateNodeRequestNodepoolScaleUpEnum = {}));
//# sourceMappingURL=CreateNodeRequest.js.map