import { PartitionMetadata } from './PartitionMetadata';
import { PartitionSpec } from './PartitionSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class UpdatePartitionResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: PartitionMetadata;
    spec?: PartitionSpec;
    constructor();
    withKind(kind: string): UpdatePartitionResponse;
    withApiVersion(apiVersion: string): UpdatePartitionResponse;
    withMetadata(metadata: PartitionMetadata): UpdatePartitionResponse;
    withSpec(spec: PartitionSpec): UpdatePartitionResponse;
}
//# sourceMappingURL=UpdatePartitionResponse.d.ts.map