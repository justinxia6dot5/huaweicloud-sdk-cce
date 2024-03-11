export declare class DeleteReleaseRequest {
    name?: string;
    namespace?: string;
    private 'Content-Type'?;
    private 'cluster_id'?;
    constructor(name?: string, namespace?: string, contentType?: string, clusterId?: string);
    withName(name: string): DeleteReleaseRequest;
    withNamespace(namespace: string): DeleteReleaseRequest;
    withContentType(contentType: string): DeleteReleaseRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withClusterId(clusterId: string): DeleteReleaseRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
}
//# sourceMappingURL=DeleteReleaseRequest.d.ts.map