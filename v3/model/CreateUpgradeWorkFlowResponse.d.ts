import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreateUpgradeWorkFlowResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: Metadata;
    spec?: WorkFlowSpec;
    status?: WorkFlowStatus;
    constructor();
    withKind(kind: string): CreateUpgradeWorkFlowResponse;
    withApiVersion(apiVersion: string): CreateUpgradeWorkFlowResponse;
    withMetadata(metadata: Metadata): CreateUpgradeWorkFlowResponse;
    withSpec(spec: WorkFlowSpec): CreateUpgradeWorkFlowResponse;
    withStatus(status: WorkFlowStatus): CreateUpgradeWorkFlowResponse;
}
//# sourceMappingURL=CreateUpgradeWorkFlowResponse.d.ts.map