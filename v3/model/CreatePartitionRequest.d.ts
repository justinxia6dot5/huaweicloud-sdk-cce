import { PartitionReqBody } from './PartitionReqBody';
export declare class CreatePartitionRequest {
    private 'cluster_id'?;
    body?: PartitionReqBody;
    constructor(clusterId?: string);
    withClusterId(clusterId: string): CreatePartitionRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withBody(body: PartitionReqBody): CreatePartitionRequest;
}
//# sourceMappingURL=CreatePartitionRequest.d.ts.map