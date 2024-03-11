export declare class ShowNodePoolConfigurationsRequest {
    private 'cluster_id'?;
    private 'nodepool_id'?;
    private 'Content-Type'?;
    constructor(clusterId?: string, nodepoolId?: string, contentType?: string);
    withClusterId(clusterId: string): ShowNodePoolConfigurationsRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withNodepoolId(nodepoolId: string): ShowNodePoolConfigurationsRequest;
    set nodepoolId(nodepoolId: string | undefined);
    get nodepoolId(): string | undefined;
    withContentType(contentType: string): ShowNodePoolConfigurationsRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
}
//# sourceMappingURL=ShowNodePoolConfigurationsRequest.d.ts.map