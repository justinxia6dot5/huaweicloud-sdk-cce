import { Partition } from './Partition';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListPartitionsResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    items?: Array<Partition>;
    constructor();
    withKind(kind: string): ListPartitionsResponse;
    withApiVersion(apiVersion: string): ListPartitionsResponse;
    withItems(items: Array<Partition>): ListPartitionsResponse;
}
//# sourceMappingURL=ListPartitionsResponse.d.ts.map