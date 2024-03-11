import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowUpgradeWorkFlowResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: Metadata;
    spec?: WorkFlowSpec;
    status?: WorkFlowStatus;
    constructor();
    withKind(kind: string): ShowUpgradeWorkFlowResponse;
    withApiVersion(apiVersion: string): ShowUpgradeWorkFlowResponse;
    withMetadata(metadata: Metadata): ShowUpgradeWorkFlowResponse;
    withSpec(spec: WorkFlowSpec): ShowUpgradeWorkFlowResponse;
    withStatus(status: WorkFlowStatus): ShowUpgradeWorkFlowResponse;
}
//# sourceMappingURL=ShowUpgradeWorkFlowResponse.d.ts.map