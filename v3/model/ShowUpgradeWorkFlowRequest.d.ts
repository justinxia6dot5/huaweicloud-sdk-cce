export declare class ShowUpgradeWorkFlowRequest {
    private 'cluster_id'?;
    private 'upgrade_workflow_id'?;
    private 'Content-Type'?;
    constructor(clusterId?: string, upgradeWorkflowId?: string, contentType?: string);
    withClusterId(clusterId: string): ShowUpgradeWorkFlowRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withUpgradeWorkflowId(upgradeWorkflowId: string): ShowUpgradeWorkFlowRequest;
    set upgradeWorkflowId(upgradeWorkflowId: string | undefined);
    get upgradeWorkflowId(): string | undefined;
    withContentType(contentType: string): ShowUpgradeWorkFlowRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
}
//# sourceMappingURL=ShowUpgradeWorkFlowRequest.d.ts.map