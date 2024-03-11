import { NodePoolMetadataUpdate } from './NodePoolMetadataUpdate';
import { NodePoolSpecUpdate } from './NodePoolSpecUpdate';
export declare class NodePoolUpdate {
    metadata?: NodePoolMetadataUpdate;
    spec?: NodePoolSpecUpdate;
    constructor(metadata?: NodePoolMetadataUpdate, spec?: NodePoolSpecUpdate);
    withMetadata(metadata: NodePoolMetadataUpdate): NodePoolUpdate;
    withSpec(spec: NodePoolSpecUpdate): NodePoolUpdate;
}
//# sourceMappingURL=NodePoolUpdate.d.ts.map