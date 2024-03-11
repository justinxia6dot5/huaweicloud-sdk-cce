import { Metadata } from './Metadata';
import { UpgradePath } from './UpgradePath';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListClusterUpgradePathsResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: Metadata;
    upgradePaths?: Array<UpgradePath>;
    constructor();
    withApiVersion(apiVersion: string): ListClusterUpgradePathsResponse;
    withKind(kind: string): ListClusterUpgradePathsResponse;
    withMetadata(metadata: Metadata): ListClusterUpgradePathsResponse;
    withUpgradePaths(upgradePaths: Array<UpgradePath>): ListClusterUpgradePathsResponse;
}
//# sourceMappingURL=ListClusterUpgradePathsResponse.d.ts.map