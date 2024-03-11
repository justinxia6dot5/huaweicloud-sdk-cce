import { PersistentVolumeClaimMetadata } from './PersistentVolumeClaimMetadata';
import { PersistentVolumeClaimSpec } from './PersistentVolumeClaimSpec';
import { PersistentVolumeClaimStatus } from './PersistentVolumeClaimStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class DeleteCloudPersistentVolumeClaimsResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: PersistentVolumeClaimMetadata;
    spec?: PersistentVolumeClaimSpec;
    status?: PersistentVolumeClaimStatus;
    constructor();
    withApiVersion(apiVersion: string): DeleteCloudPersistentVolumeClaimsResponse;
    withKind(kind: string): DeleteCloudPersistentVolumeClaimsResponse;
    withMetadata(metadata: PersistentVolumeClaimMetadata): DeleteCloudPersistentVolumeClaimsResponse;
    withSpec(spec: PersistentVolumeClaimSpec): DeleteCloudPersistentVolumeClaimsResponse;
    withStatus(status: PersistentVolumeClaimStatus): DeleteCloudPersistentVolumeClaimsResponse;
}
//# sourceMappingURL=DeleteCloudPersistentVolumeClaimsResponse.d.ts.map