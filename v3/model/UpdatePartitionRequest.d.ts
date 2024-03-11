import { PartitionReqBody } from './PartitionReqBody';
export declare class UpdatePartitionRequest {
    private 'cluster_id'?;
    private 'partition_name'?;
    body?: PartitionReqBody;
    constructor(clusterId?: string, partitionName?: string);
    withClusterId(clusterId: string): UpdatePartitionRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withPartitionName(partitionName: string): UpdatePartitionRequest;
    set partitionName(partitionName: string | undefined);
    get partitionName(): string | undefined;
    withBody(body: PartitionReqBody): UpdatePartitionRequest;
}
//# sourceMappingURL=UpdatePartitionRequest.d.ts.map