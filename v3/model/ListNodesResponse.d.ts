import { Node } from './Node';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListNodesResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    items?: Array<Node>;
    constructor();
    withKind(kind: string): ListNodesResponse;
    withApiVersion(apiVersion: string): ListNodesResponse;
    withItems(items: Array<Node>): ListNodesResponse;
}
//# sourceMappingURL=ListNodesResponse.d.ts.map