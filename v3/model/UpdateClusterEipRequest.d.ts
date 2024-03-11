import { MasterEIPRequest } from './MasterEIPRequest';
export declare class UpdateClusterEipRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: MasterEIPRequest;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): UpdateClusterEipRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): UpdateClusterEipRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: MasterEIPRequest): UpdateClusterEipRequest;
}
//# sourceMappingURL=UpdateClusterEipRequest.d.ts.map