import { ClusterInformation } from './ClusterInformation';
export declare class UpdateClusterRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: ClusterInformation;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): UpdateClusterRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): UpdateClusterRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: ClusterInformation): UpdateClusterRequest;
}
//# sourceMappingURL=UpdateClusterRequest.d.ts.map