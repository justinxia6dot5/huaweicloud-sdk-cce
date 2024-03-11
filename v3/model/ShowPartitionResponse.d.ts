import { PartitionMetadata } from './PartitionMetadata';
import { PartitionSpec } from './PartitionSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowPartitionResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: PartitionMetadata;
    spec?: PartitionSpec;
    constructor();
    withKind(kind: string): ShowPartitionResponse;
    withApiVersion(apiVersion: string): ShowPartitionResponse;
    withMetadata(metadata: PartitionMetadata): ShowPartitionResponse;
    withSpec(spec: PartitionSpec): ShowPartitionResponse;
}
//# sourceMappingURL=ShowPartitionResponse.d.ts.map