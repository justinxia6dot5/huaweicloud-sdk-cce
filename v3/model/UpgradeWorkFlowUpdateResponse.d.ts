import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class UpgradeWorkFlowUpdateResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: Metadata;
    spec?: WorkFlowSpec;
    status?: WorkFlowStatus;
    constructor();
    withKind(kind: string): UpgradeWorkFlowUpdateResponse;
    withApiVersion(apiVersion: string): UpgradeWorkFlowUpdateResponse;
    withMetadata(metadata: Metadata): UpgradeWorkFlowUpdateResponse;
    withSpec(spec: WorkFlowSpec): UpgradeWorkFlowUpdateResponse;
    withStatus(status: WorkFlowStatus): UpgradeWorkFlowUpdateResponse;
}
//# sourceMappingURL=UpgradeWorkFlowUpdateResponse.d.ts.map