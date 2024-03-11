import { AddonInstanceStatus } from './AddonInstanceStatus';
import { AddonMetadata } from './AddonMetadata';
import { InstanceSpec } from './InstanceSpec';
export declare class AddonInstance {
    kind?: string;
    apiVersion?: string;
    metadata?: AddonMetadata;
    spec?: InstanceSpec;
    status?: AddonInstanceStatus;
    constructor(kind?: string, apiVersion?: string, spec?: InstanceSpec, status?: AddonInstanceStatus);
    withKind(kind: string): AddonInstance;
    withApiVersion(apiVersion: string): AddonInstance;
    withMetadata(metadata: AddonMetadata): AddonInstance;
    withSpec(spec: InstanceSpec): AddonInstance;
    withStatus(status: AddonInstanceStatus): AddonInstance;
}
//# sourceMappingURL=AddonInstance.d.ts.map