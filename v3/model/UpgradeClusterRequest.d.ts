import { UpgradeClusterRequestBody } from './UpgradeClusterRequestBody';
export declare class UpgradeClusterRequest {
    private 'cluster_id'?;
    body?: UpgradeClusterRequestBody;
    constructor(clusterId?: string);
    withClusterId(clusterId: string): UpgradeClusterRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withBody(body: UpgradeClusterRequestBody): UpgradeClusterRequest;
}
//# sourceMappingURL=UpgradeClusterRequest.d.ts.map