export declare class HibernateClusterRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): HibernateClusterRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): HibernateClusterRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
}
//# sourceMappingURL=HibernateClusterRequest.d.ts.map