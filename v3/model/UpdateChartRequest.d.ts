import { UpdateChartRequestBody } from './UpdateChartRequestBody';
export declare class UpdateChartRequest {
    private 'chart_id'?;
    private 'Content-Type'?;
    body?: UpdateChartRequestBody;
    constructor(chartId?: string, contentType?: string);
    withChartId(chartId: string): UpdateChartRequest;
    set chartId(chartId: string | undefined);
    get chartId(): string | undefined;
    withContentType(contentType: string): UpdateChartRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: UpdateChartRequestBody): UpdateChartRequest;
}
//# sourceMappingURL=UpdateChartRequest.d.ts.map