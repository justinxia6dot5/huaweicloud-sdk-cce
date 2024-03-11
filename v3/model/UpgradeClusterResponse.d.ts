import { UpgradeCluserResponseMetadata } from './UpgradeCluserResponseMetadata';
import { UpgradeResponseSpec } from './UpgradeResponseSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class UpgradeClusterResponse extends SdkResponse {
    metadata?: UpgradeCluserResponseMetadata;
    spec?: UpgradeResponseSpec;
    constructor();
    withMetadata(metadata: UpgradeCluserResponseMetadata): UpgradeClusterResponse;
    withSpec(spec: UpgradeResponseSpec): UpgradeClusterResponse;
}
//# sourceMappingURL=UpgradeClusterResponse.d.ts.map