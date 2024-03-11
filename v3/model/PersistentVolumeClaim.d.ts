import { PersistentVolumeClaimMetadata } from './PersistentVolumeClaimMetadata';
import { PersistentVolumeClaimSpec } from './PersistentVolumeClaimSpec';
import { PersistentVolumeClaimStatus } from './PersistentVolumeClaimStatus';
export declare class PersistentVolumeClaim {
    apiVersion?: string;
    kind?: string;
    metadata?: PersistentVolumeClaimMetadata;
    spec?: PersistentVolumeClaimSpec;
    status?: PersistentVolumeClaimStatus;
    constructor(apiVersion?: string, kind?: string, metadata?: PersistentVolumeClaimMetadata, spec?: PersistentVolumeClaimSpec);
    withApiVersion(apiVersion: string): PersistentVolumeClaim;
    withKind(kind: string): PersistentVolumeClaim;
    withMetadata(metadata: PersistentVolumeClaimMetadata): PersistentVolumeClaim;
    withSpec(spec: PersistentVolumeClaimSpec): PersistentVolumeClaim;
    withStatus(status: PersistentVolumeClaimStatus): PersistentVolumeClaim;
}
//# sourceMappingURL=PersistentVolumeClaim.d.ts.map