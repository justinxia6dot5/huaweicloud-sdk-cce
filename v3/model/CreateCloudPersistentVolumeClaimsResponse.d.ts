import { PersistentVolumeClaimMetadata } from './PersistentVolumeClaimMetadata';
import { PersistentVolumeClaimSpec } from './PersistentVolumeClaimSpec';
import { PersistentVolumeClaimStatus } from './PersistentVolumeClaimStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreateCloudPersistentVolumeClaimsResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: PersistentVolumeClaimMetadata;
    spec?: PersistentVolumeClaimSpec;
    status?: PersistentVolumeClaimStatus;
    constructor();
    withApiVersion(apiVersion: string): CreateCloudPersistentVolumeClaimsResponse;
    withKind(kind: string): CreateCloudPersistentVolumeClaimsResponse;
    withMetadata(metadata: PersistentVolumeClaimMetadata): CreateCloudPersistentVolumeClaimsResponse;
    withSpec(spec: PersistentVolumeClaimSpec): CreateCloudPersistentVolumeClaimsResponse;
    withStatus(status: PersistentVolumeClaimStatus): CreateCloudPersistentVolumeClaimsResponse;
}
//# sourceMappingURL=CreateCloudPersistentVolumeClaimsResponse.d.ts.map