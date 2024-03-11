export declare class DeleteNodePoolRequest {
    private 'cluster_id'?;
    private 'nodepool_id'?;
    private 'Content-Type'?;
    constructor(clusterId?: string, nodepoolId?: string, contentType?: string);
    withClusterId(clusterId: string): DeleteNodePoolRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withNodepoolId(nodepoolId: string): DeleteNodePoolRequest;
    set nodepoolId(nodepoolId: string | undefined);
    get nodepoolId(): string | undefined;
    withContentType(contentType: string): DeleteNodePoolRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
}
//# sourceMappingURL=DeleteNodePoolRequest.d.ts.map