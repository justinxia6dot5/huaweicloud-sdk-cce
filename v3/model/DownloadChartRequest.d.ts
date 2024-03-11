export declare class DownloadChartRequest {
    private 'chart_id'?;
    private 'Content-Type'?;
    constructor(chartId?: string, contentType?: string);
    withChartId(chartId: string): DownloadChartRequest;
    set chartId(chartId: string | undefined);
    get chartId(): string | undefined;
    withContentType(contentType: string): DownloadChartRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
}
//# sourceMappingURL=DownloadChartRequest.d.ts.map