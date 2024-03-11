import { AddonInstance } from './AddonInstance';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListAddonInstancesResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    items?: Array<AddonInstance>;
    constructor();
    withKind(kind: string): ListAddonInstancesResponse;
    withApiVersion(apiVersion: string): ListAddonInstancesResponse;
    withItems(items: Array<AddonInstance>): ListAddonInstancesResponse;
}
//# sourceMappingURL=ListAddonInstancesResponse.d.ts.map