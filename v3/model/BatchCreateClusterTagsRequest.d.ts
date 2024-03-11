import { BatchCreateClusterTagsRequestBody } from './BatchCreateClusterTagsRequestBody';
export declare class BatchCreateClusterTagsRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: BatchCreateClusterTagsRequestBody;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): BatchCreateClusterTagsRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): BatchCreateClusterTagsRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: BatchCreateClusterTagsRequestBody): BatchCreateClusterTagsRequest;
}
//# sourceMappingURL=BatchCreateClusterTagsRequest.d.ts.map