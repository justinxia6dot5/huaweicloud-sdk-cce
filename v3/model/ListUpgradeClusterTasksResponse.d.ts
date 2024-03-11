import { UpgradeTaskMetadata } from './UpgradeTaskMetadata';
import { UpgradeTaskResponseBody } from './UpgradeTaskResponseBody';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListUpgradeClusterTasksResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: UpgradeTaskMetadata;
    items?: Array<UpgradeTaskResponseBody>;
    constructor();
    withApiVersion(apiVersion: string): ListUpgradeClusterTasksResponse;
    withKind(kind: string): ListUpgradeClusterTasksResponse;
    withMetadata(metadata: UpgradeTaskMetadata): ListUpgradeClusterTasksResponse;
    withItems(items: Array<UpgradeTaskResponseBody>): ListUpgradeClusterTasksResponse;
}
//# sourceMappingURL=ListUpgradeClusterTasksResponse.d.ts.map