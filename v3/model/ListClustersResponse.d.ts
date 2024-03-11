import { Cluster } from './Cluster';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListClustersResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    items?: Array<Cluster>;
    constructor();
    withKind(kind: string): ListClustersResponse;
    withApiVersion(apiVersion: string): ListClustersResponse;
    withItems(items: Array<Cluster>): ListClustersResponse;
}
//# sourceMappingURL=ListClustersResponse.d.ts.map