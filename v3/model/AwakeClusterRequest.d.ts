export declare class AwakeClusterRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): AwakeClusterRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): AwakeClusterRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
}
//# sourceMappingURL=AwakeClusterRequest.d.ts.map