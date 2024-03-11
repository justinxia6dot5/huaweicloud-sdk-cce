import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { NodePoolStatus } from './NodePoolStatus';
export declare class NodePoolResp {
    kind?: string;
    apiVersion?: string;
    metadata?: NodePoolMetadata;
    spec?: NodePoolSpec;
    status?: NodePoolStatus;
    constructor(kind?: string, apiVersion?: string, metadata?: NodePoolMetadata, spec?: NodePoolSpec);
    withKind(kind: string): NodePoolResp;
    withApiVersion(apiVersion: string): NodePoolResp;
    withMetadata(metadata: NodePoolMetadata): NodePoolResp;
    withSpec(spec: NodePoolSpec): NodePoolResp;
    withStatus(status: NodePoolStatus): NodePoolResp;
}
//# sourceMappingURL=NodePoolResp.d.ts.map