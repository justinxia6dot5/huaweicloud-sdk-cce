import { Metadata } from './Metadata';
import { UpgradeInfoSpec } from './UpgradeInfoSpec';
import { UpgradeInfoStatus } from './UpgradeInfoStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowClusterUpgradeInfoResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: Metadata;
    spec?: UpgradeInfoSpec;
    status?: UpgradeInfoStatus;
    constructor();
    withKind(kind: string): ShowClusterUpgradeInfoResponse;
    withApiVersion(apiVersion: string): ShowClusterUpgradeInfoResponse;
    withMetadata(metadata: Metadata): ShowClusterUpgradeInfoResponse;
    withSpec(spec: UpgradeInfoSpec): ShowClusterUpgradeInfoResponse;
    withStatus(status: UpgradeInfoStatus): ShowClusterUpgradeInfoResponse;
}
//# sourceMappingURL=ShowClusterUpgradeInfoResponse.d.ts.map