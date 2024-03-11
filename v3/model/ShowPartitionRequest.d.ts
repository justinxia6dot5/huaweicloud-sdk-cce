export declare class ShowPartitionRequest {
    private 'cluster_id'?;
    private 'partition_name'?;
    constructor(clusterId?: string, partitionName?: string);
    withClusterId(clusterId: string): ShowPartitionRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withPartitionName(partitionName: string): ShowPartitionRequest;
    set partitionName(partitionName: string | undefined);
    get partitionName(): string | undefined;
}
//# sourceMappingURL=ShowPartitionRequest.d.ts.map