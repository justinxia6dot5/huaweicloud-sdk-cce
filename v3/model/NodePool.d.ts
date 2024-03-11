import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { NodePoolStatus } from './NodePoolStatus';
export declare class NodePool {
    kind?: string;
    apiVersion?: string;
    metadata?: NodePoolMetadata;
    spec?: NodePoolSpec;
    status?: NodePoolStatus;
    constructor(kind?: string, apiVersion?: string, metadata?: NodePoolMetadata, spec?: NodePoolSpec);
    withKind(kind: string): NodePool;
    withApiVersion(apiVersion: string): NodePool;
    withMetadata(metadata: NodePoolMetadata): NodePool;
    withSpec(spec: NodePoolSpec): NodePool;
    withStatus(status: NodePoolStatus): NodePool;
}
//# sourceMappingURL=NodePool.d.ts.map