export declare class ShowClusterRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    detail?: string;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): ShowClusterRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): ShowClusterRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withDetail(detail: string): ShowClusterRequest;
}
//# sourceMappingURL=ShowClusterRequest.d.ts.map