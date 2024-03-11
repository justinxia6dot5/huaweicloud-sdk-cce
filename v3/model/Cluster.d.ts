import { ClusterMetadata } from './ClusterMetadata';
import { ClusterSpec } from './ClusterSpec';
import { ClusterStatus } from './ClusterStatus';
export declare class Cluster {
    kind?: string;
    apiVersion?: string;
    metadata?: ClusterMetadata;
    spec?: ClusterSpec;
    status?: ClusterStatus;
    constructor(kind?: string, apiVersion?: string, metadata?: ClusterMetadata, spec?: ClusterSpec);
    withKind(kind: string): Cluster;
    withApiVersion(apiVersion: string): Cluster;
    withMetadata(metadata: ClusterMetadata): Cluster;
    withSpec(spec: ClusterSpec): Cluster;
    withStatus(status: ClusterStatus): Cluster;
}
//# sourceMappingURL=Cluster.d.ts.map