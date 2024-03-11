import { UpgradeWorkFlow } from './UpgradeWorkFlow';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListUpgradeWorkFlowsResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    items?: UpgradeWorkFlow;
    constructor();
    withKind(kind: string): ListUpgradeWorkFlowsResponse;
    withApiVersion(apiVersion: string): ListUpgradeWorkFlowsResponse;
    withItems(items: UpgradeWorkFlow): ListUpgradeWorkFlowsResponse;
}
//# sourceMappingURL=ListUpgradeWorkFlowsResponse.d.ts.map