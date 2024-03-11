import { NodePoolResp } from './NodePoolResp';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListNodePoolsResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    items?: Array<NodePoolResp>;
    constructor();
    withKind(kind: string): ListNodePoolsResponse;
    withApiVersion(apiVersion: string): ListNodePoolsResponse;
    withItems(items: Array<NodePoolResp>): ListNodePoolsResponse;
}
//# sourceMappingURL=ListNodePoolsResponse.d.ts.map