export declare class ListNodePoolsRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    showDefaultNodePool?: string;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): ListNodePoolsRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): ListNodePoolsRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withShowDefaultNodePool(showDefaultNodePool: string): ListNodePoolsRequest;
}
//# sourceMappingURL=ListNodePoolsRequest.d.ts.map