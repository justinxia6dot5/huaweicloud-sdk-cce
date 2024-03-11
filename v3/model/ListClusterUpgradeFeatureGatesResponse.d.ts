import { Metadata } from './Metadata';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListClusterUpgradeFeatureGatesResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: Metadata;
    upgradeFeatureGates?: {
        [key: string]: string;
    };
    constructor();
    withApiVersion(apiVersion: string): ListClusterUpgradeFeatureGatesResponse;
    withKind(kind: string): ListClusterUpgradeFeatureGatesResponse;
    withMetadata(metadata: Metadata): ListClusterUpgradeFeatureGatesResponse;
    withUpgradeFeatureGates(upgradeFeatureGates: {
        [key: string]: string;
    }): ListClusterUpgradeFeatureGatesResponse;
}
//# sourceMappingURL=ListClusterUpgradeFeatureGatesResponse.d.ts.map