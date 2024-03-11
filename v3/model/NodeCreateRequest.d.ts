import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
export declare class NodeCreateRequest {
    kind?: string;
    apiVersion?: string;
    metadata?: NodeMetadata;
    spec?: NodeSpec;
    constructor(kind?: string, apiVersion?: string, spec?: NodeSpec);
    withKind(kind: string): NodeCreateRequest;
    withApiVersion(apiVersion: string): NodeCreateRequest;
    withMetadata(metadata: NodeMetadata): NodeCreateRequest;
    withSpec(spec: NodeSpec): NodeCreateRequest;
}
//# sourceMappingURL=NodeCreateRequest.d.ts.map