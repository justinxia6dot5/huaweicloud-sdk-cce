import { ClusterLogConfig } from './ClusterLogConfig';
export declare class UpdateClusterLogConfigRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: ClusterLogConfig;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): UpdateClusterLogConfigRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): UpdateClusterLogConfigRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: ClusterLogConfig): UpdateClusterLogConfigRequest;
}
//# sourceMappingURL=UpdateClusterLogConfigRequest.d.ts.map