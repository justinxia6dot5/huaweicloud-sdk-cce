import { UploadChartRequestBody } from './UploadChartRequestBody';
export declare class UploadChartRequest {
    private 'Content-Type'?;
    body?: UploadChartRequestBody;
    constructor(contentType?: string);
    withContentType(contentType: string): UploadChartRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: UploadChartRequestBody): UploadChartRequest;
}
//# sourceMappingURL=UploadChartRequest.d.ts.map