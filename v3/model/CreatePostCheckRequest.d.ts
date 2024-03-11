import { PostcheckClusterRequestBody } from './PostcheckClusterRequestBody';
export declare class CreatePostCheckRequest {
    private 'cluster_id'?;
    body?: PostcheckClusterRequestBody;
    constructor(clusterId?: string);
    withClusterId(clusterId: string): CreatePostCheckRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withBody(body: PostcheckClusterRequestBody): CreatePostCheckRequest;
}
//# sourceMappingURL=CreatePostCheckRequest.d.ts.map