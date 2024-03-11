"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeWorkFlowUpdateRequest = void 0;
class UpgradeWorkFlowUpdateRequest {
    constructor(clusterId, upgradeWorkflowId, contentType) {
        this['cluster_id'] = clusterId;
        this['upgrade_workflow_id'] = upgradeWorkflowId;
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
    withUpgradeWorkflowId(upgradeWorkflowId) {
        this['upgrade_workflow_id'] = upgradeWorkflowId;
        return this;
    }
    set upgradeWorkflowId(upgradeWorkflowId) {
        this['upgrade_workflow_id'] = upgradeWorkflowId;
    }
    get upgradeWorkflowId() {
        return this['upgrade_workflow_id'];
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
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.UpgradeWorkFlowUpdateRequest = UpgradeWorkFlowUpdateRequest;
//# sourceMappingURL=UpgradeWorkFlowUpdateRequest.js.map