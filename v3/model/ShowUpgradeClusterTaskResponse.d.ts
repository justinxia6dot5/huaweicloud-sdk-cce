import { UpgradeTaskMetadata } from './UpgradeTaskMetadata';
import { UpgradeTaskSpec } from './UpgradeTaskSpec';
import { UpgradeTaskStatus } from './UpgradeTaskStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowUpgradeClusterTaskResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: UpgradeTaskMetadata;
    spec?: UpgradeTaskSpec;
    status?: UpgradeTaskStatus;
    constructor();
    withApiVersion(apiVersion: string): ShowUpgradeClusterTaskResponse;
    withKind(kind: string): ShowUpgradeClusterTaskResponse;
    withMetadata(metadata: UpgradeTaskMetadata): ShowUpgradeClusterTaskResponse;
    withSpec(spec: UpgradeTaskSpec): ShowUpgradeClusterTaskResponse;
    withStatus(status: UpgradeTaskStatus): ShowUpgradeClusterTaskResponse;
}
//# sourceMappingURL=ShowUpgradeClusterTaskResponse.d.ts.map