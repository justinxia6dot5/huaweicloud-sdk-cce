import { PartitionMetadata } from './PartitionMetadata';
import { PartitionSpec } from './PartitionSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreatePartitionResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: PartitionMetadata;
    spec?: PartitionSpec;
    constructor();
    withKind(kind: string): CreatePartitionResponse;
    withApiVersion(apiVersion: string): CreatePartitionResponse;
    withMetadata(metadata: PartitionMetadata): CreatePartitionResponse;
    withSpec(spec: PartitionSpec): CreatePartitionResponse;
}
//# sourceMappingURL=CreatePartitionResponse.d.ts.map