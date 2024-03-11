export declare class ListReleasesRequest {
    private 'Content-Type'?;
    private 'cluster_id'?;
    private 'chart_id'?;
    namespace?: string;
    constructor(contentType?: string, clusterId?: string);
    withContentType(contentType: string): ListReleasesRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withClusterId(clusterId: string): ListReleasesRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withChartId(chartId: string): ListReleasesRequest;
    set chartId(chartId: string | undefined);
    get chartId(): string | undefined;
    withNamespace(namespace: string): ListReleasesRequest;
}
//# sourceMappingURL=ListReleasesRequest.d.ts.map