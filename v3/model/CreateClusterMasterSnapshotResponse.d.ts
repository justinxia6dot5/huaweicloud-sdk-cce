import { SnapshotCluserResponseMetadata } from './SnapshotCluserResponseMetadata';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreateClusterMasterSnapshotResponse extends SdkResponse {
    uid?: string;
    metadata?: SnapshotCluserResponseMetadata;
    constructor();
    withUid(uid: string): CreateClusterMasterSnapshotResponse;
    withMetadata(metadata: SnapshotCluserResponseMetadata): CreateClusterMasterSnapshotResponse;
}
//# sourceMappingURL=CreateClusterMasterSnapshotResponse.d.ts.map