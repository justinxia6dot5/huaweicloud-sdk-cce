export declare class ShowReleaseRequest {
    name?: string;
    namespace?: string;
    private 'Content-Type'?;
    private 'cluster_id'?;
    constructor(name?: string, namespace?: string, contentType?: string, clusterId?: string);
    withName(name: string): ShowReleaseRequest;
    withNamespace(namespace: string): ShowReleaseRequest;
    withContentType(contentType: string): ShowReleaseRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withClusterId(clusterId: string): ShowReleaseRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
}
//# sourceMappingURL=ShowReleaseRequest.d.ts.map