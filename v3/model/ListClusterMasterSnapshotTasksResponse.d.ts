import { SnapshotTask } from './SnapshotTask';
import { SnapshotTaskMetadata } from './SnapshotTaskMetadata';
import { SnapshotTaskStatus } from './SnapshotTaskStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListClusterMasterSnapshotTasksResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: SnapshotTaskMetadata;
    items?: Array<SnapshotTask>;
    status?: SnapshotTaskStatus;
    constructor();
    withApiVersion(apiVersion: string): ListClusterMasterSnapshotTasksResponse;
    withKind(kind: string): ListClusterMasterSnapshotTasksResponse;
    withMetadata(metadata: SnapshotTaskMetadata): ListClusterMasterSnapshotTasksResponse;
    withItems(items: Array<SnapshotTask>): ListClusterMasterSnapshotTasksResponse;
    withStatus(status: SnapshotTaskStatus): ListClusterMasterSnapshotTasksResponse;
}
//# sourceMappingURL=ListClusterMasterSnapshotTasksResponse.d.ts.map