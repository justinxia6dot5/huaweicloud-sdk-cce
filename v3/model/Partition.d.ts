import { PartitionMetadata } from './PartitionMetadata';
import { PartitionSpec } from './PartitionSpec';
export declare class Partition {
    kind?: string;
    apiVersion?: string;
    metadata?: PartitionMetadata;
    spec?: PartitionSpec;
    constructor();
    withKind(kind: string): Partition;
    withApiVersion(apiVersion: string): Partition;
    withMetadata(metadata: PartitionMetadata): Partition;
    withSpec(spec: PartitionSpec): Partition;
}
//# sourceMappingURL=Partition.d.ts.map