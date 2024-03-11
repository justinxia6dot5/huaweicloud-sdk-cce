import { UpdateClusterConfigurationsBody } from './UpdateClusterConfigurationsBody';
export declare class UpdateNodePoolConfigurationRequest {
    private 'cluster_id'?;
    private 'nodepool_id'?;
    private 'Content-Type'?;
    body?: UpdateClusterConfigurationsBody;
    constructor(clusterId?: string, nodepoolId?: string, contentType?: string);
    withClusterId(clusterId: string): UpdateNodePoolConfigurationRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withNodepoolId(nodepoolId: string): UpdateNodePoolConfigurationRequest;
    set nodepoolId(nodepoolId: string | undefined);
    get nodepoolId(): string | undefined;
    withContentType(contentType: string): UpdateNodePoolConfigurationRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: UpdateClusterConfigurationsBody): UpdateNodePoolConfigurationRequest;
}
//# sourceMappingURL=UpdateNodePoolConfigurationRequest.d.ts.map