import { BatchDeleteClusterTagsRequestBody } from './BatchDeleteClusterTagsRequestBody';
export declare class BatchDeleteClusterTagsRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: BatchDeleteClusterTagsRequestBody;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): BatchDeleteClusterTagsRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): BatchDeleteClusterTagsRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: BatchDeleteClusterTagsRequestBody): BatchDeleteClusterTagsRequest;
}
//# sourceMappingURL=BatchDeleteClusterTagsRequest.d.ts.map