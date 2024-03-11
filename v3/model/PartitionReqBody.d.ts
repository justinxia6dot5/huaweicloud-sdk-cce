import { PartitionReqBodyMetadata } from './PartitionReqBodyMetadata';
import { PartitionSpec } from './PartitionSpec';
export declare class PartitionReqBody {
    kind?: string;
    apiVersion?: string;
    metadata?: PartitionReqBodyMetadata;
    spec?: PartitionSpec;
    constructor();
    withKind(kind: string): PartitionReqBody;
    withApiVersion(apiVersion: string): PartitionReqBody;
    withMetadata(metadata: PartitionReqBodyMetadata): PartitionReqBody;
    withSpec(spec: PartitionSpec): PartitionReqBody;
}
//# sourceMappingURL=PartitionReqBody.d.ts.map