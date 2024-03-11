export declare class ShowNodePoolRequest {
    private 'cluster_id'?;
    private 'nodepool_id'?;
    private 'Content-Type'?;
    constructor(clusterId?: string, nodepoolId?: string, contentType?: string);
    withClusterId(clusterId: string): ShowNodePoolRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withNodepoolId(nodepoolId: string): ShowNodePoolRequest;
    set nodepoolId(nodepoolId: string | undefined);
    get nodepoolId(): string | undefined;
    withContentType(contentType: string): ShowNodePoolRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
}
//# sourceMappingURL=ShowNodePoolRequest.d.ts.map