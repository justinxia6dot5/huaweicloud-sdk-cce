import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';
export declare class Node {
    kind?: string;
    apiVersion?: string;
    metadata?: NodeMetadata;
    spec?: NodeSpec;
    status?: NodeStatus;
    constructor();
    withKind(kind: string): Node;
    withApiVersion(apiVersion: string): Node;
    withMetadata(metadata: NodeMetadata): Node;
    withSpec(spec: NodeSpec): Node;
    withStatus(status: NodeStatus): Node;
}
//# sourceMappingURL=Node.d.ts.map