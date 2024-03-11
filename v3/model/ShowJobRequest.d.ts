export declare class ShowJobRequest {
    private 'job_id'?;
    private 'Content-Type'?;
    constructor(jobId?: string, contentType?: string);
    withJobId(jobId: string): ShowJobRequest;
    set jobId(jobId: string | undefined);
    get jobId(): string | undefined;
    withContentType(contentType: string): ShowJobRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
}
//# sourceMappingURL=ShowJobRequest.d.ts.map