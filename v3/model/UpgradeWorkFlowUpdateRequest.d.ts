import { UpgradeWorkFlowUpdateRequestBody } from './UpgradeWorkFlowUpdateRequestBody';
export declare class UpgradeWorkFlowUpdateRequest {
    private 'cluster_id'?;
    private 'upgrade_workflow_id'?;
    private 'Content-Type'?;
    body?: UpgradeWorkFlowUpdateRequestBody;
    constructor(clusterId?: string, upgradeWorkflowId?: string, contentType?: string);
    withClusterId(clusterId: string): UpgradeWorkFlowUpdateRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withUpgradeWorkflowId(upgradeWorkflowId: string): UpgradeWorkFlowUpdateRequest;
    set upgradeWorkflowId(upgradeWorkflowId: string | undefined);
    get upgradeWorkflowId(): string | undefined;
    withContentType(contentType: string): UpgradeWorkFlowUpdateRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: UpgradeWorkFlowUpdateRequestBody): UpgradeWorkFlowUpdateRequest;
}
//# sourceMappingURL=UpgradeWorkFlowUpdateRequest.d.ts.map