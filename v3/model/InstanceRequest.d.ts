import { AddonMetadata } from './AddonMetadata';
import { InstanceRequestSpec } from './InstanceRequestSpec';
export declare class InstanceRequest {
    kind?: string;
    apiVersion?: string;
    metadata?: AddonMetadata;
    spec?: InstanceRequestSpec;
    constructor(kind?: string, apiVersion?: string, metadata?: AddonMetadata, spec?: InstanceRequestSpec);
    withKind(kind: string): InstanceRequest;
    withApiVersion(apiVersion: string): InstanceRequest;
    withMetadata(metadata: AddonMetadata): InstanceRequest;
    withSpec(spec: InstanceRequestSpec): InstanceRequest;
}
//# sourceMappingURL=InstanceRequest.d.ts.map