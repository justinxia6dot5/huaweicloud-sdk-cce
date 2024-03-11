import { ResizeClusterRequestBody } from './ResizeClusterRequestBody';
export declare class ResizeClusterRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: ResizeClusterRequestBody;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): ResizeClusterRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): ResizeClusterRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: ResizeClusterRequestBody): ResizeClusterRequest;
}
//# sourceMappingURL=ResizeClusterRequest.d.ts.map