export declare class ShowReleaseHistoryRequest {
    name?: string;
    namespace?: string;
    private 'Content-Type'?;
    private 'cluster_id'?;
    constructor(name?: string, namespace?: string, contentType?: string, clusterId?: string);
    withName(name: string): ShowReleaseHistoryRequest;
    withNamespace(namespace: string): ShowReleaseHistoryRequest;
    withContentType(contentType: string): ShowReleaseHistoryRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withClusterId(clusterId: string): ShowReleaseHistoryRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
}
//# sourceMappingURL=ShowReleaseHistoryRequest.d.ts.map